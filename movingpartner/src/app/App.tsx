import { useEffect, useRef, useState } from 'react';
import { PreviewStudio } from './preview/PreviewStudio';
import { PreviewControlPanel, type PanelTab } from './preview/PreviewControlPanel';

/**
 * movingpartner — studio 모드 진입점.
 * 우측 컨트롤 패널 상단에 B2B / B2C 스위칭 탭을 두고, 각 탭 하위에 해당 플로우 메뉴를 배치.
 * feature 화면은 iframe(`?preview=1&screen=<id>`)으로 로드하여 @media 반응형 IA 가 프레임 폭 기준으로 동작하게 한다.
 */

const PANEL_TABS: PanelTab[] = [
  {
    id: 'b2c',
    label: 'B2C',
    sections: [
      {
        id: 'b2c-flows',
        groups: [
          {
            id: 'guarantee-contract-flow',
            label: '책임보장 견적 계약 flow',
            items: [
              { id: 'customer', label: '① 매칭 파트너 목록 · 견적 확인' },
              { id: 'customer_terms', label: '② 약관 동의' },
              { id: 'customer_contracted', label: '③ 계약 확정' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'b2b',
    label: 'B2B',
    sections: [
      {
        id: 'b2b-flows',
        groups: [
          {
            id: 'guarantee-estimate-flow',
            label: '책임보장 견적 발송 flow',
            items: [
              { id: 'order', label: '① 오더 (상담 목록)' },
              { id: 'order_detail', label: '② 상담 상세' },
              { id: 'chatting', label: '③ 채팅' },
              { id: 'schedule', label: '④ 일정마감' },
              { id: 'cash', label: '⑤ 캐시' },
              { id: 'my', label: '⑥ 마이페이지' },
            ],
          },
        ],
      },
    ],
  },
];

export function App() {
  const [currentScreen, setCurrentScreen] = useState('order');
  const [resetKey, setResetKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const featureSrc = (screen: string) =>
    `${window.location.pathname}?preview=1&screen=${screen}`;

  // 인-피처 네비게이션을 studio 메뉴 트리 하이라이트와 동기화
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const data = e.data as { __mpNav?: boolean; screen?: string };
      if (data && data.__mpNav && data.screen) setCurrentScreen(data.screen);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const handleSelect = (screenId: string) => setCurrentScreen(screenId);
  const handleRestart = () => {
    setResetKey((k) => k + 1);
    setCurrentScreen('order');
  };

  const controlPanel = (
    <PreviewControlPanel
      title="movingpartner"
      tabs={PANEL_TABS}
      currentScreen={currentScreen}
      onSelect={handleSelect}
      onRestart={handleRestart}
    />
  );

  return (
    <PreviewStudio aside={controlPanel} resetKey={resetKey}>
      <iframe
        ref={iframeRef}
        key={`${currentScreen}-${resetKey}`}
        title="movingpartner feature"
        src={featureSrc(currentScreen)}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
      />
    </PreviewStudio>
  );
}
