# 주요 페이지별 responsive 레이아웃 패턴 — form

기준 프리셋: Mobile `375×720` · Tablet `768` · Desktop `1024` (판정 `w<768 / w<1024 / else`).
폼 화면의 데스크탑 분기는 **프레임 폭 기준**(`isDesktopForm = w ≥ 768`, [`PreviewViewportContext`](../../src/app/preview/PreviewViewportContext.tsx))으로 동작한다.

| 주요 페이지 | Mobile (<768) | Tablet/Desktop (≥768) | 구현 |
|---|---|---|---|
| 입력폼 단계 화면 (이사·이사청소·크로스셀 공통) | 단일 컬럼 + 하단 고정 CTA | 2단 구성(타이틀/입력 분리) + 카드형 컨테이너 | [`shared/flow/InputFlowLayout.tsx`](../../src/app/shared/flow/InputFlowLayout.tsx) |
| 단계 타이틀 | 상단 좌측 정렬 | 데스크탑 전용 타이포·여백 | [`shared/flow/FormStepTitle.tsx`](../../src/app/shared/flow/FormStepTitle.tsx) |
| 하단 액션(CTA) | 화면 하단 sticky, `flex-1` 분할 | 컨테이너 내부 배치 | [`shared/flow/FlowBottomActions.tsx`](../../src/app/shared/flow/FlowBottomActions.tsx) |
| 데스크탑 폼 파트 | — | 데스크탑 전용 입력 파트 | [`shared/flow/DesktopFormParts.tsx`](../../src/app/shared/flow/DesktopFormParts.tsx) |
| 이삿짐 선택·갤러리 | 그리드 2열 · 가로 스크롤 | 그리드 확장 | [`shared/belongings/BelongingsParts.tsx`](../../src/app/shared/belongings/BelongingsParts.tsx) |
| 통합 견적 화면 셸 | 단일 컬럼 | 중앙 정렬 + 최대폭 | [`shared/unified/UnifiedScreenLayout.tsx`](../../src/app/shared/unified/UnifiedScreenLayout.tsx) |
| 매칭 리스트 / 상담내역 | 카드 1열 | 카드 폭 확장 | [`flows/b2c/construction-crosssell/components/CrossSellResult.tsx`](../../src/app/flows/b2c/construction-crosssell/components/CrossSellResult.tsx) |

세부 규칙(컨테이너 폭·spacing·섹션 스택)은 [LAYOUT_GUIDE.md](LAYOUT_GUIDE.md),
타이포·컬러 토큰은 [`../system/STYLE_TOKENS.md`](../system/STYLE_TOKENS.md) 참조.

> 프리뷰 스튜디오/컨트롤 패널·OS statusbar·웹 GNB 는 feature 가 아니므로 레이아웃·QA 대상에서 제외 (CLAUDE 공통 지침).
