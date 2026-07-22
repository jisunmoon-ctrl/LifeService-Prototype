import { useCallback, useEffect, useState } from "react";
import { BelongingsAdditional } from "../../../../shared/belongings/BelongingsAdditional";
import {
  BelongingsManualDetail,
  syncDetailItemsWithProducts,
} from "../../../../shared/belongings/BelongingsManualDetail";
import {
  BelongingsManualSelect,
  buildProductList,
  getDefaultSelectedNames,
} from "../../../../shared/belongings/BelongingsManualSelect";
import { BelongingsOption } from "../../../../shared/belongings/BelongingsOption";
import {
  BelongingsPhoto,
  gallerySelectionToMedia,
  GALLERY_MOCK_PHOTOS,
  MAX_BELONGINGS_MEDIA,
} from "../../../../shared/belongings/BelongingsPhoto";
import { BelongingsMediaGallery } from "../../../../shared/belongings/BelongingsMediaGallery";
import type { BelongingsData, BelongingsMediaItem, BelongingsSubStep } from "../../../../shared/belongings/belongingsTypes";

export interface BelongingsNavState {
  canProceed: boolean;
  nextLabel: string;
  onNext: () => void;
  onBack: () => boolean;
}

interface Step5BelongingsProps {
  data: BelongingsData;
  onUpdate: (data: BelongingsData) => void;
  onNavChange: (nav: BelongingsNavState) => void;
  onComplete: () => void;
}

