import svgPaths from "./svg-63dpqiir20";
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[77px]">{text}</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">{text1}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">{text}</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">{text1}</p>
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
type ArrowLeftProps = {
  className?: string;
  size?: "12" | "16" | "18" | "24" | "32" | "48";
};

function ArrowLeft({ className, size = "12" }: ArrowLeftProps) {
  const is16 = size === "16";
  const is18 = size === "18";
  const is24 = size === "24";
  const is32 = size === "32";
  const is48 = size === "48";
  return (
    <div className={className || `relative ${is48 ? "max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] size-[48px]" : is32 ? "max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] size-[32px]" : is24 ? "max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] size-[24px]" : is18 ? "max-h-[18px] max-w-[18px] min-h-[18px] min-w-[18px] size-[18px]" : is16 ? "max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] size-[16px]" : "max-h-[12px] max-w-[12px] min-h-[12px] min-w-[12px] size-[12px]"}`}>
      <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] relative size-full">
          <div className={`absolute ${is48 ? "inset-[11.92%_7.92%_11.97%_9.17%]" : is32 ? "inset-[11.29%_7.3%_11.35%_8.53%]" : is24 ? "inset-[10.67%_6.67%_10.72%_7.92%]" : is18 ? "inset-[9.97%_5.97%_10.03%_7.22%]" : is16 ? "inset-[9.73%_5.71%_9.78%_7%]" : "inset-[9.42%_5.42%_9.47%_6.67%]"}`} data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is48 ? "0 0 39.8 36.5334" : is32 ? "0 0 26.9333 24.7556" : is24 ? "0 0 20.5 18.8667" : is18 ? "0 0 15.625 14.4" : is16 ? "0 0 13.9667 12.8778" : "0 0 10.55 9.73335"}>
              <path clipRule="evenodd" d={is48 ? svgPaths.p306d90c0 : is32 ? svgPaths.p25e19f00 : is24 ? svgPaths.p3bee1d00 : is18 ? svgPaths.p264d6e70 : is16 ? svgPaths.p96a1d00 : svgPaths.p3b51c880} fill="var(--fill-0, #2F3438)" fillRule="evenodd" id="Vector" />
            </svg>
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
type Divider1Props = {
  className?: string;
  type?: "1px" | "12px";
};

function Divider1({ className, type = "1px" }: Divider1Props) {
  return (
    <div className={className || `relative w-[375px] ${type === "12px" ? "bg-[#f5f5f5] h-[12px] max-h-[12px] min-h-[12px]" : "bg-[#ededed] h-px max-h-px min-h-px"}`}>
      <div className="max-h-[inherit] min-h-[inherit] size-full" />
    </div>
  );
}

