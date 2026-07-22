import clsx from "clsx";
import svgPaths from "./svg-hypc8ngh37";
import { imgLeft, imgColor, imgIconChevronDown } from "./svg-pyhcb";

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[10px] relative">{children}</div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("flex flex-col items-center justify-center size-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute size-[24px] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0002">
        <g id="Spinner">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="aspect-[24/24] flex-[1_0_0] min-h-px min-w-px relative">
      <Wrapper3>{children}</Wrapper3>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={additionalClassNames}>
      <Wrapper3>
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
          <div className="aspect-[24/24] flex-[1_0_0] min-h-px min-w-px relative">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#141414] inset-0" data-name="Color" />
      </Wrapper3>
    </div>
  );
}
type Helper17Props = {
  text: string;
  text1: string;
};

function Helper17({ text, text1 }: Helper17Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[77px]">{text}</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">{text1}</p>
    </div>
  );
}
type Helper16Props = {
  text: string;
  text1: string;
};

function Helper16({ text, text1 }: Helper16Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[343px]">
      <p className="relative shrink-0 text-[#8c8c8c] w-[78px]">{text}</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#141414]">{text1}</p>
    </div>
  );
}
type TableAllTableTextProps = {
  text: string;
};

function TableAllTableText({ text }: TableAllTableTextProps) {
  return (
    <div className="bg-white h-[36px] relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[8px] relative size-full">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[15px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type TableTextProps = {
  text: string;
};

function TableText({ text }: TableTextProps) {
  return (
    <div className="bg-white h-[36px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[14px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col justify-center px-[8px] relative size-full", additionalClassNames)}>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type RowProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};

function Row({ text, text1, text2, text3, text4, text5 }: RowProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="bg-[#f5f5f5] h-[36px] relative shrink-0 w-full" data-name="table">
        <div className="flex flex-col justify-center size-full">
          <Text1 text={text} additionalClassNames="items-start" />
        </div>
      </div>
      <Divider1 className="h-0 relative shrink-0 w-full" />
      <TableText text={text1} />
      <Divider1 className="h-0 relative shrink-0 w-full" />
      <TableText text={text2} />
      <Divider1 className="h-0 relative shrink-0 w-full" />
      <TableText text={text3} />
      <Divider1 className="h-0 relative shrink-0 w-full" />
      <TableText text={text4} />
      <Divider1 className="h-0 relative shrink-0 w-full" />
      <TableText text={text5} />
      <Divider1 className="h-0 relative shrink-0 w-full" />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center relative w-full", additionalClassNames)}>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[17px] tracking-[-0.3px] whitespace-nowrap">{text}</p>
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
    <Wrapper4>
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c1c1c1] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
    </Wrapper4>
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <Spinner2 additionalClassNames="left-1/2" />
    </div>
  );
}

function BoxButtonHelper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="relative shrink-0 size-[16px]">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgColor}')` }}>
        {children}
      </div>
    </Wrapper>
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <Spinner1 additionalClassNames="left-1/2" />
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
    </div>
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c1c1c1] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[16px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
    </div>
  );
}
type Spinner2Props = {
  additionalClassNames?: string;
};

function Spinner2({ additionalClassNames = "" }: Spinner2Props) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <circle cx="12" cy="12" id="Ellipse 58" r="11.5" stroke="var(--stroke-0, #F5F5F5)" />
      <path d={svgPaths.pbc39100} fill="var(--fill-0, #141414)" id="Intersect" />
    </Wrapper2>
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
    </div>
  );
}
type Spinner1Props = {
  additionalClassNames?: string;
};