export function Step5Belongings({ data, onUpdate, onNavChange, onComplete }: Step5BelongingsProps) {
  const [subStep, setSubStep] = useState<BelongingsSubStep>("option");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const selectedNames = data.selectedProducts.filter((p) => p.selected).map((p) => p.name);
  const hasManualItems = selectedNames.length > 0 || data.detailItems.length > 0;
  const hasMedia = data.media.some((m) => m.type !== "uploading");
  const mediaCount = data.media.filter((m) => m.type !== "uploading").length;

  const goToAdditional = useCallback(() => setSubStep("additional"), []);

  const handleSelectPhoto = () => {
    onUpdate({
      ...data,
      inputMethod: "photo",
      skipped: false,
      media: data.media,
    });
    setSubStep("photo");
  };

  const handleSelectManual = () => {
    const products =
      data.selectedProducts.length > 0
        ? data.selectedProducts
        : buildProductList().map((p) => ({
            ...p,
            selected: getDefaultSelectedNames().includes(p.name),
          }));
    onUpdate({ ...data, inputMethod: "manual", skipped: false, selectedProducts: products });
    setSubStep("manual-select");
  };

  const handleSkip = () => {
    onUpdate({ ...data, skipped: true, inputMethod: null });
    setSubStep("additional");
  };

  const handleToggleProduct = (name: string, category: string) => {
    const exists = data.selectedProducts.find((p) => p.name === name);
    const selectedProducts = exists
      ? data.selectedProducts.map((p) =>
          p.name === name ? { ...p, selected: !p.selected } : p
        )
      : [
          ...data.selectedProducts,
          { id: `${category}-${name}`, name, category, selected: true },
        ];
    onUpdate({ ...data, selectedProducts });
  };

  const handlePhotoAdd = (items: BelongingsMediaItem[]) => {
    onUpdate({ ...data, media: [...data.media, ...items].slice(0, MAX_BELONGINGS_MEDIA) });
  };

  const handlePhotoRemove = (id: string) => {
    onUpdate({ ...data, media: data.media.filter((m) => m.id !== id) });
  };

  const handleInternalBack = useCallback((): boolean => {
    if (galleryOpen) {
      setGalleryOpen(false);
      return true;
    }
    switch (subStep) {
      case "option":
        return false;
      case "photo":
      case "manual-select":
        setSubStep("option");
        return true;
      case "manual-detail":
        setSubStep("manual-select");
        return true;
      case "additional":
        if (data.inputMethod === "photo") {
          setSubStep("photo");
          return true;
        }
        if (data.inputMethod === "manual") {
          setSubStep(data.detailItems.length > 0 ? "manual-detail" : "manual-select");
          return true;
        }
        setSubStep("option");
        return true;
      default:
        return false;
    }
  }, [subStep, data.inputMethod, data.detailItems.length, galleryOpen]);

  const handleInternalNext = useCallback(() => {
    switch (subStep) {
      case "option":
        handleSkip();
        break;
      case "photo":
        goToAdditional();
        break;
      case "manual-select": {
        const names = data.selectedProducts.filter((p) => p.selected).map((p) => p.name);
        if (names.length > 0) {
          onUpdate({
            ...data,
            detailItems: syncDetailItemsWithProducts(names, data.detailItems),
          });
          setSubStep("manual-detail");
        } else {
          goToAdditional();
        }
        break;
      }
      case "manual-detail":
        goToAdditional();
        break;
      case "additional":
        onComplete();
        break;
    }
  }, [subStep, data, goToAdditional, onComplete, onUpdate]);

  const getCanProceed = useCallback((): boolean => {
    switch (subStep) {
      case "option":
        return true;
      case "photo":
        return hasMedia;
      case "manual-select":
        return selectedNames.length > 0 || data.boxCount > 0 || data.memo.trim().length > 0;
      case "manual-detail":
        return data.detailItems.length > 0;
      case "additional":
        return true;
      default:
        return false;
    }
  }, [subStep, hasMedia, selectedNames.length, data.boxCount, data.memo, data.detailItems.length]);

  const getNextLabel = useCallback((): string => {
    if (subStep === "option") return "건너뛰기";
    return "다음";
  }, [subStep]);

  useEffect(() => {
    onNavChange({
      canProceed: getCanProceed(),
      nextLabel: getNextLabel(),
      onNext: handleInternalNext,
      onBack: handleInternalBack,
    });
  }, [onNavChange, getCanProceed, getNextLabel, handleInternalNext, handleInternalBack]);

  return (
    <>
      {subStep === "option" && (
        <BelongingsOption onSelectPhoto={handleSelectPhoto} onSelectManual={handleSelectManual} />
      )}

      {subStep === "photo" && (
        <BelongingsPhoto
          media={data.media}
          onRemove={handlePhotoRemove}
          onOpenGallery={() => setGalleryOpen(true)}
        />
      )}

      {subStep === "manual-select" && (
        <BelongingsManualSelect
          products={data.selectedProducts}
          boxCount={data.boxCount}
          memo={data.memo}
          onToggleProduct={handleToggleProduct}
          onBoxCountChange={(boxCount) => onUpdate({ ...data, boxCount })}
          onMemoChange={(memo) => onUpdate({ ...data, memo })}
        />
      )}

      {subStep === "manual-detail" && (
        <BelongingsManualDetail
          items={data.detailItems}
          onUpdate={(detailItems) => onUpdate({ ...data, detailItems })}
        />
      )}

      {subStep === "additional" && (
        <BelongingsAdditional
          hasManualItems={hasManualItems}
          hasMedia={hasMedia}
          onAddManual={() => {
            if (data.selectedProducts.length === 0) {
              handleSelectManual();
            } else {
              setSubStep("manual-select");
            }
          }}
          onAddPhoto={() => {
            onUpdate({
              ...data,
              inputMethod: "photo",
              media: data.media,
            });
            setSubStep("photo");
          }}
        />
      )}

      {snackbar && (
        <div className="fixed bottom-[100px] left-1/2 -translate-x-1/2 z-[60] max-w-[90%] px-[16px] py-[12px] rounded-[8px] bg-[#2F3438] text-[14px] text-white shadow-lg">
          {snackbar}
        </div>
      )}

      {galleryOpen && (
        <BelongingsMediaGallery
          photos={GALLERY_MOCK_PHOTOS}
          alreadyAttachedCount={mediaCount}
          maxCount={MAX_BELONGINGS_MEDIA}
          onClose={() => setGalleryOpen(false)}
          onComplete={(selected) => {
            if (selected.length > 0) handlePhotoAdd(gallerySelectionToMedia(selected));
            setGalleryOpen(false);
          }}
          onMaxReached={() => {
            setSnackbar("사진·영상은 최대 12개까지 올릴 수 있어요");
            window.setTimeout(() => setSnackbar(null), 2200);
          }}
        />
      )}
    </>
  );
}
