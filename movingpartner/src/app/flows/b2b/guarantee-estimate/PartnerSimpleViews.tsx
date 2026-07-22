import { useState } from 'react';
import {
  CHATS,
  CASH_BAL,
  CASH_TX,
  SCHED_TODAY,
  WEEKDAYS,
  type ChatItem,
  type CashTx,
} from '../../../data/partnerViews';
import { DEFAULT_AVATAR, IcoChev, IcoDrop, IcoGear, IcoInfo, IcoMail, IcoStar } from './components/viewIcons';

/* ================= 채팅 (ChannelCardList) ================= */

function ChatRow({ c }: { c: ChatItem }) {
  return (
    <div className="chat-row" data-url={c.url}>
      <img className="chat-row__avatar" src={DEFAULT_AVATAR} alt="" />
      <div className="chat-row__body">
        <div className="chat-row__top">
          <span className="chat-row__name">{c.name}</span>
          <span className="chat-row__sub">{c.sub}</span>
        </div>
        <div className="chat-row__msg">{c.msg}</div>
      </div>
      <div className="chat-row__meta">
        <span className="chat-row__time">{c.time}</span>
        {c.unread > 0 ? (
          <span className="chat-row__unread">{c.unread > 99 ? '99+' : c.unread}</span>
        ) : c.corner ? (
          <span className="chat-row__corner">{c.corner}</span>
        ) : null}
      </div>
    </div>
  );
}

