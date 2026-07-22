import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AssetMovingBoxLargeGenuineBlueView2StillImage,
  AssetTruckLargeGenuineBlueView2StillImage,
} from "@bucketplace/assets/image";
import {
  IconArrowLeft,
  IconLocationPinDot,
  IconPlayCircleFilled,
  IconStarFilled,
  OdsBoxButton,
} from "../../../../shared/ods";
import type { EstimateMoveType } from "./estimateFunnelTypes";
import shortformThumb1 from "../../../../assets/estimate/shortform-thumb-1.png";
import shortformThumb2 from "../../../../assets/estimate/shortform-thumb-2.png";
import shortformThumb3 from "../../../../assets/estimate/shortform-thumb-3.png";
import shortformSample from "../../../../assets/estimate/shortform-sample.mp4";
import shortformMovingProcess from "../../../../assets/estimate/shortform-moving-process.mp4";

/** 화면 노출 비율 ≥ 이 값이면 자동재생 후보 (홈피드 숏폼 관례) */
const SHORTFORM_AUTOPLAY_THRESHOLD = 0.5;

const SHORTFORM_REVIEWS = [
  {
    id: "sf-1",
    poster: shortformThumb1,
    video: shortformMovingProcess,
    caption: "오늘의집 직접 중개, 10% 전담 파트너 책임보장",
  },
  {
    id: "sf-2",
    poster: shortformThumb2,
    video: shortformSample,
    caption: "오늘의집 직접 중개, 10% 전담 파트너 책임보장",
  },
  {
    id: "sf-3",
    poster: shortformThumb3,
    video: shortformSample,
    caption: "오늘의집 직접 중개, 10% 전담 파트너 책임보장",
  },
];

const PARTNERS = [
  {
    name: "티익스프레스",
    badge: "책임보장",
    rating: "4.2",
    reviews: "리뷰 9,999개",
    recent: "최근 계약 15건",
    services: "반포장이사 · 입주청소 · 짐보관 협의 외 +3개",
    quote:
      "가격도 조금 빼주시고 남자2명, 주방 짐 챙겨주시는 여자1명 오셔서 착착 꼼꼼하고 깔끔하게 진행해주셨어요~!",
  },
  {
    name: "민익스프레스",
    badge: "책임보장",
    rating: "4.5",
    reviews: "리뷰 2,140개",
    recent: "최근 계약 28건",
    services: "포장이사 · 입주청소 · 짐보관 협의",
    quote: "약속 시간 맞춰 오시고 짐도 꼼꼼하게 포장해 주셔서 만족스러웠어요.",
  },
];

interface EstimateMovingHomeProps {
  onStart: (moveType: EstimateMoveType) => void;
  onBack?: () => void;
}

/** MovingHome — Figma 7942:30485 */
export function EstimateMovingHome({ onStart, onBack }: EstimateMovingHomeProps) {
  return (
    <div className="size-full flex flex-col bg-white">
      <div className="flex-none relative h-[44px] flex items-center px-[16px]">
        {onBack && (
          <button type="button" onClick={onBack} className="absolute left-[16px] p-0" aria-label="뒤로가기">
            <IconArrowLeft size={24} className="text-[#141414]" />
          </button>
        )}
        <h1 className="mx-auto text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#141414]">이사</h1>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto">
        {/* ATF — 타이틀 + 견적 CTA (Figma 7943:73539) */}
        <div className="pt-[16px] pb-[12px] px-[16px] flex flex-col gap-[5px]">
          <h2 className="text-[17px] font-semibold leading-[22px] tracking-[-0.3px] text-[#141414]">
            우리집 이사 견적
            <br />
            얼마나 나올지 궁금하다면?
          </h2>
          <p className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
            무료 견적부터 받아보세요
          </p>
        </div>

        <div className="px-[16px] flex flex-col gap-[8px] pb-[20px]">
          <ServiceEntry
            title="소형/원룸"
            description="1인 가구·간단한 이사에 추천"
            image={<AssetTruckLargeGenuineBlueView2StillImage width={60} height={60} />}
            onClick={() => onStart("small")}
          />
          <ServiceEntry
            title="가정이사"
            description="2인 이상 가구·포장 이사에 추천"
            image={<AssetMovingBoxLargeGenuineBlueView2StillImage width={60} height={60} />}
            onClick={() => onStart("home")}
          />
        </div>

        {/* 후기 숏폼 번들 (Figma 7943:73495) + threshold 자동재생 */}
        <ShortformReviewRail items={SHORTFORM_REVIEWS} />

        {/* BTF — 파트너 리스트 */}
        <div className="pt-[16px] pb-[12px] px-[16px]">
          <p className="text-[17px] font-semibold leading-[22px] tracking-[-0.3px] text-[#141414] flex items-center gap-[2px]">
            <IconLocationPinDot size={18} className="text-[#00A1FF] shrink-0" />
            <span className="text-[#00A1FF]">서울</span>
            <span>리뷰 좋은 이사 파트너</span>
          </p>
        </div>

        <div className="flex flex-col">
          {PARTNERS.map((p, i) => (
            <div key={p.name}>
              <PartnerCard partner={p} onQuote={() => onStart("home")} />
              {i < PARTNERS.length - 1 && <div className="h-px bg-[#EAEDEF]" />}
            </div>
          ))}
        </div>
        <div className="h-[40px]" />
      </div>
    </div>
  );
}

type ShortformItem = (typeof SHORTFORM_REVIEWS)[number];

