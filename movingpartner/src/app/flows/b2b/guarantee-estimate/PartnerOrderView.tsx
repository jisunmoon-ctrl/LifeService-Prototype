import { useMemo, useState } from 'react';
import { ListTab } from './components/ListTab';
import { OrderCard } from './components/OrderCard';
import { TABS } from './components/constants';
import type { FlowVer } from './components/types';
import { ORDERS } from '../../../data/orders';
import { useIsDesktop } from '../../../shared/hooks/useMediaQuery';

/** 오더(상담) 목록 뷰 — index.html `view[data-view=order]` 재현.
 *  callout → ListTab(상태 필터) → 검색바 → OrderCard 목록 → closed-callout → pagination + 새로고침 FAB. */

/** 페이지당 행 수 — 정본 `index.html:2250` `const ROW = 10` */
const ROW = 10;

/** estimate flow 기본 탭 = 상담중(code 2) — 정본 `defaultTabForVer` */
const TAB_ESTIMATE_DEFAULT_CODE = 2;

function CalloutIcon() {
  return (
    <svg className="callout__icon" viewBox="0 0 480 480" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M240 47c106.591 0 193 86.409 193 193s-86.409 193-193 193S47 346.591 47 240 133.409 47 240 47m-.001 162.002c-8.836 0-16 7.163-16 16v81c0 8.836 7.164 16 16 16s16-7.164 16-16v-81c0-8.837-7.163-16-16-16m0-52c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M99.661 100.661c54.283-54.282 142.293-54.282 196.576 0 50.4 50.4 54.003 129.873 10.813 184.433l87.722 87.722c6.249 6.249 6.249 16.38 0 22.628s-16.378 6.248-22.626 0l-87.685-87.685c-54.57 43.497-134.287 39.991-184.8-10.522-54.282-54.283-54.282-142.293 0-196.576m173.948 22.628c-41.786-41.786-109.535-41.786-151.321 0-41.785 41.786-41.785 109.534 0 151.32 41.786 41.786 109.535 41.786 151.321 0s41.786-109.534 0-151.32" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor">
      <path d="M373.686 83.686c6.249-6.248 16.379-6.248 22.627 0s6.249 16.379 0 22.627L262.627 240l133.686 133.686.289.295c5.958 6.269 5.862 16.181-.289 22.332s-16.063 6.247-22.332.288l-.295-.288L240 262.627 106.313 396.313l-.294.288c-6.269 5.959-16.183 5.863-22.333-.288s-6.246-16.064-.288-22.332l.288-.295 133.686-133.687L83.686 106.313c-6.248-6.248-6.248-16.378 0-22.627s16.379-6.248 22.627 0l133.686 133.686z" />
    </svg>
  );
}

/** 정본 `index.html:2643` REFRESH_ICON */
function RefreshIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor" aria-hidden="true">
      <path d="M242 49c56.312 0 106.918 24.374 141.862 63.11l2.942-22.018c1.17-8.759 9.219-14.911 17.977-13.741s14.911 9.218 13.741 17.977l-8.209 61.454c-1.169 8.759-9.218 14.911-17.977 13.741l-61.454-8.209c-8.759-1.17-14.911-9.218-13.741-17.977s9.218-14.911 17.977-13.741l24.357 3.253C330.385 100.974 288.519 81 242 81c-87.813 0-159 71.187-159 159l.013 2.055C84.113 328.921 154.873 399 242 399c64.823 0 120.621-38.794 145.377-94.498 3.589-8.075 13.044-11.712 21.119-8.123s11.712 13.044 8.123 21.119C386.914 384.338 319.924 431 242 431c-105.486 0-191-85.514-191-191S136.514 49 242 49" />
    </svg>
  );
}

/** 정본 `index.html:2576` CLOSED_CALLOUT */
function ClosedCallout() {
  return (
    <div className="closed-callout">
      <svg viewBox="0 0 480 480" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <path d="M240 209c8.836 0 16 7.164 16 16v81c0 8.836-7.164 16-16 16s-16-7.163-16-16v-81c0-8.837 7.163-16 16-16M240 157c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18" />
        <path d="M240 47c106.591 0 193 86.409 193 193s-86.409 193-193 193S47 346.591 47 240 133.409 47 240 47m0 32c-88.918 0-161 72.082-161 161s72.082 161 161 161 161-72.082 161-161S328.918 79 240 79" />
      </svg>
      <span>신청일 기준 6개월 전 상담내역까지만 확인할 수 있어요.</span>
    </div>
  );
}

