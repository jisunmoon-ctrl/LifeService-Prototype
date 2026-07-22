import React from "react";

interface KeywordChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function KeywordChip({ label, selected, onClick }: KeywordChipProps) {
  return (
    <button
      onClick={onClick}
      className={`relative h-[38px] max-h-[38px] min-h-[38px] rounded-[var(--radius-full)] shrink-0 transition-all ${
        selected ? "bg-[#141414]" : "bg-[#f5f5f5] hover:bg-[#e8e8e8]"
      }`}
    >
      <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] overflow-clip px-[var(--spacing-5)] py-px rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[var(--spacing-3)] size-full">
          <p
            className={`text-body-14 max-w-[160px] overflow-hidden shrink-0 text-ellipsis whitespace-nowrap ${
              selected ? "text-white" : "text-[#141414]"
            }`}
          >
            {label}
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[var(--radius-full)]"
      />
    </button>
  );
}
