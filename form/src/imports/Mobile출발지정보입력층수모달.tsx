import svgPaths from "./svg-xzfaxny7yi";

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
        <g id="progressbar_mobile">
          <path d={svgPaths.p19183400} fill="var(--fill-0, #F7F9FA)" id="-" />
          <path d={svgPaths.p3efb2e00} fill="var(--fill-0, #00A1FF)" id="status" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute inset-[40.39%_4.27%_53.45%_4.27%] rounded-[4px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] h-[20px] leading-[20px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">1202동 1306호</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f7f9fa] inset-[33.25%_32%_60.59%_4.27%] rounded-[4px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] h-[20px] leading-[28px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">서울 서초구 서초대로74길 서초</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadde0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#00a1ff] content-stretch flex gap-[6px] inset-[33.25%_4.27%_60.59%_69.6%] items-center justify-center px-[16px] rounded-[4px]" data-name="Button">
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
    <div className="absolute inset-[47.54%_4.27%_46.31%_4.27%] rounded-[4px]" data-name="DropdownSelect">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">층수 선택</p>
        <Dropdown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
    <div className="absolute inset-[71.92%_4.27%_21.92%_4.27%] rounded-[4px]" data-name="DropdownSelect">
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
    <div className="absolute content-stretch flex flex-col gap-[6px] inset-[60.1%_4.27%_34.48%_4.27%] items-start" data-name="SelectBoxes/2grid">
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

function Button1() {
  return (
    <div className="bg-[#eaedef] flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] relative size-full">
          <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c2c8cc] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">다음단계</p>
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
    </div>
  );
}

function ModalTitle() {
  return (
    <div className="bg-white h-[54px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="ModalTitle">
      <div className="-translate-y-full absolute flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-end leading-[0] left-[50px] not-italic right-[50px] text-[#141414] text-[20px] text-center top-[44px] tracking-[-0.3px]">
        <p className="leading-[28px] whitespace-pre-wrap">층수</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="title">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-full whitespace-pre-wrap">반지하</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Left">
      <Title />
    </div>
  );
}

function ListBasicIcon() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="list_basic_icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Left />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListItem">
      <ListBasicIcon />
      <Divider1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="title">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-full whitespace-pre-wrap">1층</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Left">
      <Title1 />
    </div>
  );
}

function ListBasicIcon1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="list_basic_icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Left1 />
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListItem">
      <ListBasicIcon1 />
      <Divider2 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="title">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-full whitespace-pre-wrap">2층</p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Left">
      <Title2 />
    </div>
  );
}

function ListBasicIcon2() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="list_basic_icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Left2 />
        </div>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListItem">
      <ListBasicIcon2 />
      <Divider3 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="title">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-full whitespace-pre-wrap">3층</p>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Left">
      <Title3 />
    </div>
  );
}

function ListBasicIcon3() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="list_basic_icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Left3 />
        </div>
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListItem">
      <ListBasicIcon3 />
      <Divider4 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="title">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-full whitespace-pre-wrap">4층</p>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Left">
      <Title4 />
    </div>
  );
}

function ListBasicIcon4() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="list_basic_icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Left4 />
        </div>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListItem">
      <ListBasicIcon4 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="title">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-full whitespace-pre-wrap">6층</p>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Left">
      <Title5 />
    </div>
  );
}

function ListBasicIcon5() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="list_basic_icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Left5 />
        </div>
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListItem">
      <ListBasicIcon5 />
      <Divider5 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="title">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-full whitespace-pre-wrap">7층</p>
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Left">
      <Title6 />
    </div>
  );
}

function ListBasicIcon6() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="list_basic_icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Left6 />
        </div>
      </div>
    </div>
  );
}

function Divider6() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bg-[#eaedef] inset-0" data-name="cell/divider/h1" />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListItem">
      <ListBasicIcon6 />
      <Divider6 />
    </div>
  );
}

function Modal() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 rounded-tl-[16px] rounded-tr-[16px] top-[449px] w-[375px]" data-name="Modal">
      <ModalTitle />
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
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
    <div className="bg-white relative size-full" data-name="[MOBILE] 출발지 정보 입력 층수 모달">
      <Group1 />
      <Group />
      <ProgressbarMobile />
      <div className="absolute font-['SF_Pro_Display:Bold',sans-serif] inset-[15.52%_47.2%_74.14%_4.27%] leading-[42px] not-italic text-[#141414] text-[32px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">출발지에 대해</p>
        <p>알려주세요</p>
      </div>
      <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[0] left-[16px] not-italic text-[#828c94] text-[0px] text-[16px] top-[218px] tracking-[-0.3px]">
        <span className="leading-[20px]">{`현재는 출발지 기준 `}</span>
        <span className="font-['SF_Pro_Display:Bold',sans-serif] leading-[20px]">서울·경기·인천</span>
        <span className="leading-[20px]">만 가능해요</span>
      </p>
      <Input />
      <Input1 />
      <Button />
      <DropdownSelect />
      <DropdownSelect1 />
      <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] inset-[56.65%_76.27%_40.89%_4.27%] leading-[20px] not-italic text-[#828c94] text-[16px] tracking-[-0.3px]">엘리베이터</p>
      <SelectBoxes2Grid />
      <p className="absolute font-['SF_Pro_Display:Regular',sans-serif] inset-[68.47%_87.73%_29.06%_4.27%] leading-[20px] not-italic text-[#828c94] text-[16px] tracking-[-0.3px]">평수</p>
      <Divider />
      <ButtonOnlyToolbar />
      <div className="absolute bg-[rgba(33,38,41,0.5)] h-[812px] left-0 top-0 w-[375px]" />
      <Modal />
      <Indicator />
    </div>
  );
}