/** 정본 `index.html:2585` paginationHTML — window 는 desktop 10 / mobile 5 */
function Pagination({
  total,
  page,
  onPage,
  isDesktop,
}: {
  total: number;
  page: number;
  onPage: (p: number) => void;
  isDesktop: boolean;
}) {
  const pages = Math.max(1, Math.ceil(total / ROW));
  const win = isDesktop ? 10 : 5;
  const start = Math.floor((page - 1) / win) * win + 1;
  const end = Math.min(start + win - 1, pages);
  const nums: number[] = [];
  for (let p = start; p <= end; p++) nums.push(p);

  return (
    <div className="pagination">
      <button type="button" disabled={page <= 1} aria-label="이전" onClick={() => onPage(page - 1)}>
        ‹
      </button>
      {nums.map((p) => (
        <button
          key={p}
          type="button"
          className={p === page ? 'is-active' : undefined}
          onClick={() => onPage(p)}
        >
          {p}
        </button>
      ))}
      <button type="button" disabled={page >= pages} aria-label="다음" onClick={() => onPage(page + 1)}>
        ›
      </button>
    </div>
  );
}

export interface PartnerOrderViewProps {
  ver?: FlowVer;
  onOpenDetail?: (id: string) => void;
}

export function PartnerOrderView({ ver = 'estimate', onOpenDetail }: PartnerOrderViewProps) {
  const isDesktop = useIsDesktop();
  const [currentCode, setCurrentCode] = useState(TAB_ESTIMATE_DEFAULT_CODE); // 기본: 상담중
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const activeTab = TABS.find((t) => t.code === currentCode) ?? TABS[0];

  const filtered = useMemo(() => {
    return ORDERS.filter((o) => activeTab.match.includes(o.status)).filter((o) =>
      query.trim() ? o.userName.includes(query.trim()) : true,
    );
  }, [activeTab, query]);

  const total = filtered.length;
  const pageRows = filtered.slice((page - 1) * ROW, (page - 1) * ROW + ROW);

  // 정본 `showRefreshFab()` — estimate flow 는 상담중 탭에서만 노출
  const showRefreshFab = ver === 'estimate' && currentCode === TAB_ESTIMATE_DEFAULT_CODE;

  /** 정본 `syncEstimateCallout()` — 카피가 breakpoint 로 갈린다 (desktop=상담 / mobile=오더) */
  const callout = isDesktop
    ? {
        title: '상담상태에 변경이 있다면 업데이트 해주세요',
        body: '상담관리가 명확할수록 더 많이 노출이 될거예요.',
      }
    : {
        title: '오더상태에 변경이 있다면 업데이트 해주세요',
        body: '상태관리가 명확할수록 더 많은 오더가 들어와요.',
      };

  const changeTab = (code: number) => {
    setCurrentCode(code);
    setPage(1);
  };

  return (
    <div className="view" data-view="order">
      <div className="container">
        <div className="list-root has-bottomnav">
          {/* Callout */}
          <div className="callout" role="status">
            <CalloutIcon />
            <div>
              <div className="callout__title">{callout.title}</div>
              <div className="callout__body">{callout.body}</div>
            </div>
          </div>

          {/* Status filter tabs */}
          <div className="tabbox">
            <ListTab currentCode={currentCode} onTabChange={changeTab} />
          </div>

          {/* Search */}
          <div className="searchbar-wrap">
            <div className={`searchbar${query ? ' has-value' : ''}`}>
              <SearchIcon />
              <input
                placeholder="고객명, 연락처 검색"
                aria-label="고객명, 연락처 검색"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
              />
              <button
                type="button"
                className="searchbar__clear"
                aria-label="검색어 지우기"
                onClick={() => {
                  setQuery('');
                  setPage(1);
                }}
              >
                <ClearIcon />
              </button>
            </div>
          </div>

          {/* List */}
          <div id="contents">
            {total ? (
              <div className="list-contents">
                {pageRows.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    ver={ver}
                    onCardClick={(id) => onOpenDetail?.(id)}
                    onChatClick={() => onOpenDetail?.(order.id)}
                    onContract={(id) => onOpenDetail?.(id)}
                    onEstimateRegister={(id) => onOpenDetail?.(id)}
                    onEstimateView={(id) => onOpenDetail?.(id)}
                  />
                ))}
                <ClosedCallout />
                <Pagination total={total} page={page} onPage={setPage} isDesktop={isDesktop} />
              </div>
            ) : (
              <div className="empty-wrap" style={{ padding: '60px 0', textAlign: 'center', color: 'var(--foreground-weak)' }}>
                해당 상태의 오더가 없어요.
              </div>
            )}
          </div>

          {/* StickyRefreshButton — Figma 7767:12330 */}
          {showRefreshFab && (
            <div className="refresh-fab">
              <button type="button" className="refresh-btn" aria-label="새로고침">
                <RefreshIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
