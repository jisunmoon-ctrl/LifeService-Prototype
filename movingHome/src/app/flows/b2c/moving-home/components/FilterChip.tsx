import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type FilterChipVariant = "outlined" | "normal";

interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: FilterChipVariant;
  /** Active filter chip — black outline (region or move-type) */
  emphasized?: boolean;
  showChevron?: boolean;
}

export function FilterChip({
  label,
  variant = "outlined",
  emphasized = false,
  showChevron = false,
  className = "",
  ...props
}: FilterChipProps) {
  const borderColor = emphasized ? "#141414" : "#e0e0e0";

  return (
    <button
      type="button"
      className={`h-[38px] max-h-[38px] min-h-[38px] rounded-full shrink-0 flex items-center justify-center overflow-hidden px-[9px] py-px bg-white cursor-pointer transition-colors hover:bg-[#fafafa] ${className}`}
      style={{ border: `1px solid ${borderColor}` }}
      {...props}
    >
      <span className="font-['Pretendard:Regular',sans-serif] text-[14px] leading-[18px] tracking-[-0.3px] text-[#141414] whitespace-nowrap max-w-[160px] overflow-hidden text-ellipsis px-[6px]">
        {label}
      </span>
      {showChevron && (
        <ChevronDown size={12} color="#141414" strokeWidth={2} className="pr-[4px] shrink-0" />
      )}
    </button>
  );
}

interface FilterDividerProps {
  className?: string;
}

export function FilterDivider({ className = "" }: FilterDividerProps) {
  return <div className={`h-[16px] w-px bg-[#ededed] shrink-0 ${className}`} />;
}

interface FilterRowContainerProps {
  children: ReactNode;
  className?: string;
}

export function FilterRowContainer({ children, className = "" }: FilterRowContainerProps) {
  return (
    <div className={`bg-white flex gap-[6px] items-center pb-[8px] px-[16px] w-full ${className}`}>
      {children}
    </div>
  );
}
