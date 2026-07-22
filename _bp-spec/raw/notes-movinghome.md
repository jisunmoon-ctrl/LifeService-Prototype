# movinghome — /moving?closeLegacyWebview=true

## Media queries found in stylesheets (counts)
- `(max-width: 767px)` ×18
- `(min-width: 768px)` ×12
- `(min-width: 1024px)` ×11
- `(max-width: 1023px)` ×8
- `(min-width: 1256px)` ×6
- `(max-width: 1255px)` ×2
- `(max-width: 768px)` ×1
- non-width: `(pointer: coarse)` ×10, `(hover: hover) and (pointer: fine)` ×6

→ breakpoint set = **768 / 1024 / 1256**

## Per-viewport
| | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| doc overflow | no | no | no | no | no |
| content column w | 375 (fluid) | 768 (fluid) | **720 fixed** | **720 fixed** | **720 fixed** |
| content column x | 0 | 0 | 152 | 268 | 360 |
| content maxW | none | none | 720px | 720px | 720px |
| layout | 1-col full-bleed | 1-col full-bleed | 2-col: aside 220 + main 480, gap 20 | same | same |
| gutter (content) | 16 | 16 | 0 (column centered) | 0 | 0 |
| header (fixed) h | 51 | 81 | 81 | 81 | 81 |
| GNB inner gutter | — | 40 | 60 | 60 | 60 |
| GNB inner maxW | — | 768 | 1024 | 1256 | **1256 (capped)** |
| footer padY | 30 | 40 | 40 | 40 | 40 |
| footer gutter | 16 | 40 | 60 | 60 | 60 |
| footer cols | 1 (grid gtc=343px) | 2 (319.5/1/319.5) | 3 (256/1/256/1/294) | 3 (256/1/256/1/526) | same, capped 1256 |
| footer gap | 20px 24px | 24px | normal 24px | normal 24px | — |
| h2 | 17/26 w600 | 17/26 | **20/28 w600** | 20/28 | 20/28 |
| CTA btn 견적받기 | h32 r6 fs16 | h32 r6 | **h40 r8 fs16** | h40 r8 | h40 r8 |

## Structure
- shell: `body > div > div.css-1svsvwq(app) > div.css-1jlnwea > [content]`
- <1024 content wrapper: `div.css-lf0iv9` (flex col, maxW 100%)
- ≥1024 content wrapper: `div.e1s4ium20.css-1hsbsv9 > div.css-1s2jk90 (maxW 720, centered) > div.css-7ev8lh (flex row, gap 20, pb 24) > aside.css-1bp8u84 (220) + div.css-djmc2g (480)`
- desktop hero section `section.css-1r4z3et` padY **60**
- desktop sub-hero row `div.css-1tiu741` 2-col, item 338, gap 4, padX 16

## Repeated groups
- partner card list `div.css-1l0qm2u` — flex col, gap **16**, item = full column width (343 @375 / 736 @768 / 480 @≥1024)
- partner card `article.css-ludcxp` — pad 16/16/16/16 (<1024) → **16/0/16/0** (≥1024)
- service-tag row `div.ehdussc0` — flex row, gap **2**, overflow-x auto, SCROLLS
- tip chips carousel `div.e5cqmy20` (<1024) — flex, gap **4**, overflow-x auto SCROLLS, item **150**, padL 16
- tip carousel ≥1024 `ul.css-e85tbb` — item **157**, gap 0, overflow hidden, SCROLLS
- section `section.css-uxnjua` (tips, ≥1024) pad-bottom 36; heading block `div.css-10u9dtg` pad-bottom 24

## Fixed / sticky
- `div.e1988c065` (header) **fixed** top:0 z=1102, h 51 (<768) → 81 (≥768), full width
- `button.styles_floatingButton` fixed bottom 40 (<1024) → **20** (≥1024), h 22→27, pad 3/6 → 4/8 — dev/QA badge, not product chrome
