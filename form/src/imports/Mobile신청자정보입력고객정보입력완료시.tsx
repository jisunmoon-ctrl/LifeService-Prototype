import svgPaths from "./svg-cun4nutz2w";

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

function Title() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] py-[20px] top-[94px] w-[375px]" data-name="Title">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#141414] text-[24px] tracking-[-0.3px]">신청자 정보를 남겨주세요</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#09609c] h-[44px] left-0 top-0 w-[375px]" />
      <Statusbar />
      <Title />
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

function Shield() {
  return (
    <div className="absolute left-[4.44px] size-[35.556px] top-0" data-name="shield_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5556 35.5556">
        <g id="shield_24">
          <path d={svgPaths.p18775700} fill="var(--fill-0, #00A1FF)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Shield1() {
  return (
    <div className="absolute left-0 mix-blend-multiply size-[35.556px] top-[4.44px]" data-name="shield_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5556 35.5556">
        <g id="shield_24" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p1fbefb80} fill="url(#paint0_linear_26_5159)" id="-" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_26_5159" x1="17.7778" x2="17.7778" y1="2.96296" y2="32.5926">
            <stop stopColor="#35E5F0" />
            <stop offset="1" stopColor="#4FBDDE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Asset() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Asset">
      <Shield />
      <Shield1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 tracking-[-0.3px] w-[208px] whitespace-pre-wrap" data-name="text">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#141414] text-[16px] w-full">책임 보장 파트너 우선 매칭</p>
      <div className="font-['Pretendard:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#828c94] text-[14px] w-full">
        <p className="mb-0">파손 보험 가입 및 A/S가 보장되는</p>
        <p>검증된 파트너를 함게 매칭 받을래요.</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] h-[64px] items-center min-h-px min-w-px relative" data-name="Left">
      <Asset />
      <Text />
    </div>
  );
}

function Switch() {
  return (
    <div className="h-[30px] relative shrink-0 w-[50px]" data-name="🌀 Switch">
      <div className="absolute inset-[-3.33%_-6%_-16.67%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 36">
          <g id="ð Switch">
            <path clipRule="evenodd" d={svgPaths.pf2498f0} fill="var(--fill-0, #0AA5FF)" fillRule="evenodd" id="Background" />
            <g filter="url(#filter0_d_26_5162)" id="Knob">
              <path clipRule="evenodd" d={svgPaths.p2eb24600} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_d_26_5162" width="36" x="17" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_26_5162" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_26_5162" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[10px] items-center left-1/2 p-[16px] rounded-[8px] top-[608px] w-[343px]" data-name="toggle">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Left />
      <Switch />
    </div>
  );
}

function ProgressbarMobile() {
  return (
    <div className="absolute h-[6px] left-0 top-[88px] w-[375px]" data-name="progressbar_mobile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 6">
        <path d={svgPaths.p19183400} fill="var(--fill-0, #F7F9FA)" id="-" />
      </svg>
      <div className="absolute inset-[0_13.6%_0_0]" data-name="status">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324 6">
          <path d={svgPaths.p22de22f0} fill="var(--fill-0, #00A1FF)" id="status" />
        </svg>
      </div>
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

function SingleInput1() {
  return (
    <div className="bg-white h-[50px] relative rounded-[4px] shrink-0 w-[343px]" data-name="SingleInput">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">홍길동</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaedef] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SingleInput() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[16px] top-[166px]" data-name="SingleInput">
      <SingleInput1 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dropdown_12">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dropdown_12">
          <path d="M17 10H7L12 15L17 10Z" fill="var(--fill-0, #141414)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[50px] items-center left-[16px] px-[16px] rounded-[4px] top-[224px] w-[85px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px]">010</p>
      <Dropdown />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute h-[50px] left-[109px] rounded-[4px] top-[224px] w-[250px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] h-[20px] leading-[20px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">54534543</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputBasicBrickMultipleLineProperty() {
  return (
    <div className="absolute content-stretch flex h-[152px] items-start left-[16px] p-[16px] rounded-[4px] top-[326px] w-[343px]" data-name="InputBasic/brick/multipleLine/Property 70">
      <div aria-hidden="true" className="absolute border border-[#eaedef] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] h-[60px] leading-[20px] min-h-px min-w-px not-italic relative text-[#c2c8cc] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">(예시) 큰 짐은 침대, 냉장고 등이 있고, 보관이사는 10일 정도 필요해요.</p>
    </div>
  );
}

function HintCounter() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-center justify-end left-[16px] top-[486px] w-[343px]" data-name="HintCounter">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#828c94] text-[12px] text-right tracking-[-0.3px]">0 / 100</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[16px] top-[298px]">
      <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#828c94] text-[16px] top-[298px] tracking-[-0.3px]">메모(선택)</p>
      <InputBasicBrickMultipleLineProperty />
      <HintCounter />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[16px] top-[298px]">
      <Group4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[16px] top-[166px]">
      <SingleInput />
      <Input />
      <Input1 />
      <Group3 />
    </div>
  );
}

function Hint() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="hint">
      <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#c2c8cc] text-[12px] tracking-[-0.3px] whitespace-pre-wrap">(주)버킷플레이스는 통신판매중개자로서 통신판매의 당사자가 아니며, 입점업체가 등록한 상품, 상품정보 및 거래에 대하여 (주)버킷플레이스는 일체 책임을 지지 않습니다.</p>
    </div>
  );
}

function HintCounter1() {
  return (
    <div className="absolute content-stretch flex items-start left-[16px] top-[512px] w-[343px]" data-name="HintCounter">
      <Hint />
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
    <div className="bg-[#00a1ff] flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] relative size-full">
          <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">신청완료</p>
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

function Indicator() {
  return (
    <div className="absolute bg-white h-[34px] left-0 top-[778px] w-[375px]" data-name="Indicator">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="[MOBILE] 신청자 정보 입력(고객정보 입력 완료 시)">
      <Group1 />
      <Group />
      <Toggle />
      <ProgressbarMobile />
      <Divider />
      <Group2 />
      <HintCounter1 />
      <ButtonOnlyToolbar />
      <Indicator />
    </div>
  );
}