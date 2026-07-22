import svgPaths from "./svg-yso1yl2guq";

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_left_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_left_24">
          <path d={svgPaths.p394f1f90} fill="var(--fill-0, #2F3438)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function HomeIcHomeOutlinedRegular() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home/ic_home_outlined_regular/">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home/ic_home_outlined_regular/">
          <path d={svgPaths.p28233df0} fill="var(--fill-0, #2F3438)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-start left-[16px] top-[11px]">
      <ArrowLeft />
      <HomeIcHomeOutlinedRegular />
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="share_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="share_24">
          <path d={svgPaths.p30810c00} fill="var(--fill-0, #2F3438)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-end right-[16px] top-[11px]">
      <Share />
    </div>
  );
}

function StandardTopNavigation() {
  return (
    <button className="absolute bg-white block cursor-pointer h-[45px] left-0 top-[44px] w-[375px]" data-name="StandardTopNavigation">
      <Frame2 />
      <Frame1 />
    </button>
  );
}

function Battery() {
  return (
    <div className="absolute h-[11.333px] right-[14.67px] top-[17.33px] w-[24.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[13px] w-[54px]" data-name="Time Style">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[0] left-[27px] not-italic text-[14px] text-black text-center top-[calc(50%-7.5px)] tracking-[-0.28px] w-[54px] whitespace-pre-wrap">
        <span className="leading-[normal]">9:4</span>
        <span className="leading-[normal]">1</span>
      </p>
    </div>
  );
}

function IPhoneXStatusBarsStatusBarBlack1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="iPhone X/Status Bars/Status Bar (Black)">
      <Battery />
      <div className="absolute inset-[39.39%_11.74%_35.69%_84.18%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
          <path d={svgPaths.p3d78f640} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function IPhoneXStatusBarsStatusBarBlack() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[375px]" data-name="iPhone X/Status Bars/Status Bar (Black)">
      <IPhoneXStatusBarsStatusBarBlack1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[44px] left-0 top-0 w-[375px]" data-name="Rectangle" />
      <IPhoneXStatusBarsStatusBarBlack />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <StandardTopNavigation />
      <Group />
    </div>
  );
}

function Won() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="won_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g id="won_48">
          <g id="-">
            <path d={svgPaths.p3a73c600} fill="var(--fill-0, #2F3438)" />
            <path d={svgPaths.p17154c40} fill="var(--fill-0, #2F3438)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-center justify-center left-[841px] rounded-[4px] size-[160px] top-[758px]">
      <div aria-hidden="true" className="absolute border border-[#eaedef] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_5px_0px_rgba(63,71,77,0.05)]" />
      <Won />
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px]">광고상품소개</p>
    </div>
  );
}

function BasicLoading() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="BasicLoading">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="BasicLoading">
          <circle cx="9" cy="9" id="Ellipse 58" r="8" stroke="var(--stroke-0, white)" strokeWidth="2" />
          <path d={svgPaths.pa53b000} fill="var(--fill-0, #2F3438)" id="Intersect" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[311px]">
      <BasicLoading />
      <p className="flex-[1_0_0] font-['SF_Pro_Display:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">매칭할 업체를 찾는 중이에요</p>
    </div>
  );
}

function Callout() {
  return (
    <div className="bg-[#f7f9fa] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[343px]" data-name="Callout">
      <Frame />
    </div>
  );
}

function SquareBadge() {
  return (
    <div className="bg-[#09609c] content-stretch flex h-[24px] items-center justify-center px-[6px] relative rounded-[4px] shrink-0" data-name="SquareBadge">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px]">매칭완료</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <SquareBadge />
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#c2c8cc] text-[14px] tracking-[-0.3px]">21.09.15. 23:15 업데이트</p>
    </div>
  );
}

function Star() {
  return (
    <div className="col-1 ml-0 mt-[3px] relative row-1 size-[12px]" data-name="star_12">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2_3184)" id="star_12">
          <path d={svgPaths.p34890300} fill="var(--fill-0, #35C5F0)" id="-" />
        </g>
        <defs>
          <clipPath id="clip0_2_3184">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center ml-[35px] mt-0 not-italic relative row-1 text-[#828c94] text-[14px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[18px]">(20)</p>
      </div>
      <div className="col-1 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center ml-[14px] mt-0 not-italic relative row-1 text-[#35c5f0] text-[14px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[18px]">5.0</p>
      </div>
      <Star />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2f3438] text-[20px] tracking-[-0.3px]">영구크린</p>
      <Group4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2f769700} fill="var(--fill-0, #2F3438)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function CircleBadge() {
  return (
    <div className="bg-[#f77] relative rounded-[34px] shrink-0 size-[20px]" data-name="CircleBadge">
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[16px] left-[6px] not-italic right-[6px] text-[12px] text-center text-white top-[calc(50%-8px)] tracking-[-0.3px]">2</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron_right_18">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron_right_18">
          <path clipRule="evenodd" d={svgPaths.p1674b80} fill="var(--fill-0, #2F3438)" fillRule="evenodd" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Icon />
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2f3438] text-[16px] tracking-[-0.3px]">
        <p className="leading-[20px] whitespace-pre-wrap">채팅</p>
      </div>
      <CircleBadge />
      <ChevronRight />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex font-['SF_Pro_Display:Regular',sans-serif] gap-[4px] items-center not-italic relative shrink-0 tracking-[-0.3px] w-full">
      <div className="flex flex-[1_0_0] flex-col h-[20px] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#2f3438] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">영구크린에서 견적서를 보냈습니다.</p>
      </div>
      <p className="leading-[16px] relative shrink-0 text-[#c2c8cc] text-[12px] text-center">오후 6:30</p>
    </div>
  );
}

