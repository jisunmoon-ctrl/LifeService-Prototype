import { useState } from "react";

export interface NavMenuItem {
  id: string;
  label: string;
}
export interface NavMenuGroup {
  id: string;
  label: string;
  items: NavMenuItem[];
}
export interface NavMenuSection {
  id: string;
  /** 생략 시 섹션 헤더를 렌더하지 않는다 (탭 하위에 플로우 그룹만 평평하게 노출). */
  label?: string;
  /** 섹션 라벨 옆 뱃지 (예: NEW) */
  badge?: string;
  groups: NavMenuGroup[];
}

/** 메뉴 상단 스위칭 탭 (B2B / B2C) — 각 탭이 자기 플로우 섹션을 소유한다. */
export interface PanelTab {
  id: string;
  label: string;
  sections: NavMenuSection[];
}

interface PrototypeNavMenuProps {
  /** 탭 스위처. 지정 시 메뉴 상단에 B2B/B2C 탭이 뜨고 활성 탭의 sections 만 렌더된다. */
  tabs?: PanelTab[];
  /** tabs 미지정 시 사용하는 단일 메뉴 트리. */
  sections?: NavMenuSection[];
  currentScreen: string;
  onSelect: (screenId: string) => void;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className="pv-nav-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? "rotate(90deg)" : "none" }}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function sectionsContain(sections: NavMenuSection[], screenId: string): boolean {
  return sections.some((s) => s.groups.some((g) => g.items.some((i) => i.id === screenId)));
}

function firstItemId(sections: NavMenuSection[]): string | undefined {
  for (const section of sections) {
    for (const group of section.groups) {
      if (group.items[0]) return group.items[0].id;
    }
  }
  return undefined;
}

function autoOpenGroupId(sections: NavMenuSection[], currentScreen: string): string | null {
  const groups = sections.flatMap((s) => s.groups);
  const active = groups.find((g) => g.items.some((item) => item.id === currentScreen));
  return active?.id ?? groups[0]?.id ?? null;
}

/**
 * 우측 컨트롤 메뉴 패널의 메뉴 트리 (프리뷰 스펙).
 * (메뉴 상단) B2B/B2C 스위칭 탭 → NavMenuSection[] → groups[] → items[] 아코디언.
 * 현재 화면이 속한 그룹만 펼침(동시 1개). preview harness.
 */
export function PrototypeNavMenu({ tabs, sections, currentScreen, onSelect }: PrototypeNavMenuProps) {
  const useTabs = !!(tabs && tabs.length);
  // 현재 화면이 속한 탭을 활성 탭으로 (없으면 첫 탭)
  const activeTab = useTabs
    ? tabs!.find((t) => sectionsContain(t.sections, currentScreen)) ?? tabs![0]
    : null;
  const activeSections = activeTab ? activeTab.sections : sections ?? [];

  const [openGroup, setOpenGroup] = useState<string | null>(() =>
    autoOpenGroupId(activeSections, currentScreen),
  );
  // 탭이 바뀌면 이전 탭의 열림 상태를 버리고 새 탭 기준으로 다시 펼친다.
  const [syncedTabId, setSyncedTabId] = useState<string | null>(activeTab?.id ?? null);
  if ((activeTab?.id ?? null) !== syncedTabId) {
    setSyncedTabId(activeTab?.id ?? null);
    setOpenGroup(autoOpenGroupId(activeSections, currentScreen));
  }

  const toggleGroup = (groupId: string) =>
    setOpenGroup((prev) => (prev === groupId ? null : groupId));

  return (
    <div className="pv-nav">
      {useTabs && (
        <div className="pv-tabs" role="tablist" aria-label="B2B / B2C 플로우 구분">
          {tabs!.map((tab) => {
            const active = tab.id === activeTab!.id;
            const empty = !firstItemId(tab.sections);
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                disabled={empty}
                title={empty ? "이 프로토타입에는 해당 플로우가 없습니다" : undefined}
                className={`pv-tab${active ? " is-active" : ""}`}
                onClick={() => {
                  if (active || empty) return;
                  const fid = firstItemId(tab.sections);
                  if (fid) onSelect(fid);
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {activeSections.map((section, sectionIndex) => (
        <div key={section.id} className="pv-nav-section">
          {section.label && (
            <div className="pv-nav-sectionhead">
              <span className="pv-nav-sectionlabel">
                {sectionIndex + 1}. {section.label}
              </span>
              {section.badge && <span className="pv-nav-sectionbadge">{section.badge}</span>}
            </div>
          )}

          <div className="pv-nav-groups">
            {section.groups.map((group) => {
              const isExpanded = openGroup === group.id;
              const hasActiveChild = group.items.some((item) => item.id === currentScreen);
              return (
                <div key={group.id} className="pv-nav-group">
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.id)}
                    className={`pv-nav-grouphead ${hasActiveChild && !isExpanded ? "has-active" : ""}`}
                  >
                    <span className="pv-nav-grouplabel">{group.label}</span>
                    <Chevron open={isExpanded} />
                  </button>

                  {isExpanded && (
                    <div className="pv-nav-items">
                      {group.items.map((item) => {
                        const active = currentScreen === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelect(item.id)}
                            className={`pv-nav-item ${active ? "is-active" : ""}`}
                          >
                            <span>{item.label}</span>
                            {active && <Check />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