export default function A() {
  return (
    <div className="bg-white relative size-full" data-name="A안">
      <div className="absolute left-0 top-0 w-[375px]" data-name="TOP">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="bg-white h-[44px] shrink-0 sticky top-0 w-full" data-name="Statusbar">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="iPhone X/Status Bars/Status Bar (Black)">
              <div className="absolute h-[11.333px] right-[14.67px] top-[17.33px] w-[24.328px]" data-name="Battery">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
                  <g id="Battery">
                    <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, #141414)" width="21" x="0.5" y="0.5" />
                    <path d={svgPaths.p9ed9280} fill="var(--fill-0, #141414)" id="Cap" opacity="0.4" />
                    <rect fill="var(--fill-0, #141414)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[39.39%_11.74%_35.69%_84.18%]" data-name="Wifi">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
                  <path d={svgPaths.p3d78f640} fill="var(--fill-0, #141414)" id="Wifi" />
                </svg>
              </div>
              <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Cellular Connection">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
                  <path d={svgPaths.p26d17600} fill="var(--fill-0, #141414)" id="Cellular Connection" />
                </svg>
              </div>
              <div className="absolute h-[21px] left-[21px] top-[13px] w-[54px]" data-name="Time Style">
                <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[0] left-[27px] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-7.5px)] tracking-[-0.28px] w-[54px]">
                  <span className="leading-[normal]">9:4</span>
                  <span className="leading-[normal]">1</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="🌀🤖 Standard Top Navigation">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                <div className="h-[44px] relative shrink-0 w-full" data-name="TopNavigation Section">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
                      <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Left Icons">
                        <ArrowLeft className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0 size-[24px]" size="24" />
                      </div>
                      <div className="content-stretch flex gap-[14px] items-center justify-center shrink-0" data-name="Right Icons" />
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[44px] items-center justify-center left-1/2 top-1/2" data-name="Center">
                        <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[16px] text-center text-ellipsis tracking-[-0.3px] whitespace-nowrap">매칭 업체 목록</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-center justify-center left-[841px] rounded-[4px] size-[160px] top-[758px]">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_5px_0px_rgba(63,71,77,0.05)]" />
        <div className="overflow-clip relative shrink-0 size-[49px]" data-name="won_48">
          <div className="absolute inset-[20.13%_8.33%]" data-name="-">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8333 29.2701">
              <g id="-">
                <path d={svgPaths.p5ae3680} fill="var(--fill-0, #141414)" />
                <path d={svgPaths.p397d2b00} fill="var(--fill-0, #141414)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Apple_SD_Gothic_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">광고상품소개</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[88px]" data-name="Container">
        <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[375px]" data-name="Section_List">
          <div className="bg-[#f7f9fa] relative rounded-[4px] shrink-0 w-[343px]" data-name="callout_loading">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[311px]">
                <div className="relative shrink-0 size-[18px]" data-name="BasicLoading">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <circle cx="9" cy="9" id="Ellipse 58" r="8" stroke="var(--stroke-0, white)" strokeWidth="2" />
                  </svg>
                  <div className="absolute bottom-1/2 left-1/2 right-0 top-0" data-name="Intersect">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                      <path d={svgPaths.p277baa80} fill="var(--fill-0, #2F3438)" id="Intersect" />
                    </svg>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['SF_Pro_Display:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#2f3438] text-[16px] tracking-[-0.3px]">매칭할 업체를 찾는 중이에요</p>
              </div>
            </div>
          </div>
        </div>
        <Divider1 className="bg-[#f5f5f5] h-[12px] max-h-[12px] min-h-[12px] relative shrink-0 w-[375px]" type="12px" />
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section_pricing">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="content-stretch flex flex-col gap-[6px] items-start justify-center not-italic pb-[8px] pt-[16px] px-[16px] relative shrink-0 tracking-[-0.3px] w-[375px] whitespace-nowrap" data-name="title">
              <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] relative shrink-0 text-[#141414] text-[17px]">30평대 이사 평균 견적</p>
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#8c8c8c] text-[13px]">오늘의집 계약 데이터 기준</p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-end pb-[20px] pt-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="contents">
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
        <Divider1 className="bg-[#f5f5f5] h-[12px] max-h-[12px] min-h-[12px] relative shrink-0 w-[375px]" type="12px" />
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section_Info">
          <div className="relative shrink-0 w-[375px]" data-name="Card/Title">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[16px] relative w-full">
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[17px] tracking-[-0.3px] whitespace-nowrap">신청내역</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] relative shrink-0" data-name="information">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 tracking-[-0.3px]" data-name="section">
              <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">내 신청정보</p>
              <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[16px] items-start relative shrink-0 text-[15px]">
                <Helper text="신청일자" text1="2025년 1월 25일 23:15" />
                <Helper text="고객명" text1="문지선" />
                <Helper text="이사종류" text1="가정이사" />
                <Helper text="이사예정일" text1="2025년 3월 25일 수요일" />
                <Helper text="연락처" text1="010-1234-5678" />
              </div>
            </div>
            <Divider className="h-px relative shrink-0 w-[343px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 tracking-[-0.3px]" data-name="section">
              <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] text-[16px] w-[173px]">출발지</p>
              <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[16px] items-start relative shrink-0 text-[15px]">
                <Helper text="주소" text1="서울 서초구 서초대로74길 4 삼성생명서초타워 25층" />
                <Helper text="엘레베이터" text1="있음" />
                <Helper text="평수" text1="40평대" />
              </div>
            </div>
            <Divider className="h-px relative shrink-0 w-[343px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.3px]" data-name="section">
              <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] w-[173px]">도착지</p>
              <div className="content-stretch flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] gap-[16px] items-start relative shrink-0">
                <Helper1 text="주소" text1="서울 서초구 서초대로74길 4 삼성생명서초타워 25층" />
                <Helper1 text="엘레베이터" text1="있음" />
                <Helper1 text="평수" text1="40평대" />
                <Helper1 text="가구인원수" text1="5인 이상" />
              </div>
            </div>
            <Divider className="h-px relative shrink-0 w-[343px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="section">
              <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-[173px]">메모</p>
              <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-[343px]" data-name="🪣 Textarea">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                  <div className="bg-[#f7f9fa] relative rounded-[4px] shrink-0 w-full" data-name="Textarea">
                    <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[16px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-h-px min-w-px relative" data-name="Container">
                        <p className="flex-[1_0_0] font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-full leading-[24px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px]">고객이 입력한 내용</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}