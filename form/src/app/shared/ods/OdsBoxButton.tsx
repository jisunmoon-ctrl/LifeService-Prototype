import type { ButtonHTMLAttributes, ReactNode } from "react";
import { BoxButton } from "@bucketplace/design-system";

// 실제 ODS BoxButton 위임 래퍼.
// ODS size: small=32px, medium=40px, extra-large=48px (CTA / Stickybtn)
type OdsBoxButtonVariant = "normal" | "brand-solid" | "solid" | "outlined" | "subtle";
type OdsBoxButtonSize = "small" | "medium" | "extra-large";

interface OdsBoxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: OdsBoxButtonVariant;
  size?: OdsBoxButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
}

const ODS_SIZE: Record<OdsBoxButtonSize, OdsBoxButtonSize> = {
  small: "small",
  medium: "medium",
  "extra-large": "extra-large",
};

export function OdsBoxButton({
  variant = "normal",
  size = "medium",
  children,
  fullWidth = false,
  className = "",
  disabled,
  onClick,
  ...rest
}: OdsBoxButtonProps) {
  return (
    <BoxButton
      size={ODS_SIZE[size]}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      className={className}
      {...rest}
    >
      <BoxButton.Slot side="center">
        <BoxButton.Label>{children}</BoxButton.Label>
      </BoxButton.Slot>
    </BoxButton>
  );
}
