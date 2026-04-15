# 이사 통합 서비스 — 화면 구조 스펙 (리팩토링)

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

- 화면별 **정보 구조/컴포넌트 배치/표시 조건**을 정의한다.
- 상태 전이/검증/API는 `03-flow-spec.md`에서 단일 관리한다.
- 스타일 토큰/컴포넌트 계약은 `01-component-spec.md`를 참조한다.
- 문서 탐색 시작은 항상 `docs/guide/README.md`에서 진행한다.

---

## 1. 화면 인덱스

| Screen | 이름 | 역할 |
|---|---|---|
| 1 | 허브(미등록) | 생활서비스 진입, 서비스 인지 |
| 2 | 허브(+캘린더) | 이사일 등록 사용자용 허브 |
| 3 | 서비스 선택 | 통합 견적 대상 서비스 선택 |
| 4 | 통합 입력폼 | 서비스별 필수 정보 입력 |
| 5 | 일정 자동 매칭 | 추천 일정 확인/수정 |
| 6 | 신청 확인/결제 | 최종 요약 및 결제 |

---

## 2. 공통 레이아웃

모든 Screen은 아래 기본 구조를 따른다.

```text
StatusBar
TopNavigation
MainContent (screen별 가변)
BottomNavigation 또는 StickyCtaBar
```

### 공통 원칙

- 상단 네비와 본문은 시각적으로 분리한다.
- CTA가 있는 화면은 하단 safe-area를 확보한다.
- 스크롤 콘텐츠는 고정 하단 UI(CTA/BottomNavigation)에 가려지지 않아야 한다.

---

## 3. Screen별 구조

## 3-1. Screen 1 — 허브(미등록)

```text
StatusBar
TopNavigation(search)
ContentTabBar
ServiceCardGrid
추천 모듈(리뷰/상품/리뷰)
BottomNavigation(active: experts)
```

핵심 포인트:
- 탭: `추천`(비활성), `생활서비스`(활성)
- 카드: large/small/row 조합
- 서비스 카드 탭 시 Screen 3 이동

## 3-2. Screen 2 — 허브(+캘린더)

Screen 1에서 아래 블록만 추가:

```text
ContentTabBar
WeekCalendarStrip  ← 추가
ServiceCardGrid
```

표시 조건:
- `hasRegisteredMoving === true` 이면 Screen 2
- 아니면 Screen 1

## 3-3. Screen 3 — 서비스 선택

```text
StatusBar
TopNavigation(default, back)
타이틀(2줄)
CheckboxList(서비스)
StickyCtaBar
  └─ 다음 버튼
```

핵심 포인트:
- 다음 버튼은 1개 이상 선택 시 활성
- 뒤로가기 시 허브로 복귀

## 3-4. Screen 4 — 통합 입력폼

```text
StatusBar
TopNavigation(default, back)
PromoBanner
TabBar(선택 서비스 기반 동적)
Scrollable Form Content
StickyCtaBar(showDragHandle)
  ├─ 예상 견적 행
  └─ 다음 버튼
```

폼 블록 구성:
- 이사 견적: 이사일, 출발지, 도착지
- 인터넷 신청: 통신사/상품/설치일
- 설치 수리: 항목/상세요청

## 3-5. Screen 5 — 일정 자동 매칭

```text
StatusBar
TopNavigation(default, back)
타이틀/설명
D-day 배지
Timeline(ScheduleCard 리스트)
StickyCtaBar
  └─ 일정 확정하기
```

핵심 포인트:
- 카드 탭 시 날짜/시간 수정 UI(BottomSheet)

## 3-6. Screen 6 — 신청 확인/결제

```text
StatusBar
TopNavigation(default, back)
SuccessBanner
ConfirmItemList
총 예상 견적
StickyCtaBar
  ├─ 이전
  └─ 결제하기
```

핵심 포인트:
- 결제 완료 시 플로우 상태 리셋

---

## 4. 화면 간 데이터 전달(요약)

- Screen 3 → 4: `selectedServices`
- Screen 4 → 5: 폼 입력값 + 산출 견적
- Screen 5 → 6: 확정 일정
- Screen 6 완료: 전체 초기화

---

## 5. 구현 체크리스트

- [ ] Screen 1/2 전환 조건이 명확히 분기된다.
- [ ] Screen 3 선택 상태가 Screen 4 탭 구성에 반영된다.
- [ ] Screen 4/5/6에서 뒤로가기 시 입력 데이터가 유지된다.
- [ ] 고정 하단 UI와 스크롤 콘텐츠가 겹치지 않는다.
- [ ] 각 Screen의 컴포넌트는 `01-component-spec.md` 계약을 따른다.
