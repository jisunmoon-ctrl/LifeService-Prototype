import clsx from "clsx";
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
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
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
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
};

function Row({ text, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10 }: RowProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="bg-[#f5f5f5] h-[36px] relative shrink-0 w-full" data-name="table">
        <div className="flex flex-col justify-center size-full">
          <Text text={text} additionalClassNames="items-start" />
        </div>
      </div>
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text1} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text2} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text3} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text4} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text5} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text6} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text7} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text8} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text9} />
      <Divider className="h-0 relative shrink-0 w-full" />
      <TableText text={text10} />
    </div>
  );
}

function Divider({ className }: { className?: string }) {
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

export default function SectionPricing() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative size-full" data-name="Section_pricing">
      <div className="content-stretch flex flex-col gap-[6px] items-start justify-center p-[16px] relative shrink-0 w-[375px]" data-name="Card/Title">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
          <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[17px] tracking-[-0.3px] whitespace-nowrap">20평대 이사 견적가</p>
        </div>
        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px] whitespace-nowrap">최근 3년 내 실제 오늘의집 이사 견적 데이터 기반</p>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="contents">
        <div className="content-stretch flex items-start mb-[-24px] px-[16px] relative shrink-0 w-[375px]" data-name="contents">
          <Row text="가구 규모" text1="1명" text2="3인 이상" text3="2인" text4="3인 이상" text5="2인" text6="1인" text7="3인 이상" text8="1인" text9="3인 이상" text10="3인 이상" />
          <Row text="종류" text1="포장" text2="포장" text3="반포장" text4="일반" text5="일반" text6="포장" text7="반포장" text8="반포장" text9="포장" text10="일반" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="tableAll">
            <div className="bg-[#f5f5f5] h-[36px] relative shrink-0 w-full" data-name="table">
              <div className="flex flex-col items-end justify-center size-full">
                <Text text="견적가" additionalClassNames="items-end" />
              </div>
            </div>
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="17만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="24만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="22만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="32만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="32만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="18만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="24만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="14만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="32만원" />
            <Divider className="h-0 relative shrink-0 w-full" />
            <TableAllTableText text="42만원" />
          </div>
        </div>
      </div>
    </div>
  );
}