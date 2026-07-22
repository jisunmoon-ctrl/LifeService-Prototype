# spec — 오더(이사 상담 목록) · /moving/steps

> 파트너하우스(이사) 파트너센터 — 오더(상담) 목록 페이지.
> **Ground truth = `bucketplace/o2o-web` repo** (`apps/o2o-partner-web`). prod 런타임은 `partner.ohou.se` 로그인 게이트로 접근 차단 → **동작/정책/IA/카피 = repo (provenance: repo)**, **시각 토큰 = ODS catalog 매핑 (inferred)**.

## §0 페이지 개요
| 항목 | 값 | provenance |
|---|---|---|
| URL | https://o2o-partner.ohou.se/moving/steps | — |
| routeId | `MOVING_PARTNER_CENTER_STEP_LIST` | repo (`pages/moving/steps/index.page.tsx`) |
| 접근 | private · `AuthGuard roles=[MOVING]` · 미동의 시 `redirectToMovingAgreeTerms` | repo |
| 목적 | 이사 파트너가 배정된 **상담(오더)** 을 상태별로 확인·관리(수락/거절/계약확정/채팅) | repo |
| 렌더 | code-render (Next.js pages router, SSR private) | repo |
| 컨텍스트 | 반응형 웹 (모바일 webview + 데스크탑 브라우저 공용) | repo (`AppScaffold` web 분기) |

페이지 본문 = `MovingScaffold(type=page)` (IA 셸) + `<MovingStepList/>` → `StepList` → `ListView`.

## §1 전역 토큰 (ODS semantic 매핑)
repo 는 BDS 테마 토큰(`theme.content.*` / `theme.background.*`) 사용 → ODS catalog(`tokens.json`)로 매핑.

| 용도 | BDS 토큰 | ODS semantic | hex |
|---|---|---|---|
| 본문 텍스트 | content.base1 | foreground | `#141414` |
| 보조 텍스트 | content.base2 | foregroundWeak | `#8C8C8C` |
| 브랜드(활성 nav) | content.primary1.basic | foregroundBrand | `#00A1FF` |
| 카드 보더/divider | content.base4 / divider | gray.150 | `#E0E0E0` |
| 그룹 배경 | background.groupedBase | backgroundWeak | `#F5F5F5` |
| 콘텐츠 배경 | background.groupedContents | background | `#FFFFFF` |
| critical/거절 강조 | — | accentRed / red.400 | `#FD3D4A` |

타이포(FONT_STYLE 근사): subTitle1 16/22·700 (고객명), subTitle2 14/20 (라벨·값·신청일), body2 13/18 (callout). letter-spacing -0.3px.

## §2 레이아웃 (ASCII)
```
DESKTOP (md+, ≥768)                         MOBILE (<768)
┌─────────────────────────────────────┐    ┌──────────────────────┐
│ [TopNav] 브랜드 오더 채팅 일정마감 캐시 (리뷰) ●│   │ [AppBar] (빈 45px)     │  sticky
├─────────────────────────────────────┤    ├──────────────────────┤
│ Container(max 1256, px24)            │    │ Container(px16)       │
│  [ListCallout]  notice               │    │  [ListCallout]        │
│  [ListTab] ──── sticky top=71 ───────│    │  [ListTab] full-bleed │ sticky top=45
│   수락대기· 상담중 계약완료 상담종료     │    │   (4 tab, px0)        │
│  [SearchBar] 299px (FF)              │    │  [SearchBar] 100%(FF) │
│  [StepCardView] × N (1col stack)     │    │  [StepCardView] × N   │
│  [ListClosedCallout]                 │    │  [ClosedCallout]      │
│  [Pagination] pageCount=10, row=10   │    │  [Pagination] pc=5    │
│  [StickyRefreshButton] (수락대기탭만)  │    │  [Refresh] bottom+nav │
├─────────────────────────────────────┤    ├──────────────────────┤
│ [Footer] (항상)                       │    │ [BottomNav] 오더 채팅… │ fixed bottom
└─────────────────────────────────────┘    └──────────────────────┘
```

