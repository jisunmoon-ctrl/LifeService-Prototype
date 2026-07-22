# 이사/O2O 웹 Breakpoint 레이아웃 패턴 규칙

측정일: 2026-07-22 · 환경: `qa-web.dailyhou.se` · 측정 폭: 375 / 768 / 1024 / 1256 / 1440
방법: Playwright 로 각 폭에서 실제 렌더 후 `getBoundingClientRect` + `getComputedStyle` 채집, 로드된 stylesheet 의 `CSSMediaRule` 전수 수집

> **범위 제외** (CLAUDE.md §2): GNB(글로벌 상단 내비) · OS statusbar 는 feature 가 아니므로 규칙 대상에서 제외한다. 단 sticky 오프셋 계산에 필요하므로 §6 에 높이만 기록한다.

---

## 0. 측정 커버리지

| 페이지 | URL | 상태 |
|---|---|---|
| movinghome | `/moving` | ✅ 5개 폭 |
| form | `/moving/apply?movingType=HOME` | ✅ 5개 폭 (로그인) |
| orderlist | `/my/consultations?consultationType=0` | ✅ 5개 폭 (QA 계정, 이사 10건 실데이터) |
| orderdetail | `/moving/matching/6a5ed684…` | ✅ 5개 폭 (QA 계정, 매칭중 상태) |
| partnerhome | `/partners/{id}` | ✅ 5개 폭 (비로그인 공개) |

**전 페이지 × 전 폭에서 가로 overflow 없음** (`scrollWidth == innerWidth`).

> orderdetail 은 고객 PII(성명·연락처·주소)를 포함한다. 측정 스크립트에 digit-run 마스킹을 적용했고 실측 노트·본 문서에 PII 를 남기지 않았다.
> orderlist 는 1차로 빈 계정(empty state)에서도 측정했으나, 본 문서 수치는 **실데이터 측정 기준**이다.

---

## 1. Breakpoint 정의

5개 페이지의 stylesheet 에서 수집한 width 미디어쿼리는 **완전히 동일한 집합**이다.

| 조건 | movinghome | partnerhome | form | orderlist | orderdetail |
|---|---|---|---|---|---|
| `max-width: 767px` | 18 | 18 | 20 | 36 | 20 |
| `min-width: 768px` | 12 | 28 | 24 | 32 | 20 |
| `max-width: 1023px` | 8 | 8 | 8 | 8 | 8 |
| `min-width: 1024px` | 11 | 23 | 7 | 9 | 9 |
| `max-width: 1255px` | 2 | 2 | — | — | — |
| `min-width: 1256px` | 6 | 6 | 7 | 9 | 9 |

**R1. Breakpoint 는 768 / 1024 / 1256 세 개다. 그 외 값을 새로 만들지 않는다.**

| Tier | 범위 | 통칭 |
|---|---|---|
| **XS** | `< 768` | mobile |
| **SM** | `768 ~ 1023` | tablet |
| **MD** | `1024 ~ 1255` | desktop |
| **LG** | `≥ 1256` | desktop wide |

부수 조건: `(pointer: coarse)` / `(hover: hover) and (pointer: fine)` 로 터치·호버 분기를 별도 사용. **뷰포트 폭으로 터치 여부를 추정하지 않는다.**

> **ODS 에는 breakpoint·grid·spacing 토큰이 없다.** ods-hermes 인덱스에 레이아웃 foundation 문서가 없고, `get_tokens` 도 "ODS에는 spacing/radius 토큰이 없으며 컴포넌트 단위로 값이 내장되어 있습니다"라고 명시한다. 즉 아래 값들은 **서비스 레벨 관행**이며, 색·타이포만 ODS 토큰을 따른다.

---

## 2. Gutter ladder (좌우 여백)

**R2. 좌우 gutter 는 `16 → 40 → 60` 3단이다. 1256 에서 더 늘리지 않는다.**

| Tier | gutter | 검증 |
|---|---|---|
| XS | **16** | partnerhome · orderlist · orderdetail · form · footer |
| SM | **40** | partnerhome · orderlist · orderdetail · footer |
| MD | **60** | partnerhome · orderlist · orderdetail · footer |
| LG | **60** (고정, 이후 컨테이너 중앙 정렬) | 동일 |

