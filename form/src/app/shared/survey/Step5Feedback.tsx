import React from "react";

interface Step5Props {
  feedback: string;
  onUpdate: (feedback: string) => void;
}

export function Step5Feedback({ feedback, onUpdate }: Step5Props) {
  const maxLength = 400;

  return (
    <div className="w-full flex flex-col pt-[var(--spacing-16)] pb-[var(--spacing-8)]">
      <div className="mb-[var(--spacing-12)] px-[var(--spacing-8)]">
        <p className="text-subheading-16 text-[#2f3438]">
          이사 서비스에 대해 좋았던 점이나 개선되었으면 하는 점 등에 대해 자유롭게 적어주세요.
        </p>
      </div>

      {/* Textarea */}
      <div className="flex flex-col px-[var(--spacing-8)]">
        <textarea
          value={feedback}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              onUpdate(e.target.value);
            }
          }}
          placeholder="자유롭게 의견을 작성해주세요"
          className="
            w-full h-[200px] px-[var(--spacing-8)] py-[var(--spacing-7)] rounded-[var(--radius-md)]
            border border-[var(--border-neutral)] bg-white
            text-body-16 text-[var(--fg-neutral)]
            placeholder:text-[var(--fg-weak)]
            focus:outline-none focus:ring-2 focus:ring-[var(--bg-brand)] focus:border-transparent
            resize-none
          "
        />

        {/* Character Count */}
        <div className="mt-[var(--spacing-4)] text-right">
          <span className="text-detail-12 text-[var(--fg-weak)]">
            {feedback.length}자 / 최대 {maxLength}자
          </span>
        </div>
      </div>
    </div>
  );
}