/**
 * 가로 숏폼 레일
 * - IntersectionObserver threshold 0.5: 화면 노출 ≥50% 인 카드만 자동재생 후보
 * - 후보 중 intersectionRatio 가 가장 큰 카드 1개만 재생 (동시 1재생)
 * - muted / loop / playsInline (모바일 자동재생 정책)
 */
function ShortformReviewRail({ items }: { items: ShortformItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ratiosRef = useRef(new Map<string, number>());
  const nodesRef = useRef(new Map<string, HTMLElement>());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const pickActive = () => {
      let bestId: string | null = null;
      let bestRatio = 0;
      ratiosRef.current.forEach((ratio, id) => {
        if (ratio >= SHORTFORM_AUTOPLAY_THRESHOLD && ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      setActiveId((prev) => (prev === bestId ? prev : bestId));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.shortformId;
          if (!id) continue;
          ratiosRef.current.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        pickActive();
      },
      {
        root: null,
        // 노출 ≥ 0.5 → 재생 후보 / 미만 → 정지
        threshold: [0, SHORTFORM_AUTOPLAY_THRESHOLD, 0.75, 1],
      }
    );
    observerRef.current = observer;
    nodesRef.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  const registerCard = (id: string) => (el: HTMLElement | null) => {
    const prev = nodesRef.current.get(id);
    if (prev && prev !== el) {
      observerRef.current?.unobserve(prev);
      nodesRef.current.delete(id);
    }
    if (el) {
      nodesRef.current.set(id, el);
      observerRef.current?.observe(el);
    }
  };

  return (
    <section className="pb-[20px]">
      <div className="pt-[16px] pb-[12px] px-[16px]">
        <p className="text-[17px] font-semibold leading-[22px] tracking-[-0.3px] text-[#141414]">
          생생한 이사 후기
        </p>
      </div>
      <div className="flex gap-[4px] overflow-x-auto px-[16px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <ShortformCard
            key={item.id}
            item={item}
            shouldPlay={activeId === item.id}
            register={registerCard(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

function ShortformCard({
  item,
  shouldPlay,
  register,
}: {
  item: ShortformItem;
  shouldPlay: boolean;
  register: (el: HTMLElement | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPlay && !userPaused) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => undefined);
    } else {
      video.pause();
    }
  }, [shouldPlay, userPaused]);

  // 활성 카드가 바뀌면 수동 pause 해제 (다시 자동재생 가능)
  useEffect(() => {
    if (!shouldPlay) setUserPaused(false);
  }, [shouldPlay]);

  const isPlaying = shouldPlay && !userPaused;

  return (
    <button
      type="button"
      data-shortform-id={item.id}
      ref={register}
      aria-label={isPlaying ? "숏폼 일시정지" : "숏폼 재생"}
      onClick={() => {
        if (!shouldPlay) return;
        setUserPaused((v) => !v);
      }}
      className="relative shrink-0 w-[120px] h-[160px] rounded-[12px] overflow-hidden text-left"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src={item.video}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
      {!isPlaying && (
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <IconPlayCircleFilled size={40} className="text-white/90 drop-shadow-sm" />
        </span>
      )}
      <p className="absolute inset-x-0 bottom-0 p-[8px] text-[13px] font-medium leading-[18px] tracking-[-0.3px] text-white line-clamp-3 pointer-events-none">
        {item.caption}
      </p>
    </button>
  );
}

function ServiceEntry({
  title,
  description,
  image,
  onClick,
}: {
  title: string;
  description: string;
  image: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-[12px] border border-[#E0E0E0] bg-white py-[12px] pl-[8px] pr-[16px] flex items-center gap-[4px] text-left"
    >
      <div className="shrink-0 size-[60px] overflow-hidden flex items-center justify-center">{image}</div>
      <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
        <p className="text-[16px] font-semibold leading-[20px] tracking-[-0.3px] text-[#141414]">{title}</p>
        <p className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">{description}</p>
      </div>
      <OdsBoxButton
        variant="subtle"
        size="small"
        className="shrink-0"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        무료 견적
      </OdsBoxButton>
    </button>
  );
}

function PartnerCard({
  partner,
  onQuote,
}: {
  partner: (typeof PARTNERS)[number];
  onQuote: () => void;
}) {
  return (
    <div className="px-[16px] py-[16px] flex flex-col gap-[16px]">
      <div className="flex items-start justify-between gap-[12px]">
        <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
          <div className="flex items-center gap-[4px]">
            <p className="text-[16px] font-semibold leading-[22px] tracking-[-0.3px] text-[#141414]">
              {partner.name}
            </p>
            <span className="h-[15px] px-[4px] rounded-[2px] bg-[#EBF8FF] text-[10px] font-bold leading-[15px] text-[#00A1FF]">
              {partner.badge}
            </span>
          </div>
          <div className="flex items-center gap-[4px] text-[13px] leading-[18px] tracking-[-0.3px] text-[#828C94]">
            <span className="inline-flex items-center gap-[2px] text-[#141414]">
              <IconStarFilled size={12} className="text-[#F7B401]" />
              {partner.rating}
            </span>
            <span>·</span>
            <span>{partner.reviews}</span>
            <span>·</span>
            <span>{partner.recent}</span>
          </div>
          <p className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#828C94]">{partner.services}</p>
        </div>
        <OdsBoxButton variant="normal" size="small" className="shrink-0" onClick={onQuote}>
          견적받기
        </OdsBoxButton>
      </div>
      <div className="rounded-[8px] bg-[#F7F9FA] px-[12px] py-[12px]">
        <p className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#525B61] line-clamp-2">
          {partner.quote}
        </p>
      </div>
    </div>
  );
}
