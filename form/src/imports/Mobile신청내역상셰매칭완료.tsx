import svgPaths from "./svg-7mh8wdwa1v";
import { imgColorSet, imgColorSet1, imgIconFaceSmilingSafetyHelmet } from "./svg-5qi5g";

function Battery() {
  return (
    <div className="absolute h-[11.333px] right-[14.67px] top-[17.33px] w-[24.328px]" data-name="Battery">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, #141414)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, #141414)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, #141414)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[13px] w-[54px]" data-name="Time Style">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[0] left-[27px] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-7.5px)] tracking-[-0.28px] w-[54px] whitespace-pre-wrap">
        <span className="leading-[normal]">9:4</span>
        <span className="leading-[normal]">1</span>
      </p>
    </div>
  );
}

function IPhoneXStatusBarsStatusBarBlack() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="iPhone X/Status Bars/Status Bar (Black)">
      <Battery />
      <div className="absolute inset-[39.39%_11.74%_35.69%_84.18%]" data-name="Wifi">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
          <path d={svgPaths.p3d78f640} fill="var(--fill-0, #141414)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Cellular Connection">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, #141414)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function LeftIcons() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Left Icons">
      <div className="content-stretch flex items-center justify-center max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0 size-[24px]" data-name="size=24">
        <div className="absolute inset-[10.67%_6.67%_10.72%_7.92%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 18.8667">
            <path clipRule="evenodd" d={svgPaths.p3bee1d00} fill="var(--fill-0, #2F3438)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightIcons() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center relative shrink-0" data-name="Right Icons">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="Render Mode=monochrome,Weight=medium">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.85px_2.55px] mask-size-[18.26px_18.4px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Center() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[44px] items-center justify-center left-1/2 top-1/2" data-name="Center">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[16px] text-center text-ellipsis tracking-[-0.3px]">이사 매칭업체</p>
    </div>
  );
}

function TopNavigationSection() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="TopNavigation Section">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <LeftIcons />
          <RightIcons />
          <Center />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-center justify-center left-[841px] rounded-[4px] size-[160px] top-[758px]">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_5px_0px_rgba(63,71,77,0.05)]" />
      <div className="overflow-clip relative shrink-0 size-[49px]" data-name="won_48">
        <div className="absolute inset-[20.13%_8.33%]" data-name="-">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8333 29.2701">
            <g id="-">
              <path d={svgPaths.p5ae3680} fill="var(--fill-0, #141414)" />
              <path d={svgPaths.p397d2b00} fill="var(--fill-0, #141414)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Apple_SD_Gothic_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px]">광고상품소개</p>
    </div>
  );
}

function Vector() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Vector">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <g id="Vector">
          <path clipRule="evenodd" d={svgPaths.p3eb1b6f0} fill="var(--fill-0, #0AA5FF)" fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="badge">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[13px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] w-[12px]" data-name="[Asset] Ohouse Standard Symbol">
        <Vector />
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="title">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#141414] text-[14px] tracking-[-0.3px]">추가금이나 분실 걱정된다면?</p>
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Badge">
        <Badge />
        <p className="font-['Pretendard:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#00a1ff] text-[15px] tracking-[-0.3px]">오늘의집 책임보장</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="button">
      <div className="content-stretch flex flex-col h-[16px] items-center justify-center relative shrink-0" data-name="[Icon] Chevron Right">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.875px_2.8px] mask-size-[10.95px_18.4px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet1}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <Title1 />
      <Button />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="bg-[#f0f8fc] relative rounded-[8px] shrink-0 w-full" data-name="Tooltip">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
        <Title />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] px-[16px] relative shrink-0 w-[375px]" data-name="section">
      <Tooltip />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="status">
      <div className="bg-[#00a1ff] content-stretch flex items-center justify-center max-h-[24px] min-h-[24px] px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="🌀 Square Badge">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px]">매칭완료</p>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px]">오전 9:12</p>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Rating">
      <div className="content-stretch flex items-center max-h-[12px] max-w-[12px] min-h-[12px] min-w-[12px] relative shrink-0 size-[12px]" data-name="🌀 starFilled">
        <div className="absolute inset-[9.84%_8.54%_7.63%_8.54%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.95085 9.90333">
            <g id="Vector">
              <path d={svgPaths.p2c439d00} fill="var(--fill-0, #0AA5FF)" />
              <path clipRule="evenodd" d={svgPaths.p402b680} fill="var(--fill-0, #0AA5FF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#2f3438] text-[13px] tracking-[-0.3px]">5.0</p>
    </div>
  );
}

