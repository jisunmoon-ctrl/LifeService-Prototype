import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { IconCamera, IconChevronDown } from "../ods";

export interface GalleryPhoto {
  id: string;
  url: string;
}

interface BelongingsMediaGalleryProps {
  photos: GalleryPhoto[];
  /** 이미 첨부된 개수 (최대 12 제한 계산용) */
  alreadyAttachedCount: number;
  maxCount?: number;
  onClose: () => void;
  onComplete: (selected: GalleryPhoto[]) => void;
  onMaxReached?: () => void;
}

/** 이미지 갤러리뷰 (Figma 1786:28792) */
export function BelongingsMediaGallery({
  photos,
  alreadyAttachedCount,
  maxCount = 12,
  onClose,
  onComplete,
  onMaxReached,
}: BelongingsMediaGalleryProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const remaining = Math.max(0, maxCount - alreadyAttachedCount);
  const selectedPhotos = useMemo(
    () =>
      selectedIds
        .map((id) => photos.find((p) => p.id === id))
        .filter((p): p is GalleryPhoto => !!p),
    [photos, selectedIds]
  );

  const toggle = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= remaining) {
        onMaxReached?.();
        return prev;
      }
      return [...prev, id];
    });
  };

  const orderOf = (id: string) => {
    const idx = selectedIds.indexOf(id);
    return idx >= 0 ? idx + 1 : null;
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-white">
      <div className="flex-none flex items-center min-h-[44px] px-[16px] gap-[12px]">
        <button type="button" onClick={onClose} className="p-0 shrink-0" aria-label="닫기">
          <X className="size-6 text-[#141414]" />
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-[6px] min-w-0"
        >
          <span className="text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#2F3438]">
            최근 항목
          </span>
          <IconChevronDown size={16} className="text-[#2F3438]" />
        </button>
        <button
          type="button"
          onClick={() => onComplete(selectedPhotos)}
          className="shrink-0 text-[16px] font-medium leading-[20px] tracking-[-0.3px] text-[#00A1FF]"
        >
          완료
        </button>
      </div>

      <div className="h-px bg-[#EAEDEF] shrink-0" />

      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="grid grid-cols-4 gap-px bg-[#EAEDEF]">
          <button
            type="button"
            onClick={() => {
              // 프로토타입: 촬영하기 = 첫 번째 갤러리 사진을 즉시 선택 토글
              if (photos[0]) toggle(photos[0].id);
            }}
            className="aspect-square bg-[#EAEDEF] flex flex-col items-center justify-center gap-[4px]"
          >
            <IconCamera size={32} className="text-[#2F3438]" />
            <span className="text-[13px] font-medium leading-[18px] tracking-[-0.3px] text-[#2F3438]">
              촬영하기
            </span>
          </button>

          {photos.map((photo) => {
            const order = orderOf(photo.id);
            const selected = order !== null;
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => toggle(photo.id)}
                className={`relative aspect-square overflow-hidden bg-[#F5F5F5] ${
                  selected ? "" : ""
                }`}
              >
                <img
                  src={photo.url}
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  draggable={false}
                />
                {selected && <div className="absolute inset-0 bg-black/50" />}
                <span
                  className={`absolute top-[6px] right-[6px] size-[20px] rounded-full border border-white flex items-center justify-center text-[12px] font-bold leading-[16px] tracking-[-0.3px] text-white shadow-[0px_2px_5px_rgba(63,71,77,0.05)] ${
                    selected ? "bg-[#00A1FF]" : "bg-white/50"
                  }`}
                >
                  {selected ? order : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
