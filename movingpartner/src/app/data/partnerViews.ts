/** 채팅 / 일정마감 / 캐시 뷰 데이터 — index.html 상수(CHATS·SCHED_TODAY·CASH_*) 이식. */

export interface ChatItem {
  name: string;
  sub: string;
  msg: string;
  time: string;
  corner: string;
  unread: number;
  url: string;
}

export const CHATS: ChatItem[] = [
  { name: '테스트', sub: '화성시 동탄구 출발 · 화성시 병점구 도착', msg: '○○○○○', time: '6월 2일', corner: '', unread: 0, url: 'ch1' },
  { name: '백승*', sub: '서초구 출발 · 은평구 도착', msg: '견적서를 보냈습니다.', time: '3월 9일', corner: '읽음', unread: 0, url: 'ch2' },
  { name: '테스트', sub: '화성시 동탄구 출발 · 화성시 동탄구 도착', msg: '견적서를 보냈습니다.', time: '3월 4일', corner: '읽음', unread: 0, url: 'ch3' },
  { name: '테스트', sub: '삼척시 출발 · 울릉군 도착', msg: '잘 되는디', time: '2월 13일', corner: '', unread: 0, url: 'ch4' },
];

/** 일정마감: today = 2026.06.12, 4개월 멀티선택 */
export const SCHED_TODAY = { y: 2026, m: 6, d: 12 } as const;
export const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

/** 캐시 잔액 (prod 137,500 / 무료 0) */
export const CASH_BAL = { paid: '137,500', free: '0' } as const;

export interface CashTx {
  badge: string;
  cat: string;
  date: string;
  main: string;
  unit: string;
  sign: 'plus' | 'minus';
  order: boolean;
}

export const CASH_TX: CashTx[] = [
  { badge: '충전', cat: '캐시 충전', date: '2026. 5. 20. 11:05:24', main: '+50,000', unit: '캐시', sign: 'plus', order: false },
  { badge: '사용', cat: '오더 수락', date: '2026. 5. 18. 09:22:10', main: '-2,000', unit: '캐시', sign: 'minus', order: true },
  { badge: '충전', cat: '캐시 충전', date: '2026. 5. 10. 14:03:51', main: '+4,000', unit: '캐시', sign: 'plus', order: false },
  { badge: '사용', cat: '오더 수락', date: '2026. 5. 8. 16:40:33', main: '-2,000', unit: '캐시', sign: 'minus', order: true },
];
