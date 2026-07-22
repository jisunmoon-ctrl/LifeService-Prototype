// 통합 신청 플로우 도메인 타입

/** 통합 인트로에서 선택 가능한 서비스 */
export type UnifiedService = "moving" | "cleaning" | "internet";

export interface UnifiedServiceMeta {
  id: UnifiedService;
  title: string;
  description: string;
}

/** 인터넷 상품 카드 */
export interface InternetProduct {
  id: string;
  carrier: string; // 통신사 (로고 텍스트)
  carrierColor: string;
  price: string; // "월 23,450원"
  spec: string; // "100MB | TV 포함"
  custom?: boolean; // "내 맘대로 옵션 선택"
}

/** 렌탈 상품 카드 */
export interface RentalProduct {
  id: string;
  price: string;
  name: string;
  rating: string; // "4.9 · 2,451개 리뷰"
  thumbnail: "purifier1" | "purifier2" | "purifier3";
}
