import { SvgIcon } from "./SvgIcon";
import svgPaths from "../../../imports/svg-yso1yl2guq";

export function SystemStatusBar() {
  return (
    <div className="w-full h-[44px] bg-white relative shrink-0 z-50">
       {/* Time */}
       <div className="absolute left-[21px] top-[13px] w-[54px] h-[21px] flex justify-center items-center">
            <span className="font-semibold text-[14px] text-black">9:41</span>
        </div>
        {/* Battery */}
        <div className="absolute right-[14px] top-[17px] w-[24px] h-[11px]">
            <SvgIcon path={svgPaths.p9ed9280} width={24.3} height={11.3} viewBox="0 0 24.328 11.3333" color="black" className="opacity-40"/>
        </div>
    </div>
  )
}
