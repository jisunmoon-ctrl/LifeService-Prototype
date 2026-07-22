import svgPaths from "./svg-jus8ni5bg3";
import { imgColorSet, imgColorSet1, imgColorSet2, imgColorSet3, imgColorSet4, imgColorSet5 } from "./svg-7ni3h";

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative text-[#141414] tracking-[-0.3px]" data-name="title">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[24px] w-[289px]">이사 예정일을 알려주세요</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[24px] relative shrink-0 text-[15px] w-[375px]">확정된 날짜를 선택해주세요.</p>
    </div>
  );
}

function YearMonth() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Year & Month">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[16px] text-ellipsis text-left tracking-[-0.3px] whitespace-nowrap">2026년 5월</p>
    </div>
  );
}

function Button() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <YearMonth />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[12px]" data-name="[Icon] Chevron Down">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.55px_6.45px] mask-size-[18.9px_11.45px]" style={{ maskImage: `url('${imgColorSet}')` }} data-name="Color Set">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] inset-[0_-0.19%_0_0.19%] rounded-[8px]" data-name="Toggle View Button State" />
    </button>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Left">
      <Button />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Right">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Arrow Button (Left)">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="[Icon] Chevron Left">
          <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6px_2.65px] mask-size-[11.25px_18.7px]" style={{ maskImage: `url('${imgColorSet1}')` }} data-name="Color Set">
            <div className="absolute bg-[#141414] inset-0" data-name="Color" />
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] cursor-pointer inset-0 rounded-[8px]" data-name="Arrow Button State (Left)" />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Arrow Button (Right)">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="[Icon] Chevron Right">
          <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.725px_2.65px] mask-size-[11.25px_18.7px]" style={{ maskImage: `url('${imgColorSet2}')` }} data-name="Color Set">
            <div className="absolute bg-[#141414] inset-0" data-name="Color" />
          </div>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] cursor-pointer inset-0 rounded-[8px]" data-name="Arrow Button State (Right)" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header">
      <Left />
      <Right />
    </div>
  );
}

function Weekdays() {
  return (
    <div className="font-['Pretendard:SemiBold',sans-serif] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] text-center tracking-[-0.3px] w-full whitespace-nowrap" data-name="Weekdays">
      <p className="col-1 justify-self-center relative row-1 self-center shrink-0">일</p>
      <p className="col-2 justify-self-center relative row-1 self-center shrink-0">월</p>
      <p className="col-3 justify-self-center relative row-1 self-center shrink-0">화</p>
      <p className="col-4 justify-self-center relative row-1 self-center shrink-0">수</p>
      <p className="col-5 justify-self-center relative row-1 self-center shrink-0">목</p>
      <p className="col-6 justify-self-center relative row-1 self-center shrink-0">금</p>
      <p className="col-7 justify-self-center relative row-1 self-center shrink-0">토</p>
    </div>
  );
}

function Circle() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle1() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle2() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle3() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle4() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle5() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle6() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle7() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle8() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle9() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle10() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle11() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle12() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle13() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle14() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle15() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle16() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle17() {
  return <div className="-translate-x-1/2 absolute bg-[#141414] bottom-0 left-1/2 rounded-[9999px] top-0 w-[40px]" data-name="Circle" />;
}

function Circle18() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle19() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle20() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle21() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle22() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle23() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle24() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle25() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle26() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle27() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle28() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle29() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle30() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle31() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle32() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle33() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Circle34() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] bottom-0 left-1/2 top-0 w-[40px]" data-name="Circle" />;
}

