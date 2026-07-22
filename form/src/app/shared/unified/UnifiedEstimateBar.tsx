import type { ReactNode } from "react";
import { OdsBoxButton } from "../ods";
import { ESTIMATE_ORIGINAL_PRICE, ESTIMATE_DISCOUNTED_PRICE } from "./unifiedConstants";

export interface BenefitRow {
  label: string;
  icon: ReactNode;
  value: string;
  /** value 색상 (기본 #141414, 포인트는 브랜드색) */
  valueColor?: string;
}

interface UnifiedEstimateBarProps {
  benefits: BenefitRow[];
  onBack: () => void;
  onSubmit: () => void;
  submitLabel?: string;
  backLabel?: string;
  disabled?: boolean;
}

/** 인터넷/렌탈 하단 예상 요금 + CTA 바 (Figma Sticky_CTA) */
export function UnifiedEstimateBar({
  benefits,
  onBack,
  onSubmit,
  submitLabel = "함께 상담 받기",
  backLabel = "다음에",
  disabled,
}: UnifiedEstimateBarProps) {
  return (
    <div className="bg-white rounded-t-[16px] border-t border-[rgba(0,0,0,0.05)] shadow-[2px_2px_20px_0px_rgba(194,200,204,0.2)]">
      {/* Total Price */}
      <div className="pt-[12px] px-[20px]">
        {/* 예상 요금 */}
        <div className="flex items-center justify-between pb-[6px]">
          <span className="text-[14px] font-medium leading-[20px] tracking-[-0.3px] text-[#8C8C8C]">
            예상 요금
          </span>
          <div className="flex items-center gap-[4px]">
            <span className="text-[15px] leading-[24px] tracking-[-0.3px] line-through text-[#C2C8CC]">
              {ESTIMATE_ORIGINAL_PRICE}
            </span>
            <div className="flex items-center">
              <span className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#2F3438]">
                {ESTIMATE_DISCOUNTED_PRICE}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-[#2F3438]">
                <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* 결합 할인 적용 시 */}
        <div className="flex items-center justify-end pb-[8px]">
          <span className="text-[12px] font-medium leading-[16px] tracking-[-0.3px] text-[#8C8C8C]">
            결합 할인 적용 시
          </span>
        </div>

        <div className="h-px bg-[#EAEDEF] mb-[12px]" />

        {/* 혜택 목록 */}
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center justify-between pb-[8px]">
            <span className="text-[14px] font-medium leading-[20px] tracking-[-0.3px] text-[#8C8C8C]">
              {b.label}
            </span>
            <div className="flex items-center gap-[4px]">
              {b.icon}
              <span
                className="text-[15px] font-medium leading-[24px] tracking-[-0.3px]"
                style={{ color: b.valueColor ?? "#141414" }}
              >
                {b.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CtaBar */}
      <div className="flex items-center gap-[8px] h-[60px] px-[16px] py-[8px]">
        <OdsBoxButton variant="normal" size="extra-large" onClick={onBack} className="min-w-[88px] shrink-0">
          {backLabel}
        </OdsBoxButton>
        <OdsBoxButton
          variant="brand-solid"
          size="extra-large"
          onClick={onSubmit}
          disabled={disabled}
          className="flex-1 min-w-0"
        >
          {submitLabel}
        </OdsBoxButton>
      </div>
    </div>
  );
}
