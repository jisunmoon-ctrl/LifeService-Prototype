import { PrototypeNavMenu, type NavMenuSection, type PanelTab } from "./PrototypeNavMenu";

export type { PanelTab };

interface PreviewControlPanelProps {
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

function RestartIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" />
    </svg>
  );
}

/**
 * 우측 컨트롤 메뉴 패널 (프리뷰 스펙): 헤더 + Restart + (메뉴 상단) B2B/B2C 스위칭 탭 + 메뉴 트리.
 * PreviewStudio 의 aside 슬롯에 렌더된다. preview harness (ODS 예외).
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

      <button type="button" className="pv-panel-restart" onClick={onRestart}>
        <RestartIcon />
        <span>Restart</span>
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
