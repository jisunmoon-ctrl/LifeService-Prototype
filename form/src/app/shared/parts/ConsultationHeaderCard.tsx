import { Truck } from "lucide-react";

interface ConsultationHeaderCardProps {
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function ConsultationHeaderCard({
  title = "이사",
  subtitle = "2월 11일 신청",
  actionLabel = "매칭중단",
  onAction,
}: ConsultationHeaderCardProps) {
  return (
    <div className="flex flex-row items-center justify-between py-[20px] w-full">
      <div className="flex flex-row items-center gap-[12px]">
        {/* Icon Area */}
        <div className="w-[40px] h-[40px] rounded-full bg-[#E5F6FF] flex items-center justify-center">
             <Truck className="w-[24px] h-[24px] text-[#00A1FF]" />
        </div>
        
        {/* Text Area */}
        <div className="flex flex-col gap-[4px]">
          <span className="text-[18px] font-[660] leading-[22px] text-[#2F3438]">
            {title}
          </span>
          <span className="text-[14px] font-[400] leading-[20px] text-[#828C94]">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Right Action Button */}
      <button
        onClick={onAction}
        className="px-[16px] py-[8px] border border-[#E6E6E6] rounded-[4px] bg-white text-[14px] font-[400] text-[#2F3438] hover:bg-gray-50 transition-colors cursor-pointer"
      >
        {actionLabel}
      </button>
    </div>
  );
}
