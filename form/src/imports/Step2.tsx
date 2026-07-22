import clsx from "clsx";
import svgPaths from "./svg-nbf92rpbea";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[10px] relative">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute size-[24px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0002">
        <g id="Spinner">{children}</g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-start left-0 p-[16px] w-[375px]", additionalClassNames)}>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Helper15Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper15({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper15Props) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <Helper2 additionalClassNames="py-[15px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
    </div>
  );
}
type Helper14Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper14({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper14Props) {
  return (
    <Wrapper2>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c1c1c1] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
    </Wrapper2>
  );
}
type Helper13Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper13({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper13Props) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <Helper9 additionalClassNames="px-[8px] py-[6px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
    </div>
  );
}
type Helper12Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper12({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper12Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
      <Spinner2 additionalClassNames="left-1/2" />
    </div>
  );
}
type Helper11Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper11({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper11Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
    </div>
  );
}
type Helper10Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper10({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper10Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
      <Spinner1 additionalClassNames="left-1/2" />
    </div>
  );
}

function BoxButtonHelper2() {
  return (
    <Wrapper additionalClassNames="relative shrink-0 size-[16px]">
      <div className="absolute bg-[#00a1ff] inset-0 mask-position-[]" data-name="Color" />
    </Wrapper>
  );
}
type Helper9Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper9({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper9Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c1c1c1] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
    </div>
  );
}
type Helper8Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper8({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper8Props) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <Helper9 additionalClassNames="px-[16px] py-[10px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
    </div>
  );
}
type Helper7Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper7({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper7Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
    </div>
  );
}
type Spinner2Props = {
  additionalClassNames?: string;
};

function Spinner2({ additionalClassNames = "" }: Spinner2Props) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <circle cx="12" cy="12" id="Ellipse 58" r="11.5" stroke="var(--stroke-0, #F5F5F5)" />
      <path d={svgPaths.pbc39100} fill="var(--fill-0, #141414)" id="Intersect" />
    </Wrapper1>
  );
}
type Helper6Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper6({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper6Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center px-[16px] relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <Spinner2 additionalClassNames="left-1/2" />
    </div>
  );
}
type Helper5Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper5({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper5Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center px-[16px] relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
    </div>
  );
}
type Spinner1Props = {
  additionalClassNames?: string;
};

function Spinner1({ additionalClassNames = "" }: Spinner1Props) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <circle cx="12" cy="12" id="Ellipse 58" r="11" stroke="var(--stroke-0, #F0F8FC)" strokeWidth="2" />
      <path d={svgPaths.pbc39100} fill="var(--fill-0, #00A1FF)" id="Intersect" />
    </Wrapper1>
  );
}
type Helper4Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper4({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper4Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center px-[16px] relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#00a1ff] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <Spinner1 additionalClassNames="left-1/2" />
    </div>
  );
}
type Helper3Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper3({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper3Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center px-[16px] relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a1ff] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
    </div>
  );
}
type Helper2Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper2({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper2Props) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center px-[16px] relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c1c1c1] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
    </div>
  );
}
type Helper1Props = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper1({ leftIcon, title, rightIcon, additionalClassNames = "" }: Helper1Props) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <Helper2 additionalClassNames="py-[12px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
    </div>
  );
}
type SpinnerProps = {
  additionalClassNames?: string;
};

function Spinner({ additionalClassNames = "" }: SpinnerProps) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <circle cx="12" cy="12" id="Ellipse 58" r="11" stroke="var(--stroke-0, white)" strokeOpacity="0.6" strokeWidth="2" />
      <path d={svgPaths.pbc39100} fill="var(--fill-0, white)" id="Intersect" />
    </Wrapper1>
  );
}
type HelperProps = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function Helper({ leftIcon, title, rightIcon, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center px-[16px] relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <Spinner additionalClassNames="left-1/2" />
    </div>
  );
}
type BoxButtonHelper1Props = {
  additionalClassNames?: string;
};

function BoxButtonHelper1({ additionalClassNames = "" }: BoxButtonHelper1Props) {
  return (
    <Wrapper additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>
      <div className="absolute bg-[#141414] inset-0 mask-position-[]" data-name="Color" />
    </Wrapper>
  );
}
type BoxButtonHelperProps = {
  leftIcon: boolean;
  title: string;
  rightIcon: boolean;
  additionalClassNames?: string;
};

