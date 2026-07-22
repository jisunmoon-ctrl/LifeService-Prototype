# movingHome — 이사홈 프로토타입

오늘의집 이사홈. 단일 스크롤 페이지 + 2개 드릴인 오버레이(콘텐츠 상세 / 견적 신청)를 `movingHome` 메뉴 트리로 재배치한 프로토타입.
통합 워크스페이스의 [통일 양식](../README.md)을 따른다.

원본 Figma: https://www.figma.com/design/BQNuXQxkuKyAy5Hadf7KOj/이사홈

## 구조

디렉토리 위계는 **프리뷰 패널 위계(B2B/B2C 탭 → 플로우 → 화면)** 를 그대로 따른다.

```
movingHome/
├── movingHome-prototype.html         # ① HTML 셸 (#root + main.tsx) — UI와 분리
├── src/app/
│   ├── App.tsx                       #    PANEL_TABS(메뉴 트리) + 화면 스위치 + PreviewStudio
│   ├── preview/                      # ② 프리뷰 패널 스펙 (PreviewStudio · PrototypeNavMenu · PreviewControlPanel · previewConstants)
│   ├── flows/b2c/moving-home/        # ⑤ 이사홈 플로우
│   │   ├── MovingHomeScreen.tsx      #    ① 이사홈 (메인)
│   │   ├── ContentDetailScreen.tsx   #    ② 콘텐츠 상세
│   │   ├── QuoteScreen.tsx           #    ③ 견적 신청
│   │   └── components/               #    MovingHome · FilterBottomSheet · RegionFilterSheet · FilterChip · SlotText
│   ├── shared/                       # ⑤ 플로우 공통 (ui · figma)
│   └── data/                         #    contentData · regionData · partnerMockData
├── src/imports/                      #    Figma 익스포트 화면(MovingHomeV2 · ContentDetail · QuoteEmpty)
├── scripts/                          #    데이터 생성 스크립트
└── docs/                             #    → docs/README.md (인덱스)
    ├── preview/                      # ② 패널 구현 위치 + 정본 링크
    ├── flows/b2c/moving-home/        # ③ README · FLOW · PRD
    ├── layout/                       # ④ 페이지별 responsive 패턴 + LAYOUT_GUIDE
    └── system/                       #    Guidelines
```

## 메뉴 트리

우측 컨트롤 패널 메뉴 상단의 **B2B / B2C 스위칭 탭** 하위에 플로우가 배치된다.

```
movingHome
├── [B2C]
│   └── 이사홈
│       ├── ① 이사홈 (메인 · 단일 페이지)
│       ├── ② 이사 꿀팁 콘텐츠 상세
│       └── ③ 견적 신청
└── [B2B] — 보유 플로우 없음 (탭 비활성)
```

## 프리뷰 스펙

우측 컨트롤 패널 + 상단 해상도 핸들러(Mobile 375 / Tablet 768 / Desktop 1024, 드래그 리사이즈)로 화면 전환·해상도 확인.

## 실행

```bash
npm i
npm run dev      # /movingHome-prototype.html 자동 오픈
npm run build
```
