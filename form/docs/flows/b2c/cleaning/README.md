# 이사청소

> **패널 위치**: `B2C` → `이사청소` (`cleaning-form`)
> **구현**: [`src/app/flows/b2c/cleaning/`](../../../../src/app/flows/b2c/cleaning)

이사청소 견적 신청 플로우. 이사 견적 이력이 있는 사용자는 날짜·장소·연락처가 프리필된다.

## 화면

| 패널 screen id | 화면 | 구현 (`components/`) | 시나리오 props |
|---|---|---|---|
| `cleaning_step1` | 청소 희망일 | `CleaningStep1Date` | `userScenario="moving"` · `hasRecentMovingQuote` |
| `cleaning_step2` | 청소 장소 정보 | `CleaningStep2Location` | `prefillLocation` |
| `cleaning_step3` | 연락처 정보 | `CleaningStep3Contact` | `userScenario="general"` (미입력) |
| `cleaning_step4` | 연락처 정보 (입력완료) | `CleaningStep3Contact` | `prefillContact` · `showAuthButton={false}` |
| — | 신청 완료 시트 | `CleaningCompleteSheet` | 플로우 종료 시 |

- 진입점: `App.tsx` → `case "cleaning_step*"` → `CleaningFlowScreen initialStep=<n>` + 시나리오 props

## 관련 문서

- [레이아웃 패턴](../../../layout/LAYOUT_GUIDE.md) · [PRD](../../PRD.md) · [인터랙션 핸드오프](../../HANDOFF.md)
- QA: [`qa/QA-REPORT.md`](../../../../qa/QA-REPORT.md) (Figma 대조 — step1~3·완료 시트)
