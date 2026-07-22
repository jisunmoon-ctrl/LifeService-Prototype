import svgPaths from "./svg-qe5rpb59ib";

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

function Group6() {
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

function Group5() {
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
          <path d={svgPaths.p1c7ef700} fill="var(--fill-0, #00A1FF)" id="status" />
        </g>
      </svg>
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
    <div className="bg-[#00a1ff] flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] relative size-full">
          <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
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
    </div>
  );
}

function Signed() {
  return (
    <div className="absolute left-[36px] size-[18px] top-[347px]" data-name="signed_18">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="signed_18">
          <path d={svgPaths.p10c6a080} fill="var(--fill-0, #00A1FF)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[10px] top-[10px]">
      <div className="absolute bg-[#eaedef] h-[52px] left-[10px] rounded-[2px] top-[10px] w-[32px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute bg-black h-[2px] left-[10px] top-[26px] w-[38px]" />
      <div className="absolute bg-black h-[7px] left-[14px] rounded-[1px] top-[15px] w-[2px]" />
      <div className="absolute bg-black h-[7px] left-[14px] rounded-[1px] top-[32px] w-[2px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[38px] top-[28px]">
      <div className="absolute bg-[#ededed] h-[34px] left-[38px] rounded-[1px] top-[28px] w-[32px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-2px] pointer-events-none rounded-[3px]" />
      </div>
      <div className="absolute bg-black h-[2px] left-[38px] top-[34px] w-[32px]" />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute left-[44px] size-[20px] top-[39px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 1443">
          <circle cx="10" cy="10" id="Ellipse 33" r="9" stroke="var(--stroke-0, black)" strokeWidth="2" />
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse 34" r="5.125" stroke="var(--stroke-0, black)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute h-[17px] left-[44px] top-[9px] w-[26px]">
      <div className="absolute inset-[-5.88%_-7.69%_-11.76%_-7.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 20">
          <g id="Group 1460">
            <path d={svgPaths.p8a92790} fill="var(--fill-0, #00A1FF)" id="Rectangle 2767" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path clipRule="evenodd" d="M13 1H17V6L15 5.0625L13 6V1Z" fill="var(--fill-0, #95E7FF)" fillRule="evenodd" id="Rectangle" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p222e14c0} fill="var(--fill-0, #EFFBFF)" id="Vector" stroke="var(--stroke-0, #EFFBFF)" strokeWidth="0.15" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[38px] top-[9px]">
      <Group />
      <div className="absolute bg-black h-[6px] left-[48px] top-[28px] w-[2px]" />
      <Group11 />
      <div className="absolute left-[65px] size-[3px] top-[29.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, black)" id="Ellipse 35" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[61px] size-[3px] top-[29.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, black)" id="Ellipse 35" r="1.5" />
        </svg>
      </div>
      <div className="absolute bg-black h-[2px] left-[40px] rounded-[1px] top-[30.5px] w-[6px]" />
      <div className="absolute bg-black h-[3px] left-[52px] rounded-[2px] top-[29.5px] w-[8px]" />
      <Group15 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white h-[68px] left-[259px] overflow-clip top-[254px] w-[80px]">
      <Group8 />
      <Group10 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[10px] top-[10px]">
      <div className="absolute bg-[#eaedef] h-[52px] left-[10px] rounded-[2px] top-[10px] w-[32px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
      </div>
      <div className="absolute bg-black h-[2px] left-[10px] top-[26px] w-[38px]" />
      <div className="absolute bg-black h-[7px] left-[14px] rounded-[1px] top-[15px] w-[2px]" />
      <div className="absolute bg-black h-[7px] left-[14px] rounded-[1px] top-[32px] w-[2px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[38px] top-[28px]">
      <div className="absolute bg-[#ededed] h-[34px] left-[38px] rounded-[1px] top-[28px] w-[32px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-2px] pointer-events-none rounded-[3px]" />
      </div>
      <div className="absolute bg-black h-[2px] left-[38px] top-[34px] w-[32px]" />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute left-[44px] size-[20px] top-[39px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 1443">
          <circle cx="10" cy="10" id="Ellipse 33" r="9" stroke="var(--stroke-0, black)" strokeWidth="2" />
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse 34" r="5.125" stroke="var(--stroke-0, black)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute h-[17px] left-[44px] top-[9px] w-[26px]">
      <div className="absolute inset-[-5.88%_-7.69%_-11.76%_-7.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 20">
          <g id="Group 1460">
            <path d={svgPaths.p8a92790} fill="var(--fill-0, #00A1FF)" id="Rectangle 2767" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path clipRule="evenodd" d="M13 1H17V6L15 5.0625L13 6V1Z" fill="var(--fill-0, #95E7FF)" fillRule="evenodd" id="Rectangle" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p222e14c0} fill="var(--fill-0, #EFFBFF)" id="Vector" stroke="var(--stroke-0, #EFFBFF)" strokeWidth="0.15" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[38px] top-[9px]">
      <Group1 />
      <div className="absolute bg-black h-[6px] left-[48px] top-[28px] w-[2px]" />
      <Group13 />
      <div className="absolute left-[65px] size-[3px] top-[29.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, black)" id="Ellipse 35" r="1.5" />
        </svg>
      </div>
      <div className="absolute left-[61px] size-[3px] top-[29.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, black)" id="Ellipse 35" r="1.5" />
        </svg>
      </div>
      <div className="absolute bg-black h-[2px] left-[40px] rounded-[1px] top-[30.5px] w-[6px]" />
      <div className="absolute bg-black h-[3px] left-[52px] rounded-[2px] top-[29.5px] w-[8px]" />
      <Group16 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white h-[68px] left-[259px] overflow-clip top-[254px] w-[80px]">
      <Group9 />
      <Group12 />
    </div>
  );
}

