# Figma 모바일 프레임 → Responsive 프로토타입 생성 파이프라인

> **입력**: 컴포넌트가 포함된 **모바일(XS) Figma 노드 프레임** 1개 (보통 375px 폭)
> **출력**: 768 / 1024 / 1256 대응 프로토타입. **이 워크스페이스에서는 React/TSX** (통일 양식 — 루트 `README.md`). 워크스페이스 밖 단발 프로토타입일 때만 self-contained HTML.
> **핵심 전제**: 입력은 XS 한 벌뿐이다. SM/MD/LG 는 **디자인이 아니라 유도(derive)** 한다. 그 유도 규칙이 이 문서의 본체(§5)다.
> **레이아웃 값 출처**: [`PROTOTYPE-LAYOUT-SPEC.md`](./PROTOTYPE-LAYOUT-SPEC.md) — CSS 스캐폴드·토큰·검증 게이트. 본 문서는 *변환 절차*만 규정한다.
> **상위 지침**: `~/.claude/CLAUDE.md`. 충돌 시 CLAUDE.md 우선.

---

## 0. 왜 유도가 가능한가 (이 파이프라인의 성립 근거)

실측 결과 이 서비스의 반응형 전략은 **"컬럼 수를 늘리는" 방식이 아니라 "컨테이너 폭과 gutter 만 바꾸는" 방식**이다. 5개 페이지 × 5개 폭 전수 측정에서 컬럼 수가 breakpoint 로 바뀐 사례가 **0건**이었다.

→ 따라서 **XS 레이아웃의 컬럼 구조가 곧 전 breakpoint 의 컬럼 구조**다. 유도해야 할 자유도는 사실상 아래 3개뿐이다.

1. 컨테이너가 어디까지 넓어지는가 (archetype)
2. XS 의 어떤 블록이 데스크톱에서 **rail 로 빠지는가** (최대 1개)
3. 하단 고정 CTA 를 데스크톱에서 유지하는가

**이 3개만 결정하면 나머지는 기계적으로 따라온다.** 파이프라인은 이 3개에 집중한다.

---

## 1. 파이프라인 7단계

```
[Figma 노드 URL/ID]
  ↓
STEP 1  프레임 읽기          §2   get_metadata → get_design_context
  ↓
STEP 2  역할 태깅            §3   블록마다 role 부여 (11종)
  ↓
STEP 3  ODS 컴포넌트 해석     §4   resolve_figma_component → check_component_name
  ↓
STEP 4  archetype + rail 결정 §5.1 자유도 3개 확정
  ↓
STEP 5  breakpoint 유도       §5.2 role별 유도표 적용 ← 본체
  ↓
STEP 6  프로토타입 생성       §6   LAYOUT-SPEC 스캐폴드 주입
  ↓
STEP 7  검증                 §7   iframe 하네스 + 게이트 G1~G14
```

---

## 2. STEP 1 — Figma 프레임 읽기

**전제 (MUST)**: `get_design_context` 호출 **전에** `/figma-design-to-code` 스킬을 반드시 로드한다. 건너뛰면 안 된다 (Figma 플러그인 지침).

```
1. URL 에서 fileKey / nodeId 추출
   https://figma.com/design/:fileKey/:name?node-id=1-2  →  nodeId "1:2"
   node-id 가 없으면 nodeId 를 생략하고 top-level 페이지 목록부터 받는다. 추측 금지.
2. get_metadata(fileKey, nodeId)      → 구조·위치·크기 개요 (XML)
3. get_design_context(fileKey, nodeId) → 실제 스타일·컴포넌트 정보
4. get_variable_defs(fileKey, nodeId)  → 바인딩된 변수 (있으면)
```

**추출할 것**
- 자식 블록의 **순서 · 그룹핑 · 역할** ← 이것만 쓴다
- 컴포넌트 인스턴스 이름 · layerPath · 치수

**추출하되 그대로 쓰지 않을 것 (MUST NOT)**
- **절대 좌표 · 고정 픽셀 폭** — XS 전용 값이다. 그대로 옮기면 반응형이 죽는다
- **raw hex 색상 · 폰트 px** — ODS 토큰으로 치환한다 (CLAUDE.md §2)
- **GNB · statusbar 레이어** — 프레임에 있어도 **버린다** (CLAUDE.md §2). 단 상단 오프셋 계산에는 반영한다

---

## 3. STEP 2 — 역할 태깅 (role taxonomy)

프레임의 각 최상위 블록에 아래 role 중 하나를 부여한다. **role 이 유도 규칙을 결정한다.**

