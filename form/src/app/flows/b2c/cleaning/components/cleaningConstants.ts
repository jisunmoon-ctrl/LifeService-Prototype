import type { CleaningFormData, CleaningLocationData, CleaningUserScenario } from "./cleaningTypes";

export const ROOM_COUNT_OPTIONS = ["원룸", "1.5룸", "2룸", "3룸", "4룸", "5룸 이상"];
export const COUNT_OPTIONS = ["없음", "1개", "2개", "3개 이상"];

const EMPTY_LOCATION: CleaningLocationData = {
  address: "",
  detailAddress: "",
  roomCount: "",
  verandaCount: "",
  bathroomCount: "",
  isDuplex: null,
  hasBelongings: null,
  needsRemodelCleaning: null,
};

const FILLED_LOCATION: CleaningLocationData = {
  address: "경기도 성남시 분당구 판교역로 235",
  detailAddress: "101동 1204호",
  roomCount: "2룸",
  verandaCount: "1개",
  bathroomCount: "1개",
  isDuplex: false,
  hasBelongings: false,
  needsRemodelCleaning: false,
};

/** 프로토타입용: 최근 6개월 내 이사 견적 신청 기준 이사 예정일 */
export function getMockMoveDate() {
  const date = new Date();
  date.setDate(date.getDate() + 14);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getRecommendedCleaningDates(moveDate: Date) {
  const plus1 = new Date(moveDate);
  plus1.setDate(plus1.getDate() + 1);
  const plus2 = new Date(moveDate);
  plus2.setDate(plus2.getDate() + 2);
  return [plus1, plus2];
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isRecommendedCleaningDate(date: Date, moveDate: Date) {
  return getRecommendedCleaningDates(moveDate).some((d) => isSameDay(d, date));
}

const EMPTY_CONTACT = {
  name: "",
  phonePrefix: "010",
  phoneNumber: "",
  phoneVerified: false,
};

const FILLED_CONTACT = {
  name: "김명수",
  phonePrefix: "010",
  phoneNumber: "12345678",
  phoneVerified: true,
};

export function createInitialCleaningFormData(
  scenario: CleaningUserScenario,
  options?: {
    hasRecentMovingQuote?: boolean;
    prefillLocation?: boolean;
    prefillContact?: boolean;
    prefillTime?: boolean;
    prefillDate?: boolean;
  }
): CleaningFormData {
  const hasRecentMovingQuote = options?.hasRecentMovingQuote ?? scenario === "moving";
  const moveDate = getMockMoveDate();
  const recommended = hasRecentMovingQuote ? getRecommendedCleaningDates(moveDate)[0] : null;

  const location = options?.prefillLocation
    ? { ...FILLED_LOCATION }
    : scenario === "moving"
      ? {
          ...EMPTY_LOCATION,
          address: FILLED_LOCATION.address,
          detailAddress: FILLED_LOCATION.detailAddress,
        }
      : { ...EMPTY_LOCATION };

  const contact =
    options?.prefillContact === true
      ? { ...FILLED_CONTACT }
      : options?.prefillContact === false
        ? { ...EMPTY_CONTACT }
        : scenario === "moving"
          ? { ...FILLED_CONTACT }
          : { ...EMPTY_CONTACT };

  return {
    cleaningDate: options?.prefillDate === false ? null : recommended,
    cleaningTime:
      options?.prefillTime === false
        ? []
        : hasRecentMovingQuote
          ? ["오전 10:00"]
          : [],
    location,
    contact,
    additionalMemo: "",
  };
}

export function isLocationComplete(location: CleaningLocationData) {
  return (
    !!location.address &&
    !!location.roomCount &&
    !!location.verandaCount &&
    !!location.bathroomCount &&
    location.isDuplex !== null &&
    location.hasBelongings !== null &&
    location.needsRemodelCleaning !== null
  );
}
