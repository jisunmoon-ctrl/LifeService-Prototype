import type { ReactNode } from 'react';
import { NAV_ICONS } from './icons';
import type { BottomMenuItem, FlowVer, NavView, TopMenuItem } from './types';

export const TOP_MENU: TopMenuItem[] = [
  { key: 'order', title: '오더', href: '/moving/steps', view: 'order' },
  { key: 'chat', title: '채팅', href: '/chatting/list', view: 'chatting' },
  { key: 'cal', title: '일정마감', href: '/moving/schedule', view: 'schedule' },
  { key: 'cash', title: '캐시', href: '/moving/payment/cash', view: 'cash' },
  { key: 'review', title: '리뷰', href: '/moving/reviews', ff: 'reviews' },
];

export const BOTTOM_MENU: BottomMenuItem[] = [
  {
    key: 'order',
    title: '오더',
    href: '/moving/steps',
    view: 'order',
    icon: NAV_ICONS.order,
  },
  {
    key: 'chat',
    title: '채팅',
    href: '/chatting/list',
    view: 'chatting',
    icon: NAV_ICONS.chat,
  },
  {
    key: 'cal',
    title: '일정마감',
    href: '/moving/schedule',
    view: 'schedule',
    icon: NAV_ICONS.cal,
  },
  {
    key: 'cash',
    title: '캐시',
    href: '/moving/payment/cash',
    view: 'cash',
    icon: NAV_ICONS.cash,
  },
  {
    key: 'my',
    title: '마이페이지',
    href: '/moving/my',
    view: 'my',
    icon: NAV_ICONS.my,
  },
];

export function createTopMenuSchema(
  featureFlags: Record<string, boolean> = {},
): TopMenuItem[] {
  return TOP_MENU.filter((item) => !item.ff || featureFlags[item.ff]);
}

export function createBottomMenuSchema(): BottomMenuItem[] {
  return BOTTOM_MENU;
}

export interface TopNavigationProps {
  activeView: NavView;
  featureFlags?: Record<string, boolean>;
  onNavigate?: (item: TopMenuItem) => void;
}

export function TopNavigation({
  activeView,
  featureFlags = {},
  onNavigate,
}: TopNavigationProps) {
  const items = createTopMenuSchema(featureFlags);

  return (
    <nav className="topnav" id="topnav">
      {items.map((item) => {
        const active = item.view === activeView;
        return (
          <a
            key={item.key}
            className={`topnav__item t-nav${active ? ' is-active' : ''}`}
            href="#"
            data-href={item.href}
            data-view={item.view}
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(item);
            }}
          >
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}

export interface BottomNavigationProps {
  activeView: NavView;
  onNavigate?: (item: BottomMenuItem) => void;
}

export function BottomNavigation({ activeView, onNavigate }: BottomNavigationProps) {
  const items = createBottomMenuSchema();

  return (
    <nav className="bottomnav" id="bottomnav">
      {items.map((item) => {
        const active = item.view === activeView;
        const Icon = active ? item.icon.filled : item.icon.line;

        return (
          <a
            key={item.key}
            className={`bottomnav__item${active ? ' is-active' : ''}`}
            href="#"
            data-href={item.href}
            data-view={item.view}
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(item);
            }}
          >
            <span className="bottomnav__icon">
              <Icon />
            </span>
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}

export interface GnbCaptureProps {
  ver: FlowVer;
  onCapture?: () => void;
}

/** estimate ver 전용 TopNav 우측 견적서 등록 액션 */
export function GnbCapture({ ver, onCapture }: GnbCaptureProps) {
  if (ver !== 'estimate') return null;

  return (
    <button type="button" className="gnb-capture" onClick={onCapture}>
      견적서 등록
    </button>
  );
}

export interface NavigationMenuProps {
  ver: FlowVer;
  activeView: NavView;
  featureFlags?: Record<string, boolean>;
  onTopNavigate?: (item: TopMenuItem) => void;
  onBottomNavigate?: (item: BottomMenuItem) => void;
  onCapture?: () => void;
  desktopHeader?: ReactNode;
  mobileHeader?: ReactNode;
}

/** 단일 스키마 + viewport 분기 — desktop TopNav / mobile BottomNav */
export function NavigationMenu({
  ver,
  activeView,
  featureFlags,
  onTopNavigate,
  onBottomNavigate,
  onCapture,
  desktopHeader,
  mobileHeader,
}: NavigationMenuProps) {
  return (
    <>
      <div className="desktop-header hidden md:block">
        {desktopHeader}
        <TopNavigation
          activeView={activeView}
          featureFlags={featureFlags}
          onNavigate={onTopNavigate}
        />
        <GnbCapture ver={ver} onCapture={onCapture} />
      </div>
      <div className="mobile-header block md:hidden">{mobileHeader}</div>
      <div className="mobile-nav block md:hidden">
        <BottomNavigation activeView={activeView} onNavigate={onBottomNavigate} />
      </div>
    </>
  );
}
