# 프로토타입 레이아웃 생성 지침 (이사/O2O 웹)

> **파이프라인 내 위치**: [`FIGMA-TO-RESPONSIVE-PIPELINE.md`](./FIGMA-TO-RESPONSIVE-PIPELINE.md) 가 상위 절차(Figma 프레임 → 역할 태깅 → breakpoint 유도)를 규정하고, 본 문서는 그 STEP 6·7 이 참조하는 **레이아웃 값·CSS 스캐폴드·검증 게이트**를 제공한다.
> **문서 성격**: 프로토타입 생성 파이프라인이 **그대로 따라 실행하는 지침**이다. 판단이 필요한 지점은 전부 기본값을 정해 두었다. "확인 필요"·"검토"로 남긴 항목은 없다.
> **근거 문서**: [`BREAKPOINT-PATTERN-RULES.md`](./BREAKPOINT-PATTERN-RULES.md) — 2026-07-22 QA 5개 페이지 × 5개 폭 실측.
> **상위 지침**: `~/.claude/CLAUDE.md` (ODS 토큰·아이콘·컴포넌트 규칙). 충돌 시 CLAUDE.md 가 우선한다.

---

## 0. 이 문서의 적용 범위

| 규정한다 | 규정하지 않는다 (다른 소스를 따른다) |
|---|---|
| breakpoint, 컨테이너 폭, gutter, 컬럼 분할 | **색상** → ODS semantic 토큰 |
| 세로 리듬, sticky 오프셋, 반복 그룹 배치 | **타이포 스타일** → ODS `theme.text.*` |
| 페이지 골격 CSS 스캐폴드 | **컴포넌트 API** → `get_component` / catalog |
| 자가 검증 게이트 | **아이콘** → `search_icon` (`@bucketplace/icons`) |

**절대 하지 않는다**
- GNB(글로벌 상단 내비)·OS statusbar 구현 — feature 가 아니다 (CLAUDE.md §2)
- 레이아웃 값을 ODS 토큰인 것처럼 표기 — **ODS 에는 breakpoint/grid/spacing 토큰이 없다.** 아래 값은 서비스 관행이며 `--lyt-*` 접두사로 분리한다
- 색·타이포에 raw hex 직접 기입 (CLAUDE.md §2)

---

## 1. 실행 절차 (파이프라인 5단계)

```
INPUT: 화면 목적 + 콘텐츠 구조
  ↓
STEP 1  archetype 결정          → §2 결정 트리 (분기 3개, 예외 없음)
  ↓
STEP 2  CSS 스캐폴드 주입        → §3 복붙 블록
  ↓
STEP 3  골격 마크업 생성         → §4 archetype별 템플릿
  ↓
STEP 4  콘텐츠 배치             → §5~§7 배치 규칙
  ↓
STEP 5  자가 검증               → §9 게이트 (실패 시 STEP 3 복귀)
  ↓
OUTPUT: self-contained 프로토타입 HTML
```

---

## 2. STEP 1 — Archetype 결정

**질문 하나만 던진다. 순서대로 평가하고 처음 참이 되는 것을 채택한다.**

```
Q1. 단일 입력 흐름인가? (신청/가입/설문 — 한 번에 하나씩 답하는 화면)
    → YES: archetype C
Q2. 개인화 피드인가? (추천·랭킹 등 스크롤 소비형 목록이 본문)
    → YES: archetype B
Q3. 그 외 전부
    → archetype A   ← 기본값. 확신이 없으면 무조건 A.
```

| | archetype | desktop 컨테이너 | 전환 BP | 근거 사례 |
|---|---|---|---|---|
| **A** | **fluid → 1136 cap** | gutter 60, 최대 1136 | 768 / 1024 | orderdetail · orderlist · partnerhome (5중 3) |
| **B** | 고정 **720** 중앙 | 720 고정, 더 안 넓어짐 | **1024만** | movinghome |
| **C** | 고정 **478** 중앙 | 478 고정, 더 안 넓어짐 | **768만** | form |

**A 를 고른 뒤 2단 분할 여부는 별도 판단이다 (§4.2). archetype 이 분할을 강제하지 않는다.**

---

## 3. STEP 2 — CSS 스캐폴드 (그대로 주입)

