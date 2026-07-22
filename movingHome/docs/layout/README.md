# 주요 페이지별 responsive 레이아웃 패턴 — movingHome

기준 프리셋: Mobile `375×720` · Tablet `768` · Desktop `1024`. 콘텐츠는 mobile-first 설계로,
Tablet/Desktop 프레임에서는 동일 레이아웃이 가로로 확장된다.

| 주요 페이지 | Mobile (<768) | Tablet/Desktop (≥768) | 구현 |
|---|---|---|---|
| ① 이사홈 (단일 스크롤) | 단일 컬럼 · gutter 20px · 바로가기 카드 세로 스택 · 꿀팁 가로 스크롤 · sticky 필터 행 | 동일 스택이 가로 확장 (프레임 `overflow-hidden`) | [`flows/b2c/moving-home/components/MovingHome.tsx`](../../src/app/flows/b2c/moving-home/components/MovingHome.tsx) |
| ② 콘텐츠 상세 | sticky 상단 바 → 본문 블록 → sticky 댓글 바 | 본문 폭 확장 | [`flows/b2c/moving-home/ContentDetailScreen.tsx`](../../src/app/flows/b2c/moving-home/ContentDetailScreen.tsx) |
| ③ 견적 신청 | empty state 중앙 정렬 | 동일 | [`flows/b2c/moving-home/QuoteScreen.tsx`](../../src/app/flows/b2c/moving-home/QuoteScreen.tsx) |
| 필터 시트 (지역/이사타입) | 바텀시트 | 바텀시트 유지 | [`components/RegionFilterSheet.tsx`](../../src/app/flows/b2c/moving-home/components/RegionFilterSheet.tsx) · [`FilterBottomSheet.tsx`](../../src/app/flows/b2c/moving-home/components/FilterBottomSheet.tsx) |

섹션별 상세(스택 순서·spacing·스크롤 동작)는 [LAYOUT_GUIDE.md](LAYOUT_GUIDE.md) 참조.
