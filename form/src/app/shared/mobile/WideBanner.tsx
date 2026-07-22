import React from "react";
import { ChevronRight } from "lucide-react";
import img2026021940534RemovebgPreview1 from "figma:asset/fb8f98eadc29fd8000636e038c39f6d5c9854635.png";

export function WideBanner({ onClick }: WideBannerProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[var(--bg-brand-weak)] rounded-xl p-6 flex flex-col items-center gap-4 hover:bg-opacity-80 transition-colors"
      aria-label="오늘의집 책임보장 서비스 자세히 보기"
    >
      {/* Icon */}
      <div className="size-12 relative flex items-center justify-center">
        <svg className="block size-full" fill="none" viewBox="0 0 48 52">
          <path fillRule="evenodd" clipRule="evenodd" d={shieldPath} fill="#00A1FF" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 items-center w-full text-center">
        <div className="flex flex-col items-center">
          <p className="text-heading-18 text-[var(--fg-neutral)]">
            추가금과 분실 걱정된다면?<br/>
            오늘의집 책임보장
          </p>
        </div>
        <p className="text-body-15 text-[var(--fg-neutral)] break-keep">
          책임보장 업체 선택 시, 이사 중 파손 및 지연 문제를<br/>
          오늘의집이 적극 중재하고 A/S를 지원해요.
        </p>
      </div>

      <button className="flex items-center gap-1 px-2 py-1 text-[#0aa5ff]">
        <span className="text-heading-16 font-medium">
          자세히 알아보기
        </span>
        <ChevronRight className="size-5" />
      </button>
    </button>
  );
}