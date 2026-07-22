# Project guidelines

## Picking the right models for workflows and subagents

Rankings, higher = better. Cost reflects what I actually pay (OpenAI has really generous limits), not list price. Intelligence is how hard a problem you can hand the model unsupervised. Taste covers UI/UX, code quality, API design, and copy.

| model | cost | intelligence | taste |
|---------|------|--------------|-------|
| gpt-5.5 | 9 | 8 | 5 |
| sonnet-5 | 5 | 5 | 7 |
| opus-4.8 | 4 | 7 | 8 |
| fable-5 | 2 | 9 | 9 |

How to apply:

- These are defaults, not limits. You have standing permission to override them: if a cheaper model's output doesn't meet the bar, rerun or redo the work with a smarter model without asking. Judge the output, not the price tag. Escalating costs less than shipping mediocre work.
- Cost is a tie-breaker only; when axes conflict for anything that ships, intelligence > taste > cost.
- Bulk/mechanical work (clear-spec implementation, data analysis, migrations): gpt-5.5 — it's effectively free.
- Anything user-facing (UI, copy, API design) needs taste ≥ 7.
- Reviews of plans/implementations: fable-5 or opus-4.8, optionally gpt-5.5 as an extra independent perspective.
- Never use Haiku.
- Mechanics: gpt-5.5 is only reachable through the Codex CLI — `codex exec` / `codex review` (my `~/.codex/config.toml` defaults to gpt-5.5). Use the codex-implementation, codex-review, and codex-computer-use skills; for work they don't cover (investigation, data analysis), run `codex exec -s read-only` directly with a self-contained prompt.
- Claude models (sonnet-5, opus-4.8, fable-5) run via the Agent/Workflow model parameter.

---

# Responsive 프로토타입 생성 (Figma 모바일 노드 → 해상도 대응)

## 트리거

사용자가 **Figma 노드(URL 또는 node-id)를 주면서** 아래 맥락의 요청을 하면 이 절차를 따른다.

> "해상도 대응해줘" · "반응형으로 만들어줘" · "responsive 대응" · "데스크톱 대응해줘"
> "이 피그마 노드 반응형 프로토타입으로" · `/responsive-proto`

**입력은 모바일(XS, 보통 375px) 프레임 한 벌**이고, SM/MD/LG 는 **디자인이 아니라 유도(derive)** 한다.

## 규칙 문서 (정본)

| 문서 | 역할 |
|---|---|
| [`_bp-spec/FIGMA-TO-RESPONSIVE-PIPELINE.md`](./_bp-spec/FIGMA-TO-RESPONSIVE-PIPELINE.md) | **변환 절차 7단계** — 역할 태깅 11종, archetype/rail 결정, XS→SM/MD/LG 유도표 |
| [`_bp-spec/PROTOTYPE-LAYOUT-SPEC.md`](./_bp-spec/PROTOTYPE-LAYOUT-SPEC.md) | **레이아웃 값·CSS 스캐폴드·검증 게이트 G1~G14** |
| [`_bp-spec/BREAKPOINT-PATTERN-RULES.md`](./_bp-spec/BREAKPOINT-PATTERN-RULES.md) | 실측 근거 (2026-07-22 QA 5개 페이지 × 5개 폭). 값의 출처를 되짚을 때만 |
| `<project>/docs/layout/LAYOUT_GUIDE.md` | 해당 프로젝트의 기존 레이아웃 규칙. **_bp-spec 과 충돌하면 프로젝트 문서가 우선** |

## 절대 규칙 (실측 확정 — 어겨서는 안 됨)

1. **breakpoint 는 768 / 1024 / 1256 뿐이다.** 640·960·1200 등을 새로 만들지 않는다
2. **gutter 는 16 / 40 / 60 사다리**를 따른다
3. **shell max 1256 · 콘텐츠 max 1136**
4. **컬럼 수를 breakpoint 로 바꾸지 않는다** — 5×5 전수 측정 예외 0건.
   **모바일 1열 리스트를 데스크톱에서 2열로 "개선"하지 않는다.** 캐러셀도 그리드로 리플로우하지 않는다
5. **rail 은 최대 1개** — 2단을 넘는 분할은 만들지 않는다

## 산출물 계약 (이 워크스페이스 전용)

**self-contained HTML 이 아니라 React/TSX 로 낸다.** 통일 양식(README.md)을 따른다.

```
<project>/src/app/flows/<tab>/<flow-id>/<Screen>.tsx   # 화면 마스터
<project>/src/app/flows/<tab>/<flow-id>/components/    # 그 플로우 전용 컴포넌트
<project>/src/app/shared/                              # 공통으로 승격할 때만
<project>/docs/layout/LAYOUT_GUIDE.md                  # 유도 결과(archetype·rail·breakpoint별 폭) 기록
```

- 어느 프로젝트(`form` / `movingHome` / `movingpartner`)에 넣을지 **불명확하면 물어본다**
- 메뉴 노출이 필요하면 `App.tsx` 의 `PANEL_TABS` 에 화면을 등록한다
- 프리뷰는 기존 `PreviewStudio` 로 확인한다. 별도 하네스를 만들지 않는다

## 검증

`PROTOTYPE-LAYOUT-SPEC.md` §9 의 **G1~G14 를 전부 통과**해야 완료로 보고한다.
프리뷰에서 **375 / 768 / 1024 / 1256 / 1440** 를 직접 확인한다.

> `previewConstants.ts` 의 `PREVIEW_BPS` 프리셋은 **375 / 768 / 1024** 다 (Desktop = archetype 전환점 1024).
> **1256(shell 상한 도달점)·1440 프리셋은 의도적으로 두지 않는다** — 검증 시 W 입력창에 직접 입력한다.

## 물어봐야 할 것 (조용히 기본값으로 때우지 않는다)

- **archetype B(720 고정) 여부** — 모바일 프레임만으로 판별 불가. 결과가 크게 달라진다
- rail 후보가 2개 이상일 때 우선순위 (기본: nav-rail 우선)
- 어느 프로젝트에 산출할지

## 상위 지침

`~/.claude/CLAUDE.md` 가 우선한다 — ODS 토큰(raw hex 금지) · ODS 아이콘 · ODS 미정의 컴포넌트 금지 · GNB/statusbar 구현 제외.
