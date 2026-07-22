import { useEffect, useState, type CSSProperties } from 'react';
import { useTheme } from '@emotion/react';
import type { NavView } from './flows/b2b/guarantee-estimate/components/types';
import { PartnerShell } from './flows/b2b/guarantee-estimate/components/PartnerShell';
import { PartnerOrderView } from './flows/b2b/guarantee-estimate/PartnerOrderView';
import { PartnerOrderDetailView } from './flows/b2b/guarantee-estimate/PartnerOrderDetailView';
import {
  PartnerChattingView,
  PartnerScheduleView,
  PartnerCashView,
  PartnerMyView,
} from './flows/b2b/guarantee-estimate/PartnerSimpleViews';
import { CustomerApp, type CustomerStage } from './flows/b2c/guarantee-contract/CustomerApp';

/**
 * preview 모드 진입점 — PreviewStudio iframe 안에서 로드된다.
 * `?screen=<id>` 로 초기 화면을 받고, 인-피처 네비게이션(topnav/bottomnav)은 내부 상태로 전환하며
 * 부모(studio)에 postMessage 로 현재 화면을 알린다.
 */

export type FeatureScreen =
  | 'order'
  | 'order_detail'
  | 'chatting'
  | 'schedule'
  | 'cash'
  | 'my'
  | 'customer'
  | 'customer_terms'
  | 'customer_contracted';

/** mobile appbar 타이틀 — 정본 `index.html:5026` VIEW_TITLES 와 동일. 오더/채팅/일정마감/캐시는 공백. */
const TITLES: Record<FeatureScreen, string> = {
  order: '',
  order_detail: '',
  chatting: '',
  schedule: '',
  cash: '',
  my: '마이페이지',
  customer: '',
  customer_terms: '',
  customer_contracted: '',
};

/** 정본 `index.html:2259` 의 `st.ff` 기본값 */
const FEATURE_FLAGS: Record<string, boolean> = {
  search: true,
  reviews: true,
  contract: true,
};

/** `?screen=order_detail` 직접 진입 시 기본 오더 — 확정 견적이 있는 계약대기 건(정본 a12) */
const DEFAULT_DETAIL_ID = 'a12';

/** B2C(책임보장 견적 계약 flow) 화면 → CustomerApp 진입 단계 */
const CUSTOMER_STAGES: Partial<Record<FeatureScreen, CustomerStage>> = {
  customer: 'list',
  customer_terms: 'terms',
  customer_contracted: 'contracted',
};

function postToParent(screen: FeatureScreen) {
  try {
    // __mpNav: movingpartner studio, __pvNav: 통합 프리뷰 허브(/preview) 공통 규약
    window.parent?.postMessage({ __mpNav: true, __pvNav: true, screen }, '*');
  } catch {
    /* noop */
  }
}

export function FeatureApp() {
  const theme = useTheme();
  const initial = (new URLSearchParams(window.location.search).get('screen') as FeatureScreen) || 'order';
  const [screen, setScreen] = useState<FeatureScreen>(initial);
  const [detailId, setDetailId] = useState<string | undefined>();

  const go = (next: FeatureScreen) => {
    setScreen(next);
    postToParent(next);
  };

  const customerStage = CUSTOMER_STAGES[screen];

  /**
   * partner.css 의 flow 별 스펙(desktop 1024 rail · callout · badge 등)은 정본 index.html 과 동일하게
   * `body.ver-*` 에 스코프되어 있다. 정본은 `document.body.classList.toggle('ver-estimate'|'ver-customer')`
   * (index.html:2797-2798) 로 이 상태를 세팅하므로 여기서도 같은 규약을 따른다.
   */
  useEffect(() => {
    const { classList } = document.body;
    classList.add('is-preview');
    classList.toggle('ver-customer', customerStage != null);
    classList.toggle('ver-estimate', customerStage == null);
    classList.toggle('is-order-detail', screen === 'order_detail');
  }, [screen, customerStage]);

  // 고객단(B2C)은 별도 ODS 앱 (파트너 크롬 없음).
  // 공유 프리뷰 하네스(ScreenShell/TopNavigation/BottomNavigation/ActionDock)는 raw `var(--*)` 를 읽으므로,
  // partner.css 의 BDS 값 대신 ODS semantic 토큰을 이 경계에서 주입해 렌더가 CSS 로드 순서에 좌우되지 않게 한다.
  if (customerStage) {
    return (
      <div
        style={
          {
            minHeight: '100dvh',
            // partner.css 의 `body{color:var(--foreground)}`(BDS #2F3438) 상속을 끊는다
            color: theme.colors.foreground,
            '--background': theme.colors.background,
            '--foreground': theme.colors.foreground,
            '--foreground-weak': theme.colors.foregroundWeak,
            '--border': theme.colors.border,
          } as CSSProperties
        }
      >
        <CustomerApp stage={customerStage} />
      </div>
    );
  }

  const activeView: NavView = (screen === 'order_detail' ? 'order' : screen) as NavView;

  const openDetail = (id: string) => {
    setDetailId(id);
    go('order_detail');
  };

  let body: JSX.Element;
  switch (screen) {
    // 정본은 상세를 목록 위에 띄우는 오버레이(`#orderDetailPage`)로 다룬다 — 목록을 그대로 유지한다.
    case 'order':
    case 'order_detail':
      body = <PartnerOrderView onOpenDetail={openDetail} />;
      break;
    case 'chatting':
      body = <PartnerChattingView />;
      break;
    case 'schedule':
      body = <PartnerScheduleView />;
      break;
    case 'cash':
      body = <PartnerCashView />;
      break;
    case 'my':
      body = <PartnerMyView showReviews={FEATURE_FLAGS.reviews} />;
      break;
    default:
      body = <PartnerOrderView onOpenDetail={openDetail} />;
  }

  return (
    <>
      <PartnerShell
        activeView={activeView}
        title={TITLES[screen]}
        featureFlags={FEATURE_FLAGS}
        onNavigate={(v) => go(v as FeatureScreen)}
      >
        {body}
      </PartnerShell>
      {screen === 'order_detail' && (
        <PartnerOrderDetailView orderId={detailId ?? DEFAULT_DETAIL_ID} onBack={() => go('order')} />
      )}
    </>
  );
}
