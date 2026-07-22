import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
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
  type DeviceKind,
} from "./previewConstants";

type DragSide = "l" | "r" | "b";

/* ── 인라인 SVG 아이콘 (harness 전용, lucide 무의존) ── */
function DeviceIcon({ kind }: { kind: DeviceKind }) {
  const common = { width: 15, height: 15, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (kind === "mobile")
    return (<svg {...common}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>);
  if (kind === "tablet")
    return (<svg {...common}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M11 18h2" /></svg>);
  return (<svg {...common}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>);
}
function GripV() {
  return (<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.4" /><circle cx="9" cy="12" r="1.4" /><circle cx="9" cy="18" r="1.4" /><circle cx="15" cy="6" r="1.4" /><circle cx="15" cy="12" r="1.4" /><circle cx="15" cy="18" r="1.4" /></svg>);
}
function GripH() {
  return (<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="9" r="1.4" /><circle cx="12" cy="9" r="1.4" /><circle cx="18" cy="9" r="1.4" /><circle cx="6" cy="15" r="1.4" /><circle cx="12" cy="15" r="1.4" /><circle cx="18" cy="15" r="1.4" /></svg>);
}

interface PreviewStudioProps {
  children: ReactNode;
  aside: ReactNode;
  resetKey?: number;
}

/**
 * 해상도 드래그 프리뷰 셸 (프리뷰 스펙).
 * Mobile/Tablet/Desktop 프리셋 + W/H 입력 + range + 좌/우/하단 드래그 리사이즈. preview harness (ODS 예외).
 */
export function PreviewStudio({ children, aside, resetKey }: PreviewStudioProps) {
  const [frameWidth, setFrameWidth] = useState(375);
  const [frameHeight, setFrameHeight] = useState(720);
  const [activeHandle, setActiveHandle] = useState<DragSide | null>(null);
  const [wInput, setWInput] = useState("375");
  const [hInput, setHInput] = useState("720");

  const dragRef = useRef({ active: false, side: null as DragSide | null, x: 0, y: 0, w: 375, h: 720 });
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
    dragRef.current = { active: true, side, x: e.clientX, y: e.clientY, w: frameWidth, h: frameHeight };
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

  const selectPreset = (w: number, h?: number) => applyDimensions(w, h ?? frameHeight);
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
    <PreviewViewportContext.Provider value={{ frameWidth, frameHeight, isDesktopForm: frameWidth >= 768 }}>
      <div className="pv-studio">
        <div className="pv-bar">
          <div className="pv-bar-row">
            <div className="pv-bpbtns">
              {PREVIEW_BPS.map((bp) => (
                <button
                  key={bp.label}
                  type="button"
                  className={`pv-bpbtn ${currentBp === bp.label ? "on" : ""}`}
                  onClick={() => selectPreset(bp.w, bp.h)}
                >
                  <DeviceIcon kind={bp.kind} />
                  <span>{bp.label}</span>
                </button>
              ))}
            </div>

            <span className="pv-bar-sep" aria-hidden="true" />

            <div className="pv-dim">
              <label htmlFor="pv-w">W</label>
              <input id="pv-w" type="text" inputMode="numeric" value={wInput}
                onChange={(e) => setWInput(e.target.value)} onBlur={commitW}
                onKeyDown={(e) => e.key === "Enter" && commitW()} />
              <span>px</span>
            </div>
            <div className="pv-dim">
              <label htmlFor="pv-h">H</label>
              <input id="pv-h" type="text" inputMode="numeric" value={hInput}
                onChange={(e) => setHInput(e.target.value)} onBlur={commitH}
                onKeyDown={(e) => e.key === "Enter" && commitH()} />
              <span>px</span>
            </div>

            <input className="pv-range" type="range" min={PREVIEW_W_MIN} max={PREVIEW_W_MAX}
              value={frameWidth} aria-label="가로 해상도"
              onChange={(e) => applyDimensions(Number(e.target.value), frameHeight)} />

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
                <button type="button" className={`pv-handle pv-handle--v pv-handle--l ${activeHandle === "l" ? "on" : ""}`}
                  aria-label="좌측 핸들" onMouseDown={(e) => startDrag(e, "l")}>
                  <GripV />
                </button>

                <div className="pv-frame" style={{ width: frameWidth, height: frameHeight }}>
                  <div key={resetKey} style={{ width: "100%", height: "100%", overflowX: "hidden", overflowY: frameWidth >= 768 ? "hidden" : "auto" }}>
                    {children}
                  </div>
                </div>

                <button type="button" className={`pv-handle pv-handle--v pv-handle--r ${activeHandle === "r" ? "on" : ""}`}
                  aria-label="우측 핸들" onMouseDown={(e) => startDrag(e, "r")}>
                  <GripV />
                </button>
              </div>

              <button type="button" className={`pv-handle pv-handle--b ${activeHandle === "b" ? "on" : ""}`}
                aria-label="하단 핸들" onMouseDown={(e) => startDrag(e, "b")}>
                <GripH />
              </button>
            </div>
          </div>
        </div>

        <div className="pv-aside" ref={asideRef}>
          {aside}
        </div>

        <div className="pv-status">
          <span>Frame: <b>{frameWidth} × {frameHeight}</b></span>
        </div>
      </div>
    </PreviewViewportContext.Provider>
  );
}