function ReviewsAndContracts() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Reviews and Contracts">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[0px] text-[13px] tracking-[-0.3px]">
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">리뷰</span>
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">{` `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[18px]">24</span>
      </p>
    </div>
  );
}

function RatingAndReviews() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-start relative shrink-0 w-[311px]" data-name="Rating and Reviews">
      <Rating />
      <ReviewsAndContracts />
    </div>
  );
}

function Vector1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Vector">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <g id="Vector">
          <path clipRule="evenodd" d={svgPaths.p3eb1b6f0} fill="var(--fill-0, #0AA5FF)" fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="badge">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[13px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] w-[12px]" data-name="[Asset] Ohouse Standard Symbol">
        <Vector1 />
      </div>
    </div>
  );
}

function BadgeLogo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="badge_logo">
      <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-name="Badge">
        <Badge1 />
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#00a1ff] text-[13px] tracking-[-0.3px]">오늘의집 책임보장</p>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#828c94] text-[12px] tracking-[-0.3px]">파손 보험, A/S 서비스</p>
    </div>
  );
}

function BlockInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Block/info">
      <RatingAndReviews />
      <BadgeLogo />
    </div>
  );
}

function BlockBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Block/Bottom">
      <BlockInfo />
    </div>
  );
}

function Mask() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="renderMode=monochrome,weight=semibold">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconFaceSmilingSafetyHelmet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Mask1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="renderMode=monochrome,weight=semibold">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconFaceSmilingSafetyHelmet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center justify-center relative shrink-0 w-full" data-name="button">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="🔸 Left Icon">
              <Mask />
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[20px]">업체 보기</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center max-h-[18px] relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-full">
          <div className="bg-[#ededed] h-full relative w-[18px]" data-name="🌀 Divider">
            <div className="max-h-[inherit] size-full" />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="🔸 Left Icon">
              <Mask1 />
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[20px]">전화하기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="contents">
      <Status />
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[311px]" data-name="info">
        <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Block/Title">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[18px] tracking-[-0.3px]">영구이사</p>
        </div>
        <BlockBottom />
      </div>
      <Button1 />
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="status">
      <div className="bg-[#00a1ff] content-stretch flex items-center justify-center max-h-[24px] min-h-[24px] px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="🌀 Square Badge">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px]">매칭완료</p>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px]">오늘</p>
    </div>
  );
}

function Rating1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Rating">
      <div className="content-stretch flex items-center max-h-[12px] max-w-[12px] min-h-[12px] min-w-[12px] relative shrink-0 size-[12px]" data-name="🌀 starFilled">
        <div className="absolute inset-[9.84%_8.54%_7.63%_8.54%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.95085 9.90333">
            <g id="Vector">
              <path d={svgPaths.p2c439d00} fill="var(--fill-0, #0AA5FF)" />
              <path clipRule="evenodd" d={svgPaths.p402b680} fill="var(--fill-0, #0AA5FF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#2f3438] text-[13px] tracking-[-0.3px]">5.0</p>
    </div>
  );
}

function ReviewsAndContracts1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Reviews and Contracts">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[0px] text-[13px] tracking-[-0.3px]">
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">리뷰</span>
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">{` `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[18px]">24</span>
      </p>
    </div>
  );
}

function RatingAndReviews1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-start relative shrink-0 w-[311px]" data-name="Rating and Reviews">
      <Rating1 />
      <ReviewsAndContracts1 />
    </div>
  );
}

function Vector2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Vector">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <g id="Vector">
          <path clipRule="evenodd" d={svgPaths.p3eb1b6f0} fill="var(--fill-0, #0AA5FF)" fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="badge">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[13px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] w-[12px]" data-name="[Asset] Ohouse Standard Symbol">
        <Vector2 />
      </div>
    </div>
  );
}

function BadgeLogo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="badge_logo">
      <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-name="Badge">
        <Badge2 />
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#00a1ff] text-[13px] tracking-[-0.3px]">오늘의집 책임보장</p>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#828c94] text-[12px] tracking-[-0.3px]">파손 보험, A/S 서비스</p>
    </div>
  );
}

function BlockInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Block/info">
      <RatingAndReviews1 />
      <BadgeLogo1 />
    </div>
  );
}

function BlockBottom1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Block/Bottom">
      <BlockInfo1 />
    </div>
  );
}

