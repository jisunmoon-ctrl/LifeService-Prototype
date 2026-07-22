interface OdsTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  height?: number;
  label?: string;
}

export function OdsTextarea({
  value,
  onChange,
  placeholder,
  maxLength = 100,
  height = 152,
  label,
}: OdsTextareaProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      {label && (
        <p className="text-[16px] leading-[20px] tracking-[-0.3px] text-[#828C94]">{label}</p>
      )}
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) onChange(e.target.value);
          }}
          placeholder={placeholder}
          style={{ height }}
          className="w-full rounded-[4px] border border-[#EAEDEF] p-[16px] text-[16px] leading-[20px] placeholder:text-[#C2C8CC] focus:border-[#00A1FF] focus:outline-none resize-none text-[#141414]"
        />
      </div>
      <p className="text-[12px] leading-[16px] tracking-[-0.3px] text-[#828C94] text-right">
        {value.length} / {maxLength}
      </p>
    </div>
  );
}
