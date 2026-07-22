import { useState } from "react";
import svgPaths from "./Container/svg-3ujc0jg7mo";
import imgAsset from "./1280/3bb50ace43cb14aca7122bf8775841ea161fe4a7.png";
import imgAssetMovingBox from "./1280/7d57220290465a4ecfee2097619e6139627aa89b.png";
import imgShield from "./1280/51586715c09ade65c020bdac7cecf7e2f1e71392.png";
import imgP1 from "./1280/937df32536338a7847bba970dbfb08385542ecae.png";
import imgP2 from "./1280/aa0ba7a6f28063e771dc08eec86e9c01f9107cf5.png";
import imgP3 from "./1280/70a92ea5003e4ed8ca974898103cce56a3758049.png";
import imgP4 from "./1280/ded433038e0239aa12f08738a69bdd1130a84ebf.png";
import imgP5 from "./1280/d6e740bcab1514e00d8a2c32c29cf8c1dbaa0153.png";
import { ChevronRight, Star, Search, ShoppingCart, ChevronDown, PenSquare } from "lucide-react";
import { SlotText } from "../app/flows/b2c/moving-home/components/SlotText";

/* ── Data ── */
const REGIONS = ["서울·경기", "인천", "대구", "부산", "광주", "대전", "울산", "강원도", "경상도", "경상북도", "전라남도", "전라북도", "충청북도", "세종시", "제주도"];
const MOVE_TYPES = ["전체", "소형·용달", "가정이사"];

const REVIEW_TEXT = "가격도 조금 빼주시고 남자2명, 주방 짐 챙겨주시는 여자1명 오셔서 착착 꼼꼼하고 깔끔하게 진행해주셨어요~! 꼼꼼히 잘 챙겨주셔서 추천 드립니다!!!!!!!";

const PARTNERS = [
  {
    name: "티익스프레스", hasBadge: true,
    rating: 4.2, reviews: 9999, contracts: 15,
    moveType: "반포장이사", options: ["짐보관협의", "매트리스케어"], extra: 3,
    images: [imgP1, imgP2, imgP3, imgP4, imgP5, imgP2],
    review1: REVIEW_TEXT,
    review2: "아는분이 추천해줘서 알고는 있었는데 실제로도 엄청 꼼꼼하게 해주셨어요! 이사 기간이 엄청 촉박했는데 바로 해주신다고 했고 신혼집 가구 살림들이라 다 새제품이었는데…",
  },
  {
    name: "호랑이이사", hasBadge: true,
    rating: 4.2, reviews: 9999, contracts: 15,
    moveType: "포장이사", options: ["짐보관협의", "이사청소"], extra: 0,
    images: [imgP1, imgP2, imgP3],
    review1: REVIEW_TEXT,
    review2: "날짜를 한번 변경했음에도 흔쾌히 원하는 날짜에 진행해주셨고 작업속도가 엄청빨라서 짐싸는시간이 40분밖에 안걸렸어요.",
  },
  {
    name: "오늘이사", hasBadge: false,
    rating: 4.2, reviews: 9999, contracts: 15,
    moveType: "반포장이사", options: ["짐보관협의", "이사청소"], extra: 2,
    images: [] as string[],
    review1: "친절하시고 가격도 저렴하고 꼼꼼하게 잘해주셨어요..에어컨 철거도 완벽하게 해주셨어요.",
    review2: "",
  },
  {
    name: "오케이이사", hasBadge: false,
    rating: 4.2, reviews: 9999, contracts: 15,
    moveType: "반포장이사", options: ["입주청소", "짐보관 협의"], extra: 3,
    images: [imgP1, imgP2, imgP3, imgP4, imgP5, imgP2],
    review1: REVIEW_TEXT,
    review2: REVIEW_TEXT,
  },
  {
    name: "티익스프레스", hasBadge: true,
    rating: 4.2, reviews: 9999, contracts: 15,
    moveType: "반포장이사", options: ["입주청소", "짐보관 협의"], extra: 3,
    images: [imgP1, imgP2, imgP3, imgP4, imgP5, imgP2],
    review1: REVIEW_TEXT,
    review2: REVIEW_TEXT,
  },
];

/* ── Sub-components ── */
function RadioButton({ selected }: { selected: boolean }) {
  return selected ? (
    <div className="bg-[#141414] flex items-center justify-center rounded-full shrink-0 size-[20px]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d={svgPaths.p27c6a280} fill="white" />
      </svg>
    </div>
  ) : (
    <div className="bg-white rounded-full shrink-0 size-[20px] border border-[#e0e0e0]" />
  );
}

