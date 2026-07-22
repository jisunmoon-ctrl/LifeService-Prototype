# partnerhome — /partners/{id}

## Media queries (counts)
`(min-width:768px)` ×28 · `(min-width:1024px)` ×23 · `(max-width:767px)` ×18 · `(max-width:1023px)` ×8 · `(min-width:1256px)` ×6 · `(max-width:1255px)` ×2 · `(max-width:768px)` ×1
→ same breakpoint set **768 / 1024 / 1256**

## Per-viewport
| | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| overflow | no | no | no | no | no |
| content container `div.e1cb5dzo2` | 375 | 688 | 904 | **1136** | **1136 (capped)** |
| container maxW | none | none | **1136px** | 1136px | 1136px |
| container x | 0 | 40 | 60 | 60 | 152 (centered) |
| gutter | 16 (inner) | 40 | 60 | 60 | 60 → then centered |
| layout | 1-col | 1-col | 2-col **300 + 544**, gutter 60 | 2-col **300 + 776** | same |
| header fixed h | 51 | 81 | 81 | 81 | 81 |
| tab bar `div.css-fxeuau` | 4 cols × 94 | 4 × 172 | 4 × 226 (fixed top:81 h45 z1) | 4 × 284 | 4 × 284 |
| bottom CTA `div.css-f0ds6j` | sticky h **80** | sticky h 80 | **absent** | absent | absent |
| h2 (partner name) | 20/28 **w700** | **24/32 w600** | 24/32 w600 | 24/32 | 24/32 |
| h3 (section) | 20/28 w700 | 20/28 w700 | 20/28 w700 | — | — |
| photo grid `div.css-7nr44h` | 3 cols × 109, gap 8 | 3 × 224, gap 8 | 3 × 176, gap 8 | 3 × 253, gap 8 | 3 × 253 |
| footer maxW | none | none | none | **1256px** | 1256px, centered x=92 |

## Structure (≥1024)
`div.e1cb5dzo0 > [sticky tabbar full-bleed] + div.e1cb5dzo2 (maxW 1136, centered)`
`div.e1cb5dzo2` = flex row, 2 children: left rail **300** (partner summary card, sticky) + right **544/776** content
- 904 = 300 + 60 + 544 · 1136 = 300 + 60 + 776 → **column gutter 60**
- right column section stack `div.css-1q6mex5` gap **24**
- review list `div.css-1l0qm2u` flex col gap **16**

## Structure (<1024)
single column, content inset by gutter (16 @375 / 40 @768); tab bar full-bleed sticky; bottom CTA bar sticky h=80.

## Key contrast vs movinghome
- movinghome desktop = **fixed 720 centered** (220 aside + 480 main, gap 20)
- partnerhome desktop = **fluid up to 1136** (300 rail + fluid main, gap 60)
→ two different desktop container patterns coexist in the same service.
