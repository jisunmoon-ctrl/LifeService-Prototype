import { SvgIcon } from "./SvgIcon";
import svgPaths from "../../../imports/svg-yso1yl2guq";

export function MobileTopNavigation() {
  return (
    <div className="w-full h-[44px] bg-white flex items-center justify-between px-[16px] shrink-0 z-40 relative">
        <div className="flex items-center gap-[14px]">
          <SvgIcon path={svgPaths.p394f1f90} size={24} color="#2F3438" />
          <SvgIcon path={svgPaths.p28233df0} size={24} color="#2F3438" />
        </div>
        <SvgIcon path={svgPaths.p30810c00} size={24} color="#2F3438" />
    </div>
  )
}
