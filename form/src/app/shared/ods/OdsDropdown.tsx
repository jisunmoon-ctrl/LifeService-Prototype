import { Dropdown } from "@bucketplace/design-system";

// 실제 ODS Dropdown 위임 래퍼 (native select 기반 compound).
// ODS DropdownRoot 는 display:inline-flex 고정이라 className width 가 루트에 전달되지 않음.
// → 컨테이너에서 직계 자식(Root) · Control 을 w-full 로 강제한다.
interface OdsDropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  containerClassName?: string;
}

const FULL_WIDTH_FORCE =
  "[&>div]:!w-full [&>div]:!flex [&>div]:!flex-col [&_[class*='DropdownControl']]:!w-full [&_[class*='DropdownControl']]:!block";

export function OdsDropdown({
  options,
  value,
  onValueChange,
  placeholder,
  disabled,
  error,
  containerClassName = "w-full",
}: OdsDropdownProps) {
  return (
    <div className={`${containerClassName} ${FULL_WIDTH_FORCE}`.trim()}>
      <Dropdown
        value={value}
        onValueChange={onValueChange}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
      >
        <Dropdown.Control className="w-full">
          <Dropdown.Content>
            {options.map((opt) => (
              <Dropdown.Item key={opt.value} value={opt.value}>
                {opt.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Content>
          <Dropdown.Icon />
        </Dropdown.Control>
      </Dropdown>
    </div>
  );
}
