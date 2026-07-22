# QA — 시공/생활 상담내역 (매칭 리스트)

- **대상 컴포넌트**: `MatchingListScreen` — [src/app/flows/b2c/construction-crosssell/components/CrossSellResult.tsx](../../src/app/flows/b2c/construction-crosssell/components/CrossSellResult.tsx)
- **True Source**: Figma `7785-61526` (`[Mobile]Form_Confirm`, fileKey `O8dlcVJHtXfhuvZK3kAnEw`) — Code Connect 매핑 포함
- **프리뷰 진입**: Flow Ideation → 시공 신청 후 크로스셀링 Flow → ⑦ 매칭 리스트 (상담내역)
- **viewport**: 375/360 mobile (device 프리셋)
- **캡처**: `qa/figma-7785-61526.png` · `qa/prototype-mobile.png`
- **prod(런타임) 대조**: ❌ 미수행 — 로그인 필요 페이지(마이 상담내역). Figma Code Connect(레포 컴포넌트·토큰 명시)를 1순위 ground truth로 사용. provenance = `repo`(Figma Code Connect) / 시각 = `runtime`(프로토타입 캡처).

## 결론
- **모바일(Figma 7785)**: 레이아웃·타이포·간격·상태 카피 **거의 픽셀 일치**.
- **데스크톱**: 초기 구현이 중앙 560 폼카드였으나, 실제 prod(사용자 캡처)는 **좌측 사이드바 + 와이드 리스트 my-page** 레이아웃 → **전면 재작업**(Round 2 참조).
- 명확한 fidelity 갭 **이사청소 아이콘(🔴 H-1)** + 데스크톱 레이아웃 + M-3/M-4 **수정 완료**.

> **Round 2 업데이트(prod 데스크톱 대조)**: 아래 `## 수정 반영` 섹션 참조. prod URL(`o2o.qa-web.dailyhou.se/my/consultations`)은 로그인 게이트라 Playwright 직접 접근 불가 → **사용자 제공 데스크톱 스크린샷 + Figma**를 ground truth로 사용(provenance = `runtime`(screenshot) / `repo`(Figma)).

---

## 🔴 High

### [H-1] 이사청소 리스트 아이템 아이콘 오류 (자산 규칙 위반)
- **증상**: 두 리스트 아이템(이사 / 이사청소)이 **동일한 박스 아이콘**(`AssetShippingBoxSmallGenuineBlueSvg`)을 사용.
- **Figma(true source)**: 서비스별로 **다른 에셋**을 명시.
  - 이사 → `AssetShippingBoxSmallGenuineBlueSvg` (박스)
  - 이사청소 → `AssetShippingBoxAndBroomSmallGenuineBlueSvg` (박스 + **빗자루**)
- **근거**: `CrossSellResult.tsx:82` `ListItems`가 `list.map`에서 모든 항목에 같은 컴포넌트를 렌더. 서비스 키(`k`)에 따라 에셋을 분기하지 않음.
- **패키지 확인**: `@bucketplace/assets/svg`에 `AssetShippingBoxAndBroomSmallGenuineBlueSvg` **존재**(설치됨). 임의 자산 아님.
- **조치(자동 수정 가능)**: `SERVICE_ICON` 매핑 추가 — `moving` → box, `cleaning` → boxAndBroom, `construction` → (해당 시 별도). `ListItems`에서 `k`로 분기.
- **CLAUDE.md 근거**: 자산은 ODS 정확 자산 조회·반영(이모지/근사 금지) + 서비스 아이덴티티 반영.

---

## 🟡 Med

### [M-1] 필터 칩 — ODS Chip 컴포넌트/토큰 미참조 (CR-10)
- **Figma**: ODS `<Chip size="sm" variant="solid">`(선택) / `variant="normal">`(비선택) × 4.
- **프로토타입**: 커스텀 `<button>` 마크업 (`CrossSellResult.tsx:50-61`).
- **시각 대조**: 선택 = `#141414` solid / 흰 글자 / bold / radius full / h32 / 13px, 비선택 = 흰 bg / `#E6E6E6` border / `#2F3438` / 13px. → **Figma 렌더와 시각 일치**.
- **판정**: 값은 근접하나 (a)ODS Chip 컴포넌트 미사용, (b)`sm` variant의 실제 토큰(라벨 size·idle 라벨색·padding)을 catalog에서 확정하지 않음. 프로토타입 스코프에선 시각 일치로 통과, **문서화 이슈**.
- **조치**: (self-contained 아니므로) 가능하면 실제 ODS Chip 사용, 아니면 `sm` 토큰값을 `get_component`/catalog로 확정 후 주석.