function BoxButtonHelper({ leftIcon, title, rightIcon, additionalClassNames = "" }: BoxButtonHelperProps) {
  return (
    <div className={clsx("content-stretch flex gap-[4px] items-center justify-center px-[16px] relative", additionalClassNames)}>
      {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[18px]" />}
    </div>
  );
}
type BoxButtonProps = {
  className?: string;
  leftIcon?: boolean;
  loading?: boolean;
  rightIcon?: boolean;
  shape?: "Filled" | "Outlined";
  size?: "50(PC only)" | "44" | "40" | "32" | "28";
  state?: boolean;
  title?: string;
  variant?: "Primary1" | "Base1";
};

function BoxButton({ className, leftIcon = true, loading = false, rightIcon = true, shape = "Filled", size = "50(PC only)", state = true, title = "Button", variant = "Primary1" }: BoxButtonProps) {
  if (shape === "Filled" && variant === "Primary1" && !loading && state && size === "44") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Enabled, Size=44">
        <div className="flex flex-row items-center justify-center size-full">
          <BoxButtonHelper additionalClassNames="py-[12px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && loading && state && size === "44") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=True, State=Enabled, Size=44">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="py-[12px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && !loading && !state && size === "44") {
    return (
      <div className={className || "bg-[#ededed] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Disabled, Size=44">
        <Helper1 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && state && size === "44") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Enabled, Size=44">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper3 additionalClassNames="py-[12px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && loading && state && size === "44") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=True, State=Enabled, Size=44">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper4 additionalClassNames="py-[12px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && !state && size === "44") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Disabled, Size=44">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && state && size === "44") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Enabled, Size=44">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper5 additionalClassNames="py-[12px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && loading && state && size === "44") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=True, State=Enabled, Size=44">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper6 additionalClassNames="py-[12px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && !state && size === "44") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Disabled, Size=44">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper1 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && !loading && state && size === "40") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Enabled, Size=40">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper7 additionalClassNames="px-[16px] py-[10px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && loading && state && size === "40") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=True, State=Enabled, Size=40">
        <Wrapper3>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <Spinner additionalClassNames="left-1/2" />
        </Wrapper3>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && !loading && !state && size === "40") {
    return (
      <div className={className || "bg-[#ededed] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Disabled, Size=40">
        <Helper8 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && state && size === "40") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Enabled, Size=40">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Wrapper3>
          {leftIcon && <BoxButtonHelper2 />}
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper2 />}
        </Wrapper3>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && loading && state && size === "40") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=True, State=Enabled, Size=40">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper10 additionalClassNames="px-[16px] py-[10px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && !state && size === "40") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Disabled, Size=40">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper8 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && state && size === "40") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Enabled, Size=40">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper11 additionalClassNames="px-[16px] py-[10px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && loading && state && size === "40") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=True, State=Enabled, Size=40">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper12 additionalClassNames="px-[16px] py-[10px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && !state && size === "40") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Disabled, Size=40">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper8 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && !loading && state && size === "32") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Enabled, Size=32">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper7 additionalClassNames="px-[8px] py-[6px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && loading && state && size === "32") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=True, State=Enabled, Size=32">
        <Wrapper4>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="opacity-0 size-[16px]" />}
          <Spinner additionalClassNames="left-1/2" />
        </Wrapper4>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && !loading && !state && size === "32") {
    return (
      <div className={className || "bg-[#ededed] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Disabled, Size=32">
        <Helper13 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && state && size === "32") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Enabled, Size=32">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Wrapper4>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
        </Wrapper4>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && loading && state && size === "32") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=True, State=Enabled, Size=32">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper10 additionalClassNames="px-[8px] py-[6px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && !state && size === "32") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Disabled, Size=32">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper13 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && state && size === "32") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Enabled, Size=32">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper11 additionalClassNames="px-[8px] py-[6px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && loading && state && size === "32") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=True, State=Enabled, Size=32">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper12 additionalClassNames="px-[8px] py-[6px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && !state && size === "32") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Disabled, Size=32">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper13 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && !loading && state && size === "28") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Enabled, Size=28">
        <Wrapper2>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
        </Wrapper2>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && loading && state && size === "28") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=True, State=Enabled, Size=28">
        <Wrapper2>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="opacity-0 size-[16px]" />}
          <Spinner additionalClassNames="left-[calc(50%-0.5px)]" />
        </Wrapper2>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && !loading && !state && size === "28") {
    return (
      <div className={className || "bg-[#ededed] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Disabled, Size=28">
        <Helper14 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && state && size === "28") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Enabled, Size=28">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Wrapper2>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
        </Wrapper2>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && loading && state && size === "28") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=True, State=Enabled, Size=28">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Wrapper2>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <Spinner1 additionalClassNames="left-[calc(50%-0.5px)]" />
        </Wrapper2>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && !state && size === "28") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Disabled, Size=28">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper14 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && state && size === "28") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Enabled, Size=28">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Wrapper2>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
        </Wrapper2>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && loading && state && size === "28") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=True, State=Enabled, Size=28">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Wrapper2>
          {leftIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && <BoxButtonHelper1 additionalClassNames="size-[16px]" />}
          <Spinner2 additionalClassNames="left-[calc(50%-0.5px)]" />
        </Wrapper2>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && !state && size === "28") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Disabled, Size=28">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper14 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && loading && state && size === "50(PC only)") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=True, State=Enabled, Size=50(PC only)">
        <div className="flex flex-row items-center justify-center size-full">
          <Helper additionalClassNames="py-[15px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && !loading && !state && size === "50(PC only)") {
    return (
      <div className={className || "bg-[#ededed] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Disabled, Size=50(PC only)">
        <Helper15 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && state && size === "50(PC only)") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Enabled, Size=50(PC only)">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper3 additionalClassNames="py-[15px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && loading && state && size === "50(PC only)") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=True, State=Enabled, Size=50(PC only)">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper4 additionalClassNames="py-[15px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && !loading && !state && size === "50(PC only)") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=False, State=Disabled, Size=50(PC only)">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper15 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && state && size === "50(PC only)") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Enabled, Size=50(PC only)">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper5 additionalClassNames="py-[15px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && loading && state && size === "50(PC only)") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=True, State=Enabled, Size=50(PC only)">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper6 additionalClassNames="py-[15px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && !loading && !state && size === "50(PC only)") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=False, State=Disabled, Size=50(PC only)">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Helper15 leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    );
  }
  return (
    <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=False, State=Enabled, Size=50(PC only)">
      <div className="flex flex-row items-center justify-center size-full">
        <BoxButtonHelper additionalClassNames="py-[15px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
      </div>
    </div>
  );
}
type DividerProps = {
  className?: string;
  mode?: boolean;
  variant?: "H1" | "H10";
};

