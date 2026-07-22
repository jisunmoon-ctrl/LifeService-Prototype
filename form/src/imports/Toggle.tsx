import svgPaths from "./svg-v6ostcve3l";

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

export default function Toggle() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center p-[16px] relative rounded-[8px] size-full" data-name="toggle">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Left />
      <Switch />
    </div>
  );
}