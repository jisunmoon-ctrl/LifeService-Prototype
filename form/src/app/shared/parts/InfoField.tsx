interface InfoFieldProps {
  label: string;
  value: string;
}

export function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className="flex flex-row items-start py-[12px]">
      <div className="w-[120px] shrink-0 text-[14px] font-[400] leading-[20px] text-[#828C94]">
        {label}
      </div>
      <div className="flex-1 text-[14px] font-[400] leading-[20px] text-[#2F3438] break-words whitespace-pre-wrap">
        {value}
      </div>
    </div>
  );
}
