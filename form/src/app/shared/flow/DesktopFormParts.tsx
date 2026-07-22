import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { OdsGlobalNavigation } from "../ods";
import { OdsBoxButton } from "../ods/OdsBoxButton";

export function FormProgressBar({ percent }: { percent: number }) {
  return (
    <div className="absolute left-0 top-0 w-full h-[6px] bg-[#F7F9FA] rounded-t-[8px] overflow-hidden z-10">
      <div
        className="h-full bg-[#0AA5FF] transition-all duration-300 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export function DesktopFormNav() {
  return <OdsGlobalNavigation />;
}

// 공통 폼 패턴 (Figma 5924-67954): 데스크톱 폼 콘텐츠 영역은 내부 콘텐츠를 hug 하되
// max-height 500px, 넘어가면 스크롤. 하단 sticky button 배경 영역에 white gradient dim
// (스크롤 가능 & 최하단 미도달 시에만 노출).
export function DesktopFormScrollArea({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showDim, setShowDim] = useState(false);

  const updateDim = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollable = el.scrollHeight > el.clientHeight;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    setShowDim(scrollable && !atBottom);
  }, []);

  useEffect(() => {
    updateDim();
    const el = scrollRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateDim);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);
    return () => observer.disconnect();
  }, [updateDim]);

  return (
    <div className="relative flex flex-col min-h-0">
      <div
        ref={scrollRef}
        onScroll={updateDim}
        className="max-h-[500px] overflow-y-auto overscroll-contain min-h-0"
      >
        {children}
      </div>
      {showDim && (
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[40px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-white"
          aria-hidden
        />
      )}
    </div>
  );
}

/**
 * 데스크톱 공통 폼 카드 (Figma 5924-67954)
 * - GNB + 중앙 정렬 흰 카드(w 560)
 * - 카드 높이는 내부 콘텐츠 hug, 콘텐츠 max-h 500 초과 시 스크롤
 * - 하단 sticky button 영역 + 상단 gradient dim (DesktopFormScrollArea)
 */
export function DesktopFormCard({
  children,
  footer,
  progressPercent,
}: {
  children: ReactNode;
  footer?: ReactNode;
  progressPercent?: number;
}) {
  return (
    <div className="min-h-full bg-[#F5F5F5] flex flex-col relative">
      <DesktopFormNav />
      <div className="flex-1 flex items-center justify-center px-4 py-10 min-h-0">
        <div className="w-full max-w-[560px] bg-white rounded-[8px] relative flex flex-col shadow-sm">
          {progressPercent != null && <FormProgressBar percent={progressPercent} />}
          <div className="flex flex-col p-[40px] pt-[46px]">
            <DesktopFormScrollArea>{children}</DesktopFormScrollArea>
            {footer && <div className="shrink-0 pt-[16px] bg-white">{footer}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 데스크톱 공통 바텀시트 (Figma 5924-67991)
 * - 화면 전체를 덮는 dim + 중앙 정렬 400w 모달
 */
export function DesktopSheet({
  onDismiss,
  children,
}: {
  onDismiss?: () => void;
  children: ReactNode;
}) {
  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" aria-hidden onClick={onDismiss} />
      <div className="relative w-[400px] max-w-[calc(100%-32px)] bg-white rounded-[16px] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {children}
      </div>
    </div>
  );
}

export function FormTitle({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="pb-[40px]">
      <h2 className="text-[24px] font-semibold leading-[32px] tracking-[-0.3px] text-[#141414]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-[6px] text-[15px] leading-[24px] tracking-[-0.3px] text-[#141414]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function FormFieldLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[16px] leading-[20px] tracking-[-0.3px] text-[#828C94]">
      {children}
    </p>
  );
}

export function DesktopFormActions({
  onBack,
  onNext,
  nextLabel = "다음",
  canProceed,
  showBack = true,
}: {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  canProceed: boolean;
  showBack?: boolean;
}) {
  return (
    <div className="flex gap-[6px] w-full">
      {showBack && onBack && (
        <OdsBoxButton
          variant="normal"
          size="extra-large"
          onClick={onBack}
          className="w-[107px] rounded-[4px] font-bold"
        >
          이전
        </OdsBoxButton>
      )}
      <OdsBoxButton
        variant="brand-solid"
        size="extra-large"
        onClick={onNext}
        disabled={!canProceed}
        fullWidth
        className="rounded-[4px] font-bold flex-1"
      >
        {nextLabel}
      </OdsBoxButton>
    </div>
  );
}
