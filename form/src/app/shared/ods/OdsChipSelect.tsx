import { OdsBoxButton } from "./OdsBoxButton";

// UI 패턴 원칙 (guidelines/Guidelines.md): 항목 입력 button
// i. 선택됨 = outlined, 디폴트 = normal
// ii. 동일 섹션 = 동일 너비. 열당 n개 기준 1/n 고정 너비 (마지막 열도 유지)
// iii. 레이블 길이 기준 min-width 84~100px
const CHIP_GAP = 2;

function getPerRow(options: string[]) {
  if (options.length <= 2) return 2;
  // 6개 이상 + 긴 레이블(룸 타입 등) → 3열, 그 외(개수/시간) → 4열
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

interface OdsChipSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  perRow?: number;
  className?: string;
}

export function OdsChipSelect({
  label,
  options,
  value,
  onChange,
  perRow,
  className = "",
}: OdsChipSelectProps) {
  const style = chipWidthStyle(options, perRow);
  return (
    <div className={`flex flex-col gap-[8px] pb-[24px] ${className}`}>
      <p className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">{label}</p>
      <div className="flex flex-wrap gap-[2px]">
        {options.map((option) => {
          const selected = value === option;
          return (
            <OdsBoxButton
              key={option}
              size="medium"
              variant={selected ? "outlined" : "normal"}
              onClick={() => onChange(option)}
              style={style}
            >
              {option}
            </OdsBoxButton>
          );
        })}
      </div>
    </div>
  );
}

interface OdsChipToggleProps {
  label: string;
  options: { label: string; value: boolean }[];
  value: boolean | null;
  onChange: (value: boolean) => void;
  className?: string;
}

export function OdsChipToggle({ label, options, value, onChange, className = "" }: OdsChipToggleProps) {
  const style = chipWidthStyle(
    options.map((o) => o.label),
    options.length
  );
  return (
    <div className={`flex flex-col gap-[8px] pb-[24px] ${className}`}>
      <p className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">{label}</p>
      <div className="flex flex-wrap gap-[2px]">
        {options.map((option) => {
          const selected = value === option.value;
          return (
            <OdsBoxButton
              key={option.label}
              size="medium"
              variant={selected ? "outlined" : "normal"}
              onClick={() => onChange(option.value)}
              style={style}
            >
              {option.label}
            </OdsBoxButton>
          );
        })}
      </div>
    </div>
  );
}
