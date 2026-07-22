import clsx from "clsx";
import { imgColorSet } from "./svg-hixcs";
import svgPaths from "./svg-k416phbg68";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center size-full">
      <div className="content-stretch flex flex-col items-center relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <Wrapper1>{children}</Wrapper1>
    </div>
  );
}

function Module() {
  return (
    <div className="relative shrink-0 w-full">
      <Wrapper2>
        <Text text="주방" />
        <Helper />
      </Wrapper2>
    </div>
  );
}

function Helper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[343px]">
      <Frame className="bg-[#f5f5f5] relative rounded-[8px] shrink-0 size-[100px]" />
      <Frame className="bg-[#f5f5f5] relative rounded-[8px] shrink-0 size-[100px]" />
      <Frame className="bg-[#f5f5f5] relative rounded-[8px] shrink-0 size-[100px]" />
      <Frame className="bg-[#f5f5f5] relative rounded-[8px] shrink-0 size-[100px]" />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start pb-[12px] pt-[16px] px-[16px] relative w-full">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
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
  value?: "🌀 foreground" | "🌀 foreground weak" | "🌀 foreground inverse" | "🌀 foreground brand" | "🌀 accent red" | "🌀 accent yellow" | "🌀 accent purple" | "🌀 foreground emphasis" | "🌀 foreground critical" | "🌀 foreground attention" | "🌀 foreground disabled";
};

function OdsColorSet({ className, value = "🌀 foreground" }: OdsColorSetProps) {
  const isForegroundDisabled = value === "🌀 foreground disabled";
  return (
    <div className={className || `relative size-[24px] ${isForegroundDisabled ? "bg-white" : ""}`}>
      <div className={`absolute inset-0 ${isForegroundDisabled ? "bg-[#c1c1c1]" : value === "🌀 foreground attention" ? "bg-[#b27800]" : value === "🌀 foreground critical" ? "bg-[#f05656]" : value === "🌀 accent purple" ? "bg-[#6f3dde]" : value === "🌀 accent yellow" ? "bg-[#ffc300]" : value === "🌀 accent red" ? "bg-[#fd3d4a]" : ["🌀 foreground brand", "🌀 foreground emphasis"].includes(value) ? "bg-[#00a1ff]" : value === "🌀 foreground inverse" ? "bg-white" : value === "🌀 foreground weak" ? "bg-[#8c8c8c]" : "bg-[#141414]"}`} data-name="Color" />
    </div>
  );
}

