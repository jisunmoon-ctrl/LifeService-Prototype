import type { ReactNode } from 'react';
import { BREAKPOINT_MD, LAYOUT } from './constants';

export interface AppScaffoldProps {
  children: ReactNode;
  desktopHeader?: ReactNode;
  mobileHeader?: ReactNode;
  mobileNav?: ReactNode;
  footer?: ReactNode;
  /** page 타입일 때만 mobile footer/nav 노출 (repo MovingScaffold 규칙) */
  type?: 'page' | 'modal';
}

/**
 * 반응형 셸 — md(768) 기준 desktop/mobile 헤더·네비 분기.
 * CSS 클래스는 프로토타입·repo scaffold 규칙과 동일하게 유지.
 */
export function AppScaffold({
  children,
  desktopHeader,
  mobileHeader,
  mobileNav,
  footer,
  type = 'page',
}: AppScaffoldProps) {
  const showMobileChrome = type === 'page';

  return (
    <div className="app-scaffold">
      <div className="desktop-header hidden md:block">{desktopHeader}</div>
      {showMobileChrome ? (
        <div className="mobile-header block md:hidden">{mobileHeader}</div>
      ) : null}
      <main className="app-scaffold__main">{children}</main>
      {showMobileChrome ? (
        <div className="mobile-nav block md:hidden">{mobileNav}</div>
      ) : null}
      <footer className={`app-scaffold__footer${showMobileChrome ? '' : ' hidden md:block'}`}>
        {footer}
      </footer>
    </div>
  );
}

export { BREAKPOINT_MD, LAYOUT };
