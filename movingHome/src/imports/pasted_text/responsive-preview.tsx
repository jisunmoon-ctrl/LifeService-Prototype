import { motion, AnimatePresence } from "motion/react";
import {
  Monitor,
  Tablet,
  Smartphone,
  GripVertical,
  GripHorizontal,
} from "lucide-react";
import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import MobileLayout from "../../imports/360";
import TabletLayout from "../../imports/768-16-6061";
import DesktopLayout from "../../imports/1280";

/* ─── Constants ─── */
const SCROLL_TRIGGER = 520;
const MIN_W = 360;
const MAX_W = 1920;
const MIN_H = 300;
const MAX_H = 2000;

const BREAKPOINTS = [
  {
    label: "Mobile",
    width: 768,
    icon: <Smartphone className="w-4 h-4" />,
  },
  {
    label: "Tablet",
    width: 1024,
    icon: <Tablet className="w-4 h-4" />,
  },
  {
    label: "Desktop",
    width: 1256,
    icon: <Monitor className="w-4 h-4" />,
  },
] as const;

const BP_COLORS: Record<string, string> = {
  Mobile: "bg-[#f59e0b]",
  Tablet: "bg-[#8b5cf6]",
  Desktop: "bg-[#10b981]",
};

const SKIP_NAV = new Set(["🪩 Standard Top Navigation", "GNB"]);

const GLOBAL_STYLES = `
@keyframes chevronBounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(5px); }
  100% { transform: translateY(-5px); }
}
[data-name="affordance"],
[data-name="Hero"] [data-name="contents"] > :last-child {
  animation: chevronBounce 1s ease-in-out infinite alternate;
}
.floating-cta-active [data-name="🌀 BoxButton"] {
  opacity: 0;
  transition: opacity 0.3s ease-out;
}
[data-name="CTA"],
[data-name="StickyButton"] {
  display: none !important;
}
[data-name="🪩 Standard Top Navigation"],
[data-name="GNB"] {
  position: sticky !important;
  top: 0 !important;
  z-index: 40 !important;
  background: white !important;
}
.scroll-reveal-section {
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}
.scroll-reveal-section.revealed {
  opacity: 1;
  transform: translateY(0);
}`;

/* ─── Helpers ─── */
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, Math.round(v)));

function getBreakpointLabel(w: number) {
  if (w <= 768) return "Mobile";
  if (w <= 1024) return "Tablet";
  return "Desktop";
}

function findContentParent(frame: HTMLElement) {
  const scrollContainer = frame.querySelector(
    '[data-name="ScrollContainer"]',
  );
  if (scrollContainer) return scrollContainer;

  const figmaRoot = frame.querySelector(
    '[data-name="360"], [data-name="1280"]',
  );
  const inner =
    figmaRoot?.querySelector(":scope > [data-name]") || null;
  return (
    inner?.querySelector(':scope > [data-name="Container"]') ||
    inner
  );
}

/* ─── Sub-components ─── */
function DimensionInput({
  label,
  value,
  onChange,
  onCommit,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onCommit: () => void;
}) {
  return (
    <div className="flex items-center gap-1.5 bg-[#1e1e1e] rounded-md px-2.5 py-1">
      <span className="text-[#666] text-[12px]">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onCommit}
        onKeyDown={(e) => e.key === "Enter" && onCommit()}
        className="w-[50px] bg-transparent text-white text-[13px] text-center outline-none border-none"
      />
      <span className="text-[#666] text-[12px]">px</span>
    </div>
  );
}

type DragSide = "left" | "right" | "bottom";

function DragHandle({
  side,
  active,
  onMouseDown,
}: {
  side: DragSide;
  active: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
}) {
  const isVertical = side !== "bottom";
  const Icon = isVertical ? GripVertical : GripHorizontal;

  const baseCls = active
    ? "bg-[#0aa5ff]/30"
    : "bg-[#333] hover:bg-[#0aa5ff]/20";
  const iconCls = active
    ? "text-[#0aa5ff]"
    : "text-[#666] group-hover:text-[#0aa5ff]";

  if (!isVertical) {
    return (
      <div
        onMouseDown={onMouseDown}
        className={`flex items-center justify-center h-[14px] cursor-ns-resize rounded-b-lg transition-colors group z-10 ${baseCls}`}
        style={{ width: 120 }}
      >
        <Icon
          className={`w-5 h-3 transition-colors ${iconCls}`}
        />
      </div>
    );
  }

  const roundCls =
    side === "left" ? "rounded-l-lg" : "rounded-r-lg";
  return (
    <div
      onMouseDown={onMouseDown}
      className={`flex items-center justify-center w-[14px] cursor-ew-resize ${roundCls} transition-colors group sticky top-0 self-start h-[60px] mt-[40px] z-10 ${baseCls}`}
    >
      <Icon
        className={`w-3 h-5 transition-colors ${iconCls}`}
      />
    </div>
  );
}

