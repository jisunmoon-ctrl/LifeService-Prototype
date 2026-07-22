import { PRODUCT_ICONS } from "./belongingsProductIcons";

interface FurnitureSelectorTileProps {
  label: string;
  selected?: boolean;
  onClick: () => void;
}

/** FurnitureSelector/Tile (Figma 7250:35637) */
export function FurnitureSelectorTile({ label, selected = false, onClick }: FurnitureSelectorTileProps) {
  const icon = PRODUCT_ICONS[label];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-1 flex-col items-center justify-center gap-[4px] min-w-[72px] max-w-[100px] px-[16px] py-[10px] rounded-[4px] border border-solid transition-colors ${
        selected
          ? "bg-[#F5F5F5] border-[#141414]"
          : "bg-white border-[#E0E0E0]"
      }`}
    >
      <div className="relative shrink-0 size-[36px] flex items-center justify-center">
        {icon ? (
          <img
            src={icon}
            alt=""
            className="size-[36px] object-contain pointer-events-none"
            draggable={false}
          />
        ) : (
          <span className="text-[24px]" aria-hidden>
            📦
          </span>
        )}
      </div>
      <span
        className={`text-[13px] leading-[18px] tracking-[-0.3px] text-[#141414] text-center whitespace-nowrap ${
          selected ? "font-medium" : "font-normal"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
