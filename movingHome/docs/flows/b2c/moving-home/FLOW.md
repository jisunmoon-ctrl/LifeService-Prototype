# 플로우 & 화면 구성 — movingHome

> **메뉴 트리 루트**: `movingHome`
> **프레임**: 375×720 (Mobile) 기준
> **성격**: 단일 스크롤 페이지 + 2개 드릴인 오버레이

## 1. 화면 구성 (메뉴 트리)

`App.tsx` 의 `PANEL_TABS: PanelTab[]` — 우측 컨트롤 패널(`PrototypeNavMenu`) 메뉴 상단 B2B/B2C 스위칭 탭에서 전환.

```
movingHome
├── [B2C]
│   └── 이사홈 (moving-home-flow)
│       ├── ① 이사홈 (메인 · 단일 페이지)   [home]
│       ├── ② 이사 꿀팁 콘텐츠 상세          [content]
│       └── ③ 견적 신청                     [quote]
└── [B2B] — 보유 플로우 없음 (탭 비활성)
```

## 2. 플로우 동작

```
① 이사홈 (홈)
   ├─ 꿀팁 TipCard 탭 ───────────▶ ② 콘텐츠 상세  (onContentSelect(contentId))
   ├─ 바로가기 카드 '견적받기' ──▶ ③ 견적 신청    (onQuoteRequest)
   └─ 파트너 카드 '견적받기' ────▶ ③ 견적 신청    (onQuoteRequest)

② 콘텐츠 상세 ── 뒤로가기 ──▶ ① 이사홈
③ 견적 신청   ── 뒤로가기 ──▶ ① 이사홈
```

### 상태 관리 (`App.tsx`)
- `currentScreen: "home" | "content" | "quote"` — 현재 화면
- `selectedContentId` — 콘텐츠 상세에 표시할 ID (메뉴에서 직접 진입 시 `CONTENT_ITEMS[0]` 기본값)
- `resetKey` — Restart 시 프레임 리마운트
- 홈은 내부 상태 보존을 위해 마운트 유지(`hidden` 토글), 오버레이만 조건부 렌더
- 스크롤은 PreviewStudio 프레임(`overflow-y-auto`)이 담당

## 3. 화면별 상세

### ① 이사홈 (`MovingHomeScreen` → `imports/MovingHomeV2`)
- ATF: "검증된 이사 파트너에게 비교견적 받기" + 바로가기 카드(소형/원룸 · 가정이사)
- 꿀팁: `CONTENT_ITEMS` 가로 스크롤
- PLP: 지역 필터(`RegionFilterSheet`) + 이사타입 칩(소형/원룸 · 가정이사) + 무한 스크롤 파트너 목록(`partnerMockData`)

### ② 콘텐츠 상세 (`ContentDetailScreen` → `imports/ContentDetail`)
- 아티클 뷰: 뒤로/더보기, 타이틀, 작성자(팔로우), `content.blocks`, 인게이지먼트, 댓글 바

### ③ 견적 신청 (`QuoteScreen` → `imports/QuoteEmpty`)
- 현재 "준비중" empty state (향후 견적 입력 플로우 연결 지점)

## 4. 데이터 소스

| 모듈 | 내용 |
|---|---|
| `data/contentData.ts` | 꿀팁 콘텐츠 카탈로그 (`CONTENT_ITEMS`, `getContentById`) |
| `data/regionData.ts` | 지역(시/도·구) 데이터 |
| `data/partnerMockData.ts` | 파트너(업체) 목 데이터 + 지역/이사타입 필터 |

목 데이터는 `scripts/*.mjs` (수동 실행)로 생성된다.