| role | Figma 탐지 신호 | 비고 |
|---|---|---|
| `R-PAGETITLE` | 최상단, 큰 텍스트 1줄 (+뒤로가기 아이콘) | 페이지 제목 |
| `R-TABBAR` | 제목 바로 아래, **균등 분할** 2~5개 텍스트 항목, 선택 인디케이터 | 섹션 전환 |
| `R-FILTER` | 칩 형태, 가로 나열, 우측 잘림, 선택 상태 有 | 필터 |
| `R-SUMMARY` | 상단 정보 블록 (요약 수치·상태·CTA 동반), 반복 없음 | rail 후보 |
| `R-LIST` | **동일 구조 3개 이상 반복**, 세로 나열 | 카드 리스트 |
| `R-GRID` | 균등 n열 배치 (사진·지표), n 고정 | 고정 그리드 |
| `R-CAROUSEL` | 가로 나열 + **우측 잘림**, 아이템 폭 고정 | 가로 스크롤 |
| `R-FORM` | 입력/선택 컨트롤(Input·Radio·Checkbox·Calendar) 중심 | 폼 스텝 |
| `R-SECTION` | 제목 + 콘텐츠 묶음 | 일반 섹션 |
| `R-CTA-BOTTOM` | 최하단 **화면 폭 전체** 버튼, 콘텐츠와 분리 | 고정 CTA |
| `R-CHROME` | GNB · statusbar · 시스템 바 | **버린다** |

**모호할 때**: `R-SECTION` 으로 태깅한다. `R-SECTION` 은 유도 규칙이 "그대로 스택"이라 안전하다.

**`R-LIST` 판정 주의**: 2개만 반복되면 `R-SECTION` 이다. 3개 이상일 때만 `R-LIST`.

---

## 4. STEP 3 — ODS 컴포넌트 해석

프레임의 컴포넌트 인스턴스마다:

```
1. resolve_figma_component({ figmaName, layerPath, dimensions, visualHints })
     → ODS 컴포넌트 + props (예: "Box Button XS" → BoxButton size="extra-small")
2. 이름이 의심스러우면 check_component_name(name)
     → BDS(legacy)/Tailwind/shadcn 계열이면 ODS 대체안을 받는다
3. get_component(<확정된 ODS 이름>)
     → API·compound 구조·토큰 확인 후 그 스펙대로 구현
```

**MUST NOT** — ODS 카탈로그에 없는 컴포넌트를 새로 만들지 않는다. 대응이 전혀 없을 때만 **사유를 기록**하고 ODS primitive(Box/Flex/Text)와 토큰으로 근접 조합한다 (CLAUDE.md §1).

**아이콘**: `search_icon` 으로 ODS 아이콘명을 확정한 뒤 반영한다. self-contained HTML 이면 `@bucketplace/icons` 의 SVG(`viewBox="0 0 480 480"`, `fill="currentColor"`, **regular** weight)를 인라인한다. 이모지·외부 아이콘 세트·임의 path **금지**.

---

## 5. STEP 4~5 — Breakpoint 유도 (본체)

### 5.1 자유도 3개 확정

**① archetype**

```
프레임의 지배적 콘텐츠가 R-FORM 인가?
  YES → archetype C (478 고정, 768에서 전환)
  NO  → archetype A (fluid → 1136, 768/1024에서 전환)   ← 기본값
```
> archetype B(720 고정)는 **명시 지시가 있을 때만** 쓴다. 모바일 프레임만 보고 "개인화 피드"인지 판별할 수 없으므로 자동 추론하지 않는다.

**② rail 승격 — 최대 1개**

```
R-TABBAR 가 있는가?
  YES → nav-rail 채택. 그 블록이 768에서 좌측 160px rail 이 된다.
        (R-SUMMARY 가 같이 있어도 rail 로 보내지 않고 본문에 남긴다)
  NO  → R-SUMMARY 가 있는가?
          YES → content-rail 채택. 그 블록이 1024에서 좌측 300px rail 이 된다.
          NO  → rail 없음. 단일 컬럼 (§4.1 골격).
```
> **rail 은 절대 2개가 되지 않는다.** 실측에서 2단을 넘는 분할은 한 사례도 없었다.
> archetype C 는 rail 을 쓰지 않는다 (폼은 항상 단일 컬럼).

**③ 하단 CTA 유지 여부**

```
R-CTA-BOTTOM 이 있는가?
  NO  → 없음.
  YES → archetype C        → SM+ 에서 폭 478 중앙 유지, 높이 60
        archetype A + rail  → MD(1024) 이상에서 제거하고 rail 안 CTA 로 이동
        archetype A + 단일  → SM+ 에서 제거하고 본문 흐름 안 버튼으로 전환
```

### 5.2 role별 breakpoint 유도표 ★

**XS 는 입력 그대로. SM/MD/LG 를 아래 규칙으로 생성한다.**

