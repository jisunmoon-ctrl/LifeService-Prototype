interface DetailRowProps {
  label: string;
  value: string;
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="flex items-start gap-[12px] w-full py-[4px]">
      <span className="w-[77px] text-[16px] text-[#828C94] shrink-0 tracking-[-0.3px]">{label}</span>
      <span className="flex-1 text-[16px] text-[#2F3438] break-keep tracking-[-0.3px] leading-[24px]">
        {value}
      </span>
    </div>
  );
}

export function ApplicationDetails() {
  return (
    <div className="w-full bg-white mt-[32px] px-[16px] pb-[40px]">
      <h2 className="text-[20px] font-bold text-[#2F3438] mb-[24px] tracking-[-0.3px]">신청 내역</h2>
      
      {/* 1. My Info */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        <h3 className="text-[16px] font-bold text-[#2F3438] tracking-[-0.3px] mb-[4px]">내 신청정보</h3>
        <div className="flex flex-col gap-[8px]">
          <DetailRow label="신청일자" value="2022년 6월 25일 23:15" />
          <DetailRow label="고객명" value="이성민" />
          <DetailRow label="이사종류" value="가정이사" />
          <DetailRow label="이사예정일" value="2022년 8월 12일 수요일" />
          <DetailRow label="연락처" value="010-1234-5678" />
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#EAEDEF] mb-[32px]"></div>

      {/* 2. Departure */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        <h3 className="text-[16px] font-bold text-[#2F3438] tracking-[-0.3px] mb-[4px]">출발지</h3>
        <div className="flex flex-col gap-[8px]">
          <DetailRow label="주소" value="서울 서초구 서초대로74길 4 삼성생명서초타워 25층" />
          <DetailRow label="엘레베이터" value="있음" />
          <DetailRow label="평수" value="40평대" />
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#EAEDEF] mb-[32px]"></div>

      {/* 3. Arrival */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        <h3 className="text-[16px] font-bold text-[#2F3438] tracking-[-0.3px] mb-[4px]">도착지</h3>
        <div className="flex flex-col gap-[8px]">
          <DetailRow label="주소" value="서울 서초구 서초대로74길 4 삼성생명서초타워 25층" />
          <DetailRow label="엘레베이터" value="있음" />
          <DetailRow label="평수" value="40평대" />
          <DetailRow label="가구인원수" value="5인 이상" />
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#EAEDEF] mb-[32px]"></div>

      {/* 4. Memo */}
      <div className="flex flex-col gap-[16px]">
        <h3 className="text-[16px] font-bold text-[#2F3438] tracking-[-0.3px] mb-[4px]">메모</h3>
        <div className="w-full bg-[#F7F9FA] rounded-[8px] p-[16px] min-h-[100px]">
           <p className="text-[16px] text-[#2F3438] tracking-[-0.3px]">
             고객이 입력한 내용
           </p>
        </div>
      </div>

    </div>
  );
}
