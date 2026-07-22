import React from "react";

const svgPaths = {
  p18775700: "M4.44445 17.7778V8.84445C4.44445 8.04445 5.08148 7.40741 5.88148 7.36297C13.8074 6.93334 17.7778 2.96296 17.7778 2.96296C17.7778 2.96296 21.7482 6.93334 29.6741 7.36297C30.4741 7.40741 31.1111 8.04445 31.1111 8.84445V17.7778C31.1111 17.7778 31.1111 28.1482 17.7778 32.5926C4.44445 28.1482 4.44445 17.7778 4.44445 17.7778Z",
  p1fbefb80: "M4.44445 17.7778V8.84445C4.44445 8.04445 5.08148 7.40741 5.88148 7.36297C7.4729 7.2767 8.90485 7.04769 10.1772 6.73674C14.7757 5.6129 20.7798 5.6129 25.3784 6.73674C26.6507 7.04769 28.0827 7.2767 29.6741 7.36297C30.4741 7.40741 31.1111 8.04445 31.1111 8.84445V17.7778C31.1111 17.7778 31.1111 26.7152 20.4435 31.5519C18.7544 32.3177 16.8011 32.3177 15.112 31.5519C4.44445 26.7152 4.44445 17.7778 4.44445 17.7778Z",
};

function Shield() {
  return (
    <div className="absolute left-[4.44px] size-[35.556px] top-0" data-name="shield_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5556 35.5556">
        <g id="shield_24">
          <path d={svgPaths.p18775700} fill="#00A1FF" id="-" />
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
          <path d={svgPaths.p1fbefb80} fill="url(#paint0_linear_26_5159_toggle)" id="-" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_26_5159_toggle" x1="17.7778" x2="17.7778" y1="2.96296" y2="32.5926">
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

interface GuaranteedPartnerToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function GuaranteedPartnerToggle({ checked, onChange }: GuaranteedPartnerToggleProps) {
  return (
    <div 
      className="bg-white flex items-center justify-between p-[16px] rounded-[8px] border border-[#e0e0e0] cursor-pointer select-none gap-[10px]"
      onClick={() => onChange(!checked)}
    >
      <div className="flex items-center gap-[6px] flex-1">
        <Asset />
        <div className="flex flex-col gap-[6px]">
          <span className="font-bold text-[16px] text-[#141414] leading-[20px] tracking-[-0.3px]">
            책임 보장 파트너 우선 매칭
          </span>
          <div className="text-[14px] text-[#828c94] leading-[18px] tracking-[-0.3px]">
            <p>파손 보험 가입 및 A/S가 보장되는</p>
            <p>검증된 파트너를 함께 매칭 받을래요.</p>
          </div>
        </div>
      </div>

      {/* Switch Toggle */}
      <div className={`
        relative w-[50px] h-[30px] rounded-full transition-colors duration-200 ease-in-out shrink-0
        ${checked ? 'bg-[#00A1FF]' : 'bg-[#dadde0]'}
      `}>
        <div className={`
          absolute top-[2px] w-[26px] h-[26px] bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out
          ${checked ? 'translate-x-[22px]' : 'translate-x-[2px]'}
        `} />
      </div>
    </div>
  );
}
