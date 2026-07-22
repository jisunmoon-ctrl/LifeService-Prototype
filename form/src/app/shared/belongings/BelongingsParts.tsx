import type { ReactNode } from "react";
import { Camera, ChevronRight, List, Trash2 } from "lucide-react";
import { usePreviewViewport } from "../../preview/PreviewViewportContext";
import { FormTitle } from "../flow/DesktopFormParts";
import { IconMinus, IconPlus } from "../ods";
import { OdsBoxButton } from "../ods/OdsBoxButton";

const CHIP_GAP = 2;

function getPerRow(options: string[]) {
  if (options.length <= 2) return 2;
  const hasLongLabel = options.some((o) => o.length >= 4);
  return hasLongLabel && options.length % 3 === 0 ? 3 : 4;
}

function chipWidthStyle(options: string[], perRowOverride?: number) {
  const n = perRowOverride ?? getPerRow(options);
  return {
    width: `calc((100% - ${CHIP_GAP * (n - 1)}px) / ${n})`,
    minWidth: n <= 3 ? 100 : 84,
  } as const;
}

export function BelongingsTitle({
  title,
  subtitle,
  size = "large",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  size?: "large" | "medium";
}) {
  const { isDesktopForm } = usePreviewViewport();

  if (isDesktopForm) {
    return <FormTitle title={title} subtitle={subtitle} />;
  }

  const titleClass =
    size === "medium"
      ? "text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414]"
      : "text-[24px] font-semibold leading-[32px] tracking-[-0.3px] text-[#141414]";

  return (
    <div className="px-[16px] py-[20px]">
      <h2 className={titleClass}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-[6px] text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function BelongingsScreen({ children }: { children: ReactNode }) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <div className={`flex flex-col ${isDesktopForm ? "" : "pb-[100px]"}`}>{children}</div>
  );
}

export function BelongingsContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <div className={`${isDesktopForm ? "" : "px-[16px]"} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function BelongingsSection({ children }: { children: ReactNode }) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <section
      className={`py-[16px] border-b border-[#EAEDEF] ${isDesktopForm ? "" : "px-[16px]"}`}
    >
      {children}
    </section>
  );
}

export function BelongingsOptionCard({
  icon,
  title,
  description,
  onClick,
}: {
  icon: "camera" | "list";
  title: string;
  description: ReactNode;
  onClick: () => void;
}) {
  const Icon = icon === "camera" ? Camera : List;

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between pl-[20px] pr-[16px] py-[20px] rounded-[8px] border border-[#E0E0E0] bg-white text-left hover:border-[#00A1FF] transition-colors"
    >
      <div className="flex items-center gap-[16px] min-w-0">
        <Icon className="size-6 shrink-0 text-[#141414]" />
        <div className="min-w-0">
          <p className="text-[16px] font-semibold leading-[20px] text-[#141414]">{title}</p>
          <p className="text-[14px] leading-[18px] text-[#8C8C8C] mt-[6px]">{description}</p>
        </div>
      </div>
      <ChevronRight className="size-4 shrink-0 text-[#8C8C8C]" />
    </button>
  );
}

/** Box Button chip row (Figma 2372:29581) */
export function ChipSelect({
  label,
  options,
  value,
  onChange,
  perRow,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  perRow?: number;
}) {
  const style = chipWidthStyle(options, perRow);

  return (
    <div className="flex flex-col w-full">
      <p className="pb-[4px] text-[15px] font-medium leading-[24px] tracking-[-0.3px] text-[#141414]">
        {label}
      </p>
      <div className="flex flex-wrap gap-[2px]">
        {options.map((opt) => (
          <OdsBoxButton
            key={opt}
            size="medium"
            variant={value === opt ? "outlined" : "normal"}
            onClick={() => onChange(opt)}
            style={style}
          >
            {opt}
          </OdsBoxButton>
        ))}
      </div>
    </div>
  );
}

export function QuantityField({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center gap-[16px] border border-[#E0E0E0] rounded-[4px] p-[8px] bg-white">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="p-0 text-[#141414] disabled:opacity-30"
        disabled={value <= min}
        aria-label="수량 감소"
      >
        <IconMinus size={16} />
      </button>
      <span className="text-[15px] font-semibold leading-[24px] tracking-[-0.3px] text-[#2F3438] min-w-[28px] text-center">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="p-0 text-[#141414] disabled:opacity-30"
        disabled={value >= max}
        aria-label="수량 증가"
      >
        <IconPlus size={16} />
      </button>
    </div>
  );
}

export function DetailSectionHeader({
  title,
  onAdd,
  onRemove,
}: {
  title: string;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center justify-between py-[16px]">
      <h3 className="text-[18px] font-semibold leading-[24px] tracking-[-0.3px] text-[#141414]">
        {title}
      </h3>
      <div className="flex items-center gap-[8px]">
        <button
          type="button"
          onClick={onAdd}
          className="text-[16px] font-medium leading-[20px] tracking-[-0.3px] text-[#00A1FF]"
        >
          추가
        </button>
        <button
          type="button"
          onClick={onRemove}
          className="p-0 text-[#8C8C8C]"
          aria-label="삭제"
        >
          <Trash2 className="size-4" />
        </button>
      </div>
    </div>
  );
}
