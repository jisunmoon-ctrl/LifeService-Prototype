import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[36px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TableAllTableTextProps = {
  text: string;
};

function TableAllTableText({ text }: TableAllTableTextProps) {
  return (
    <div className="bg-white h-[36px] relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[8px] relative size-full">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[15px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TableTextProps = {
  text: string;
};

function TableText({ text }: TableTextProps) {
  return (
    <Wrapper>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col justify-center px-[8px] relative size-full", additionalClassNames)}>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="flex flex-col justify-center size-full">
      <Text1 text={text} additionalClassNames="items-start" />
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute bottom-full left-0 right-0 top-0">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.75 1">
          <line id="divider" stroke="var(--stroke-0, #E0E0E0)" x2="85.75" y1="0.5" y2="0.5" />
        </svg>
      </div>
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

export default function SectionPricing() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Section_pricing">
      <div className="content-stretch flex flex-col gap-[6px] items-start justify-center p-[16px] relative shrink-0 w-[375px]" data-name="Card/Title">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[17px] tracking-[-0.3px] whitespace-nowrap">20평대 견적가</p>
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
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px] whitespace-nowrap">최근 3년 내 이사 견적 데이터 기반</p>
      </div>
      <div className="content-stretch flex items-start pb-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="contents">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="row">
          <div className="bg-[#f5f5f5] h-[36px] relative shrink-0 w-full" data-name="table">
            <Text text="이사일" />
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="3.8" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <Wrapper>
            <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#00a1ff] text-[14px] tracking-[-0.3px] whitespace-nowrap">2.27 (길일)</p>
          </Wrapper>
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="2.21" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="2.20" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="row">
          <div className="bg-[#f5f5f5] h-[36px] relative shrink-0 w-full" data-name="table">
            <Text text="인원" />
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="1명" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="3인 이상" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="2인" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="3인 이상" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="row">
          <div className="bg-[#f5f5f5] h-[36px] relative shrink-0 w-full" data-name="table">
            <Text text="종류" />
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="포장" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="포자" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="반포장" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableText text="일반" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="tableAll">
          <div className="bg-[#f5f5f5] h-[36px] relative shrink-0 w-full" data-name="table">
            <div className="flex flex-col items-end justify-center size-full">
              <Text1 text="견적" additionalClassNames="items-end" />
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableAllTableText text="17만원" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableAllTableText text="24만원" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableAllTableText text="-" />
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <Divider />
          </div>
          <TableAllTableText text="11만원" />
        </div>
      </div>
    </div>
  );
}