function Spinner1({ additionalClassNames = "" }: Spinner1Props) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <circle cx="12" cy="12" id="Ellipse 58" r="11" stroke="var(--stroke-0, #F0F8FC)" strokeWidth="2" />
      <path d={svgPaths.pbc39100} fill="var(--fill-0, #00A1FF)" id="Intersect" />
    </Wrapper2>
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#00a1ff] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a1ff] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c1c1c1] text-[16px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
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
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <circle cx="12" cy="12" id="Ellipse 58" r="11" stroke="var(--stroke-0, white)" strokeOpacity="0.6" strokeWidth="2" />
      <path d={svgPaths.pbc39100} fill="var(--fill-0, white)" id="Intersect" />
    </Wrapper2>
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <Spinner additionalClassNames="left-1/2" />
    </div>
  );
}
type BoxButtonHelper1Props = {
  additionalClassNames?: string;
};

function BoxButtonHelper1({ children, additionalClassNames = "" }: React.PropsWithChildren<BoxButtonHelper1Props>) {
  return (
    <Wrapper additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.326px_2.2px] mask-size-[17.365px_19.575px]" data-name="Color Set" style={{ maskImage: `url('${imgLeft}')` }}>
        {children}
      </div>
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
      {leftIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[20px]">{title}</p>
      </div>
      {rightIcon && (
        <BoxButtonHelper1 additionalClassNames="size-[18px]">
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </BoxButtonHelper1>
      )}
    </div>
  );
}
type ArrowLeftProps = {
  className?: string;
  size?: "12" | "16" | "18" | "24" | "32" | "48";
};

function ArrowLeft({ className, size = "12" }: ArrowLeftProps) {
  const is16 = size === "16";
  const is18 = size === "18";
  const is24 = size === "24";
  const is32 = size === "32";
  const is48 = size === "48";
  return (
    <div className={className || `relative ${is48 ? "max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] size-[48px]" : is32 ? "max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] size-[32px]" : is24 ? "max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] size-[24px]" : is18 ? "max-h-[18px] max-w-[18px] min-h-[18px] min-w-[18px] size-[18px]" : is16 ? "max-h-[16px] max-w-[16px] min-h-[16px] min-w-[16px] size-[16px]" : "max-h-[12px] max-w-[12px] min-h-[12px] min-w-[12px] size-[12px]"}`}>
      <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] relative size-full">
          <div className={`absolute ${is48 ? "inset-[11.92%_7.92%_11.97%_9.17%]" : is32 ? "inset-[11.29%_7.3%_11.35%_8.53%]" : is24 ? "inset-[10.67%_6.67%_10.72%_7.92%]" : is18 ? "inset-[9.97%_5.97%_10.03%_7.22%]" : is16 ? "inset-[9.73%_5.71%_9.78%_7%]" : "inset-[9.42%_5.42%_9.47%_6.67%]"}`} data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is48 ? "0 0 39.8 36.5334" : is32 ? "0 0 26.9333 24.7556" : is24 ? "0 0 20.5 18.8667" : is18 ? "0 0 15.625 14.4" : is16 ? "0 0 13.9667 12.8778" : "0 0 10.55 9.73335"}>
              <path clipRule="evenodd" d={is48 ? svgPaths.p306d90c0 : is32 ? svgPaths.p25e19f00 : is24 ? svgPaths.p3bee1d00 : is18 ? svgPaths.p264d6e70 : is16 ? svgPaths.p96a1d00 : svgPaths.p3b51c880} fill="var(--fill-0, #2F3438)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
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
  const isH10AndIsTrueOrFalse = variant === "H10" && [true, false].includes(mode);
  return (
    <div className={className || `relative w-[375px] ${isH10AndIsTrueOrFalse ? "h-[10px]" : "h-px"}`}>
      {variant === "H1" && [true, false].includes(mode) && <div className={`absolute inset-0 ${variant === "H1" && !mode ? "bg-[#3f474d]" : "bg-[#eaedef]"}`} data-name="cell/divider/h1" />}
      {isH10AndIsTrueOrFalse && <div className={`absolute inset-0 ${variant === "H10" && !mode ? "bg-[#0b0c0e]" : "bg-[#f7f9fa]"}`} data-name="cell/divider/h10" />}
    </div>
  );
}

