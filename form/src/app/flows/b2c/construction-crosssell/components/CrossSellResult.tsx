import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  AssetShippingBoxSmallGenuineBlueSvg,
  AssetShippingBoxAndBroomSmallGenuineBlueSvg,
} from "@bucketplace/assets/svg";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { DesktopFormNav } from "../../../../shared/flow/DesktopFormParts";
import { IconChevronDown } from "../../../../shared/ods";

export interface AppliedServices {
  construction: boolean;
  moving: boolean;
  cleaning: boolean;
}

const SERVICE_LABEL: Record<keyof AppliedServices, string> = {
  construction: "시공",
  moving: "이사",
  cleaning: "이사청소",
};

// 서비스별 ODS 에셋 (Figma 7785-61526): 이사=박스 / 이사청소=박스+빗자루
function ServiceIcon({ service, size = 40 }: { service: keyof AppliedServices; size?: number }) {
  if (service === "cleaning") return <AssetShippingBoxAndBroomSmallGenuineBlueSvg size={size} />;
  return <AssetShippingBoxSmallGenuineBlueSvg size={size} />;
}

function appliedList(services: AppliedServices) {
  return (Object.keys(services) as (keyof AppliedServices)[]).filter((k) => services[k]);
}

// 모바일 상단 탭 라벨 (Figma) / 데스크톱 좌측 사이드바 라벨 (prod)
const TABS = ["신청 내역", "받은 문서", "채팅"];
const SIDEBAR_TABS = ["신청내역", "받은문서", "채팅"];
const FILTER_CHIPS = ["전체", "전체시공", "이사", "이사청소"];
// 칩 index → 서비스 키 필터 (전체=null: 전체 노출)
const CHIP_FILTER: (keyof AppliedServices | null)[] = [null, "construction", "moving", "cleaning"];