function ImgHome() {
  return (
    <div className="absolute contents left-[259px] top-[254px]" data-name="img_home">
      <div className="absolute h-[68px] left-[259px] top-[254px] w-[80px]" />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[16px] top-[234px]">
      <div className="absolute bg-white border-[#00a1ff] border-[1.5px] border-solid h-[151px] left-[16px] rounded-[8px] top-[234px] w-[343px]" />
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[0] left-[58px] not-italic text-[#00a1ff] text-[0px] text-[14px] top-[347px] tracking-[-0.3px] w-[281px] whitespace-pre-wrap">
        <span className="leading-[18px]">2인 이상 가구 (아파트 · 빌라) 분들</span>
        <span className="font-['SF_Pro_Display:Regular',sans-serif] leading-[18px]">께 추천해요</span>
      </p>
      <div className="absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[0] left-[36px] not-italic text-[#828c94] text-[14px] top-[286px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[18px] mb-0">냉장고, 세탁기 같은 큰 가전·가구가</p>
        <p>
          <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[18px] not-italic">포함된</span>
          <span className="leading-[18px]">{` 짐이 많은 이사`}</span>
        </p>
      </div>
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] left-[36px] not-italic text-[#141414] text-[20px] top-[254px] tracking-[-0.3px]">가정이사</p>
      <Signed />
      <div className="absolute bg-[#eaedef] h-px left-[36px] top-[334px] w-[303px]" />
      <ImgHome />
    </div>
  );
}

function Signed1() {
  return (
    <div className="absolute left-[36px] size-[18px] top-[510px]" data-name="signed_18">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="signed_18">
          <path d={svgPaths.p10c6a080} fill="var(--fill-0, #00A1FF)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[28px] left-[2px] top-[36px] w-[38px]">
      <div className="absolute inset-[-3.57%_-2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 30">
          <g id="Group 634">
            <path d={svgPaths.p28d647c0} fill="var(--fill-0, #265AEC)" id="Rectangle 2765" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path clipRule="evenodd" d={svgPaths.p25a15e00} fill="var(--fill-0, #92B3FF)" fillRule="evenodd" id="Rectangle" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[28px] left-[40px] top-[36px] w-[38px]">
      <div className="absolute inset-[-3.57%_-2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 30">
          <g id="Group 635">
            <path d={svgPaths.p28d647c0} fill="var(--fill-0, #265AEC)" id="Rectangle 2765" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path clipRule="evenodd" d={svgPaths.p25a15e00} fill="var(--fill-0, #92B3FF)" fillRule="evenodd" id="Rectangle" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[28px] left-[20px] top-[8px] w-[40px]">
      <div className="absolute inset-[-3.57%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 30">
          <g id="Group 636">
            <path d={svgPaths.p1ff6de00} fill="var(--fill-0, #35C5F0)" id="Rectangle 2765" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p27c2d100} fill="var(--fill-0, #EFFBFF)" id="Vector" stroke="var(--stroke-0, #EFFBFF)" strokeWidth="0.1" />
            <path clipRule="evenodd" d={svgPaths.p2e904500} fill="var(--fill-0, #95E6FF)" fillRule="evenodd" id="Rectangle" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[68px] left-[259px] overflow-clip top-[417px] w-[80px]">
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function ImgSmall() {
  return (
    <div className="absolute contents left-[259px] top-[417px]" data-name="img_small">
      <Frame2 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[16px] top-[320px]">
      <div className="absolute bg-white border border-[#eaedef] border-solid h-[151px] left-[16px] rounded-[8px] top-[397px] w-[343px]" />
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[0] left-[58px] not-italic text-[#00a1ff] text-[0px] text-[14px] top-[510px] tracking-[-0.3px] w-[281px] whitespace-pre-wrap">
        <span className="leading-[18px]">1인 가구 (원룸 · 오피스텔) 분들</span>
        <span className="font-['SF_Pro_Display:Regular',sans-serif] leading-[18px]">께 추천해요</span>
      </p>
      <div className="absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[0] left-[36px] not-italic text-[#828c94] text-[14px] top-[449px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[18px] mb-0">냉장고, 세탁기 같은 큰 가전·가구가</p>
        <p>
          <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[18px] not-italic">{`없는 `}</span>
          <span className="leading-[18px]">짐이 적은 이사</span>
        </p>
      </div>
      <div className="absolute bg-[#828c94] h-px left-[37px] top-[483px] w-[24px]" />
      <p className="absolute font-['SF_Pro_Display:Bold',sans-serif] leading-[28px] left-[36px] not-italic text-[#141414] text-[20px] top-[417px] tracking-[-0.3px]">소형이사</p>
      <Signed1 />
      <div className="absolute bg-[#eaedef] h-px left-[36px] top-[497px] w-[303px]" />
      <ImgSmall />
      <div className="absolute bg-[#828c94] h-px left-[36px] top-[320px] w-[37px]" />
    </div>
  );
}

export default function FormStep() {
  return (
    <div className="bg-white relative size-full" data-name="Form_Step_1">
      <Group6 />
      <Group5 />
      <Divider />
      <ProgressbarMobile />
      <div className="absolute font-['SF_Pro_Display:Bold',sans-serif] inset-[15.52%_48.8%_74.14%_4.27%] leading-[42px] not-italic text-[#141414] text-[32px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">이사 종류를</p>
        <p>선택해주세요</p>
      </div>
      <Indicator />
      <ButtonOnlyToolbar />
      <Group7 />
      <Group14 />
    </div>
  );
}