/* ─── Main component ─── */
export function ResponsivePreview() {
  const [frameWidth, setFrameWidth] = useState(1256);
  const [frameHeight, setFrameHeight] = useState(812);
  const [isDragging, setIsDragging] = useState(false);
  const [dragSide, setDragSide] = useState<DragSide | null>(
    null,
  );
  const [inputValue, setInputValue] = useState("1256");
  const [heightInputValue, setHeightInputValue] =
    useState("812");
  const [scrollY, setScrollY] = useState(0);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0, w: 0, h: 0 });

  const activeBreakpoint = useMemo(
    () => getBreakpointLabel(frameWidth),
    [frameWidth],
  );
  const ctaVisible = showFloatingCta && !isInFooter;

  /* ── Sync width to available space on mount ── */
  useEffect(() => {
    if (!containerRef.current) return;
    const fitted = clamp(
      containerRef.current.clientWidth - 60,
      MIN_W,
      MAX_W,
    );
    setFrameWidth(fitted);
    setInputValue(String(fitted));
  }, []);

  /* ── Scroll-triggered section reveal ── */
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let observer: IntersectionObserver | null = null;
    let sections: Element[] = [];

    const timer = setTimeout(() => {
      const parent = findContentParent(frame);
      if (!parent) return;

      sections = Array.from(parent.children).filter(
        (el) =>
          !SKIP_NAV.has(el.getAttribute("data-name") || ""),
      );
      sections.forEach((el) =>
        (el as HTMLElement).classList.add(
          "scroll-reveal-section",
        ),
      );

      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add(
                "revealed",
              );
              observer?.unobserve(e.target);
            }
          }),
        { root: frame, threshold: 0.05 },
      );
      sections.forEach((el) => observer!.observe(el));
    }, 80);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      sections.forEach((el) =>
        (el as HTMLElement).classList.remove(
          "scroll-reveal-section",
          "revealed",
        ),
      );
    };
  }, [frameWidth]);

  /* ── Scroll position tracking ── */
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const onScroll = () => {
      const y = frame.scrollTop;
      setScrollY(y);
      setShowFloatingCta(y >= SCROLL_TRIGGER);
    };
    frame.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => frame.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Footer observer ── */
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let observer: IntersectionObserver | null = null;
    const timer = setTimeout(() => {
      const footer =
        frame.querySelector('[data-name="Section_Outro"]') ||
        Array.from(
          frame.querySelectorAll('[data-name="01_intro"]'),
        ).pop() ||
        null;
      if (!footer) return;

      observer = new IntersectionObserver(
        ([e]) => setIsInFooter(e.isIntersecting),
        {
          root: frame,
          threshold: 0.15,
        },
      );
      observer.observe(footer);
    }, 120);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [frameWidth]);

  /* ── Drag resize ── */
  const handleMouseDown = useCallback(
    (e: React.MouseEvent, side: DragSide) => {
      e.preventDefault();
      setIsDragging(true);
      setDragSide(side);
      dragStart.current = {
        x: e.clientX,
        y: e.clientY,
        w: frameWidth,
        h: frameHeight,
      };
    },
    [frameWidth, frameHeight],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const { x, y, w, h } = dragStart.current;

      if (dragSide === "bottom") {
        const newH = clamp(h + (e.clientY - y), MIN_H, MAX_H);
        setFrameHeight(newH);
        setHeightInputValue(String(newH));
      } else {
        const delta = (e.clientX - x) * 2;
        const newW = clamp(
          dragSide === "right" ? w + delta : w - delta,
          MIN_W,
          MAX_W,
        );
        setFrameWidth(newW);
        setInputValue(String(newW));
      }
    },
    [isDragging, dragSide],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragSide(null);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor =
      dragSide === "bottom" ? "ns-resize" : "ew-resize";
    document.body.style.userSelect = "none";
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging, handleMouseMove, handleMouseUp, dragSide]);

  /* ── Input commit helpers ── */
  const commitWidth = () => {
    const v = parseInt(inputValue);
    if (isNaN(v)) return setInputValue(String(frameWidth));
    const c = clamp(v, MIN_W, MAX_W);
    setFrameWidth(c);
    setInputValue(String(c));
  };

  const commitHeight = () => {
    const v = parseInt(heightInputValue);
    if (isNaN(v))
      return setHeightInputValue(String(frameHeight));
    const c = clamp(v, MIN_H, MAX_H);
    setFrameHeight(c);
    setHeightInputValue(String(c));
  };

  /* ── Layout renderer ── */
  const Layout =
    frameWidth <= 768
      ? MobileLayout
      : frameWidth <= 1024
        ? TabletLayout
        : DesktopLayout;

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] overflow-hidden">
      <style>{GLOBAL_STYLES}</style>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#2d2d2d] border-b border-[#404040] shrink-0">
        <div className="flex items-center gap-1">
          {BREAKPOINTS.map((bp) => (
            <button
              key={bp.label}
              onClick={() => {
                setFrameWidth(bp.width);
                setInputValue(String(bp.width));
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeBreakpoint === bp.label
                  ? "bg-[#0aa5ff] text-white"
                  : "text-[#999] hover:text-white hover:bg-[#3d3d3d]"
              }`}
            >
              {bp.icon}
              <span className="text-[13px]">{bp.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <DimensionInput
            label="W"
            value={inputValue}
            onChange={setInputValue}
            onCommit={commitWidth}
          />
          <DimensionInput
            label="H"
            value={heightInputValue}
            onChange={setHeightInputValue}
            onCommit={commitHeight}
          />

          <input
            type="range"
            min={MIN_W}
            max={MAX_W}
            value={frameWidth}
            onChange={(e) => {
              const v = parseInt(e.target.value);
              setFrameWidth(v);
              setInputValue(String(v));
            }}
            className="w-[160px] accent-[#0aa5ff] h-1"
          />

          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#1e1e1e]">
            <div
              className={`w-2 h-2 rounded-full ${BP_COLORS[activeBreakpoint]}`}
            />
            <span className="text-[12px] text-[#999]">
              {activeBreakpoint}
            </span>
          </div>
        </div>
      </div>

      {/* Preview area */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto py-6 px-4"
      >
        <div className="flex items-start justify-center min-h-full">
          <div className="flex flex-col items-center min-w-0">
            <div className="flex items-stretch">
              <DragHandle
                side="left"
                active={isDragging && dragSide === "left"}
                onMouseDown={(e) => handleMouseDown(e, "left")}
              />

              {/* Frame */}
              <div
                className="bg-white shadow-2xl transition-[width] ease-out flex-shrink-0 relative"
                style={{
                  width: frameWidth,
                  height: frameHeight,
                  transitionDuration: isDragging
                    ? "0ms"
                    : "200ms",
                }}
              >
                <div
                  ref={frameRef}
                  className="absolute inset-0 overflow-x-hidden overflow-y-auto"
                >
                  <div
                    className="relative w-full [&>div]:h-auto [&>div>div]:!static"
                  >
                    <Layout />
                  </div>
                </div>
              </div>

              <DragHandle
                side="right"
                active={isDragging && dragSide === "right"}
                onMouseDown={(e) => handleMouseDown(e, "right")}
              />
            </div>

            <DragHandle
              side="bottom"
              active={isDragging && dragSide === "bottom"}
              onMouseDown={(e) => handleMouseDown(e, "bottom")}
            />
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#2d2d2d] border-t border-[#404040] shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[#666]">
            Frame: {frameWidth} × {frameHeight}
          </span>
          <span className="text-[11px] text-[#666]">
            Breakpoints: ≤768 (Mobile) · 769–1024 (Tablet) ·
            1025+ (Desktop)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`text-[11px] ${ctaVisible ? "text-[#0aa5ff]" : "text-[#666]"}`}
          >
            ScrollY: {scrollY}px{" "}
            {ctaVisible
              ? "· Floating CTA Active"
              : isInFooter
                ? "· Footer"
                : `· Trigger at ${SCROLL_TRIGGER}px`}
          </span>
          <span className="text-[11px] text-[#666]">
            Drag handles to resize
          </span>
        </div>
      </div>
    </div>
  );
}