full-bleed 컨테이너를 쓰는 3개 페이지와 footer 가 **완전히 일치**한다. 이 사다리는 확정 규칙으로 취급해도 된다.

---

## 3. Container 최대 폭

**R3. shell 최대 폭은 `1256`, 그 안의 콘텐츠 최대 폭은 `1136` (= 1256 − 60×2) 이다.**

`max-width: 1256px` 확인: footer `div.e1nsvcrd5` · orderlist `div.e124gd600` · orderdetail `div.css-14iwhew`
`max-width: 1136px` 확인: partnerhome `div.e1cb5dzo2`
1440 에서 넘치는 폭은 **좌우 균등 여백**으로 흘린다 (컨테이너 x=92 또는 152).

### 콘텐츠 폭 사다리 (archetype A 기준)

| vw | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| 콘텐츠 내부 폭 | **343** | **688** | **904** | **1136** | **1136** |

공식: `min(vw − 2×gutter, 1136)` — orderlist·orderdetail·partnerhome 3개 페이지에서 동일하게 검증됨.

---

## 4. Container archetype — ⚠️ 4종이 혼재

같은 서비스인데 페이지마다 desktop 컨테이너 전략이 다르다.

| | archetype | 전환 BP | desktop 폭 | 사용처 |
|---|---|---|---|---|
| **A** | fluid → 1136 cap | 768 / 1024 | 904 → 1136 | **orderdetail · orderlist · partnerhome** |
| **B** | 고정 720 중앙 | **1024** | **720 고정** (더 안 넓어짐) | movinghome |
| **C** | 고정 478 중앙 | **768** | **478 고정** (더 안 넓어짐) | form |
| **D** | 고정 300 중앙 | 없음 | 300 고정 | 로그인 등 인증 유틸 |

**A 가 5개 중 3개로 다수파다. 신규 화면은 A 를 기본으로 하고, B/C 를 쓸 때는 사유를 남긴다.**

**R4. 어느 archetype 이든 XS 는 full-bleed + gutter 16 단일 컬럼이다.** 차이는 전부 SM 이상에서만 발생한다.

**R5. 전환 breakpoint 는 archetype 이 정한다.**
- A → 768 에서 gutter 40, 1024 에서 gutter 60 (2단 분할 여부는 페이지가 결정 → §5)
- B → **1024 에서만** 전환 (768 은 XS 와 레이아웃 동일)
- C → **768 에서만** 전환 (1024·1256 은 폼 콘텐츠에 아무 영향 없음)

---

## 5. 2단 분할 규칙

**R6. 2단 분할은 archetype A 의 의무가 아니라 선택이다.**
`orderdetail` 은 archetype A 이면서 **어느 breakpoint 에서도 분할하지 않고** 단일 컬럼이 1136 까지 그대로 넓어진다. 콘텐츠 성격(단일 흐름 상세)이 분할 여부를 정한다.

| 페이지 | 전환 BP | 좌 | gap | 우 (max) | 합 |
|---|---|---|---|---|---|
| **orderdetail** | **없음** | — | — | 단일 컬럼 343→1136 | — |
| orderlist | 768 | nav 127 / 134 / 160 | 16 → **129** | 545 / 754 / **847 (cap)** | 688 / 904 / 1136 |
| partnerhome | 1024 | rail **300** | **60** | 544 / 776 (무제한) | 904 / 1136 |
| movinghome | 1024 | aside **220** | **20** | main **480** (고정) | 720 |

**R7. 2단 분할 시 좌측 rail 은 고정폭, 우측 main 이 신축한다** — 3개 페이지 공통.

**R8. 우측 main 에 상한을 두면, 상한 도달 후 잔여 공간은 두 컬럼 사이로 간다.**
orderlist `div.css-1lnshqo` 는 `max-width: 847px`. LG 에서 `160 + 129 + 847 = 1136` 이 되는 이유이며, space-between 동작이다. 상한을 둘지 여부는 의도적으로 결정할 것.

