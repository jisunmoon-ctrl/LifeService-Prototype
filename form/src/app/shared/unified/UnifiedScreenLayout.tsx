import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { usePreviewViewport } from "../../preview/PreviewViewportContext";
import { DesktopFormCard } from "../flow/DesktopFormParts";

/**
 * 통합 신청 플로우 공용 레이아웃 (Figma [통합 신청] Intro/Form 헤더)
 * - Standard Top Navigation: 좌측 뒤로가기 + 중앙 "무료 견적 받기"
 * - progress bar 없음 (개별 입력폼 InputFlowLayout 과 구분)
 * - GNB / statusbar 는 프리뷰 제외 영역이라 렌더링하지 않음
 */
interface UnifiedScreenLayoutProps {
  title?: string;
  onBack?: () => void;
  children: ReactNode;
  /** 하단 고정 영역 (Stickybtn / Sticky_CTA) */
  sticky?: ReactNode;
  /** 프레임 내부 절대 배치 오버레이 (크로스셀 바텀시트 등) */
  overlay?: ReactNode;
  /** 배경 (intro 는 그라데이션, form 은 white) */
  background?: "white" | "gradient";
}

export function UnifiedScreenLayout({
  title = "무료 견적 받기",
  onBack,
  children,
  sticky,
  overlay,
  background = "white",
}: UnifiedScreenLayoutProps) {
  const { isDesktopForm } = usePreviewViewport();

  if (isDesktopForm) {
    return (
      <div className="relative size-full min-h-full">
        <DesktopFormCard footer={sticky}>{children}</DesktopFormCard>
        {overlay}
      </div>
    );
  }

  const bgClass =
    background === "gradient"
      ? "bg-gradient-to-b from-white from-[8.62%] to-[#F6F6F8] to-[24%]"
      : "bg-white";

  return (
    <div className={`relative size-full flex flex-col ${bgClass}`}>
      {/* Standard Top Navigation */}
      <div className="flex-none relative w-full h-[44px] flex items-center z-20 px-[16px]">
        {onBack && (
          <button type="button" onClick={onBack} className="absolute left-[16px] p-0" aria-label="뒤로가기">
            <ArrowLeft className="w-6 h-6 text-[#141414]" />
          </button>
        )}
        <h1 className="mx-auto text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#141414]">
          {title}
        </h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto relative">{children}</div>

      {sticky && <div className="flex-none relative z-20">{sticky}</div>}

      {overlay}
    </div>
  );
}
