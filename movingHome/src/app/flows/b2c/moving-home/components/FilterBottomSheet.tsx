import { useEffect } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* ── Region filter data (image-2 기준) ── */
export const REGIONS = [
  "전체",
  "서울·경기", "인천", "대구", "부산", "광주",
  "대전", "울산", "강원도", "경상도", "경상북도",
  "전라남도", "전라북도", "충청남도", "충청북도", "세종시", "제주도",
];

/* ── Move type filter data ── */
export const MOVE_TYPES = [
  "전체",
  "용달/소형이사",
  "원룸이사",
  "가정이사",
  "포장이사",
  "반포장이사",
  "사무실이사",
];

interface FilterBottomSheetProps {
  type: "region" | "moveType";
  selected: string;
  onSelect: (v: string) => void;
  onClose: () => void;
}

export function FilterBottomSheet({
  type,
  selected,
  onSelect,
  onClose,
}: FilterBottomSheetProps) {
  const isRegion = type === "region";
  const items = isRegion ? REGIONS : MOVE_TYPES;
  const title = isRegion ? "지역 선택" : "이사 유형 선택";

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {/* Dim overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <motion.div
        key="sheet"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[20px] overflow-hidden"
        style={{ maxHeight: "80vh" }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-[12px] pb-[4px]">
          <div className="w-[36px] h-[4px] rounded-full bg-[#e0e0e0]" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-[16px] py-[14px]">
          <p className="font-['Pretendard:Bold',sans-serif] text-[18px] text-[#141414] leading-[24px] tracking-[-0.3px]">
            {title}
          </p>
          <button
            onClick={onClose}
            className="flex items-center justify-center size-[32px] rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} color="#141414" strokeWidth={1.5} />
          </button>
        </div>

        <div className="h-px bg-[#f5f5f5]" />

        {/* Options list */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(80vh - 160px)" }}>
          {items.map((item) => {
            const active = selected === item;
            return (
              <button
                key={item}
                onClick={() => { onSelect(item); onClose(); }}
                className="w-full flex items-center justify-between px-[16px] py-[16px] hover:bg-[#f9f9f9] transition-colors"
              >
                <span
                  className="font-['Pretendard:Medium',sans-serif] text-[16px] leading-[22px] tracking-[-0.3px]"
                  style={{ color: active ? "#00a1ff" : "#141414" }}
                >
                  {item}
                </span>
                {active && (
                  <Check size={18} color="#00a1ff" strokeWidth={2.5} />
                )}
              </button>
            );
          })}
        </div>

        {/* Safe area bottom spacer */}
        <div className="h-[16px] bg-white" />
      </motion.div>
    </AnimatePresence>
  );
}
