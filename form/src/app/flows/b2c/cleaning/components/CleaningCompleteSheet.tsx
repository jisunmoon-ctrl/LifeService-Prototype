import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { OdsBoxButton } from "../../../../shared/ods";

// Figma 7300-31220: 이사 청소 신청 완료 바텀시트 (ODS Bottom Sheet)
// vaul 은 body 로 포털되어 프리뷰 프레임을 벗어나므로,
// AddressSearchModal 과 동일하게 fixed 오버레이 방식으로 프레임 내부에 렌더링한다.
interface CleaningCompleteSheetProps {
  isOpen: boolean;
  cleaningDate: Date | null;
  phoneDisplay: string;
  onConfirm: () => void;
}

function formatDate(date: Date | null) {
  if (!date) return "-";
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}.${mm}.${dd}`;
}

function SheetBody({
  cleaningDate,
  phoneDisplay,
  onConfirm,
}: Pick<CleaningCompleteSheetProps, "cleaningDate" | "phoneDisplay" | "onConfirm">) {
  return (
    <div className="flex flex-col px-[16px] pb-[16px]">
      <div className="flex flex-col items-center gap-[8px] pt-[8px] pb-[20px] text-center">
        <p className="text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#141414]">
          이사 청소 신청 완료!
        </p>
        <p className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
          빠른 시간 내에 전문 상담원이 연락드릴 예정이에요.
        </p>
      </div>

      <div className="flex flex-col gap-[8px] rounded-[8px] bg-[#F7F8FA] px-[16px] py-[16px] mb-[20px]">
        <div className="flex items-center justify-between">
          <span className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
            청소 희망일
          </span>
          <span className="text-[14px] font-bold leading-[18px] tracking-[-0.3px] text-[#2F3438]">
            {formatDate(cleaningDate)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
            휴대폰 번호
          </span>
          <span className="text-[14px] font-bold leading-[18px] tracking-[-0.3px] text-[#2F3438]">
            {phoneDisplay}
          </span>
        </div>
      </div>

      <OdsBoxButton variant="brand-solid" size="extra-large" fullWidth onClick={onConfirm}>
        확인
      </OdsBoxButton>
    </div>
  );
}

export function CleaningCompleteSheet({
  isOpen,
  cleaningDate,
  phoneDisplay,
  onConfirm,
}: CleaningCompleteSheetProps) {
  const { isDesktopForm } = usePreviewViewport();

  if (!isOpen) return null;

  if (isDesktopForm) {
    return (
      <div className="absolute inset-0 z-[100] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative w-[400px] max-w-[calc(100vw-32px)] bg-white rounded-[12px] shadow-xl pt-[24px] animate-in fade-in zoom-in-95 duration-200">
          <SheetBody
            cleaningDate={cleaningDate}
            phoneDisplay={phoneDisplay}
            onConfirm={onConfirm}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-[100] flex flex-col justify-end">
      <div className="absolute inset-0 bg-black/40 animate-in fade-in duration-200" aria-hidden />
      <div className="relative bg-white rounded-t-[16px] animate-in slide-in-from-bottom duration-300">
        <div className="mx-auto w-[36px] h-[4px] bg-[#EAEDEF] rounded-full mt-[8px] mb-[8px]" />
        <SheetBody
          cleaningDate={cleaningDate}
          phoneDisplay={phoneDisplay}
          onConfirm={onConfirm}
        />
        <div className="h-[20px]" />
      </div>
    </div>
  );
}
