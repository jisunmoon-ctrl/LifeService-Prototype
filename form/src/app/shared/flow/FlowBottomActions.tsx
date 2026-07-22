import { usePreviewViewport } from "../../preview/PreviewViewportContext";
import { DesktopFormActions } from "./DesktopFormParts";
import { OdsBoxButton } from "../ods/OdsBoxButton";

interface FlowBottomActionsProps {
  currentStep: number;
  totalSteps: number;
  canProceed: boolean;
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
  backLabel?: string;
  /** CTA 하단 가이드 링크 (Figma Stickybtn guide 영역, 모바일 전용) */
  guideLink?: string;
  onGuideClick?: () => void;
}

export function FlowBottomActions({
  currentStep,
  totalSteps,
  canProceed,
  onBack,
  onNext,
  nextLabel: nextLabelOverride,
  backLabel = "이전",
  guideLink,
  onGuideClick,
}: FlowBottomActionsProps) {
  const { isDesktopForm } = usePreviewViewport();
  const nextLabel = nextLabelOverride ?? (currentStep === totalSteps ? "견적 신청" : "다음");

  if (isDesktopForm) {
    return (
      <DesktopFormActions
        onBack={currentStep > 1 ? onBack : undefined}
        onNext={onNext}
        nextLabel={nextLabel}
        canProceed={canProceed}
        showBack={currentStep > 1}
      />
    );
  }

  const guide = guideLink ? (
    <button
      type="button"
      onClick={onGuideClick}
      className="h-[34px] w-full flex items-center justify-center gap-[4px] text-[14px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]"
    >
      {guideLink}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M4.5 2.5L8 6L4.5 9.5" stroke="#8C8C8C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  ) : null;

  if (currentStep === 1) {
    return (
      <>
        <OdsBoxButton
          variant="brand-solid"
          size="extra-large"
          onClick={onNext}
          disabled={!canProceed}
          fullWidth
        >
          {nextLabel}
        </OdsBoxButton>
        {guide}
      </>
    );
  }

  return (
    <>
      <div className="flex gap-[6px]">
        <OdsBoxButton variant="normal" size="extra-large" onClick={onBack} className="w-[117px] shrink-0">
          {backLabel}
        </OdsBoxButton>
        {/* fullWidth(100%) 사용 시 117px 이전 버튼과 합쳐져 행이 486px로 오버플로됨 → flex-1 로 잔여 폭만 차지 */}
        <OdsBoxButton
          variant="brand-solid"
          size="extra-large"
          onClick={onNext}
          disabled={!canProceed}
          className="flex-1 min-w-0"
        >
          {nextLabel}
        </OdsBoxButton>
      </div>
      {guide}
    </>
  );
}
