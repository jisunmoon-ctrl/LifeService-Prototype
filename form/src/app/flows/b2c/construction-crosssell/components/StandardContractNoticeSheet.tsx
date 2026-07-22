import { OdsBoxButton } from "../../../../shared/ods";

interface StandardContractNoticeSheetProps {
  isOpen: boolean;
  onConfirm: () => void;
}

const NOTICES: { emphasis: string; rest: string }[] = [
  { emphasis: "표준계약서 전자계약", rest: "은 업체와 계약 시 반드시 진행해야 해요." },
  { emphasis: "책임보장 서비스", rest: "는 표준계약서 전자계약을 완료한 건에 한해 보상받을 수 있어요." },
  { emphasis: "직접계약·자재비 선지급", rest: "은 피해가 발생할 수 있으니 주의해주세요." },
];

/** 표준계약서 고지 안내 바텀시트 (시공 신청 완료 직후) */
export function StandardContractNoticeSheet({ isOpen, onConfirm }: StandardContractNoticeSheetProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[100] flex flex-col justify-end">
      <div className="absolute inset-0 bg-black/40 animate-in fade-in duration-200" aria-hidden />
      <div className="relative bg-white rounded-t-[16px] animate-in slide-in-from-bottom duration-300">
        <div className="mx-auto w-[36px] h-[4px] bg-[#EAEDEF] rounded-full mt-[8px] mb-[8px]" />

        <div className="px-[16px] pt-[12px]">
          <h3 className="text-[18px] font-bold leading-[24px] tracking-[-0.3px] text-[#141414]">
            안전한 시공을 위해 꼭 확인해주세요
          </h3>

          <div className="mt-[16px] flex flex-col gap-[12px] rounded-[8px] bg-[#EAF2FF] px-[16px] py-[16px]">
            {NOTICES.map((n, i) => (
              <div key={i} className="flex gap-[8px]">
                <span className="mt-[2px] shrink-0 text-[13px] font-bold leading-[18px] text-[#3B7BF0]">
                  {i + 1}
                </span>
                <p className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#16305E]">
                  <span className="font-bold">{n.emphasis}</span>
                  {n.rest}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-[16px] pt-[16px] pb-[8px]">
          <OdsBoxButton variant="brand-solid" size="extra-large" fullWidth onClick={onConfirm}>
            확인
          </OdsBoxButton>
        </div>
        <div className="h-[20px]" />
      </div>
    </div>
  );
}