| role | XS (입력) | SM (768) | MD (1024) | LG (1256+) |
|---|---|---|---|---|
| `R-PAGETITLE` | 있으면 그대로 | **제목 승격** 24/32 w600, 뒤로가기 아이콘 제거 | = SM | = SM |
| `R-TABBAR` (nav-rail 채택 시) | 상단 가로 탭, full-bleed, 탭 h46 | **좌측 rail 160px** 로 이동, 항목 세로 나열, 버튼 h60 pad16 | = SM | = SM |
| `R-TABBAR` (미채택) | 상단 가로 탭 | 상단 유지, 컨테이너 폭만 신축 | = SM | = SM |
| `R-SUMMARY` (content-rail 채택 시) | 본문 최상단 블록 | 본문 최상단 유지 | **좌측 rail 300px** 로 이동, gap 60 | = MD |
| `R-SUMMARY` (미채택) | 본문 블록 | 그대로 | 그대로 | 그대로 |
| `R-LIST` | **1열** | **1열** | **1열** | **1열** ← 절대 불변 |
| `R-GRID` | n열 | **n열** | **n열** | **n열** ← n 불변, 아이템만 신축 |
| `R-CAROUSEL` | 가로 스크롤, 아이템 폭 고정 | 동일 | 동일 | 동일 ← 그리드 전환 금지 |
| `R-FILTER` | 가로 스크롤 칩 gap4 h32 | 동일 | 동일 | 동일 |
| `R-FORM` | 1열, gutter 16 | **478 고정 중앙**, wrapper padY 80 | = SM | = SM |
| `R-SECTION` | 스택 gap | 스택 유지, 컨테이너 폭만 신축 | = SM | = SM |
| `R-CTA-BOTTOM` | sticky bottom, full-bleed | §5.1 ③ 결정 적용 | 동일 | 동일 |
| `R-CHROME` | — | — | — | — (버림) |

**전 role 공통으로 자동 적용되는 것** (`.lyt-shell` 이 처리)

| | XS | SM | MD | LG |
|---|---|---|---|---|
| gutter | 16 | 40 | 60 | 60 |
| 콘텐츠 폭 (archetype A) | 343 | 688 | 904 | 1136 (중앙) |
| 콘텐츠 padY | 16 | 40 | 40 | 40 |
| 섹션 제목 | 17/26 | 17/26 | 20/28 | 20/28 |

### 5.3 유도 규칙 3줄 요약

1. **컬럼 수는 절대 안 바뀐다** — XS 의 열 수가 곧 최종 열 수다
2. **블록 하나만 rail 로 빠진다** — 그것도 rail 후보가 있을 때만
3. **나머지는 컨테이너 폭과 gutter 만 바뀐다**

---

## 6. STEP 6 — 프로토타입 생성

1. `PROTOTYPE-LAYOUT-SPEC.md` §3 의 CSS 스캐폴드를 **프로젝트 스타일 규약에 맞게 이식** (CSS Module / styled 등 기존 방식을 따른다)
2. §4 에서 확정된 archetype 골격 선택 (4.1 단일 / 4.2 rail / 4.4 폼)
3. role 순서대로 블록 배치, §5.2 유도표 적용
4. 색·타이포는 **ODS 토큰 참조**로만 (CSS 변수로 감싸되 값=ODS 토큰 hex, 변수명/주석에 ODS 토큰명 표기)
5. 아이콘은 ODS SVG 인라인

**o2o 도메인이면** `--lyt-subnav-h` 를 41px(XS) / 52px(SM+) 로 설정한다. 이사 도메인은 0 유지.

### 6.1 산출 위치 (prototypes 워크스페이스)

```
<project>/src/app/flows/<tab>/<flow-id>/<Screen>.tsx
<project>/src/app/flows/<tab>/<flow-id>/components/
<project>/src/app/shared/                  # 2개 이상 플로우가 쓸 때만 승격
<project>/docs/layout/LAYOUT_GUIDE.md      # 유도 결과 기록
```
- 대상 프로젝트(`form`/`movingHome`/`movingpartner`)·플로우가 불명확하면 **묻는다**
- 메뉴 노출이 필요하면 `App.tsx` 의 `PANEL_TABS` 에 등록

---

## 7. STEP 7 — 검증

### 7.1 프리뷰: 기존 PreviewStudio 사용

**이 워크스페이스에는 이미 프리뷰 스튜디오가 있다.** 별도 하네스를 만들지 않는다.
통합 허브(`preview/index.html`)는 각 화면을 **iframe 딥링크**(`?preview=1&screen=<id>`)로 로드하므로 미디어쿼리가 iframe 폭 기준으로 정상 평가된다.

> `previewConstants.ts` 의 `PREVIEW_BPS` 프리셋은 **375 / 768 / 1024** 다 (Desktop = archetype A·B 전환점 1024).
> **1256(shell 상한 도달점)·1440 프리셋은 의도적으로 두지 않는다** — 검증 시 W 입력창에 직접 입력한다. 프리셋을 임의로 추가하지 않는다.

