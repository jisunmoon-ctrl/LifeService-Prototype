import svgPaths from "./MovingHome/svg-mlibded68s";
import { SlotText } from "../app/flows/b2c/moving-home/components/SlotText";
import imgAsset20260612T0749491 from "./MovingHome/3bb50ace43cb14aca7122bf8775841ea161fe4a7.png";
import imgAssetMovingBoxLargeGenuineBlueView2 from "./MovingHome/7d57220290465a4ecfee2097619e6139627aa89b.png";
import imgImg from "./MovingHome/51586715c09ade65c020bdac7cecf7e2f1e71392.png";
import imgImg1 from "./MovingHome/937df32536338a7847bba970dbfb08385542ecae.png";
import imgImg2 from "./MovingHome/7e85b958209c73a57462c950ee4aaaed1afef19d.png";
import imgImg3 from "./MovingHome/aa0ba7a6f28063e771dc08eec86e9c01f9107cf5.png";
import imgImg4 from "./MovingHome/79c16e496ccb750fd1e9ba9b724b32c18bd611fa.png";
import imgImg5 from "./MovingHome/4a18b3a90a6879f49ef24f4dad01520e10b2cff9.png";
import imgImg6 from "./MovingHome/8659e2af3bab4ea38187d8d184304669aa8d85d7.png";
import imgImg7 from "./MovingHome/e7be1045ffa2791d4a160d818a4632394adb937c.png";
import imgImg8 from "./MovingHome/aaee2342f74fd2cb7a4da68564140449f145e2d1.png";
import { imgColorSet, imgColorSet2, imgColorSet3 } from "./MovingHome/svg-5pvpp";
import { ChevronRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

function StarIcon({ size = 16, colorSetUrl }: { size?: number; colorSetUrl: string }) {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat"
        style={{
          maskImage: `url("${colorSetUrl}")`,
          maskPosition: `${1.668 * (size / 16)}px ${1.263 * (size / 16)}px`,
          maskSize: `${20.665 * (size / 16)}px ${19.785 * (size / 16)}px`,
        }}
      >
        <div className="absolute bg-[#ffc300] inset-0" />
      </div>
    </div>
  );
}

function ResponsibilityBadge() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col h-[13.4px] items-center justify-center overflow-clip relative shrink-0 w-[12px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.4005">
          <path clipRule="evenodd" d={svgPaths.p13c0c640} fill="#19BD86" fillRule="evenodd" />
        </svg>
      </div>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#19bd86] text-[13px] tracking-[-0.3px] whitespace-nowrap">책임보장</p>
    </div>
  );
}

function DotSeparator() {
  return (
    <div className="relative shrink-0 size-[2px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <circle cx="1" cy="1" fill="#141414" fillOpacity="0.16" r="1" />
      </svg>
    </div>
  );
}

interface PartnerCardProps {
  name: string;
  hasBadge: boolean;
  rating?: number;
  reviewCount?: string;
  recentContracts?: string;
  moveType?: string;
  options?: string[];
  extraOptions?: number;
  images?: string[];
  reviews?: string[];
  noReview?: boolean;
}

const REVIEW_TEXT = "가격도 조금  빼주시고 남자2명, 주방 짐 챙겨주시는  여자1명 오셔서 착착 꼼꼼하고 깔끔하게 진행해주셨어요~! 꼼꼼히 잘 챙겨주셔서 추천 드립니다!!!!!!!";

