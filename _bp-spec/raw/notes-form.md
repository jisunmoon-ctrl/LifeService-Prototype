# form — /moving/apply?movingType=HOME (auth required)

## Media queries (counts)
`(min-width:768px)` ×24 · `(max-width:767px)` ×20 · `(max-width:1023px)` ×8 · `(min-width:1024px)` ×7 · `(min-width:1256px)` ×7 · `(max-width:768px)` ×1
→ same breakpoint set, but **the layout switch happens at 768, not 1024**

## Per-viewport
| | 375 | 768 | 1024 | 1256 | 1440 |
|---|---|---|---|---|---|
| overflow | no | no | no | no | no |
| form column `div.css-1ag8q6e` | 343 (fluid − 16 gutter) | **478 fixed** | 478 | 478 | 478 |
| column centered x | 16 | 145 | 273 | 389 | 481 |
| wrapper `div.e1k4gq9t0` padY | **0** | **80** | 80 | 80 | 80 |
| step block `div.css-1ag8q6e` padY | 20 | 20 | 20 | 20 | 20 |
| section stack `div.css-1q6mex5` gap | 24 | 24 | 24 | 24 | 24 |
| calendar `div.exozz1m0` | grid 7col, gap 4, cell 44 (track 45.57) | 7col, gap 4, cell 44 (track 64.86) | same | same | same |
| bottom CTA `div.sticky-container` | **sticky bottom:0, w=375 (full-bleed), h=60** | sticky bottom:0, **w=478 (matches column)**, h=60 | 478 | 478 | 478 |
| h2 (step title) | **24/32 w600** | 24/32 w600 | 24/32 | 24/32 | 24/32 |
| header fixed h | 51 | 81 | 81 | 81 | 81 |
| footer gutter | 16 | 40 | 60 | 60 | 60 (capped 1256) |

## Notes
- The form is a **single centered fixed-width column of 478px** from 768 up — it never widens, at any viewport.
- 1024 and 1256 do **nothing** to the form content; they only affect GNB/footer chrome.
- h2 is 24/32 w600 at every breakpoint — no responsive type step on the form.
- Sticky bottom CTA constrains itself to the column width (478) at ≥768 instead of spanning full-bleed.
- Calendar day cell height is fixed 44; only the column track width flexes.
