import { RotateCcw } from "lucide-react";
import { PrototypeNavMenu, type NavMenuSection, type PanelTab } from "./PrototypeNavMenu";

export type { PanelTab };

interface PreviewControlPanelProps {
  /** 패널 헤더 타이틀 (예: 프로젝트/메뉴 트리 루트명) */
  title: string;
  badge?: string;
  /** 메뉴 상단 B2B/B2C 스위칭 탭. 지정 시 활성 탭의 플로우만 표시된다. */
  tabs?: PanelTab[];
  /** tabs 미지정 시 사용하는 단일 메뉴 트리. */
  sections?: NavMenuSection[];
  currentScreen: string;
  onSelect: (screenId: string) => void;
  onRestart: () => void;
}

/**
 * 우측 컨트롤 메뉴 패널 (프리뷰 스펙).
 * 헤더 + Restart + (메뉴 상단) B2B/B2C 스위칭 탭 + 메뉴 트리(PrototypeNavMenu) 로 구성.
 * PreviewStudio 의 aside 슬롯에 렌더된다. preview harness 이므로 ODS 규칙(및 QA) 예외 대상.
 */
export function PreviewControlPanel({
  title,
  badge,
  tabs,
  sections,
  currentScreen,
  onSelect,
  onRestart,
}: PreviewControlPanelProps) {
  return (
    <div className="pv-panel">
      <div className="pv-panel-head">
        <span className="pv-panel-title">{title}</span>
        {badge && <span className="pv-panel-badge">{badge}</span>}
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="w-full px-3 py-2 rounded-lg text-left hover:bg-[var(--bg-weak)] transition-default flex items-center gap-2 text-[var(--fg-neutral)] cursor-pointer"
      >
        <RotateCcw className="size-4" />
        <span className="text-body-14">Restart</span>
      </button>

      <PrototypeNavMenu
        tabs={tabs}
        sections={sections}
        currentScreen={currentScreen}
        onSelect={onSelect}
      />
    </div>
  );
}
