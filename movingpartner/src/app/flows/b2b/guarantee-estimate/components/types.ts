import type { ComponentType, ReactNode, SVGProps } from 'react';

/** 프로토타입 index.html 기준 공유 타입 */

export type FlowVer = 'prod' | 'estimate';
export type EstStage = 'need' | 'wait';
export type OrderStatus = 0 | 1 | 2 | 3 | 4;
export type NavView = 'order' | 'chatting' | 'schedule' | 'cash' | 'my';

export interface OrderCardItem {
  label: string;
  value: string;
}

export interface OrderChat {
  unread: number;
  url: string;
}

export interface OrderEstimate {
  method?: 'direct' | 'gallery';
  preview?: string | null;
  costA?: number;
  costB?: number;
  /** 직접입력(direct) 견적의 차량·인원 — 상담 상세 hero 에서 노출 */
  ton?: number;
  cars?: number;
  staffMove?: number;
  staffKitchen?: number;
  surcharge?: boolean;
}

export interface Order {
  id: string;
  status: OrderStatus;
  userName: string;
  createdDate: string;
  fee?: boolean;
  direct?: boolean;
  freeAccept?: boolean;
  estStage?: EstStage;
  estAttached?: boolean;
  estimate?: OrderEstimate;
  chat?: OrderChat | null;
  items: OrderCardItem[];
}

export interface ListTabItem {
  code: number;
  label: string;
  match: OrderStatus[];
}

export type NavIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavIconPair {
  line: NavIconComponent;
  filled: NavIconComponent;
}

export interface BottomMenuItem {
  key: string;
  title: string;
  href: string;
  view: NavView;
  icon: NavIconPair;
}

export interface TopMenuItem {
  key: string;
  title: string;
  href: string;
  view?: NavView;
  ff?: string;
}
