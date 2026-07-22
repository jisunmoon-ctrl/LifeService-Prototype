// 시공 신청 후 크로스셀링(이사 + 이사청소 통합) 플로우 도메인 타입

export interface AddressInfo {
  address: string;
  detailAddress: string;
  floor: string;
  hasElevator: boolean | null;
  pyeong: string;
  /** 복층 여부 */
  duplex: boolean;
}

export interface CrossSellFormData {
  // ── 프리필 세트 (시공 신청 입력값 기반) ──
  /** 도착지 = 청소 장소 (시공지) */
  destination: AddressInfo;
  /** 연락처 (시공 신청에서 프리필, 퍼널에서 재입력 없음) */
  contact: { name: string; phone: string };

  // ── 이사 ──
  moveDate: Date | null;
  moveType: "home" | "small" | null;
  departure: AddressInfo;

  // ── 청소 ──
  cleaningSameDay: boolean;
  cleaningDate: Date | null;

  // ── 옵션 (확인 페이지에서 추가) ──
  /** 추가 요청 사항 */
  memo: string;
  /** 짐 상세 정보 */
  belongingsNote: string;
}

function getTodayDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

/** 시공 신청 프리필 값으로 초기화 */
export function createInitialCrossSellData(): CrossSellFormData {
  const today = getTodayDate();

  return {
    destination: {
      address: "서울 서초구 서초대로74길 4 삼성생명서초타워 25층",
      detailAddress: "",
      floor: "5층",
      hasElevator: true,
      pyeong: "70평대 이상",
      duplex: true,
    },
    contact: { name: "홍길동", phone: "010-1234-5678" },
    moveDate: today,
    moveType: "home",
    departure: { address: "", detailAddress: "", floor: "", hasElevator: null, pyeong: "", duplex: false },
    cleaningSameDay: true,
    cleaningDate: today,
    memo: "",
    belongingsNote: "",
  };
}

/** 층수 옵션 */
export const FLOOR_OPTIONS = [
  "반지하",
  "1층",
  "2층",
  "3층",
  "4층",
  "5층",
  "6층",
  "7층",
  "8층 이상",
];

/** 평수 옵션 (크로스셀 디자인 기준) */
export const PYEONG_OPTIONS = [
  "10평 이하",
  "10평대",
  "20평대",
  "30평대",
  "40평대",
  "50평대",
  "60평대",
  "70평대 이상",
];

/** 확인 페이지 주소 상세 요약: "20평대 · 5층 · 복층 · 엘레베이터 있음" */
export function formatAddressDetail(info: AddressInfo): string {
  return [
    info.pyeong,
    info.floor,
    info.duplex ? "복층" : null,
    info.hasElevator === null ? null : info.hasElevator ? "엘레베이터 있음" : "엘레베이터 없음",
  ]
    .filter(Boolean)
    .join(" · ");
}
