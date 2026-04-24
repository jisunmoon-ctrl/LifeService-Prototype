# e. 프리뷰 레이아웃 & 패널 공통 스펙

목적: 본 문서는 `prototype/index.html` 기반 AB 프리뷰 셸과 `prototype/hub.html` 기반 O2O 홈 패널 구조를 다른 프로젝트에서 동일하게 재구현하기 위한 구현 계약 문서입니다.

## 1) 적용 범위

- 프리뷰 셸(컨테이너, 플로팅 컨트롤, 리사이저, 상태바)
- 페이지/패널 전환 규칙
- 글로벌 네비게이션(상단/하단) 및 메뉴 구성
- UI 토큰, 타이포, 간격, 고정 레이어 정책

기준 구현:
- `prototype/index.html`
- `prototype/system/components/preview-shell.css`
- `prototype/system/components/preview-shell.js`
- `prototype/hub.html`
- `prototype/assets/hub.css`
- `prototype/assets/hub.js`

## 2) 정보 구조(IA) 및 메뉴 구성

### 2-1. 프리뷰 페이지 그룹

- 그룹 `O2O홈`
  - `O2O_HOME_PRE`: 신청전 (`./hub.html`)
  - `O2O_HOME_POST`: 신청후 (`./hub.html?view=post`)
- 그룹 `신청폼`
  - 이사신청, 시공업체신청, 부분시공 관련 랜딩/찾기, 렌탈, 제품설치, 입주청소
  - 외부 URL을 그대로 iframe src로 사용

### 2-2. 모바일 하단 GNB (5탭 고정)

순서/라벨/아이콘 매핑:
- 홈: `asset-gnb-house` / active `asset-gnb-house-filled`
- 집꾸미기: `asset-gnb-bubble` / active `asset-gnb-bubble-filled`
- 쇼핑: `asset-gnb-shopping-bag` (단일 아이콘)
- 인테리어/생활: `asset-gnb-sparkles-house` / active `asset-gnb-sparkles-house-filled`
- 마이페이지: `asset-gnb-person` / active `asset-gnb-person-filled`

아이콘 소스:
- `./assets/components/asset_gnb/asset-gnb-icons.svg#<symbol-id>`

### 2-3. 데스크톱 글로벌 메뉴

- 1차 탭(헤더): `커뮤니티`, `쇼핑`, `인테리어/생활`
- 2차 탭(서브): `홈`, `전체시공`, `부분시공`, `아파트시공사례`, `이사`, `입주청소`, `인터넷`, `렌탈`, `설치·수리`

## 3) 프리뷰 셸 레이아웃 스펙

## 3-1. 캔버스/프레임 기본값

- 프레임 기본: `375 x 812`
- 너비 범위: `360 ~ 1920`
- 높이 범위: `300 ~ 2000`
- CSS 변수
  - `--preview-content-width`
  - `--preview-content-height`
  - `--preview-side-padding` (모바일 16, 데스크톱 60)

### 3-2. 셸 구조

- 루트: `.ab-shell`
  - 폭: `min(100vw - 40px, 1600px)`
  - 높이: `calc(100vh - 40px)`
  - dark 배경/라운드/보더/섀도우
- 메인: `.preview-pane` (세로 플렉스)
- 중앙 스테이지: `.preview-stage` (스크롤 가능)
  - 프레임 양옆 수평 리사이저 + 하단 수직 리사이저 제공
- 상태 스트립: `.status-strip`
  - 표시값: `Frame: W × H`, `Breakpoint: Mobile|Tablet|Desktop`

### 3-3. 브레이크포인트 판정

- `<= 768`: Mobile
- `769 ~ 1279`: Tablet
- `>= 1280`: Desktop

### 3-4. 자동 높이 맞춤 규칙 (모바일 뷰)

- 윈도우 리사이즈 시, 현재 폭이 모바일인 경우 `fitMobileFrameToStageHeight()` 실행
- 계산 시 제외 대상
  - 상태 스트립 높이
  - 하단 리사이저 높이 + 마진
  - 스테이지 상/하 패딩
- 가용 영역에 375:812 비율을 유지해 프레임 크기 재산정

## 4) 패널/콘텐츠 전환 스펙

