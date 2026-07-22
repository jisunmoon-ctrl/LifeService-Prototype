import type { SpaceType, SpaceStatus, ConstructionScope } from "./constructionTypes";

export interface OptionMeta<T extends string> {
  id: T;
  label: string;
  description?: string;
}

/** Step1: 시공할 공간의 종류 */
export const SPACE_TYPE_OPTIONS: OptionMeta<SpaceType>[] = [
  { id: "apartment", label: "아파트" },
  { id: "officetel", label: "오피스텔" },
  { id: "villa", label: "빌라" },
  { id: "house", label: "단독주택" },
];

/** Step2: 공간 상황 */
export const SPACE_STATUS_OPTIONS: OptionMeta<SpaceStatus>[] = [
  { id: "vacant", label: "현재 공실" },
  { id: "willVacant", label: "시공 시 공실 예정" },
  { id: "partialItems", label: "시공 시 짐이 일부 있을 예정" },
];

/** Step3: 원하는 시공 (전체/부분) */
export const SCOPE_OPTIONS: OptionMeta<ConstructionScope>[] = [
  {
    id: "full",
    label: "전체 시공",
    description: "시공 분야가 구체적이지 않더라도 업체와 상담하며 조율할 수 있어요.",
  },
  {
    id: "partial",
    label: "부분 시공",
    description: "도배, 주방 등 필요한 시공 분야만 직접 선택해 업체와 상담해요.",
  },
];

/** Step5: 서비스 지역 안내 */
export const SERVICE_AREAS =
  "서울/경기/인천/대구/충청/대전/광주/전라/울산/부산/창원/김해/양산/강원";

/** 시공 기간 안내 시작월 (prod 기준 오늘로부터) */
export function getConstructionBaseMonth(): Date {
  const today = new Date(2026, 6, 13); // 프로토타입 고정 기준일 (2026-07-13)
  return new Date(today.getFullYear(), today.getMonth(), 1);
}
