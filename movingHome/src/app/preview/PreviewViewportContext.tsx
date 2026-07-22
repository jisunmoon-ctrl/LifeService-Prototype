import { createContext, useContext } from "react";

interface PreviewViewportContextValue {
  frameWidth: number;
  frameHeight: number;
  isDesktopForm: boolean;
}

export const PreviewViewportContext = createContext<PreviewViewportContextValue>({
  frameWidth: 375,
  frameHeight: 720,
  isDesktopForm: false,
});

export function usePreviewViewport() {
  return useContext(PreviewViewportContext);
}
