import { useState } from "react";
import { Check, ChevronDown, ChevronRight } from "lucide-react";

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
  /** 생략 시 섹션 헤더를 렌더하지 않는다 (탭 하위에 플로우 그룹만 평평하게 노출). */
  id: string;
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

export function PrototypeNavMenu({ tabs, sections, currentScreen, onSelect }: PrototypeNavMenuProps) {
  const useTabs = !!(tabs && tabs.length);
  // 현재 화면이 속한 탭을 활성 탭으로 (없으면 첫 탭)
  const activeTab = useTabs
    ? tabs!.find((t) => sectionsContain(t.sections, currentScreen)) ?? tabs![0]
    : null;
  const activeSections = activeTab ? activeTab.sections : sections ?? [];

  // 아코디언 드롭다운: 기본 접힘, 현재 화면이 속한 그룹만 펼침 (동시에 하나만 열림)
  const [openGroup, setOpenGroup] = useState<string | null>(() =>
    autoOpenGroupId(activeSections, currentScreen),
  );
  // 탭이 바뀌면 이전 탭의 열림 상태를 버리고 새 탭 기준으로 다시 펼친다.
  const [syncedTabId, setSyncedTabId] = useState<string | null>(activeTab?.id ?? null);
  if ((activeTab?.id ?? null) !== syncedTabId) {
    setSyncedTabId(activeTab?.id ?? null);
    setOpenGroup(autoOpenGroupId(activeSections, currentScreen));
  }

  const toggleGroup = (groupId: string) => {
    setOpenGroup((prev) => (prev === groupId ? null : groupId));
  };

  return (
    <div className="space-y-3">
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

      <div className="space-y-4">
        {activeSections.map((section, sectionIndex) => (
          <div key={section.id} className="space-y-1.5">
            {/* 섹션 헤더 (label 없으면 생략) */}
            {section.label && (
              <div className="flex items-center gap-1.5 px-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--fg-neutral)] opacity-45">
                  {sectionIndex + 1}. {section.label}
                </span>
                {section.badge && (
                  <span className="text-[9px] font-bold uppercase tracking-wide text-[var(--fg-brand)] bg-[var(--bg-brand-weak)] rounded px-1.5 py-0.5 leading-none">
                    {section.badge}
                  </span>
                )}
              </div>
            )}

            <div className="space-y-1">
              {section.groups.map((group) => {
                const isExpanded = openGroup === group.id;
                const hasActiveChild = group.items.some((item) => item.id === currentScreen);

                return (
                  <div key={group.id} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.id)}
                      className={`w-full px-3 py-2 rounded-lg text-left transition-default flex items-center justify-between cursor-pointer ${
                        hasActiveChild && !isExpanded
                          ? "bg-[var(--bg-brand-weak)] text-[var(--fg-brand)]"
                          : "bg-[var(--bg-weak)] text-[var(--fg-neutral)] hover:bg-[var(--border-neutral)]"
                      }`}
                    >
                      <span className="text-body-14 font-semibold">{group.label}</span>
                      {isExpanded ? (
                        <ChevronDown className="size-3.5 shrink-0 opacity-60" />
                      ) : (
                        <ChevronRight className="size-3.5 shrink-0 opacity-60" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="ml-3 pl-2 border-l border-[var(--border-neutral)] space-y-0.5">
                        {group.items.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelect(item.id)}
                            className={`w-full px-3 py-2 rounded-lg text-left transition-default flex items-center justify-between cursor-pointer ${
                              currentScreen === item.id
                                ? "bg-[#0F172A] text-[var(--fg-inverse)]"
                                : "bg-[var(--bg-neutral)] text-[var(--fg-neutral)] hover:bg-[var(--bg-weak)]"
                            }`}
                          >
                            <span className="text-body-14 truncate pr-2">{item.label}</span>
                            {currentScreen === item.id && <Check className="size-3.5 shrink-0" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
