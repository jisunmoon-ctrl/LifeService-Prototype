import type { ReactNode } from "react";
import { Checkbox } from "@bucketplace/design-system";

// 실제 ODS Checkbox 위임 래퍼 (Root/Indicator/IndicatorIcon/Label compound).
interface OdsCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  children?: ReactNode;
  disabled?: boolean;
}

export function OdsCheckbox({ checked, onCheckedChange, children, disabled }: OdsCheckboxProps) {
  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      onCheckedChange={(state) => onCheckedChange(state === true)}
    >
      <Checkbox.Indicator>
        <Checkbox.IndicatorIcon />
      </Checkbox.Indicator>
      {children && <Checkbox.Label>{children}</Checkbox.Label>}
    </Checkbox>
  );
}