function ChatBlock() {
  return (
    <div className="bg-[#f7f9fa] relative rounded-[8px] shrink-0 w-full" data-name="Chat/Block">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Frame19 />
        <Frame22 />
      </div>
    </div>
  );
}

function ProOutline() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="pro_outline_18">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="pro_outline_18">
          <g id="-">
            <path d={svgPaths.p2b4fbb80} fill="var(--fill-0, #2F3438)" />
            <path d={svgPaths.p18352670} fill="var(--fill-0, #2F3438)" />
            <path d={svgPaths.p3925a700} fill="var(--fill-0, #2F3438)" />
            <path d={svgPaths.p1b477500} fill="var(--fill-0, #2F3438)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextButton() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="TextButton">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[5px] relative w-full">
          <ProOutline />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">업체 보기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative w-[30px]" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function CallOutline() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="call_outline_18">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="call_outline_18">
          <path d={svgPaths.p1d9ce100} fill="var(--fill-0, #2F3438)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function TextButton1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="TextButton">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[5px] relative w-full">
          <CallOutline />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">전화하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <TextButton />
      <div className="flex h-[30px] items-center justify-center relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Divider />
        </div>
      </div>
      <TextButton1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[343px]">
      <div aria-hidden="true" className="absolute border border-[#eaedef] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame21 />
      <Frame30 />
      <ChatBlock />
      <Frame23 />
    </div>
  );
}

function SquareBadge1() {
  return (
    <div className="bg-[#09609c] content-stretch flex h-[24px] items-center justify-center px-[6px] relative rounded-[4px] shrink-0" data-name="SquareBadge">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px]">매칭완료</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <SquareBadge1 />
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#c2c8cc] text-[14px] tracking-[-0.3px]">21.09.15. 23:15 업데이트</p>
    </div>
  );
}

function Star1() {
  return (
    <div className="col-1 ml-0 mt-[3px] relative row-1 size-[12px]" data-name="star_12">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2_3184)" id="star_12">
          <path d={svgPaths.p34890300} fill="var(--fill-0, #35C5F0)" id="-" />
        </g>
        <defs>
          <clipPath id="clip0_2_3184">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center ml-[35px] mt-0 not-italic relative row-1 text-[#828c94] text-[14px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[18px]">(20)</p>
      </div>
      <div className="col-1 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center ml-[14px] mt-0 not-italic relative row-1 text-[#35c5f0] text-[14px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[18px]">5.0</p>
      </div>
      <Star1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2f3438] text-[20px] tracking-[-0.3px]">민익스프레스</p>
      <Group5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2f769700} fill="var(--fill-0, #2F3438)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function CircleBadge1() {
  return (
    <div className="bg-[#f77] relative rounded-[34px] shrink-0 size-[20px]" data-name="CircleBadge">
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[16px] left-[6px] not-italic right-[6px] text-[12px] text-center text-white top-[calc(50%-8px)] tracking-[-0.3px]">2</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron_right_18">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron_right_18">
          <path clipRule="evenodd" d={svgPaths.p1674b80} fill="var(--fill-0, #2F3438)" fillRule="evenodd" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Icon1 />
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2f3438] text-[16px] tracking-[-0.3px]">
        <p className="leading-[20px] whitespace-pre-wrap">채팅</p>
      </div>
      <CircleBadge1 />
      <ChevronRight1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex font-['SF_Pro_Display:Regular',sans-serif] gap-[4px] items-center not-italic relative shrink-0 tracking-[-0.3px] w-full">
      <div className="flex flex-[1_0_0] flex-col h-[20px] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#2f3438] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">민익스프레스에서 견적서를 보냈습니다.</p>
      </div>
      <p className="leading-[16px] relative shrink-0 text-[#c2c8cc] text-[12px] text-center">오전 10:05</p>
    </div>
  );
}

function ChatBlock1() {
  return (
    <div className="bg-[#f7f9fa] relative rounded-[8px] shrink-0 w-full" data-name="Chat/Block">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Frame26 />
        <Frame27 />
      </div>
    </div>
  );
}