/* ─────────────────────────── 모바일 상단 탭 (Figma 7785) ─────────────────────────── */
function Tabs({ tab, setTab }: { tab: number; setTab: (i: number) => void }) {
  return (
    <div className="flex border-b border-[#EAEDEF]">
      {TABS.map((t, i) => (
        <button
          key={t}
          type="button"
          onClick={() => setTab(i)}
          className={`flex-1 h-[44px] relative text-[15px] tracking-[-0.3px] ${
            tab === i ? "font-bold text-[#141414]" : "font-medium text-[#828C94]"
          }`}
        >
          {t}
          {tab === i && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#141414]" />}
        </button>
      ))}
    </div>
  );
}

/* ─────────────── 데스크톱 좌측 사이드바 네비 (prod my-page 1440 실측) ───────────────
   활성 20px/700 #00A1FF + bg #F0F8FC / 비활성 #2F3438 / item 160×60 */
function SidebarNav({ tab, setTab }: { tab: number; setTab: (i: number) => void }) {
  return (
    <nav className="w-[160px] shrink-0 flex flex-col">
      {SIDEBAR_TABS.map((t, i) => (
        <button
          key={t}
          type="button"
          onClick={() => setTab(i)}
          className={`h-[60px] px-[16px] flex items-center text-left rounded-[8px] text-[20px] font-bold leading-[28px] tracking-[-0.3px] ${
            tab === i ? "text-[#00A1FF] bg-[#F0F8FC]" : "text-[#2F3438] bg-white"
          }`}
        >
          {t}
        </button>
      ))}
    </nav>
  );
}

/* ─────────────────────────── 기간 필터 드롭다운 (ODS IconChevronDown) ─────────────────────────── */
function PeriodDropdown({ desktop = false }: { desktop?: boolean }) {
  return (
    <div
      className={`h-[32px] rounded-[4px] border px-[12px] flex items-center justify-between gap-[4px] ${
        desktop ? "w-[112px] border-[#E0E0E0]" : "w-[116px] border-[#E6E6E6]"
      }`}
    >
      <span className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#2F3438] whitespace-nowrap">
        6개월 이내
      </span>
      <IconChevronDown size={16} className="text-[#828C94]" />
    </div>
  );
}

/* ─────────────────────────── 필터 칩 + 기간 드롭다운 ───────────────────────────
   desktop(prod): active bg #2F3438 / 16px / px-12 / border #E0E0E0 */
function Filters({
  chip,
  setChip,
  desktop = false,
}: {
  chip: number;
  setChip: (i: number) => void;
  desktop?: boolean;
}) {
  return (
    <>
      <div className={`flex gap-[4px] ${desktop ? "pb-[12px]" : "py-[12px]"}`}>
        {FILTER_CHIPS.map((c, i) => (
          <button
            key={c}
            type="button"
            onClick={() => setChip(i)}
            className={`h-[32px] rounded-full tracking-[-0.3px] transition-default ${
              desktop ? "px-[12px] text-[16px]" : "px-[14px] text-[13px]"
            } ${
              chip === i
                ? desktop
                  ? "bg-[#2F3438] text-white font-medium"
                  : "bg-[#141414] text-white font-bold"
                : desktop
                  ? "bg-transparent border border-[#E0E0E0] text-[#2F3438]"
                  : "bg-white border border-[#E6E6E6] text-[#2F3438]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className={desktop ? "flex justify-end pb-[12px]" : "py-[10px]"}>
        <PeriodDropdown desktop={desktop} />
      </div>
    </>
  );
}

/* ─────────────────────────── 상담내역 리스트 ───────────────────────────
   desktop(prod): 아이콘 24 / 제목 700 / 설명 #141414 / 상태·시간 #8C8C8C
   mobile(Figma 7785): 아이콘 40 / 제목 600 #2F3438 / 설명 #2F3438 */
function ListEmpty() {
  return (
    <div className="py-[80px] flex flex-col items-center justify-center text-center">
      <p className="text-[15px] leading-[22px] tracking-[-0.3px] text-[#828C94]">
        해당 조건의 상담내역이 없어요
      </p>
    </div>
  );
}

function ListItems({
  list,
  showLeadingDivider = true,
  desktop = false,
}: {
  list: (keyof AppliedServices)[];
  showLeadingDivider?: boolean;
  desktop?: boolean;
}) {
  return (
    <>
      {showLeadingDivider && <div className="h-px bg-[#EAEDEF]" />}
      {list.length === 0 && <ListEmpty />}
      {list.map((k) => (
        <div key={k}>
          <div className="flex gap-[12px] items-start px-[16px] py-[16px]">
            <ServiceIcon service={k} size={desktop ? 24 : 40} />
            <div className="flex-1 min-w-0 flex flex-col gap-[7px]">
              <div className="flex flex-col gap-[4px]">
                <p
                  className={`text-[18px] leading-[24px] tracking-[-0.3px] text-[#2F3438] ${
                    desktop ? "font-bold" : "font-semibold"
                  }`}
                >
                  {SERVICE_LABEL[k]}
                </p>
                <p
                  className={`text-[14px] leading-[18px] tracking-[-0.3px] ${
                    desktop ? "text-[#8C8C8C]" : "text-[#828C94]"
                  }`}
                >
                  업체 매칭 중
                </p>
              </div>
              <p
                className={`text-[16px] leading-[20px] tracking-[-0.3px] ${
                  desktop ? "text-[#141414]" : "text-[#2F3438]"
                }`}
              >
                딱 맞는 업체를 찾고 있어요
              </p>
            </div>
            <span
              className={`leading-[18px] tracking-[-0.3px] shrink-0 ${
                desktop ? "text-[13px] text-[#8C8C8C]" : "text-[14px] text-[#828C94]"
              }`}
            >
              방금
            </span>
          </div>
          <div className="h-px bg-[#EAEDEF]" />
        </div>
      ))}
    </>
  );
}

function Snackbar() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[16px] z-[50] w-[calc(100%-32px)] max-w-[400px] animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="rounded-[8px] bg-[#2F3438]/95 px-[16px] py-[14px]">
        <p className="text-[14px] leading-[20px] tracking-[-0.3px] text-white">
          신청 완료! 매칭이 완료되면 알림으로 알려드릴게요.
        </p>
      </div>
    </div>
  );
}

/** 시공/생활 상담내역 (매칭 리스트, Figma 7785-61526 / prod my-page) */
export function MatchingListScreen({
  services,
  onBack,
  showSnackbar = true,
}: {
  services: AppliedServices;
  onBack: () => void;
  showSnackbar?: boolean;
}) {
  const { isDesktopForm } = usePreviewViewport();
  const [tab, setTab] = useState(0);
  const [chip, setChip] = useState(0);
  const list = appliedList(services);
  // 칩 필터: 전체(0)면 전부, 아니면 해당 서비스만
  const filtered = chip === 0 ? list : list.filter((k) => k === CHIP_FILTER[chip]);

  // ── 데스크톱: prod my-page 레이아웃 (1440 실측 스펙 기준) ──
  // 페이지 타이틀 #2F3438 / 사이드바 160 + gap 128 + 콘텐츠 flex-1
  if (isDesktopForm) {
    return (
      <div className="relative size-full min-h-full bg-white flex flex-col">
        <DesktopFormNav />
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="mx-auto max-w-[1136px] px-[20px] py-[24px]">
            <h1 className="text-[24px] font-bold leading-[32px] tracking-[-0.3px] text-[#2F3438]">
              시공/생활 상담내역
            </h1>
            <div className="flex gap-[128px] mt-[20px]">
              <SidebarNav tab={tab} setTab={setTab} />
              <div className="flex-1 min-w-0">
                <Filters chip={chip} setChip={setChip} desktop />
                <ListItems list={filtered} desktop showLeadingDivider={false} />
              </div>
            </div>
          </div>
        </div>
        {showSnackbar && <Snackbar />}
      </div>
    );
  }

  // ── 모바일: 풀스크린 (Figma 7785-61526) ──
  return (
    <div className="relative size-full flex flex-col bg-white">
      <div className="flex-none relative w-full h-[44px] flex items-center px-[16px]">
        <button type="button" onClick={onBack} className="absolute left-[16px] p-0" aria-label="뒤로가기">
          <ArrowLeft className="w-6 h-6 text-[#141414]" />
        </button>
        <h1 className="mx-auto text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#141414]">
          시공/생활 상담내역
        </h1>
      </div>

      <div className="flex-none">
        <Tabs tab={tab} setTab={setTab} />
      </div>
      <div className="flex-none px-[16px]">
        <Filters chip={chip} setChip={setChip} />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto">
        <ListItems list={filtered} showLeadingDivider={false} />
      </div>

      {showSnackbar && <Snackbar />}
    </div>
  );
}
