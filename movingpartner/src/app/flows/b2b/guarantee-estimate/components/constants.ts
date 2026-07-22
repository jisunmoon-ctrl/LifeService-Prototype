import type { EstStage, FlowVer, ListTabItem } from './types';

export const LAYOUT = {
  topNav: 71,
  bottomNav: 54,
  appbar: 45,
  footer: 204,
} as const;

export const BREAKPOINT_MD = 768;

export const TABS: ListTabItem[] = [
  { code: 1, label: '수락대기', match: [0] },
  { code: 2, label: '상담중', match: [2] },
  { code: 3, label: '계약완료', match: [4] },
  { code: 4, label: '상담종료', match: [1, 3] },
];

export const TAB_FAB_CAPTURE_CODE = 2;
export const TAB_NEW_DOT_CODE = 2;

export const EST_STAGE: Record<EstStage, { label: string; className: string }> = {
  need: { label: '견적 작성 필요', className: 'badge--est-need' },
  wait: { label: '계약대기', className: 'badge--est-wait' },
};

export function defaultTabForVer(ver: FlowVer): number {
  return ver === 'estimate' ? TAB_FAB_CAPTURE_CODE : TABS[0].code;
}

export const STEP_STATUS_LABEL: Record<number, string> = {
  0: '수락대기',
  2: '매칭완료',
  4: '계약완료',
  1: '상담거절',
  3: '상담종료',
};
