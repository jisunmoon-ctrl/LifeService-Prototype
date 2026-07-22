import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { GripHorizontal, GripVertical } from "lucide-react";
import { PreviewViewportContext } from "./PreviewViewportContext";
import {
  PREVIEW_BPS,
  PREVIEW_H_MAX,
  PREVIEW_H_MIN,
  PREVIEW_W_MAX,
  PREVIEW_W_MIN,
  previewBpColor,
  previewBpLabel,
  previewClamp,
} from "./previewConstants";

type DragSide = "l" | "r" | "b";

interface PreviewStudioProps {
  children: ReactNode;
  aside: ReactNode;
  resetKey?: number;
}

export function PreviewStudio({ children, aside, resetKey }: PreviewStudioProps) {
  const [frameWidth, setFrameWidth] = useState(375);
  const [frameHeight, setFrameHeight] = useState(720);
  const [activeHandle, setActiveHandle] = useState<DragSide | null>(null);
  const [wInput, setWInput] = useState("375");
  const [hInput, setHInput] = useState("720");

  const dragRef = useRef({
    active: false,
    side: null as DragSide | null,
    x: 0,
    y: 0,
    w: 375,
    h: 720,
  });

  const asideRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const applyDimensions = useCallback((w: number, h: number) => {
    const nextW = previewClamp(w, PREVIEW_W_MIN, PREVIEW_W_MAX);
    const nextH = previewClamp(h, PREVIEW_H_MIN, PREVIEW_H_MAX);
    setFrameWidth(nextW);
    setFrameHeight(nextH);
    setWInput(String(nextW));
    setHInput(String(nextH));
  }, []);

  const updateAsidePad = useCallback(() => {
    const asideEl = asideRef.current;
    const stageEl = stageRef.current;
    if (!asideEl || !stageEl) return;
    const pad = asideEl.getBoundingClientRect().width + 24;
    stageEl.style.setProperty("--pv-aside-pad", `${Math.ceil(pad)}px`);
  }, []);

  useEffect(() => {
    updateAsidePad();
    const observer = new ResizeObserver(updateAsidePad);
    if (asideRef.current) observer.observe(asideRef.current);
    return () => observer.disconnect();
  }, [updateAsidePad, aside]);

  const startDrag = (e: React.MouseEvent, side: DragSide) => {
    e.preventDefault();
    dragRef.current = {
      active: true,
      side,
      x: e.clientX,
      y: e.clientY,
      w: frameWidth,
      h: frameHeight,
    };
    setActiveHandle(side);
    document.body.style.cursor = side === "b" ? "ns-resize" : "ew-resize";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current.active || !dragRef.current.side) return;
      const { side, x, y, w, h } = dragRef.current;
      if (side === "b") {
        applyDimensions(w, h + (e.clientY - y));
      } else {
        const delta = (e.clientX - x) * 2;
        applyDimensions(side === "r" ? w + delta : w - delta, h);
      }
    };

    const onUp = () => {
      if (!dragRef.current.active) return;
      dragRef.current.active = false;
      dragRef.current.side = null;
      setActiveHandle(null);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [applyDimensions]);

  const selectPreset = (w: number, h?: number) => {
    applyDimensions(w, h ?? frameHeight);
  };

  const commitW = () => {
    const v = parseInt(wInput, 10);
    applyDimensions(Number.isNaN(v) ? frameWidth : v, frameHeight);
  };

  const commitH = () => {
    const v = parseInt(hInput, 10);
    applyDimensions(frameWidth, Number.isNaN(v) ? frameHeight : v);
  };

  const currentBp = previewBpLabel(frameWidth);

  return (
    <PreviewViewportContext.Provider
      value={{
        frameWidth,
        frameHeight,
        isDesktopForm: frameWidth >= 768,
      }}
    >
    <div className="pv-studio">
      <div className="pv-bar">
        <div className="pv-bar-row">
          <div className="pv-bpbtns">
            {PREVIEW_BPS.map((bp) => {
              const Icon = bp.icon;
              return (
                <button
                  key={bp.label}
                  type="button"
                  className={`pv-bpbtn ${currentBp === bp.label ? "on" : ""}`}
                  onClick={() => selectPreset(bp.w, bp.h)}
                >
                  <Icon className="size-4" />
                  <span>{bp.label}</span>
                </button>
              );
            })}
          </div>

          <span className="pv-bar-sep" aria-hidden="true" />

          <div className="pv-dim">
            <label htmlFor="pv-w">W</label>
            <input
              id="pv-w"
              type="text"
              inputMode="numeric"
              value={wInput}
              onChange={(e) => setWInput(e.target.value)}
              onBlur={commitW}
              onKeyDown={(e) => e.key === "Enter" && commitW()}
            />
            <span>px</span>
          </div>

          <div className="pv-dim">
            <label htmlFor="pv-h">H</label>
            <input
              id="pv-h"
              type="text"
              inputMode="numeric"
              value={hInput}
              onChange={(e) => setHInput(e.target.value)}
              onBlur={commitH}
              onKeyDown={(e) => e.key === "Enter" && commitH()}
            />
            <span>px</span>
          </div>

          <input
            className="pv-range"
            type="range"
            min={PREVIEW_W_MIN}
            max={PREVIEW_W_MAX}
            value={frameWidth}
            aria-label="가로 해상도"
            onChange={(e) => applyDimensions(Number(e.target.value), frameHeight)}
          />

          <div className="pv-bpdot">
            <i style={{ background: previewBpColor(frameWidth) }} />
            <span>{currentBp}</span>
          </div>
        </div>
      </div>

      <div className="pv-stage" ref={stageRef}>
        <div className="pv-center">
          <div className="pv-col">
            <div className="pv-framerow">
              <button
                type="button"
                className={`pv-handle pv-handle--v pv-handle--l ${activeHandle === "l" ? "on" : ""}`}
                aria-label="좌측 핸들"
                onMouseDown={(e) => startDrag(e, "l")}
              >
                <GripVertical className="size-3" />
              </button>

              <div
                className="pv-frame"
                style={{ width: frameWidth, height: frameHeight }}
              >
                <div key={resetKey} className={`size-full ${frameWidth >= 768 ? "overflow-hidden" : "overflow-y-auto"}`}>
                  {children}
                </div>
              </div>

              <button
                type="button"
                className={`pv-handle pv-handle--v pv-handle--r ${activeHandle === "r" ? "on" : ""}`}
                aria-label="우측 핸들"
                onMouseDown={(e) => startDrag(e, "r")}
              >
                <GripVertical className="size-3" />
              </button>
            </div>

            <button
              type="button"
              className={`pv-handle pv-handle--b ${activeHandle === "b" ? "on" : ""}`}
              aria-label="하단 핸들"
              onMouseDown={(e) => startDrag(e, "b")}
            >
              <GripHorizontal className="size-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="pv-aside" ref={asideRef}>
        {aside}
      </div>

      <div className="pv-status">
        <span>
          Frame: <b>{frameWidth} × {frameHeight}</b>
        </span>
      </div>
    </div>
    </PreviewViewportContext.Provider>
  );
}
