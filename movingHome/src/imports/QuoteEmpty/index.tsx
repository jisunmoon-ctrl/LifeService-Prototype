import { ArrowLeft } from "lucide-react";

export default function QuoteEmpty({ onBack }: { onBack: () => void }) {
  return (
    <div
      className="bg-white relative min-h-full flex flex-col"
      style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}
    >
      <div className="sticky top-0 z-30 bg-white">
        <div className="flex items-center h-[44px] px-[16px] bg-white">
          <button type="button" onClick={onBack} className="cursor-pointer" aria-label="뒤로가기">
            <ArrowLeft size={24} color="#141414" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-[24px] pb-[80px] text-center">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] text-[17px] text-[#141414] tracking-[-0.3px] pb-[8px]">
          견적 신청 화면을 준비중이에요.
        </p>
        <p className="font-['Pretendard:Regular',sans-serif] leading-[22px] text-[15px] text-[#8c8c8c] tracking-[-0.3px] pb-[24px]">
          이전화면으로 돌아가주세요.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="h-[44px] px-[20px] rounded-[8px] bg-[#0aa5ff] text-white font-['Pretendard:SemiBold',sans-serif] text-[15px] tracking-[-0.3px] cursor-pointer hover:bg-[#0a96e6] transition-colors"
        >
          이전 화면으로 돌아가기
        </button>
      </div>
    </div>
  );
}
