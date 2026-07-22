import type { MouseEvent, ReactNode } from 'react';
import type { FlowVer, Order } from './types';
import { EST_STAGE } from './constants';
import { IconCheck, IconChevronRight, IconWon } from './icons';

export interface OrderCardProps {
  order: Order;
  ver: FlowVer;
  showContract?: boolean;
  onCardClick?: (id: string) => void;
  onChatClick?: (url: string) => void;
  onContract?: (id: string) => void;
  onEstimateRegister?: (id: string) => void;
  onEstimateView?: (id: string) => void;
}

function stopPropagation(e: MouseEvent) {
  e.stopPropagation();
}

function fmtManwonSummary(won: number) {
  const m = Math.round(won / 10000);
  return m ? `${m.toLocaleString('ko-KR')}만원` : '0만원';
}

function cardEstTotal(order: Order) {
  const est = order.estimate;
  if (!est) return 0;
  return (est.costA ?? 0) + (est.costB ?? 0);
}

function showContractSummary(order: Order, ver: FlowVer) {
  if (ver !== 'estimate') return false;
  const total = cardEstTotal(order);
  if (!total) return false;
  return order.status === 4 || order.estStage === 'wait';
}

function OrderContractSummary({ order }: { order: Order }) {
  const total = cardEstTotal(order);
  if (!total) return null;
  return (
    <div className="card__contract-box" aria-label="확정 계약 요약">
      <div className="card__contract-summary">
        <div className="card__contract-summary-l">
          <span className="card__contract-summary-title">총 계약금액</span>
          <span className="card__contract-summary-sub">VAT 제외</span>
        </div>
        <span className="card__contract-summary-amt">{fmtManwonSummary(total)}</span>
      </div>
    </div>
  );
}

function OrderAttrBadges({ order, ver }: { order: Order; ver: FlowVer }) {
  let badge: ReactNode = null;

  if (
    ver === 'estimate' &&
    order.status === 2 &&
    order.estStage &&
    EST_STAGE[order.estStage]
  ) {
    const stage = EST_STAGE[order.estStage];
    badge = <span className={`badge ${stage.className}`}>{stage.label}</span>;
  } else if (order.status === 0) {
    if (order.freeAccept) {
      badge = (
        <span className="badge badge--free">
          <IconWon className="badge__ico" />
          무료 수락 가능
        </span>
      );
    } else if (order.direct) {
      badge = (
        <span className="badge badge--direct">
          <IconCheck className="badge__ico" />
          직접신청
        </span>
      );
    }
  }

  if (!badge) return null;
  return <div className="card__badges">{badge}</div>;
}

function OrderContractButton({
  order,
  ver,
  showContract,
  onContract,
  onEstimateRegister,
  onEstimateView,
}: Pick<
  OrderCardProps,
  'order' | 'ver' | 'showContract' | 'onContract' | 'onEstimateRegister' | 'onEstimateView'
>) {
  if (!showContract || order.status !== 2) return null;

  if (ver !== 'estimate') {
    return (
      <button
        type="button"
        className="ods-box-btn ods-box-btn--large ods-box-btn--solid"
        onClick={(e) => {
          stopPropagation(e);
          onContract?.(order.id);
        }}
      >
        계약 확정
      </button>
    );
  }

  if (order.estStage === 'wait') {
    return (
      <button
        type="button"
        className="ods-box-btn ods-box-btn--large ods-box-btn--brand-outlined"
        onClick={(e) => {
          stopPropagation(e);
          onEstimateView?.(order.id);
        }}
      >
        견적서 확인
      </button>
    );
  }

  return (
    <button
      type="button"
      className="ods-box-btn ods-box-btn--large ods-box-btn--brand-solid"
      onClick={(e) => {
        stopPropagation(e);
        onEstimateRegister?.(order.id);
      }}
    >
      견적 보내기
    </button>
  );
}

function OrderViewEstButton({
  order,
  ver,
  onEstimateView,
}: Pick<OrderCardProps, 'order' | 'ver' | 'onEstimateView'>) {
  if (ver !== 'estimate' || order.status !== 4) return null;

  return (
    <button
      type="button"
      className="ods-box-btn ods-box-btn--large ods-box-btn--brand-outlined"
      onClick={(e) => {
        stopPropagation(e);
        onEstimateView?.(order.id);
      }}
    >
      견적서 확인
    </button>
  );
}

/** 오더(상담) 카드 — 프로토타입 `cardHTML` 기준 */
export function OrderCard({
  order,
  ver,
  showContract = true,
  onCardClick,
  onChatClick,
  onContract,
  onEstimateRegister,
  onEstimateView,
}: OrderCardProps) {
  const moveType = order.items[0]?.value ?? '';
  const restItems = order.items.slice(1);
  const hasContractSummary = showContractSummary(order, ver);
  const listClassName = hasContractSummary ? 'card__list card__list--with-total' : 'card__list card__list--need';

  const chatBtnEl =
    order.chat || order.status === 4 ? (
      <a
        className="ods-box-btn ods-box-btn--large ods-box-btn--normal"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          stopPropagation(e);
          onChatClick?.(order.chat?.url ?? order.id);
        }}
      >
        채팅 보기
        {order.chat && order.chat.unread > 0 ? <span className="nbadge">N</span> : null}
      </a>
    ) : null;

  const contractBtn = (
    <OrderContractButton
      order={order}
      ver={ver}
      showContract={showContract}
      onContract={onContract}
      onEstimateRegister={onEstimateRegister}
      onEstimateView={onEstimateView}
    />
  );

  const viewEstBtn = (
    <OrderViewEstButton order={order} ver={ver} onEstimateView={onEstimateView} />
  );

  const hasActions = chatBtnEl || contractBtn || viewEstBtn;
  const actionContent =
    order.status === 4 && ver === 'estimate' ? (
      <>
        {chatBtnEl}
        {viewEstBtn}
      </>
    ) : (
      <>
        {chatBtnEl}
        {contractBtn}
      </>
    );

  return (
    <article
      className="card"
      data-id={order.id}
      tabIndex={0}
      role="button"
      aria-label={`${order.userName} 상담 상세`}
      onClick={() => onCardClick?.(order.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCardClick?.(order.id);
        }
      }}
    >
      {/* 뱃지는 head-left 안(이름 옆)에 둔다 — 정본 `cardHTML` 기준. head-right 는 chevron 전용. */}
      <div className="card__header">
        <div className="card__head-left">
          <span className="card__name">{order.userName}</span>
          <OrderAttrBadges order={order} ver={ver} />
        </div>
        <div className="card__head-right">
          <IconChevronRight className="card__chevron" />
        </div>
      </div>
      <div className="card__body">
        <div className={listClassName}>
          <dl className="card__item">
            <dt>종류·신청일</dt>
            <dd>
              {moveType} · {order.createdDate} 신청
            </dd>
          </dl>
          {restItems.map((item) => (
            <dl key={item.label} className="card__item">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </dl>
          ))}
          {hasContractSummary ? <OrderContractSummary order={order} /> : null}
        </div>
        {hasActions ? (
          <div className="card__actions">
            {actionContent}
          </div>
        ) : null}
      </div>
    </article>
  );
}

/** repo 명칭 호환 alias */
export const StepCardView = OrderCard;
