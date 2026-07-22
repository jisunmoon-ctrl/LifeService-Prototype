import { OdsBoxButton } from "../../../../shared/ods";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { DesktopSheet } from "../../../../shared/flow/DesktopFormParts";
import { CrossSellMovingCleaningIllustration } from "./CrossSellMovingCleaningIllustration";

interface MovingCleaningCrossSellSheetProps {
  isOpen: boolean;
  onDecline: () => void;
  onAccept: () => void;
}

function SheetBody({ onDecline, onAccept }: { onDecline: () => void; onAccept: () => void }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center py-[16px] px-[22.5px]">
          <p className="w-full max-w-[330px] text-[16px] font-semibold leading-[24px] tracking-[-0.3px] text-center">
            <span className="block text-[#00A1FF]">시공 신청 완료!</span>
            <span className="block text-[#141414]">같은 정보로 이사 청소도 한번에 신청할까요?</span>
          </p>
        </div>

        <CrossSellMovingCleaningIllustration />

        <div className="flex items-center justify-center pb-[12px] px-[22.5px]">
          <p className="w-full max-w-[330px] text-[15px] leading-[24px] tracking-[-0.3px] text-[#141414] text-center">
            미리 신청하시면 이사예정일이 가까워졌을 때
            <br />
            원하는 일정에 맞춰 상담을 도와드려요.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[8px] px-[16px] pt-[10px] pb-[16px]">
        <OdsBoxButton variant="normal" size="extra-large" onClick={onDecline} className="w-[106px] shrink-0">
          괜찮아요
        </OdsBoxButton>
        <OdsBoxButton variant="brand-solid" size="extra-large" onClick={onAccept} className="flex-1 min-w-0">
          함께 신청
        </OdsBoxButton>
      </div>
    </>
  );
}

/** 이사 + 이사청소 한번에 신청 제안 바텀시트 (Figma 7781-58040 / 데스크톱 5924-67991) */
export function MovingCleaningCrossSellSheet({
  isOpen,
  onDecline,
  onAccept,
}: MovingCleaningCrossSellSheetProps) {
  const { isDesktopForm } = usePreviewViewport();
  if (!isOpen) return null;

  if (isDesktopForm) {
    return (
      <DesktopSheet onDismiss={onDecline}>
        <SheetBody onDecline={onDecline} onAccept={onAccept} />
      </DesktopSheet>
    );
  }

  return (
    <div className="absolute inset-0 z-[100] flex flex-col justify-end">
      <div className="absolute inset-0 bg-black/40 animate-in fade-in duration-200" aria-hidden />
      <div className="relative bg-white rounded-t-[16px] animate-in slide-in-from-bottom duration-300">
        <div className="flex h-[24px] items-center justify-center">
          <div className="w-[32px] h-[4px] bg-[#EAEDEF] rounded-[6px]" />
        </div>
        <SheetBody onDecline={onDecline} onAccept={onAccept} />
      </div>
    </div>
  );
}
