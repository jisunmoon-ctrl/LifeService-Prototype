# 책임보장 견적 발송 flow

> **패널 위치**: `B2B` → `책임보장 견적 발송 flow` (`guarantee-estimate-flow`)
> **구현**: [`src/app/flows/b2b/guarantee-estimate/`](../../../../src/app/flows/b2b/guarantee-estimate)

파트너 사장님센터(이사) — 오더 확인부터 견적 발송까지의 파트너 측 플로우.

## 화면

| 패널 screen id | 화면 | 구현 |
|---|---|---|
| `order` | ① 오더 (상담 목록) | `PartnerOrderView` |
| `order_detail` | ② 상담 상세 | `PartnerOrderDetailView` |
| `chatting` | ③ 채팅 | `PartnerSimpleViews` → `PartnerChattingView` |
| `schedule` | ④ 일정마감 | `PartnerSimpleViews` → `PartnerScheduleView` |
| `cash` | ⑤ 캐시 | `PartnerSimpleViews` → `PartnerCashView` |
| `my` | ⑥ 마이페이지 | `PartnerSimpleViews` → `PartnerMyView` |

- 진입점: `FeatureApp.tsx` (`?preview=1&screen=<id>`) → `PartnerShell` + 화면
- 크롬: `components/PartnerShell` (topnav/appbar/bottomnav/footer) · `components/NavigationMenu` · `components/OrderCard` · `components/ListTab` · `components/StepStatusBadge`
- 인-피처 네비게이션은 `postMessage({__mpNav, __pvNav, screen})` 로 패널과 동기화

## 관련 문서

- [PRD — 견적 단일등록](PRD_Quotation_단일등록.md) · [PRD — 리뷰](PRD_Review.md)
- [FLOW.md](../../FLOW.md) · [레이아웃 패턴](../../../layout/LAYOUT_GUIDE.md)
- 참조 스펙: [`docs/system/reference/`](../../../system/reference) (IA · persona · 컴포넌트 스펙 · pattern-rules)
