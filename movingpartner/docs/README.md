# movingpartner — 문서 인덱스

패널 위계(B2B/B2C 탭 → 플로우 → 화면)와 동일한 구조로 정리되어 있습니다.

| # | 분류 | 위치 |
|---|---|---|
| ① | 프리뷰 프로토타입 HTML | [`../movingpartner-prototype.html`](../movingpartner-prototype.html) · 통합 허브 [`../../preview/`](../../preview) |
| ② | 프리뷰 패널 스펙 | [`preview/`](preview) → 정본 [`../../preview/PANEL_SPEC.md`](../../preview/PANEL_SPEC.md) · [prototype-preview-pattern.md](preview/prototype-preview-pattern.md) |
| ③ | 플로우 PRD·스펙독 | [`flows/`](flows) |
| ④ | 주요 페이지별 responsive 레이아웃 패턴 | [`layout/`](layout) |
| ⑤ | 컴포넌트 (React/TSX) | [`../src/app/`](../src/app) — `flows/` · `shared/` · `preview/` |

## 플로우 문서

| 탭 | 플로우 | 문서 | 구현 |
|---|---|---|---|
| B2C | 책임보장 견적 계약 flow | [flows/b2c/guarantee-contract](flows/b2c/guarantee-contract) | `src/app/flows/b2c/guarantee-contract` |
| B2B | 책임보장 견적 발송 flow | [flows/b2b/guarantee-estimate](flows/b2b/guarantee-estimate) | `src/app/flows/b2b/guarantee-estimate` |

공통 문서: [flows/FLOW.md](flows/FLOW.md) (두 플로우 동작·아키텍처)

시스템 문서: [`system/reference/`](system/reference) — IA · persona · spec · flow-guide · pattern-rules · 컴포넌트 스펙
