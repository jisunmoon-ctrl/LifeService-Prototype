import { useState } from "react";
import { UnifiedScreenLayout } from "../../../shared/unified/UnifiedScreenLayout";
import { UnifiedEstimateBar } from "../../../shared/unified/UnifiedEstimateBar";
import { OdsCheckbox, IconChevronDown } from "../../../shared/ods";
import { INTERNET_PRODUCTS } from "../../../shared/unified/unifiedConstants";
import { AssetGiftSmallCoralRedSvg, AssetPCircleSmallMangoOrangeSvg } from "@bucketplace/assets/svg";

interface InternetFormScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function InternetFormScreen({ onNavigate }: InternetFormScreenProps) {
  // 두번째 상품이 기본 선택된 상태 (Figma)
  const [selected, setSelected] = useState<Set<string>>(new Set(["kt-2"]));

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
      onBack={() => onNavigate?.("construction_xsell_internet")}
      sticky={
        <UnifiedEstimateBar
          onBack={() => onNavigate?.("construction_xsell_internet")}
          onSubmit={() => onNavigate?.("construction_xsell_internet")}
          benefits={[
            {
              label: "사은품",
              icon: <AssetGiftSmallCoralRedSvg size={20} />,
              value: "현금 5만원 + 상품권 5만원",
            },
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
          나와 비슷한 <span className="text-[#00A1FF]">10평대</span> 고객들이
          <br />
          많이 선택한 인터넷 상품 추천
        </h2>
      </div>

      {/* 상품 목록 */}
      <div className="px-[16px] flex flex-col gap-[10px] pb-[20px]">
        {INTERNET_PRODUCTS.map((p) => {
          const isChecked = selected.has(p.id);
          return (
            <div
              key={p.id}
              className="flex items-center gap-[16px] border border-[#E0E0E0] rounded-[8px] p-[16px]"
            >
              <span className="shrink-0">
                <OdsCheckbox checked={isChecked} onCheckedChange={() => toggle(p.id)} />
              </span>
              <div className="flex-1 min-w-0 flex items-center gap-[12px]">
                {/* thumbnail */}
                <div className="shrink-0 size-[52px] rounded-full bg-[rgba(0,0,0,0.04)] flex items-center justify-center overflow-hidden">
                  {!p.custom && (
                    <span
                      className="text-[15px] font-extrabold italic leading-none"
                      style={{ color: p.carrierColor }}
                    >
                      {p.carrier}
                    </span>
                  )}
                </div>
                {/* text */}
                <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#2F3438] truncate">
                      {p.price}
                    </p>
                    <IconChevronDown size={16} className="text-[#141414] shrink-0" />
                  </div>
                  <p className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
                    {p.spec}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </UnifiedScreenLayout>
  );
}
