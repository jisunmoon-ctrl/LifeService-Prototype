# 이사홈

> **패널 위치**: `B2C` → `이사홈` (`moving-home-flow`)
> **구현**: [`src/app/flows/b2c/moving-home/`](../../../../src/app/flows/b2c/moving-home)

이사 서비스 홈. 단일 스크롤 페이지 + 2개 드릴인 오버레이로 구성된다.

## 화면

| 패널 screen id | 화면 | 구현 |
|---|---|---|
| `home` | ① 이사홈 (메인 · 단일 페이지) | `MovingHomeScreen` → `components/MovingHome` |
| `content` | ② 이사 꿀팁 콘텐츠 상세 | `ContentDetailScreen` (`contentId` 로 진입) |
| `quote` | ③ 견적 신청 | `QuoteScreen` |

- 진입점: `App.tsx` — 패널 선택(`handleNavSelect`) 또는 홈 내 인터랙션(`onContentSelect` / `onQuoteRequest`)
- 홈은 상태 보존을 위해 마운트 유지, 오버레이 시 `hidden` 처리
- 필터/칩 컴포넌트: `components/FilterBottomSheet` · `RegionFilterSheet` · `FilterChip` · `SlotText`
- 데이터: [`src/app/data/`](../../../../src/app/data) (콘텐츠·파트너·지역 mock), 생성 스크립트는 [`scripts/`](../../../../scripts)

## 관련 문서

- [FLOW.md](FLOW.md) — 플로우 동작 상세 · [PRD.md](PRD.md)
- [레이아웃 패턴](../../../layout/LAYOUT_GUIDE.md) — 섹션 구조 · breakpoint 패턴
