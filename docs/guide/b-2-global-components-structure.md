# b-2. 글로벌 컴포넌트 구조 정의

목적: GNB/네비게이션 등 글로벌 컴포넌트의 구조, 상태, 책임을 정의합니다.

## 글로벌 컴포넌트 범위

- `StatusBar`
- `TopNavigation` (검색형/기본형)
- `BottomNavigation` (5탭)
- `ScrollCarousel` (상단 보조 sticky 바)
- `StickyCtaBar` / `FloatingFab`

## 기본 구조

```text
App Shell
├─ Header
│  ├─ StatusBar
│  └─ TopNavigation
├─ Main Content
├─ Overlay Controls (선택)
│  ├─ ScrollCarousel
│  └─ FloatingFab / BottomPromo
└─ BottomNavigation
```

## 상태/전환 규칙

- TopNavigation
  - 스크롤 시 고정 유지
  - 필요 시 `is-scrolled` 시각 상태(보더/쉐도우) 적용
- BottomNavigation
  - 단일 active 탭 유지
  - active 탭 icon: filled, inactive 탭 icon: line
  - 탭 클릭 시 페이지 콘텐츠 전환 가능(예: empty view)

## 파일/문서 참조

- 구현 기준:
  - `prototype/hub.html`
  - `prototype/assets/hub.css`
  - `prototype/assets/hub.js`
- 위계 기준:
  - `docs/guide/README.md`
  - `docs/guide/a-claude-ods-foundation-layout.md`
- 상세 스펙 레퍼런스(레거시 상세본):
  - `01-component-spec.md`
  - `docs/spec-experts-home-mobile.md`

## 계약 규칙 (요약)

- 아이콘 크기: 24 고정
- chevron/보조 아이콘: 카드/섹션 패턴별 별도 규격 문서 준수
- 고정 UI는 콘텐츠 가림 방지를 위한 안전 패딩 포함