**원칙 (워크스페이스 밖에서 자체 하네스를 만들 때)**: 미디어쿼리는 뷰포트 폭 기준으로 평가되므로, 한 페이지에 여러 폭을 나란히 렌더하려면 각 뷰를 **iframe 으로 감싸야** 한다. `transform: scale()` 이나 고정폭 div 로는 **반응형이 검증되지 않는다.**

### 7.2 게이트

`PROTOTYPE-LAYOUT-SPEC.md` §9 의 **G1~G14 를 전부 통과**해야 출력한다.
특히 이 파이프라인에서 자주 깨지는 항목:

- **G5 / G6** — Figma 모바일 1열 리스트를 데스크톱에서 2열로 "개선"하려는 유혹. **금지다** (M3)
- **G4** — 유도 과정에서 640·960·1200 같은 breakpoint 를 새로 만드는 것. **768/1024/1256 만**
- **G11 / G12** — Figma 의 raw hex·아이콘을 그대로 옮기는 것. ODS 토큰·ODS 아이콘으로 치환
- **G14** — 프레임에 있던 GNB/statusbar 를 같이 구현하는 것

### 7.3 역방향 확인

생성물을 375 로 렌더했을 때 **입력 Figma 프레임과 구조가 일치**해야 한다. 불일치 시 유도가 아니라 STEP 2 역할 태깅이 틀린 것이다 — 태깅부터 다시 한다.

---

## 8. 유도할 수 없는 것 (물어보거나 기본값)

| 항목 | 처리 |
|---|---|
| archetype B(720) 여부 | **물어본다.** 프레임만으로 판별 불가 |
| rail 후보가 2개 이상일 때 우선순위 | 기본값: nav-rail 우선. 다르면 **물어본다** |
| 리스트 아이템의 데스크톱 밀도 | 기본값: XS 와 동일. 변경 요청 시에만 조정 |
| 인터랙션·상태 전이 | 이 파이프라인 범위 밖. 정적 레이아웃만 생성 |
| 콘텐츠 실데이터 | Figma 프레임의 더미 텍스트 유지. **실데이터 임의 생성 금지** |

**물어봐야 할 것을 기본값으로 조용히 때우지 않는다.** 특히 archetype B 는 결과가 720px 고정으로 크게 달라진다.

---

## 9. 기계 판독 요약

```json
{
  "input": { "type": "figma-node", "viewport": "XS", "typicalWidth": 375 },
  "output": { "type": "react-tsx", "breakpoints": [768, 1024, 1256],
              "path": "<project>/src/app/flows/<tab>/<flow-id>/",
              "fallbackOutsideWorkspace": "self-contained-html" },
  "prerequisiteSkill": "figma-design-to-code",
  "roles": ["R-PAGETITLE","R-TABBAR","R-FILTER","R-SUMMARY","R-LIST","R-GRID",
            "R-CAROUSEL","R-FORM","R-SECTION","R-CTA-BOTTOM","R-CHROME"],
  "archetypeInference": {
    "R-FORM-dominant": "C",
    "default": "A",
    "B": "explicit-instruction-only"
  },
  "railPromotion": {
    "maxRails": 1,
    "priority": ["R-TABBAR->nav-rail@768", "R-SUMMARY->content-rail@1024"],
    "none": "single-column",
    "archetypeC": "never"
  },
  "invariants": {
    "columnCount": "XS와 동일, 전 breakpoint 불변",
    "listColumns": 1,
    "carouselReflow": false,
    "gridColumnCount": "불변"
  },
  "derivedPerBreakpoint": ["containerWidth", "gutter", "contentPadY", "sectionTitleSize"],
  "discardFromFigma": ["absolutePosition", "fixedPixelWidth", "rawHex", "fontPx", "GNB", "statusbar"],
  "previewHarness": "existing-PreviewStudio (iframe deeplink). 자체 하네스 금지",
  "previewPresetGap": [1024, 1256],
  "gates": "PROTOTYPE-LAYOUT-SPEC.md G1-G14",
  "mustAsk": ["archetypeB", "railPriorityConflict"]
}
```

---

## 부록: 파일 구성

```
_bp-spec/
├── FIGMA-TO-RESPONSIVE-PIPELINE.md  ← 본 문서 (변환 절차)
├── PROTOTYPE-LAYOUT-SPEC.md         ← 레이아웃 값·CSS 스캐폴드·검증 게이트
├── BREAKPOINT-PATTERN-RULES.md      ← 실측 근거 리포트
├── probe.js                         ← 재측정 스크립트
└── raw/                             ← 페이지별 실측 노트 5종
```

**읽는 순서**: 파이프라인은 본 문서 → LAYOUT-SPEC 순으로 참조한다. BREAKPOINT-PATTERN-RULES 는 값의 근거를 되짚을 때만 본다.
