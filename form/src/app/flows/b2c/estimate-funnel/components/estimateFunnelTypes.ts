/** 견적 신청 퍼널 UX iteration (Figma 7942) */

import type { BelongingsData } from "../../../../shared/belongings/belongingsTypes";
import { defaultBelongingsData } from "../../../../shared/belongings/belongingsTypes";

export type EstimateMoveType = "home" | "small" | null;
export type BelongingsMethod = "photo" | "manual" | null;

export interface EstimateAddress {
  address: string;
  detailAddress: string;
  floor: string;
  hasElevator: boolean | null;
  pyeong: string;
  duplex: boolean;
}

export interface EstimateContact {
  name: string;
  phone: string;
}

export interface EstimateFunnelData {
  moveType: EstimateMoveType;
  moveDate: Date | null;
  departure: EstimateAddress;
  destination: EstimateAddress;
  /** 청소 희망일 — 도착지(=청소 장소) 기준, 기본은 이사일 다음날 */
  cleaningDate: Date | null;
  contact: EstimateContact;
  /** 확인 페이지 추가 요청 사항 */
  requestMemo: string;
  belongingsMethod: BelongingsMethod;
  belongings: BelongingsData;
}

export function emptyAddress(): EstimateAddress {
  return {
    address: "",
    detailAddress: "",
    floor: "",
    hasElevator: null,
    pyeong: "",
    duplex: false,
  };
}

function addDays(d: Date, n: number) {
  const next = new Date(d);
  next.setDate(next.getDate() + n);
  return next;
}

export function createInitialEstimateData(moveType: EstimateMoveType = null): EstimateFunnelData {
  return {
    moveType,
    moveDate: null,
    departure: emptyAddress(),
    destination: emptyAddress(),
    cleaningDate: null,
    contact: { name: "김명수", phone: "010-9107-1083" },
    requestMemo: "",
    belongingsMethod: null,
    belongings: defaultBelongingsData(),
  };
}

/** 이사일 선택 시 청소 희망일을 다음날로 동기화 */
export function withMoveDate(data: EstimateFunnelData, moveDate: Date | null): EstimateFunnelData {
  return {
    ...data,
    moveDate,
    cleaningDate: moveDate ? addDays(moveDate, 1) : null,
  };
}

export function formatEstimateDate(d: Date | null) {
  if (!d) return "-";
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

export function formatAddressDetail(info: EstimateAddress): string {
  return [
    info.pyeong,
    info.floor,
    info.duplex ? "복층" : null,
    info.hasElevator === null ? null : info.hasElevator ? "엘레베이터 있음" : "엘레베이터 없음",
  ]
    .filter(Boolean)
    .join(" · ");
}

/** 주소 섹션 필수 인풋 완료 여부 (상세주소·복층은 선택) */
export function isAddressSectionComplete(info: EstimateAddress) {
  return !!info.address && !!info.pyeong && !!info.floor && info.hasElevator !== null;
}

export function moveTypeLabel(type: EstimateMoveType) {
  if (type === "home") return "가정이사";
  if (type === "small") return "소형이사";
  return "-";
}

export const ESTIMATE_FLOOR_OPTIONS = [
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

export const ESTIMATE_PYEONG_OPTIONS = [
  "10평 이하",
  "10평대",
  "20평대",
  "30평대",
  "40평대",
  "50평대",
  "60평대",
  "70평대 이상",
];
