import type { ReactNode } from "react";
import { Chip } from "@bucketplace/design-system";

// 실제 ODS Chip 위임 래퍼 — "연락처 불러오기" 등 액션 칩.
interface OdsChipProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function OdsChip({ children, onClick, disabled, className = "" }: OdsChipProps) {
  return (
    <Chip size="md" variant="normal" onClick={onClick} disabled={disabled} className={`self-start ${className}`}>
      {children}
    </Chip>
  );
}
