import svgPaths from "./svg-f0w5au2s1v";
import { imgColorSet, imgColorSet1, imgColorSet2 } from "./svg-3gq3p";

function SquareBadge() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center max-h-[20px] min-h-[20px] px-[6px] py-[3px] relative rounded-[4px] shrink-0" data-name="🌀 Square Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#141414] text-[10px] text-center tracking-[-0.3px]">매칭완료</p>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Right">
      <SquareBadge />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8c8c8c] text-[12px] tracking-[-0.3px]">오전 9:12</p>
    </div>
  );
}

function ColorSet() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.351px_1.267px] mask-size-[13.298px_13.133px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet}')` }}>
      <div className="absolute bg-[#00a1ff] inset-0" data-name="Color" />
    </div>
  );
}

function IconCheckSealFilled() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="[Icon] Check Seal Filled">
      <ColorSet />
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Badge">
      <IconCheckSealFilled />
      <p className="font-['Pretendard:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#00a1ff] text-[15px] tracking-[-0.3px]">책임보장</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Name">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#141414] text-[20px] tracking-[-0.3px]">영구이사</p>
      <Badge />
    </div>
  );
}

function StarFilled() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="starFilled_12">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="star_12">
          <g id="-">
            <path d={svgPaths.p34ec7100} fill="var(--fill-0, #FFC300)" />
            <path clipRule="evenodd" d={svgPaths.p371bfe80} fill="var(--fill-0, #FFC300)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Review() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="review">
      <StarFilled />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px]">4.8</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="리뷰정보">
      <Review />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px]">·</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8c8c8c] text-[13px] tracking-[-0.3px]">리뷰 70</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Left">
      <Name />
      <Component />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Info">
      <Right />
      <Left />
    </div>
  );
}

function ColorSet1() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.875px_1.291px] mask-size-[10.45px_9.544px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet1}')` }}>
      <div className="absolute bg-[#141414] inset-0" data-name="Color" />
    </div>
  );
}

function IconTruckFilled() {
  return (
    <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="[Icon] Truck Filled">
      <ColorSet1 />
    </div>
  );
}

function Mask() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <IconTruckFilled />
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[12px]" data-name="🔸 Left Icon">
      <Mask />
      <div className="absolute bg-[#8c8c8c] inset-0" data-name="Color" />
    </div>
  );
}

function TextButton() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
          <LeftIcon />
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[14px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[18px]">업체 보기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="bg-[#ededed] h-full relative w-[18px]" data-name="🌀 Divider">
      <div className="max-h-[inherit] size-full" />
    </div>
  );
}

function ColorSet2() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.393px_1.364px] mask-size-[9.163px_9.163px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet2}')` }}>
      <div className="absolute bg-[#141414] inset-0" data-name="Color" />
    </div>
  );
}

function IconPhoneFilled() {
  return (
    <div className="aspect-[24/24] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="[Icon] Phone Filled">
      <ColorSet2 />
    </div>
  );
}

function Mask1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Mask">
      <IconPhoneFilled />
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[12px]" data-name="🔸 Left Icon">
      <Mask1 />
      <div className="absolute bg-[#8c8c8c] inset-0" data-name="Color" />
    </div>
  );
}

function TextButton1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌀 Text Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative w-full">
          <LeftIcon1 />
          <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2f3438] text-[14px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[18px]">업체 보기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <TextButton />
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center max-h-[18px] relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none h-full">
            <Divider />
          </div>
        </div>
      </div>
      <TextButton1 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start pb-[10px] pt-[16px] px-[16px] relative rounded-[8px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Info />
      <Frame />
    </div>
  );
}