function GlobalColorSet({ className }: { className?: string }) {
  return (
    <div className={className || ""} data-name="🌐 GLOBAL_COLOR_SET">
      <div className="relative size-[24px]" data-name="value=🌐 foreground shipping">
        <div className="absolute bg-[#6131d2] inset-0" data-name="Color" />
      </div>
    </div>
  );
}
type CommerceColorSetProps = {
  className?: string;
  value?: "🟠 foreground inverse weak" | "🟠 foreground review star toggle off";
};

function CommerceColorSet({ className, value = "🟠 foreground inverse weak" }: CommerceColorSetProps) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className={`absolute inset-0 ${value === "🟠 foreground review star toggle off" ? "bg-[#e8e8e8]" : "bg-[#b9b9b9]"}`} data-name="Color" />
    </div>
  );
}
type OdsColorSetProps = {
  className?: string;
  value?: "🌀 foreground" | "🌀 foreground weak" | "🌀 foreground brand" | "🌀 foreground inverse" | "🌀 foreground emphasis" | "🌀 foreground critical" | "🌀 foreground attention" | "🌀 foreground disabled" | "accent red" | "accent yellow" | "accent purple";
};

function OdsColorSet({ className, value = "🌀 foreground" }: OdsColorSetProps) {
  const isForegroundDisabled = value === "🌀 foreground disabled";
  return (
    <div className={className || `relative size-[24px] ${isForegroundDisabled ? "bg-white" : ""}`}>
      <div className={`absolute inset-0 ${isForegroundDisabled ? "bg-[#c1c1c1]" : value === "🌀 foreground attention" ? "bg-[#b27800]" : value === "🌀 foreground critical" ? "bg-[#f05656]" : value === "accent purple" ? "bg-[#6f3dde]" : value === "accent yellow" ? "bg-[#ffc300]" : value === "accent red" ? "bg-[#fd3d4a]" : ["🌀 foreground brand", "🌀 foreground emphasis"].includes(value) ? "bg-[#00a1ff]" : value === "🌀 foreground inverse" ? "bg-white" : value === "🌀 foreground weak" ? "bg-[#8c8c8c]" : "bg-[#141414]"}`} data-name="Color" />
    </div>
  );
}
type ColorSetProps = {
  className?: string;
  token?: "🌀 ODS" | "🌐 GLOBAL" | "🟠 COMMERCE";
};

function ColorSet({ className, token = "🌀 ODS" }: ColorSetProps) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className={`absolute inset-0 ${token === "🌐 GLOBAL" ? "bg-[#6131d2]" : token === "🟠 COMMERCE" ? "bg-[#b9b9b9]" : "bg-[#141414]"}`} data-name="Color" />
    </div>
  );
}

