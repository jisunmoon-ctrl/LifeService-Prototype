import React from "react";
import { CheckboxListItem } from "./CheckboxListItem";

interface Step2Props {
  selectedItems: string[];
  onToggle: (item: string) => void;
}

export function Step2Positive({ selectedItems, onToggle }: Step2Props) {
  const options = [
    { id: 'pricing', label: '견적 금액 합리성' },
    { id: 'speed', label: '매칭 속도' },
    { id: 'company-count', label: '매칭 업체 수' },
    { id: 'attitude', label: '업체 응대 태도' },
    { id: 'process', label: '상담 절차' },
  ];

  const handleToggle = (item: string) => {
    // 최대 3개 선택 제한
    if (!selectedItems.includes(item) && selectedItems.length >= 3) {
      return;
    }
    onToggle(item);
  };

  return (
    <div className="w-full flex flex-col pt-[var(--spacing-16)] pb-[var(--spacing-8)]">
      <div className="mb-[var(--spacing-12)] px-[var(--spacing-8)]">
        <p className="text-subheading-16 text-[#2f3438]">
          상담 과정 중 가장 만족스러웠던 부분을 선택해주세요.
        </p>
      </div>

      {/* List Items */}
      <div className="flex flex-col px-[var(--spacing-8)]">
        {options.map((option) => (
          <CheckboxListItem
            key={option.id}
            label={option.label}
            selected={selectedItems.includes(option.id)}
            onClick={() => handleToggle(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
