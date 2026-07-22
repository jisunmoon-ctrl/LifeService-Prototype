import truckImg from "../../../../assets/crosssell/truck-large-genuine-blue-view3.png";
import cleaningImg from "../../../../assets/crosssell/cleaning-tool-large-genuine-blue-view3.png";
import { IconPlus } from "../../../../shared/ods";

/** 이사+청소 크로스셀 듀얼 에셋 (Figma 7781-58040) */
export function CrossSellMovingCleaningIllustration() {
  return (
    <div className="flex gap-[4px] items-center pb-[12px]">
      <img
        src={truckImg}
        alt=""
        className="size-[108px] rounded-full object-contain shrink-0"
      />
      <div className="flex items-center justify-center size-[28px] rounded-full bg-[#4E94FA] shrink-0">
        <IconPlus size={12} className="text-white" />
      </div>
      <img
        src={cleaningImg}
        alt=""
        className="size-[108px] rounded-full object-contain shrink-0"
      />
    </div>
  );
}
