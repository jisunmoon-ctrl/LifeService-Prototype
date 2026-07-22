import { SvgIcon } from "./SvgIcon";
import svgPaths from "../../../imports/svg-yso1yl2guq";

export function MobileHeader() {
  return (
    <div className="w-full bg-white pb-[20px]">
      {/* Status Bar (Simulated for visual fidelity as per spec) */}
      <div className="w-full h-[44px] relative mb-[10px]">
        {/* Time */}
        <div className="absolute left-[21px] top-[13px] w-[54px] h-[21px] flex justify-center items-center">
            <span className="font-semibold text-[14px] text-black">9:41</span>
        </div>
        {/* Battery / Icons area (simplified) */}
        <div className="absolute right-[14px] top-[17px] w-[24px] h-[11px]">
            <SvgIcon path={svgPaths.p9ed9280} width={24.3} height={11.3} viewBox="0 0 24.328 11.3333" color="black" className="opacity-40"/>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="w-full h-[44px] flex items-center justify-between px-[16px] mb-[20px]">
        <div className="flex items-center gap-[14px]">
          <SvgIcon path={svgPaths.p394f1f90} size={24} color="#2F3438" />
          <SvgIcon path={svgPaths.p28233df0} size={24} color="#2F3438" />
        </div>
        <SvgIcon path={svgPaths.p30810c00} size={24} color="#2F3438" />
      </div>

      {/* Title Area */}
      <div className="px-[20px] flex flex-row items-center gap-[12px]">
        {/* Icon (Truck) */}
        {/* The imported code doesn't show the truck icon in the 'StandardTopNavigation' or close to it, 
            but the screenshot shows a truck icon. 
            However, the imported code `Mobile신청내역상세매칭중.tsx` DOES NOT seem to have the header title part 
            in the `StandardTopNavigation`. 
            Wait, I might have missed it in the truncated part or the user just provided the code for the body?
            Ah, looking at the screenshot, "이사" and "6월 25일 신청" is below the nav.
            I will check the code again. `Frame20` (body) starts with `Callout` (Matching status).
            Where is the title "이사"?
            The screenshot shows it above the Matching Status.
            The provided code `Mobile신청내역상세매칭중.tsx` starts with `StandardTopNavigation` (Nav) and then `Frame20` (Body).
            `Frame20` has `Callout` (Matching status).
            The "Title" seems missing in the provided code snippet or I missed it.
            Wait, the screenshot shows "이사" with a truck icon.
            I will implement it based on the screenshot and previous Desktop header, but adapted.
        */}
        <div className="w-[40px] h-[40px] relative">
             {/* Using a placeholder or the truck icon from lucide if SVG not found in paths */}
             {/* Actually I'll use Lucide Truck as I did before, matching the screenshot style */}
             <div className="w-full h-full flex items-center justify-center">
                 {/* Lucide Truck doesn't look exactly like the screenshot (colorful). 
                     I'll try to find if there is a path for it. 
                     If not, I'll use a generic colored placeholder or Lucide.
                 */}
                  <img src="https://img.icons8.com/color/48/truck.png" alt="truck" className="w-[40px] h-[40px]" />
             </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          <h1 className="text-[18px] font-bold text-[#2F3438] leading-[22px]">이사</h1>
          <span className="text-[14px] text-[#828C94]">6월 25일 신청</span>
        </div>
      </div>
    </div>
  );
}
