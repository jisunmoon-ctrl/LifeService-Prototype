import clsx from "clsx";
import svgPaths from "./svg-7p9jr9ew80";
import { imgColorSet, imgColorSet1 } from "./svg-32f1n";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type TitleProps = {
  additionalClassNames?: string;
  text: string;
};

function Title({ children, additionalClassNames = "", text }: React.PropsWithChildren<TitleProps>) {
  return (
    <div className={clsx("absolute left-0 w-[375px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[5px] items-center px-[16px] py-[20px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#141414] text-[20px] tracking-[-0.3px] w-[343px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type IconCheckProps = {
  additionalClassNames?: string;
};

function IconCheck({ children, additionalClassNames = "" }: React.PropsWithChildren<IconCheckProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
type List1OptionTextProps = {
  text: string;
};

function List1OptionText({ text }: List1OptionTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">
          <IconCheck additionalClassNames="size-[14px]">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.4px_5.482px] mask-size-[19.2px_13.037px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet1}')` }}>
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
          </IconCheck>
          <p className="font-['Pretendard:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full", additionalClassNames)}>
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type BoxButtonText1Props = {
  text: string;
};

function BoxButtonText1({ text }: BoxButtonText1Props) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <Text text={text} />
      </div>
    </div>
  );
}
type BoxButtonTextProps = {
  text: string;
};

function BoxButtonText({ text }: BoxButtonTextProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
      <div aria-hidden="true" className="absolute border-2 border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <IconCheck additionalClassNames="size-[16px]">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.4px_5.482px] mask-size-[19.2px_13.037px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet}')` }}>
              <div className="absolute bg-[#00a1ff] inset-0" data-name="Color" />
            </div>
          </IconCheck>
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a1ff] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{text}</p>
          </div>
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
  const isH10AndIsTrueOrFalse = variant === "H10" && [true, false].includes(mode);
  return (
    <div className={className || `relative w-[375px] ${isH10AndIsTrueOrFalse ? "h-[10px]" : "h-px"}`}>
      {variant === "H1" && [true, false].includes(mode) && <div className={`absolute inset-0 ${variant === "H1" && !mode ? "bg-[#3f474d]" : "bg-[#eaedef]"}`} data-name="cell/divider/h1" />}
      {isH10AndIsTrueOrFalse && <div className={`absolute inset-0 ${variant === "H10" && !mode ? "bg-[#0b0c0e]" : "bg-[#f7f9fa]"}`} data-name="cell/divider/h10" />}
    </div>
  );
}

export default function B() {
  return (
    <div className="bg-white relative size-full" data-name="B_탭토글">
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
            <path d={svgPaths.p1c7ef700} fill="var(--fill-0, #00A1FF)" id="status" />
          </g>
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 top-[162px] w-[343px]" data-name="select">
        <BoxButtonText text="포장" />
        <BoxButtonText1 text="반포장" />
        <BoxButtonText1 text="일반" />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 top-[499px] w-[343px]" data-name="select">
        <BoxButtonText text="네, 있어요" />
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="🌀 Box Button">
          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-col items-center justify-center size-full">
            <Text text="없어요" additionalClassNames="flex-col" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[12px] items-start left-1/2 p-[16px] rounded-[8px] top-[214px] w-[343px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-full">짐 포장부터 운반, 도착 후 가구 배치와 짐 정리까지 모두 필요해요.</p>
        </div>
        <div className="bg-[#ededed] h-px max-h-px min-h-px relative shrink-0 w-full">
          <div className="max-h-[inherit] min-h-[inherit] size-full" />
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="list">
          <List1OptionText text="출발지 짐 포장" />
          <List1OptionText text="이삿짐 운반" />
          <List1OptionText text="도착지 가구배치 및 짐 정리" />
        </div>
      </div>
      <Title additionalClassNames="top-[94px]" text="원하는 이사 방식을 선택해 주세요" />
      <Title additionalClassNames="top-[431px]" text="TV·냉장고와 같은 큰 짐이 있나요?" />
      <div className="absolute bottom-0 left-0 w-[375px]">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="bg-white relative shrink-0 w-full" data-name="ButtonOnlyToolbar">
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
          <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="Indicator">
            <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute left-[-98px] size-[24px] top-[416px]" data-name="[Asset] Shipping Box Small Genuine Blue">
        <Wrapper>
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230.5 230.5">
              <g id="Vector">
                <path d={svgPaths.p2730cd00} fill="var(--fill-0, #00A1FF)" id="Path" />
              </g>
            </svg>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}