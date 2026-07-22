import type { Order, OrderCardItem } from '../flows/b2b/guarantee-estimate/components/types';

/**
 * Partner order/estimate list — transcribed from MovingPartner/index.html `const ORDERS`.
 * Status codes (MOVING_STEP_STATUS):
 *   0 수락대기 · 1 상담거절 · 2 매칭완료(상담중) · 3 상담종료 · 4 계약완료
 * Filter tabs (consultationDashboardType):
 *   수락대기[0] · 상담중[2] · 계약완료[4] · 상담종료[1,3]
 */

/** mirrors mkItems(t, e, from, to) in index.html */
function mkItems(t: string, e: string, from: string, to: string): OrderCardItem[] {
  return [
    { label: '이사 종류', value: t },
    { label: '이사 예정일', value: e },
    { label: '출발지', value: from },
    { label: '도착지', value: to },
  ];
}

export const ORDERS: Order[] = [
  {
    id: 'a1', status: 0, userName: '스*******', createdDate: '2024.09.20',
    fee: true, direct: true, freeAccept: true, chat: { unread: 2, url: 'c1' },
    items: mkItems('소형 반포장이사', '2024년 9월 30일 금요일', '전라북도 남원시 여수1길 21 (노암동) ****', '부산광역시 해운대구 마린시티2로 33 (우동, 해운대두산위브더제니스) ****'),
  },
  {
    id: 'a2', status: 0, userName: '버******', createdDate: '2024.09.19',
    fee: false, direct: false, freeAccept: true, chat: null,
    items: mkItems('가정이사', '2024년 10월 12일 토요일', '인천광역시 남동구 만수로50번길 19 (만수동, 만수주공6단지아파트) ****', '경기도 광주시 오포읍 양벌로 173 (양벌리 쌍용아파트) ****'),
  },
  {
    id: 'a3', status: 0, userName: '김**', createdDate: '2024.09.18',
    fee: false, direct: true, freeAccept: false, chat: { unread: 0, url: 'c2' },
    items: mkItems('가정이사', '2024년 10월 5일 토요일', '서울특별시 마포구 월드컵북로 396 ****', '서울특별시 강서구 마곡중앙로 161 ****'),
  },
  {
    id: 'a4', status: 2, userName: '문지선', createdDate: '4월 26일',
    fee: false, estStage: 'need', chat: { unread: 1, url: 'c3' },
    items: mkItems('가정이사', '2022년 8월 19일 수요일', '서울 서초구 서초대로74길 33 (서초동) ****', '서울 서초구 반포대로 243 (반포동) ****'),
  },
  {
    id: 'a5', status: 2, userName: '이정민', createdDate: '4월 25일',
    fee: true, estStage: 'need', chat: { unread: 0, url: 'c4' },
    items: mkItems('가정이사', '2022년 8월 20일 목요일', '서울 서초구 서초대로74길 45 (서초동) ****', '서울 서초구 반포대로 301 (반포동) ****'),
  },
  {
    id: 'a6', status: 4, userName: '최***', createdDate: '2024.09.10',
    fee: false, chat: { unread: 0, url: 'c5' },
    estimate: { method: 'gallery', preview: 'assets/estimate-gallery.png', costA: 1400000, costB: 100000, ton: 2.5, cars: 2, staffMove: 2, staffKitchen: 1, surcharge: false },
    items: mkItems('가정이사', '2024년 9월 22일 일요일', '대전광역시 유성구 대학로 99 ****', '세종특별자치시 한누리대로 2130 ****'),
  },
  {
    id: 'a7', status: 4, userName: '정**', createdDate: '2024.09.08',
    fee: false, chat: null,
    estimate: { method: 'direct', preview: null, costA: 1300000, costB: 200000, ton: 5, cars: 1, staffMove: 3, staffKitchen: 1, surcharge: true },
    items: mkItems('가정이사', '2024년 9월 20일 금요일', '부산광역시 동래구 충렬대로 187 ****', '부산광역시 금정구 중앙대로 1777 ****'),
  },
  {
    id: 'a8', status: 1, userName: '한****', createdDate: '2024.09.05',
    fee: false, chat: null,
    items: mkItems('소형 반포장이사', '2024년 9월 15일 일요일', '광주광역시 서구 상무중앙로 110 ****', '광주광역시 북구 첨단과기로 123 ****'),
  },
  {
    id: 'a9', status: 3, userName: '오*****', createdDate: '2024.09.03',
    fee: false, chat: { unread: 0, url: 'c6' },
    items: mkItems('가정이사', '2024년 9월 12일 목요일', '경기도 고양시 일산동구 중앙로 1275 ****', '경기도 파주시 미래로 460 ****'),
  },
  {
    id: 'a10', status: 3, userName: '윤**', createdDate: '2024.09.01',
    fee: false, chat: null,
    items: mkItems('가정이사', '2024년 9월 10일 화요일', '서울특별시 노원구 동일로 1414 ****', '서울특별시 도봉구 도봉로 678 ****'),
  },
  {
    id: 'a11', status: 0, userName: '장****', createdDate: '2024.08.30',
    fee: false, direct: false, freeAccept: true, chat: null,
    items: mkItems('소형 포장이사', '2024년 9월 8일 일요일', '인천광역시 연수구 컨벤시아대로 165 ****', '인천광역시 서구 청라한내로 12 ****'),
  },
  {
    id: 'a12', status: 2, userName: '화이란', createdDate: '4월 24일',
    fee: false, estStage: 'wait', chat: { unread: 3, url: 'c7' },
    estimate: { method: 'gallery', preview: 'assets/estimate-gallery.png', costA: 1500000, costB: 0, ton: 2.5, cars: 2, staffMove: 2, staffKitchen: 1, surcharge: false },
    items: mkItems('가정이사', '2022년 8월 18일 목요일', '서울 서초구 서초대로74길 12 (서초동) ****', '서울 서초구 반포대로 198 (반포동) ****'),
  },
  {
    id: 'a13', status: 0, userName: '신**', createdDate: '2024.08.25',
    fee: true, direct: true, freeAccept: false, chat: null,
    items: mkItems('가정이사', '2024년 9월 3일 화요일', '대구광역시 수성구 동대구로 351 ****', '대구광역시 달서구 달구벌대로 1095 ****'),
  },
];