function Days() {
  return (
    <div className="gap-y-[4px] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[repeat(5,fit-content(100%))] overflow-clip relative shrink-0 w-full" data-name="Days">
      <button className="col-1 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] opacity-60 relative row-1 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-1/2 not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">26</p>
      </button>
      <button className="col-2 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] opacity-60 relative row-1 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle1 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-1/2 not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">27</p>
      </button>
      <button className="col-3 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] opacity-60 relative row-1 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle2 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-1/2 not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">28</p>
      </button>
      <button className="col-4 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-1 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle3 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">1</p>
      </button>
      <button className="col-5 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-1 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle4 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">2</p>
      </button>
      <button className="col-6 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-1 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle5 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">3</p>
      </button>
      <button className="col-7 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-1 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle6 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">4</p>
      </button>
      <button className="col-1 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-2 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle7 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">5</p>
      </button>
      <button className="col-2 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-2 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle8 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">6</p>
      </button>
      <button className="col-3 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-2 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle9 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">7</p>
      </button>
      <button className="col-4 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-2 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle10 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">8</p>
      </button>
      <button className="col-5 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-2 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle11 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">9</p>
      </button>
      <button className="col-6 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-2 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle12 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">10</p>
      </button>
      <button className="col-7 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-2 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle13 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">11</p>
      </button>
      <button className="col-1 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-3 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle14 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">12</p>
      </button>
      <button className="col-2 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-3 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle15 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">13</p>
      </button>
      <button className="col-3 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-3 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle16 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">14</p>
      </button>
      <div className="col-4 content-stretch flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-3 shrink-0" data-name="_Calendar / Calendar Day">
        <Circle17 />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[5px] top-[calc(50%+13.5px)]" data-name="Dot">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <circle cx="2.5" cy="2.5" fill="var(--fill-0, white)" id="Dot" r="2.5" />
          </svg>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[18px] left-1/2 not-italic text-[14px] text-center text-white top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">15</p>
      </div>
      <button className="col-5 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-3 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle18 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">16</p>
      </button>
      <button className="col-6 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-3 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle19 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">17</p>
      </button>
      <button className="col-7 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-3 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle20 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">18</p>
      </button>
      <button className="col-1 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-4 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle21 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">19</p>
      </button>
      <button className="col-2 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-4 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle22 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">20</p>
      </button>
      <button className="col-3 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-4 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle23 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">21</p>
      </button>
      <button className="col-4 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-4 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle24 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">22</p>
      </button>
      <button className="col-5 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-4 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle25 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">23</p>
      </button>
      <button className="col-6 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-4 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle26 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">24</p>
      </button>
      <button className="col-7 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-4 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle27 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">25</p>
      </button>
      <button className="col-1 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-5 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle28 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">26</p>
      </button>
      <button className="col-2 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-5 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle29 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">27</p>
      </button>
      <button className="col-3 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-5 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle30 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">28</p>
      </button>
      <button className="col-4 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-5 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle31 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">29</p>
      </button>
      <button className="col-5 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-5 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle32 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">30</p>
      </button>
      <button className="col-6 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] relative row-5 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle33 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[calc(50%+0.13px)] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">31</p>
      </button>
      <button className="col-7 content-stretch cursor-pointer flex h-[40px] items-center justify-center justify-self-stretch max-h-[40px] min-h-[40px] min-w-[40px] opacity-60 relative row-5 shrink-0" data-name="_Calendar / Calendar Day">
        <div className="absolute inset-0" data-name="State">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <Circle34 />
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-1/2 not-italic text-[#141414] text-[14px] text-center top-[calc(50%-9px)] tracking-[-0.3px] whitespace-nowrap">1</p>
      </button>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Body">
      <Weekdays />
      <Days />
    </div>
  );
}

function Cotainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cotainer">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="content-stretch flex flex-col items-start max-w-[440px] min-w-[280px] relative shrink-0 w-full" data-name="🏗️🌀 Calendar">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Day View">
            <Header />
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 top-[-369px] w-[375px]" data-name="Container">
      <div className="relative shrink-0 w-full" data-name="Form/Title">
        <div className="content-stretch flex gap-[10px] items-start px-[16px] py-[20px] relative size-full">
          <Title />
        </div>
      </div>
      <Cotainer />
    </div>
  );
}

function Row() {
  return (
    <div className="content-start flex flex-wrap gap-[2px] items-start relative shrink-0 w-full" data-name="row">
      <div className="bg-[#f5f5f5] flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#141414] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">12:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">1:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">2:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">3:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">4:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">5:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">6:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">7:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">8:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">9:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">10:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">11:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex items-center pb-[8px] relative shrink-0 w-[72px]" data-name="label">
        <p className="flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[24px] min-w-px not-italic relative text-[#141414] text-[15px] tracking-[-0.3px]">오전</p>
      </div>
      <Row />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-start flex flex-wrap gap-[2px] items-start relative shrink-0 w-full" data-name="row">
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">12:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">1:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">2:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">3:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">4:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">5:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">6:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">7:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">8:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">9:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">10:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] max-w-[240px] min-w-[72px] relative rounded-[4px]" data-name="option">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[15px] text-center tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[24px]">11:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex items-center pb-[8px] relative shrink-0 w-[72px]" data-name="label">
        <p className="flex-[1_0_0] font-['Pretendard:Medium',sans-serif] leading-[24px] min-w-px not-italic relative text-[#141414] text-[15px] tracking-[-0.3px]">오후</p>
      </div>
      <Row1 />
    </div>
  );
}

function Option1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16px] relative shrink-0 w-full" data-name="Option">
      <List1 />
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pb-[16px] relative shrink-0 w-full" data-name="Option">
      <List />
      <Option1 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] top-[94px] w-[375px]" data-name="Section">
      <div className="content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full" data-name="option/Title">
        <p className="flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[24px] min-w-px not-italic relative text-[#141414] text-[18px] tracking-[-0.3px]">선호 시간대 선택</p>
      </div>
      <Option />
    </div>
  );
}

