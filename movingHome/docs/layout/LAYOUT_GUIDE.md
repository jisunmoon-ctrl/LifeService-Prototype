# 레이아웃 가이드 — movingHome

이사홈 단일 페이지 프로토타입의 해상도 breakpoint별 레이아웃 패턴을 정의한다.

## 기준 & 프리뷰 해상도

- **디자인 기준**: 375px (Mobile, mobile-first)
- **프리뷰 프리셋** (`src/app/preview/previewConstants.ts`): Mobile `375×720` · Tablet `768` · Desktop `1024`
- **브레이크포인트 판정**: `w<768 → Mobile`, `w<1024 → Tablet`, `else Desktop`
- 콘텐츠는 mobile-first로 설계되었으며, Tablet/Desktop 프레임에서는 동일 레이아웃이 가로로 확장된다.

## 화면 구조 (단일 스크롤 페이지)

`MovingHomeV2` 는 세로 스택 단일 페이지로 구성된다.

| # | 섹션 | 설명 |
|---|---|---|
| 1 | `TopNavigation` | sticky 44px 상단 바 (뒤로가기 `IconArrowLeft`) |
| 2 | ATF 헤더 + 바로가기 카드 | 타이틀 "검증된 이사 파트너에게 비교견적 받기" + `ShortcutCard` ×2 (소형/원룸, 가정이사) → 각 `견적받기` |
| 3 | 꿀팁 모듈 | "이사 전 알아두면 좋을 꿀팁" — `TipCard` 가로 스크롤 (`CONTENT_ITEMS`) |
| 4 | PLP (파트너 목록) | 지역 하이라이트 헤딩 + sticky `FilterRow`(지역 칩 + 이사타입 칩) + `FilteredPartnerList`(무한 스크롤) |

## breakpoint별 레이아웃 패턴

### Mobile (< 768px, 기준 375)
- 단일 컬럼, 좌우 gutter 20px 내외
- 바로가기 카드: 세로 스택 2개
- 꿀팁: 가로 스크롤 캐러셀 (카드 폭 고정)
- FilterRow: sticky, 지역 칩 + 이사타입 칩 가로 배열
- 파트너 카드: 1열, 스크롤 진입 시 `IntersectionObserver` 로 추가 로드

### Tablet / Desktop (≥ 768px, 프리뷰용)
- 콘텐츠는 mobile 폭 기준으로 설계됨 → 프레임 확장 시 중앙 정렬 또는 가로 확장으로 표시
- 프리뷰 프레임(≥768)은 `overflow-hidden`, Mobile 프레임은 `overflow-y-auto` (스크롤은 프레임이 담당)

## 오버레이 화면

| 화면 | 레이아웃 |
|---|---|
| `ContentDetail` | sticky 뒤로/더보기 바 → 타이틀 → 작성자 행(팔로우) → `content.blocks`(텍스트+이미지) → 인게이지먼트 → sticky 댓글 바 |
| `QuoteEmpty` | "견적 신청 화면을 준비중이에요" empty state + 뒤로가기 |

## 범위 제외 (CLAUDE 공통 지침)

- 프리뷰 스튜디오/컨트롤 패널·OS statusbar·웹 GNB 는 feature 가 아니므로 레이아웃/QA 대상에서 제외.
