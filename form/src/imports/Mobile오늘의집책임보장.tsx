import svgPaths from "./svg-cuoqkfzig2";
import img2026021940534RemovebgPreview1 from "figma:asset/fb8f98eadc29fd8000636e038c39f6d5c9854635.png";
import { imgColorSet, imgColorSet1 } from "./svg-afjjv";

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
      <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[16px] text-center text-ellipsis tracking-[-0.3px]">오늘의집 책임보장</p>
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

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-start left-1/2">
      <div className="bg-[rgba(255,255,255,0)] h-[34px] relative shrink-0 w-[375px]" data-name="Indicator">
        <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#141414] text-[24px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">추가금과 분실 걱정된다면?</p>
        <p>오늘의집 책임보장</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-center left-1/2 top-[60px] w-[311px]" data-name="Title">
      <Frame2 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">책임보장 업체를 선택하면 이사 중 발생한 파손이나 지연을 오늘의집이 중재하고 A/S를 지원해요.</p>
    </div>
  );
}

function Atf() {
  return (
    <div className="h-[458px] relative shrink-0 w-full" data-name="ATF">
      <div className="absolute left-[115px] rounded-[12px] size-[146px] top-[229px]" data-name="스크린샷_2026-02-19_오후_4.05.34-removebg-preview 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-[137.55%] left-[-19.23%] max-w-none top-[-15.89%] w-[142.31%]" src={img2026021940534RemovebgPreview1} />
          </div>
          <div className="absolute bg-[rgba(11,178,255,0.15)] inset-0 rounded-[12px]" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+0.5px)] size-[24px] top-[419px]" data-name="[Icon] Chevron Down">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.95px_6.85px] mask-size-[18.1px_10.65px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet1}')` }}>
          <div className="absolute bg-[#8c8c8c] inset-0" data-name="Color" />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[#e8faff] h-[458px] left-0 to-white top-0 w-[375px]" />
      <Title />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#141414] text-[24px] text-center tracking-[-0.3px]">어떤 문제를 어떻게 해결하나요?</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[311px]" data-name="Title">
      <Frame3 />
      <div className="font-['Pretendard:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">이사 중 빈번히 발생하는 골치 아픈 문제들,</p>
        <p>책임보장으로 한큐에 해결해요.</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(9,11,43,0.05)] gap-[10px] inset-[0_0_55.76%_0] items-start justify-center not-italic p-[20px] rounded-[12px] text-[#141414] to-[rgba(0,0,0,0)] tracking-[-0.3px] whitespace-nowrap" data-name="Title">
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[28px] relative shrink-0 text-[20px]">
        <p className="mb-0">이사 도중 가구, 귀중품</p>
        <p>파손이나 분실이 발생한다면?</p>
      </div>
      <div className="font-['Pretendard:Regular',sans-serif] leading-[18px] relative shrink-0 text-[14px]">
        <p className="mb-0">이사 중 소중한 가구나 귀중품에 손상 금액만큼</p>
        <p>보험을 통해 배상해드려요.</p>
      </div>
    </div>
  );
}

function Usp({ className }: { className?: string }) {
  return (
    <div className={className || "h-[321px] relative shrink-0 w-[327px]"} data-name="USP01">
      <div className="absolute bg-[#ecf2f7] inset-0 rounded-[12px]" />
      <Title2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(9,11,43,0.05)] gap-[10px] inset-[0_0_55.76%_0] items-start justify-center not-italic p-[20px] rounded-[12px] text-[#141414] to-[rgba(0,0,0,0)] tracking-[-0.3px] whitespace-nowrap" data-name="Title">
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[28px] relative shrink-0 text-[20px]">
        <p className="mb-0">예상치 못한</p>
        <p>추가금이 발생한다면?</p>
      </div>
      <div className="font-['Pretendard:Regular',sans-serif] leading-[18px] relative shrink-0 text-[14px]">
        <p className="mb-0">현장에서의 불합리한 추가 비용 요구는 없이,</p>
        <p>계약 시 안내받은 견적 그대로, 정직하게</p>
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(9,11,43,0.05)] gap-[10px] inset-[0_0_55.76%_0] items-start justify-center not-italic p-[20px] rounded-[12px] text-[#141414] to-[rgba(0,0,0,0)] tracking-[-0.3px] whitespace-nowrap" data-name="Title">
      <div className="font-['Pretendard:SemiBold',sans-serif] leading-[28px] relative shrink-0 text-[20px]">
        <p className="mb-0">{`계약했던  예약 일정이`}</p>
        <p>갑자기 취소된다면?</p>
      </div>
      <div className="font-['Pretendard:Regular',sans-serif] leading-[18px] relative shrink-0 text-[14px]">
        <p className="mb-0">약속된 일정을 철저히 준수하며,</p>
        <p>위반 시 확실한 피해 보상을 약속해요.</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="list">
      <Usp />
      <div className="h-[321px] relative shrink-0 w-[327px]" data-name="USP01">
        <div className="absolute bg-[#ecf2f7] inset-0 rounded-[12px]" />
        <Title3 />
      </div>
      <div className="h-[321px] relative shrink-0 w-[327px]" data-name="USP01">
        <div className="absolute bg-[#ecf2f7] inset-0 rounded-[12px]" />
        <Title4 />
      </div>
    </div>
  );
}

function Component02Usp() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="02_USP">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center px-[24px] py-[60px] relative w-full">
          <Title1 />
          <List />
        </div>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Title">
      <div className="font-['Pretendard:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[26px] text-black text-center tracking-[-1px] w-[285.069px] whitespace-pre-wrap">
        <p className="mb-0">따로 가입할 필요 없이,</p>
        <p>책임보상 업체와 계약하세요</p>
      </div>
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
      <p className="font-['Pretendard:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#2f3438] text-[13px] tracking-[-0.3px]">4.8</p>
    </div>
  );
}

function ReviewsAndContracts() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Reviews and Contracts">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[0px] text-[13px] tracking-[-0.3px]">
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">리뷰</span>
        <span className="font-['Pretendard:Regular',sans-serif] leading-[18px]">{` `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[18px]">15</span>
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

function BadgeLogo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="badge_logo">
      <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-name="Badge">
        <Badge />
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

function Contents1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="contents">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[311px]" data-name="info">
        <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Block/Title">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[18px] tracking-[-0.3px]">영구이사</p>
        </div>
        <BlockBottom />
      </div>
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

function BadgeLogo1() {
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

function Contents2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="contents">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[311px]" data-name="info">
        <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Block/Title">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[18px] tracking-[-0.3px]">깔끔이사</p>
        </div>
        <BlockBottom1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[268px]" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <Contents1 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] shrink-0 w-[268px]" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <Contents2 />
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-[326.042px]" data-name="contents">
      <Title5 />
      <Frame />
    </div>
  );
}

function Component01Intro() {
  return (
    <div className="bg-[#f7f9fa] relative shrink-0 w-full" data-name="01_intro">
      <div className="content-stretch flex flex-col items-start pb-[200px] pt-[60px] px-[24px] relative w-full">
        <Contents />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[88px] w-[375px]" data-name="Container">
      <Atf />
      <Component02Usp />
      <Component01Intro />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="[Mobile] 오늘의집 책임보장">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[375px]" data-name="TOP">
        <div className="bg-white h-[44px] shrink-0 sticky top-0 w-full" data-name="Statusbar">
          <IPhoneXStatusBarsStatusBarBlack />
        </div>
        <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="🌀🤖 Standard Top Navigation">
          <TopNavigationSection />
        </div>
      </div>
      <Frame1 />
      <Container />
    </div>
  );
}