```css
:root {
  /* ── 레이아웃 변수 (ODS 토큰 아님. 서비스 관행값) ───────────── */
  /* breakpoint — 미디어쿼리에 리터럴로 쓴다. var()는 MQ에서 동작하지 않음 */
  /* --lyt-bp-sm: 768px; --lyt-bp-md: 1024px; --lyt-bp-lg: 1256px; (참조용) */

  --lyt-gutter: 16px;        /* XS */
  --lyt-shell-max: 1256px;   /* shell 상한 */
  --lyt-content-max: 1136px; /* 콘텐츠 상한 = 1256 − 60×2 */
  --lyt-read-max: 847px;     /* 본문 가독 상한 (2단 우측 컬럼) */

  --lyt-header-h: 51px;      /* GNB 높이 — 오프셋 계산 전용, 구현 대상 아님 */
  --lyt-subnav-h: 0px;       /* o2o 도메인만 41px */

  /* 세로 리듬 (4의 배수) */
  --lyt-space-2: 2px;    --lyt-space-4: 4px;    --lyt-space-8: 8px;
  --lyt-space-12: 12px;  --lyt-space-16: 16px;  --lyt-space-20: 20px;
  --lyt-space-24: 24px;  --lyt-space-40: 40px;  --lyt-space-60: 60px;

  --lyt-stack-gap: var(--lyt-space-24);  /* 섹션 사이 */
  --lyt-list-gap: var(--lyt-space-16);   /* 리스트 아이템 사이 */
  --lyt-content-pad-y: var(--lyt-space-16);

  /* 2단 분할 */
  --lyt-rail-w: 300px;                   /* 콘텐츠 rail */
  --lyt-rail-gap: var(--lyt-space-60);
}

@media (min-width: 768px) {
  :root {
    --lyt-gutter: 40px;
    --lyt-header-h: 81px;
    --lyt-subnav-h: 0px;               /* o2o 도메인만 52px */
    --lyt-content-pad-y: var(--lyt-space-40);
  }
}

@media (min-width: 1024px) {
  :root { --lyt-gutter: 60px; }
}
/* 1256 은 --lyt-shell-max 도달 지점. 변수 변경 없음. */

/* ── 공통 shell ─────────────────────────────────────────────── */
.lyt-shell {
  max-width: var(--lyt-shell-max);
  margin-inline: auto;
  padding-inline: var(--lyt-gutter);
  box-sizing: border-box;
}
.lyt-content { padding-block: var(--lyt-content-pad-y); }
.lyt-stack { display: flex; flex-direction: column; gap: var(--lyt-stack-gap); }
.lyt-list  { display: flex; flex-direction: column; gap: var(--lyt-list-gap); }
```

**주의**: `@media` 조건문 안에서는 CSS 변수가 동작하지 않는다. breakpoint 는 항상 **리터럴 768 / 1024 / 1256** 로 쓴다.

---

## 4. STEP 3 — Archetype별 골격

### 4.1 Archetype A — 단일 컬럼 (기본)

> 상세·조회·정보 전달 화면. **orderdetail 이 이 형태이며, 어느 breakpoint 에서도 분할하지 않는다.**

```html
<div class="lyt-shell">
  <main class="lyt-content lyt-stack">
    <section>…</section>
    <section>…</section>
  </main>
</div>
```
결과 폭: `343 / 688 / 904 / 1136 / 1136(중앙)`

### 4.2 Archetype A — 2단 분할 (선택)

**분할하는 경우는 아래 둘뿐이다. 해당 없으면 4.1 을 쓴다.**

| 패턴 | 조건 | 좌 | gap | 우 | 전환 BP |
|---|---|---|---|---|---|
| **content-rail** | 본문과 나란히 두는 요약/필터/CTA 패널이 있다 | **300** | **60** | 나머지 전부 | **1024** |
| **nav-rail** | 화면 안에 섹션 전환 내비게이션이 있다 | **160** | **16** | 나머지, **max 847** | **768** |

```html
<!-- content-rail : 1024 분할 -->
<div class="lyt-shell">
  <div class="lyt-split-content">
    <aside class="lyt-rail">…</aside>
    <main class="lyt-main lyt-stack">…</main>
  </div>
</div>
```
```css
.lyt-split-content { display: flex; flex-direction: column; }
.lyt-rail { width: 100%; }
.lyt-main { min-width: 0; }
@media (min-width: 1024px) {
  .lyt-split-content { flex-direction: row; gap: var(--lyt-rail-gap); align-items: flex-start; }
  .lyt-rail { width: var(--lyt-rail-w); flex: 0 0 var(--lyt-rail-w); }
  .lyt-main { flex: 1 1 auto; }
}
```
```css
/* nav-rail : 768 분할 + 우측 가독 상한 847 */
.lyt-split-nav { display: flex; flex-direction: column; }
@media (min-width: 768px) {
  .lyt-split-nav { flex-direction: row; gap: var(--lyt-space-16); justify-content: space-between; }
  .lyt-split-nav > .lyt-rail { width: 160px; flex: 0 0 160px; }
  .lyt-split-nav > .lyt-main { flex: 1 1 auto; max-width: var(--lyt-read-max); }
}
```
> `max-width: 847` 에 도달하면 잔여 공간이 좌우 사이로 간다(space-between). **의도된 동작이다.** LG 에서 `160 + 129 + 847 = 1136`.

