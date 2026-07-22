/**
 * Customer-side "매칭 파트너 목록" cards (ver=customer, .cust-pcard).
 * Transcribed from MovingPartner/index.html `CUST_MATCH_LIST`
 *   (index 0 = custActiveCardOpts() over CUST_ACTIVE / CUST_VENDOR).
 *
 * Source status → interface status mapping:
 *   'confirm' | 'progress'  → 'consulting'   (상담중; 견적 확정/진행중)
 *   'contract'              → 'contracted'
 *   'waiting'               → 'waiting'
 *   'done'                  → 'closed'
 */

export interface CustomerPartner {
  id: string;
  name: string;
  status: 'waiting' | 'consulting' | 'contracted' | 'closed';
  rating?: number;
  reviews?: number;
  estimateReceived?: boolean;
  [k: string]: unknown;
}

export const CUSTOMER_PARTNERS: CustomerPartner[] = [
  {
    // custActiveCardOpts() — CUST_ACTIVE (vendor=오늘이사), tierA active card
    id: 'cp-active',
    name: '오늘이사',
    status: 'consulting',        // source status: 'confirm'
    rating: 4.9,
    reviews: 2422,
    estimateReceived: true,      // estType: 'confirmed'
    tierA: true,
    estType: 'confirmed',
    estAmt: '50만원',            // custEstSummaryAmt() = costA 400000 + costB 100000
    chatMsg: '오늘이사에서 견적서를 보냈어요.',
    chatTime: '오후 6:30',
  },
  {
    id: 'cp-express',
    name: '오늘이사익스프레스',
    status: 'consulting',        // source status: 'progress'
    rating: 4.9,
    reviews: 2422,
    estimateReceived: true,      // estType: 'estimate'
    tierA: false,
    estType: 'estimate',
    estFrom: '40만원부터~',
    chatMsg: '오늘이사에서 견적서를 보냈어요.',
    chatTime: '오후 6:30',
  },
  {
    id: 'cp-responsible',
    name: '책임이사',
    status: 'consulting',        // source status: 'progress'
    rating: 4.9,
    reviews: 2422,
    estimateReceived: true,      // estType: 'estimate'
    tierA: false,
    estType: 'estimate',
    estFrom: '40만원부터~',
    chatMsg: '오늘이사에서 견적서를 보냈어요.',
    chatTime: '오후 6:30',
  },
];
