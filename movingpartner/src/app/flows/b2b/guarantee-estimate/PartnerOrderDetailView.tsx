import type { Order, OrderEstimate } from './components/types';
import { ORDERS } from '../../../data/orders';

/**
 * 상담 상세 — 정본 `index.html` `#orderDetailPage` + `renderOrderDetail()` 재현.
 * `.ord-detail` 은 `position:fixed; inset:0; max-width:480px` 전체화면 오버레이 페이지이며
 * `.open` 일 때만 `display:flex` 가 된다 (partner.css `.ord-detail` / `.ord-detail.open`).
 */

function fmtManwonSummary(won: number) {
  const m = Math.round(won / 10000);
  return m ? `${m.toLocaleString('ko-KR')}만원` : '0만원';
}

function itemByLabel(o: Order, label: string) {
  return o.items.find((i) => i.label === label)?.value ?? '—';
}

function orderSummary(o: Order) {
  return {
    userName: o.userName || '—',
    moveType: itemByLabel(o, '이사 종류'),
    appliedAt: `${o.createdDate} 신청`,
    moveDate: itemByLabel(o, '이사 예정일'),
    fromAddr: itemByLabel(o, '출발지'),
    toAddr: itemByLabel(o, '도착지'),
  };
}

/**
 * 정본 `ordDetailMoveShort`.
 * 요일이 괄호로 붙은 형태("…일 (목)")일 때만 "2022.08.18 목" 로 축약하고,
 * 그 외("2022년 8월 18일 목요일")는 fallback 인 "2022. 8. 18" 로 떨어진다 — 정본 동작 그대로.
 */
function moveDateShort(moveDate: string) {
  if (!moveDate || moveDate === '—') return '—';
  const m = moveDate.match(/^(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일\s*\(([^)]+)\)/);
  if (m) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dt = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return `${m[1]}.${String(m[2]).padStart(2, '0')}.${String(m[3]).padStart(2, '0')} ${days[dt.getDay()]}`;
  }
  return moveDate.replace(/년|월/g, '.').replace(/일.*$/, '').trim();
}

/** 정본 `fmtEstVehicle` */
function fmtVehicle(est: OrderEstimate) {
  if (est.ton == null) return '—';
  const ton = Number.isInteger(est.ton) ? String(est.ton) : String(est.ton);
  return `${ton}톤 · ${est.cars ?? 0}대`;
}

/** 정본 `fmtEstStaff` */
function fmtStaff(est: OrderEstimate) {
  return `이사 ${est.staffMove ?? 0}명 · 주방 ${est.staffKitchen ?? 0}명`;
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor" aria-hidden="true">
      <path d="M240 209c8.836 0 16 7.164 16 16v81c0 8.836-7.164 16-16 16s-16-7.163-16-16v-81c0-8.837 7.163-16 16-16M240 157c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18" />
      <path d="M240 47c106.591 0 193 86.409 193 193s-86.409 193-193 193S47 346.591 47 240 133.409 47 240 47m0 32c-88.918 0-161 72.082-161 161s72.082 161 161 161 161-72.082 161-161S328.918 79 240 79" />
    </svg>
  );
}

/** 정본 `ICO_ZOOM_SM` */
function ZoomIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor" aria-hidden="true">
      <path d="M312 88h48v48H312V88zM120 120h160v160H120V120zm32 32v96h96v-96H152zm176-72h48v48h-48v-48zm0 176h48v48h-48v-48zM88 312h48v48H88v-48z" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor" aria-hidden="true">
      <path d="M312.221 63.176c6.53-5.953 16.65-5.485 22.603 1.045s5.485 16.65-1.045 22.603L165.75 240l168.029 153.176c6.53 5.953 6.998 16.073 1.045 22.603s-16.073 6.998-22.603 1.045l-181-165-.308-.288a16 16 0 0 1 .308-23.36z" />
    </svg>
  );
}

/** 정본 `ordDetailRow` / `ordDetailListRow` */
function Row({ label, value }: { label: string; value?: string }) {
  return (
    <dl className="ord-detail__row">
      <dt>{label}</dt>
      <dd>{value || '—'}</dd>
    </dl>
  );
}

/** 정본 `orderDetailStatusBadge` */
function StatusBadge({ order }: { order: Order }) {
  if (order.status === 4) return <span className="badge badge--est-done">계약완료</span>;
  if (order.estStage === 'wait') return <span className="badge badge--est-wait">계약대기</span>;
  return null;
}

