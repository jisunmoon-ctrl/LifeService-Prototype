# 레이아웃 가이드 — movingpartner

오늘의집 이사 파트너(사장님센터) + 고객 견적/계약 프로토타입의 해상도 breakpoint별 레이아웃 패턴.

## 기준 & 프리뷰 해상도

- **feature 단일 breakpoint**: `md = 768px` — feature 내부의 유일한 반응형 분기
  - `@media (min-width:768px)` → 데스크탑, `@media (max-width:767px)` → 모바일
- **프리뷰 프리셋**: Mobile `375×720` · Tablet `768` · Desktop `1024`
- **중요**: feature 는 PreviewStudio 의 **iframe** 안에서 로드된다. iframe 뷰포트 = 프레임 폭이므로
  `@media(768)` 반응형 IA 가 프레임 폭(375/768/1024) 기준으로 정확히 동작한다.

## 반응형 IA (파트너)

| 폭 | 상단 | 하단 | 컨테이너 |
|---|---|---|---|
| **Desktop (≥768)** | `.topnav` (71px) — 브랜드 + 메뉴(오더·채팅·일정마감·캐시·리뷰) + 우측 액션 | `.footer` | 콘텐츠 중앙 정렬 `max 1136px` (`padding:0 max(24px, calc((100%-1136px)/2))`) |
| **Mobile (<768)** | `.appbar` (45px, 뒤로가기 + 타이틀, sticky) | `.bottomnav` (54px, 오더·채팅·일정마감·캐시·마이페이지) + `.footer` | `.container` `padding:0 16px` |

- `.scaffold` = 세로 flex 컬럼(topnav → `.scaffold__body`(스크롤) → bottomnav/footer)
- Desktop: `.scaffold{height:100%;overflow:hidden}` + `.scaffold__body{overflow-y:auto}` (내부 스크롤)
- 데스크탑 TopNav = 오더·채팅·일정마감·캐시·(리뷰) / 모바일 BottomNav = 오더·채팅·일정마감·캐시·마이페이지
  (리뷰는 desktop TopNav 전용, 마이페이지는 mobile BottomNav 전용)

## 화면별 레이아웃

| 화면 | 레이아웃 |
|---|---|
| 오더 목록 | `.list-root` > callout → `.tabbox`(sticky ListTab) → `.searchbar-wrap` → `.list-contents`(OrderCard gap 16) |
| 상담 상세 | `.page-pad` > 요약 헤더 + `.ord-detail__list` + 견적 요약 박스 + 액션 |
| 채팅 | `.chat-list` 세로 스택 |
| 일정마감 | 월 캘린더 그리드(7열) + 마감 안내 |
| 캐시 | 잔액 카드 + 충전 CTA + 거래내역 |
| 마이페이지 | 프로필 + 설정 메뉴 리스트 |

## 고객단(B2C) 레이아웃

- `ver=customer` — 파트너 chrome(topnav/bottomnav/appbar/footer) 숨김, 콘텐츠 full-bleed
- 모달: md+ 에서는 중앙 다이얼로그, 모바일에서는 바텀시트
- 실제 구현은 `@bucketplace/design-system` 컴포넌트(ScreenShell/BoxButton/Text 등) — `flows/b2c/guarantee-contract/CustomerApp`

## OrderCard 상태 → CTA 상태머신

status 코드: `0 수락대기 · 1 상담거절 · 2 상담중(매칭완료) · 3 상담종료 · 4 계약완료`
필터 탭: 수락대기[0] · 상담중[2] · 계약완료[4] · 상담종료[1,3]
상세는 [`reference/spec.md`](reference/spec.md) · [`reference/components/OrderCard.md`](reference/components/OrderCard.md) 참조.

## 범위 제외 (CLAUDE 공통 지침)

- OS statusbar · 프리뷰 스튜디오/컨트롤 패널은 feature 가 아니므로 레이아웃/QA 대상에서 제외.
- 색·타이포·아이콘·컴포넌트는 ODS 토큰/컴포넌트 기준 (partner.css `:root` 는 ODS 토큰 매핑).
