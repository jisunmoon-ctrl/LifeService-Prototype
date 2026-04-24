# LifeHub 문서 위계 (리팩토링)

이 디렉터리는 프로젝트 내 Markdown 문서의 단일 진입점입니다.
운영/참조는 아래 위계를 기준으로 진행합니다.

## a. ODS 파운데이션/레이아웃 가이드 (CLAUDE)

- `docs/guide/a-claude-ods-foundation-layout.md`
- 참조 원본:
  - `CLAUDE.md`
  - `docs/design-system/foundation-tokens.md`
  - `docs/design-system/pc-layout-1028-life-moving.md`

## b. 컴포넌트/에셋 관리

### b-1. 디자인시스템 에셋 스토리북 연결

- `docs/guide/b-1-design-system-storybook-assets.md`

### b-2. 글로벌 컴포넌트 구조 정의

- `docs/guide/b-2-global-components-structure.md`

## c. 프리뷰 외 컨트롤 패널 UI 문서

- `docs/guide/c-preview-control-panel-ui.md`

## d. 프로토타입 폴더 구조 가이드

- `docs/guide/d-prototype-folder-structure.md`

## e. 프리뷰 레이아웃 & 패널 공통 스펙

- `e-preview-layout-panel-spec.md` (저장소 루트, Sun-Moon 레포 위계와 동일)

---

## 권장 읽기 순서

1. `docs/guide/a-claude-ods-foundation-layout.md`
2. `docs/guide/b-1-design-system-storybook-assets.md`
3. `docs/guide/b-2-global-components-structure.md`
4. `docs/guide/c-preview-control-panel-ui.md`
5. `docs/guide/d-prototype-folder-structure.md`
6. `e-preview-layout-panel-spec.md` (루트)

---

## 레거시 상세 스펙 매핑

아래 문서는 세부 계약/흐름을 담은 레거시 상세본이며, 상위 위계 문서의 하위 참조로 사용합니다.

- `01-component-spec.md` -> b-2 하위 상세(컴포넌트 계약)
- `02-screen-structure.md` -> c 하위 상세(화면 구조)
- `03-flow-spec.md` -> c 하위 상세(상태 전이/검증)
- `docs/spec-experts-home-mobile.md` -> b-2, c 보조 참고
- `docs/hub-ia-comparison.md` -> c 보조 참고
