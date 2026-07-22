import { Star, MapPin } from "lucide-react";
import { IconArrowLeft } from "@bucketplace/icons";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FilterChip, FilterDivider, FilterRowContainer } from "../../app/flows/b2c/moving-home/components/FilterChip";
import { RegionFilterSheet } from "../../app/flows/b2c/moving-home/components/RegionFilterSheet";
import {
  DEFAULT_REGION,
  formatRegionHighlight,
  formatRegionLabel,
  type RegionSelection,
} from "../../app/data/regionData";
import {
  getPartnersForRegion,
  matchesMoveFilter,
  type MoveFilterChip,
  type Partner,
} from "../../app/data/partnerMockData";
import { CONTENT_ITEMS } from "../../app/data/contentData";
import svgPaths from "../MovingHome/svg-mlibded68s";
import imgTruck from "../MovingHome/3bb50ace43cb14aca7122bf8775841ea161fe4a7.png";
import imgBox from "../MovingHome/7d57220290465a4ecfee2097619e6139627aa89b.png";
/* ── Small shared pieces ── */
function ResponsibilityBadge() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col h-[13.4px] items-center justify-center overflow-clip relative shrink-0 w-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.4005">
          <path clipRule="evenodd" d={svgPaths.p13c0c640} fill="#19BD86" fillRule="evenodd" />
        </svg>
      </div>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[15px] not-italic text-[#19bd86] text-[13px] tracking-[-0.3px] whitespace-nowrap">
        책임보장
      </p>
    </div>
  );
}

function Dot() {
  return (
    <div className="relative shrink-0 size-[2px]">
      <svg className="block size-full" fill="none" viewBox="0 0 2 2">
        <circle cx="1" cy="1" fill="#141414" fillOpacity="0.16" r="1" />
      </svg>
    </div>
  );
}

/* ── Buttons (ODS BoxButton equivalents) ── */
function CompareButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 h-[34px] px-[14px] rounded-[8px] bg-[#f1f3f4] text-[#2f3438] font-['Pretendard:SemiBold',sans-serif] text-[13px] tracking-[-0.3px] whitespace-nowrap cursor-pointer hover:bg-[#e6e9eb] transition-colors"
    >
      견적받기
    </button>
  );
}

function QuoteButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 h-[34px] px-[14px] rounded-[8px] bg-[#0aa5ff] text-white font-['Pretendard:SemiBold',sans-serif] text-[13px] tracking-[-0.3px] whitespace-nowrap cursor-pointer hover:bg-[#0a96e6] transition-colors"
    >
      견적받기
    </button>
  );
}

/* ── ATF shortcut card ── */
function ShortcutCard({
  img,
  fit,
  title,
  desc,
  onQuoteRequest,
}: {
  img: string;
  fit: "cover" | "contain";
  title: string;
  desc: string;
  onQuoteRequest: () => void;
}) {
  return (
    <div className="bg-white border border-[#e0e0e0] border-solid flex items-center overflow-clip py-[12px] rounded-[12px] w-full">
      <div className="flex flex-[1_0_0] items-center justify-between min-w-px pl-[8px] pr-[16px]">
        <div className="flex flex-[1_0_0] gap-[4px] items-center min-w-px">
          <div className="relative shrink-0 size-[44px]">
            <img alt={title} className={`absolute inset-0 size-full max-w-none pointer-events-none object-${fit}`} src={img} />
          </div>
          <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px tracking-[-0.3px]">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] text-[16px] text-[#141414]">{title}</p>
            <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[13px] text-[#8c8c8c] whitespace-nowrap">{desc}</p>
          </div>
        </div>
        <CompareButton onClick={onQuoteRequest} />
      </div>
    </div>
  );
}

/* ── Tip module card ── */
function TipCard({
  img,
  title,
  author,
  onClick,
}: {
  img: string;
  title: string;
  author: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white border border-[rgba(0,0,0,0.05)] flex flex-col h-[184px] items-start overflow-clip rounded-[12px] shrink-0 w-[150px] cursor-pointer text-left"
    >
      <div className="h-[100px] overflow-clip relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" src={img} />
      </div>
      <div className="bg-white flex flex-col gap-[4px] items-start p-[12px] tracking-[-0.3px] w-full flex-1">
        <p
          className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#141414] w-full overflow-hidden"
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}
        >
          {title}
        </p>
        <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] text-[12px] text-[#8c8c8c]">{author}</p>
      </div>
    </button>
  );
}

