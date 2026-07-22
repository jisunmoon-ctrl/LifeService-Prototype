---
name: responsive-proto
description: Figma 모바일(XS) 노드 프레임을 입력받아 768/1024/1256 해상도 대응 responsive 프로토타입(React/TSX)을 생성한다. 사용자가 Figma 노드 URL·node-id 를 주면서 "해상도 대응해줘", "반응형으로 만들어줘", "responsive 대응", "데스크톱 대응해줘", "이 피그마 노드 반응형 프로토타입으로", "브레이크포인트 대응" 같이 요청할 때 트리거. _bp-spec 의 실측 레이아웃 패턴 규칙에 맞춰 XS 한 벌에서 SM/MD/LG 를 유도한다.
---

# Responsive 프로토타입 생성

Figma 모바일 프레임 1개 → 768/1024/1256 대응 React/TSX 프로토타입.

## 0. 먼저 읽을 것

이 스킬은 **규칙을 여기 복제하지 않는다.** 아래를 실제로 읽고 따른다.

1. [`_bp-spec/FIGMA-TO-RESPONSIVE-PIPELINE.md`](../../../_bp-spec/FIGMA-TO-RESPONSIVE-PIPELINE.md) — 변환 절차 7단계 (본체)
2. [`_bp-spec/PROTOTYPE-LAYOUT-SPEC.md`](../../../_bp-spec/PROTOTYPE-LAYOUT-SPEC.md) — 레이아웃 값·CSS 스캐폴드·게이트
3. 대상 프로젝트의 `docs/layout/LAYOUT_GUIDE.md` — 충돌 시 **프로젝트 문서 우선**

## 1. 입력 확인

Figma 노드가 없으면 **먼저 요청한다.** 추측해서 진행하지 않는다.

```
URL → fileKey / nodeId 추출
  https://figma.com/design/:fileKey/:name?node-id=1-2  →  nodeId "1:2"
  node-id 가 없으면 nodeId 생략하고 top-level 페이지 목록부터. 추측 금지.
```

동시에 확정할 것 (불명확하면 **묻는다**):
- 어느 프로젝트에 산출하는가 — `form` / `movingHome` / `movingpartner`
- 어느 플로우(`<tab>/<flow-id>`)에 속하는가
- archetype B(720 고정)를 써야 하는가 — 기본은 A

## 2. 절차

`FIGMA-TO-RESPONSIVE-PIPELINE.md` §1 의 7단계를 순서대로 실행한다.

```
STEP 1  프레임 읽기      → /figma-design-to-code 스킬 로드 후 get_metadata → get_design_context
STEP 2  역할 태깅        → role 11종 (§3). 모호하면 R-SECTION
STEP 3  ODS 컴포넌트 해석 → resolve_figma_component → check_component_name → get_component
STEP 4  archetype + rail  → 자유도 3개 확정 (§5.1)
STEP 5  breakpoint 유도   → role별 유도표 (§5.2) ← 본체
STEP 6  TSX 생성         → 아래 §3 산출물 계약
STEP 7  검증             → 아래 §4
```

**STEP 1 전제**: `get_design_context` 호출 전에 `/figma-design-to-code` 스킬을 반드시 로드한다.

## 3. 산출물 계약

**self-contained HTML 이 아니다. React/TSX 로 낸다** (워크스페이스 통일 양식 — 루트 `README.md`).

```
<project>/src/app/flows/<tab>/<flow-id>/<Screen>.tsx
<project>/src/app/flows/<tab>/<flow-id>/components/
<project>/src/app/shared/                  # 2개 이상 플로우가 쓸 때만 승격
<project>/docs/layout/LAYOUT_GUIDE.md      # 유도 결과 기록 (archetype·rail·폭 표)
```

- 메뉴 노출이 필요하면 `App.tsx` 의 `PANEL_TABS` 에 등록
- 프리뷰는 기존 `PreviewStudio` 사용. **별도 하네스를 만들지 않는다**
- `PROTOTYPE-LAYOUT-SPEC.md` §3 의 CSS 스캐폴드를 프로젝트 스타일 규약에 맞게 이식 (CSS Module / styled 등 기존 방식 따름)

## 4. 검증 — 통과 전 완료 보고 금지

`PROTOTYPE-LAYOUT-SPEC.md` §9 의 **G1~G14 전부**. 이 파이프라인에서 특히 자주 깨지는 것:

| 게이트 | 내용 |
|---|---|
| **G5 / G6** | 모바일 1열 리스트를 데스크톱에서 **2열로 만들지 않았는가**. 그리드 컬럼 수 불변인가 |
| **G7** | 캐러셀을 그리드로 리플로우하지 않았는가 |
| **G4** | 768/1024/1256 외 breakpoint 를 만들지 않았는가 |
| **G11 / G12** | Figma raw hex·아이콘을 그대로 옮기지 않고 **ODS 토큰·ODS 아이콘**으로 치환했는가 |
| **G14** | 프레임에 있던 **GNB·statusbar 를 구현하지 않았는가** |

프리뷰에서 **375 / 768 / 1024 / 1256 / 1440** 를 직접 확인한다.

> `previewConstants.ts` 의 `PREVIEW_BPS` 는 **375 / 768 / 1024** 다 (Desktop = archetype 전환점 1024).
> **1256 · 1440 프리셋은 의도적으로 없다** — W 입력창에 직접 입력해 확인한다. 프리셋을 임의로 추가하지 않는다.

**역방향 확인**: 375 로 렌더한 결과가 입력 Figma 프레임과 구조상 일치해야 한다.
불일치면 유도가 아니라 STEP 2 역할 태깅이 틀린 것 — 태깅부터 다시 한다.

## 5. 절대 규칙 (실측 확정)

1. breakpoint 는 **768 / 1024 / 1256** 뿐
2. gutter **16 / 40 / 60**
3. shell max **1256** · 콘텐츠 max **1136**
4. **컬럼 수를 breakpoint 로 바꾸지 않는다** (5×5 전수 예외 0건)
5. **rail 최대 1개**

## 6. 보고

완료 시 아래를 명시한다.

- 선택한 **archetype** 과 근거
- **rail 승격** 여부와 어느 블록인지 (또는 단일 컬럼)
- breakpoint별 콘텐츠 폭 표
- 통과하지 못한 게이트가 있으면 **숨기지 말고 보고**
- 유도가 아니라 **임의 판단한 부분**이 있으면 명시 (예: 디자인에 없어 기본값을 쓴 곳)
