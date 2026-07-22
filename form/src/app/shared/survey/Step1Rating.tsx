import React from "react";
import { StarRating, StarRatingLabel } from "./StarRating";

interface Step1Props {
  selectedRating: number | null;
  onSelect: (rating: number) => void;
}

export function Step1Rating({ selectedRating, onSelect }: Step1Props) {
  return (
    <div className="w-full flex flex-col px-[var(--spacing-8)] pt-[var(--spacing-16)] pb-[var(--spacing-8)]">
      <div className="mb-[var(--spacing-12)]">
        <p className="text-subheading-16 text-[#2f3438]">
          오늘의집 이사 견적 상담의 전반적인 만족도를 선택해주세요.
        </p>
      </div>

      {/* Star Rating */}
      <div className="flex gap-[var(--spacing-4)] items-center">
        <StarRating rating={selectedRating || 0} onRate={onSelect} />
        <StarRatingLabel rating={selectedRating} />
      </div>
    </div>
  );
}
