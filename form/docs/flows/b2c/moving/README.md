# 이사 (입력폼 플로우)

> **패널 위치**: `B2C` → `이사` (`moving-form`)
> **구현**: [`src/app/flows/b2c/moving/`](../../../../src/app/flows/b2c/moving)

이사 견적 신청 6단계 입력폼. 프로토타입의 기준 플로우이며 시간대 선택 시안 A/B 비교를 포함한다.

## 화면

| 패널 screen id | 화면 | 구현 (`components/`) |
|---|---|---|
| `input_step1` | 이사종류 | `Step1Type` |
| `input_step2` | 이사일/시간대 | `Step2Date` · `Step2DateVariantB` (시안 B) |
| `input_step3` | 출발지 | `Step3Departure` |
| `input_step4` | 도착지 | `Step4Arrival` |
| `input_step5` | 이삿짐 입력 | `Step5Belongings` · `Step5Packing` + [`shared/belongings`](../../../../src/app/shared/belongings) |
| `input_step6` | 개인정보 | `Step6UserInfo` |

- 진입점: `App.tsx` → `case "input_step*"` → `InputFlowScreen initialStep=<n>`
- 레이아웃 셸: [`shared/flow/InputFlowLayout`](../../../../src/app/shared/flow/InputFlowLayout.tsx) — `isDesktopForm(≥768)` 분기

## 관련 문서

- [레이아웃 패턴](../../../layout/LAYOUT_GUIDE.md) · [PRD](../../PRD.md)
- [인터랙션 핸드오프](../../HANDOFF.md) — 시간대 선택 UX 시안 A/B, Step별 상세 스펙