### 4-1. 탭 전환 계약

- 하단 `.nav-item`은 항상 단일 active 유지
- 클릭 시 처리:
  - 모든 탭 active 해제 + inactive 아이콘 적용
  - 선택 탭 active 부여 + active 아이콘 적용
  - 선택 탭이 `experts`이면 `panel-interior` 노출, 아니면 `empty-view` 노출

### 4-2. 오버레이 표시 규칙

- `experts` 활성 + 스크롤 조건 만족 시
  - `scroll-carousel` 노출
  - `fab` 노출 가능
  - `bottom-promo` 조건부 노출
- 비활성 탭에서는 위 오버레이 강제 숨김

### 4-3. 신청전/신청후 상태

- `body.hub-view--pre`: 신청전
- 신청후 전용 블록은 `.hub-post-only`로 분리
- 신청전에는 `body.hub-view--pre .hub-post-only { display:none !important; }`

## 5) UI 스타일 스펙 (핵심 토큰/규격)

### 5-1. Foundation 토큰

- 폰트: `Pretendard`
- 기본 자간: `-0.3px`
- 핵심 컬러:
  - `--ods-color-foreground`
  - `--ods-color-white`
  - `--ods-color-gray-50/150/400/900`
  - `--ods-color-genuine-blue-350`
- 핵심 섀도우:
  - `--ods-shadow-depth-10`
  - 카드 계열은 화면별 정의값 재사용 (`--ods-shadow-card`, `--ods-shadow-card-lg`, `--ods-shadow-ext-card`)

### 5-2. 주요 고정 규격

- 모바일 앱 컨테이너: `max-width: 375px`
- 하단 GNB 높이 영역:
  - 아이콘/라벨 바: `54px`
  - 홈 인디케이터 포함 별도 영역 유지
- GNB 아이콘: `24x24` 고정
- 헤더 기본 높이: `44px`
- 플로팅 컨트롤 트리거: `56x56` 원형
- 프리뷰 리사이저:
  - 좌/우: `14x80`
  - 하단: `120x14`

### 5-3. 반응형 전환

- `@media (min-width: 768px)`:
  - 모바일 header/bottom-nav 숨김
  - 데스크톱 글로벌 내비 표시
  - `--hub-side-padding: 60px`
  - `--hub-header-offset: 130px`

## 6) 접근성/상태 속성 계약

- 클릭 가능한 제어요소는 `button` 사용
- 드롭다운/메뉴 트리거:
  - `aria-haspopup`, `aria-expanded`, `aria-controls` 유지
- 프리뷰 프레임:
  - `iframe`에 `title` 필수
- 내비게이션:
  - `nav[aria-label]` 적용
- 숨김 처리:
  - `hidden` 속성과 CSS hidden 규칙을 함께 사용

## 7) 구현 체크리스트 (타 프로젝트 이식용)

- 프리뷰 셸
  - [ ] `preview-shell.css/js`와 동일한 DOM id/class 계약 유지
  - [ ] 프레임 크기 clamp, breakpoint 판정, mobile fit 로직 동일 구현
- 페이지 전환
  - [ ] 페이지 그룹/옵션 구조(`id`, `label`, `src`) 동일 인터페이스 유지
- 패널 전환
  - [ ] `experts` 탭 기준 콘텐츠 표시 규칙 동일
  - [ ] 오버레이 표시/숨김 타이밍 동일
- GNB
  - [ ] 5탭 순서/라벨/아이콘 심볼 매핑 동일
  - [ ] active/inactive 아이콘 토글 로직(`data-active-icon`, `data-inactive-icon`) 반영
- 스타일
  - [ ] ODS 토큰 우선 사용
  - [ ] 컨테이너 폭(375), 아이콘(24), 하단 safe area 패딩 규칙 유지

## 8) 비호환 방지 규칙

- `hidden` 요소에 강제 `display:flex`를 상시 부여하지 않음 (상태 토글 충돌 방지)
- 탭 수 변경 시 `grid-template-columns: repeat(5, 1fr)` 및 토글 로직을 함께 수정
- 아이콘 시스템을 SVG symbol로 사용할 경우, `img src` 기반 레거시와 혼용 가능하도록 토글 함수에서 분기 처리

