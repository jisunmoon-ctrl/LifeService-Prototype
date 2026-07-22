import type { UnifiedServiceMeta, InternetProduct, RentalProduct } from "./unifiedTypes";

/** 통합 인트로 서비스 목록 (Figma 7492-30969) */
export const UNIFIED_SERVICES: UnifiedServiceMeta[] = [
  { id: "moving", title: "소형/포장이사", description: "합리적인 이사 견적 받기" },
  { id: "cleaning", title: "입주 인테리어 청소", description: "청소 견적 받기" },
  { id: "internet", title: "인터넷", description: "맞춤 인터넷 상품 추천 받기" },
];

/** 인터넷 상품 목록 (Figma 7735-49270) */
export const INTERNET_PRODUCTS: InternetProduct[] = [
  { id: "kt-1", carrier: "kt", carrierColor: "#EC0A0A", price: "월 23,450원", spec: "100MB | TV 포함" },
  { id: "kt-2", carrier: "kt", carrierColor: "#EC0A0A", price: "월 23,450원", spec: "100MB | TV 포함" },
  { id: "custom", carrier: "", carrierColor: "", price: "내 맘대로 옵션 선택", spec: "인터넷 속도 요금제 선택하기", custom: true },
];

/** 렌탈 상품 목록 (Figma 7735-50817) */
export const RENTAL_PRODUCTS: RentalProduct[] = [
  { id: "sk-1", price: "월 23,450원", name: "SK매직 초소형 플러스 직수기", rating: "4.9 · 2,451개 리뷰", thumbnail: "purifier1" },
  { id: "sk-2", price: "월 23,450원", name: "SK매직 초소형 플러스 직수기", rating: "4.9 · 2,451개 리뷰", thumbnail: "purifier2" },
  { id: "sk-3", price: "월 23,450원", name: "SK매직 초소형 플러스 직수기", rating: "4.9 · 2,451개 리뷰", thumbnail: "purifier3" },
  { id: "sk-4", price: "월 23,450원", name: "SK매직 초소형 플러스 직수기", rating: "4.9 · 2,451개 리뷰", thumbnail: "purifier2" },
];

/** 인터넷/렌탈 하단 예상 요금 (Figma Sticky_CTA) */
export const ESTIMATE_ORIGINAL_PRICE = "22,300원";
export const ESTIMATE_DISCOUNTED_PRICE = "월 19,300원";
