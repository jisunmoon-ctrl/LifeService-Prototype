# 프리뷰 패널 스펙 (3개 프로토타입 공통)

우측 컨트롤 메뉴 패널의 정본 스펙. `form` · `movingHome` · `movingpartner` 와 통합 허브(`preview/index.html`)가
모두 이 스펙을 따른다. **preview harness 이므로 ODS 컴포넌트·아이콘 규칙(및 디자인 QA) 예외 대상**이다
(CLAUDE 공통 지침: preview harness/스튜디오 컨트롤 제외 조항).

---

## 1. 패널 위계

```
패널
├── 헤더            프로젝트명 + (선택) 뱃지
├── Restart         현재 플로우의 첫 화면으로 리셋
├── B2B / B2C 탭    ← 스위칭 탭 (segmented control)
└── 메뉴 트리
    └── 섹션 (메뉴 구분자 — `flow prototype` / `flow prod.`)
        └── 플로우 그룹 (아코디언, 동시 1개 오픈)
            └── 화면 아이템 (선택 시 체크)
```

**섹션 = 메뉴 구분자.** 헤더는 `{sectionIndex + 1}. {label}` 로 렌더된다 (uppercase 11px/700, opacity 0.45).

| 섹션 | 뜻 |
|---|---|
| `flow prototype` | 탐색·검증용 프로토타입 플로우 |
| `flow prod.` | 운영 반영(또는 반영 예정) 플로우 |

플로우별 소속은 [워크스페이스 README](../README.md#메뉴-트리-규칙) 를 정본으로 한다.

데이터 모델 (`PrototypeNavMenu.tsx`):

```ts
PanelTab   { id, label, sections }        // B2C / B2B
NavMenuSection { id, label?, badge?, groups }  // label 생략 시 섹션 헤더 미렌더 (플로우 평탄 배치)
NavMenuGroup   { id, label, items }       // = 플로우
NavMenuItem    { id, label }              // = 화면 (id 는 화면 스위치 키)
```

## 2. 탭 규칙

- 활성 탭은 **현재 화면이 속한 탭**으로 자동 판정 (없으면 첫 탭)
- 탭 클릭 → 해당 탭의 **첫 플로우의 첫 화면**으로 이동, 아코디언도 그 플로우로 재설정
- 해당 구분의 플로우가 없는 프로토타입은 그 탭이 **비활성(disabled, opacity 0.4)** — 패널 구조는 3개 프로토타입 동일
- 플로우 위계는 [워크스페이스 README](../README.md#메뉴-트리-규칙) 의 표를 정본으로 한다

## 3. 아코디언 규칙

- 기본: 현재 화면이 속한 그룹만 펼침, 동시에 **하나만** 열림
- 접힌 상태에서 현재 화면을 포함한 그룹은 `has-active` (brand weak 배경)
- 탭이 바뀌면 이전 탭의 열림 상태를 버리고 새 탭 기준으로 재계산

## 4. 프리뷰 스튜디오 (패널을 감싸는 셸)

| 항목 | 값 |
|---|---|
| 해상도 프리셋 | Mobile `375×720` · Tablet `768×1024` · Desktop `1024×800` |
| 리사이즈 | 좌/우 핸들 = 폭(드래그 delta ×2) · 하단 핸들 = 높이 · W/H 직접 입력 · 슬라이더 |
| clamp | `320–1920 × 300–2400` |
| breakpoint 판정 | `w<768 → Mobile`(amber) · `w<1024 → Tablet`(violet) · `else Desktop`(green) |
| 패널 위치 | `.pv-aside` — 우측 고정, 스테이지가 패널 폭만큼 `--pv-aside-pad` 확보 |

## 5. 화면 전환 · 딥링크

- 패널에서 화면 선택 → `onSelect(screenId)` → 앱의 화면 스위치
- **임베드(딥링크) 모드**: `?preview=1&screen=<id>` 로 진입하면 studio 크롬 없이 feature 화면만 렌더
- 인-피처 네비게이션 → 부모 창에 `postMessage({ __pvNav: true, screen })` → 허브/스튜디오 메뉴 하이라이트 동기화
  (movingpartner 는 자체 studio 용 `__mpNav` 도 함께 전송)

## 6. 구현 위치

| 프로토타입 | 패널 구현 | 메뉴 트리 정의 |
|---|---|---|
| 통합 허브 | `preview/index.html` (vanilla, self-contained) | 같은 파일의 `TABS` |
| form | `form/src/app/preview/` | `form/src/app/App.tsx` → `PANEL_TABS` |
| movingHome | `movingHome/src/app/preview/` | `movingHome/src/app/App.tsx` → `PANEL_TABS` |
| movingpartner | `movingpartner/src/app/preview/` | `movingpartner/src/app/App.tsx` → `PANEL_TABS` |

패널 구성 파일 (각 프로젝트 `src/app/preview/`):

| 파일 | 역할 |
|---|---|
| `PreviewStudio.tsx` | 해상도 바 · 드래그 핸들 · 스테이지 · aside 슬롯 |
| `PrototypeNavMenu.tsx` | B2B/B2C 탭 + 플로우 아코디언 + 화면 아이템 |
| `PreviewControlPanel.tsx` | 헤더 + Restart + 메뉴 트리 조립 (form 은 App.tsx 에서 직접 조립) |
| `PreviewViewportContext.tsx` | 프레임 폭 컨텍스트 (`isDesktopForm = w ≥ 768`) |
| `previewConstants.ts` | 프리셋 · clamp · breakpoint 판정 |

## 7. CSS 클래스 (공통)

`pv-studio` / `pv-bar` / `pv-bpbtn` / `pv-dim` / `pv-range` / `pv-bpdot` / `pv-stage` / `pv-frame` / `pv-handle`
/ `pv-aside` / `pv-panel` / `pv-panel-head` / `pv-panel-restart` / **`pv-tabs` · `pv-tab`** / `pv-nav-*`
(섹션: **`pv-nav-section` · `pv-nav-sectionhead` · `pv-nav-sectionlabel` · `pv-nav-sectionbadge` · `pv-nav-groups`**)

> `form` · `movingHome` 은 같은 위계를 Tailwind 유틸 클래스로 렌더한다 (클래스명만 다르고 스펙은 동일).

정의 위치: 각 프로젝트 `src/styles/preview-studio.css`, 허브는 `preview/index.html` 인라인.