### [M-2] Raw hex 직접 사용 (CR-12)
- **증상**: `#2F3438` `#828C94` `#141414` `#E6E6E6` `#EAEDEF` `#00A1FF` 등이 CSS 변수/토큰명 없이 인라인.
- **정확성**: 이 화면 한정, 값 자체는 **Figma 디자인 토큰과 일치** — `#2F3438`=neutral600, `#828C94`=neutral500, `#E6E6E6`=border, `#141414`=foreground. 즉 **틀린 색이 아니라 토큰 참조 표기가 없는** 상태.
- **조치**: 값 변경 없이 ODS 토큰명 변수/주석으로 래핑(`--foreground`, `--neutral600`(=BDS neutral600, ODS 매핑 시 delta 표기) 등). `#2F3438`/`#828C94`는 BDS(legacy) 계열 — Figma가 이 토큰으로 지정했으므로 이 화면에선 유지가 맞고, migration delta로만 기록.

### [M-3] Divider — ODS Divider 미사용 + 선행 divider 1개 추가
- **Figma**: ListItem 사이 `<Divider height={1}/>` (아이템 **아래**마다).
- **프로토타입**: `h-px bg-[#EAEDEF]` 수동. 추가로 첫 아이템 **위**에 divider 1개 선행(`CrossSellResult.tsx:78`) — Figma엔 없음(tab 하단 경계만).
- **영향**: 시각 미미(리스트 상단 구분선). 정합상 선행 divider 제거 또는 tab 하단 경계로 통합 권장.