**R9. XS 에서 좌측 nav rail 은 상단 가로 탭바로 전환한다.** orderlist: rail(127~160) → 상단 탭 3×125 full-bleed. rail→가로탭이 XS 대응 표준 패턴.

---

## 6. Sticky / fixed 스택 (오프셋 기준)

**R10. 상단 고정 요소 높이는 XS 51 / SM+ 81 이다.** 콘텐츠 상단 오프셋과 스크롤 앵커는 이 값을 쓴다.

| 요소 | position | XS | SM+ | z-index | 비고 |
|---|---|---|---|---|---|
| GNB header | fixed top:0 | **51** | **81** | 1102 | 범위 제외(chrome) |
| 서비스 2차 nav (o2o) | fixed top:51/81 | **41** | **52** | 1101 | 범위 제외(chrome) |
| partnerhome 탭바 | sticky (MD+ fixed top:81) | 45 | 45 | 1 | **feature** |
| form 하단 CTA | sticky bottom:0 | 60 | 60 | — | **feature** |
| partnerhome 하단 CTA | sticky bottom:0 | 80 | 80 | — | **feature** |
| orderdetail | **sticky 없음** | — | — | — | — |
| orderlist | **sticky 없음** (chrome 제외) | — | — | — | — |

누적 상단 오프셋: 이사 도메인 **51 / 81**, o2o 도메인 **92 / 133**.

**R11. 하단 sticky CTA 의 폭은 콘텐츠 컨테이너를 따른다.**
- form: XS full-bleed(375) → SM+ **478** (폼 컬럼 폭과 동일, 중앙 정렬)
- partnerhome: XS/SM full-bleed → **MD 이상에서 제거** (우측 컬럼 안 CTA 로 대체)

**R12. 데스크톱에서 하단 고정 CTA 유지 여부는 archetype 이 정한다.** 좁은 고정 컬럼(C)은 유지, 넓은 2단(A)은 제거. 상세형(orderdetail)은 애초에 두지 않는다.

---

## 7. 세로 리듬

**R13. 세로 간격은 4의 배수만 쓴다.** 측정값: `2 · 4 · 8 · 12 · 16 · 18 · 20 · 24 · 36 · 40 · 60 · 80`

| 용도 | 값 | 검증 |
|---|---|---|
| 태그 chip 행 gap | **2** | movinghome |
| 캐러셀 chip / 캘린더 셀 / 필터 chip gap | **4** | movinghome · form · orderlist |
| 사진 그리드 · footer 링크 gap | **8** | partnerhome · footer |
| footer 정보 gap | **12** | 전 페이지 |
| 리스트 아이템 gap · 카드 padding | **16** | movinghome · partnerhome · orderdetail |
| FAQ 항목 padB | **18** | orderlist |
| 섹션 스택 gap | **24** | partnerhome · form · orderdetail |

**R14. breakpoint 별로 바뀌는 세로 값은 아래 4개뿐이다.**

| 항목 | XS | SM+ |
|---|---|---|
| footer padY | **30** | **40** |
| orderdetail 콘텐츠 padY | **16** | **40** |
| orderdetail stack gap | **0** | **16** |
| form wrapper padY | **0** | **80** |

(+ movinghome desktop hero padY **60**, MD 이상 전용)

나머지 세로 간격은 **전 breakpoint 불변**이다. 반응형에서 세로 리듬을 임의로 재조정하지 않는다.

---

## 8. 반복 그룹 / 캐러셀

**R15. 컬럼 수는 breakpoint 로 바뀌지 않는다. 아이템 폭만 신축한다.** — 5개 페이지 전부에서 확인된 가장 강한 규칙.

