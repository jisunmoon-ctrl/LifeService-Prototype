/** 프리뷰 스펙 — 해상도 프리셋 & 유틸 (movingHome/form 과 동일 규격, 무의존 버전) */

export type DeviceKind = "mobile" | "tablet" | "desktop";

export interface BreakpointPreset {
  label: string;
  w: number;
  h?: number;
  kind: DeviceKind;
}

export const PREVIEW_BPS: BreakpointPreset[] = [
  { label: "Mobile", w: 375, h: 720, kind: "mobile" },
  { label: "Tablet", w: 768, kind: "tablet" },
  { label: "Desktop", w: 1024, kind: "desktop" },
];

export const PREVIEW_W_MIN = 320;
export const PREVIEW_W_MAX = 1920;
export const PREVIEW_H_MIN = 300;
export const PREVIEW_H_MAX = 2400;

export function previewClamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function previewBpLabel(w: number) {
  if (w < 768) return "Mobile";
  if (w < 1024) return "Tablet";
  return "Desktop";
}

export function previewBpColor(w: number) {
  const label = previewBpLabel(w);
  if (label === "Mobile") return "#f59e0b";
  if (label === "Tablet") return "#8b5cf6";
  return "#10b981";
}