function DotSep() {
  return (
    <svg width="2" height="2" viewBox="0 0 2 2" fill="none" className="shrink-0">
      <circle cx="1" cy="1" r="1" fill="#141414" fillOpacity="0.16" />
    </svg>
  );
}

function ResponsibilityBadge() {
  return (
    <div className="flex gap-[2px] items-center shrink-0">
      <div className="flex flex-col h-[13.4px] items-center justify-center overflow-clip shrink-0 w-[12px]">
        <svg width="12" height="13.4" viewBox="0 0 12 13.4005" fill="none">
          <path clipRule="evenodd" d={svgPaths.p13c0c640} fill="#19BD86" fillRule="evenodd" />
        </svg>
      </div>
      <p className="font-['Pretendard:Bold',sans-serif] text-[13px] leading-[15px] text-[#19bd86] tracking-[-0.3px] whitespace-nowrap">책임보장</p>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[4px] items-center shrink-0">
      <Star size={12} fill="#ffc300" color="#ffc300" strokeWidth={0} />
      <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap">{rating}</p>
    </div>
  );
}

function PartnerCard({ p }: { p: typeof PARTNERS[0] }) {
  return (
    <div className="bg-white flex flex-col gap-[16px] items-start w-full py-[16px]">
      {/* Info row */}
      <div className="flex gap-[12px] items-center w-full">
        <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
          <div className="flex gap-[4px] items-center h-[20px]">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[17px] text-[#141414] leading-[22px] tracking-[-0.3px] whitespace-nowrap">{p.name}</p>
            {p.hasBadge && <ResponsibilityBadge />}
          </div>
          <div className="flex gap-[4px] items-center">
            <StarRating rating={p.rating} />
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap">리뷰 {p.reviews.toLocaleString()}개</p>
            <DotSep />
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap">최근 계약 {p.contracts}건</p>
          </div>
          <div className="flex gap-[4px] items-center">
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#8c8c8c] leading-[18px] tracking-[-0.3px] whitespace-nowrap">{p.moveType}</p>
            <DotSep />
            {p.options.map((opt, i) => (
              <span key={i} className="flex items-center gap-[4px]">
                {i > 0 && <DotSep />}
                <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#8c8c8c] leading-[18px] tracking-[-0.3px] whitespace-nowrap">{opt}</p>
              </span>
            ))}
            {p.extra > 0 && <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#8c8c8c] leading-[18px] tracking-[-0.3px] whitespace-nowrap">외 +{p.extra}개</p>}
          </div>
        </div>
        <button className="bg-white border border-[#e0e0e0] rounded-[8px] h-[40px] w-[84px] shrink-0 font-['Pretendard:Medium',sans-serif] text-[14px] text-[#141414] tracking-[-0.3px] cursor-pointer hover:bg-gray-50 transition-colors">
          견적받기
        </button>
      </div>

      {/* Photos — 3장: flex stretch, 4장+: 90px 고정 */}
      {p.images.length > 0 && (
        p.images.length <= 3 ? (
          <div className="flex gap-[2px] items-center w-full">
            {p.images.map((src, i) => {
              const isFirst = i === 0;
              const isLast = i === p.images.length - 1;
              const r = isFirst ? "8px 0 0 8px" : isLast ? "0 8px 8px 0" : "0";
              return (
                <div key={i} className="flex-[1_0_0] h-[90px] min-w-px relative" style={{ borderRadius: r }}>
                  <img alt="" className="absolute inset-0 size-full object-cover max-w-none pointer-events-none" style={{ borderRadius: r }} src={src} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-[2px] items-center w-full overflow-x-auto" style={{ scrollbarWidth: "none" as const }}>
            {p.images.map((src, i) => {
              const isFirst = i === 0;
              const isLast = i === p.images.length - 1;
              const r = isFirst ? "8px 0 0 8px" : isLast ? "0 4px 4px 0" : "0";
              return (
                <div key={i} className="relative shrink-0 size-[90px]" style={{ borderRadius: r }}>
                  <img alt="" className="absolute inset-0 size-full object-cover max-w-none pointer-events-none" style={{ borderRadius: r }} src={src} />
                </div>
              );
            })}
          </div>
        )
      )}

      {/* Reviews — h-[60px] 고정, overflow hidden */}
      {(p.review1 || p.review2) && (
        <div className="flex gap-[2px] items-start w-full overflow-x-auto" style={{ scrollbarWidth: "none" as const }}>
          {[p.review1, p.review2].filter(Boolean).map((text, i) => {
            const isSingle = [p.review1, p.review2].filter(Boolean).length === 1;
            return (
              <div
                key={i}
                className={`bg-[#f5f5f5] h-[60px] items-start p-[12px] rounded-[8px] overflow-hidden ${isSingle ? "flex flex-1 min-w-px" : "flex shrink-0 w-[274px]"}`}
              >
                <p className="font-['Pretendard:Regular',sans-serif] text-[13px] text-[#141414] leading-[18px] tracking-[-0.3px] overflow-hidden flex-1 min-w-px" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── GNB ── */
function Gnb() {
  const NAV_LINKS = ["커뮤니티", "쇼핑", "인테리어/생활"];
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-[#f0f0f0] w-full">
      <div className="flex items-center justify-between h-[80px] px-[60px] max-w-[1256px] mx-auto">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-[24px]">
          <div className="flex items-center gap-[6px] shrink-0 cursor-pointer">
            <div className="w-[32px] h-[32px] rounded-full bg-[#0aa5ff] flex items-center justify-center">
              <span className="text-white text-[11px] font-bold leading-none">오늘</span>
            </div>
            <span className="font-['Pretendard:Bold',sans-serif] text-[18px] text-[#141414] tracking-[-0.3px] whitespace-nowrap">오늘의집</span>
          </div>
          <div className="flex items-center gap-[4px]">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className={`px-[5px] py-[4px] font-['Pretendard:Bold',sans-serif] text-[18px] tracking-[-0.3px] whitespace-nowrap cursor-pointer ${link === "인테리어/생활" ? "text-[#0aa5ff]" : "text-[#141414]"}`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
        {/* Right: search + icons + CTA */}
        <div className="flex items-center gap-[9px]">
          <div className="flex items-center gap-[6px] h-[40px] px-[15px] bg-white border border-[#e6e6e6] rounded-[4px] w-[196px]">
            <Search size={18} color="#828c94" strokeWidth={1.5} />
            <span className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#b0b8be] tracking-[-0.3px]">통합검색</span>
          </div>
          <div className="flex items-center gap-[0px]">
            <button className="p-[6px] cursor-pointer"><ShoppingCart size={22} color="#525b61" strokeWidth={1.5} /></button>
            <div className="h-[16px] w-px bg-[#eaedef] mx-[2px]" />
            {["로그인", "회원가입", "고객센터"].map((t, i) => (
              <span key={t}>
                {i > 0 && <span className="text-[#eaedef] mx-[2px]">|</span>}
                <button className="px-[6px] font-['Pretendard:Regular',sans-serif] text-[14px] text-[#525b61] tracking-[-0.3px] cursor-pointer whitespace-nowrap">{t}</button>
              </span>
            ))}
          </div>
          <div className="h-[16px] w-px bg-[#eaedef]" />
          <button className="flex items-center gap-[6px] h-[40px] px-[16px] bg-[#0aa5ff] rounded-[4px] cursor-pointer">
            <span className="font-['Pretendard:Regular',sans-serif] text-[14px] text-white tracking-[-0.3px]">글쓰기</span>
            <ChevronDown size={14} color="white" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function DesktopLayout() {
  const [selectedRegion, setSelectedRegion] = useState("서울·경기");
  const [selectedType, setSelectedType] = useState("전체");

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen"
      style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}
    >
      {/* GNB */}
      <Gnb />

      {/* ATF — Figma 1280 스펙: max-w-[720px], 타이틀 위 / 소셜프루프 / 쇼트컷 */}
      <div
        className="flex items-center justify-center w-full"
        style={{ background: "linear-gradient(to bottom, #f4f8fb 0%, white 100%)" }}
      >
        <div className="flex flex-col items-start w-full max-w-[720px] py-[60px] px-[20px]">
          {/* Title */}
          <div className="font-['Pretendard:SemiBold',sans-serif] text-[24px] text-[#141414] leading-[32px] tracking-[-0.3px] pb-[20px]">
            <p>이사도 오늘의집에서,</p>
            <p>최대 5개 업체로부터 견적 한번에 받기</p>
          </div>
          {/* Social proof */}
          <div className="flex gap-[4px] items-center pb-[20px]">
            <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-[#8c8c8c] leading-[20px] tracking-[-0.3px] whitespace-nowrap">평균 별점</p>
            <Star size={16} fill="#ffc300" color="#ffc300" strokeWidth={0} />
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#141414] leading-[20px] tracking-[-0.3px] whitespace-nowrap">4.6</p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#8c8c8c] leading-[18px] tracking-[-0.3px] whitespace-nowrap">·</p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-[#8c8c8c] leading-[20px] tracking-[-0.3px] whitespace-nowrap">실계약 후기</p>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#141414] leading-[20px] tracking-[-0.3px] whitespace-nowrap">7,000개 +</p>
          </div>
          {/* Shortcuts — w-[360px], flex-[1_0_0] cards */}
          <div className="flex gap-[4px] items-center w-[360px]">
            {[
              { label: "원룸/용달", img: imgAsset, fit: "cover" },
              { label: "가정이사", img: imgAssetMovingBox, fit: "contain" },
            ].map(({ label, img, fit }) => (
              <div key={label} className="bg-[#f0f8fc] flex-[1_0_0] min-w-px relative rounded-[8px] cursor-pointer hover:opacity-90 transition-opacity">
                <div className="flex items-center justify-between pl-[16px] pr-[8px] py-[4px]">
                  <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-[#141414] leading-[20px] tracking-[-0.3px]">{label}</p>
                  <div className="relative shrink-0 size-[58px]">
                    <img alt={label} className={`absolute inset-0 size-full pointer-events-none max-w-none object-${fit}`} src={img} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contents: sidebar + PLP */}
      <div className="flex gap-[20px] items-start w-full max-w-[720px] px-[20px] pb-[60px]">
        {/* Sidebar */}
        <div className="bg-white flex flex-col items-start w-[220px] shrink-0">
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[20px] text-[#2f3438] leading-[28px] tracking-[-0.3px] pb-[30px]">필터</p>

          {/* 지역 */}
          <div className="flex flex-col items-start pb-[16px] w-full">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[17px] text-[#2f3438] leading-[22px] tracking-[-0.3px] pb-[12px]">지역</p>
            <div className="flex flex-col gap-[12px] w-full">
              {REGIONS.map((r) => (
                <button key={r} onClick={() => setSelectedRegion(r)} className="flex gap-[8px] items-center w-full text-left cursor-pointer">
                  <RadioButton selected={selectedRegion === r} />
                  <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#141414] leading-[20px] tracking-[-0.3px] whitespace-nowrap">{r}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 종류 */}
          <div className="flex flex-col items-start pb-[16px] w-full">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[17px] text-[#2f3438] leading-[22px] tracking-[-0.3px] pb-[12px]">종류</p>
            <div className="flex flex-col gap-[12px] w-full">
              {MOVE_TYPES.map((t) => (
                <button key={t} onClick={() => setSelectedType(t)} className="flex gap-[8px] items-center w-full text-left cursor-pointer">
                  <RadioButton selected={selectedType === t} />
                  <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#141414] leading-[20px] tracking-[-0.3px] whitespace-nowrap">{t}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PLP */}
        <div className="flex flex-col items-start flex-1 min-w-0">
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[20px] leading-[28px] tracking-[-0.3px] pb-[30px]">
            <span className="text-[#00a1ff]">{selectedRegion}</span>
            <span className="text-[#141414]"> 추천 파트너 찾기</span>
          </p>

          {/* Banner */}
          <div className="banner-gradient-border bg-[#f0fff4] flex items-center justify-between px-[8px] py-[12px] rounded-[12px] cursor-pointer w-full mb-[24px]">
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <div className="relative shrink-0 size-[24px]">
                <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none max-w-none" src={imgShield} />
              </div>
              <div className="flex gap-[4px] items-center">
                <SlotText />
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap">책임보장 알아보기</p>
              </div>
            </div>
            <ChevronRight size={15} color="#15b869" strokeWidth={2.5} />
          </div>

          {/* Partner cards */}
          <div className="bg-white flex flex-col items-start w-full">
            {PARTNERS.map((p, i) => (
              <div key={p.name + i} className="w-full">
                <PartnerCard p={p} />
                {i < PARTNERS.length - 1 && <div className="bg-[#ededed] h-px w-full" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