**XS 에서 rail 은 반드시 상단 가로 탭바로 전환한다** (§6.3).

### 4.3 Archetype B — 고정 720

```css
.lyt-fixed-720 { width: 100%; }
@media (min-width: 1024px) {
  .lyt-fixed-720 { max-width: 720px; margin-inline: auto; }
  /* 내부 2단이 필요하면: aside 220 + gap 20 + main 480 */
}
```
**1024 미만은 XS 와 동일하게 full-bleed 다.** 768 에서 아무것도 바꾸지 않는다.

### 4.4 Archetype C — 고정 478 (폼)

```css
.lyt-form-col { width: 100%; padding-inline: var(--lyt-gutter); }
@media (min-width: 768px) {
  .lyt-form-col { max-width: 478px; padding-inline: 0; margin-inline: auto; }
  .lyt-form-wrap { padding-block: 80px; }
}
```
**1024·1256 에서 폼 콘텐츠를 변경하지 않는다.** 478 에서 고정이다.

---

## 5. STEP 4 — 세로 리듬 규칙

**M1 (MUST)** 세로 간격은 `2·4·8·12·16·20·24·40·60` 중에서만 고른다.

| 용도 | 값 |
|---|---|
| 태그/칩 행 gap | 2 |
| 캐러셀·캘린더·필터칩 gap | 4 |
| 그리드 아이템 gap | 8 |
| 카드 내부 padding · 리스트 아이템 gap | 16 |
| 섹션 스택 gap | 24 |

**M2 (MUST NOT)** 위 값들을 breakpoint 별로 바꾸지 않는다.
**breakpoint 로 바뀌는 세로 값은 아래 3개로 한정한다.**

| 항목 | XS | SM+ |
|---|---|---|
| 콘텐츠 padY | 16 | 40 |
| 섹션 스택 gap (A 단일컬럼) | 0 | 16 |
| 폼 wrapper padY (C) | 0 | 80 |

---

## 6. STEP 4 — 반복 그룹 배치

**M3 (MUST NOT) — 가장 중요한 규칙. breakpoint 로 컬럼 수를 바꾸지 않는다.**
5개 페이지 × 5개 폭 전수 측정에서 **예외가 하나도 없었다.** 컨테이너 폭과 gutter 만 바뀌고 컬럼 수는 고정이다.

### 6.1 리스트 카드
```
전 breakpoint 1열. 데스크톱 1136px 에서도 2열로 만들지 않는다.
아이템 폭 = 컬럼 전폭. 세로 구분은 gap 16 또는 divider.
```

### 6.2 고정 컬럼 그리드
```
사진/썸네일 그리드 → 3열 고정, gap 8
캘린더           → 7열 고정, gap 4, 셀 높이 44 고정
지표 3분할       → 3열 고정 (375에서도 3열 유지, 아이템 114px)
```
아이템 폭은 `(컨테이너 − gap×(n−1)) / n` 로 자연 신축시킨다. `minmax()` 로 컬럼 수를 바꾸지 않는다.

### 6.3 가로 스크롤 캐러셀
```css
.lyt-carousel {
  display: flex; gap: var(--lyt-space-4);
  overflow-x: auto; scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.lyt-carousel > * { flex: 0 0 auto; scroll-snap-align: start; }
```
**M4 (MUST NOT)** 캐러셀을 어느 breakpoint 에서도 그리드로 리플로우하지 않는다. 아이템 고정 폭(예: 150)을 유지한 채 가로 스크롤을 계속 쓴다.

### 6.4 rail → 탭바 전환 (XS)
**M5 (MUST)** 2단 분할 화면의 좌측 rail 은 XS 에서 **상단 가로 탭바**가 된다. 탭은 균등 분할, full-bleed, 탭 높이 46.

---

## 7. STEP 4 — Sticky / 고정 요소

**M6 (MUST)** 상단 오프셋은 아래 값으로 계산한다. GNB 자체는 구현하지 않는다.

| 도메인 | XS | SM+ |
|---|---|---|
| 이사 (`lifecycle`) | **51** | **81** |
| o2o (`o2o`) | **92** (51+41) | **133** (81+52) |

```css
.lyt-sticky-tabbar {
  position: sticky;
  top: calc(var(--lyt-header-h) + var(--lyt-subnav-h));
  height: 45px; z-index: 1;
}
```