function PartnerCard({ name, hasBadge, rating, reviewCount, recentContracts, moveType, options = [], extraOptions = 0, images = [], reviews = [], noReview = false }: PartnerCardProps) {
  return (
    <div className="bg-white flex flex-col items-start relative w-full py-[16px]">
      <div className="flex gap-[12px] items-center w-full px-[16px] mb-[16px]">
        <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-0">
          <div className="flex gap-[4px] h-[20px] items-center w-full">
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[22px] overflow-hidden text-[#141414] text-[17px] text-ellipsis tracking-[-0.3px] whitespace-nowrap">{name}</p>
            {hasBadge && <ResponsibilityBadge />}
          </div>
          {noReview ? (
            <div className="flex gap-[4px] items-center">
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[#141414] text-[14px] tracking-[-0.3px] whitespace-nowrap">리뷰 0개</p>
              <DotSeparator />
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[#141414] text-[14px] tracking-[-0.3px] whitespace-nowrap">상담 0건</p>
            </div>
          ) : (
            <div className="flex gap-[4px] items-center">
              <div className="flex gap-[4px] items-center">
                <StarIcon size={12} colorSetUrl={imgColorSet2} />
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[18px] text-[#141414] text-[14px] tracking-[-0.3px] whitespace-nowrap">{rating}</p>
              </div>
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[#141414] text-[14px] tracking-[-0.3px] whitespace-nowrap">리뷰 {reviewCount}개</p>
              <DotSeparator />
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[#141414] text-[14px] tracking-[-0.3px] whitespace-nowrap">최근 계약 {recentContracts}건</p>
            </div>
          )}
          {moveType && (
            <div className="flex gap-[4px] items-center">
              <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[#8c8c8c] text-[14px] tracking-[-0.3px] whitespace-nowrap">{moveType}</p>
              {options.length > 0 && (
                <>
                  <DotSeparator />
                  <div className="flex gap-[4px] items-center">
                    {options.map((opt, i) => (
                      <span key={i} className="flex items-center gap-[4px]">
                        {i > 0 && <DotSeparator />}
                        <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[#8c8c8c] text-[14px] tracking-[-0.3px] whitespace-nowrap">{opt}</p>
                      </span>
                    ))}
                    {extraOptions > 0 && (
                      <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[#8c8c8c] text-[14px] tracking-[-0.3px] whitespace-nowrap">외 +{extraOptions}개</p>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <button className="bg-white h-[32px] rounded-[6px] shrink-0 border border-[#e0e0e0] px-[10px] text-[13px] font-['Pretendard:Medium',sans-serif] text-[#141414] tracking-[-0.3px] cursor-pointer hover:bg-gray-50 transition-colors whitespace-nowrap">
          견적받기
        </button>
      </div>
      {images.length > 0 && (
        <div className="flex gap-[2px] items-center w-full mb-[16px] overflow-x-auto pl-[16px]" style={{ scrollbarWidth: 'none' as const }}>
          {images.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 size-[90px]"
              style={{
                borderRadius: i === 0 ? '8px 0 0 8px' : i === images.length - 1 ? '0 4px 4px 0' : '0',
              }}
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                style={{
                  borderRadius: i === 0 ? '8px 0 0 8px' : i === images.length - 1 ? '0 4px 4px 0' : '0',
                }}
                src={src}
              />
            </div>
          ))}
          <div className="shrink-0 w-[16px]" />
        </div>
      )}
      {reviews.length > 0 && (
        <div className="flex gap-[2px] items-start w-full overflow-x-auto pl-[16px]" style={{ scrollbarWidth: 'none' as const }}>
          {reviews.map((text, i) => (
            <div key={i} className="bg-[#f5f5f5] items-start p-[12px] rounded-[8px] shrink-0 w-[274px]">
              <p
                className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[#141414] text-[13px] tracking-[-0.3px] w-full"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >{text}</p>
            </div>
          ))}
          <div className="shrink-0 w-[16px]" />
        </div>
      )}
    </div>
  );
}

export default function MobileLayout() {
  return (
    <div className="bg-white relative w-full" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white w-full">
        {/* Status bar */}
        <div className="flex items-center justify-between pl-[21px] pr-[14px] h-[50px] bg-white">
          <p className="font-semibold text-[14px] text-black tracking-[-0.28px]">9:41</p>
          <svg width="68" height="50" viewBox="0 0 68 50" fill="none">
            <g>
              <rect height="10.3333" opacity="0.35" rx="2.16667" stroke="black" width="21" x="43.5" y="21.833" />
              <path d={svgPaths.p121f2f80} fill="black" opacity="0.4" />
              <rect fill="black" height="7.33333" rx="1.33333" width="18" x="45" y="23.333" />
              <path d={svgPaths.p2e58a280} fill="black" />
              <path d={svgPaths.p1336aab0} fill="black" />
            </g>
          </svg>
        </div>
        {/* Nav bar */}
        <div className="relative flex items-center h-[44px] bg-white px-[16px]">
          <div className="flex-[1_0_0] flex items-center gap-[14px]">
            <div className="relative shrink-0 size-[24px]">
              <div
                className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat"
                style={{
                  maskImage: `url("${imgColorSet3}")`,
                  maskPosition: '3px 4.263px',
                  maskSize: '18px 15.475px',
                }}
              >
                <div className="absolute bg-[#141414] inset-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ATF */}
      <div className="bg-white w-full px-[16px]">
        <div className="pb-[12px] pt-[12px]">
          <div className="font-['Pretendard:SemiBold',sans-serif] text-[18px] text-[#141414] leading-[24px] tracking-[-0.3px]">
            <p>이사도 오늘의집에서,</p>
            <p>
              <span>최대 </span>
              <span className="text-[#00a1ff]">5개 </span>
              <span>업체로부터 한번에 견적 받기</span>
            </p>
          </div>
        </div>
        <div className="flex gap-[4px] items-center pb-[16px]">
          <div className="flex gap-[4px] items-center h-[18px]">
            <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#8c8c8c] leading-[18px] tracking-[-0.3px] whitespace-nowrap">평균 별점</p>
            <div className="flex gap-[2px] items-center">
              <StarIcon size={16} colorSetUrl={imgColorSet} />
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap">4.6</p>
            </div>
          </div>
          <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#8c8c8c] leading-[18px] tracking-[-0.3px] whitespace-nowrap">·</p>
          <div className="flex gap-[4px] items-center h-[18px]">
            <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#8c8c8c] leading-[18px] tracking-[-0.3px] whitespace-nowrap">실계약 후기</p>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap">7,000개 +</p>
          </div>
        </div>
        <div className="flex gap-[4px] items-start pb-[16px]">
          <div className="bg-[#f0f8fc] flex-1 min-w-0 relative rounded-[8px]">
            <div className="flex items-center justify-between pl-[16px] pr-[8px] py-[4px]">
              <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-[#141414] leading-[20px] tracking-[-0.3px]">원룸/용달</p>
              <div className="relative shrink-0 size-[58px]">
                <img alt="원룸/용달" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset20260612T0749491} />
              </div>
            </div>
          </div>
          <div className="bg-[#f0f8fc] flex-1 min-w-0 relative rounded-[8px]">
            <div className="flex items-center justify-between pl-[16px] pr-[8px] py-[4px]">
              <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-[#141414] leading-[20px] tracking-[-0.3px]">가정이사</p>
              <div className="relative shrink-0 size-[58px]">
                <img alt="가정이사" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgAssetMovingBoxLargeGenuineBlueView2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ededed] h-px w-full" />

      {/* BTF */}
      <div>
        <div className="bg-white pt-[20px] px-[16px] pb-[0px]">
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[18px] leading-[24px] tracking-[-0.3px] pb-[12px]">
            <span className="text-[#00a1ff]">성북구 </span>
            <span className="text-[#141414]">근처 추천 파트너 찾기</span>
          </p>
        </div>
        <div className="bg-white flex gap-[6px] items-center pb-[12px] px-[16px]">
          <div className="bg-white h-[38px] rounded-[9999px] border border-[#e0e0e0] flex items-center px-[9px] gap-[2px] cursor-pointer hover:bg-gray-50 transition-colors">
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap px-[6px]">지역별</p>
            <ChevronDown size={14} color="#141414" strokeWidth={1.5} />
          </div>
          <div className="flex h-[16px] items-center justify-center shrink-0 w-px">
            <div className="bg-[#ededed] h-[16px] w-px" />
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="bg-white h-[38px] rounded-[9999px] border border-[#e0e0e0] flex items-center px-[9px] cursor-pointer hover:bg-gray-50 transition-colors">
              <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap px-[6px]">용달/소형</p>
            </div>
            <div className="bg-white h-[38px] rounded-[9999px] border border-[#e0e0e0] flex items-center px-[9px] cursor-pointer hover:bg-gray-50 transition-colors">
              <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap px-[6px]">가정이사</p>
            </div>
          </div>
        </div>

        {/* Guarantee banner — 필터 하단 */}
        <div className="px-[16px] pb-[12px]">
          <motion.div
            className="banner-gradient-border bg-[#f0fff4] flex items-center justify-between px-[8px] py-[12px] rounded-[12px] cursor-pointer"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <div className="relative shrink-0 size-[24px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
              </div>
              <div className="flex gap-[4px] items-center">
                <SlotText />
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#141414] leading-[18px] tracking-[-0.3px] whitespace-nowrap">책임보장 알아보기</p>
              </div>
            </div>
            <ChevronRight size={15} color="#15b869" strokeWidth={2.5} />
          </motion.div>
        </div>

        <PartnerCard
          name="티익스프레스"
          hasBadge={true}
          rating={4.2}
          reviewCount="9,999"
          recentContracts="15"
          moveType="반포장이사"
          options={["입주청소", "짐보관 협의"]}
          extraOptions={3}
          images={[imgImg1, imgImg2, imgImg3, imgImg4, imgImg3]}
          reviews={[REVIEW_TEXT, REVIEW_TEXT]}
        />
        <div className="bg-[#ededed] h-px w-full" />
        <PartnerCard
          name="오늘이사"
          hasBadge={true}
          rating={4.2}
          reviewCount="9,999"
          recentContracts="15"
          moveType="반포장이사"
          options={["입주청소", "짐보관 협의"]}
          extraOptions={3}
          images={[imgImg5, imgImg6, imgImg7, imgImg8, imgImg3]}
          reviews={[REVIEW_TEXT, REVIEW_TEXT]}
        />
        <div className="bg-[#ededed] h-px w-full" />
        <PartnerCard
          name="티익스프레스"
          hasBadge={false}
          rating={4.2}
          reviewCount="9,999"
          recentContracts="15"
          moveType="반포장이사"
          options={["입주청소", "짐보관 협의"]}
          extraOptions={3}
          reviews={[REVIEW_TEXT, REVIEW_TEXT]}
        />
        <div className="bg-[#ededed] h-px w-full" />
        <PartnerCard
          name="티익스프레스"
          hasBadge={false}
          rating={4.2}
          reviewCount="9,999"
          recentContracts="15"
          moveType="반포장이사"
          options={["입주청소", "짐보관 협의"]}
          extraOptions={3}
          reviews={[REVIEW_TEXT]}
        />
        <div className="bg-[#ededed] h-px w-full" />
        <PartnerCard
          name="티익스프레스"
          hasBadge={false}
          noReview={true}
          reviews={[REVIEW_TEXT]}
        />
        <div className="bg-[#ededed] h-px w-full" />
        <PartnerCard
          name="티익스프레스"
          hasBadge={false}
          rating={4.2}
          reviewCount="9,999"
          recentContracts="15"
          reviews={[REVIEW_TEXT]}
        />
        <div className="bg-[#ededed] h-px w-full" />
        <PartnerCard
          name="티익스프레스"
          hasBadge={false}
          rating={4.2}
          reviewCount="9,999"
          recentContracts="15"
          reviews={[REVIEW_TEXT]}
        />
        <div className="bg-[#ededed] h-px w-full" />
      </div>
    </div>
  );
}
