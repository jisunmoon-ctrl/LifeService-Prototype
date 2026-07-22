# 플로우 & 화면 구성 — movingpartner

> **메뉴 트리 루트**: `movingpartner` (파트너사 / 고객단)
> **성격**: 파트너(B2B) 사장님센터 IA + 고객(B2C) 견적/계약 플로우
> **관련 문서**: [`LAYOUT_GUIDE.md`](LAYOUT_GUIDE.md) · [`reference/Docs_Partner_IA.md`](reference/Docs_Partner_IA.md) · [`reference/flow-guide.md`](reference/flow-guide.md)

## 1. 화면 구성 (메뉴 트리)

`App.tsx` 의 `PANEL_TABS: PanelTab[]` — 우측 컨트롤 패널 메뉴 상단 B2B/B2C 스위칭 탭에서 화면 전환.
각 화면은 iframe(`?preview=1&screen=<id>`)으로 로드.

```
movingpartner
├── [B2C]
│   └── 책임보장 견적 계약 flow
│       ├── ① 매칭 파트너 목록 · 견적 확인   [customer]
│       ├── ② 약관 동의                      [customer_terms]
│       └── ③ 계약 확정                      [customer_contracted]
└── [B2B]
    └── 책임보장 견적 발송 flow
        ├── ① 오더 (상담 목록)     [order]
        ├── ② 상담 상세            [order_detail]
        ├── ③ 채팅                 [chatting]
        ├── ④ 일정마감             [schedule]
        ├── ⑤ 캐시                 [cash]
        └── ⑥ 마이페이지           [my]
```

## 2. 플로우 동작

### 파트너사 (B2B) — 사장님센터 IA
```
오더 목록 (상태 필터: 수락대기 / 상담중 / 계약완료 / 상담종료)
  ├─ 카드 탭 ───────────▶ 상담 상세 (견적 정보 + 액션)
  │                         ├─ 견적 보내기 / 견적서 확인
  │                         └─ 채팅 보기 ─▶ 채팅
  └─ 하단/상단 네비 ─────▶ 채팅 · 일정마감 · 캐시 · 마이페이지
```
- 데스크탑 TopNav / 모바일 BottomNav 로 5개 뷰 전환 (`switchView` → React 상태 전환, `PartnerShell`)
- 인-피처 네비게이션은 studio 메뉴 트리 하이라이트와 postMessage 로 동기화

### B2C — 책임보장 견적 계약 flow
```
① 매칭 파트너 목록·견적 확인 (업체 매칭 카드: 평점·확정 견적)
  └─ 계약하기 ─▶ ② 약관 동의(TermsAgreementModal) ─▶ ③ 계약 확정
                  → 스낵바 "계약이 확정됐어요! 문의 사항은 업체와 채팅으로 상담하세요."
```
- 실제 구현: `flows/b2c/guarantee-contract/CustomerApp` (@bucketplace/design-system) + `TermsAgreementModal`
- 메뉴에서 단계 직접 진입: `CustomerApp` 의 `stage` prop(`list` / `terms` / `contracted`) — `FeatureApp` 의 `CUSTOMER_STAGES` 매핑

## 3. 아키텍처 (React 포팅)

- **studio 모드**(기본): `App` — 메뉴 트리 + `PreviewStudio` + feature **iframe**
- **preview 모드**(`?preview=1&screen=<id>`): `FeatureApp` — feature 화면만 렌더 (iframe 안)
- iframe 을 쓰는 이유: feature CSS 가 `@media(768)` 로 데스크탑/모바일 IA 를 전환하는데,
  미디어쿼리는 브라우저(=iframe) 뷰포트 폭에 반응하므로 iframe 뷰포트를 프레임 폭으로 맞춰야 반응형이 정확히 동작.

## 4. 컴포넌트 마스터

| 위치 | 내용 |
|---|---|
| `flows/b2b/guarantee-estimate/components/` | OrderCard · ListTab · NavigationMenu(TOP/BOTTOM_MENU) · StepStatusBadge · icons · types · constants (index.html 기준 참조 컴포넌트) |
| `flows/b2b/guarantee-estimate/components/PartnerShell` | scaffold 크롬 (topnav/appbar/scaffold__body/bottomnav/footer) |
| `flows/b2b/guarantee-estimate/` | PartnerOrderView · PartnerOrderDetailView · PartnerSimpleViews(채팅/일정마감/캐시/마이) |
| `flows/b2c/guarantee-contract/` | CustomerApp · TermsAgreementModal (ODS design-system) |
| `shared/prototype-ods/` | ScreenShell · TopNavigation · BottomNavigation · ActionDock · PrototypeOverlays (고객 앱 셸) |
| `data/` | orders.ts(13건, 전 상태) · customerPartners.ts · custTerms.ts |

## 5. 상태 코드 & 필터

status: `0 수락대기 · 1 상담거절 · 2 상담중(매칭완료) · 3 상담종료 · 4 계약완료`
필터 탭: 수락대기[0] · 상담중[2] · 계약완료[4] · 상담종료[1,3]. 상세는 [`reference/spec.md`](reference/spec.md).