function Mask2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="renderMode=monochrome,weight=semibold">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconFaceSmilingSafetyHelmet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Mask3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="renderMode=monochrome,weight=semibold">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconFaceSmilingSafetyHelmet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center justify-center relative shrink-0 w-full" data-name="button">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="🔸 Left Icon">
              <Mask2 />
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[20px]">업체 보기</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center max-h-[18px] relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-full">
          <div className="bg-[#ededed] h-full relative w-[18px]" data-name="🌀 Divider">
            <div className="max-h-[inherit] size-full" />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="🔸 Left Icon">
              <Mask3 />
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[20px]">전화하기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="contents">
      <Status1 />
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[311px]" data-name="info">
        <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Block/Title">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[18px] tracking-[-0.3px]">썬이삿짐센터</p>
        </div>
        <BlockBottom1 />
      </div>
      <Button2 />
    </div>
  );
}

function Status2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="status">
      <div className="bg-[#00a1ff] content-stretch flex items-center justify-center max-h-[24px] min-h-[24px] px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="🌀 Square Badge">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px]">매칭완료</p>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px]">오늘</p>
    </div>
  );
}

function Rating2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Rating">
      <div className="content-stretch flex items-center max-h-[12px] max-w-[12px] min-h-[12px] min-w-[12px] relative shrink-0 size-[12px]" data-name="🌀 starFilled">
        <div className="absolute inset-[9.84%_8.54%_7.63%_8.54%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.95085 9.90333">
            <g id="Vector">
              <path d={svgPaths.p2c439d00} fill="var(--fill-0, #0AA5FF)" />
              <path clipRule="evenodd" d={svgPaths.p402b680} fill="var(--fill-0, #0AA5FF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#2f3438] text-[13px] tracking-[-0.3px]">5.0</p>
    </div>
  );
}

function ReviewsAndContracts2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Reviews and Contracts">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[0px] text-[13px] tracking-[-0.3px]">
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">리뷰</span>
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">{` `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[18px]">24</span>
      </p>
    </div>
  );
}

function RatingAndReviews2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-start relative shrink-0 w-[311px]" data-name="Rating and Reviews">
      <Rating2 />
      <ReviewsAndContracts2 />
    </div>
  );
}

function BlockInfo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block/info">
      <RatingAndReviews2 />
    </div>
  );
}

function BlockBottom2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Block/Bottom">
      <BlockInfo2 />
    </div>
  );
}

function Mask4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="renderMode=monochrome,weight=semibold">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconFaceSmilingSafetyHelmet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Mask5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="renderMode=monochrome,weight=semibold">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconFaceSmilingSafetyHelmet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center justify-center relative shrink-0 w-full" data-name="button">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="🔸 Left Icon">
              <Mask4 />
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[20px]">업체 보기</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center max-h-[18px] relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-full">
          <div className="bg-[#ededed] h-full relative w-[18px]" data-name="🌀 Divider">
            <div className="max-h-[inherit] size-full" />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="🔸 Left Icon">
              <Mask5 />
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[20px]">전화하기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contents2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="contents">
      <Status2 />
      <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[311px]" data-name="info">
        <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="info/Title">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[18px] tracking-[-0.3px]">티익스프레스</p>
        </div>
        <BlockBottom2 />
      </div>
      <Button3 />
    </div>
  );
}

function Status3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="status">
      <div className="bg-[#00a1ff] content-stretch flex items-center justify-center max-h-[24px] min-h-[24px] px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="🌀 Square Badge">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.3px]">매칭완료</p>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px]">오늘</p>
    </div>
  );
}

function Rating3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Rating">
      <div className="content-stretch flex items-center max-h-[12px] max-w-[12px] min-h-[12px] min-w-[12px] relative shrink-0 size-[12px]" data-name="🌀 starFilled">
        <div className="absolute inset-[9.84%_8.54%_7.63%_8.54%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 9.95085 9.90333">
            <g id="Vector">
              <path d={svgPaths.p2c439d00} fill="var(--fill-0, #0AA5FF)" />
              <path clipRule="evenodd" d={svgPaths.p402b680} fill="var(--fill-0, #0AA5FF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#2f3438] text-[13px] tracking-[-0.3px]">5.0</p>
    </div>
  );
}

function ReviewsAndContracts3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Reviews and Contracts">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[0px] text-[13px] tracking-[-0.3px]">
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">리뷰</span>
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">{` `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[18px]">24</span>
      </p>
    </div>
  );
}

function RatingAndReviews3() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-start relative shrink-0 w-[311px]" data-name="Rating and Reviews">
      <Rating3 />
      <ReviewsAndContracts3 />
    </div>
  );
}

function BlockInfo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block/info">
      <RatingAndReviews3 />
    </div>
  );
}