const MAX_LIST_PARTNERS = 50;
const PARTNER_PAGE_SIZE = 15;
const MAX_CARD_REVIEWS = 10;

const MAX_VISIBLE_SERVICES = 2;

function PartnerServiceLine({
  moveType,
  options,
}: {
  moveType: string;
  options?: string[];
}) {
  const services = options ?? [];
  const visibleServices = services.slice(0, MAX_VISIBLE_SERVICES);
  const remainingCount = Math.max(0, services.length - MAX_VISIBLE_SERVICES);
  const segments = [moveType, ...visibleServices];
  const suffix = remainingCount > 0 ? `외 +${remainingCount}` : null;

  return (
    <div className="flex gap-[2px] items-center w-full min-w-0 overflow-hidden">
      <p className="min-w-0 flex-1 truncate font-['Pretendard:Regular',sans-serif] leading-[18px] text-[14px] text-[#8c8c8c] tracking-[-0.3px]">
        {segments.map((segment, index) => (
          <span key={index}>
            {index > 0 && <span aria-hidden className="inline-block px-[2px]">·</span>}
            {segment}
          </span>
        ))}
        {suffix}
      </p>
    </div>
  );
}

/* ── Partner (PLP) card ── */
function PartnerCard({
  p,
  showResponsibilityBadge = false,
  onQuoteRequest,
}: {
  p: Partner;
  showResponsibilityBadge?: boolean;
  onQuoteRequest: () => void;
}) {
  const portfolioImages = p.images ?? [];
  const displayReviews = p.reviews.slice(0, MAX_CARD_REVIEWS);
  const portfolioFullWidth = portfolioImages.length > 0 && portfolioImages.length <= 3;

  return (
    <div className="bg-white flex flex-col gap-[16px] items-start p-[16px] w-full">
      <div className="flex gap-[16px] items-center w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-0">
          <div className="flex items-center min-w-0 w-full overflow-hidden">
            <p className="min-w-0 truncate font-['Pretendard:SemiBold',sans-serif] leading-[22px] text-[17px] text-[#141414] tracking-[-0.3px]">
              {p.name}
            </p>
            {showResponsibilityBadge && (
              <div className="shrink-0 pl-[6px]">
                <ResponsibilityBadge />
              </div>
            )}
          </div>

          {p.noReview ? (
            <div className="flex gap-[4px] items-center">
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[14px] text-[#141414] tracking-[-0.3px] whitespace-nowrap">리뷰 0개</p>
              <Dot />
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[14px] text-[#141414] tracking-[-0.3px] whitespace-nowrap">상담 0건</p>
            </div>
          ) : (
            <div className="flex gap-[4px] items-center">
              <div className="flex gap-[4px] items-center">
                <Star size={12} fill="#ffc300" color="#ffc300" strokeWidth={0} />
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[18px] text-[14px] text-[#141414] tracking-[-0.3px] whitespace-nowrap">{p.rating}</p>
              </div>
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[14px] text-[#141414] tracking-[-0.3px] whitespace-nowrap">리뷰 {p.reviewCount}개</p>
              <Dot />
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[14px] text-[#141414] tracking-[-0.3px] whitespace-nowrap">최근 계약 {p.recentContracts}건</p>
            </div>
          )}

          {p.moveType && (
            <PartnerServiceLine moveType={p.moveType} options={p.options} />
          )}
        </div>
        <div className="shrink-0">
          <QuoteButton onClick={onQuoteRequest} />
        </div>
      </div>

      {portfolioImages.length > 0 && (
        <div
          className={`flex gap-[2px] items-center w-full ${portfolioFullWidth ? "" : "overflow-x-auto"}`}
          style={{ scrollbarWidth: "none" as const }}
        >
          {portfolioImages.map((src, i) => {
            const isFirst = i === 0;
            const isLast = i === portfolioImages.length - 1;
            const isSingle = portfolioImages.length === 1;
            const r = isSingle
              ? "8px"
              : portfolioFullWidth
                ? isFirst
                  ? "8px 0 0 8px"
                  : isLast
                    ? "0 8px 8px 0"
                    : "0"
                : isFirst
                  ? "8px 0 0 8px"
                  : isLast
                    ? "0 8px 8px 0"
                    : "0";
            return (
              <div
                key={i}
                className={`relative h-[90px] ${portfolioFullWidth ? "flex-[1_0_0] min-w-px" : "shrink-0 w-[90px]"}`}
                style={{ borderRadius: r }}
              >
                <img alt="" className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" style={{ borderRadius: r }} src={src} />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-black/5 pointer-events-none"
                  style={{ borderRadius: r }}
                />
              </div>
            );
          })}
        </div>
      )}

      {displayReviews.length > 0 && (
        <div className="flex gap-[2px] items-start w-full overflow-x-auto" style={{ scrollbarWidth: "none" as const }}>
          {displayReviews.map((text, i) => {
            const isSingle = displayReviews.length === 1;
            return (
              <div
                key={i}
                className={`bg-[#f5f5f5] h-[60px] items-start p-[12px] rounded-[8px] overflow-hidden ${isSingle ? "flex flex-[1_0_0] min-w-px" : "flex shrink-0 w-[274px]"}`}
              >
                <p
                  className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[13px] text-[#141414] tracking-[-0.3px] flex-[1_0_0] min-w-px overflow-hidden"
                  style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Filter chips ── */
const MOVE_TYPE_CHIPS: MoveFilterChip[] = ["소형/원룸", "가정이사"];

function getScrollParent(element: HTMLElement | null): HTMLElement | null {
  let parent = element?.parentElement ?? null;

  while (parent) {
    const { overflowY } = getComputedStyle(parent);
    if (overflowY === "auto" || overflowY === "scroll") {
      return parent;
    }
    parent = parent.parentElement;
  }

  return null;
}

function useStuckAtScrollTop(anchorRef: RefObject<HTMLElement | null>) {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    const scrollParent = getScrollParent(anchor);
    if (!scrollParent) return;

    const updateStuck = () => {
      const offset = anchor.getBoundingClientRect().top - scrollParent.getBoundingClientRect().top;
      setIsStuck((prev) => (prev ? offset < 1 : offset < -1));
    };

    scrollParent.addEventListener("scroll", updateStuck, { passive: true });
    updateStuck();

    return () => {
      scrollParent.removeEventListener("scroll", updateStuck);
    };
  }, [anchorRef]);

  return isStuck;
}

function FilterRow({
  region,
  selectedMoveFilter,
  onRegionClick,
  onMoveFilterClick,
}: {
  region: RegionSelection;
  selectedMoveFilter: MoveFilterChip | null;
  onRegionClick: () => void;
  onMoveFilterClick: (type: MoveFilterChip) => void;
}) {
  return (
    <FilterRowContainer>
      <FilterChip
        label={formatRegionLabel(region)}
        variant="outlined"
        emphasized
        showChevron
        onClick={onRegionClick}
      />
      <FilterDivider />
      <div className="flex gap-[4px] items-center">
        {MOVE_TYPE_CHIPS.map((type) => (
          <FilterChip
            key={type}
            label={type}
            variant="outlined"
            emphasized={selectedMoveFilter === type}
            onClick={() => onMoveFilterClick(type)}
          />
        ))}
      </div>
    </FilterRowContainer>
  );
}

function FilteredPartnerList({
  partners,
  region,
  moveFilter,
  onQuoteRequest,
}: {
  partners: Partner[];
  region: RegionSelection;
  moveFilter: MoveFilterChip | null;
  onQuoteRequest: () => void;
}) {
  const filtered = useMemo(
    () => partners.filter((p) => matchesMoveFilter(p.moveType, moveFilter)).slice(0, MAX_LIST_PARTNERS),
    [partners, moveFilter],
  );
  const listKey = `${region.province}-${region.district}-${moveFilter ?? "all"}`;
  const [visibleCount, setVisibleCount] = useState(PARTNER_PAGE_SIZE);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(PARTNER_PAGE_SIZE);
  }, [listKey]);

  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!sentinel || visibleCount >= filtered.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PARTNER_PAGE_SIZE, filtered.length));
        }
      },
      { rootMargin: "120px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filtered.length, listKey, visibleCount]);

  const visiblePartners = filtered.slice(0, visibleCount);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={listKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col w-full"
      >
        {visiblePartners.map((p, index) => (
          <div key={p.id} className="w-full">
            <PartnerCard p={p} showResponsibilityBadge={index < 2} onQuoteRequest={onQuoteRequest} />
            <div className="bg-[#ededed] h-px w-full" />
          </div>
        ))}
        {visibleCount < filtered.length && <div ref={loadMoreRef} className="h-px w-full" aria-hidden />}
      </motion.div>
    </AnimatePresence>
  );
}

function TopNavigation() {
  return (
    <div className="sticky top-0 z-40 bg-white w-full">
      <div className="flex items-center h-[44px] px-[16px] bg-white">
        <button type="button" className="cursor-pointer" aria-label="뒤로가기">
          <IconArrowLeft size={24} color="#141414" />
        </button>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function MovingHomeV2({
  onContentSelect,
  onQuoteRequest,
}: {
  onContentSelect: (contentId: string) => void;
  onQuoteRequest: () => void;
}) {
  const [showRegionSheet, setShowRegionSheet] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<RegionSelection>(DEFAULT_REGION);
  const [selectedMoveFilter, setSelectedMoveFilter] = useState<MoveFilterChip | null>(null);
  const filterAnchorRef = useRef<HTMLDivElement>(null);
  const isFilterStuck = useStuckAtScrollTop(filterAnchorRef);

  const handleMoveFilterChip = (type: MoveFilterChip) => {
    setSelectedMoveFilter((prev) => (prev === type ? null : type));
  };

  const regionHighlight = formatRegionHighlight(selectedRegion);
  const partners = useMemo(() => getPartnersForRegion(selectedRegion), [selectedRegion]);

  return (
    <div className="bg-white relative w-full flex flex-col min-h-full" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      {showRegionSheet && (
        <RegionFilterSheet
          selected={selectedRegion}
          onSelect={setSelectedRegion}
          onClose={() => setShowRegionSheet(false)}
        />
      )}
      <TopNavigation />

      {/* ATF */}
      <div className="bg-[#f5f5f5] flex flex-col">
        <div className="bg-white flex items-center pb-[12px] pt-[20px] px-[16px]">
          <div className="flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] text-[17px] text-[#141414] tracking-[-0.3px]">
            <p className="leading-[22px]">검증된 이사 파트너에게</p>
            <p className="leading-[22px]">비교견적 받기</p>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-[4px] items-start pb-[20px] px-[16px]">
          <ShortcutCard img={imgTruck} fit="cover" title="소형/원룸" desc="1인 가구·간단한 이사에 추천" onQuoteRequest={onQuoteRequest} />
          <ShortcutCard img={imgBox} fit="contain" title="가정이사" desc="2~3인 가구·포장 이사에 추천" onQuoteRequest={onQuoteRequest} />
        </div>
      </div>

      {/* Tip module */}
      <div className="bg-white flex flex-col pb-[20px]">
        <div className="flex items-center pb-[12px] pt-[16px] px-[16px]">
          <p className="flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[22px] text-[17px] text-[#141414] tracking-[-0.3px]">
            이사 전 알아두면 좋을 꿀팁
          </p>
        </div>
        <div className="flex gap-[4px] items-start px-[16px] overflow-x-auto" style={{ scrollbarWidth: "none" as const }}>
          {CONTENT_ITEMS.map((item) => (
            <TipCard
              key={item.id}
              img={item.thumbnail}
              title={item.title}
              author={item.author}
              onClick={() => onContentSelect(item.id)}
            />
          ))}
          <div className="shrink-0 w-[12px]" />
        </div>
      </div>

      {/* PLP */}
      <div className="bg-white flex flex-col flex-1">
        <div className="bg-white flex gap-[2px] items-center pb-[12px] pt-[16px] px-[16px]">
          <MapPin size={18} color="#00a1ff" fill="#00a1ff" strokeWidth={0} className="shrink-0" />
          <p className="flex-[1_0_0] font-['Pretendard:SemiBold',sans-serif] leading-[22px] text-[17px] tracking-[-0.3px]">
            <span className="text-[#00a1ff]">{regionHighlight}</span>
            <span className="text-[#141414]"> 리뷰 좋은 이사 파트너</span>
          </p>
        </div>

        <div ref={filterAnchorRef} className="h-0 w-full" aria-hidden />
        <div
          className={`sticky top-[44px] z-30 bg-white ${
            isFilterStuck ? "shadow-[0_1px_0_#eaedef]" : ""
          }`}
        >
          <FilterRow
            region={selectedRegion}
            selectedMoveFilter={selectedMoveFilter}
            onRegionClick={() => setShowRegionSheet(true)}
            onMoveFilterClick={handleMoveFilterChip}
          />
        </div>

        <FilteredPartnerList
          partners={partners}
          region={selectedRegion}
          moveFilter={selectedMoveFilter}
          onQuoteRequest={onQuoteRequest}
        />
      </div>
    </div>
  );
}
