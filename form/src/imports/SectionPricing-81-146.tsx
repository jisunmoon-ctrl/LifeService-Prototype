import clsx from "clsx";
import svgPaths from "./svg-bk2bahooh0";
type SectionPricingHelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function SectionPricingHelper({ text, text1, additionalClassNames = "" }: SectionPricingHelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col justify-center not-italic relative tracking-[-0.3px] w-full whitespace-nowrap", additionalClassNames)}>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#8c8c8c] text-[12px]">{text}</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#141414] text-[15px]">{text1}</p>
    </div>
  );
}

function Bar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[22px] relative w-[12px]"} data-name="bar">
      <div className="absolute bg-[#e0e0e0] inset-[0_-12.5%_0_0] rounded-tl-[100px] rounded-tr-[100px]" data-name="rect" />
    </div>
  );
}

function GlobalColorSet({ className }: { className?: string }) {
  return (
    <div className={className || ""} data-name="🌐 GLOBAL_COLOR_SET">
      <div className="relative size-[24px]" data-name="value=🌐 foreground shipping">
        <div className="absolute bg-[#6131d2] inset-0" data-name="Color" />
      </div>
    </div>
  );
}
type CommerceColorSetProps = {
  className?: string;
  value?: "🟠 foreground inverse weak" | "🟠 foreground review star toggle off";
};

function CommerceColorSet({ className, value = "🟠 foreground inverse weak" }: CommerceColorSetProps) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className={`absolute inset-0 ${value === "🟠 foreground review star toggle off" ? "bg-[#e8e8e8]" : "bg-[#b9b9b9]"}`} data-name="Color" />
    </div>
  );
}
type OdsColorSetProps = {
  className?: string;
  value?: "🌀 foreground" | "🌀 foreground weak" | "🌀 foreground brand" | "🌀 foreground inverse" | "🌀 foreground emphasis" | "🌀 foreground critical" | "🌀 foreground attention" | "🌀 foreground disabled" | "accent red" | "accent yellow" | "accent purple";
};

function OdsColorSet({ className, value = "🌀 foreground" }: OdsColorSetProps) {
  const isForegroundDisabled = value === "🌀 foreground disabled";
  return (
    <div className={className || `relative size-[24px] ${isForegroundDisabled ? "bg-white" : ""}`}>
      <div className={`absolute inset-0 ${isForegroundDisabled ? "bg-[#c1c1c1]" : value === "🌀 foreground attention" ? "bg-[#b27800]" : value === "🌀 foreground critical" ? "bg-[#f05656]" : value === "accent purple" ? "bg-[#6f3dde]" : value === "accent yellow" ? "bg-[#ffc300]" : value === "accent red" ? "bg-[#fd3d4a]" : ["🌀 foreground brand", "🌀 foreground emphasis"].includes(value) ? "bg-[#00a1ff]" : value === "🌀 foreground inverse" ? "bg-white" : value === "🌀 foreground weak" ? "bg-[#8c8c8c]" : "bg-[#141414]"}`} data-name="Color" />
    </div>
  );
}

export default function SectionPricing({ className }: { className?: string }) {
  return (
    <div className={className || "relative"} data-name="Section_pricing">
      <div className="content-stretch flex flex-col items-start relative">
        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[8px] pt-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="Card/Title">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[17px] tracking-[-0.3px] whitespace-nowrap">20평대 평균 견적</p>
            <div className="relative shrink-0 size-[16px]">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <div className={`absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat ${"monochrome" === "monochrome" && "semibold" === "bold" ? "mask-position-[1.4px_1.4px] mask-size-[21.2px_21.2px]" : "monochrome" === "monochrome" && "semibold" === "semibold" ? "mask-position-[1.5px_1.5px] mask-size-[21px_21px]" : "monochrome" === "monochrome" && "semibold" === "medium" ? "mask-position-[1.65px_1.65px] mask-size-[20.7px_20.7px]" : "mask-position-[1.8px_1.8px] mask-size-[20.4px_20.4px]"}` || "relative size-[24px]"}>
                    <div className={`absolute inset-0 ${"🌀 ODS" === "🌐 GLOBAL" ? "bg-[#6131d2]" : "🌀 ODS" === "🟠 COMMERCE" ? "bg-[#b9b9b9]" : "bg-[#141414]"}`} data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-end pb-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="contents">
          <div className="content-stretch flex gap-[12px] h-[200px] items-end relative shrink-0 w-full" data-name="graph">
            <Bar className="flex-[1_0_0] h-[13px] min-h-px min-w-px relative" />
            <Bar className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" />
            <Bar className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" />
            <Bar className="flex-[1_0_0] h-[81px] min-h-px min-w-px relative" />
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="bar/wpointer">
              <div className="h-[41px] relative shrink-0 w-[7px]" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 41">
                  <path d={svgPaths.p261d0c00} fill="var(--fill-0, #00A1FF)" id="Union" />
                </svg>
              </div>
              <div className="bg-[#00a1ff] h-[119px] rounded-tl-[100px] rounded-tr-[100px] shrink-0 w-full" data-name="rect" />
            </div>
            <Bar className="flex-[1_0_0] h-[97px] min-h-px min-w-px relative" />
            <Bar className="flex-[1_0_0] h-[81px] min-h-px min-w-px relative" />
            <Bar className="flex-[1_0_0] h-[65px] min-h-px min-w-px relative" />
            <Bar className="flex-[1_0_0] h-[65px] min-h-px min-w-px relative" />
            <Bar className="flex-[1_0_0] h-[65px] min-h-px min-w-px relative" />
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
                <line id="Line 1" stroke="var(--stroke-0, #E0E0E0)" x2="343" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="table">
            <div className="relative shrink-0 w-[81px]" data-name="table">
              <div className="flex flex-col justify-center size-full">
                <SectionPricingHelper text="최저" text1="13만원" additionalClassNames="items-start" />
              </div>
            </div>
            <div className="relative shrink-0 w-[81px]">
              <div className="flex flex-col items-end justify-center size-full">
                <SectionPricingHelper text="최고" text1="110만원" additionalClassNames="items-end" />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[190px] top-[40px]" data-name="pricing">
            <div className="absolute content-stretch flex flex-col items-start justify-center left-[190px] not-italic top-[40px] tracking-[-0.3px] w-[81px] whitespace-nowrap" data-name="avg">
              <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#8c8c8c] text-[12px]">평균</p>
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#141414] text-[15px]">64만원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}