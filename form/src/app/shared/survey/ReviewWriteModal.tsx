import React from "react";
import { X } from "lucide-react";

interface ReviewWriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContracted: () => void;
  onNotContracted: () => void;
}

export function ReviewWriteModal({
  isOpen,
  onClose,
  onContracted,
  onNotContracted,
}: ReviewWriteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-[var(--radius-xl)] w-[327px] mx-[var(--spacing-12)] overflow-hidden">
        {/* Header */}
        <div className="relative flex items-center justify-center h-[56px] border-b border-[var(--border-neutral)]">
          <p className="text-subheading-16 text-[var(--fg-neutral)]">
            계약 여부 확인
          </p>
          <button
            onClick={onClose}
            className="absolute right-[var(--spacing-8)] p-[var(--spacing-4)] hover:bg-[var(--bg-weak)] rounded-[var(--radius-md)] transition-colors"
          >
            <X className="w-[var(--spacing-10)] h-[var(--spacing-10)] text-[var(--fg-neutral)]" />
          </button>
        </div>

        {/* Content */}
        <div className="px-[var(--spacing-12)] py-[var(--spacing-16)]">
          <p className="text-heading-18 text-center text-[var(--fg-neutral)] mb-[var(--spacing-6)]">
            업체와 계약을 진행하셨나요?
          </p>
          <p className="text-body-15 text-center text-[var(--fg-neutral)]">
            계약을 완료하셨다면<br />리뷰 작성하고 포인트를 받으세요.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-[var(--spacing-4)] px-[var(--spacing-8)] pb-[var(--spacing-8)]">
          <button
            onClick={onNotContracted}
            className="flex-1 h-[48px] rounded-[var(--radius-md)] bg-[var(--bg-weak)] text-[var(--fg-neutral)] text-subheading-16 hover:bg-[var(--border-neutral)] transition-colors"
          >
            미계약
          </button>
          <button
            onClick={onContracted}
            className="flex-1 h-[48px] rounded-[var(--radius-md)] bg-[var(--bg-brand)] text-white text-subheading-16 hover:bg-[#0095D6] transition-colors"
          >
            계약
          </button>
        </div>
      </div>
    </div>
  );
}