function ButtonOnlyToolbar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="ButtonOnlyToolbar">
      <div className="content-stretch flex gap-[6px] items-start p-[6px] relative size-full">
        <div className="bg-white max-h-[48px] min-h-[48px] relative rounded-[8px] shrink-0 w-[117px]" data-name="🌀 Box Button">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] overflow-clip pl-px pr-[15px] py-px relative rounded-[inherit] size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="h-full mr-[-14px] relative shrink-0" data-name="Center">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[19px] relative size-full">
                  <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[20px]">이전</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute cursor-pointer inset-0 rounded-[8px]" data-name="State">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="bg-[#00a1ff] flex-[1_0_0] max-h-[48px] min-h-[48px] min-w-px relative rounded-[8px]" data-name="🌀 Box Button">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] overflow-clip pl-px pr-[15px] py-px relative rounded-[inherit] size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="h-full mr-[-14px] relative shrink-0" data-name="Center">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[19px] relative size-full">
                  <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[20px]">다음</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute cursor-pointer inset-0 rounded-[8px]" data-name="State">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute h-[11.333px] right-[14.67px] top-[17.33px] w-[24.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
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
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[0] left-[27px] not-italic text-[14px] text-black text-center top-[calc(50%-7.5px)] tracking-[-0.28px] w-[54px]">
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
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
          <path d={svgPaths.p3d78f640} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Cellular Connection">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function CenterArea() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="🔹 Center Area">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔄 🔹Center Item">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[16px] text-center text-ellipsis tracking-[-0.3px] whitespace-nowrap">이사 신청</p>
      </div>
    </div>
  );
}

function LeftArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] h-[44px] items-center min-w-px relative" data-name="🔹 Left Area">
      <div className="content-stretch flex items-start relative shrink-0" data-name="🔄 🔹Left Item 1">
        <div className="content-stretch flex items-start relative shrink-0" data-name="↪︎ Icon">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="Render Mode=monochrome,Weight=regular">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.95px_3.95px] mask-size-[16.1px_16.1px]" style={{ maskImage: `url('${imgColorSet3}')` }} data-name="Color Set">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="🔄 🔹 Left Item 2">
        <div className="content-stretch flex items-start relative shrink-0" data-name="↪︎ Icon">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="Render Mode=monochrome,Weight=regular">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.95px_2.45px] mask-size-[18.1px_19.1px]" style={{ maskImage: `url('${imgColorSet4}')` }} data-name="Color Set">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="🔄 🔹 Left Item 3">
        <div className="content-stretch flex items-start relative shrink-0" data-name="↪︎ Icon">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="Render Mode=monochrome,Weight=regular">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.326px_2.2px] mask-size-[17.365px_19.575px]" style={{ maskImage: `url('${imgColorSet5}')` }} data-name="Color Set">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivedTrack() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 pr-[300px] right-0 top-1/2" data-name="Actived Track">
      <div className="h-[6px] relative shrink-0 w-[93.76px]" data-name="Actived Bar">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.76 6">
          <path d={svgPaths.p11519d40} fill="var(--fill-0, #0AA5FF)" id="Actived Bar" />
        </svg>
      </div>
    </div>
  );
}

function LinearProgressbar() {
  return (
    <div className="h-[6px] relative shrink-0 w-[375px]" data-name="🪣 Linear Progressbar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 6">
        <path d={svgPaths.p19183400} fill="var(--fill-0, #F7F9FA)" id="Base Track" />
      </svg>
      <ActivedTrack />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[375px]" data-name="Top">
      <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Statusbar">
        <IPhoneXStatusBarsStatusBarBlack />
      </div>
      <div className="content-stretch flex h-[44px] items-start max-h-[44px] min-h-[44px] relative shrink-0 w-full" data-name="🪩 Standard Top Navigation">
        <div className="bg-white flex-[1_0_0] h-[44px] min-w-px relative" data-name=".Top Navigation">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
              <CenterArea />
              <LeftArea />
            </div>
          </div>
        </div>
      </div>
      <LinearProgressbar />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="[Mobile] 이사신청_입력폼_02">
      <Container />
      <Section />
      <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 w-[375px]" data-name="Stickybtn">
        <div className="bg-[#ededed] h-px max-h-px min-h-px shrink-0 w-[375px]" data-name="🌀 Divider" />
        <ButtonOnlyToolbar />
        <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="Indicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
      </div>
      <Top />
    </div>
  );
}