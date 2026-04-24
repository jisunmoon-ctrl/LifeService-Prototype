# d. Prototype 폴더 구조 가이드

목적: `prototype/` 내 토큰/컴포넌트/에셋을 한 곳에서 관리하고, 엔트리 페이지가 이를 끌어다 쓰는 구조를 정의합니다.

## 1) 기준 디렉터리

```text
prototype/
  system/
    tokens.css
    components/
      preview-shell.css
      preview-shell.js
    pages/
      o2o-home/index.html
      apply-form/index.html
    README.md
  assets/
    components/
    ...
  index.html
  hub.html
  hub-b.html
  companies.html
```

## 2) 역할 분리 원칙

- `system/tokens.css`
  - 공통 토큰 변수(`--ods-*`)만 정의.
- `system/components/*`
  - 여러 화면에서 재사용 가능한 레이아웃/상태 전환 UI 로직.
- `system/pages/*`
  - 메뉴 디렉토리별 페이지 ID/URL 관리 문서 페이지.
- `assets/`
  - 화면 전용 이미지/SVG/JSON 데이터.
- 엔트리 페이지(`index.html`)
  - `system`에서 토큰/컴포넌트를 import하고 화면 조합만 담당.

## 3) 구현 규칙

- 새 엔트리 페이지를 만들 때 인라인 토큰/공통 로직을 직접 작성하지 말고 `system`을 우선 참조.
- 화면 전용 스타일/동작만 개별 파일에 추가.
- ODS 토큰 변경은 `docs/design-system/foundation-tokens.md`를 먼저 갱신한 뒤 반영.

## 4) 현재 반영 사항

- `prototype/index.html`의 인라인 토큰/프리뷰 제어 스타일/스크립트를 `prototype/system/`으로 분리 완료.
- `prototype/index.html` 컨트롤 패널을 3depth 페이징 메뉴(`O2O홈/신청폼`) 중심 UI로 개편 완료.
- `prototype/system/pages/o2o-home/index.html`, `prototype/system/pages/apply-form/index.html` 생성 완료.
