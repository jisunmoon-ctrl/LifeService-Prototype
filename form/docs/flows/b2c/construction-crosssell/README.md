# 시공신청 크로스셀링 flow

> **패널 위치**: `B2C` → `시공신청 크로스셀링 flow` (`construction-crosssell`)
> **구현**: [`src/app/flows/b2c/construction-crosssell/`](../../../../src/app/flows/b2c/construction-crosssell)

시공 견적 신청 직후 이사+청소를 크로스셀 제안하고, 최소 입력으로 매칭까지 잇는 플로우.

## 화면

| 패널 screen id | 화면 | 구현 |
|---|---|---|
| `cxs_contact` | ① 시공 연락처 입력 (시작) | `ConstructionCrossSellFlowScreen` (`initialView="contact"`) |
| `cxs_crosssell` | ② 이사+청소 크로스셀 제안 | `components/MovingCleaningCrossSellSheet` |
| `cxs_departure` | ③ 출발지 | `components/CrossSellFlowSteps` |
| `cxs_type` | ④ 이사 타입 | `components/CrossSellSteps` |
| `cxs_confirm` | ⑤ 신청 정보 확인 | `components/CrossSellConfirm` |
| `cxs_list` | ⑥ 매칭 리스트 (상담내역) | `components/CrossSellResult` |

- 진입점: `App.tsx` → `case "cxs_*"` → `ConstructionCrossSellFlowScreen initialView=<view>`
- 이탈(뒤로/종료) 타깃: `construction_step1` — 메뉴에서 삭제된 시공신청 폼([`legacy/construction`](../../../../src/app/flows/legacy/construction))

## 관련 문서

- [레이아웃 패턴](../../../layout/LAYOUT_GUIDE.md) · [PRD](../../PRD.md) · [인터랙션 핸드오프](../../HANDOFF.md)
- QA: [`qa/o2o-consultation-list/`](../../../../qa/o2o-consultation-list) (매칭 리스트 대조)
