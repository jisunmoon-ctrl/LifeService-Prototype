import { createContext, useContext } from "react";

export interface PreviewViewportValue {
  frameWidth: number;
  frameHeight: number;
  /** md(768) 이상이면 데스크탑 폼 레이아웃 */
  isDesktopForm: boolean;
}

export const PreviewViewportContext = createContext<PreviewViewportValue>({
  frameWidth: 375,
  frameHeight: 720,
  isDesktopForm: false,
});

export function usePreviewViewport() {
  return useContext(PreviewViewportContext);
}
