# 견적신청퍼널 UX iteration

> **패널 위치**: `B2C` → `견적신청퍼널 UX iteration` (`estimate-funnel-ux`)
> **구현**: [`src/app/flows/b2c/estimate-funnel/`](../../../../src/app/flows/b2c/estimate-funnel)

이사 홈에서 시작하는 견적 신청 퍼널의 UX 개선 시안. 이삿짐 입력을 목록/사진·영상/세부정보로 분리한다.

## 화면

| 패널 screen id | 화면 | 구현 |
|---|---|---|
| `est_home` | ① 이사 홈 (시작) | `components/EstimateMovingHome` |
| `est_form` | ② 견적 정보 입력 | `components/EstimateForm01` |
| `est_belongings` | ③ 이삿짐 정보 (목록+사진옵션) | `components/EstimateBelongingsStep` + [`shared/belongings`](../../../../src/app/shared/belongings) |
| `est_belongings_photo` | ③-1 사진·영상 (옵션) | `shared/belongings/BelongingsPhoto` |
| `est_belongings_detail` | ③-2 세부 정보 | `shared/belongings/BelongingsManualDetail` |
| `est_confirm` | ④ 신청 정보 확인 | `components/EstimateConfirm` |
| `est_crosssell` | ⑤ 신청완료·크로스셀 | `components/EstimateCrossSellComplete` |
| `est_list` | ⑥ 매칭 리스트 | `shared/unified` + 매칭 리스트 파트 |

- 진입점: `App.tsx` → `case "est_*"` → `EstimateFunnelFlowScreen initialView=<view>`
- 이삿짐 입력(`shared/belongings`)은 [이사](../moving/README.md) 플로우와 공유

## 관련 문서

- [레이아웃 패턴](../../../layout/LAYOUT_GUIDE.md) · [PRD](../../PRD.md) · [인터랙션 핸드오프](../../HANDOFF.md)
- QA: [`qa/estimate-funnel/`](../../../../qa/estimate-funnel) (Figma 대조)
