# form — 문서 인덱스

패널 위계(B2B/B2C 탭 → 플로우 → 화면)와 동일한 구조로 정리되어 있습니다.

| # | 분류 | 위치 |
|---|---|---|
| ① | 프리뷰 프로토타입 HTML | [`../form-prototype.html`](../form-prototype.html) · 통합 허브 [`../../preview/`](../../preview) |
| ② | 프리뷰 패널 스펙 | [`preview/`](preview) → 정본 [`../../preview/PANEL_SPEC.md`](../../preview/PANEL_SPEC.md) |
| ③ | 플로우 PRD·스펙독 | [`flows/`](flows) |
| ④ | 주요 페이지별 responsive 레이아웃 패턴 | [`layout/`](layout) |
| ⑤ | 컴포넌트 (React/TSX) | [`../src/app/`](../src/app) — `flows/` · `shared/` · `preview/` |

## 플로우 문서

| 탭 | 플로우 | 문서 | 구현 |
|---|---|---|---|
| B2C | 시공신청 크로스셀링 flow | [flows/b2c/construction-crosssell](flows/b2c/construction-crosssell) | `src/app/flows/b2c/construction-crosssell` |
| B2C | 견적신청퍼널 UX iteration | [flows/b2c/estimate-funnel](flows/b2c/estimate-funnel) | `src/app/flows/b2c/estimate-funnel` |
| B2C | 이사 | [flows/b2c/moving](flows/b2c/moving) | `src/app/flows/b2c/moving` |
| B2C | 이사청소 | [flows/b2c/cleaning](flows/b2c/cleaning) | `src/app/flows/b2c/cleaning` |
| — | (메뉴 미노출) 시공신청·과거 시안 | — | `src/app/flows/legacy` |

공통 문서: [flows/PRD.md](flows/PRD.md) (4개 플로우 공통 PRD) · [flows/HANDOFF.md](flows/HANDOFF.md) (인터랙션 핸드오프)

## 시스템 문서

[`system/`](system) — [System.md](system/System.md) · [STYLE_TOKENS.md](system/STYLE_TOKENS.md) · [ICON_LIBRARY.md](system/ICON_LIBRARY.md) · [Guideline.md](system/Guideline.md) · [Guidelines.md](system/Guidelines.md)

QA 산출물: [`../qa/`](../qa) (flow별 Figma 대조 리포트·캡처)
