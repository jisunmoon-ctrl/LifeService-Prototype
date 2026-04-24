# Prototype System Structure

`prototype/system/` is the single place for shared prototype UI resources.

## Directory Layout

- `tokens.css`
  - Common design tokens (`--ods-*`) used by preview/control UI.
- `components/preview-shell.css`
  - Reusable preview shell styles (layout, control tabs, responsive behavior).
- `components/preview-shell.js`
  - Reusable preview shell behavior (3depth paging menu + iframe routing).
- `pages/o2o-home/index.html`
  - O2O홈 디렉토리 관리용 페이지.
- `pages/apply-form/index.html`
  - 신청폼 디렉토리 관리용 페이지.

## How to Use in Pages

When implementing a prototype entry page, import system tokens/components first:

```html
<link rel="stylesheet" href="./system/tokens.css" />
<link rel="stylesheet" href="./system/components/preview-shell.css" />
...
<script src="./system/components/preview-shell.js"></script>
```

This keeps per-page files focused on screen content while system-level style/behavior remains centralized.