**M7 (MUST)** 하단 sticky CTA 의 폭은 콘텐츠 컨테이너를 따른다.
- archetype C: XS full-bleed → SM+ **478 중앙** (컬럼 폭과 동일), 높이 60
- archetype A + content-rail: XS/SM full-bleed(높이 80) → **MD 이상에서 제거**하고 rail 안 CTA 로 대체
- archetype A 단일 컬럼(상세형): 하단 sticky CTA 를 **두지 않는다**

---

## 8. STEP 4 — 타이포 · 컨트롤

**M8 (MUST)** 폰트 크기·색은 **ODS `theme.text.*` / `theme.colors.*` 토큰으로만** 지정한다. 아래는 *위계 램프*만 규정하며, 실제 값은 ODS 토큰으로 매핑한다 (CLAUDE.md §2).

| 역할 | XS | SM | MD+ | weight |
|---|---|---|---|---|
| 페이지 제목 | 20/28 | **24/32** | 24/32 | **600** |
| 섹션 제목 | 17/26 | 17/26 | **20/28** | **600** |
| 본문 | 변화 없음 | | | |

> 실측에서는 weight 600/700 이 혼용되고 램프가 4가지였다. **파이프라인은 위 단일 램프·weight 600 으로 통일한다.** (선택된 기본값 — 실측 다수결이 아님)

**M9 (MUST)** 컬럼 폭이 고정된 화면(archetype C, 그리고 A 단일컬럼의 섹션 제목)은 **타이포도 전 breakpoint 고정**한다. 컬럼이 안 넓어지면 타입도 키우지 않는다.

**M10 (MUST)** 버튼·인풋 등 컨트롤 치수는 **ODS 컴포넌트(BoxButton 등)의 size 규격을 따른다.** 이 문서는 컨트롤의 *배치와 폭*만 규정하고 높이·radius 를 새로 정의하지 않는다.
> 실측상 CTA 높이는 페이지마다 달랐다(h32 고정 / h32→h40 전환). 레이아웃 스펙에서 정하지 않고 ODS 에 위임한다.

---

## 9. STEP 5 — 자가 검증 게이트

생성 직후 아래를 **전부** 통과해야 출력한다. 하나라도 실패하면 STEP 3 으로 돌아간다.

### 9.1 자동 검사 (프로토타입에 삽입해 실행)

```js
// 5개 폭에서 실행. 하나라도 false면 실패.
const WIDTHS = [375, 768, 1024, 1256, 1440];
function lytAudit() {
  const fail = [];
  // G1. 가로 overflow 없음 (실측 기준선: 5페이지×5폭 전부 overflow 0)
  if (document.documentElement.scrollWidth > window.innerWidth + 1) fail.push('G1 overflow');
  // G2. 콘텐츠 컨테이너가 1136 초과 금지
  document.querySelectorAll('.lyt-shell > *').forEach(el => {
    if (el.getBoundingClientRect().width > 1136.5) fail.push('G2 content>1136');
  });
  // G3. gutter 사다리 준수
  const g = { 375:16, 768:40, 1024:60, 1256:60, 1440:60 }[window.innerWidth];
  const shell = document.querySelector('.lyt-shell');
  if (g && shell && Math.round(parseFloat(getComputedStyle(shell).paddingLeft)) !== g)
    fail.push('G3 gutter');
  // G4. breakpoint 리터럴만 사용 (768/1024/1256 외 width MQ 금지)
  for (const ss of document.styleSheets) {
    let rules; try { rules = ss.cssRules } catch(e) { continue }
    (function walk(l){ for (const r of l) {
      if (r.type === 4) {
        for (const m of (r.conditionText||'').matchAll(/(?:min|max)-width:\s*(\d+)px/g)) {
          if (![767,768,1023,1024,1255,1256].includes(+m[1])) fail.push('G4 bp:'+m[1]);
        }
      } else if (r.cssRules) walk(r.cssRules);
    }})(rules);
  }
  return fail;
}
```

### 9.2 수동 체크리스트