function BlockBottom3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Block/Bottom">
      <BlockInfo3 />
    </div>
  );
}

function Mask6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="renderMode=monochrome,weight=semibold">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconFaceSmilingSafetyHelmet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Mask7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="renderMode=monochrome,weight=semibold">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconFaceSmilingSafetyHelmet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-center justify-center relative shrink-0 w-full" data-name="button">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="🔸 Left Icon">
              <Mask6 />
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[20px]">업체 보기</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center max-h-[18px] relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-full">
          <div className="bg-[#ededed] h-full relative w-[18px]" data-name="🌀 Divider">
            <div className="max-h-[inherit] size-full" />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="🔸 Left Icon">
              <Mask7 />
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[20px]">전화하기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contents3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="contents">
      <Status3 />
      <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[311px]" data-name="info">
        <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="info/Title">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[18px] tracking-[-0.3px]">깔끔이사</p>
        </div>
        <BlockBottom3 />
      </div>
      <Button4 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="List">
      <div className="bg-white content-stretch flex flex-col items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <Contents />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <Contents1 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <Contents2 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <Contents3 />
      </div>
    </div>
  );
}

function SectionList() {
  return (
    <div className="content-stretch flex flex-col items-center py-[16px] relative shrink-0" data-name="Section_List">
      <List />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">신청일자</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">2025년 1월 25일 23:15</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">고객명</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">문지선</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">이사종류</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">가정이사</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">이사예정일</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">2025년 3월 25일 수요일</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">연락처</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">010-1234-5678</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[16px] items-start relative shrink-0 text-[15px] whitespace-pre-wrap">
      <Frame1 />
      <Frame2 />
      <Frame11 />
      <Frame12 />
      <Frame10 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 tracking-[-0.3px]" data-name="section">
      <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] text-[16px]">내 신청정보</p>
      <Frame13 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">주소</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">서울 서초구 서초대로74길 4 삼성생명서초타워 25층</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">엘레베이터</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">있음</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">평수</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">40평대</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[16px] items-start relative shrink-0 text-[15px]">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 tracking-[-0.3px] whitespace-pre-wrap" data-name="section">
      <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] text-[16px] w-[173px]">출발지</p>
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">주소</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">서울 서초구 서초대로74길 4 삼성생명서초타워 25층</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">엘레베이터</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">있음</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">평수</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">40평대</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">가구인원수</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">5인 이상</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[16px] items-start relative shrink-0 text-[15px]">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 tracking-[-0.3px] whitespace-pre-wrap" data-name="section">
      <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] text-[16px] w-[173px]">도착지</p>
      <Frame15 />
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="section">
      <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-[173px] whitespace-pre-wrap">메모</p>
      <div className="bg-[#f5f5f5] content-stretch flex items-start p-[16px] relative rounded-[4px] shrink-0 w-[343px]" data-name="Textarea">
        <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="flex-[1_0_0] font-['Apple_SD_Gothic_Neo:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative self-stretch text-[#141414] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">고객이 입력한 내용</p>
      </div>
    </div>
  );
}

function Information() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] relative shrink-0" data-name="information">
      <Section1 />
      <div className="h-px relative shrink-0 w-[343px]" data-name="Divider">
        <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
      </div>
      <Section2 />
      <div className="h-px relative shrink-0 w-[343px]" data-name="Divider">
        <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
      </div>
      <Section3 />
      <div className="h-px relative shrink-0 w-[343px]" data-name="Divider">
        <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
      </div>
      <Section4 />
    </div>
  );
}

function SectionInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section_Info">
      <div className="content-stretch flex items-center p-[16px] relative shrink-0 w-[375px]" data-name="Card/Title">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[17px] tracking-[-0.3px]">신청내역</p>
      </div>
      <Information />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[89px]" data-name="Container">
      <Section />
      <SectionList />
      <div className="h-[10px] relative shrink-0 w-[375px]" data-name="Divider">
        <div className="absolute bg-[#f7f9fa] inset-0" data-name="cell/divider/h10" />
      </div>
      <SectionInfo />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="[Mobile] 신청내역상셰_매칭완료">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[375px]" data-name="TOP">
        <div className="bg-white h-[44px] shrink-0 sticky top-0 w-full" data-name="Statusbar">
          <IPhoneXStatusBarsStatusBarBlack />
        </div>
        <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="🌀🤖 Standard Top Navigation">
          <TopNavigationSection />
        </div>
      </div>
      <Frame />
      <Container />
    </div>
  );
}