### [M-4] 기간 필터(Select) chevron 아이콘 — 커스텀 SVG
- **Figma**: ODS `IconArrowTriangleDown` (`#828C94`).
- **프로토타입**: 손으로 그린 `<path d="M4 6L8 10L12 6">` chevron (`CrossSellResult.tsx:66-68`).
- **CLAUDE.md 근거**: 아이콘은 ODS 아이콘 강제(임의 SVG path 금지). `search_icon`으로 확정 후 인라인 권장. 나머지 Select 박스(w116/h32/border#E6E6E6/rounded4/14px#2F3438)는 Figma와 일치.

---

## 🟢 Low / 관찰

### [L-1] 탭 라벨 — 프로토타입이 오히려 정확
- Figma는 placeholder `메뉴1 ×3`. 프로토타입은 `신청 내역 / 받은 문서 / 채팅`(prod 실제 IA). **문제 아님** — 프로토타입이 더 정확. (탭 스타일 15px bold `#141414` selected + 2px 하단바 / 15px `#828C94` idle — Figma Body15L24_Bold 토큰과 일치.)

### [L-2] 리스트 아이템 타이포/간격 — 일치
- title 18px SemiBold `#2F3438`(Heading18) ✓ / "업체 매칭 중" 14px `#828C94`(Body14L18) ✓ / "딱 맞는 업체를 찾고 있어요" 16px `#2F3438`(Body16L20) ✓ / "방금" 14px `#828C94` ✓ / 아이템 gap 12·padding 16·info gap 7·title gap 4 ✓.

---

## 제외 영역 (CLAUDE.md §2 / 스킬 §3.1 — 비교 대상 아님)
- **statusbar**(9:41·배터리·신호) / **home indicator** — Figma 노드엔 포함되나 OS chrome이므로 프리뷰 미구현·QA 제외.
- GNB 없음(webview 컨텍스트) — 해당 없음.

---

## 자동 수정 가능 항목
- **[H-1]** 이사청소 아이콘 → `AssetShippingBoxAndBroomSmallGenuineBlueSvg` 분기 (안전·명확)
- **[M-3]** 선행 divider 제거
- **[M-4]** chevron → ODS `IconArrowTriangleDown` 인라인

> "자동 수정 적용해줘" 하면 위 3건을 반영 후 재캡처 QA.

---

## 수정 반영 (Round 2 — prod 데스크톱 레이아웃 + QA 픽스)

- **캡처**: `qa/prototype-desktop.png`(재작업 후) · `qa/prototype-mobile.png`(픽스 후)
- **빌드**: `npm run build` ✓ 통과 (4633 modules)
- **소스**: `CrossSellResult.tsx` 전면 개편

### ✅ 적용된 수정

| ID | 항목 | before → after |
|----|------|----------------|
| **H-1** | 이사청소 아이콘 | `ShippingBoxSmallGenuineBlue`(박스, 두 항목 공용) → **서비스별 분기**: 이사=박스 / 이사청소=`ShippingBoxAndBroomSmallGenuineBlue`(박스+빗자루). `ServiceIcon` 컴포넌트 신설. (모바일·데스크톱 공통 반영) |
| **M-3** | 선행 divider | 모바일 리스트 상단 불필요 divider 제거(`showLeadingDivider={false}`). 데스크톱은 prod처럼 유지. |
| **M-4** | 기간 드롭다운 chevron | 손그림 `<path>` → ODS `IconChevronDown`(`@bucketplace/icons` 추출본). |
| **레이아웃** | 데스크톱 | 중앙 560 폼카드 → **prod my-page**: GNB(OdsGlobalNavigation) + 페이지 타이틀(24px bold) + **좌측 사이드바 네비**(신청내역 파랑 active / 받은문서 / 채팅) + 와이드 리스트 + 우측 정렬 기간 드롭다운. |

### prod 데스크톱 대조 결과 (사용자 스크린샷 기준)

| 요소 | prod | 프로토타입 | 판정 |
|------|------|-----------|------|
| 페이지 타이틀 | 좌상단 "시공/생활 상담내역" | 동일(24px bold #141414) | ✅ |
| 좌측 사이드바 | 신청내역(파랑)/받은문서/채팅 세로 | 동일 | ✅ |
| 필터 칩 | 전체/전체시공/**부분시공**/이사 | 전체/전체시공/**이사/이사청소** | ⚠ 의도적 차이 — 플로우 맥락(이사·이사청소) 유지 결정(사용자 확정) |
| 기간 드롭다운 | 우측 정렬 "6개월 이내" | 동일(우측 정렬) | ✅ |
| 리스트 행 | 아이콘+타이틀+상태+desc+시간(우) | 동일 구조 | ✅ |
| 리스트 데이터 | 전체 히스토리(전체시공/욕실/주방/이사 등 다건, 다양 상태) | 이사·이사청소 2건("방금") | ⚠ 의도적 차이 — 크로스셀 플로우 신청완료 confirmation 맥락 유지(사용자 확정) |
| 프로모 배너 | 상단 "나만의 맞춤 인테리어…할인" 카드 | **미구현** | ❌ 생략 — QA 워터마크로 카피 판독 불가 → 창작 금지 원칙상 omit. 배너 카피 제공 시 추가 가능 |

### 제외 (CLAUDE.md §2 — GNB/statusbar chrome)
- 데스크톱 GNB(오늘의집 로고·검색·글쓰기) + 카테고리 내비(홈/주거공간시공/…)는 `OdsGlobalNavigation` 기본값 — prod 카테고리 라벨(전체시공/부분시공)과 다르나 **GNB chrome이므로 QA 비교 대상 아님**. 앱 내 다른 데스크톱 페이지와 일관되게 유지.

### 잔여 (문서화 — 시각 영향 없음)
- **M-1** 필터 칩이 ODS `Chip` 컴포넌트 대신 커스텀 마크업 (시각은 solid/normal 일치, CR-10).
- **M-2** raw hex 직접 사용 (CR-12) — 값은 Figma 토큰과 일치, 토큰명 표기만 부재.

> 프로모 배너 추가 또는 M-1/M-2 ODS 토큰화가 필요하면 후속 진행.

---

## 수정 반영 (Round 3 — 칩 필터링 + prod 1440 실측 스펙 정합)

- **Ground truth 추가**: `~/Downloads/o2o-consultation-desktop-ui-spec.md`(prod 1440px **실측** UI 스펙) + 풀페이지 스크린샷. prod URL은 여전히 로그인 게이트라 Playwright 직접 접근 불가 → 실측 스펙 md + 스크린샷을 runtime ground truth 로 사용(provenance = `runtime`).
- **빌드**: `npm run build` ✓ 통과
- **캡처**: `qa/prototype-desktop.png`(재정합 후) · `qa/filter-test-empty.png`(필터 빈 상태)

### ✅ 칩 필터링 동작 구현
- `CHIP_FILTER` 매핑(전체=null / 전체시공=construction / 이사=moving / 이사청소=cleaning) + `filtered` 파생. 모바일·데스크톱 공용.
- **빈 상태** `ListEmpty` 추가("해당 조건의 상담내역이 없어요").
- **검증**(Playwright): 전체시공 → 빈 상태 / 이사청소 → 이사청소 1건만 노출 / 전체 → 2건. ✅

### ✅ prod 1440 실측 스펙 정합 (데스크톱) — computed diff 전부 일치

| 요소 | prod 스펙(실측) | 프로토타입 computed | 판정 |
|------|----------------|-------------------|------|
| 페이지 타이틀 | 24px / 700 / rgb(47,52,56) | 24 / 700 / rgb(47,52,56) | ✅ |
| 사이드바 active | 20px / 700 / rgb(0,161,255) / bg rgb(240,248,252) | 동일 | ✅ |
| 사이드바 비활성 | 20px / 700 / rgb(47,52,56) | 동일 | ✅ |
| 사이드바 item | 160 × 60 | 160 × 60 | ✅ |
| 칩 active | 16px / bg rgb(47,52,56) / white / radius 16 | 16 / rgb(47,52,56) / white / 9999(=16@h32) | ✅ |
| 칩 idle | 16px / rgb(47,52,56) / border rgb(224,224,224) | 동일 | ✅ |
| 기간 드롭다운 | 32h / border rgb(224,224,224) / radius 4 / 14px | 동일 (1줄 렌더) | ✅ |
| 카드 제목 | 18px / 700 / rgb(47,52,56) | 동일 | ✅ |
| 카드 상태 | 14px / rgb(140,140,140) | 동일 | ✅ |
| 카드 설명 | 16px / rgb(20,20,20) | 동일 | ✅ |
| 카드 아이콘 | 24 × 24 | 24 × 24 | ✅ |
| 프로모 배너 | 845 × 80 이미지 배너 | 80h placeholder(위치·높이 재현) | ⚠ 크리에이티브 미제공 |

> **핵심**: 이전(Round 2) 데스크톱은 모바일 값을 그대로 써서 아이콘 40·칩 13px·title 600 등 실측과 어긋났음. Round 3에서 **데스크톱 전용 variant**로 분리해 prod 1440 실측값에 1:1 정합. 모바일(Figma 7785)은 기존 값 유지.

### ⚠ 의도적 차이 (사용자 확정 — 유지)
- **칩 라벨**: prod = 전체/전체시공/**부분시공**/이사 vs 프로토타입 = 전체/전체시공/**이사/이사청소** — 크로스셀 플로우(이사·이사청소) 맥락 유지.
- **리스트 데이터**: prod = 전체 히스토리 다건(전체시공/중문·도어/욕실/주방/이사, 다양 상태·상대시간) vs 프로토타입 = 이사·이사청소 2건("방금") — 신청완료 confirmation 맥락 유지.
- **서비스 아이콘 색**: prod 부분시공(중문·도어/욕실/주방)은 주황 계열 에셋 — 플로우엔 해당 서비스 없음(이사=파랑 박스 / 이사청소=파랑 박스+빗자루만 노출).

### 잔여 (문서화)
- **프로모 배너**: 실제 크리에이티브(이미지/카피) 미제공 → 창작 금지 원칙상 placeholder. 자산 제공 시 교체.
- **BDS legacy 색**: prod가 `#2F3438`(neutral600)·`#8C8C8C`·`#E0E0E0` 등 BDS 계열 사용(ODS 미완전 마이그레이션). 프로토타입은 **prod 정합 우선**으로 동일 값 적용 — ODS 타깃 전환 시 `#141414`/`#E6E6E6` 등으로 migration delta(문서화).
- **M-1** 칩 ODS `Chip` 컴포넌트 미사용(시각 일치). **M-2** raw hex(값은 prod/토큰 일치).
