import type { ReactNode } from 'react';
import { BOTTOM_MENU, TOP_MENU } from './NavigationMenu';
import type { NavView } from './types';

/** 오늘의집 사장님센터(이사) 반응형 셸 — index.html `.scaffold` 구조 재현.
 *  데스크탑(≥768): topnav / 모바일(<768): appbar + bottomnav. iframe 뷰포트 기준으로 @media 반응. */

function BrandLogo() {
  return (
    <a className="topnav__brand" href="#" onClick={(e) => e.preventDefault()}>
      <b>오늘의집</b>
      <span>사장님센터</span>
    </a>
  );
}

/** GNB 견적서 등록 — 정본 `index.html:1745`. `.gnb-capture{display:none}` 이므로 기본 상태에선 숨겨진다. */
function CaptureIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M186.67 47c14.7 0 28.1 8.37 34.55 21.58L231.2 89h17.6c52.4 0 79.6.01 100.3 9.4a96 96 0 0 1 47.7 47.7c9.39 20.7 9.4 47.9 9.4 100.3v8.6c0 36.7 0 58.9-6.92 76.4a96 96 0 0 1-53.78 53.78C335 392 312.8 392 276.1 392H203.9c-36.7 0-58.9 0-76.4-6.92a96 96 0 0 1-53.78-53.78C66.8 313.8 66.8 291.6 66.8 254.9v-30.2c0-31.4 0-50.9 5.78-66.3A80 80 0 0 1 119.2 111c4.27-1.6 8.93-2.78 14.27-3.66l5.66-13.76C145.6 80.4 159 72 173.7 72h-.03zM240 168c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80m0 32c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor" width="20" height="20" style={{ color: '#8C8C8C' }}>
      <path d="M268.731 273.986c25.235 0 46.775 1.072 64.8 4.405 18.101 3.346 33.725 9.157 46.261 19.41 25.463 20.823 32.606 55.203 33.962 101.718.072 2.472.169 5.333.028 7.826-.154 2.731-.632 6.311-2.445 10.056a26.17 26.17 0 0 1-11.396 11.734c-3.726 1.939-7.332 2.511-10.047 2.74-2.503.211-5.396.197-7.93.197H98.036c-2.534 0-5.427.014-7.93-.197-2.715-.229-6.32-.801-10.046-2.74a26.17 26.17 0 0 1-11.397-11.734c-1.813-3.745-2.29-7.325-2.445-10.056-.14-2.493-.044-5.354.028-7.826 1.357-46.515 8.501-80.895 33.965-101.718 12.537-10.253 28.162-16.064 46.263-19.41 18.025-3.333 39.566-4.405 64.802-4.405zm-57.455 32c-24.674 0-43.88 1.079-58.984 3.871-15.028 2.779-24.917 7.068-31.823 12.715-13.386 10.947-20.845 31.484-22.225 77.5h283.512c-1.379-46.016-8.837-66.553-22.222-77.5-6.905-5.647-16.793-9.936-31.821-12.715-15.103-2.792-34.309-3.871-58.982-3.871zM240 47.928c55.781 0 101 45.22 101 101s-45.219 101-101 101-101-45.22-101-101 45.219-101 101-101m0 32c-38.107 0-69 30.892-69 69 0 38.107 30.893 69 69 69s69-30.893 69-69-30.892-69-69-69" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor">
      <path d="M312.221 63.176c6.53-5.953 16.65-5.485 22.603 1.045s5.485 16.65-1.045 22.603L165.75 240l168.029 153.176c6.53 5.953 6.998 16.073 1.045 22.603s-16.073 6.998-22.603 1.045l-181-165-.308-.288a16 16 0 0 1 .308-23.36z" />
    </svg>
  );
}

export interface PartnerShellProps {
  activeView: NavView;
  /** appbar(mobile) 타이틀 */
  title?: string;
  onNavigate: (view: NavView) => void;
  onBack?: () => void;
  /** GNB `견적서 등록` 진입점 (PTN-LIST-07) */
  onEstimateCapture?: () => void;
  featureFlags?: Record<string, boolean>;
  children: ReactNode;
}

export function PartnerShell({
  activeView,
  title,
  onNavigate,
  onBack,
  onEstimateCapture,
  featureFlags = {},
  children,
}: PartnerShellProps) {
  const topItems = TOP_MENU.filter((m) => !m.ff || featureFlags[m.ff]);

  return (
    <div className="scaffold" id="scaffold">
      {/* Desktop TopNav */}
      <header className="topnav desktop-only" role="banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 30, flex: 1, minWidth: 0 }}>
          <BrandLogo />
          <nav className="topnav__menu" aria-label="이사 파트너 메뉴">
            {topItems.map((m) => (
              <a
                key={m.key}
                className={`topnav__item${m.view === activeView ? ' is-active' : ''}`}
                href="#"
                data-view={m.view}
                onClick={(e) => {
                  e.preventDefault();
                  if (m.view) onNavigate(m.view);
                }}
              >
                {m.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="topnav__actions">
          <button className="gnb-capture" type="button" onClick={() => onEstimateCapture?.()}>
            <CaptureIcon />
            견적서 등록
          </button>
          <div className="topnav__profile" title="내 계정">
            <ProfileIcon />
          </div>
        </div>
      </header>

      <main className="scaffold__body" id="page-body">
        {/* Mobile AppBar */}
        <header className="appbar mobile-only" role="banner" aria-label={title ?? ''}>
          <button className="appbar__back" aria-label="뒤로" onClick={() => onBack?.()}>
            <BackIcon />
          </button>
          <span className="appbar__title">{title ?? ''}</span>
        </header>

        {children}

        <PartnerFooter />
      </main>

      {/* Mobile BottomNav */}
      <nav className="bottomnav mobile-only" aria-label="이사 파트너 메뉴">
        {BOTTOM_MENU.map((m) => {
          const active = m.view === activeView;
          const Icon = active ? m.icon.filled : m.icon.line;
          return (
            <a
              key={m.key}
              className={`bottomnav__item${active ? ' is-active' : ''}`}
              href="#"
              data-view={m.view}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(m.view);
              }}
            >
              <span className="bottomnav__icon">
                <Icon />
              </span>
              {m.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

function PartnerFooter() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__cs">
          <div>
            <h5>고객센터</h5>
            <div className="footer__tel">
              1660-4161 <small>09:00~18:00</small>
            </div>
            <ul>
              <li>평일: 전체 문의 상담</li>
              <li>주말 및 공휴일 : 휴무</li>
            </ul>
          </div>
          <div>
            <div className="footer__inq">
              카카오톡 문의<b>오늘의집 인테리어 파트너센터 ›</b>
            </div>
            <div className="footer__inq">
              이메일 문의<b>이메일 문의하기 ›</b>
            </div>
          </div>
        </div>
        <div className="footer__company">
          <div className="biz">
            (주)버킷플레이스 | 대표이사 이승재 | 서울 서초구 서초대로74길 4 삼성생명서초타워 25, 27층
            <br />
            contact@bucketplace.net | 사업자등록번호 119-86-91245 <b>사업자정보확인</b>
            <br />
            통신판매업신고번호 제2018-서울서초-0580호
          </div>
          <div className="footer__links">
            회사소개<span>|</span>파트너 개인정보 처리방침<span>|</span>입점신청
          </div>
          <div className="footer__copy">Copyright 2014. bucketplace, Co., Ltd. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
