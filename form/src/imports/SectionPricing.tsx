function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        {children}
      </svg>
    </div>
  );
}
type DataProps = {
  text: string;
  text1: string;
};

function Data({ text, text1 }: DataProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[7px] items-start justify-center not-italic pl-[16px] relative text-[#141414] tracking-[-0.3px] w-full whitespace-nowrap">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px]">{text}</p>
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] relative shrink-0 text-[17px]">{text1}</p>
        </div>
      </div>
    </div>
  );
}
type FilterTextProps = {
  text: string;
};

function FilterText({ text }: FilterTextProps) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center py-[8px] relative shrink-0">
      <Wrapper>
        <circle cx="4" cy="4" fill="var(--fill-0, #8C8C8C)" id="Ellipse 1" r="4" />
      </Wrapper>
      <p className="font-['Pretendard:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
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
  value?: "🌀 foreground" | "🌀 foreground weak" | "🌀 foreground brand" | "🌀 foreground inverse" | "🌀 foreground emphasis" | "🌀 foreground critical" | "🌀 foreground attention" | "🌀 foreground disabled";
};

function OdsColorSet({ className, value = "🌀 foreground" }: OdsColorSetProps) {
  const isForegroundDisabled = value === "🌀 foreground disabled";
  return (
    <div className={className || `relative size-[24px] ${isForegroundDisabled ? "bg-white" : ""}`}>
      <div className={`absolute inset-0 ${isForegroundDisabled ? "bg-[#c1c1c1]" : value === "🌀 foreground attention" ? "bg-[#b27800]" : value === "🌀 foreground critical" ? "bg-[#f05656]" : ["🌀 foreground brand", "🌀 foreground emphasis"].includes(value) ? "bg-[#00a1ff]" : value === "🌀 foreground inverse" ? "bg-white" : value === "🌀 foreground weak" ? "bg-[#8c8c8c]" : "bg-[#141414]"}`} data-name="Color" />
    </div>
  );
}

export default function SectionPricing() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Section_pricing">
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[8px] pt-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="title">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[17px] tracking-[-0.3px] w-[238px]">30평대 기준 평균 견적을 참고하세요</p>
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
        <div className="content-stretch flex gap-[12px] items-start px-[16px] relative shrink-0">
          <div className="content-stretch flex gap-[6px] items-center justify-center py-[8px] relative shrink-0" data-name="filter">
            <Wrapper>
              <circle cx="4" cy="4" fill="var(--fill-0, #141414)" id="Ellipse 1" r="4" />
            </Wrapper>
            <p className="font-['Pretendard:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#141414] text-[14px] tracking-[-0.3px] whitespace-nowrap">{`포장이사 `}</p>
          </div>
          <FilterText text="반포장" />
          <FilterText text="일반" />
        </div>
        <div className="content-stretch flex flex-col items-start justify-end pb-[16px] pt-[24px] px-[16px] relative shrink-0 w-[375px]" data-name="contents">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="table">
            <Data text="최저" text1="80만원" />
            <div className="bg-[#e3e3e3] h-[41px] rounded-[100px] shrink-0 w-px" data-name="divider" />
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="data">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[7px] items-start justify-center not-italic pl-[16px] relative tracking-[-0.3px] w-full whitespace-nowrap">
                  <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#141414] text-[12px]">평균</p>
                  <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] relative shrink-0 text-[#00a1ff] text-[17px]">170만원</p>
                </div>
              </div>
            </div>
            <div className="bg-[#e3e3e3] h-[41px] rounded-[100px] shrink-0 w-px" data-name="divider" />
            <Data text="최고" text1="278만원" />
          </div>
        </div>
      </div>
    </div>
  );
}