# 프로토타입 통합 워크스페이스

오늘의집 이사 서비스 프로토타입 3종을 **동일한 양식(Form 기준)** 으로 구조화한 통합 워크스페이스입니다.
각 프로젝트는 독립 실행 가능한 React + Vite 앱이며, 아래의 **통일 양식**을 공유합니다.

| 프로젝트 | 메뉴 트리 루트 | 성격 |
|---|---|---|
| [`form/`](./form) | `form` (이사/이사청소/시공 입력폼 플로우) | 입력폼 플로우 프로토타입 (기준 양식) |
| [`movingpartner/`](./movingpartner) | `movingpartner` (파트너사 / 고객단) | 파트너 사장님센터 + 고객 견적·계약 플로우 |
| [`movingHome/`](./movingHome) | `movingHome` (이사홈 단일 페이지) | 이사 서비스 홈 (단일 스크롤 페이지 + 오버레이) |

---

## 통합 프리뷰 ([`preview/`](./preview))

3개 프로토타입의 **모든 플로우를 하나의 우측 메뉴 패널**에서 전환하는 허브입니다.
각 화면은 해당 프로토타입의 dev 서버를 `?preview=1&screen=<id>` 딥링크로 iframe 로드합니다.

```
http://localhost:5180        # 통합 프리뷰 허브 (preview/index.html · 무의존 self-contained) ← 진입점
├── http://localhost:5181    # form
├── http://localhost:5182    # movingHome
└── http://localhost:5183    # movingpartner
```

로컬 프리뷰 URL 은 `.vscode/settings.json` 의 `workbench.externalUriOpeners` 설정에 따라
외부 브라우저 대신 **Cursor 내장 Simple Browser** 탭으로 열립니다.

실행 — Cursor 에서 `Cmd+Shift+B` (또는 `Tasks: Run Task → preview: 전체 실행`), 혹은 터미널에서:

```bash
(cd preview && python3 -m http.server 5180) &      # 허브 (진입점)
(cd form && npm run dev -- --port 5181) &
(cd movingHome && npm run dev -- --port 5182) &
(cd movingpartner && npm run dev -- --port 5183) &
```

허브 기능:

- 우측 패널: **B2B/B2C 스위칭 탭 → 플로우 → 화면** (3개 프로토타입 공통 메뉴 스펙 그대로), 플로우마다 소속 프로젝트 뱃지
- 상단 해상도 바 + 드래그 핸들 (Mobile 375 / Tablet 768 / Desktop 1024 · `clamp(320–1920 × 300–2400)`)
- dev 서버 상태 dot (10초 폴링) — 미실행 프로젝트는 프레임에 실행 방법 안내
- feature 내부 네비게이션 ↔ 메뉴 하이라이트 동기화 (`postMessage {__pvNav, screen}`)

> **임베드(딥링크) 모드**: 세 프로토타입 모두 `?preview=1&screen=<id>` 로 진입하면 studio 크롬(해상도 바·우측 패널) 없이
> feature 화면만 렌더합니다. 각 프로토타입을 단독으로 열면 기존처럼 자기 studio 패널이 그대로 뜹니다.

---

## 통일 양식 (Canonical Structure)

**디렉토리 위계 = 프리뷰 패널 위계**(B2B/B2C 탭 → 플로우 → 화면). 코드·문서·QA 모두 같은 축으로 정리됩니다.

```
prototypes/
├── preview/                        # ① 프리뷰 프로토타입 통합 HTML (허브, 무의존 self-contained)
│   ├── index.html                  #    3개 프로토타입 플로우를 한 패널에서 전환 (:5180)
│   └── PANEL_SPEC.md               # ② 프리뷰 패널 스펙 — 정본
│
└── <project>/
    ├── <project>-prototype.html    # ① HTML 셸 — #root + main.tsx 만 (UI 로직은 TSX)
    ├── src/
    │   ├── main.tsx
    │   ├── styles/                 #    preview-studio.css (pv-* 패널 CSS) 포함
    │   └── app/
    │       ├── App.tsx             #    PANEL_TABS(B2B/B2C 메뉴 트리) + 화면 스위치
    │       ├── preview/            # ② 프리뷰 패널 스펙 (구현)
    │       │   ├── PreviewStudio.tsx          # 해상도 핸들러(드래그 리사이즈·clamp)
    │       │   ├── PrototypeNavMenu.tsx       # B2B/B2C 탭 + 플로우 아코디언
    │       │   ├── PreviewControlPanel.tsx    # 헤더 + Restart + 메뉴 트리
    │       │   ├── PreviewViewportContext.tsx
    │       │   └── previewConstants.ts        # 375 / 768 / 1024 프리셋
    │       ├── flows/              # ⑤ 컴포넌트 — 패널 위계 그대로
    │       │   ├── b2c/<flow-id>/
    │       │   │   ├── <Screen>.tsx           #    플로우 화면 마스터
    │       │   │   └── components/            #    그 플로우 전용 컴포넌트
    │       │   ├── b2b/<flow-id>/…
    │       │   └── legacy/                    #    메뉴 미노출(과거 시안·이탈 타깃)
    │       ├── shared/             # ⑤ 플로우 공통 컴포넌트 (ui · ods · icons · mobile · flow · …)
    │       ├── data/ | utils/ | assets/
    │       └── …
    ├── docs/
    │   ├── README.md               #    문서 인덱스 (패널 위계 ↔ 문서·코드 매핑)
    │   ├── preview/                # ② 이 프로젝트의 패널 구현 위치 + 정본 링크
    │   ├── flows/                  # ③ 플로우 연관 PRD·스펙독 — 패널 위계 그대로
    │   │   ├── b2c/<flow-id>/README.md · PRD.md · FLOW.md
    │   │   └── b2b/<flow-id>/…
    │   ├── layout/                 # ④ 주요 페이지별 responsive 레이아웃 패턴
    │   │   ├── README.md           #    페이지 × breakpoint 패턴 인덱스
    │   │   └── LAYOUT_GUIDE.md     #    컨테이너·spacing·섹션 규칙
    │   └── system/                 #    디자인 토큰 · 아이콘 · IA · 참조 스펙
    └── qa/                         #    flow별 Figma/prod 대조 리포트·캡처 (form)
```

