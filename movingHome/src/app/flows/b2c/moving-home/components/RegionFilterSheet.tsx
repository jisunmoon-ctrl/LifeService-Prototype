import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  REGION_DISTRICTS,
  REGION_PROVINCES,
  type RegionProvince,
  type RegionSelection,
} from "../../../../data/regionData";

interface RegionFilterSheetProps {
  selected: RegionSelection;
  onSelect: (value: RegionSelection) => void;
  onClose: () => void;
}

export function RegionFilterSheet({ selected, onSelect, onClose }: RegionFilterSheetProps) {
  const [draftProvince, setDraftProvince] = useState<RegionProvince>(selected.province as RegionProvince);

  const districts = REGION_DISTRICTS[draftProvince];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleProvinceSelect = (province: RegionProvince) => {
    setDraftProvince(province);
  };

  const handleDistrictSelect = (district: string) => {
    onSelect({ province: draftProvince, district });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      <motion.div
        key="sheet"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[16px] overflow-hidden flex flex-col"
        style={{ maxHeight: "80vh" }}
      >
        <div className="flex justify-center pt-[10px] pb-[4px]">
          <div className="w-[32px] h-[4px] rounded-[6px] bg-[#eaedef]" />
        </div>

        <div className="flex items-center justify-between px-[20px] py-[10px]">
          <div className="w-[24px]" />
          <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#2f3438] leading-[20px] tracking-[-0.3px]">
            지역 필터
          </p>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center size-[24px] rounded-full hover:bg-gray-100 transition-colors"
            aria-label="닫기"
          >
            <X size={20} color="#141414" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-1 min-h-0 overflow-hidden" style={{ maxHeight: "calc(80vh - 72px)" }}>
          <div className="w-1/2 bg-[#f5f5f5] overflow-y-auto">
            {REGION_PROVINCES.map((province) => {
              const active = draftProvince === province;
              return (
                <div key={province}>
                  <button
                    type="button"
                    onClick={() => handleProvinceSelect(province)}
                    className="w-full text-left px-[16px] py-[12px] bg-[#f5f5f5] hover:bg-[#efefef] transition-colors"
                  >
                    <span
                      className={
                        active
                          ? "font-['Pretendard:SemiBold',sans-serif] text-[15px] leading-[24px] tracking-[-0.3px] text-[#141414]"
                          : "font-['Pretendard:Medium',sans-serif] text-[15px] leading-[24px] tracking-[-0.3px] text-[#8c8c8c]"
                      }
                    >
                      {province}
                    </span>
                  </button>
                  <div className="h-px bg-[#ededed]" />
                </div>
              );
            })}
          </div>

          <div className="w-1/2 bg-white overflow-y-auto">
            {districts.map((district) => {
              const isSelected =
                selected.province === draftProvince && selected.district === district;
              return (
                <div key={district}>
                  <button
                    type="button"
                    onClick={() => handleDistrictSelect(district)}
                    className="w-full flex items-center justify-between px-[16px] py-[12px] bg-white hover:bg-[#fafafa] transition-colors"
                  >
                    <span
                      className={
                        isSelected
                          ? "font-['Pretendard:SemiBold',sans-serif] text-[15px] leading-[24px] tracking-[-0.3px] text-[#141414]"
                          : "font-['Pretendard:Medium',sans-serif] text-[15px] leading-[24px] tracking-[-0.3px] text-[#8c8c8c]"
                      }
                    >
                      {district}
                    </span>
                    {isSelected && <Check size={16} color="#141414" strokeWidth={2.5} />}
                  </button>
                  <div className="h-px bg-[#ededed]" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-[16px] bg-white shrink-0" />
      </motion.div>
    </AnimatePresence>
  );
}