| 그룹 | 컬럼 | gap | 아이템 폭 (375 / 768 / 1024 / 1256) |
|---|---|---|---|
| **orderlist 상담 카드** | **1열 고정** | 0 (divider) | 343 / 543 / 752 / 845, 카드 h **113** |
| orderdetail 시세 3분할 | **3열 고정** | 0 | 114 / 229 / 301 / 379 |
| orderdetail 정보 리스트 | **1열 고정** | 24 | 컬럼 전폭 |
| partnerhome 사진 그리드 | **3열 고정** | 8 | 109 / 224 / 176 / 253 |
| form 캘린더 | **7열 고정** | 4 | 셀 높이 44 고정, 트랙만 신축 |
| partnerhome 탭바 | **4열 고정** | 0 | 94 / 172 / 226 / 284 |
| orderlist XS 탭바 | **3열 고정** | 0 | 125 |

**R16. 가로 스크롤 캐러셀은 어느 breakpoint 에서도 그리드로 리플로우하지 않는다.**
`overflow-x: auto` + 고정 아이템 폭 유지 (movinghome 팁 chip 150 → MD 157, 서비스 태그 gap 2).

→ **이 서비스의 반응형은 "컬럼 수를 늘리는" 방식이 아니라 "컨테이너 폭과 gutter 만 바꾸는" 방식이다.** 유일한 컬럼 수 변화는 §5 의 1단→2단 분할과 §R9 의 rail→탭바 전환뿐. 리스트 카드조차 데스크톱에서 2열이 되지 않는다.

---

## 9. 타이포 스텝 — ⚠️ 페이지마다 불일치

| 페이지 | 역할 | XS | SM | MD+ |
|---|---|---|---|---|
| movinghome | 섹션 제목 h2 | 17/26 **w600** | 17/26 w600 | **20/28** w600 |
| partnerhome | 페이지 제목 h2 | 20/28 **w700** | **24/32 w600** | 24/32 w600 |
| partnerhome | 섹션 제목 h3 | 20/28 w700 | 20/28 w700 | 20/28 w700 |
| **orderdetail** | 섹션 제목 h2 | **20/28 w700** | 20/28 w700 | 20/28 w700 (불변) |
| form | 스텝 제목 h2 | 24/32 w600 | 24/32 w600 | 24/32 w600 (불변) |
| orderlist | 페이지 제목 h1 | **없음** | 24/32 **w700** | 24/32 w700 |

**R17. 같은 위계의 제목이 페이지마다 다른 램프·다른 weight(600 vs 700)를 쓴다.** 신규 화면 기본값 제안 (§12 확정 필요):

- 페이지 제목: XS `20/28` → SM+ `24/32`
- 섹션 제목: XS `17/26` → MD+ `20/28`
- weight 는 **600 으로 통일** (ODS textStyle 토큰으로 매핑해 사용)

**R18. 컬럼 폭이 고정된 화면은 타이포도 고정한다.** form(478 고정)·orderdetail(섹션 제목)은 전 breakpoint 단일 값 — 컬럼이 안 넓어지면 타입도 키우지 않는 것이 일관적이다.

---

## 10. 컨트롤 치수

| 컨트롤 | XS / SM | MD+ |
|---|---|---|
| 주요 CTA (movinghome 견적받기) | h **32**, radius **6** | h **40**, radius **8** |
| orderdetail 매칭 중단 | h 32, radius 6 | **h 32, radius 6 (불변)** |
| 하단 sticky CTA 바 | h 60 (form) / 80 (partnerhome) | 동일 |
| orderlist XS 탭 | h 46, fs 16, w700 | — |
| orderlist rail nav 버튼 | — | h **60**, pad 16 |
| orderlist 필터 chip | — | h 32, gap 4 |
| form 캘린더 날짜 셀 | 32×32, radius 8 | 동일 |
| form 월 이동 버튼 | 40×40, radius 100% | 동일 |

**R19. CTA 의 h32/r6 → h40/r8 스텝은 movinghome 에서만 나타난다.** orderdetail 의 동급 버튼은 전 구간 h32/r6 로 불변이다. **전역 규칙으로 확대하지 말 것** — 페이지별 의도로 다룬다.

---

## 11. 확정된 규칙 요약