### 5종 산출물 매핑

| # | 요구사항 | 산출물 |
|---|---|---|
| ① | 프리뷰 프로토타입 통합 HTML | [`preview/index.html`](./preview) (허브) · 각 프로젝트 `<project>-prototype.html` 셸 |
| ② | 프리뷰 패널 스펙 | [`preview/PANEL_SPEC.md`](./preview/PANEL_SPEC.md) (정본) · `<project>/src/app/preview/**` · `<project>/docs/preview/` |
| ③ | 플로우 연관 PRD 문서·스펙독 | `<project>/docs/flows/<tab>/<flow-id>/` |
| ④ | 주요 페이지별 responsive 레이아웃 패턴 | `<project>/docs/layout/` |
| ⑤ | 컴포넌트 (React/TSX) | `<project>/src/app/flows/<tab>/<flow-id>/` (플로우 전용) · `src/app/shared/` (공통) |

---

## 프리뷰 스펙 (공통)

세 프로젝트가 동일한 프리뷰 스튜디오 패턴을 공유합니다.

- **해상도 프리셋**: Mobile `375×720` · Tablet `768` · Desktop `1024` (`previewConstants.ts`)
- **해상도 핸들러**: 좌/우/하단 드래그 리사이즈 + W/H 직접 입력, `clamp(320–1920 × 300–2400)`
- **브레이크포인트 판정**: `w<768 → Mobile`, `w<1024 → Tablet`, `else Desktop` (dot: amber/violet/green)
- **우측 컨트롤 메뉴 패널**: `PrototypeNavMenu` — 메뉴 **상단 B2B/B2C 스위칭 탭** + `PanelTab → sections[] → groups[](플로우) → items[](화면)` 아코디언 메뉴 트리로 화면 전환

## 메뉴 트리 규칙

세 프로토타입 모두 우측 패널 메뉴 상단에 **B2B / B2C 스위칭 탭**(`PanelTab[]`)을 두고, 활성 탭의 플로우 그룹만 노출한다.
해당 구분의 플로우를 보유하지 않은 프로토타입은 그 탭이 **비활성(disabled)** 으로 표시된다.
플로우는 탭 하위에 **섹션(메뉴 구분자)** 으로 묶는다 (`NavMenuSection.label`). 섹션은 2종이다.

| 섹션 | 뜻 |
|---|---|
| `flow prototype` | 탐색·검증용 프로토타입 플로우 |
| `flow prod.` | 운영 반영(또는 반영 예정) 플로우 |

```
B2C
├── 1. flow prototype
│   ├── 시공신청 크로스셀링 flow      (form)
│   ├── 견적신청퍼널 UX iteration     (form)
│   └── 책임보장 견적 계약 flow       (movingpartner)
└── 2. flow prod.
    ├── 이사신청폼                    (form)
    ├── 이사청소 신청폼               (form)
    └── 이사홈                        (movingHome)

B2B
└── 1. flow prototype
    └── 책임보장 견적 발송 flow       (movingpartner)
```

섹션 번호는 렌더 시 `sectionIndex + 1` 로 자동 부여되므로, 플로우를 한 종류만 가진 프로토타입에서는 `1.` 부터 시작한다.

- **form**: B2C — prototype(시공신청 크로스셀링 flow · 견적신청퍼널 UX iteration) / prod.(이사신청폼 · 이사청소 신청폼) (**시공신청 플로우는 메뉴에서 삭제**) / B2B 없음
- **movingHome**: B2C — prod.(이사홈 — 홈 / 콘텐츠 상세 / 견적 신청) / B2B 없음
- **movingpartner**: B2C — prototype(책임보장 견적 계약 flow — 매칭 파트너 목록·견적 확인 / 약관 동의 / 계약 확정) · B2B — prototype(책임보장 견적 발송 flow — 오더 / 상담 상세 / 채팅 / 일정마감 / 캐시 / 마이페이지)

## 실행

```bash
cd <project>
npm i
npm run dev
```

3개를 한 화면에서 보려면 위 [통합 프리뷰](#통합-프리뷰-preview) 섹션 참조 (Cursor: `Cmd+Shift+B`).
