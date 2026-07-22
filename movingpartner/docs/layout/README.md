# 주요 페이지별 responsive 레이아웃 패턴 — movingpartner

feature 는 iframe 으로 로드되므로 `@media` 반응형 IA 가 **프레임 폭 기준**으로 동작한다.
분기점은 `768px` (`partner.css` `@media(min-width:768px)`, 고객단은 [`shared/hooks/useMediaQuery`](../../src/app/shared/hooks/useMediaQuery.ts)).

| 주요 페이지 | Mobile (<768) | Desktop (≥768) | 구현 |
|---|---|---|---|
| B2B 오더 목록 | appbar + 하단 BottomNav · 카드 1열 · 상태 탭 가로 스크롤 | 상단 TopNav(로고+메뉴) · 컨테이너 최대 1136px | [`flows/b2b/guarantee-estimate/PartnerOrderView.tsx`](../../src/app/flows/b2b/guarantee-estimate/PartnerOrderView.tsx) · [`components/PartnerShell.tsx`](../../src/app/flows/b2b/guarantee-estimate/components/PartnerShell.tsx) |
| B2B 상담 상세 | 전체 폭 카드 스택 + 하단 액션 | 중앙 컨테이너 + 2단 정보 행 | [`PartnerOrderDetailView.tsx`](../../src/app/flows/b2b/guarantee-estimate/PartnerOrderDetailView.tsx) |
| B2B 채팅/일정마감/캐시/마이 | BottomNav 탭 전환 | TopNav 메뉴 전환 | [`PartnerSimpleViews.tsx`](../../src/app/flows/b2b/guarantee-estimate/PartnerSimpleViews.tsx) |
| B2C 견적 확인 | `ScreenShell` (statusbar+topnav+본문) | 중앙 480px 카드 + 그림자 | [`flows/b2c/guarantee-contract/CustomerApp.tsx`](../../src/app/flows/b2c/guarantee-contract/CustomerApp.tsx) |
| B2C 약관 동의 | 바텀시트 모달 | 중앙 모달 | [`components/TermsAgreementModal.tsx`](../../src/app/flows/b2c/guarantee-contract/components/TermsAgreementModal.tsx) |

컨테이너·spacing·footer 규칙은 [LAYOUT_GUIDE.md](LAYOUT_GUIDE.md),
IA 원본은 [`../system/reference/Docs_Partner_IA.md`](../system/reference/Docs_Partner_IA.md) 참조.
