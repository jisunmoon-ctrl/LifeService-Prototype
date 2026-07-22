import { IconChevronRight, IconSparkles } from "../../../../shared/ods";
import { BelongingsManualSelect } from "../../../../shared/belongings/BelongingsManualSelect";
import type { BelongingsData } from "../../../../shared/belongings/belongingsTypes";

/** Form/02 — 주요 짐 목록(기본) + 사진·영상 옵션 (Figma 7942-43864) */
export function EstimateBelongingsStep({
  belongings,
  onUpdateBelongings,
  onOpenPhoto,
}: {
  belongings: BelongingsData;
  onUpdateBelongings: (data: BelongingsData) => void;
  onOpenPhoto: () => void;
}) {
  return (
    <div className="flex flex-col">
      <div className="px-[16px] py-[20px] flex flex-col gap-[6px]">
        <h2 className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414]">
          정확한 견적을 위해
          <br />
          주요 이삿짐 정보를 알려주세요
        </h2>
        <p className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">
          원하는 방식을 선택해주세요
        </p>
      </div>

      <div className="px-[16px] pb-[16px]">
        <button
          type="button"
          onClick={onOpenPhoto}
          className="w-full rounded-[8px] border border-[#E0E0E0] bg-white pl-[20px] pr-[16px] py-[20px] flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-[16px] min-w-0">
            <IconSparkles size={24} className="text-[#141414] shrink-0" />
            <p className="text-[16px] font-semibold leading-[20px] tracking-[-0.3px] text-[#141414]">
              짐 사진·영상 올리기
            </p>
          </div>
          <IconChevronRight size={16} className="text-[#8C8C8C] shrink-0" />
        </button>
      </div>

      <BelongingsManualSelect
        hideTitle
        products={belongings.selectedProducts}
        boxCount={belongings.boxCount}
        memo={belongings.memo}
        onToggleProduct={(name, category) => {
          const exists = belongings.selectedProducts.find((p) => p.name === name);
          const selectedProducts = exists
            ? belongings.selectedProducts.map((p) =>
                p.name === name ? { ...p, selected: !p.selected } : p
              )
            : [
                ...belongings.selectedProducts,
                { id: `${category}-${name}`, name, category, selected: true },
              ];
          onUpdateBelongings({ ...belongings, selectedProducts, inputMethod: "manual" });
        }}
        onBoxCountChange={(boxCount) =>
          onUpdateBelongings({ ...belongings, boxCount, inputMethod: "manual" })
        }
        onMemoChange={(memo) =>
          onUpdateBelongings({ ...belongings, memo, inputMethod: "manual" })
        }
      />
    </div>
  );
}
