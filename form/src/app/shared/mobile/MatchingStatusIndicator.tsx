import { SvgIcon } from "./SvgIcon";
import svgPaths from "../../../imports/svg-yso1yl2guq";

export function MatchingStatusIndicator() {
  return (
    <div className="w-full px-[16px] mt-[24px]">
      <div className="w-full bg-[#F7F9FA] rounded-[8px] p-[16px] flex items-center gap-[6px]">
        <div className="w-[18px] h-[18px] animate-spin">
           {/* BasicLoading icon from import */}
           <SvgIcon path={svgPaths.pa53b000} size={18} viewBox="0 0 18 18" color="#2F3438" />
        </div>
        <span className="text-[16px] font-bold text-[#2F3438] tracking-[-0.3px]">
          매칭할 업체를 찾는 중이에요
        </span>
      </div>
    </div>
  );
}