| # | 규칙 | 확신도 |
|---|---|---|
| R1 | breakpoint 768 / 1024 / 1256 | **확정** (5/5 페이지 stylesheet 일치) |
| R2 | gutter 16 / 40 / 60 | **확정** (4/5 + footer 일치) |
| R3 | shell max 1256, 콘텐츠 max 1136 | **확정** (4개 컨테이너에서 명시적 max-width) |
| R15 | 컬럼 수 breakpoint 불변 | **확정** (5/5 페이지, 예외 없음) |
| R4 | XS 는 full-bleed 1단 | **확정** (5/5) |
| R7 | 좌 rail 고정 / 우 main 신축 | 강함 (3/3 분할 페이지) |
| R10 | 상단 오프셋 51 / 81 | **확정** (5/5) |
| R14 | 세로값 breakpoint 불변(4개 예외 제외) | 강함 |
| R17 | 제목 타이포 램프 | ⚠️ **불일치 — 확정 안 됨** |
| R19 | CTA 크기 스텝 | ⚠️ **불일치 — 확정 안 됨** |

---

## 12. 정리가 필요한 불일치

| # | 불일치 | 현황 | 제안 |
|---|---|---|---|
| 1 | desktop 컨테이너 전략 | A(1136) / B(720) / C(478) 혼재 | **A 를 기본**(3/5 다수파), B·C 는 목적형(피드·폼)으로 한정 |
| 2 | 레이아웃 전환 BP | A=768·1024 / B=1024 / C=768 | archetype 별로 명시 고정 |
| 3 | 2단 rail 폭·gap | 220/20, 300/60, 127~160/16 | rail **300** + gap **60** 으로 통일 검토 |
| 4 | 우측 main 상한 | orderlist 만 847 cap, partnerhome 무제한 | 가독 최대폭 기준 통일 (847 채택 검토) |
| 5 | 제목 weight | 600 과 700 혼용 | **600** 통일 |
| 6 | 제목 반응형 램프 | 4가지 상이 | §9 기본값 채택 |
| 7 | CTA 크기 스텝 | movinghome 만 h32→h40 | 단일 크기로 통일 검토 |
| 8 | ODS 레이아웃 토큰 부재 | breakpoint/spacing 토큰 없음 | ODS foundation 에 추가 제안 |

---

## 13. 신규 화면 체크리스트

1. [ ] breakpoint 는 **768 / 1024 / 1256** 만 사용했는가 (R1)
2. [ ] gutter 는 **16 / 40 / 60** 사다리를 따르는가 (R2)
3. [ ] shell max **1256**, 콘텐츠 max **1136** 을 지켰는가 (R3)
4. [ ] archetype(A/B/C)을 명시하고 전환 BP 를 그에 맞췄는가 (R4·R5)
5. [ ] 2단 분할 여부를 콘텐츠 성격으로 결정했는가 — 상세형은 단일 컬럼도 정답 (R6)
6. [ ] 2단 분할 시 좌 rail 고정 / 우 main 신축 구조인가 (R7)
7. [ ] 우측 컬럼 상한을 둘지 의도적으로 결정했는가 (R8)
8. [ ] XS 에서 좌측 rail 을 상단 가로 탭으로 전환했는가 (R9)
9. [ ] 상단 오프셋을 51(XS)/81(SM+) — o2o 는 92/133 — 로 계산했는가 (R10)
10. [ ] 하단 sticky CTA 폭이 콘텐츠 컨테이너를 따르는가 (R11)
11. [ ] 세로 간격이 4의 배수이고 breakpoint 간 불변인가 (R13·R14)
12. [ ] **컬럼 수를 breakpoint 로 바꾸지 않았는가** (R15·R16) — 리스트 카드도 1열 유지가 기본
13. [ ] 색·타이포를 **ODS 토큰 참조**로 구현했는가 (raw hex 금지 — CLAUDE.md §2)
14. [ ] 아이콘을 **ODS 아이콘**으로만 썼는가 (CLAUDE.md §1)
15. [ ] GNB·statusbar 를 구현 범위에서 제외했는가 (CLAUDE.md §2)
16. [ ] 전 breakpoint 가로 overflow 가 없는가 — 측정한 5개 페이지 × 5개 폭 **전부 없음**이 기준선

