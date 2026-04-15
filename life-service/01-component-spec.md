# 이사 통합 서비스 — 컴포넌트 스펙 (리팩토링)

> 상태: **레거시 상세 스펙(하위 참조 문서)**  
> 위계 기준: `docs/guide/README.md`  
> 상위 가이드: `docs/guide/b-2-global-components-structure.md`

> 문서 위계: **b-2 글로벌 컴포넌트 구조 정의**  
> 통합 가이드: `docs/guide/b-2-global-components-structure.md`

> 버전: v1.1  
> 최종 수정일: 2026-04-08  
> 기준: Figma `H7fGNdnmDfxoOmCWJETY3T`

---

## 0. 이 문서의 역할

- 화면 구현 시 필요한 **컴포넌트 계약(Props / 상태 / 스타일 규칙)**을 정의한다.
- 토큰 원본값은 `docs/design-system/foundation-tokens.md`를 단일 소스로 사용한다.
- 화면 배치/흐름은 `02-screen-structure.md`, 상태 전이/검증은 `03-flow-spec.md`를 참조한다.
- 문서 탐색 시작은 항상 `docs/guide/README.md`에서 진행한다.

---

## 1. 구현 기준 요약

### 1-1. 토큰 사용 원칙

- 컬러/타이포/간격/쉐도우는 `--ods-*` 변수만 사용한다.
- 임의 hex, 임의 spacing, 임의 box-shadow 추가를 금지한다.
- 폰트는 Pretendard, 기본 letter-spacing은 `-0.3px`를 유지한다.

### 1-2. 공통 사이징 규칙

- 모바일 기준 폭: `375`
- 터치 타겟 최소: `24x24`
- 카드 라운드: `12`
- 입력 라운드: `4`
- 하단 고정영역은 safe-area를 고려한다.

---

## 2. 레이아웃 컴포넌트

### 2-1. `StatusBar`

- 목적: iOS 상태바 표시(시간/신호/Wi-Fi/배터리)
- 높이: `44`
- Props: 없음(표시 전용)

### 2-2. `TopNavigation`

- 목적: 상단 검색/타이틀 네비게이션
- 높이: `44`, 좌우 패딩 `16`
- Variant:
  - `search`: 햄버거 + 검색필드 + 우측 3아이콘
  - `default`: 뒤로가기 + 타이틀 + 우측 액션
- 핵심 Props:
  - `variant: "search" | "default"`
  - `title?: string`
  - `onBack?: () => void`
  - `rightItems?: ReactNode[]`

### 2-3. `BottomNavigation`

- 목적: 5탭 하단 내비게이션
- 구조: 아이콘(24) + 라벨(10/14)
- Props:
  - `activeTab: "home" | "community" | "store" | "experts" | "my"`
  - `onTabChange: (tab) => void`
- 상태:
  - active 탭은 filled 아이콘 사용
  - active 라벨은 서비스 기준 색상 사용(문서 규칙 우선)

### 2-4. `StickyCtaBar`

- 목적: 하단 고정 CTA 영역
- 기본: 상단 라운드 + 그림자 + safe-area padding
- Props:
  - `children: ReactNode`
  - `showDragHandle?: boolean`
  - `shadow?: boolean`

### 2-5. `FloatingFab`

- 목적: 신청내역/채팅 등 플로팅 액션
- 현재 프로토타입에서는 노출 여부가 화면 정책에 따라 달라질 수 있음
- Props:
  - `items: { key: string; label: string; icon: ReactNode }[]`
  - `onItemPress: (key: string) => void`

---

## 3. 폼 컴포넌트

### 3-1. `TextInput`

- Props:
  - `placeholder`, `value`, `onChange`
  - `disabled?`, `error?`, `leftIcon?`
- 상태:
  - `default`, `filled`, `error`, `disabled`
- 규격:
  - 높이 `50`
  - border `1`
  - radius `4`

### 3-2. `SelectField`

- `TextInput` 확장 + 우측 ChevronDown
- Props:
  - `placeholder`, `value`, `options`, `onSelect`, `error?`

### 3-3. `DateInput`

- `TextInput` 확장 + 좌측 캘린더 아이콘
- Props:
  - `placeholder = "이사 예정일"`
  - `value: Date | null`
  - `onSelect: (date) => void`

### 3-4. `SelectButton`

- 목적: 단일 선택 토글(있음/없음, 통신사 등)
- Props:
  - `label`
  - `isSelected`
  - `onPress`
- 규격:
  - 높이 `44`
  - radius `4`

### 3-5. `CheckboxItem`

- 목적: 멀티 선택 리스트 항목
- Props:
  - `label`
  - `checked`
  - `onToggle`
- 규격:
  - 카드 radius `8`
  - 체크박스 `20x20`

### 3-6. `BoxButton`

- 목적: CTA 버튼(단독/2버튼 배치)
- Props:
  - `title`
  - `variant: "filled" | "outlined"`
  - `disabled?`
  - `onPress`
  - `flex?`

---

## 4. 데이터 표시 컴포넌트

### 4-1. `ServiceCard`

- 변형: `large | small | row`
- 공통: border + radius 12 + shadow
- Props:
  - `title`, `description?`, `size`, `icon?`, `onPress`

### 4-2. `WeekCalendarStrip`

- 목적: 허브 상단 주간 캘린더
- Props:
  - `selectedDate`, `movingDate`, `onDateSelect`
  - `isExpanded`, `onToggleExpand`

### 4-3. `ScheduleCard`

- 목적: 일정 자동 매칭 카드
- Props:
  - `service`, `date`, `time`, `color`, `dOffset`, `onPress`

### 4-4. `PromoBanner`

- 목적: 통합 입력폼 상단 혜택 배너
- Props:
  - `title`, `subtitle`, `icon`

### 4-5. `TabBar`

- 목적: 서비스별 폼 탭 전환
- Props:
  - `tabs: string[]`
  - `activeIndex: number`
  - `onTabChange: (index) => void`

---

## 5. 아이콘 규칙

- 네비게이션 아이콘은 `24x24` 고정
- chevron:
  - 카드 우측/섹션 더보기: `12x12` (디자인 기준)
  - 필요 시 별도 명시된 영역만 `16x16` 사용
- 활성/비활성 아이콘은 **파일 분리(line/filled)**를 우선한다.

---

## 6. 구현 체크리스트

- [ ] 모든 컴포넌트가 `--ods-*` 토큰만 사용한다.
- [ ] 컴포넌트별 상태(활성/비활성/에러)가 시각적으로 구분된다.
- [ ] 네비게이션 아이콘은 24 고정으로 출력된다.
- [ ] 탭 전환/버튼 활성화 조건이 `03-flow-spec.md`와 일치한다.
- [ ] 모바일(375) 기준 레이아웃이 Figma와 정렬된다.