- [ ] **G5** 리스트 카드가 어느 폭에서도 2열이 되지 않는가 (M3)
- [ ] **G6** 그리드 컬럼 수가 전 폭에서 동일한가 (M3)
- [ ] **G7** 캐러셀이 그리드로 리플로우하지 않는가 (M4)
- [ ] **G8** 2단 분할 화면의 rail 이 XS 에서 상단 탭바로 바뀌는가 (M5)
- [ ] **G9** 하단 sticky CTA 폭이 콘텐츠 컨테이너와 일치하는가 (M7)
- [ ] **G10** 세로 간격이 전부 §5 표의 값인가, breakpoint 간 불변인가 (M1·M2)
- [ ] **G11** 색·타이포가 **ODS 토큰 참조**인가, raw hex 가 없는가 (CLAUDE.md §2)
- [ ] **G12** 아이콘이 전부 **ODS 아이콘**인가, 이모지·외부 세트가 없는가 (CLAUDE.md §1)
- [ ] **G13** ODS 미정의 커스텀 컴포넌트를 만들지 않았는가 (CLAUDE.md §1)
- [ ] **G14** GNB·statusbar 를 구현하지 않았는가 (CLAUDE.md §2)

---

## 10. 기계 판독용 요약

```json
{
  "breakpoints": { "sm": 768, "md": 1024, "lg": 1256 },
  "gutter": { "xs": 16, "sm": 40, "md": 60, "lg": 60 },
  "maxWidth": { "shell": 1256, "content": 1136, "reading": 847 },
  "contentWidth": { "375": 343, "768": 688, "1024": 904, "1256": 1136, "1440": 1136 },
  "archetypes": {
    "A": { "desktop": "fluid-1136", "switchAt": [768, 1024], "default": true },
    "B": { "desktop": 720, "switchAt": [1024] },
    "C": { "desktop": 478, "switchAt": [768] }
  },
  "split": {
    "contentRail": { "rail": 300, "gap": 60, "switchAt": 1024, "mainMax": null },
    "navRail":     { "rail": 160, "gap": 16, "switchAt": 768,  "mainMax": 847 }
  },
  "topOffset": {
    "lifecycle": { "xs": 51, "smUp": 81 },
    "o2o":       { "xs": 92, "smUp": 133 }
  },
  "spacing": [2, 4, 8, 12, 16, 20, 24, 40, 60],
  "responsiveVerticalOnly": {
    "contentPadY": { "xs": 16, "smUp": 40 },
    "stackGap":    { "xs": 0,  "smUp": 16 },
    "formWrapPadY":{ "xs": 0,  "smUp": 80 }
  },
  "columnCountInvariant": true,
  "listCardColumns": 1,
  "grid": { "photo": 3, "calendar": 7, "metric": 3 },
  "typeRamp": {
    "pageTitle":    { "xs": "20/28", "smUp": "24/32", "weight": 600 },
    "sectionTitle": { "xs": "17/26", "mdUp": "20/28", "weight": 600 }
  },
  "delegatedToODS": ["color", "typography", "icons", "controlSizing", "components"]
}
```

---

## 11. 값의 출처 구분 (파이프라인이 신뢰도를 알아야 하는 부분)

| 항목 | 출처 | 신뢰도 |
|---|---|---|
| breakpoint 768/1024/1256 | 5개 페이지 stylesheet 전수 일치 | **실측 확정** |
| gutter 16/40/60 | 4개 페이지 + footer 일치 | **실측 확정** |
| shell 1256 / content 1136 | 4개 컨테이너 명시적 `max-width` | **실측 확정** |
| 컬럼 수 불변 | 5×5 전수, 예외 0 | **실측 확정** |
| 상단 오프셋 51/81 | 5개 페이지 일치 | **실측 확정** |
| reading max 847 | orderlist 1곳 | 실측 1사례 |
| content-rail 300/60 | partnerhome 1곳 | 실측 1사례 |
| nav-rail 160/16 | orderlist 1곳 | 실측 1사례 |
| archetype A 기본값 | 5중 3 다수파 | **선택된 기본값** |
| 타이포 램프·weight 600 | 실측은 4가지 혼재 | **선택된 기본값** |
| 컨트롤 치수 ODS 위임 | 실측 불일치로 위임 결정 | **선택된 기본값** |

**"선택된 기본값"은 실측 사실이 아니다.** 디자이너가 다른 값을 지시하면 그쪽을 따르고, 실측 확정 항목(R1~R3, 컬럼 불변)은 지시가 있어도 먼저 되묻는다.

---

## 부록: 파일 구성

```
_bp-spec/
├── PROTOTYPE-LAYOUT-SPEC.md      ← 본 문서 (파이프라인 입력)
├── BREAKPOINT-PATTERN-RULES.md   ← 근거·측정 리포트
├── probe.js                      ← 재측정 스크립트
└── raw/                          ← 페이지별 실측 노트 5종
```

재측정: `probe.js` 의 URL 상수를 교체 → Playwright MCP `browser_run_code_unsafe` 에 `filename` 으로 실행.
인증 페이지는 사람이 브라우저에서 직접 로그인한 뒤 같은 세션으로 실행한다.
