import { Loader2, X } from "lucide-react";
import { IconPlus } from "../ods";
import type { BelongingsMediaItem } from "./belongingsTypes";
import { BelongingsContent, BelongingsScreen, BelongingsTitle } from "./BelongingsParts";
import type { GalleryPhoto } from "./BelongingsMediaGallery";
import { GALLERY_MOCK_PHOTOS } from "./belongingsGalleryPhotos";
import { PHOTO_GUIDE_IMG, PHOTO_SAMPLE_1, PHOTO_SAMPLE_2 } from "./belongingsConstants";

export const MAX_BELONGINGS_MEDIA = 12;

interface BelongingsPhotoProps {
  media: BelongingsMediaItem[];
  onRemove: (id: string) => void;
  onOpenGallery: () => void;
}

export function BelongingsPhoto({ media, onRemove, onOpenGallery }: BelongingsPhotoProps) {
  const count = media.filter((m) => m.type !== "uploading").length;

  return (
    <BelongingsScreen>
      <BelongingsTitle title="짐 사진·영상을 촬영하세요" />

      <BelongingsContent className="flex flex-col gap-[16px]">
        <div>
          <div className="flex items-center justify-between pb-[12px]">
            <p className="text-[15px] font-semibold leading-[24px] text-[#141414]">이삿짐 사진·영상</p>
            <span className="text-[13px] font-medium text-[#8C8C8C]">
              {count}/{MAX_BELONGINGS_MEDIA}
            </span>
          </div>

          <div className="flex flex-wrap gap-[4px] min-h-[83px]">
            {count < MAX_BELONGINGS_MEDIA && (
              <button
                type="button"
                onClick={onOpenGallery}
                className="w-[calc(25%-3px)] min-w-[82px] max-w-[120px] aspect-square min-h-[83px] rounded-[4px] bg-[#F5F5F5] flex flex-col items-center justify-center gap-[6px]"
              >
                <IconPlus size={16} className="text-[#8C8C8C]" />
                <span className="text-[14px] font-semibold text-[#8C8C8C]">추가</span>
              </button>
            )}

            {media.map((item) => (
              <div
                key={item.id}
                className="relative w-[calc(25%-3px)] min-w-[82px] max-w-[120px] aspect-square min-h-[83px] rounded-[4px] overflow-hidden"
              >
                {item.type === "uploading" ? (
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-[4px]">
                    <Loader2 className="size-6 text-white animate-spin" />
                    <span className="text-[13px] font-medium text-white">{item.progress ?? 0}%</span>
                  </div>
                ) : (
                  <>
                    <img
                      src={item.url}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[80%] to-black/30 pointer-events-none" />
                    {item.type === "video" && item.duration && (
                      <span className="absolute bottom-[6px] left-[6px] text-[13px] font-medium text-white">
                        {item.duration}
                      </span>
                    )}
                  </>
                )}
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="absolute top-[4px] right-[4px] size-6 rounded-full bg-black/50 flex items-center justify-center"
                  aria-label="삭제"
                >
                  <X className="size-3.5 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#EAEDEF] w-full" />

        <div>
          <p className="text-[15px] font-semibold leading-[24px] text-[#141414] pb-[12px]">촬영 가이드</p>
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <div className="relative rounded-[4px] overflow-hidden aspect-[360/200] bg-[#F5F5F5]">
                <img src={PHOTO_GUIDE_IMG} alt="방 전체 촬영 가이드" className="w-full h-full object-cover" />
                <span className="absolute top-[8px] left-[8px] px-[8px] py-[2px] rounded-[4px] bg-black/60 text-[10px] font-semibold text-white">
                  방 전체
                </span>
              </div>
              <ul className="flex flex-col gap-[4px] text-[14px] leading-[18px] text-[#141414]">
                <li className="flex gap-[6px]">
                  <span className="text-[#828C94]">•</span>
                  방 전체를 한눈에 볼 수 있게 영상으로 촬영해요.
                </li>
                <li className="flex gap-[6px]">
                  <span className="text-[#828C94]">•</span>
                  공간별 짐이 보이는 사진도 함께 준비해요.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[2px]">
                <div className="relative flex-1 aspect-square rounded-[4px] overflow-hidden">
                  <img src={PHOTO_SAMPLE_1} alt="" className="size-full object-cover" />
                  <span className="absolute top-[8px] left-[8px] px-[8px] py-[2px] rounded-[4px] bg-black/60 text-[10px] font-semibold text-white">
                    옷장
                  </span>
                </div>
                <div className="relative flex-1 aspect-square rounded-[4px] overflow-hidden">
                  <img src={PHOTO_SAMPLE_2} alt="" className="size-full object-cover" />
                  <span className="absolute top-[8px] left-[8px] px-[8px] py-[2px] rounded-[4px] bg-black/60 text-[10px] font-semibold text-white">
                    서랍장
                  </span>
                </div>
              </div>
              <ul className="flex flex-col gap-[4px] text-[14px] leading-[18px] text-[#141414]">
                <li className="flex gap-[6px]">
                  <span className="text-[#828C94]">•</span>
                  수납된 짐도 꼼꼼히 촬영해요.
                </li>
                <li className="flex gap-[6px]">
                  <span className="text-[#828C94]">•</span>
                  서랍과 옷장은 끝까지 열어서 안까지 보여주세요.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BelongingsContent>
    </BelongingsScreen>
  );
}

export function gallerySelectionToMedia(selected: GalleryPhoto[]): BelongingsMediaItem[] {
  return selected.map((photo, i) => ({
    id: `m-${Date.now()}-${i}`,
    type: "image" as const,
    url: photo.url,
  }));
}

export { GALLERY_MOCK_PHOTOS };

/** filled 프리뷰/데모용 샘플 미디어 (첫 랜딩에는 사용하지 않음) */
export const MOCK_INITIAL_MEDIA: BelongingsMediaItem[] = [
  { id: "m1", type: "image", url: PHOTO_SAMPLE_1 },
  { id: "m2", type: "video", url: PHOTO_SAMPLE_2, duration: "00:22" },
];
