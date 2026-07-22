export interface RegionSelection {
  province: string;
  district: string;
}

export const REGION_PROVINCES = [
  "서울",
  "인천",
  "경기",
  "강원",
  "대전",
  "세종",
  "충북",
  "충남",
  "광주",
  "전북",
  "전남",
  "경북",
  "경남",
  "울산",
  "부산",
  "제주",
] as const;

export type RegionProvince = (typeof REGION_PROVINCES)[number];

const SEOUL_DISTRICTS = [
  "서울 전체",
  "종로구",
  "중구",
  "용산구",
  "성동구",
  "광진구",
  "동대문구",
  "중랑구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "은평구",
  "서대문구",
  "마포구",
  "양천구",
  "강서구",
  "구로구",
  "금천구",
  "영등포구",
  "동작구",
  "관악구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
];

const GYEONGGI_DISTRICTS = [
  "경기 전체",
  "수원시",
  "성남시",
  "고양시",
  "용인시",
  "부천시",
  "안산시",
  "안양시",
  "남양주시",
  "화성시",
  "평택시",
  "의정부시",
  "시흥시",
  "파주시",
  "김포시",
];

const DEFAULT_DISTRICTS = (province: string) => [`${province} 전체`];

export const REGION_DISTRICTS: Record<RegionProvince, string[]> = {
  서울: SEOUL_DISTRICTS,
  인천: ["인천 전체", "중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"],
  경기: GYEONGGI_DISTRICTS,
  강원: DEFAULT_DISTRICTS("강원"),
  대전: DEFAULT_DISTRICTS("대전"),
  세종: DEFAULT_DISTRICTS("세종"),
  충북: DEFAULT_DISTRICTS("충북"),
  충남: DEFAULT_DISTRICTS("충남"),
  광주: DEFAULT_DISTRICTS("광주"),
  전북: DEFAULT_DISTRICTS("전북"),
  전남: DEFAULT_DISTRICTS("전남"),
  경북: DEFAULT_DISTRICTS("경북"),
  경남: DEFAULT_DISTRICTS("경남"),
  울산: DEFAULT_DISTRICTS("울산"),
  부산: DEFAULT_DISTRICTS("부산"),
  제주: DEFAULT_DISTRICTS("제주"),
};

export const DEFAULT_REGION: RegionSelection = {
  province: "서울",
  district: "서울 전체",
};

export function formatRegionLabel({ province, district }: RegionSelection): string {
  if (district === `${province} 전체`) {
    return `${province} 전체`;
  }
  return `${province} ${district}`;
}

export function formatRegionHighlight({ province, district }: RegionSelection): string {
  if (district === `${province} 전체`) {
    return province;
  }
  return formatRegionLabel({ province, district });
}
