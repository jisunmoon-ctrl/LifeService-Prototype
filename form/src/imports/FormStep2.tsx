import svgPaths from "./svg-cuf98mbn1s";

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

function IPhoneXStatusBarsStatusBarBlack() {
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

function Statusbar() {
  return (
    <div className="absolute bg-white h-[44px] left-0 top-0 w-[375px]" data-name="Statusbar">
      <IPhoneXStatusBarsStatusBarBlack />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#09609c] h-[44px] left-0 top-0 w-[375px]" />
      <Statusbar />
    </div>
  );
}

function Dismiss() {
  return (
    <div className="absolute left-[16px] size-[24px] top-[54px]" data-name="Dismiss">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dismiss">
          <g id="-">
            <path clipRule="evenodd" d={svgPaths.p13636500} fill="#141414" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pfacb880} fill="#141414" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[44px]">
      <div className="absolute bg-white h-[44px] left-0 top-[44px] w-[375px]" />
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[24px] left-[187.5px] not-italic text-[#141414] text-[18px] text-center top-[56px] tracking-[-0.3px]">이사 신청</p>
      <Dismiss />
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute h-px left-0 top-[87px] w-[375px]" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function ProgressbarMobile() {
  return (
    <div className="absolute h-[6px] left-0 top-[88px] w-[375px]" data-name="progressbar_mobile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 6">
        <g id="progressbar_mobile">
          <path d={svgPaths.p19183400} fill="var(--fill-0, #F7F9FA)" id="-" />
          <path d={svgPaths.pe947f00} fill="var(--fill-0, #00A1FF)" id="status" />
        </g>
      </svg>
    </div>
  );
}

function CalendarOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="calendar_outline_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar_outline_24">
          <path d={svgPaths.pa714d00} fill="var(--fill-0, #141414)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[50px] items-center left-[16px] px-[16px] rounded-[4px] top-[270px] w-[343px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <CalendarOutline />
      <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] h-[20px] leading-[20px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">이사 예정일</p>
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute bg-white h-[34px] left-0 top-[778px] w-[375px]" data-name="Indicator">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[6px] h-[50px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 w-[107px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">이전</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#eaedef] flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] relative size-full">
          <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c2c8cc] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">다음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonOnlyToolbar() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[6px] items-start left-0 p-[6px] top-[716px] w-[375px]" data-name="ButtonOnlyToolbar">
      <Button />
      <Button1 />
    </div>
  );
}

export default function FormStep() {
  return (
    <div className="bg-white relative size-full" data-name="Form_Step_2">
      <Group1 />
      <Group />
      <Divider />
      <ProgressbarMobile />
      <div className="absolute font-['SF_Pro_Display:Bold',sans-serif] inset-[15.52%_47.2%_74.14%_4.27%] leading-[42px] not-italic text-[#141414] text-[32px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">이사 예정일을</p>
        <p>선택해주세요</p>
      </div>
      <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#828c94] text-[16px] top-[218px] tracking-[-0.3px]">확정된 날짜를 선택해주세요.</p>
      <Input />
      <Indicator />
      <ButtonOnlyToolbar />
    </div>
  );
}