function ProOutline1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="pro_outline_18">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="pro_outline_18">
          <g id="-">
            <path d={svgPaths.p2b4fbb80} fill="var(--fill-0, #2F3438)" />
            <path d={svgPaths.p18352670} fill="var(--fill-0, #2F3438)" />
            <path d={svgPaths.p3925a700} fill="var(--fill-0, #2F3438)" />
            <path d={svgPaths.p1b477500} fill="var(--fill-0, #2F3438)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextButton2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="TextButton">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[5px] relative w-full">
          <ProOutline1 />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">업체 보기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-px relative w-[30px]" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function CallOutline1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="call_outline_18">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="call_outline_18">
          <path d={svgPaths.p1d9ce100} fill="var(--fill-0, #2F3438)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function TextButton3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="TextButton">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[5px] relative w-full">
          <CallOutline1 />
          <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">전화하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <TextButton2 />
      <div className="flex h-[30px] items-center justify-center relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Divider1 />
        </div>
      </div>
      <TextButton3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[343px]">
      <div aria-hidden="true" className="absolute border border-[#eaedef] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame25 />
      <Frame31 />
      <ChatBlock1 />
      <Frame28 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Callout />
      <Frame17 />
      <Frame24 />
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-[10px] relative shrink-0 w-[375px]" data-name="Divider">
      <div className="absolute bg-[#f7f9fa] inset-0" data-name="cell/divider/h10" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">신청일자</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">2022년 6월 25일 23:15</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">고객명</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">이성민</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">이사종류</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">가정이사</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">이사예정일</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">2022년 8월 12일 수요일</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">연락처</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">010-1234-5678</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Display:Regular',sans-serif] gap-[16px] items-start relative shrink-0 whitespace-pre-wrap">
      <Frame5 />
      <Frame6 />
      <Frame15 />
      <Frame16 />
      <Frame14 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.3px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[#2f3438]">내 신청정보</p>
      <Frame33 />
    </div>
  );
}

function Divider3() {
  return (
    <div className="h-px relative shrink-0 w-[343px]" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">주소</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">서울 서초구 서초대로74길 4 삼성생명서초타워 25층</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">엘레베이터</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">있음</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">평수</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">40평대</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Display:Regular',sans-serif] gap-[16px] items-start relative shrink-0">
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.3px] whitespace-pre-wrap">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[#2f3438] w-[173px]">출발지</p>
      <Frame34 />
    </div>
  );
}

function Divider4() {
  return (
    <div className="h-px relative shrink-0 w-[343px]" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">주소</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">서울 서초구 서초대로74길 4 삼성생명서초타워 25층</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">엘레베이터</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">있음</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">평수</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">40평대</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#828c94] w-[77px]">가구인원수</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#2f3438]">5인 이상</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Display:Regular',sans-serif] gap-[16px] items-start relative shrink-0">
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.3px] whitespace-pre-wrap">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[#2f3438] w-[173px]">도착지</p>
      <Frame37 />
    </div>
  );
}

function Divider5() {
  return (
    <div className="h-px relative shrink-0 w-[343px]" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f7f9fa] content-stretch flex items-start p-[16px] relative rounded-[4px] shrink-0 w-[343px]" data-name="Textarea">
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative self-stretch text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">고객이 입력한 내용</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] w-[173px] whitespace-pre-wrap">메모</p>
      <Textarea />
    </div>
  );
}

function Frame39() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[20px] items-start ml-0 mt-0 relative row-1">
      <Frame35 />
      <Divider3 />
      <Frame36 />
      <Divider4 />
      <Frame40 />
      <Divider5 />
      <Frame38 />
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[60px] place-items-start relative row-1">
      <Frame39 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2f3438] text-[20px] tracking-[-0.3px]">신청 내역</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <Frame3 />
    </div>
  );
}

function xTitleCompact() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[10px] h-[60px] items-center ml-0 mt-0 py-[20px] relative row-1 w-[343px]" data-name="(사용X)TitleCompact">
      <Left />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2 />
      <xTitleCompact />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-0 top-[173px]">
      <Frame20 />
      <Divider2 />
      <Group3 />
    </div>
  );
}

function IcO2OhomeMoving() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Ic_O2Ohome_moving">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Ic_O2Ohome_moving">
          <g id="-">
            <path d={svgPaths.p139cb300} fill="#35C5F0" />
            <path d={svgPaths.p36c3aa00} fill="#2A9EC0" />
            <path d={svgPaths.p1dd39100} fill="#C2EEFA" />
            <path clipRule="evenodd" d={svgPaths.p32eddc80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p6674200} fill="#218BD1" />
            <path d={svgPaths.p2aad2970} fill="#1A6FA7" />
            <path d={svgPaths.p34442ef2} fill="#BCDCF1" />
            <path clipRule="evenodd" d={svgPaths.p7ccb580} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14a42080} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p374dd180} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p3b1ce700} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p162aba00} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p262af080} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p8c36c80} fill="white" />
            <path d={svgPaths.p3873800} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p193b2e00} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative tracking-[-0.3px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#2f3438] text-[24px]">이사</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#828c94] text-[14px]">6월 25일 신청</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[99px] w-[343px]">
      <IcO2OhomeMoving />
      <Frame32 />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="[mobile] 신청내역상세-매칭중">
      <Group1 />
      <Frame4 />
      <Frame18 />
      <Frame29 />
    </div>
  );
}