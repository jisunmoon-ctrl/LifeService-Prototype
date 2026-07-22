import { useState } from "react";
import { UnifiedScreenLayout } from "../../../shared/unified/UnifiedScreenLayout";
import { UnifiedEstimateBar } from "../../../shared/unified/UnifiedEstimateBar";
import { OdsCheckbox, IconStarFilled } from "../../../shared/ods";
import { RENTAL_PRODUCTS } from "../../../shared/unified/unifiedConstants";
import type { RentalProduct } from "../../../shared/unified/unifiedTypes";
import { AssetPCircleSmallMangoOrangeSvg } from "@bucketplace/assets/svg";
import {
  AssetWaterPurifierLargeGenuineBlueView1StillImage,
  AssetWaterPurifierLargeGenuineBlueView2StillImage,
  AssetWaterPurifierLargeGenuineBlueView3StillImage,
} from "@bucketplace/assets/image";

interface RentalFormScreenProps {
  onNavigate?: (screen: string) => void;
}

function Thumbnail({ kind }: { kind: RentalProduct["thumbnail"] }) {
  const common = { className: "size-full object-cover" };
  if (kind === "purifier1") return <AssetWaterPurifierLargeGenuineBlueView1StillImage {...common} />;
  if (kind === "purifier3") return <AssetWaterPurifierLargeGenuineBlueView3StillImage {...common} />;
  return <AssetWaterPurifierLargeGenuineBlueView2StillImage {...common} />;
}

export default function RentalFormScreen({ onNavigate }: RentalFormScreenProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set(["sk-1"]));

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <UnifiedScreenLayout
      onBack={() => onNavigate?.("construction_xsell_rental")}
      sticky={
        <UnifiedEstimateBar
          onBack={() => onNavigate?.("construction_xsell_rental")}
          onSubmit={() => onNavigate?.("construction_xsell_rental")}
          benefits={[
            {
              label: "특별 이벤트 혜택",
              icon: <AssetPCircleSmallMangoOrangeSvg size={20} />,
              value: "포인트 1만원",
              valueColor: "#00A1FF",
            },
          ]}
        />
      }
    >
      {/* 타이틀 */}
      <div className="p-[16px]">
        <h2 className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414]">
          나와 비슷한 고객들이
          <br />
          많이 선택한 렌탈 상품 추천
        </h2>
      </div>

      {/* 상품 목록 */}
      <div className="px-[16px] flex flex-col gap-[10px] pb-[20px]">
        {RENTAL_PRODUCTS.map((p) => {
          const isChecked = selected.has(p.id);
          return (
            <div
              key={p.id}
              className="flex items-center gap-[16px] border border-[#E0E0E0] rounded-[8px] p-[16px]"
            >
              <div className="flex-1 min-w-0 flex items-center gap-[12px]">
                {/* thumbnail */}
                <div className="shrink-0 size-[70px] rounded-[4px] overflow-hidden bg-[rgba(0,0,0,0.03)]">
                  <Thumbnail kind={p.thumbnail} />
                </div>
                {/* text */}
                <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
                  <p className="text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#2F3438]">
                    {p.price}
                  </p>
                  <p className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C] truncate">
                    {p.name}
                  </p>
                  <div className="flex items-center gap-[2px]">
                    <IconStarFilled size={12} className="text-[#FFAF3E]" />
                    <span className="text-[12px] font-medium leading-[16px] tracking-[-0.3px] text-[#8C8C8C]">
                      {p.rating}
                    </span>
                  </div>
                </div>
              </div>
              <span className="shrink-0">
                <OdsCheckbox checked={isChecked} onCheckedChange={() => toggle(p.id)} />
              </span>
            </div>
          );
        })}
      </div>
    </UnifiedScreenLayout>
  );
}
