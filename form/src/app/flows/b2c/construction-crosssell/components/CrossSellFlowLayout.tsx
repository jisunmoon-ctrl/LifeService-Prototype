import type { ReactNode } from "react";
import { OdsBoxButton, IconArrowLeft, IconX } from "../../../../shared/ods";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { DesktopFormCard } from "../../../../shared/flow/DesktopFormParts";

/**
 * 이사·청소 함께 신청 플로우 공용 레이아웃 (Figma 7781 시리즈)
 * - Standard Top Navigation: 좌측 닫기(X)/뒤로(←) + 중앙 "이사·청소 함께 신청"
 * - progress bar 없음
 */
interface CrossSellFlowLayoutProps {
  title?: string;
  leftIcon?: "close" | "back";
  onLeft?: () => void;
  children: ReactNode;
  /** 하단 고정 버튼 영역 */
  bottom?: ReactNode;
  overlay?: ReactNode;
  /** 0~1. Figma Linear Progressbar (예: 이삿짐 0.5) */
  progress?: number;
}

export function CrossSellFlowLayout({
  title = "이사·청소 함께 신청",
  leftIcon = "close",
  onLeft,
  children,
  bottom,
  overlay,
  progress,
}: CrossSellFlowLayoutProps) {
  const { isDesktopForm } = usePreviewViewport();

  if (isDesktopForm) {
    return (
      <div className="relative size-full min-h-full">
        <DesktopFormCard footer={bottom ? <div className="px-[6px]">{bottom}</div> : undefined}>
          {children}
        </DesktopFormCard>
        {overlay}
      </div>
    );
  }

  return (
    <div className="relative size-full flex flex-col bg-white">
      {/* Standard Top Navigation */}
      <div className="flex-none relative w-full h-[44px] flex items-center z-20 px-[16px]">
        {onLeft && (
          <>
            {leftIcon === "close" ? (
              <button type="button" onClick={onLeft} className="absolute right-[16px] p-0" aria-label="닫기">
                <IconX size={24} className="text-[#141414]" />
              </button>
            ) : (
              <button type="button" onClick={onLeft} className="absolute left-[16px] p-0" aria-label="뒤로가기">
                <IconArrowLeft size={24} className="text-[#141414]" />
              </button>
            )}
          </>
        )}
        <h1 className="mx-auto text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#141414]">
          {title}
        </h1>
      </div>

      {typeof progress === "number" && (
        <div className="flex-none h-[6px] w-full bg-[#EAEDEF]" aria-hidden>
          <div
            className="h-full bg-[#00A1FF] transition-[width] duration-200"
            style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
          />
        </div>
      )}

      <div className="flex-1 min-h-0 overflow-y-auto relative">{children}</div>

      {bottom && (
        <div className="flex-none bg-white z-20">
          <div className="h-px bg-[#EDEDED]" />
          <div className="p-[6px]">{bottom}</div>
        </div>
      )}

      {overlay}
    </div>
  );
}

/** 하단 단일 버튼 (다음 / 이사·청소 견적 신청 등) */
export function CrossSellSingleAction({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <SingleWrap>
      <OdsBrandButton label={label} onClick={onClick} disabled={disabled} />
    </SingleWrap>
  );
}

/** 하단 2버튼 (이전 / 다음·수정완료) */
export function CrossSellDualAction({
  prevLabel = "이전",
  nextLabel,
  onPrev,
  onNext,
  disabled,
}: {
  prevLabel?: string;
  nextLabel: string;
  onPrev: () => void;
  onNext: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex gap-[6px]">
      <OdsNormalButton label={prevLabel} onClick={onPrev} className="w-[117px] shrink-0" />
      <OdsBrandButton label={nextLabel} onClick={onNext} disabled={disabled} className="flex-1 min-w-0" />
    </div>
  );
}

// 로컬 버튼 래퍼 (OdsBoxButton 재사용)
function SingleWrap({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
function OdsBrandButton({
  label,
  onClick,
  disabled,
  className,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <OdsBoxButton
      variant="brand-solid"
      size="extra-large"
      onClick={onClick}
      disabled={disabled}
      fullWidth={!className}
      className={className}
    >
      {label}
    </OdsBoxButton>
  );
}
function OdsNormalButton({
  label,
  onClick,
  className,
}: {
  label: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <OdsBoxButton variant="normal" size="extra-large" onClick={onClick} className={className}>
      {label}
    </OdsBoxButton>
  );
}