## §3 컴포넌트 카탈로그 (component_id · pattern · provenance)

### top-navigation / bottom-navigation — IA 메뉴 (provenance: repo)
`layouts/moving/utils.tsx`. **전역 IA**:
| 메뉴 | route | desktop(TopNav) | mobile(BottomNav) |
|---|---|---|---|
| 오더 | `/moving/steps` | ✓ (active) | ✓ datalist 아이콘 |
| 채팅 | `/chatting/list` | ✓ | ✓ comment |
| 일정마감 | `/moving/schedule` | ✓ | ✓ calendar |
| 캐시 | `/moving/payment/cash` | ✓ | ✓ cash |
| 마이페이지 | `/moving/my` | ✗ | ✓ profile |
| 리뷰 | `/moving/reviews` | ✓ (FF `…moving-reviews`) | ✗ |
- 활성 표시: desktop(TopNav, 아이콘 없음)=underline+foreground / mobile(BottomNav)=아이콘+라벨 컬러로만 구분 — **활성 foreground(#141414) ↔ 비활성 foreground-weak(#8C8C8C)**, 아이콘 교체 없음.
- **GNB 아이콘 스펙 (PTN-LIST-09b · 사용자 디자인 지정)**: BottomNav 아이콘은 **상태별 ODS 변형 전환**(비활성=line/regular weight, 활성=filled)·**24×24**. 매핑: 오더 `IconTextDocument`↔`IconTextDocumentFilled` · 채팅 `IconBubble`↔`IconBubbleFilled` · 일정마감 `IconCalendar`↔`IconCalendarFilled` · 캐시 `IconWonSignCircle2`↔`IconWonSignCircleFilled`(line won 글리프는 circle2형만 존재) · 마이페이지 `IconPerson`↔`IconPersonFilled`.
- step3_assertions: `TopNav 항목 4~5개(리뷰 FF)`, `BottomNav 항목 5개`, `BottomNav 아이콘 viewBox=0 0 480 480·box 24 (비활성 line·활성 filled)`, `is-active=foreground·filled / 기본=foreground-weak·line`.

### list-callout (provenance: repo) — bds `Callout type=notice icon=info`
title "오더상태에 변경이 있다면 업데이트 해주세요" / body "상태관리가 명확할수록 더 많은 오더가 들어와요." · mb20.

### list-tab (provenance: repo) — bds `FixedTab`/`TabItem`
- pattern: fixed-tab (status filter). items = `common.consultationDashboardType`: **수락대기(code1)·상담중(2)·계약완료(3)·상담종료(4)**.
- 첫 탭(수락대기)에 `hasNewStep` 시 red dot bullet.
- 동작: 탭 클릭 → `?type={code}&page=1` (shallow), scroll top, log click STATUS_TAB.
- sticky: top = appbar.height(45) mobile / topNavigation.height(71) desktop. mobile full-bleed(px0).
- step3_assertions: `.tab 4개`, `수락대기 탭 .tab__dot 존재`, `sticky top 모바일 45/데스크탑 71`.

### list-search-bar (provenance: repo, FF `…moving-search`) — shadcn `Input` left-icon
- placeholder "고객명, 연락처 검색", clear 버튼. width: mobile 100% / **tablet+ 299px**.
- 동작: 입력 디바운스 → `?page=1`. 숫자/`-` 만 → userPhoneNumber, 그 외 → userName (`parseSearchKeyword`).

### step-card (provenance: repo + Figma 7475-7469 redesign) — `StepCardView`
- pattern: vertical-stack 1col. Root: article, border 1px base4, radius 4, shadow depth10.
- header(p24, border-bottom): 좌측 고객명(subTitle1·700·ellipsis) — **우측 정렬: 속성/단계 뱃지 ─4px─ chevron_right(18)**. 뱃지는 헤더 우측 꺽쇠 바로 옆에 배치하고 **카드당 최대 1개만 노출**(`attrBadges` 단일 산출, 우선순위 견적 단계 > 무료 수락 가능 > 직접신청). **status 표기 뱃지 제거**(상태=필터 탭으로만 표기) + **`FeeWaiverBadge("수수료 면제")` 오더 카드에서 완전 제거**(타 지면 SquareBadge 재사용 클래스만 보존). 신청일은 헤더에서 제거하고 본문 첫 행으로 이동.
- body(p24): `StepCardItem`(dl: dt width80·base2 / dd·base1) × N + actions(mt16): `StepCardChattingItem`(chat 있을 때, OutlineAnchorButton44 + N CircleBadge) + **계약확정 버튼**(onGoing & FF contract). body row1 = `종류·신청일 : {이사종류} · {createdDate} 신청`(헤더에서 이동한 신청일을 종류와 병합), 이후 이사 예정일·출발지·도착지.
- 전체 카드 = covered link → `/moving/steps/{id}` (상세). 채팅/계약 버튼은 stopPropagation.
- step3_assertions: `card border-radius 4px`, `header border-bottom 존재`, `dt width 80px`, `카드 status SquareBadge 0건`, `.badge--fee 0건(오더 카드 수수료 면제 제거)`, `카드당 .card__badges 내 뱃지 ≤1개`, `뱃지가 .card__head-right 내 chevron 좌측에 위치`.

### attribute/incentive badge (provenance: Figma 7475-7469 — 비인기리드 인센티브) — bds `SquareBadge` subtle
수락대기(request) 카드 헤더 고객명 우측에만 노출(다른 status 카드 미노출). **상호 배타 — 무료 수락 가능이 직접신청보다 우선하며 두 뱃지를 동시 노출하지 않는다.**
| 뱃지 | 조건 | variant | 토큰(ODS, get_variable_defs) | 아이콘 |
|---|---|---|---|---|
| 직접신청 | 직접신청 리드 | subtle green | bg accentGreenWeak `#E3FCEA` / fg·icon accentGreen `#15B869` | IconCheckCircleFilled |
| 무료 수락 가능 | 비인기 리드(0원 차감 대상) | subtle yellow | bg `#FCF4DD` / fg `#633701` / icon accentYellow `#FFC300` | IconWonSignCircleFilled |
> 수락대기 카드는 레거시 FeeWaiverBadge("수수료 면제") 대신 무료 수락 가능 뱃지로 일원화. annotation 원문 카피 후보 "지금 수락 시 0원 차감"(사용자 확정 라벨 = "무료 수락 가능").

### step-status-badge (provenance: repo · variant→hue inferred) — bds `SquareBadge`
> ⚠ 오더 카드에서는 제거됨(Figma redesign, step-card 참조). 아래 매핑은 캐시 내역 등 타 지면 SquareBadge 재사용 + status 의미 참조용으로 보존.
status label = `getStepLabelOfStatus` → STEP_STATUS_NAME: request `수락대기`, onGoing `매칭완료`, contractCompleted `계약완료`, rejected `상담거절`, closed `상담종료`.
| status | bds variant | 프로토타입 매핑(inferred) |
|---|---|---|
| 수락대기(request) | fill primary2 | 솔리드 red `#FD3D4A` / 흰 텍스트 |
| 매칭완료(onGoing) | fill primary3 | 솔리드 green `#1BA774` / 흰 텍스트 |
| 계약완료(contract) | weak primary2 | light red `#FCE7E6` / `#DA1B34` |
| 상담거절·상담종료 | weak base2 | gray `#F5F5F5` / `#8C8C8C` |
> ⚠ primary2/primary3 의 정확 hue 는 BDS 테마 미확인 → semantic 의도(attention/active/neutral)로 매핑, `inferred`. repo 권한으로 BDS 테마 확인 시 re-grounding.

### pagination (provenance: repo) — bds `Pagination`
row=10/page, pageCount **mobile 5 / desktop 10**. 페이지 변경 시 scroll top.

### refresh (provenance: repo + ver=estimate)
- **prod ver**: `StickyRefreshButton` — **수락대기(첫 탭)에서만** sticky bottom-right FAB.
- **estimate ver**: 새로고침 FAB **미노출**. 수락대기 탭 **PTR 넛징** `↓ 아래로 당겨서 신규 오더 불러오기`.
- **estimate ver + 상담중 탭**: 견적서 등록 FAB(모바일) / TopNav `gnb-capture`(데스크탑).

### states (provenance: repo)
- loading → `ListContentsSkeleton`
- error → `ListError` (EmptyPage image=man1, "페이지를 불러오지 못했어요.", action 새로고침)
- empty → `ListEmpty` (EmptyPage image=cat1, "상담내역이 없습니다." + ClosedCallout + refresh)
- populated → cards + ClosedCallout("신청일 기준 6개월 전 상담내역까지만 확인할 수 있어요.") + pagination

## §5 동작 (Interactions)
| id | 트리거 | 동작 | provenance |
|---|---|---|---|
| B1 | 탭 클릭 | `?type&page=1` shallow, scroll top, refresh 가시성 재계산 | repo |
| B2 | 검색 입력 | 디바운스 → name/phone 파싱 → `?page=1` | repo (FF) |
| B3 | 페이지네이션 | `?type&page=N`, scroll top | repo |
| B4 | 새로고침 | prod=수락대기 FAB · estimate=상단 PTR 넛징+당겨서 refetch | repo + ver |
| B5 | 카드 클릭 | → `/moving/steps/{id}` 상세 | repo |
| B6 | 채팅 보기 | → 채팅 채널(stopPropagation) | repo + Figma 7701:6105 |
| B7 | 계약 확정 | 계약 확정 모달(onGoing & FF) · **ver=estimate 시 카드 CTA `견적 보내기`→OCR 플로우(§14)** | repo + PRD |
| B8 | 수락/거절 | OrderCardView 인라인 액션 모달(FF order-card) | repo (프로토타입 stub) |
| B9 | 견적서 등록 | (ver=estimate) GNB capture / **상담중** FAB → OCR 플로우 P0-1(§14) | PRD |

## §6 반응형 / 디바이스 (breakpoint 스펙)
`media/styles/breakpoints.ts`: **xs:0 · sm:375 · md:768 · lg:1024 · xl:1256**. 전환 = **md(768)**.
| 영역 | <768 (mobile) | ≥768 (desktop) |
|---|---|---|
| 상단 | AppBar 45px (빈 타이틀) | TopNavigation 71px |
| 하단 | BottomNavigation 54px fixed | Footer (204px) |
| Container | px16, full-width | max 1256, px24, center |
| ListTab | full-bleed (px0), 균등분할 | 좌측정렬, px20 |
| SearchBar | 100% | 299px |
| Pagination | pageCount 5 | pageCount 10 |
| ListView pt | 16 | 30 |
| Tab sticky top | 45 (appbar) | 71 (topnav) |
| Refresh offset | bottomNav+16 | 16 |

## §7 접근성
탭 `role=tablist/tab aria-selected`, 카드 `role=button tabindex=0` Enter 진입, 검색 input aria-label, callout `role=status`.

## §9 콘텐츠 사전
탭: 수락대기/상담중/계약완료/상담종료. 카드 items 라벨: 이사 종류·이사 예정일·출발지·도착지 (`fixtures/moving/steps.ts`). 거절 사유/종료 사유 코드 = `moving.consultation.requestRejectionReason` / `consultationClosingReason`.

## §11 Out of Scope (stub)
상세(`/moving/steps/{id}`)·계약/수락/거절 모달·채팅 채널(Sendbird)·OS statusbar. 프로토타입에서 토스트 stub.

## §12 디자인 리뷰 스튜디오 (preview harness)

> **상세 스펙** → [`prototype-preview-pattern.md`](prototype-preview-pattern.md) (viewport·우측 도크·postMessage·기본값).

요약:
- 기본 진입 = `#reviewOverlay` 스튜디오 shell. feature = `?preview=1` iframe 임베드.
- 기본 viewport **375×720** · flow **estimate** · 탭 **상담중(2)**.
- 우측 도크: 홈(reload) · PRD 프로토타입 리스트(prod/estimate) · 상태별보기(filled/empty/로딩/에러 + FF).
- `postMessage(__rvStudio)` 로 reload 없이 state/type/ver/FF 전파.

## §13 멀티뷰 — 채팅·일정마감·캐시·마이페이지 (repo 기반)
단일 `index.html` SPA. 상단/하단 nav 가 5개 IA 뷰를 client-side 라우팅(`switchView`). `?view={order|chatting|schedule|cash|my}` 직접 접근. 모두 `apps/o2o-partner-web` repo 기반 + prod 캡처(`qa/prod-*-375.png`) 대조.
- **채팅** `/chatting/list`: 기본메시지설정 버튼 + 채널 리스트(아바타40·이름·지역subtitle·preview·읽음/time·unread CircleBadge). EmptyPage cat1 "채팅이 없습니다.". 실데이터(prod 캡처, 닉네임 마스킹). Sendbird 런타임이라 룸 콘텐츠=runtime.
- **일정마감** `/moving/schedule`: 헤더(마감 안내) + thick divider + 4개월 멀티선택 캘린더(today blue·past disabled·마감 badge) + StickyFooter(선택취소/적용하기, 선택 시 노출). NavigationTab 은 단일 이사유형 계정이라 미노출(prod 일치). desktop=카드프레임 centered(720·border·radius8).
- **캐시** `/moving/payment/cash`: 탭(캐시내역/정산내역) + BalanceView(보유캐시 137,500·무료포인트 0P·캐시충전하기) + 필터칩(전체/사용/취소/충전)+기간 + TransactionList(SquareBadge 충전/사용·금액±·오더정보보기) + Pagination + 환불 Callout. desktop=2col(balance 375 / list 771). 내역=stories 예시값(잔액만 실측).
- **마이페이지** `/moving/my`: appBar title "마이페이지"(유일) + flat 메뉴(프로필헤더 없음) — 계정관리(email)·이메일문의(Mail). 현재서비스/리뷰관리(FF)/알림설정(app)은 조건부. row=title17·desc15·chevron.
- **버그수정**: 콘텐츠 영역 bg `#F7F9FA`→**white #FFFFFF**(prod 실측 `body` bg). callout/footer 의 `#F7F9FA` 는 유지.

## §14 OCR 견적 작성 플로우 (ver=estimate · PRD P0)
> ver 토글·iframe 전파 → `prototype-preview-pattern.md` §4.2. estimate ver 기본 탭 = **상담중(2)**.

### 진입점
| id | 진입 | 트리거 |
|---|---|---|
| P0-1 | 빠른 캡처 | GNB **견적서 등록** (상담중 FAB / TopNav `gnb-capture`) |
| P0-2 | 오더에서 작성 | 상담중 카드 CTA **`견적 보내기`** |

### 상담중 카드 — 단계 (estimate ver · Figma 7701:6105)
| estStage | 뱃지 | primary CTA | secondary |
|---|---|---|---|
| need | 견적 작성 필요 | `견적 보내기`(brand-solid) | `채팅 보기`(normal) |
| wait | 계약대기 | `견적서 확인`(brand-outlined) | `채팅 보기`(normal) |

> `review`(검토중) 단계 없음 — **확정 견적 보내기** 제출 시 `need→wait` 즉시 전이.

### 모달: capture → ocr → confirm → send
- **capture**: 모바일 idle `assets/estimate-sample.png` · 라벨 `견적서 등록` (GNB/FAB 진입)
- **confirm**: 타이틀 `견적 확인` · 요약(출발/도착/일정/차량/인원) · `기본 금액`/`기타 비용` · Footer `견적 수정` \| `확정 견적 보내기`
- **send**: 모달 닫힘 · Snackbar `고객에게 확정 견적을 보냈어요!` · 카드 stage `wait`

상세 assertion → `pattern-rules.md` PTN-LIST-15 · `components/OrderCard.md` §4–5.

## §16 B2C 매칭 파트너 카드 (ver=customer · Figma 7178:118943)

> `cust-pcard` / MovingOrderCard — 매칭 파트너 목록·계약 flow.

| 블록 | 스펙 |
|---|---|
| nav | 타이틀 **`매칭 파트너 목록`** (Figma 7178:118946) |
| status | waiting / 상담중 / 계약완료 / 상담종료 |
| 파트너 | 이름 · 평점 · 리뷰 링크 |
| 채팅 | 버블 — 견적 수신 시 `오늘이사에서 견적서를 보냈어요.` |
| 견적 | 라벨 `견적 가격`(done=`확정 견적`) · CTA — waiting·견적미수신=`채팅하기` · 견적수신=`견적 확인`(brand-solid) · done=`견적 보기` |
| tierA | 책임보장 뱃지 float (green border 카드) |

상세 → `pattern-rules.md` PTN-LIST-18.

## §15 리뷰탭 답글·숨김 BottomSheet (ver=review · PRD Partner Review)
> ODS `BottomSheet` Type=fit · Figma [2702:67104](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO?node-id=2702-67104) · 상세 → [`components/BottomSheet.md`](components/BottomSheet.md)

### 타이틀 영역 (`BottomSheet.Grabber` + `BottomSheet.Header`)
| 서브 | 스펙 |
|---|---|
| Grabber | pill 40×4 · `--divider` `#EAEDEF` · pt8 pb4 · mobile only |
| Header | grid `24 \| 1fr \| 24` · px16 · py 4/12 · **divider 없음** |
| Title | Body16L20_Bold 16/20/700 · ls -0.3px · center · `--foreground` |
| Close | IconX 24 regular · `--foreground` · aria-label 닫기 |
| Overlay | `#00000066` (`system/dim-basic`) |

- 답글 모달 타이틀: `답글 작성` / `답글 수정` · 숨김 모달: `리뷰 숨김 요청`
- step3_assertions: `rev-modal grabber 40×4` · `head grid 24-1fr-24` · `title center 16/20/700` · `close svg 24×24 foreground` · `head border-bottom 0`

## Appendix A — ODS/BDS 매핑 요약
Callout·FixedTab·TabItem·SquareBadge·Pagination·EmptyPage·OutlineAnchorButton·CircleBadge = `@bucketplace/design-system/bds`. BottomSheet(Grabber·Header·Title·Close) = `@bucketplace/design-system`. Input = shadcn. ProfileIcon/Icon = `@bucketplace/design-system`.

## Appendix B — needsReview
- **[CR-12] StepStatusBadge onGoing(매칭완료) green `--badge-ongoing-bds:#1BA774` = ODS 미보유**: ODS 팔레트에 green 토큰 자체가 없음(gray·genuineBlue·red·yellow·purple 만 존재). prod 빈 계정 + BDS `content.primary3.basic` 가 외부 테마 패키지라 실측 불가 → 추정값 raw 유지. **근접 ODS 토큰 없음**. 디자인 확정 필요(ODS green 토큰 신설 or onGoing 을 다른 ODS 토큰으로). 그 외 뱃지(request/contract/rejected/closed)·fee 는 모두 ODS palette 값(accentRed·red.100/500·gray.50·genuineBlue) 참조.
- SquareBadge primary2 hue: red.400(=accentRed) 로 매핑(ODS 토큰). weak primary2 = red.100/red.500(ODS).
- EmptyPage 일러스트 `cat1`/`man1` 실제 자산 미확인 → 중립 placeholder.
- 데스크탑 카드 컬럼 max-width (단일 stack, container 1256) → repo Container 기본값 가정.
