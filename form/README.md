# form — 입력폼 플로우 프로토타입

오늘의집 이사/이사청소 견적 입력폼 및 크로스셀링·견적퍼널 UX 시안 프로토타입.
통합 워크스페이스의 [통일 양식](../README.md)을 따른다.

원본 Figma: [템플릿 프로토타이핑 · 입력폼 플로우](https://www.figma.com/design/xLSYUsFvNI1yfOJBMczsgx/-%ED%85%9C%ED%94%8C%EB%A6%BF-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9D%B4%ED%95%91--%EC%9E%85%EB%A0%A5%ED%8F%BC-%ED%94%8C%EB%A1%9C%EC%9A%B0)

## 구조

디렉토리 위계는 **프리뷰 패널 위계(B2B/B2C 탭 → 플로우 → 화면)** 를 그대로 따른다.

```
form/
├── form-prototype.html               # ① HTML 셸 (#root + main.tsx) — UI와 분리
├── src/app/
│   ├── App.tsx                       #    PANEL_TABS(메뉴 트리) + 화면 스위치(renderScreen)
│   ├── preview/                      # ② 프리뷰 패널 스펙 (PreviewStudio · PrototypeNavMenu · PreviewViewportContext · previewConstants)
│   ├── flows/                        # ⑤ 플로우별 화면·컴포넌트
│   │   ├── b2c/construction-crosssell/   #   시공신청 크로스셀링 flow
│   │   ├── b2c/estimate-funnel/          #   견적신청퍼널 UX iteration
│   │   ├── b2c/moving/                   #   이사 (6단계 입력폼)
│   │   ├── b2c/cleaning/                 #   이사청소
│   │   └── legacy/                       #   메뉴 미노출 (시공신청 폼 · 과거 시안) → legacy/README.md
│   ├── shared/                       # ⑤ 플로우 공통 컴포넌트
│   │   ├── ui/ ods/ icons/ figma/        #   디자인 시스템·프리미티브
│   │   ├── flow/                         #   InputFlowLayout · FlowBottomActions · FormStepTitle · DesktopFormParts
│   │   ├── belongings/ unified/          #   이삿짐 입력 · 통합 견적 화면 셸
│   │   └── mobile/ common/ parts/ survey/#   앱 크롬 · 주소 모달 · 정보 파트 · 설문
│   └── utils/ · assets/
├── src/imports/                      #    Figma 익스포트 원본
├── docs/                             #    → docs/README.md (인덱스)
│   ├── preview/                      # ② 패널 구현 위치 + 정본 링크
│   ├── flows/                        # ③ PRD · HANDOFF + b2c/<flow-id>/README
│   ├── layout/                       # ④ 페이지별 responsive 패턴 + LAYOUT_GUIDE
│   └── system/                       #    System · STYLE_TOKENS · ICON_LIBRARY · Guideline(s)
└── qa/                               #    flow별 Figma 대조 QA 리포트·캡처
```

## 메뉴 트리

우측 컨트롤 패널 메뉴 상단의 **B2B / B2C 스위칭 탭** 하위에 플로우가 배치된다.

```
form
├── [B2C]
│   ├── 시공신청 크로스셀링 flow      cxs_contact → crosssell → departure → type → confirm → list
│   ├── 견적신청퍼널 UX iteration     est_home → form → belongings(±photo/detail) → confirm → crosssell → list
│   ├── 이사                          input_step1 ~ 6
│   └── 이사청소                      cleaning_step1 ~ 4
└── [B2B] — 보유 플로우 없음 (탭 비활성)
```

플로우별 화면·구현 매핑은 [`docs/flows/`](./docs/flows) 참조.

## 실행

```bash
npm i
npm run dev      # /form-prototype.html 자동 오픈
npm run build
```

3개 프로토타입을 한 패널에서 보려면 워크스페이스 [통합 프리뷰](../README.md#통합-프리뷰-preview) 사용.