function Frame({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#f5f5f5] relative rounded-[8px] size-[100px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <Wrapper additionalClassNames="size-[24px]">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.2px_2.2px] mask-size-[19.6px_19.6px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet}')` }}>
              <div className="absolute bg-[#8c8c8c] inset-0" data-name="Color" />
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
type DividerProps = {
  className?: string;
  mode?: boolean;
  variant?: "H1" | "H10";
};

function Divider({ className, mode = true, variant = "H1" }: DividerProps) {
  const isH10 = variant === "H10";
  return (
    <div className={className || `relative w-[375px] ${isH10 ? "h-[10px]" : "h-px"}`}>
      {variant === "H1" && <div className={`absolute inset-0 ${variant === "H1" && !mode ? "bg-[#3f474d]" : "bg-[#eaedef]"}`} data-name="cell/divider/h1" />}
      {isH10 && <div className={`absolute inset-0 ${variant === "H10" && !mode ? "bg-[#0b0c0e]" : "bg-[#f7f9fa]"}`} data-name="cell/divider/h10" />}
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-white relative size-full" data-name="step1">
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-[#09609c] h-[44px] left-0 top-0 w-[375px]" />
        <div className="absolute bg-white h-[44px] left-0 top-0 w-[375px]" data-name="Statusbar">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="iPhone X/Status Bars/Status Bar (Black)">
            <div className="absolute h-[11.333px] right-[14.67px] top-[17.33px] w-[24.328px]" data-name="Battery">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
                <g id="Battery">
                  <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
                  <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                  <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[39.39%_11.74%_35.69%_84.18%]" data-name="Wifi">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
                <path d={svgPaths.p3d78f640} fill="var(--fill-0, black)" id="Wifi" />
              </svg>
            </div>
            <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Cellular Connection">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
                <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
              </svg>
            </div>
            <div className="absolute h-[21px] left-[21px] top-[13px] w-[54px]" data-name="Time Style">
              <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[0] left-[27px] not-italic text-[14px] text-black text-center top-[calc(50%-7.5px)] tracking-[-0.28px] w-[54px]">
                <span className="leading-[normal]">9:4</span>
                <span className="leading-[normal]">1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-0 top-[44px]">
        <div className="absolute bg-white h-[44px] left-0 top-[44px] w-[375px]" />
        <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-[187px] not-italic text-[#141414] text-[18px] text-center top-[56px] tracking-[-0.3px] whitespace-nowrap">이사 신청</p>
        <p className="-translate-x-full absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[359px] not-italic text-[#8c8c8c] text-[14px] text-right top-[56px] tracking-[-0.3px] whitespace-nowrap">다음에</p>
        <div className="absolute left-[16px] overflow-clip size-[24px] top-[54px]" data-name="Dismiss">
          <div className="absolute inset-[14.75%]" data-name="-">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9192 16.9192">
              <g id="-">
                <path clipRule="evenodd" d={svgPaths.p1a74ce40} fill="#141414" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2cfe9b00} fill="#141414" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Divider className="absolute h-px left-0 top-[87px] w-[375px]" />
      <div className="absolute h-[6px] left-0 top-[88px] w-[375px]" data-name="progressbar_mobile">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 6">
          <g id="progressbar_mobile">
            <path d={svgPaths.p19183400} fill="var(--fill-0, #F7F9FA)" id="-" />
            <path d={svgPaths.p3f472400} fill="var(--fill-0, #00A1FF)" id="status" />
          </g>
        </svg>
      </div>
      <div className="absolute content-stretch flex items-start left-0 p-[16px] top-[94px] w-[375px]">
        <div className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#141414] text-[24px] tracking-[-0.3px] whitespace-nowrap">
          <p className="mb-0">정확한 견적을 위해</p>
          <p>짐 사진을 찍어주세요</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[406px] w-[375px]">
        <div className="relative shrink-0 w-full" data-name="module">
          <Wrapper2>
            <Text text="거실" />
            <Helper />
          </Wrapper2>
        </div>
        <Module />
        <Module />
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
            <div className="relative rounded-[4px] shrink-0 w-full" data-name="🌀 Box Button">
              <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[15px] relative w-full">
                  <Wrapper additionalClassNames="size-[18px]">
                    <div className="absolute bg-[#141414] inset-0 mask-position-[]" data-name="Color" />
                  </Wrapper>
                  <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[20px]">방 추가</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 contents left-1/2" data-name="fix">
        <div className="-translate-x-1/2 absolute bg-white bottom-0 h-[34px] left-1/2 w-[375px]" data-name="Indicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
        <div className="-translate-x-1/2 absolute bg-white bottom-[34px] left-1/2 w-[375px]" data-name="ButtonOnlyToolbar">
          <div className="content-stretch flex gap-[6px] items-start p-[6px] relative w-full">
            <div className="bg-[#00a1ff] flex-[1_0_0] max-h-[50px] min-h-[50px] min-w-px relative rounded-[4px]" data-name="🪣 Button">
              <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] relative w-full">
                  <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[20px]">다음</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[8px] items-center justify-center left-[16px] p-[16px] rounded-[8px] top-[190px] w-[343px]">
        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[14px] text-black tracking-[-0.3px]">정확한 견적을 받으려면?</p>
            <div className="relative shrink-0 size-[16px]">
              <Wrapper1>
                <div className={`absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat ${"monochrome" === "monochrome" && "medium" === "bold" ? "mask-position-[2.55px_6.2px] mask-size-[18.9px_11.45px]" : "monochrome" === "monochrome" && "medium" === "semibold" ? "mask-position-[2.65px_6.3px] mask-size-[18.7px_11.25px]" : "monochrome" === "monochrome" && "medium" === "medium" ? "mask-position-[2.8px_6.45px] mask-size-[18.4px_10.95px]" : "mask-position-[2.95px_6.6px] mask-size-[18.1px_10.65px]"}` || "relative size-[24px]"}>
                  <div className={`absolute inset-0 ${"🌀 ODS" === "🟠 COMMERCE" ? "bg-[#b9b9b9]" : "bg-[#141414]"}`} data-name="Color" />
                </div>
              </Wrapper1>
            </div>
          </div>
          <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.3px] w-full">내부 짐까지 잘 보일 수 있도록 서랍을 다 끝까지 열고 찍어주세요.</p>
        </div>
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[308px]">
          <div className="aspect-[100/100] bg-[#d9d9d9] flex-[1_0_0] min-h-px min-w-px rounded-[4px]" />
          <div className="aspect-[100/100] bg-[#d9d9d9] flex-[1_0_0] min-h-px min-w-px rounded-[4px]" />
          <div className="aspect-[100/100] bg-[#d9d9d9] flex-[1_0_0] min-h-px min-w-px rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}