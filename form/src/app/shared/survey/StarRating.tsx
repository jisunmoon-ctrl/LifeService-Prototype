import React from "react";
import { imgColorSet } from "../../../imports/MyReviewList004ModuleModuleEssential/svg-0hyc6";

interface StarRatingProps {
  rating: number;
  onRate: (rating: number) => void;
}

export function StarRating({ rating, onRate }: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="content-stretch flex items-center">
      {stars.map((star) => {
        const isFilled = star <= rating;
        return (
          <button
            key={star}
            onClick={() => onRate(star)}
            className="content-stretch flex flex-col items-center justify-center relative size-[40px] transition-transform hover:scale-110 active:scale-95"
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-center mask-size-[36px_34px]"
              style={{ maskImage: `url('${imgColorSet}')` }}
            >
              <div
                className={`absolute inset-0 transition-colors ${
                  isFilled ? "bg-[#ffc300]" : "bg-[#c1c1c1]"
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

interface StarRatingLabelProps {
  rating: number | null;
}

export function StarRatingLabel({ rating }: StarRatingLabelProps) {
  if (!rating) return null;

  const labels = ["추천하지 않음", "별로", "보통", "추천함", "적극 추천"];

  return (
    <p className="text-detail-12 text-[#828c94] whitespace-nowrap">
      {labels[rating - 1]}
    </p>
  );
}
