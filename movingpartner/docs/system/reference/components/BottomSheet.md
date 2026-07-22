# BottomSheet — ODS 바텀 시트 (타이틀 영역)

> ODS `@bucketplace/design-system` `BottomSheet` compound · Figma [🌀 Bottom Sheet Type=fit](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO?node-id=2702-67104) (node `2702:67104` / variant `2702:67518`).
> 프로토타입 매핑: `.rev-modal` (리뷰 답글·숨김 요청 · PRD Partner Review).

---

## compound 구조 (Type=fit)

```
BottomSheet.Content
├── BottomSheet.Grabber
├── BottomSheet.Header
│   ├── (spacer 24×24)
│   ├── BottomSheet.Title
│   └── BottomSheet.Close → IconX 24 regular
├── BottomSheet.Body
└── BottomSheet.Footer
```

---

## 타이틀 영역 스펙

| 서브컴포넌트 | 프로토타입 클래스 | 스펙 | ODS/Figma 토큰 |
|---|---|---|---|
| **Grabber** | `.rev-modal__grabber` | pill **40×4** · radius 100 · padding **8 16 4** · 중앙 정렬 · **desktop(≥768) 숨김** | `neutral300/base_4` → `--divider` `#EAEDEF` |
| **Header** | `.rev-modal__head` | grid **`24px \| 1fr \| 24px`** · padding **4 16 12** · **border-bottom 없음** | `BottomSheet.Header` |
| **Spacer** | `.rev-modal__head-spacer` | **24×24** (타이틀 optical center용) | canonical usage 좌측 spacer |
| **Title** | `.rev-modal__title` | **16/20/700** · ls **-0.3px** · **text-align center** | Body16L20_Bold · `foreground` `#2F3438` |
| **Close** | `.rev-modal__x` | **24×24** · `IconX` regular · `aria-label="닫기"` | `foreground` (기존 `foreground-weak` 아님) |
| **Overlay** | `.rev-modal__dim` | `#00000066` | `system/dim-basic` |

---

## 레이아웃 delta (이전 프로토타입 → ODS)

| 항목 | 이전 | ODS 기준 |
|---|---|---|
| Grabber | 없음 | 상단 pill 추가 |
| Header 정렬 | `space-between` (좌 타이틀) | 3-col grid + 중앙 타이틀 |
| Header divider | `border-bottom` 있음 | **없음** |
| Close 아이콘 | 32×32 btn · 20×20 svg · weak color | **24×24** · **foreground** |
| Title letter-spacing | 없음 | **-0.3px** |
| Dim | `rgba(0,0,0,.45)` | **`#00000066`** |

---

## step3_assertions

- `.rev-modal__grabber::before` = 40×4 · bg `--divider`
- `.rev-modal__head` = `grid-template-columns: 24px 1fr 24px` · border-bottom 0
- `.rev-modal__title` = 16/20/700 · letter-spacing -0.3px · text-align center
- `.rev-modal__x svg` = 24×24 · color `--foreground`
- `@media(min-width:768px)` → `.rev-modal__grabber { display: none }`

**provenance**: ODS Figma `2702:67104` · `@bucketplace/design-system` canonical usage · `index.html` `.rev-modal`
