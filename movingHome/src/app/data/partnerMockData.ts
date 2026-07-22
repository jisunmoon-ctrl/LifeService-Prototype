import type { RegionSelection } from "./regionData";
import movingPartnerReviews from "./movingPartnerLatestReviews.json";
import partnerPortfolioImageCounts from "./partnerPortfolioImageCounts.json";
import soomgoReviewImagePool from "./soomgoReviewImagePool.json";

const portfolioImageCountMap = new Map(
  partnerPortfolioImageCounts.partners.map((partner) => [partner.partner_id, partner.image_count]),
);

const REVIEW_IMAGE_POOL = soomgoReviewImagePool.image_urls;

export type MoveType = "소형반포장" | "소형이사" | "가정이사";
export type MoveFilterChip = "소형/원룸" | "가정이사";

export interface Partner {
  id: string;
  name: string;
  hasBadge: boolean;
  rating?: number;
  reviewCount?: string;
  recentContracts?: string;
  moveType: MoveType;
  options: string[];
  images?: string[];
  reviews: string[];
  noReview?: boolean;
}

export const PARTNER_SERVICES = [
  "이사청소",
  "짐보관협의",
  "식대미요구",
  "짐정리수납",
  "매트리스케어",
  "냉장고청소",
  "피톤치드방역",
  "에어컨분리",
  "벽걸이TV설치",
  "커튼설치",
  "식품포장",
  "바닥보호보강재",
  "덧신착용",
  "유니폼착용",
] as const;

export function matchesMoveFilter(moveType: MoveType, filter: MoveFilterChip | null): boolean {
  if (!filter) return true;
  if (filter === "소형/원룸") {
    return moveType === "소형이사" || moveType === "소형반포장";
  }
  return moveType === "가정이사";
}

function hashRegion(region: RegionSelection): number {
  const key = `${region.province}-${region.district}`;
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function shuffleBySeed<T>(items: T[], seed: number): T[] {
  const shuffled = [...items];
  let state = seed;

  for (let i = shuffled.length - 1; i > 0; i--) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const j = state % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function portfolioImageCount(partnerId: number): number {
  return portfolioImageCountMap.get(partnerId) ?? 12;
}

function assignUniquePortfolioImages(partners: Partner[], seed: number): Partner[] {
  const shuffledUrls = shuffleBySeed(REVIEW_IMAGE_POOL, seed + 7919);
  let urlIndex = 0;

  return partners.map((partner) => {
    const count = portfolioImageCount(Number(partner.id));
    if (count <= 0) {
      return { ...partner, images: undefined };
    }

    const images = shuffledUrls.slice(urlIndex, urlIndex + count);
    urlIndex += count;

    return {
      ...partner,
      images: images.length > 0 ? images : undefined,
    };
  });
}

export function getPartnersForRegion(region: RegionSelection): Partner[] {
  const base = createPartnerMockData();
  const seed = hashRegion(region);

  const shuffled = shuffleBySeed(base, seed).map((partner, index) => {
    if (!partner.recentContracts) return partner;

    const offset = ((seed + index * 17) % 11) - 5;
    const nextCount = Math.max(1, parseInt(partner.recentContracts.replace(/,/g, ""), 10) + offset);

    return {
      ...partner,
      recentContracts: nextCount.toLocaleString("en-US"),
    };
  });

  return assignUniquePortfolioImages(shuffled, seed);
}

function averageRating(reviews: { rating: number }[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

function pickServices(partnerId: number): string[] {
  const count = 2 + (partnerId % 5);
  const start = partnerId % PARTNER_SERVICES.length;
  return Array.from({ length: count }, (_, i) => PARTNER_SERVICES[(start + i) % PARTNER_SERVICES.length]);
}

function mapReviewPartner(partner: (typeof movingPartnerReviews.partners)[number]): Partner {
  const moveTypes: MoveType[] = ["소형반포장", "소형이사", "가정이사"];
  const moveType = moveTypes[partner.partner_id % moveTypes.length];
  const options = pickServices(partner.partner_id);
  const rating = averageRating(partner.reviews);

  return {
    id: String(partner.partner_id),
    name: partner.partner_name,
    hasBadge: partner.total_review_count >= 800,
    rating: rating > 0 ? rating : undefined,
    reviewCount: partner.total_review_count.toLocaleString("en-US"),
    recentContracts: Math.max(1, Math.round(partner.total_review_count / 35 + (partner.partner_id % 17))).toLocaleString("en-US"),
    moveType,
    options,
    reviews: partner.reviews.slice(0, 10).map((review) => review.body),
    noReview: partner.total_review_count === 0,
  };
}

export function createPartnerMockData(): Partner[] {
  return movingPartnerReviews.partners.map((partner) => mapReviewPartner(partner));
}
