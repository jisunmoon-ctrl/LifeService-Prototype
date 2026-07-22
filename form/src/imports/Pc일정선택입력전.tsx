import svgPaths from "./svg-pfcj4nzgyr";
import imgImage18 from "figma:asset/67ba33dd770230db5b83a83c232d6bdb1b0596a2.png";

function PcHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] relative size-full">{children}</div>
    </div>
  );
}

export default function Pc() {
  return (
    <div className="bg-[#eaedef] relative size-full" data-name="[PC] 일정 선택(입력 전)">
      <div className="absolute contents left-0 top-0">
        <div className="absolute h-[79px] left-0 top-0 w-[1326px]" data-name="image 18">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[1559.49%] left-0 max-w-none top-0 w-full" src={imgImage18} />
          </div>
        </div>
        <div className="absolute bg-[#eaedef] h-px left-0 top-[79px] w-[1326px]" />
      </div>
      <div className="absolute bg-white h-[380px] left-[calc(25%+51.5px)] rounded-[8px] top-[160px] w-[560px]" />
      <div className="absolute inset-[16.55%_28.96%_82.84%_28.96%]" data-name="Progress bar_PC">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 558 6">
          <g id="Progress bar_PC">
            <path d={svgPaths.p500b400} fill="var(--fill-0, #F7F9FA)" id="-" />
            <path d={svgPaths.p2539bb00} fill="var(--fill-0, #009FCE)" id="status" />
          </g>
        </svg>
      </div>
      <div className="absolute border border-[#eaedef] border-solid inset-[16.44%_28.88%_44.5%_28.88%] rounded-[8px]" />
      <div className="absolute font-['Pretendard:Bold',sans-serif] leading-[42px] left-[calc(25%+91.5px)] not-italic text-[#2f3438] text-[32px] top-[200px] tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">이사 예정일을</p>
        <p>선택해주세요</p>
      </div>
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[calc(25%+91.5px)] not-italic text-[#828c94] text-[16px] top-[292px] tracking-[-0.3px] whitespace-nowrap">확정된 날짜를 선택해주세요.</p>
      <div className="absolute left-[calc(25%+91.5px)] rounded-[4px] top-[344px] w-[480px]" data-name="❌ Input">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
          <div className="h-[50px] min-h-[50px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
            <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center min-h-[inherit] px-[17px] py-px relative size-full">
                <p className="flex-[1_0_0] font-['Pretendard:Regular',sans-serif] h-[20px] leading-[20px] min-h-px min-w-px not-italic relative text-[#c2c8cc] text-[16px] tracking-[-0.3px] whitespace-pre-wrap">{`          이사 예정일`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(25%+107.5px)] overflow-clip size-[24px] top-[357px]" data-name="calendar_outline_24">
        <div className="absolute inset-[10.42%_12.5%]" data-name="-">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
            <path d={svgPaths.p12617a80} fill="var(--fill-0, #2F3438)" id="-" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white left-[calc(25%+85.5px)] top-[444px] w-[492px]" data-name="ButtonOnlyToolbar">
        <div className="content-stretch flex gap-[6px] items-start p-[6px] relative w-full">
          <div className="h-[50px] relative rounded-[4px] shrink-0 w-[107px]" data-name="🪣 OutlineButton | OutlineButtonWithIcon">
            <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <PcHelper>
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
                <p className="leading-[20px]">이전</p>
              </div>
            </PcHelper>
          </div>
          <div className="bg-[#0aa5ff] flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[4px]" data-name="🪣 Button">
            <PcHelper>
              <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
                <p className="leading-[20px]">다음</p>
              </div>
            </PcHelper>
          </div>
        </div>
      </div>
    </div>
  );
}