function Divider1({ className }: { className?: string }) {
  return (
    <div className={className || "h-0 relative w-[85.75px]"} data-name="divider">
      <div className="absolute bottom-full left-0 right-0 top-0" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.75 1">
            <line id="divider" stroke="var(--stroke-0, #E0E0E0)" x2="85.75" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
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
        <Wrapper5>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <Spinner additionalClassNames="left-1/2" />
        </Wrapper5>
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
        <div className="flex flex-row items-center justify-center size-full">
          <Helper10 additionalClassNames="px-[16px] py-[10px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && loading && state && size === "40") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=True, State=Enabled, Size=40">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper11 additionalClassNames="px-[16px] py-[10px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
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
        <Wrapper5>
          {leftIcon && (
            <BoxButtonHelper2>
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper2>
          )}
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper2>
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper2>
          )}
        </Wrapper5>
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
        <Wrapper6>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="opacity-0 size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <Spinner additionalClassNames="left-1/2" />
        </Wrapper6>
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
        <div className="flex flex-row items-center justify-center size-full">
          <Helper10 additionalClassNames="px-[8px] py-[6px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
        </div>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && loading && state && size === "32") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=True, State=Enabled, Size=32">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <Helper11 additionalClassNames="px-[8px] py-[6px]" leftIcon={leftIcon} title={title} rightIcon={rightIcon} />
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
        <Wrapper6>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
        </Wrapper6>
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
        <Wrapper4>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
        </Wrapper4>
      </div>
    );
  }
  if (shape === "Filled" && variant === "Primary1" && loading && state && size === "28") {
    return (
      <div className={className || "bg-[#00a1ff] relative rounded-[4px]"} data-name="Shape=Filled, Variant=Primary1, Loading=True, State=Enabled, Size=28">
        <Wrapper4>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[14px] text-center text-white tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="opacity-0 size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <Spinner additionalClassNames="left-[calc(50%-0.5px)]" />
        </Wrapper4>
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
        <Wrapper4>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
        </Wrapper4>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Primary1" && loading && state && size === "28") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Primary1, Loading=True, State=Enabled, Size=28">
        <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Wrapper4>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#00a1ff] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <Spinner1 additionalClassNames="left-[calc(50%-0.5px)]" />
        </Wrapper4>
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
        <Wrapper4>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
        </Wrapper4>
      </div>
    );
  }
  if (shape === "Outlined" && variant === "Base1" && loading && state && size === "28") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Shape=Outlined, Variant=Base1, Loading=True, State=Enabled, Size=28">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Wrapper4>
          {leftIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[20px]">{title}</p>
          </div>
          {rightIcon && (
            <BoxButtonHelper1 additionalClassNames="size-[16px]">
              <div className="absolute bg-[#141414] inset-0" data-name="Color" />
            </BoxButtonHelper1>
          )}
          <Spinner2 additionalClassNames="left-[calc(50%-0.5px)]" />
        </Wrapper4>
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

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="[Mobile] 신청내역상셰_매칭딜레이">
      <div className="absolute left-0 top-0 w-[375px]" data-name="TOP">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="bg-white h-[44px] shrink-0 sticky top-0 w-full" data-name="Statusbar">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="iPhone X/Status Bars/Status Bar (Black)">
              <div className="absolute h-[11.333px] right-[14.67px] top-[17.33px] w-[24.328px]" data-name="Battery">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
                  <g id="Battery">
                    <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, #141414)" width="21" x="0.5" y="0.5" />
                    <path d={svgPaths.p9ed9280} fill="var(--fill-0, #141414)" id="Cap" opacity="0.4" />
                    <rect fill="var(--fill-0, #141414)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[39.39%_11.74%_35.69%_84.18%]" data-name="Wifi">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2725 10.966">
                  <path d={svgPaths.p3d78f640} fill="var(--fill-0, #141414)" id="Wifi" />
                </svg>
              </div>
              <div className="absolute inset-[40.15%_17.16%_35.61%_78.31%]" data-name="Cellular Connection">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
                  <path d={svgPaths.p26d17600} fill="var(--fill-0, #141414)" id="Cellular Connection" />
                </svg>
              </div>
              <div className="absolute h-[21px] left-[21px] top-[13px] w-[54px]" data-name="Time Style">
                <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[0] left-[27px] not-italic text-[#141414] text-[14px] text-center top-[calc(50%-7.5px)] tracking-[-0.28px] w-[54px]">
                  <span className="leading-[normal]">9:4</span>
                  <span className="leading-[normal]">1</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="🌀🤖 Standard Top Navigation">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                <div className="h-[44px] relative shrink-0 w-full" data-name="TopNavigation Section">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
                      <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Left Icons">
                        <ArrowLeft className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] relative shrink-0 size-[24px]" size="24" />
                      </div>
                      <div className="content-stretch flex gap-[14px] items-center justify-center shrink-0" data-name="Right Icons" />
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[44px] items-center justify-center left-1/2 top-1/2" data-name="Center">
                        <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[16px] text-center text-ellipsis tracking-[-0.3px] whitespace-nowrap">매칭 업체 목록</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-center justify-center left-[841px] rounded-[4px] size-[160px] top-[758px]">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_5px_0px_rgba(63,71,77,0.05)]" />
        <div className="overflow-clip relative shrink-0 size-[49px]" data-name="won_48">
          <div className="absolute inset-[20.13%_8.33%]" data-name="-">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8333 29.2701">
              <g id="-">
                <path d={svgPaths.p5ae3680} fill="var(--fill-0, #141414)" />
                <path d={svgPaths.p397d2b00} fill="var(--fill-0, #141414)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Apple_SD_Gothic_Neo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] whitespace-nowrap">광고상품소개</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[88px]" data-name="Container">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
                <div className="relative shrink-0 size-[40px]" data-name="[Asset] Shipping Box Small Genuine Blue">
                  <Wrapper3 additionalClassNames="overflow-clip rounded-[inherit]">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                        <g id="Vector">
                          <path d={svgPaths.p5909100} fill="var(--fill-0, #00A1FF)" id="Path" />
                        </g>
                      </svg>
                    </div>
                  </Wrapper3>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic relative tracking-[-0.3px] whitespace-nowrap">
                  <p className="font-['Pretendard:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#2f3438] text-[24px]">이사</p>
                  <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#828c94] text-[14px]">2월 19일 신청</p>
                </div>
              </div>
              <BoxButton className="relative rounded-[4px] shrink-0" leftIcon={false} rightIcon={false} shape="Outlined" size="40" title="매칭 중단" variant="Base1" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[375px]" data-name="Section_List">
          <div className="bg-[#f7f9fa] relative rounded-[4px] shrink-0 w-[343px]" data-name="❌ Callout">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[311px]">
                <div className="relative shrink-0 size-[18px]" data-name="🪣 Basic Loading">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <circle cx="9" cy="9" id="Ellipse 58" r="8" stroke="var(--stroke-0, white)" strokeWidth="2" />
                  </svg>
                  <div className="absolute bottom-1/2 left-1/2 right-0 top-0" data-name="Intersect">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                      <path d={svgPaths.p277baa80} fill="var(--fill-0, #2F3438)" id="Intersect" />
                    </svg>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['Pretendard:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#2f3438] text-[16px] tracking-[-0.3px]">매칭할 업체를 찾는 중이에요</p>
              </div>
            </div>
          </div>
        </div>
        <Divider className="h-[10px] relative shrink-0 w-[375px]" variant="H10" />
        <div className="relative shrink-0" data-name="Section_pricing">
          <div className="content-stretch flex flex-col items-start relative">
            <div className="content-stretch flex flex-col gap-[6px] items-start justify-center p-[16px] relative shrink-0 w-[375px]" data-name="Card/Title">
              <Text text="20평대 견적가" additionalClassNames="gap-[4px] shrink-0" />
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px] whitespace-nowrap">최근 3년 내 실제 오늘의집 이사 견적 데이터 기반</p>
            </div>
            <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="contents">
              <div className="content-stretch flex items-start mb-[-24px] px-[16px] relative shrink-0 w-[375px]" data-name="contents">
                <Row text="가구 규모" text1="1명" text2="3인 이상" text3="2인" text4="3인 이상" text5="3인 이상" />
                <Row text="종류" text1="포장" text2="포장" text3="반포장" text4="일반" text5="일반" />
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="tableAll">
                  <div className="bg-[#f5f5f5] h-[36px] relative shrink-0 w-full" data-name="table">
                    <div className="flex flex-col items-end justify-center size-full">
                      <Text1 text="견적가" additionalClassNames="items-end" />
                    </div>
                  </div>
                  <Divider1 className="h-0 relative shrink-0 w-full" />
                  <TableAllTableText text="17만원" />
                  <Divider1 className="h-0 relative shrink-0 w-full" />
                  <TableAllTableText text="24만원" />
                  <Divider1 className="h-0 relative shrink-0 w-full" />
                  <TableAllTableText text="-" />
                  <Divider1 className="h-0 relative shrink-0 w-full" />
                  <TableAllTableText text="11만원" />
                  <Divider1 className="h-0 relative shrink-0 w-full" />
                  <TableAllTableText text="11만원" />
                  <Divider1 className="h-0 relative shrink-0 w-full" />
                </div>
              </div>
              <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0)] items-start mb-[-24px] pb-[16px] pt-[24px] px-[16px] relative shrink-0 to-[40.441%] to-white w-[375px]" data-name="btn">
                <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="🌀 Box Button">
                  <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[10px] relative size-full">
                      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-center tracking-[-0.3px] whitespace-nowrap">
                        <p className="leading-[20px]">더보기</p>
                      </div>
                      <div className="relative shrink-0 size-[16px]" data-name="🔸 Right">
                        <Wrapper3>
                          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
                            <Wrapper1>
                              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.726px_1.784px] mask-size-[18.531px_20.431px]" data-name="🔸 Color" style={{ maskImage: `url('${imgIconChevronDown}')` }}>
                                <div className="absolute bg-[#141414] inset-0" data-name="Color" />
                              </div>
                            </Wrapper1>
                          </div>
                          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
                        </Wrapper3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider className="h-[10px] relative shrink-0 w-[375px]" variant="H10" />
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section_Info">
          <div className="relative shrink-0 w-[375px]" data-name="Card/Title">
            <div className="flex flex-row items-center size-full">
              <Text text="신청내역" additionalClassNames="p-[16px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[16px] relative shrink-0" data-name="information">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 tracking-[-0.3px]" data-name="section">
              <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">내 신청정보</p>
              <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[16px] items-start relative shrink-0 text-[15px]">
                <Helper16 text="신청일자" text1="2025년 1월 25일 23:15" />
                <Helper16 text="고객명" text1="문지선" />
                <Helper16 text="이사종류" text1="가정이사" />
                <Helper16 text="이사예정일" text1="2025년 3월 25일 수요일" />
                <Helper16 text="연락처" text1="010-1234-5678" />
              </div>
            </div>
            <Divider className="h-px relative shrink-0 w-[343px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 tracking-[-0.3px]" data-name="section">
              <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] text-[16px] w-[173px]">출발지</p>
              <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[16px] items-start relative shrink-0 text-[15px]">
                <Helper16 text="주소" text1="서울 서초구 서초대로74길 4 삼성생명서초타워 25층" />
                <Helper16 text="엘레베이터" text1="있음" />
                <Helper16 text="평수" text1="40평대" />
              </div>
            </div>
            <Divider className="h-px relative shrink-0 w-[343px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.3px]" data-name="section">
              <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] relative shrink-0 text-[#141414] w-[173px]">도착지</p>
              <div className="content-stretch flex flex-col font-['Apple_SD_Gothic_Neo:Regular',sans-serif] gap-[16px] items-start relative shrink-0">
                <Helper17 text="주소" text1="서울 서초구 서초대로74길 4 삼성생명서초타워 25층" />
                <Helper17 text="엘레베이터" text1="있음" />
                <Helper17 text="평수" text1="40평대" />
                <Helper17 text="가구인원수" text1="5인 이상" />
              </div>
            </div>
            <Divider className="h-px relative shrink-0 w-[343px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="section">
              <p className="font-['Apple_SD_Gothic_Neo:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#141414] text-[16px] tracking-[-0.3px] w-[173px]">메모</p>
              <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-[343px]" data-name="🪣 Textarea">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                  <div className="bg-[#f7f9fa] relative rounded-[4px] shrink-0 w-full" data-name="Textarea">
                    <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[16px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-h-px min-w-px relative" data-name="Container">
                        <p className="flex-[1_0_0] font-['Apple_SD_Gothic_Neo:Regular',sans-serif] h-full leading-[24px] min-h-px min-w-px not-italic relative text-[#141414] text-[16px] tracking-[-0.3px]">고객이 입력한 내용</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}