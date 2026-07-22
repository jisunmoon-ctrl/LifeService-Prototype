import React from "react";
import { MatchedCompanyCard } from "./MatchedCompanyCard";

export function MatchedCompanyList() {
  const companies = [
    {
      name: "영구이사",
      rating: "5.0",
      reviews: 24,
      isGuaranteed: true,
      time: "오전 9:12",
      applicationDate: "2026.05.10"
    },
    {
      name: "썬이삿짐센터",
      rating: "5.0",
      reviews: 24,
      isGuaranteed: true,
      time: "오늘",
      applicationDate: "2026.05.10"
    },
    {
      name: "티익스프레스",
      rating: "5.0",
      reviews: 24,
      isGuaranteed: false,
      time: "오늘",
      applicationDate: "2026.05.09"
    },
    {
      name: "깔끔이사",
      rating: "5.0",
      reviews: 24,
      isGuaranteed: false,
      time: "오늘",
      applicationDate: "2026.05.08"
    }
  ];

  return (
    <div className="flex flex-col gap-[12px] px-[16px] w-full">
      {companies.map((company, index) => (
        <MatchedCompanyCard
          key={index}
          name={company.name}
          rating={company.rating}
          reviews={company.reviews}
          hasGuarantee={company.isGuaranteed}
          time={company.time}
          applicationDate={company.applicationDate}
        />
      ))}
    </div>
  );
}