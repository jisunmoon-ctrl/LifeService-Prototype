# 이사 통합 서비스 — 플로우/상태 스펙 (리팩토링)

> 상태: **레거시 상세 스펙(하위 참조 문서)**  
> 위계 기준: `docs/guide/README.md`  
> 상위 가이드: `docs/guide/c-preview-control-panel-ui.md`

> 문서 위계: **c 프리뷰 외 컨트롤 패널 UI 관리**  
> 통합 가이드: `docs/guide/c-preview-control-panel-ui.md`

> 버전: v1.1  
> 최종 수정일: 2026-04-08  
> 기준: Figma `H7fGNdnmDfxoOmCWJETY3T`

---

## 0. 문서 목적

- 화면 전이, 상태 저장, 검증, API 계약을 **구현 관점에서 단일 정의**한다.
- 화면 레이아웃 상세는 `02-screen-structure.md`를 참조한다.
- 컴포넌트/토큰 계약은 `01-component-spec.md`를 참조한다.
- 문서 탐색 시작은 항상 `docs/guide/README.md`에서 진행한다.

---

## 1. 플로우 요약

```text
Hub(1/2) → 서비스선택(3) → 통합입력(4) → 일정매칭(5) → 확인/결제(6)
```

진입 분기:
- `hasRegisteredMoving === false` → Screen 1
- `hasRegisteredMoving === true`  → Screen 2

---

## 2. 전이 규칙

| From | To | Trigger | Condition |
|---|---|---|---|
| 1, 2 | 3 | 서비스 카드 탭 | 없음 |
| 3 | 4 | 다음 | `selectedServices.length > 0` |
| 4 | 5 | 다음 | 활성 탭 필수값 충족 |
| 5 | 6 | 일정 확정하기 | 없음 |
| 6 | 결제 | 결제하기 | 없음 |

뒤로가기:
- 4 → 3, 5 → 4, 6 → 5
- 뒤로 이동 시 입력 상태 유지

완료:
- 결제 성공 시 플로우 상태 초기화 후 허브 복귀

---

## 3. 상태 모델 (단일 스토어)

```ts
type ServiceType = "이사" | "입주청소" | "인터넷설치" | "설치수리" | "가전렌탈";
type FormTabType = "moving" | "internet" | "repair";

interface AddressInfo {
  address: string;
  detailAddress: string;
  floor: string | null;
  elevator: "yes" | "no" | null;
}

interface MovingFormData {
  movingDate: Date | null;
  departure: AddressInfo;
  arrival: AddressInfo;
}

interface InternetFormData {
  provider: string | null;
  product: string | null;
  installDate: Date | null;
}

interface RepairFormData {
  items: string[];
  detail: string;
}

interface ScheduleItem {
  id: string;
  service: ServiceType;
  date: Date;
  time: string; // "오전 9:00"
  color: string;
  dOffset: number;
  dLabel: string;
  isEditable: boolean;
}

interface MovingServiceStore {
  hasRegisteredMoving: boolean;
  movingDate: Date | null;
  selectedServices: ServiceType[];
  activeFormTab: FormTabType;
  movingForm: MovingFormData;
  internetForm: InternetFormData;
  repairForm: RepairFormData;
  scheduleItems: ScheduleItem[];
  estimatedTotal: number;
  bundleDiscount: number;

  setMovingDate(date: Date): void;
  toggleService(service: ServiceType): void;
  setActiveFormTab(tab: FormTabType): void;
  updateMovingForm(data: Partial<MovingFormData>): void;
  updateInternetForm(data: Partial<InternetFormData>): void;
  updateRepairForm(data: Partial<RepairFormData>): void;
  setScheduleItems(items: ScheduleItem[]): void;
  updateScheduleItem(id: string, data: Partial<ScheduleItem>): void;
  resetAll(): void;
}
```

---

## 4. 파생 로직

### 4-1. 서비스 → 탭 매핑

```ts
function getFormTabs(selected: ServiceType[]): FormTabType[] {
  const tabs: FormTabType[] = [];
  if (selected.some((s) => ["이사", "입주청소"].includes(s))) tabs.push("moving");
  if (selected.includes("인터넷설치")) tabs.push("internet");
  if (selected.some((s) => ["설치수리", "가전렌탈"].includes(s))) tabs.push("repair");
  return tabs;
}
```

### 4-2. 일정 자동 생성

```ts
const SCHEDULE_RULES = {
  입주청소:   { dOffset: -3, time: "오전 10:00", color: "#00C471" },
  인터넷설치: { dOffset: -2, time: "오후 2:00",  color: "#7B61FF" },
  이사:       { dOffset:  0, time: "오전 9:00",  color: "#0AA5FF" },
  가전렌탈:   { dOffset:  0, time: "오후 1:00",  color: "#FFAA00" },
  설치수리:   { dOffset:  1, time: "오전 10:00", color: "#FF3B30" },
} as const;
```

정렬 규칙:
- 날짜 오름차순 → 동일 날짜는 시간 오름차순

---

## 5. 검증 규칙

## 5-1. Screen 3 → 4

```ts
selectedServices.length > 0
```

## 5-2. Screen 4 → 5

활성 탭 기준 필수값:
- `moving`: `movingDate`, `departure.address`, `arrival.address`
- `internet`: `provider`
- `repair`: `items.length > 0`

```ts
function canProceedToSchedule(store: MovingServiceStore): boolean {
  return getFormTabs(store.selectedServices).every((tab) => {
    if (tab === "moving") {
      return !!(
        store.movingForm.movingDate &&
        store.movingForm.departure.address &&
        store.movingForm.arrival.address
      );
    }
    if (tab === "internet") return store.internetForm.provider !== null;
    return store.repairForm.items.length > 0;
  });
}
```

---

## 6. 에러/로딩 정책

로딩:
- 견적 계산(4→5): 전체 오버레이
- 일정 확정(5→6): 버튼 로딩
- 결제(6): 버튼 로딩

에러:
- 네트워크: 토스트 + 재시도
- 견적 실패: 인라인 에러 + 재시도
- 일정 충돌: 시간 재선택 유도
- 결제 실패: 다이얼로그 + 재시도

---

## 7. API 계약 (구현 최소 세트)

### 7-1. 통합 견적

- `POST /api/v1/estimates/bundle`
- 입력: 서비스 목록 + 주소/일정 + 옵션(인터넷/수리)
- 출력: 항목별 견적 + 총합 + 추천 일정

### 7-2. 일정 확정

- `POST /api/v1/schedules/confirm`
- 입력: `estimateId` + 확정 일정 목록
- 출력: `orderId`, 결제금액, 확정 항목

### 7-3. 결제

- `POST /api/v1/payments`
- 입력: `orderId`, 결제수단, 금액

---

## 8. 구현 체크리스트

- [ ] 전이 조건이 UI 비활성/활성과 정확히 일치한다.
- [ ] 탭 전환 시 폼 입력값이 유지된다.
- [ ] 일정 자동생성 후 정렬 규칙이 지켜진다.
- [ ] 뒤로가기 시 Screen별 상태가 보존된다.
- [ ] 결제 완료 시 `resetAll()`이 호출된다.