function Divider({ className, mode = true, variant = "H1" }: DividerProps) {
  const isH10 = variant === "H10";
  return (
    <div className={className || `relative w-[375px] ${isH10 ? "h-[10px]" : "h-px"}`}>
      {variant === "H1" && <div className={`absolute inset-0 ${variant === "H1" && !mode ? "bg-[#3f474d]" : "bg-[#eaedef]"}`} data-name="cell/divider/h1" />}
      {isH10 && <div className={`absolute inset-0 ${variant === "H10" && !mode ? "bg-[#0b0c0e]" : "bg-[#f7f9fa]"}`} data-name="cell/divider/h10" />}
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-white relative size-full" data-name="step2">
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-[#09609c] h-[44px] left-0 top-0 w-[375px]" />
        <div className="absolute bg-white h-[44px] left-0 top-0 w-[375px]" data-name="Statusbar">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="iPhone X/Status Bars/Status Bar (Black)">
            <div className="absolute h-[11.333px] right-[14.67px] top-[17.33px] w-[24.328px]" data-name="Battery">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
                <g id="Battery">
                  <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
                  <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                  <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[39.39%_11.74%_35.69%_84.18%]" data-name="Wifi">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
                <path d={svgPaths.p3d78f640} fill="var(--fill-0, black)" id="Wifi" />
              </svg>
            </div>
            <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Cellular Connection">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
                <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
              </svg>
            </div>
            <div className="absolute h-[21px] left-[21px] top-[13px] w-[54px]" data-name="Time Style">
              <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[0] left-[27px] not-italic text-[14px] text-black text-center top-[calc(50%-7.5px)] tracking-[-0.28px] w-[54px]">
                <span className="leading-[normal]">9:4</span>
                <span className="leading-[normal]">1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-0 top-[44px]">
        <div className="absolute bg-white h-[44px] left-0 top-[44px] w-[375px]" />
        <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-[187px] not-italic text-[#141414] text-[18px] text-center top-[56px] tracking-[-0.3px] whitespace-nowrap">이사 신청</p>
        <p className="-translate-x-full absolute font-['Pretendard:Regular',sans-serif] leading-[18px] left-[359px] not-italic text-[#8c8c8c] text-[14px] text-right top-[56px] tracking-[-0.3px] whitespace-nowrap">다음에</p>
        <div className="absolute left-[16px] overflow-clip size-[24px] top-[54px]" data-name="Dismiss">
          <div className="absolute inset-[14.75%]" data-name="-">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9192 16.9192">
              <g id="-">
                <path clipRule="evenodd" d={svgPaths.p1a74ce40} fill="#141414" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2cfe9b00} fill="#141414" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start left-0 p-[16px] top-[94px] w-[375px]">
        <div className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#141414] text-[24px] tracking-[-0.3px] whitespace-nowrap">
          <p className="mb-0">큰 짐 여부도</p>
          <p>체크해주세요</p>
        </div>
      </div>
      <Text text="가전" additionalClassNames="top-[190px]" />
      <Text text="가구" additionalClassNames="top-[444px]" />
      <Divider className="absolute h-px left-0 top-[87px] w-[375px]" />
      <div className="absolute h-[6px] left-0 top-[88px] w-[375px]" data-name="progressbar_mobile">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 6">
          <g id="progressbar_mobile">
            <path d={svgPaths.p19183400} fill="var(--fill-0, #F7F9FA)" id="-" />
            <path d={svgPaths.p3f472400} fill="var(--fill-0, #00A1FF)" id="status" />
          </g>
        </svg>
      </div>
      <div className="absolute bg-white h-[34px] left-0 top-[778px] w-[375px]" data-name="Indicator">
        <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
      <div className="absolute bg-white left-0 top-[716px] w-[375px]" data-name="ButtonOnlyToolbar">
        <div className="content-stretch flex gap-[6px] items-start p-[6px] relative w-full">
          <div className="bg-[#00a1ff] flex-[1_0_0] max-h-[50px] min-h-[50px] min-w-px relative rounded-[4px]" data-name="🪣 Button">
            <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
              <div className="content-stretch flex gap-[6px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] relative w-full">
                <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
                  <p className="leading-[20px]">다음</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(4,fit-content(100%))] left-[16px] top-[242px] w-[343px]">
        <BoxButton className="col-1 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="TV" variant="Base1" />
        <BoxButton className="col-2 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="냉장고" variant="Base1" />
        <BoxButton className="col-3 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="세탁기" variant="Base1" />
        <BoxButton className="col-1 justify-self-stretch relative rounded-[4px] row-2 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="냉장고" variant="Base1" />
        <BoxButton className="col-2 justify-self-stretch relative rounded-[4px] row-2 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="에어컨" variant="Base1" />
        <BoxButton className="col-3 justify-self-stretch relative rounded-[4px] row-2 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="스타일러" variant="Base1" />
        <BoxButton className="col-1 justify-self-stretch relative rounded-[4px] row-3 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="식기세척기" variant="Base1" />
        <BoxButton className="col-2 justify-self-stretch relative rounded-[4px] row-3 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="정수기" variant="Base1" />
        <BoxButton className="col-3 justify-self-stretch relative rounded-[4px] row-3 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="안마의자" variant="Base1" />
        <BoxButton className="col-1 justify-self-stretch relative rounded-[4px] row-4 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="로봇청소기" variant="Base1" />
        <BoxButton className="col-2 justify-self-stretch relative rounded-[4px] row-4 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="건조기" variant="Base1" />
        <BoxButton className="col-3 justify-self-stretch relative rounded-[4px] row-4 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="책장" variant="Base1" />
      </div>
      <div className="absolute gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] left-[16px] top-[496px] w-[343px]">
        <BoxButton className="col-1 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="침대" />
        <BoxButton className="col-2 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="옷장" variant="Base1" />
        <BoxButton className="col-3 justify-self-stretch relative rounded-[4px] row-1 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="책장" variant="Base1" />
        <BoxButton className="col-1 justify-self-stretch relative rounded-[4px] row-2 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="서랍장" variant="Base1" />
        <BoxButton className="col-2 justify-self-stretch relative rounded-[4px] row-2 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="소파" variant="Base1" />
        <BoxButton className="col-3 justify-self-stretch relative rounded-[4px] row-2 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="식탁" variant="Base1" />
        <BoxButton className="col-1 justify-self-stretch relative rounded-[4px] row-3 self-start shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="피아노" variant="Base1" />
      </div>
    </div>
  );
}