# movingpartner — 이사 파트너 프로토타입

오늘의집 이사 파트너(사장님센터) 및 고객 견적/계약 프로토타입.
`index.html` monolith 를 **React/Vite(ODS design-system)** 로 완전 포팅하고, 통합 워크스페이스의 [통일 양식](../README.md)을 따른다.

## 구조

디렉토리 위계는 **프리뷰 패널 위계(B2B/B2C 탭 → 플로우 → 화면)** 를 그대로 따른다.

```
movingpartner/
├── movingpartner-prototype.html      # ① HTML 셸 (#root + main.tsx) — UI와 분리
├── src/
│   ├── main.tsx                      #    studio(App) / preview(FeatureApp) 모드 분기
│   ├── app/
│   │   ├── App.tsx                   #    PANEL_TABS(B2B/B2C 메뉴 트리) + PreviewStudio + feature iframe
│   │   ├── FeatureApp.tsx            #    preview 모드 진입점 (?preview=1&screen= 라우팅)
│   │   ├── preview/                  # ② 프리뷰 패널 스펙 (PreviewStudio · PrototypeNavMenu · PreviewControlPanel)
│   │   ├── flows/
│   │   │   ├── b2b/guarantee-estimate/    # ⑤ 책임보장 견적 발송 flow
│   │   │   │   ├── PartnerOrderView.tsx · PartnerOrderDetailView.tsx · PartnerSimpleViews.tsx
│   │   │   │   └── components/            #    PartnerShell · OrderCard · ListTab · NavigationMenu · StepStatusBadge · icons/types/constants
│   │   │   └── b2c/guarantee-contract/    # ⑤ 책임보장 견적 계약 flow
│   │   │       ├── CustomerApp.tsx        #    stage: list / terms / contracted
│   │   │       └── components/TermsAgreementModal.tsx
│   │   ├── shared/                   # ⑤ 플로우 공통 (prototype-ods 셸 · hooks)
│   │   └── data/                     #    orders · customerPartners · custTerms · partnerViews
│   └── styles/                       #    partner.css(추출) + preview-studio.css
└── docs/                             #    → docs/README.md (인덱스)
    ├── preview/                      # ② 패널 구현 위치 + prototype-preview-pattern
    ├── flows/                        # ③ FLOW.md + b2b/guarantee-estimate · b2c/guarantee-contract (README·PRD)
    ├── layout/                       # ④ 페이지별 responsive 패턴 + LAYOUT_GUIDE
    └── system/reference/             #    IA · persona · spec · flow-guide · pattern-rules · 컴포넌트 스펙
```

## 메뉴 트리

우측 컨트롤 패널 메뉴 상단의 **B2B / B2C 스위칭 탭** 하위에 플로우가 배치된다.

```
movingpartner
├── [B2C] 책임보장 견적 계약 flow: 매칭 파트너 목록·견적 확인 · 약관 동의 · 계약 확정
└── [B2B] 책임보장 견적 발송 flow: 오더 · 상담 상세 · 채팅 · 일정마감 · 캐시 · 마이페이지
```

## 프리뷰 스펙

- 상단 해상도 핸들러: Mobile 375 / Tablet 768 / Desktop 1024 + 드래그 리사이즈
- 우측 컨트롤 메뉴 패널: 메뉴 상단 B2B/B2C 스위칭 탭 + 활성 탭의 플로우 메뉴 트리
- feature 는 **iframe** 으로 로드 → `@media(768)` 반응형 IA(모바일 appbar+bottomnav ↔ 데스크탑 topnav)가 프레임 폭 기준으로 동작

## 실행

```bash
npm i
npm run dev      # /movingpartner-prototype.html 자동 오픈
npm run build
```

> partner.css 는 원본 `MovingPartner/index.html` 에서 추출한 feature CSS. 에셋(`assets/*.png`)은 견적 캡처 이미지.
