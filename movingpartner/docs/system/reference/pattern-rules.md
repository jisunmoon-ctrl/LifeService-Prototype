# pattern-rules — moving-1pager-prototype

> 페이지 패턴 분류 + 재사용 룰 후보. 같은 패턴 산출물 2개 이상 시 `_pattern-rules/{PATTERN}.md` 로 승격(4.6d).

## 패턴 분류
- **레벨1 추상 패턴**: `LIST·FEED` (주) + `DASHBOARD` (부 — 상태별 워크리스트 관리 성격)
- **레벨2 page_type**: `ORDER-HISTORY` (파트너 오더 워크리스트)

## 룰 후보

> 정책을 3개 맥락으로 그룹핑한다. (1) 페이지 공통 chrome — 모든 화면에서 동일하게 깔리는 레이아웃/네비게이션/해상도 대응, (2) 콘텐츠 스크롤 영역 — nav chrome 을 제외한 본문 패턴·정보 위계·메타데이터 처리, (3) 컴포넌트 레벨 — 버튼/뱃지/아이콘 등 원자 단위. rule_id 는 기존 추적성을 위해 유지한다.

### 1. 페이지 공통 레이아웃·네비게이션·해상도 대응 (page chrome)

> GNB(파트너센터 BottomNav/TopNav), 해상도 분기, 전역 chrome 전환 정책. 콘텐츠와 무관하게 모든 상태에서 공통 적용된다.

```yaml
- id: PTN-LIST-04
  page_type: ORDER-HISTORY
  scope: page-chrome
  rule_type: layout
  rule: 반응형은 단일 breakpoint(md=768)에서 모바일(하단탭+앱바)↔데스크탑(상단네비+푸터) chrome 을 전환한다
  level: MUST
  component: AppScaffold (hidden md:block / block md:hidden)
  assertion: "768 경계에서 bottomnav↔topnav 가시성 토글"
  source: media/.../scaffold/AppScaffold.tsx, media/styles/breakpoints.ts
  confidence: extracted

- id: PTN-LIST-09b
  page_type: ORDER-HISTORY
  scope: page-chrome
  rule_type: structure
  rule: 파트너센터 네비게이션(하단 BottomNav·상단 TopNav — 오더·채팅·일정마감·캐시·마이페이지·리뷰)은 글로벌 ohou.se GNB chrome 이 아니라 이 페이지의 feature IA 이다. 따라서 그 nav 아이콘은 CLAUDE.md §2 의 "웹 네비게이션(GNB) 제외"에 해당하지 않으며 PTN-LIST-09(ODS 아이콘 강제) 대상이다. 제외되는 것은 글로벌 ohou.se GNB chrome(로고·검색·장바구니·햄버거·카테고리 GNB) 아이콘과 preview harness/스튜디오 컨트롤뿐이다.
    GNB 아이콘 스펙: ① 기본 사이즈 24×24(box 24, svg viewBox 0 0 480 480). ② 타입은 상태별 ODS 변형 전환 — 비활성=line(regular weight), 활성=filled. ③ 활성/비활성은 line↔filled 아이콘 교체 + 컬러로 구분 — 활성=foreground(neutral)·filled, 비활성=foreground-weak·line. (라벨 텍스트 색도 동일 토글)
  level: MUST
  component: BottomNav icon map(order/chat/cal/cash/my) = ODS 480x480 inline, line(비활성)↔filled(활성) → 오더 IconTextDocument(Filled) · 채팅 IconBubble(Filled) · 일정마감 IconCalendar(Filled) · 캐시 IconWonSignCircle2/IconWonSignCircleFilled · 마이페이지 IconPerson(Filled). state color = foreground(#141414)·filled ↔ foreground-weak(#8C8C8C)·line, size 24
  assertion: "BottomNav __icon box=24x24, svg viewBox=0 0 480 480 (ODS) N개 = nav 항목 수, 외부/이모지 글리프 0건; is-active=foreground·filled / 기본=foreground-weak·line (활성표시는 컬러 + line↔filled 교체); 글로벌 GNB chrome·preview harness 만 QA 제외"
  source: CLAUDE.md §1 아이콘 규칙 + §2 GNB 제외(글로벌 chrome 한정) / layouts/moving/utils.tsx / 사용자 디자인 지정(GNB 아이콘 24·inactive line·active filled)
  confidence: enforced

- id: PTN-LIST-13
  page_type: ORDER-HISTORY
  scope: page-chrome
  rule_type: state-link
  rule: (PRD OCR견적서_P0) 프로토타입은 플로우 버전 `st.ver` 로 `기존 플로우(prod)` ↔ `견적 작성 플로우(estimate)` 를 스위칭한다. **토글 UI·viewport·상태 패널·postMessage** 구현은 `prototype-preview-pattern.md` 참조. estimate ver 일 때만 GNB **견적서 등록** 진입·상담중 단계 뱃지·견적 모달이 활성화되고, prod ver 는 기존(계약 확정) 동작을 유지한다(상호 비파괴). **estimate flow 기본 랜딩 탭 = 상담중(code 2)** — `defaultTabForVer('estimate')`; prod = 수락대기(code 1).
  level: MUST
  component: st.ver(prod|estimate) · renderVer()(body.ver-estimate) · defaultTabForVer · gnb-capture/fab-capture
  assertion: "ver=prod 시 capture/FAB 견적등록 display:none·status2 CTA='계약 확정'; ver=estimate 시 capture 노출·기본탭=상담중·status2 need CTA='견적 보내기'"
  source: PRD Partner Quotation / index.html st.ver·defaultTabForVer·renderVer
  confidence: extracted
```

