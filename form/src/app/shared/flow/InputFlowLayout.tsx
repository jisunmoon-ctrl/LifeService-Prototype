import { ArrowLeft, X } from "lucide-react";
import { usePreviewViewport } from "../../preview/PreviewViewportContext";
import { DesktopFormCard } from "./DesktopFormParts";

interface InputFlowLayoutProps {
  currentStep: number;
  totalSteps: number;
  title?: string;
  onBack?: () => void;
  onClose?: () => void;
  onSkip?: () => void;
  skipLabel?: string;
  children: React.ReactNode;
  bottomButton?: React.ReactNode;
  /** 프레임 내부에 절대 배치되는 오버레이 (바텀시트 등) */
  overlay?: React.ReactNode;
}

export function InputFlowLayout({
  currentStep,
  totalSteps,
  title = "이사 신청",
  onBack,
  onClose,
  onSkip,
  skipLabel = "다음에",
  children,
  bottomButton,
  overlay,
}: InputFlowLayoutProps) {
  const { isDesktopForm } = usePreviewViewport();
  const progressPercent = (currentStep / totalSteps) * 100;

  if (isDesktopForm) {
    return (
      <div className="relative size-full min-h-full">
        <DesktopFormCard progressPercent={progressPercent} footer={bottomButton}>
          {children}
        </DesktopFormCard>
        {overlay}
      </div>
    );
  }

  return (
    <div className="bg-white relative size-full flex flex-col">
      <div className="flex-none relative w-full h-[44px] flex items-center bg-white z-20 px-[16px]">
        {onBack && (
          <button type="button" onClick={onBack} className="absolute left-[16px] p-0">
            <ArrowLeft className="w-6 h-6 text-[#141414]" />
          </button>
        )}
        {!onBack && onClose && (
          <button type="button" onClick={onClose} className="absolute left-[16px] p-0">
            <X className="w-6 h-6 text-[#141414]" />
          </button>
        )}
        <h1 className="mx-auto text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#141414]">
          {title}
        </h1>
        {!onBack && onSkip && (
          <button
            type="button"
            onClick={onSkip}
            className="absolute right-[16px] text-[14px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]"
          >
            {skipLabel}
          </button>
        )}
      </div>

      <div className="flex-none w-full h-[6px] bg-[#F7F9FA]">
        <div
          className="h-full bg-[#0AA5FF] transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto relative">{children}</div>

      {bottomButton && (
        <div className="flex-none bg-white z-20">
          <div className="h-px bg-[#EDEDED]" />
          <div className="p-[6px]">{bottomButton}</div>
        </div>
      )}

      {overlay}
    </div>
  );
}
