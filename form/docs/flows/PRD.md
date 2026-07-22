# PRD — 이사 견적 입력폼 플로우

> **프로젝트**: [템플릿 프로토타이핑] 입력폼 플로우
> **메뉴 트리 루트**: `form`
> **프레임**: 375×812 (Mobile) 기준 / Tablet 768 / Desktop 1024 프리뷰
> **관련 문서**: [`../FLOW.md`](../FLOW.md) · [`../LAYOUT_GUIDE.md`](../LAYOUT_GUIDE.md) · [`../System.md`](../System.md)

## 1. 목적

이사 견적 신청 과정의 입력폼 UX를 여러 시안으로 비교 검증하기 위한 프로토타입.
동일 화면을 여러 버전(Variant)으로 만들어 비교하고 더 나은 디자인을 선택한다.

## 2. 메뉴 트리 (플로우 구조)

`App.tsx`의 `PANEL_TABS: PanelTab[]` 로 정의되며, 우측 컨트롤 패널(`PrototypeNavMenu`) 메뉴 **상단 B2B/B2C 스위칭 탭** 하위에 플로우 그룹이 평평하게 배치된다.

### 2.1 B2C
- **시공신청 크로스셀링 flow** (`construction-crosssell`)
  - ① 시공 연락처 입력 → ② 이사+청소 크로스셀 제안 → ③ 출발지 → ④ 이사 타입 → ⑤ 신청 정보 확인 → ⑥ 매칭 리스트
- **견적신청퍼널 UX iteration** (`estimate-funnel-ux`)
  - ① 이사 홈 → ② 견적 정보 입력 → ③ 이삿짐 정보(목록+사진옵션) → ③-1 사진·영상 → ③-2 세부정보 → ④ 신청 정보 확인 → ⑤ 신청완료·크로스셀 → ⑥ 매칭 리스트
- **이사** (`moving-form`): 이사종류 → 이사일/시간대 → 출발지 → 도착지 → 이삿짐 입력 → 개인정보 (6단계 퍼널)
- **이사청소** (`cleaning-form`): 청소 희망일 → 청소 장소 정보 → 연락처 정보 → 연락처(입력완료)

### 2.2 B2B
- form 프로토타입은 B2B 플로우를 보유하지 않으므로 B2B 탭은 비활성(disabled)으로 노출된다.

> **시공 신청**(`construction-form`) 플로우는 메뉴에서 삭제됨. 화면 컴포넌트(`ConstructionFlowScreen`)와
> `construction_step*` 스위치 케이스는 크로스셀링 flow 의 이탈(back/exit) 타깃으로만 남겨둔다.

## 3. 핵심 검증 지점

| 영역 | 검증 내용 |
|---|---|
| 이사일 & 시간대 선택 | 시안 A(버튼 그리드 다중선택) vs 시안 B(Range Slider) 비교 |
| 이삿짐 입력 | 목록 선택 + 사진·영상 옵션 + 세부 정보 단계 분리 UX |
| 크로스셀 | 시공/이사 신청 후 이사+청소 크로스셀 제안 흐름의 자연스러움 |

## 4. 상태 관리

- `currentScreen` + `history[]` 기반 네비게이션 함수(`handleNavigate`/`handleGoBack`)
- 각 플로우 화면은 `initialStep` prop 으로 특정 단계 진입 지원
- `FormData` 구조 및 유효성 검증 규칙은 [`../FLOW.md`](../FLOW.md) §유효성 검증 참조

## 5. 범위 제외 (CLAUDE 공통 지침)

- GNB(웹 글로벌 내비게이션) · OS statusbar 는 프리뷰/QA 대상에서 제외 (feature 콘텐츠 영역만 재현)
- 모든 색·타이포·아이콘·컴포넌트는 ODS 토큰/컴포넌트 기준
