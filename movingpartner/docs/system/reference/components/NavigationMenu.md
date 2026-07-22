# NavigationMenu (TopNavigation / BottomNavigation) — IA 메뉴

**역할**: 이사 파트너센터 전역 IA. 단일 스키마를 viewport 로 두 형태 렌더.
- `createTopMenuSchema` → desktop TopNavigation (md+)
- `createBottomMenuSchema` → mobile BottomNavigation (<md)

**메뉴 (provenance: repo)**

| 메뉴 | route | desktop | mobile |
|---|---|---|---|
| 오더 | /moving/steps | ✓ | ✓ |
| 채팅 | /chatting/list | ✓ | ✓ |
| 일정마감 | /moving/schedule | ✓ | ✓ |
| 캐시 | /moving/payment/cash | ✓ | ✓ |
| 마이페이지 | /moving/my | ✗ | ✓ |
| 리뷰 | /moving/reviews | ✓ (FF) | ✗ |

**활성 표시 (프로토타입)**
- **TopNav**: underline + `foreground-brand` (#00A1FF) — 아이콘 없음
- **BottomNav**: **line↔filled 아이콘 교체** + 컬러 — 활성 `foreground`(#141414)·filled / 비활성 `foreground-weak`(#8C8C8C)·line (PTN-LIST-09b)

**ODS 아이콘 매핑** (24×24, viewBox 0 0 480 480):

| 메뉴 | line (비활성) | filled (활성) |
|---|---|---|
| 오더 | IconTextDocument | IconTextDocumentFilled |
| 채팅 | IconBubble | IconBubbleFilled |
| 일정마감 | IconCalendar | IconCalendarFilled |
| 캐시 | IconWonSignCircle2 | IconWonSignCircleFilled |
| 마이페이지 | IconPerson | IconPersonFilled |

**견적서 등록 액션** (`ver=estimate` only): TopNav 우측 `.gnb-capture` — 라벨 `견적서 등록`. prod ver 에서 hidden.

**높이**: TopNav 71 · BottomNav 54 (`LAYOUT`).

**do**: 단일 스키마 + viewport 분기. **don't**: 데스크탑/모바일 메뉴 각각 하드코딩.

**provenance**: repo `layouts/moving/{TopNavigation,BottomNavigation,utils}.tsx` · 프로토타입 `renderTopNav`/`renderBottomNav`