### 2. 콘텐츠 스크롤 영역 패턴·정보 위계·메타데이터 (content body)

> nav chrome 을 제외한 본문 영역의 구성 순서, 상태 분기, 행 인터랙션, 정보 메타데이터 처리(주소지 마스킹·status 표기 등). 콘텐츠 필터 탭(sticky)도 본문 영역에 속하되 header 높이만큼 offset 을 갖는다.

```yaml
- id: PTN-LIST-01
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: structure
  rule: 상태 필터 탭은 콘텐츠 상단에 sticky 로 고정되고, 헤더(앱바/탑네비) 높이만큼 top offset 을 갖는다
  level: MUST
  component: FixedTab / position:sticky
  assertion: "tabbox position=sticky 이고 top = appbar(45) | topnav(71)"
  source: steps-common/.../list/ListView.tsx (TabBox)
  confidence: extracted

- id: PTN-LIST-02
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: structure
  rule: 리스트는 status enum 으로 필터하는 탭 + 검색 + 카드스택 + 페이지네이션 순서로 구성한다
  level: MUST
  component: ListView(callout→tab→search→contents)
  assertion: "DOM 순서: callout, tabbar, searchbar, cards, pagination"
  source: ListView.tsx / List.tsx
  confidence: extracted

- id: PTN-LIST-03
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: state-link
  rule: 리스트 status 는 loading/empty/error/populated 4분기로만 렌더하고, auth·FF 조건은 별도 축으로 분리한다
  level: MUST
  component: List.tsx (isLoading/isError/isSuccess + isEmpty)
  assertion: "4개 상태 컨테이너가 상호배타적으로 1개만 표시"
  source: List.tsx, ListContents.tsx
  confidence: extracted

- id: PTN-LIST-05
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: layout
  rule: 페이지네이션 노출 개수는 모바일(5)<데스크탑(10)로 화면폭에 비례시킨다
  level: SHOULD
  component: Pagination pageCount={isMobile?5:10}
  assertion: "mobile pageCount=5, desktop=10, row=10"
  source: ListContents.tsx (ListContentsView)
  confidence: extracted

- id: PTN-LIST-06
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: interaction
  rule: 행(카드) 전체가 상세로 가는 covered-link 이고, 행 내부 액션 버튼은 stopPropagation 으로 분리한다
  level: MUST
  component: StepCardView (CoveredLink + pointer-events)
  assertion: "card 클릭→detail, 채팅/계약 버튼 클릭은 detail 미발생"
  source: StepCardView.tsx
  confidence: extracted

- id: PTN-LIST-07
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: state-link
  rule: 상태별 행동 유도는 탭·ver 로 분기. ① **새로고침 FAB** (`showRefreshFab`): prod ver + 수락대기 탭만 sticky bottom-right. ② **PTR 넛징** (`showPtrNudge`): estimate ver + 수락대기 탭 — `↓ 아래로 당겨서 신규 오더 불러오기`. ③ **견적서 등록 FAB** (`showFabCapture`): estimate ver + **상담중 탭** + 오더 뷰 — 모바일 하단우측 FAB / 데스크탑 TopNav 우측 `gnb-capture`. estimate ver 에서 새로고침 FAB 는 미노출.
  level: SHOULD
  component: showRefreshFab · showPtrNudge · showFabCapture · .ptr-nudge · .fab-capture · .gnb-capture
  assertion: "prod refresh FAB=수락대기만; estimate PTR=수락대기·FAB견적등록=상담중; estimate refresh FAB 없음"
  source: index.html showRefreshFab/showPtrNudge/showFabCapture
  confidence: extracted

- id: PTN-LIST-10
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: data-meta
  rule: 개인정보(고객명·주소지)는 부분 마스킹 정책으로 노출한다. ① 고객명 = 첫 글자만 노출하고 나머지 글자는 글자수만큼 `*` 로 가린다(예 "스*******", "김**"). ② 주소지 = 도로명주소 + (법정동/단지명) 까지만 노출하고 상세주소(번지·동·호)는 끝에 ` ****` 로 마스킹한다(예 "전라북도 남원시 여수1길 21 (노암동) ****"). ③ 채팅 채널 닉네임도 동일 마스킹을 따른다. aria-label 등 접근성 텍스트에도 원문이 아닌 마스킹된 값을 사용한다.
  level: MUST
  component: ORDERS[].userName / mkItems(from,to) 주소 값 / CHATS[].name
  assertion: "card__name = 첫글자+`*`×N, 출발지/도착지 value 가 ` ****` 로 끝남, aria-label 에 비마스킹 원문 0건"
  source: index.html ORDERS/mkItems · CHATS / spec.md §9 콘텐츠 사전 (닉네임 마스킹)
  confidence: extracted

- id: PTN-LIST-11
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: data-meta
  rule: (UPDATED — Figma node 7475-7469 + 사용자 정렬 지정) 카드 헤더에서 status 표기 뱃지(수락대기/매칭완료/계약완료/상담거절/상담종료)와 FeeWaiverBadge("수수료 면제")를 모두 제거한다. 진행 상태는 상단 필터 탭으로만 표기한다. 카드 헤더 정보 위계 = **좌측 고객명(subTitle1·700·주정보) / 우측 정렬: 속성·단계 뱃지(PTN-LIST-12·14) ─4px─ chevron**. 뱃지는 우측 꺽쇠 바로 옆에 4px 간격으로 배치하고 **카드당 최대 1개만 노출**(충돌 시 우선순위: 견적 단계 > 무료 수락 가능 > 직접신청). 신청일은 헤더에서 본문 첫 행으로 이동해 이사 종류와 병합한다 — 본문 row1 = "종류·신청일 : {이사종류} · {createdDate} 신청".
  level: MUST
  component: StepCardView header(좌 card__name / 우 card__head-right: attrBadges + chevron, gap 4px) · body row1 "종류·신청일"
  assertion: "카드 내 status SquareBadge 0건; .badge--fee 0건; .card__badges 내 뱃지 ≤1개; 뱃지가 .card__head-right 내 chevron 좌측 위치; 헤더에 createdDate 없음; 본문 첫 행 dt='종류·신청일'"
  source: Figma 7475-7469 annotation(status 표기 뱃지 항목 제거) / index.html cardHTML / Badge_policy.md A-1·A-2(정책 doc 대조 — 정책 doc 의 헤더 status 뱃지+수수료 면제 뱃지 모델에서 의도적으로 이탈, 근거 components/OrderCard.md §5)
  confidence: extracted

- id: PTN-LIST-12
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: data-meta
  rule: (UPDATED — Figma node 7475-7469) 수락대기(status=request) 카드에 한해 헤더 우측(꺽쇠 옆)에 속성·인센티브 뱃지를 노출한다(다른 status 카드는 미노출). ① 직접신청 = 직접신청 리드일 때(subtle green). ② 무료 수락 가능 = 비인기 리드 인센티브로 "지금 수락 시 0원 차감" 대상일 때(subtle yellow). **두 뱃지는 상호 배타로 동시 노출하지 않는다 — 무료 수락 가능이 직접신청보다 우선한다.** FeeWaiverBadge("수수료 면제")는 오더 카드에서 완전히 제거한다(수락대기·비수락대기 모두). ※ 카드 뱃지의 노란색(무료 수락 가능)은 인센티브 식별용으로 유지되며, "노란색 금지"는 견적 검증 모달(PTN-LIST-15) 한정 규칙이다.
  level: MUST
  component: attrBadges(o) — status0: freeAccept ? .badge--free(IconWonSignCircleFilled) : direct ? .badge--direct(IconCheckCircleFilled) : '' (단일 산출)
  assertion: "수락대기 카드만 속성 뱃지 출현; 한 카드에 .badge--direct 와 .badge--free 동시 출현 0건; 오더 카드 전체 .badge--fee 0건; 비-수락대기(견적단계 외) 카드에 속성 뱃지 0건"
  source: Figma 7475-7469(Requested 변형 badge frame) annotation(비인기 리드 0원 차감 뱃지 추가) / 사용자 지정(무료 수락 가능) / index.html attrBadges / Badge_policy.md(A-2 수수료 면제 뱃지 제거 대조)
  confidence: extracted

- id: PTN-LIST-14
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: state-link
  rule: (Figma 7701:6105 · ver=estimate) 신규 탭 없이 상담중(status=2) 카드 뱃지로 견적 단계 표현. 단계 = `견적 작성 필요(need)` → `계약대기(wait)` (운영 검수·review 단계 없음). 단계 뱃지는 헤더 고객명 우측(꺽쇠 옆) — **need·wait 모두 노출**. CTA = need **`견적 보내기`**(brand-solid) + **`채팅 보기`**(normal) / wait **`견적서 확인`**(brand-outlined) + **`채팅 보기`**. prod ver = 단계 뱃지 없이 `계약 확정` 단일 버튼. **확정 견적 보내기** 제출 시 need→wait 전이.
  level: MUST
  component: EST_STAGE · cardEstStageBadge · contractBtn · chatBtn · TAB_FAB_CAPTURE_CODE(2)
  assertion: "ver=estimate status2 need 카드 .badge--est-need; wait 카드 .badge--est-wait; need CTA='견적 보내기'; wait CTA='견적서 확인'; 채팅 CTA='채팅 보기'; prod CTA='계약 확정'"
  source: PRD Partner Quotation / index.html contractBtn·attrBadges·EST_STAGE
  confidence: extracted

- id: PTN-LIST-16
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: data-meta
  rule: (NEW — Badge_policy.md B·C 대조) 카드 헤더 뱃지(PTN-LIST-11·12·14)와 별개로 액션·탭 뱃지를 둔다. ① 채팅 미읽음 N 뱃지 = 카드 **액션 영역**의 `채팅 보기` 버튼 내부(`.nbadge`)·채팅 목록 채널 카드에 부착(헤더 아님). 노출 = 채팅 채널 존재(`o.chat`) + 미읽음 수 > 0. ② 신규(New) dot 뱃지 = **수락대기 필터 탭**에 카운트 없는 dot 로 노출, 트리거 `hasNewStep()`(수락대기 status 0 오더 존재). 동일 조건으로 새로고침 FAB 도 수락대기 탭에서 함께 노출(PTN-LIST-07). 이 두 뱃지는 Badge_policy.md B/C 와 현행 구현이 일치한다.
  level: MUST
  component: cardHTML(.nbadge in card__actions) · hasNewStep() · 수락대기 탭 dot
  assertion: "N 뱃지는 .card__actions 내부에만 출현(.card__header 내 0건); 채팅 채널 없으면 채팅 버튼/N 뱃지 0건; 수락대기 탭 dot 은 status0 오더 존재 시에만; 새로고침 FAB 도 동일 탭/조건"
  source: Badge_policy.md B(채팅 미읽음)·C(New dot) / index.html cardHTML·hasNewStep / components/OrderCard.md §4
  confidence: extracted

- id: PTN-LIST-15
  page_type: ORDER-HISTORY
  scope: content-body
  rule_type: interaction
  rule: (PRD 단일등록 flow · Figma 7741:6027) OCR 견적 플로우 **capture → ocr → confirm → send**. sheet-check·임시저장·브라우저 confirm 없음. **capture**: 모바일 idle 배경 `assets/estimate-sample.png` · 등록 예정 썸네일 캐로셀(48×64) + dismiss 삭제 · `추가 촬영`∥`견적서 등록` 나란히 · `다시 찍기`(refresh 아이콘)=A4 프리뷰 내 라운드 pill · 추가 촬영 fly→썸네일 캐로셀. **confirm**: 제목 `견적 확인` · 요약(출발/도착/일정/차량/인원) · `기본 금액`/`기타 비용` · Footer `견적 수정` \| `확정 견적 보내기`(합계>0 활성). **send**: 모달 닫힘 · Snackbar `고객에게 확정 견적을 보냈어요!` · 오더 stage `need→wait`.
  level: MUST
  component: est-cap · est modal · sendEstimate
  assertion: "confirm 타이틀=견적 확인; Footer 확정 견적 보내기; send 후 estStage=wait; done 풀스크린 검토요청 없음"
  source: PRD Partner Quotation / index.html est modal·est-cap
  confidence: extracted

- id: PTN-LIST-17
  page_type: REVIEW-LIST
  scope: overlay
  rule_type: layout
  rule: (PRD Partner Review · ODS BottomSheet Type=fit Figma 2702:67104) 리뷰 답글·숨김 `.rev-modal` 타이틀 영역은 ODS `BottomSheet.Grabber` + `BottomSheet.Header` compound 를 따른다. **Grabber** = 상단 pill 40×4 · `--divider` · mobile only. **Header** = grid `24px|1fr|24px`(좌 spacer·중앙 Title·우 Close) · padding 4/16/12 · border-bottom 없음. **Title** = Body16L20_Bold 16/20/700 · ls -0.3px · center · `--foreground`. **Close** = IconX 24×24 regular · `--foreground`. **Overlay** = `#00000066`.
  level: MUST
  component: rev-modal · rev-modal__grabber · rev-modal__head · rev-modal__title · rev-modal__x
  assertion: "grabber pill 40×4 divider; head grid 24-1fr-24 border-bottom 0; title 16/20/700 center -0.3px; close svg 24 foreground; dim #00000066; desktop grabber hidden"
  source: ODS Figma 2702:67104 / components/BottomSheet.md / index.html rev-modal
  confidence: extracted
