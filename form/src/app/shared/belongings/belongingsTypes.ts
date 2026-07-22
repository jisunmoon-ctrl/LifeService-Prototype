export type BelongingsInputMethod = "photo" | "manual" | null;

export type BelongingsSubStep = "option" | "photo" | "manual-select" | "manual-detail" | "additional";

export interface BelongingsMediaItem {
  id: string;
  type: "image" | "video" | "uploading";
  url?: string;
  duration?: string;
  progress?: number;
}

export interface BelongingsProductItem {
  id: string;
  name: string;
  category: string;
  selected: boolean;
}

export interface BelongingsDetailItem {
  id: string;
  name: string;
  kind: string;
  size: string;
  width: string;
  height: string;
  install: string;
  quantity: number;
}

export interface BelongingsData {
  inputMethod: BelongingsInputMethod;
  skipped: boolean;
  media: BelongingsMediaItem[];
  selectedProducts: BelongingsProductItem[];
  detailItems: BelongingsDetailItem[];
  boxCount: number;
  memo: string;
}

export const defaultBelongingsData = (): BelongingsData => ({
  inputMethod: null,
  skipped: false,
  media: [],
  selectedProducts: [],
  detailItems: [],
  boxCount: 1,
  memo: "",
});
