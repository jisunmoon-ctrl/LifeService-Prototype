import svgPaths from "./svg-dyqw5uuotz";
import imgImage25 from "figma:asset/db0a6d90c7a596fce04b3e19d41bce224d7ad48a.png";
import imgImage26 from "figma:asset/8ef2d42a252eb3539a925ef91cde2f913fa09dda.png";

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

function ProgressbarMobile() {
  return (
    <div className="absolute h-[6px] left-0 top-[88px] w-[375px]" data-name="progressbar_mobile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 6">
        <path d={svgPaths.p19183400} fill="var(--fill-0, #F7F9FA)" id="-" />
      </svg>
      <div className="absolute inset-[0_56.8%_0_0]" data-name="status">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 6">
          <path d={svgPaths.p3efb2e00} fill="var(--fill-0, #00A1FF)" id="status" />
        </svg>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute content-stretch flex inset-[35.96%_4.27%_57.88%_4.27%] items-center px-[16px] rounded-[4px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] h-[20px] leading-[20px] min-h-px min-w-px not-italic relative text-[#c2c8cc] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">상세주소 입력</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f7f9fa] inset-[28.82%_32%_65.02%_4.27%] rounded-[4px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] h-[20px] leading-[28px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">&nbsp;</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#00a1ff] content-stretch flex gap-[6px] inset-[28.82%_4.27%_65.02%_69.6%] items-center justify-center px-[16px] rounded-[4px]" data-name="Button">
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">주소찾기</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dropdown_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dropdown_24">
          <path d="M17 10H7L12 15L17 10Z" fill="var(--fill-0, #828C94)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function DropdownSelect() {
  return (
    <div className="absolute inset-[43.1%_4.27%_50.74%_4.27%] rounded-[4px]" data-name="DropdownSelect">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#c2c8cc] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">층수 선택</p>
        <Dropdown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dropdown_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dropdown_24">
          <path d="M17 10H7L12 15L17 10Z" fill="var(--fill-0, #828C94)" id="-" />
        </g>
      </svg>
    </div>
  );
}

function DropdownSelect1() {
  return (
    <div className="absolute inset-[67.49%_4.27%_26.35%_4.27%] rounded-[4px]" data-name="DropdownSelect">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#c2c8cc] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">평수 선택</p>
        <Dropdown1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SelectButton() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[4px]" data-name="SelectButton">
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828c94] text-[14px] text-center tracking-[-0.3px]">
            <p className="leading-[18px] whitespace-pre-wrap">있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectButton1() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[4px]" data-name="SelectButton">
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#828c94] text-[14px] text-center tracking-[-0.3px]">
            <p className="leading-[18px] whitespace-pre-wrap">없음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-[343px]">
      <SelectButton />
      <SelectButton1 />
    </div>
  );
}

function SelectBoxes2Grid() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] inset-[55.67%_4.27%_38.92%_4.27%] items-start" data-name="SelectBoxes/2grid">
      <Frame />
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

function Indicator() {
  return (
    <div className="absolute bg-white h-[34px] left-0 top-[778px] w-[375px]" data-name="Indicator">
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[37px] top-[204px]">
      <div className="absolute h-[46px] left-[38px] top-[204px] w-[300px]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <div className="absolute h-[356px] left-[38px] top-[250px] w-[300px]" data-name="image 26">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.21%] left-0 max-w-none top-0 w-full" src={imgImage26} />
        </div>
      </div>
      <div className="absolute border border-black border-solid h-[400px] left-[37px] top-[204px] w-[301px]" />
      <div className="absolute bg-black h-px left-[38px] top-[250px] w-[60px]" />
      <div className="absolute bg-black h-px left-[220px] top-[250px] w-[118px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[50px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 w-[107px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">이전</p>
      </div>
    </div>
  );
}

function Button2() {
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
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="[MOBILE] 출발지 정보 입력(주소찾기 버튼 클릭시)">
      <Group1 />
      <Group />
      <ProgressbarMobile />
      <div className="absolute font-['SF_Pro_Display:Bold',sans-serif] inset-[15.52%_47.2%_74.14%_4.27%] leading-[42px] not-italic text-[#141414] text-[32px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">출발지에 대해</p>
        <p>알려주세요</p>
      </div>
      <Input />
      <Input1 />
      <Button />
      <DropdownSelect />
      <DropdownSelect1 />
      <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] inset-[52.22%_76.27%_45.32%_4.27%] leading-[20px] not-italic text-[#828c94] text-[16px] tracking-[-0.3px]">엘리베이터</p>
      <SelectBoxes2Grid />
      <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] inset-[64.04%_87.73%_33.5%_4.27%] leading-[20px] not-italic text-[#828c94] text-[16px] tracking-[-0.3px]">평수</p>
      <Divider />
      <Indicator />
      <Group2 />
      <ButtonOnlyToolbar />
    </div>
  );
}