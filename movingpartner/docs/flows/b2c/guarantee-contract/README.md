# 책임보장 견적 계약 flow

> **패널 위치**: `B2C` → `책임보장 견적 계약 flow` (`guarantee-contract-flow`)
> **구현**: [`src/app/flows/b2c/guarantee-contract/`](../../../../src/app/flows/b2c/guarantee-contract)

고객 측 — 매칭된 파트너의 확정 견적을 확인하고 약관 동의 후 계약을 확정하는 플로우.
ODS(`@bucketplace/design-system`) 컴포넌트로 구현되며 파트너 크롬이 없다.

## 화면

| 패널 screen id | 화면 | 구현 | 진입 단계 |
|---|---|---|---|
| `customer` | ① 매칭 파트너 목록 · 견적 확인 | `CustomerApp` | `stage="list"` |
| `customer_terms` | ② 약관 동의 | `components/TermsAgreementModal` | `stage="terms"` |
| `customer_contracted` | ③ 계약 확정 | `CustomerApp` (계약 완료 + 스낵바) | `stage="contracted"` |

- 진입점: `FeatureApp.tsx` → `CUSTOMER_STAGES[screen]` → `<CustomerApp stage={...} />`
- 셸: [`shared/prototype-ods/`](../../../../src/app/shared/prototype-ods) (ScreenShell · TopNavigation · ActionDock · Overlays)
- 데스크탑(≥768)은 중앙 480px 카드 레이아웃, 모바일은 ScreenShell — [`shared/hooks/useMediaQuery`](../../../../src/app/shared/hooks/useMediaQuery.ts)

## 관련 문서

- [FLOW.md](../../FLOW.md) — 고객단 플로우 동작 · [레이아웃 패턴](../../../layout/LAYOUT_GUIDE.md)
- 약관 데이터: [`src/app/data/custTerms.ts`](../../../../src/app/data/custTerms.ts)
