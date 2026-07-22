import movingIcon from "figma:asset/bce1206b18b65ba714cfda48054171bd425486a3.png";

export function MobileTitleArea() {
  return (
      <div className="w-full bg-white px-[20px] pb-[20px] pt-[10px] flex flex-row items-center gap-[12px]">
        <div className="w-[40px] h-[40px] relative">
             <div className="w-full h-full flex items-center justify-center">
                  <img src={movingIcon} alt="이사 아이콘" className="w-[40px] h-[40px] object-contain" />
             </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          <h1 className="text-[18px] font-bold text-[#2F3438] leading-[22px]">이사</h1>
          <span className="text-[14px] text-[#828C94]">6월 25일 신청</span>
        </div>
      </div>
  )
}
