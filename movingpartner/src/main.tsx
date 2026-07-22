import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { DesignSystemProvider, GLOBAL_STYLE } from '@bucketplace/design-system';
import './app/i18n';
import './styles/index.css';
import { App } from './app/App';
import { FeatureApp } from './app/FeatureApp';

/**
 * 두 모드:
 *  - preview 모드(?preview=1&screen=...): feature 화면만 렌더 (PreviewStudio iframe 안에서 로드).
 *    iframe 뷰포트=프레임 폭이므로 feature 의 @media(768) 반응형 IA 가 정상 동작한다.
 *  - studio 모드(기본): PreviewStudio + 메뉴 트리 + feature iframe.
 */
const isPreview = new URLSearchParams(window.location.search).has('preview');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={GLOBAL_STYLE} />
    <DesignSystemProvider mode="light">
      {isPreview ? <FeatureApp /> : <App />}
    </DesignSystemProvider>
  </React.StrictMode>,
);
