import React from "react";
import { Check } from "lucide-react";

interface CheckboxListItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function CheckboxListItem({ label, selected, onClick }: CheckboxListItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-[var(--spacing-4)] pb-[var(--spacing-6)] bg-white transition-all"
    >
      <Check
        className={`w-[var(--spacing-8)] h-[var(--spacing-8)] shrink-0 transition-colors ${
          selected ? "text-[var(--bg-brand)]" : "text-[#828c94]"
        }`}
      />
      <p
        className={`text-body-15 transition-colors ${
          selected ? "text-[var(--bg-brand)]" : "text-[#2f3438]"
        }`}
      >
        {label}
      </p>
    </button>
  );
}
