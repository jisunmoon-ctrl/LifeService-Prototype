import { Loader2 } from "lucide-react";

interface MatchingStatusBarProps {
  message?: string;
}

export function MatchingStatusBar({
  message = "매칭할 업체를 찾는 중이에요",
}: MatchingStatusBarProps) {
  return (
    <div className="w-full bg-[#F7F9FA] rounded-[8px] px-[20px] py-[16px] flex flex-row items-center gap-[12px] mt-[24px]">
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <Loader2 className="w-[24px] h-[24px] text-[#828C94] animate-spin" />
      </div>
      <span className="text-[14px] font-[660] leading-[20px] text-[#2F3438]">
        {message}
      </span>
    </div>
  );
}