/** 정본 `ordDetailHeroNeed` — 확정 견적 없음 */
function HeroNeed({ onWriteEstimate }: { onWriteEstimate?: () => void }) {
  return (
    <section className="ord-detail__hero ord-detail__hero--empty">
      <div className="ord-detail__badges">
        <span className="badge badge--est-need">견적 작성 필요</span>
      </div>
      <p className="ord-detail__price ord-detail__price--empty">확정 견적</p>
      <p className="ord-detail__hint">아직 확정 견적이 없어요. 견적을 보내주세요.</p>
      <button
        type="button"
        className="ods-box-btn ods-box-btn--large ods-box-btn--brand-solid"
        onClick={() => onWriteEstimate?.()}
      >
        견적 보내기
      </button>
    </section>
  );
}

/** 정본 `ordDetailHeroEst` — 확정 견적 있음 */
function HeroEstimate({ order, est }: { order: Order; est: OrderEstimate }) {
  const total = (est.costA ?? 0) + (est.costB ?? 0);
  const isDirect = est.method === 'direct';
  const { moveDate } = orderSummary(order);

  return (
    <section className="ord-detail__hero">
      <div className="ord-detail__badges">
        <StatusBadge order={order} />
        <span className="badge badge--est-confirmed">확정 견적</span>
      </div>
      <p className="ord-detail__price">{fmtManwonSummary(total)}</p>
      <Row label="이사예정일" value={moveDateShort(moveDate)} />
      {isDirect && <Row label="차량" value={fmtVehicle(est)} />}
      {isDirect && <Row label="인원" value={fmtStaff(est)} />}
      {!isDirect && est.preview && (
        <button
          type="button"
          className="ord-detail__media est-attach__img--preview"
          aria-label="견적서 크게 보기"
        >
          <img src={est.preview} alt="견적서" />
          <span className="est-attach__zoom-pill" aria-hidden="true">
            <ZoomIcon /> 크게 보기
          </span>
        </button>
      )}
    </section>
  );
}

export interface PartnerOrderDetailViewProps {
  orderId?: string;
  onBack?: () => void;
}

export function PartnerOrderDetailView({ orderId, onBack }: PartnerOrderDetailViewProps) {
  const order = ORDERS.find((o) => o.id === orderId) ?? ORDERS[0];
  const s = orderSummary(order);
  const est = order.estimate;

  let hero: JSX.Element | null = null;
  if (est) hero = <HeroEstimate order={order} est={est} />;
  else if (order.status === 2 && order.estStage === 'need') hero = <HeroNeed />;

  return (
    <div className="ord-detail open" aria-hidden="false">
      <div className="ord-detail__top">
        <div className="ord-detail__nav">
          <button type="button" className="ord-detail__back" aria-label="뒤로" onClick={() => onBack?.()}>
            <BackIcon />
          </button>
          <h2 className="ord-detail__title">오더 상세</h2>
          <span className="ord-detail__nav-spacer" aria-hidden="true" />
        </div>
      </div>
      <div className="ord-detail__scroll">
        {hero}
        {hero && <div className="ord-detail__divider" />}
        <section className="ord-detail__list">
          <h3 className="ord-detail__sect">상담 요약</h3>
          <Row label="신청자명" value={s.userName} />
          <Row label="이사 종류" value={s.moveType} />
          <Row label="신청일" value={s.appliedAt} />
          <Row label="이사 예정일" value={s.moveDate} />

          <div className="ord-detail__divider" />
          <h3 className="ord-detail__sect">출발지</h3>
          <Row label="주소" value={s.fromAddr} />
          <Row label="엘레베이터" value="있음" />
          <Row label="평수" value="40평대" />

          <div className="ord-detail__divider" />
          <h3 className="ord-detail__sect">도착지</h3>
          <Row label="주소" value={s.toAddr} />
          <Row label="엘레베이터" value="있음" />
          <Row label="평수" value="40평대" />
          <Row label="가구인원수" value="5인 이상" />

          <div className="ord-detail__divider" />
          <h3 className="ord-detail__sect">고객메모</h3>
          <div className="ord-detail__memo">고객이 입력한 내용</div>

          <div className="ord-detail__callout">
            <div className="ord-detail__callout-t">
              <InfoIcon /> 고객정보 등 양도 절대금지
            </div>
            <p>
              고객정보는 본 계약 등의 목적 달성을 위하여만 사용해야하며, 제3자에게 양도, 위탁, 누설하는 행위를 할 수
              없습니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
