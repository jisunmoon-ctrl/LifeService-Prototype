import React from "react";
import svgPathsStep1 from "../../../imports/svg-qe5rpb59ib";
import svgPathsStep2 from "../../../imports/svg-cuf98mbn1s";

// 가정이사 아이콘 (냉장고, 세탁기 등)
export function IconHomeMove() {
  return (
    <div className="relative w-[80px] h-[68px]">
      {/* 냉장고/가구 등 복잡한 path들을 조합 */}
      <div className="absolute left-[10px] top-[10px] w-[32px] h-[52px] bg-[#eaedef] rounded-[2px] border-2 border-black" />
      <div className="absolute left-[10px] top-[26px] w-[38px] h-[2px] bg-black" />
      <div className="absolute left-[14px] top-[15px] w-[2px] h-[7px] bg-black rounded-[1px]" />
      <div className="absolute left-[14px] top-[32px] w-[2px] h-[7px] bg-black rounded-[1px]" />
      
      <div className="absolute left-[38px] top-[28px] w-[32px] h-[34px] bg-[#ededed] rounded-[1px] border-2 border-black" />
      <div className="absolute left-[38px] top-[34px] w-[32px] h-[2px] bg-black" />
      
      {/* 세탁기 원형 창 */}
      <div className="absolute left-[44px] top-[39px] w-[20px] h-[20px] rounded-full border-2 border-black bg-white flex items-center justify-center">
         <div className="w-[10.25px] h-[10.25px] rounded-full border-[1.75px] border-black bg-white" />
      </div>
      
      {/* 우측 상단 파란 박스 */}
      <div className="absolute left-[44px] top-[9px] w-[26px] h-[17px]">
         <svg viewBox="0 0 30 20" className="w-full h-full">
            <path d={svgPathsStep1.p8a92790} fill="#00A1FF" stroke="black" strokeWidth="2" />
            <path d="M13 1H17V6L15 5.0625L13 6V1Z" fill="#95E7FF" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </div>
      
      {/* 점들 */}
      <div className="absolute left-[65px] top-[29.5px] w-[3px] h-[3px] bg-black rounded-full" />
      <div className="absolute left-[61px] top-[29.5px] w-[3px] h-[3px] bg-black rounded-full" />
      <div className="absolute left-[40px] top-[30.5px] w-[6px] h-[2px] bg-black rounded-[1px]" />
      <div className="absolute left-[52px] top-[29.5px] w-[8px] h-[3px] bg-black rounded-[2px]" />
    </div>
  );
}

// 소형이사 아이콘 (박스들)
export function IconSmallMove() {
  return (
    <div className="relative w-[80px] h-[68px]">
      {/* 박스 1 (좌하단) */}
      <div className="absolute left-[2px] top-[36px] w-[38px] h-[28px]">
         <svg viewBox="0 0 40 30" className="w-full h-full">
            <path d={svgPathsStep1.p28d647c0} fill="#265AEC" stroke="black" strokeWidth="2" />
            <path d={svgPathsStep1.p25a15e00} fill="#92B3FF" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </div>
      
      {/* 박스 2 (우하단) */}
      <div className="absolute left-[40px] top-[36px] w-[38px] h-[28px]">
         <svg viewBox="0 0 40 30" className="w-full h-full">
            <path d={svgPathsStep1.p28d647c0} fill="#265AEC" stroke="black" strokeWidth="2" />
            <path d={svgPathsStep1.p25a15e00} fill="#92B3FF" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </div>
      
      {/* 박스 3 (상단) */}
      <div className="absolute left-[20px] top-[8px] w-[40px] h-[28px]">
         <svg viewBox="0 0 42 30" className="w-full h-full">
            <path d={svgPathsStep1.p1ff6de00} fill="#35C5F0" stroke="black" strokeWidth="2" />
            <path d={svgPathsStep1.p27c2d100} fill="#EFFBFF" stroke="#EFFBFF" strokeWidth="0.1" />
            <path d={svgPathsStep1.p2e904500} fill="#95E6FF" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </div>
    </div>
  );
}

// 달력 아이콘
export function IconCalendar() {
    return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d={svgPathsStep2.pa714d00} fill="#141414" />
        </svg>
    )
}