export function PartnerChattingView() {
  return (
    <div className="view" data-view="chatting">
      <div className="container">
        <div className="page-pad has-bottomnav">
          <div className="chat-setting">
            <button className="chat-setting__btn" type="button">
              <IcoGear style={{ width: 18, height: 18 }} /> 기본 메시지 설정
            </button>
          </div>
          <div className="chat-list">
            {CHATS.map((c) => (
              <ChatRow key={c.url} c={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= 일정마감 (ScheduleCalendar) ================= */

function daysInMonth(y: number, m: number) {
  return new Date(y, m, 0).getDate();
}
function firstWeekday(y: number, m: number) {
  return new Date(y, m - 1, 1).getDay();
}

function CalMonth({
  y,
  m,
  closed,
  onToggle,
}: {
  y: number;
  m: number;
  closed: Set<string>;
  onToggle: (key: string) => void;
}) {
  const n = daysInMonth(y, m);
  const lead = firstWeekday(y, m);
  const cells: JSX.Element[] = [];
  for (let i = 0; i < lead; i++) cells.push(<div key={`e${i}`} className="cal-day cal-day--empty" />);
  for (let d = 1; d <= n; d++) {
    const key = `${y}-${m}-${d}`;
    const isPast =
      y < SCHED_TODAY.y ||
      (y === SCHED_TODAY.y && (m < SCHED_TODAY.m || (m === SCHED_TODAY.m && d < SCHED_TODAY.d)));
    const isToday = y === SCHED_TODAY.y && m === SCHED_TODAY.m && d === SCHED_TODAY.d;
    const isClosed = closed.has(key);
    const cls = ['cal-day', isPast && 'cal-day--past', isToday && 'cal-day--today', isClosed && 'cal-day--closed']
      .filter(Boolean)
      .join(' ');
    cells.push(
      <div key={key} className={cls} onClick={!isPast ? () => onToggle(key) : undefined}>
        <span className="cal-day__n">{d}</span>
        {isClosed && <span className="cal-day__badge">마감</span>}
      </div>,
    );
  }
  return (
    <div className="cal-month">
      <div className="cal-month__title">
        {y}년 {m}월
      </div>
      <div className="cal-grid">
        {WEEKDAYS.map((w) => (
          <div key={w} className="cal-wd">
            {w}
          </div>
        ))}
        {cells}
      </div>
    </div>
  );
}

export function PartnerScheduleView() {
  const [closed, setClosed] = useState<Set<string>>(new Set());
  const toggle = (key: string) =>
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const months = Array.from({ length: 4 }, (_, i) => {
    let m = SCHED_TODAY.m + i;
    let y = SCHED_TODAY.y;
    while (m > 12) {
      m -= 12;
      y++;
    }
    return { y, m };
  });

  return (
    <div className="view" data-view="schedule">
      <div className="container">
        <div className="sched has-bottomnav">
          <div className="sched__header">
            <div className="sched__title">마감 또는 마감 해제할 날짜를 선택해주세요</div>
            <div className="sched__guide">
              날짜를 선택하고 적용하면, 마감하거나 해제할 수 있습니다.
              <br />
              마감된 날짜가 예정일인 오더는 매칭되지 않습니다.
            </div>
          </div>
          <div className="sched__divider" />
          {months.map(({ y, m }) => (
            <CalMonth key={`${y}-${m}`} y={y} m={m} closed={closed} onToggle={toggle} />
          ))}
        </div>
        {closed.size > 0 && (
          <div className="sched-footer">
            <button className="btn btn--outline" type="button" onClick={() => setClosed(new Set())}>
              선택취소
            </button>
            <button className="btn btn--solid" type="button" onClick={() => setClosed(new Set())}>
              적용하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= 캐시 (Balance + TransactionList) ================= */

function TxRow({ t }: { t: CashTx }) {
  return (
    <div className="tx-row">
      <div className="tx-info">
        <span className={`badge ${t.sign === 'plus' ? 'badge--charge' : 'badge--use'}`}>{t.badge}</span>
        <div className="tx-cat">{t.cat}</div>
        <div className="tx-date">{t.date}</div>
        {t.order && (
          <span className="tx-order">
            오더정보 보기 <IcoChev style={{ width: 14, height: 14 }} />
          </span>
        )}
      </div>
      <div className={`tx-amt tx-amt--${t.sign}`}>
        {t.main}
        <small>{t.unit}</small>
      </div>
    </div>
  );
}

export function PartnerCashView() {
  const [filter, setFilter] = useState('전체');
  const chips = ['전체', '사용', '취소', '충전'];
  return (
    <div className="view" data-view="cash">
      <div className="cash-tabs">
        <div className="container">
          <div className="tabbar" style={{ borderBottom: '1px solid var(--divider)' }}>
            <button className="tab t-tab is-active" style={{ flex: 1 }} type="button">
              캐시내역
            </button>
            <button className="tab t-tab" style={{ flex: 1 }} type="button">
              정산내역
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="page-pad has-bottomnav">
          <div className="cash-row2">
            <div className="cash-left">
              <div className="cash-balance__label">보유 캐시</div>
              <div className="cash-balance__amount">{CASH_BAL.paid}</div>
              <div className="cash-free">
                <span className="cash-free__p">P</span>
                <span className="cash-free__label">
                  무료 포인트{' '}
                  <span className="cash-free__info">
                    <IcoInfo style={{ width: 14, height: 14 }} />
                  </span>
                </span>
                <span className="cash-free__val">{CASH_BAL.free}P</span>
              </div>
              <button className="cash-charge" type="button">
                캐시 충전하기
              </button>
            </div>
            <div className="cash-right">
              <div className="cash-filter">
                {chips.map((c) => (
                  <button
                    key={c}
                    className={`cash-chip${filter === c ? ' on' : ''}`}
                    type="button"
                    onClick={() => setFilter(c)}
                  >
                    {c}
                  </button>
                ))}
                <span className="cash-date">
                  1개월 이내 <IcoDrop style={{ width: 14, height: 14 }} />
                </span>
              </div>
              <div className="cash-tx">
                {CASH_TX.map((t, i) => (
                  <TxRow key={i} t={t} />
                ))}
              </div>
              <div className="pagination">
                <button className="is-active" type="button">
                  1
                </button>
              </div>
              <div className="cash-callout">
                <span className="cash-callout__t">환불을 원하시나요?</span>
                <button className="cash-callout__btn" type="button">
                  환불 요청방법 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= 마이페이지 (MyMenu list) ================= */

export interface PartnerMyViewProps {
  /** FF: reviews — 리뷰 관리 행 노출 */
  showReviews?: boolean;
}

export function PartnerMyView({ showReviews = false }: PartnerMyViewProps) {
  return (
    <div className="view" data-view="my">
      <div className="container">
        <div className="page-pad has-bottomnav">
          <div className="my-list">
            <div className="my-row">
              <div className="my-row__body">
                <div className="my-row__title">계정 관리</div>
                <div className="my-row__desc">moving@bucketplace.net</div>
              </div>
              <span className="my-row__chev">
                <IcoChev style={{ width: 18, height: 18 }} />
              </span>
            </div>
            <div className="my-sep" />
            {showReviews && (
              <>
                <div className="my-row">
                  <span className="my-row__icon">
                    <IcoStar style={{ width: 20, height: 20 }} />
                  </span>
                  <div className="my-row__body">
                    <div className="my-row__title">리뷰 관리</div>
                  </div>
                  <span className="my-row__chev">
                    <IcoChev style={{ width: 18, height: 18 }} />
                  </span>
                </div>
                <div className="my-sep--thin" />
              </>
            )}
            <div className="my-row">
              <span className="my-row__icon">
                <IcoMail style={{ width: 20, height: 20 }} />
              </span>
              <div className="my-row__body">
                <div className="my-row__title">이메일 문의하기</div>
              </div>
              <span className="my-row__chev">
                <IcoChev style={{ width: 18, height: 18 }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
