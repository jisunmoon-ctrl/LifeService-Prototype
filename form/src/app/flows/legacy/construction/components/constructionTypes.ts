// 시공 사전상담 플로우 도메인 타입 (prod: /experts/v2/pre_consultations/new?expertise=5)

export type SpaceType = "apartment" | "officetel" | "villa" | "house";
export type SpaceStatus = "vacant" | "willVacant" | "partialItems";
export type ConstructionScope = "full" | "partial";

export interface ConstructionContact {
  name: string;
  phonePrefix: string;
  phoneNumber: string;
  /** 통화 희망 시간 */
  callTime: string;
  /** 요청사항 (선택) */
  memo: string;
}

export interface ConstructionFormData {
  spaceType: SpaceType | null;
  spaceStatus: SpaceStatus | null;
  scope: ConstructionScope | null;
  startDate: Date | null;
  endDate: Date | null;
  address: string;
  contact: ConstructionContact;
  /** 안내 및 이용동의 (표준계약서·책임보장 조건) 확인 */
  agreedContract: boolean;
}

/** 통화 희망 시간 옵션 (prod 연락처 스펙 기준) */
export const CALL_TIME_OPTIONS = [
  "언제든 괜찮아요",
  "아침 (9시 이전)",
  "오전 (9시~12시)",
  "오후 (12시~18시)",
  "저녁 (18시 이후)",
  "직접 입력",
];

export function createInitialConstructionData(): ConstructionFormData {
  return {
    spaceType: null,
    spaceStatus: null,
    scope: null,
    startDate: null,
    endDate: null,
    address: "",
    contact: { name: "", phonePrefix: "010", phoneNumber: "", callTime: "언제든 괜찮아요", memo: "" },
    agreedContract: false,
  };
}