```

### 3. 컴포넌트 레벨 (버튼·뱃지·아이콘 등 원자 단위)

> 그룹 1·2 어디에 배치되든 일관되게 적용되는 원자 컴포넌트 규칙. 뱃지 색 의미 매핑, ODS 아이콘 강제 등.

```yaml
- id: PTN-LIST-08
  page_type: ORDER-HISTORY
  scope: component
  rule_type: structure
  rule: (UPDATED) SquareBadge 색은 의미(semantic)로 매핑한다. ⓐ status 뱃지(fill/weak — request=accentRed·ongoing=green·contract=red weak·rejected/closed=gray weak)는 종료계열을 weak 로 약화하는 매핑 원칙을 유지하되, 오더 카드에서는 더 이상 렌더하지 않는다(PTN-LIST-11). 캐시 내역 등 다른 지면 SquareBadge 재사용을 위해 클래스/매핑은 보존. ⓑ 카드 속성·인센티브 뱃지는 subtle variant + left icon 으로 표기: 직접신청 = subtle green(bg accentGreenWeak #E3FCEA / fg·icon accentGreen #15B869), 무료 수락 가능 = subtle yellow(bg #FCF4DD / fg #633701 / icon accentYellow #FFC300).
  level: SHOULD
  component: SquareBadge — status(fill/weak) · 속성(subtle green/yellow + left icon)
  assertion: "오더 카드 status SquareBadge 0건; 직접신청=accentGreen subtle, 무료 수락 가능=yellow subtle(bg #FCF4DD·fg #633701·icon #FFC300)"
  source: StepStatusBadge.tsx · Figma 7475-7469 SquareBadge subtle 토큰(get_variable_defs)
  confidence: extracted

- id: PTN-LIST-09
  page_type: ORDER-HISTORY
  scope: component
  rule_type: structure
  rule: 모든 아이콘은 ODS 아이콘(@bucketplace/icons)을 사용한다. 외부 아이콘 세트·손으로 그린 임의 SVG path·이모지/유니코드 글리프 금지. self-contained HTML은 `assets/ods-icons.js`의 `odsIcon()`/`odsNavIcon()`/`odsIconTile()` 헬퍼 또는 ODS SVG(viewBox 0 0 480 480, fill=currentColor, regular weight) 인라인을 사용한다. 아이콘 path 갱신은 `node scripts/gen-ods-icons.js` 로 @bucketplace/icons 에서 재추출. preview harness/스튜디오 컨트롤(디바이스 토글·드래그 핸들·리플레이) 아이콘은 feature가 아니므로 제외.
  level: MUST
  component: assets/ods-icons.js · odsIcon(name,{size}) · search_icon → IconX / IconChevronLeft/Right/Down / IconMagnifyingGlass / IconInfoCircle(Filled) / IconCalendar / IconWonSign / IconPerson / IconBubble / IconTextDocument / IconStarFilled / IconPhone / IconPhoto / IconLockFilled / IconArrowDiagonalOutward
  assertion: "feature 영역 svg viewBox=0 0 480 480 (ODS), 임의 24x24 stroke path·이모지 글리프 0건"
  source: CLAUDE.md §1 아이콘 규칙 / @bucketplace/icons / assets/ods-icons.js
  confidence: enforced

- id: PTN-LIST-09c
  page_type: ORDER-HISTORY
  scope: component
  rule_type: structure
  rule: 모든 뱃지(SquareBadge·상태 pill·속성 subtle badge)는 ODS SquareBadge 스펙을 따른다. variant(fill/weak/subtle)·semantic color·left icon 조합은 `components/StepStatusBadge.md`·`StepStatusBadge.tsx`·PTN-LIST-08 매핑을 ground truth 로 한다. 임의 border-radius·hex 배경·비-ODS 아이콘 조합 금지.
  level: MUST
  component: SquareBadge — status(fill/weak) · 속성(subtle green/yellow + ODS left icon)
  assertion: "뱃지 class=SquareBadge 계열 또는 spec 문서 variant 매핑; 비-ODS left icon 0건"
  source: components/StepStatusBadge.md · pattern-rules PTN-LIST-08
  confidence: enforced

- id: PTN-LIST-09d
  page_type: ORDER-HISTORY
  scope: component
  rule_type: structure
  rule: CTA·보조 액션 버튼은 ODS BoxButton 스펙(`ods-box-btn` CSS · size sm|md · variant primary1|primary2|normal|critical)을 사용한다. 임의 pill/button 스타일·비-ODS 아이콘 prefix 금지. 아이콘+라벨 버튼은 `odsIcon()` 16px(regular) + gap 4px 패턴을 따른다.
  level: MUST
  component: ods-box-btn · ods-box-btn--sm|md · ods-box-btn--primary1|primary2|normal|critical
  assertion: "feature CTA class에 ods-box-btn 포함; stroke 기반 24×24 prefix icon 0건"
  source: index.html ods-box-btn CSS · components/BottomSheet.md · ODS BoxButton
  confidence: enforced

- id: PTN-LIST-18
  page_type: CUSTOMER-MATCH
  scope: content-body
  rule_type: structure
  rule: (Figma 7420:73990 · B2C 인앱 계약) 매칭 파트너 카드(`cust-pcard` / MovingOrderCard)는 5블록 — status · 파트너명+평점 · 채팅 버블 · 견적 가격(+CTA) · tierA 책임보장 뱃지. 네비 타이틀 = **`매칭 파트너 목록`**. 견적 행 CTA — waiting·견적 미수신 progress = **`채팅하기`**(normal); 견적 수신 progress·confirm·contract = **`견적 확인`**(brand-solid); done = 라벨 **`확정 견적`** + **`견적 보기`**(normal). 견적 미수신 가격 = `파트너 확인중`(muted). 채팅 기본 카피(견적 수신) = `오늘이사에서 견적서를 보냈어요.`
  level: MUST
  component: custPcardHTML · cust-pcard__quote-btn
  assertion: "waiting|견적미수신 progress → CTA=채팅하기; 견적수신 progress|confirm|contract → CTA=견적 확인; done → 라벨=확정 견적·CTA=견적 보기"
  source: Figma 7420:73990 MovingOrderCard / 7178:118946 nav / index.html custPcardHTML
  confidence: extracted

- id: PTN-LIST-19
  page_type: CUSTOMER-MATCH
  scope: content-body
  rule_type: layout
  rule: (Figma 7178:118946) 모바일 컨테이너 `cust-match__inner` = width 100% · 좌우 padding 16. 콜아웃 섹션 `cust-match__callout-sect` = pt 16 · pb 24. 카드 리스트 `cust-match__list` = gap 12 · pb 16 · 카드 width 100%. 섹션 구분 `cust-match__sep` = ODS Divider height 12(모바일 full-bleed grouped 12px+H1) / 데스크톱 1px H1 margin 16.
  level: MUST
  component: custMatchHTML · cust-match__inner · cust-match__sep
  assertion: "inner px=16; callout-sect pt16 pb24; list gap12 pb16; sep=Divider12 mobile"
  source: Figma 7178:118946 OrderList_Detail / index.html cust-match CSS
  confidence: extracted
```

## 승격 메모
- `LIST·FEED` 패턴 산출물이 1건(이 페이지) → 현재 **페이지 로컬**. remodeling-steps 등 동형 페이지 추가 시 PTN-LIST-* 공통 승격 후보.
- **Preview harness**(viewport·스튜디오 패널·postMessage) = `prototype-preview-pattern.md` — PTN-LIST-* feature 룰과 분리 유지.
