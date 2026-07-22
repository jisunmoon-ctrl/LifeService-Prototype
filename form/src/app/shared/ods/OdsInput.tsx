import type { InputHTMLAttributes } from "react";
import { Input } from "@bucketplace/design-system";

// 실제 ODS Input 위임 래퍼. ODS Input size 40 을 기본으로 사용.
// 기본 w-full — 플렉스 행에서는 containerClassName="flex-1 min-w-0" 사용.
interface OdsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  hint?: string;
  error?: boolean;
  containerClassName?: string;
}

export function OdsInput({
  title,
  hint,
  error = false,
  containerClassName = "w-full",
  className = "",
  size: _htmlSize,
  ...rest
}: OdsInputProps) {
  return (
    <div className={`${containerClassName} [&>*]:w-full`.trim()}>
      <Input
        size={40}
        title={title}
        hint={hint}
        error={error}
        className={`w-full ${className}`.trim()}
        {...rest}
      />
    </div>
  );
}
