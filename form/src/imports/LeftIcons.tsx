import { imgColorSet } from "./svg-8lgw2";

export default function LeftIcons() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative size-full" data-name="Left Icons">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="[Icon] X">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.95px_3.95px] mask-size-[16.1px_16.1px]" data-name="Color Set" style={{ maskImage: `url('${imgColorSet}')` }}>
          <div className="absolute bg-[#141414] inset-0" data-name="Color" />
        </div>
      </div>
    </div>
  );
}