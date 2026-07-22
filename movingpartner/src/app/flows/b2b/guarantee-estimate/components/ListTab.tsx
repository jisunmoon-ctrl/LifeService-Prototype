import { TABS, TAB_NEW_DOT_CODE } from './constants';
import type { ListTabItem } from './types';

export interface ListTabProps {
  tabs?: ListTabItem[];
  currentCode: number;
  viewedCodes?: Set<number>;
  onTabChange?: (code: number) => void;
}

export function showTabNewDot(code: number, viewedCodes: Set<number>): boolean {
  return code === TAB_NEW_DOT_CODE && !viewedCodes.has(code);
}

/** 상태 필터 탭 (sticky) — 프로토타입 `renderTabs` 기준 */
export function ListTab({
  tabs = TABS,
  currentCode,
  viewedCodes = new Set([currentCode]),
  onTabChange,
}: ListTabProps) {
  return (
    <div className="tabbar" id="tabbar" role="tablist">
      {tabs.map((tab) => {
        const active = tab.code === currentCode;
        const dot = showTabNewDot(tab.code, viewedCodes);

        return (
          <button
            key={tab.code}
            type="button"
            className={`tab t-tab${active ? ' is-active' : ''}`}
            role="tab"
            aria-selected={active}
            data-code={tab.code}
            onClick={() => onTabChange?.(tab.code)}
          >
            <span className="tab__label-wrap">
              {tab.label}
              {dot ? <span className="tab__dot" aria-hidden="true" /> : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}