---

## 부록: 페이지별 실측 요약

### orderdetail (archetype A · 분할 없음) — A 의 가장 순수한 형태
| | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| gutter | 16 | 40 | 60 | 60 | 60→중앙 |
| 콘텐츠 폭 | 343 | 688 | 904 | **1136** | 1136 (x=152) |
| 레이아웃 | **1단** | **1단** | **1단** | **1단** | **1단** |
| 콘텐츠 padY | 16 | 40 | 40 | 40 | 40 |
| stack gap | 0 | 16 | 16 | 16 | 16 |
| 시세 3분할 | 3열 × 114 | 3열 × 229 | 3열 × 301 | 3열 × 379 | 3열 × 379 |
| h2 | 20/28 w700 | 동일 | 동일 | 동일 | 동일 |
| sticky | **없음** | 없음 | 없음 | 없음 | 없음 |

### orderlist (archetype A · 768 분할)
| | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| gutter | 16 | 40 | 60 | 60 | 60→중앙 |
| 내부 폭 | 343 | 688 | 904 | 1136 | 1136 |
| 레이아웃 | 가로 탭 3×125 | nav 127 + 545 | nav 134 + 754 | nav 160 + **847 cap** | 동일 |
| nav↔main gap | — | 16 | 16 | **129** | 129 |
| 카드 | 1열 h113 | 1열 | 1열 | 1열 | 1열 |
| 페이지 제목 | 없음 | h1 24/32 w700 | 동일 | 동일 | 동일 |

### partnerhome (archetype A · 1024 분할)
| | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| 컨테이너 | 375 | 688 | 904 | **1136** | 1136 (중앙) |
| 레이아웃 | 1단 | 1단 | rail 300 + gap 60 + 544 | rail 300 + 776 | 동일 |
| 탭바 | 4×94 | 4×172 | 4×226 | 4×284 | 4×284 |
| 하단 CTA | sticky h80 | sticky h80 | **없음** | 없음 | 없음 |
| h2 | 20/28 w700 | 24/32 w600 | 24/32 | 24/32 | 24/32 |

### movinghome (archetype B)
| | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| 콘텐츠 폭 | 375 fluid | 768 fluid | **720 고정** | 720 | 720 |
| 콘텐츠 x | 0 | 0 | 152 | 268 | 360 |
| 레이아웃 | 1단 | 1단 | aside 220 + gap 20 + main 480 | 동일 | 동일 |
| h2 | 17/26 | 17/26 | 20/28 | 20/28 | 20/28 |
| CTA | h32 r6 | h32 r6 | h40 r8 | h40 r8 | h40 r8 |

### form (archetype C)
| | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| 폼 컬럼 | 343 | **478 고정** | 478 | 478 | 478 |
| 컬럼 x | 16 | 145 | 273 | 389 | 481 |
| wrapper padY | 0 | 80 | 80 | 80 | 80 |
| 캘린더 | 7열 gap4 셀44 | 동일 | 동일 | 동일 | 동일 |
| 하단 CTA | h60 full-bleed | h60 w478 | 동일 | 동일 | 동일 |
| h2 | 24/32 | 24/32 | 24/32 | 24/32 | 24/32 |

---

## 부록: 재측정 방법

```
~/Desktop/prototypes/_bp-spec/probe.js    # Playwright 측정 스크립트 (URL 상수만 교체)
~/Desktop/prototypes/_bp-spec/raw/        # 페이지별 실측 노트 5종
```

`probe.js` 는 5개 폭을 순회하며 shell 체인·섹션 트리·반복 그룹·sticky 요소·타이포·미디어쿼리를 채집하고, digit-run 마스킹으로 PII 를 제거한다.
Playwright MCP `browser_run_code_unsafe` 에 `filename` 으로 넘겨 실행.
인증 필요 페이지는 **브라우저에서 사람이 직접 로그인한 뒤** 동일 세션으로 실행한다.
orderdetail 은 **로그인 계정이 소유한 레코드 ID** 여야 한다 (타 계정 ID 는 "잘못된 접근입니다").
