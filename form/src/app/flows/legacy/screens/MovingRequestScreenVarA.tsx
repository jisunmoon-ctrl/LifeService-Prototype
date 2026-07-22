// 매칭 업체 페이지 - 최저/최고/평균가 테이블 + 포장/반포장/일반 토글
import React, { useState } from "react";
import { motion } from "motion/react";
import { SystemStatusBar } from "../../../shared/mobile/SystemStatusBar";
import svgPaths from "../../../../imports/svg-63crscz539";
import { findPriceData, formatWon } from "../../../utils/movingPriceData";

function ArrowLeftIcon() {
  return (
    <div className="relative size-[24px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="absolute inset-[10.67%_6.67%_10.72%_7.92%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 18.8667">
              <path clipRule="evenodd" d={svgPaths.p3bee1d00} fill="var(--fill-0, #2F3438)" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalloutLoading() {
  return (
    <div className="p-4 w-full">
      <div className="bg-[#f7f9fa] rounded w-full">
        <div className="content-stretch flex flex-col gap-3 items-start p-4 relative w-full">
          <div className="content-stretch flex gap-1.5 items-center relative w-full">
            <div className="relative shrink-0 size-[18px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <circle cx="9" cy="9" r="8" stroke="white" strokeWidth="2" />
              </svg>
              <motion.div
                className="absolute bottom-1/2 left-1/2 right-0 top-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "0% 100%" }}
              >
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                  <path d={svgPaths.p277baa80} fill="#2F3438" />
                </svg>
              </motion.div>
            </div>
            <p className="flex-1 text-heading-16 text-[var(--fg-neutral)]">매칭할 업체를 찾는 중이에요</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ title, onBack }: { title: string; onBack?: () => void }) {
  return (
    <div className="h-[44px] w-full bg-white flex items-center justify-between px-4 relative z-20">
      <button onClick={onBack} className="cursor-pointer">
        <ArrowLeftIcon />
      </button>
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-heading-16 text-[var(--fg-neutral)]">
        {title}
      </h1>
      <div className="w-6" />
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 items-start w-full text-body-15">
      <span className="text-[#8c8c8c] w-[78px] shrink-0">{label}</span>
      <span className="text-[var(--fg-neutral)] flex-1 break-keep">{value}</span>
    </div>
  );
}

function SectionDivider() {
  return <div className="w-full h-3 bg-[var(--bg-weak)] shrink-0" />;
}

// 유형별 설정
const typeConfig: Record<string, { 이사유형: string; 세부유형: string; label: string; ev출발: string; ev도착: string; 인원수: string }> = {
  "포장": {
    이사유형: "포장", 세부유형: "소형", label: "소형이사",
    ev출발: "엘리베이터없음", ev도착: "엘리베이터없음", 인원수: "1인",
  },
  "반포장": {
    이사유형: "반포장", 세부유형: "소형", label: "소형이사",
    ev출발: "엘리베이터없음", ev도착: "엘리베이터있음", 인원수: "1인",
  },
  "일반": {
    이사유형: "일반", 세부유형: "소형", label: "소형이사",
    ev출발: "엘리베이터없음", ev도착: "엘리베이터있음", 인원수: "1인",
  },
};

// 가격 테이블 섹션
function PriceTableSection() {
  const [selectedType, setSelectedType] = useState<"포장" | "반포장" | "일반">("포장");
  const [showTooltip, setShowTooltip] = useState(false);

  const config = typeConfig[selectedType];
  const priceData = findPriceData(
    config.이사유형, config.세부유형, config.ev출발, config.ev도착, config.인원수
  );
  if (!priceData) return null;

  return (
    <div className="w-full">
      {/* 타이틀 영역 */}
      <div className="content-stretch flex flex-col gap-[6px] items-start justify-center pb-[8px] pt-[16px] px-[16px] w-full relative">
        <div className="content-stretch flex gap-[4px] items-center justify-center">
          <p className="font-['Pretendard'] font-semibold leading-[22px] text-[#141414] text-[17px] tracking-[-0.3px]">
            소형이사 기준 평균 견적
          </p>
          {/* 정보 아이콘 (클릭 가능) */}
          <button
            onClick={() => setShowTooltip(prev => !prev)}
            className="relative shrink-0 size-[16px] cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#C4C4C4" strokeWidth="1" />
              <text x="8" y="11.5" textAnchor="middle" fill="#C4C4C4" fontSize="9" fontFamily="Pretendard" fontWeight="500">?</text>
            </svg>
          </button>
        </div>

        {/* 툴팁 */}
        {showTooltip && (
          <motion.div
            className="absolute left-[32px] right-[16px] top-[42px] z-20 bg-white rounded-[4px] shadow-[0px_2px_5px_0px_rgba(63,71,77,0.15)]"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[12px] w-full">
              <p className="flex-1 font-['Pretendard'] leading-[20px] text-[#2f3438] text-[14px] tracking-[-0.3px]">
                최근 3년간 오늘의집 실제 계약 견적을 바탕으로 한 평균가로 최종 견적은 다를 수 있어요.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
                className="shrink-0 pt-[4px] cursor-pointer"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M9.5 2.5L2.5 9.5" stroke="#141414" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M2.5 2.5L9.5 9.5" stroke="#141414" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}

        {/* 포장/반포장/일반 토글 */}
        <div className="content-stretch flex gap-[12px] items-start">
          {(["포장", "반포장", "일반"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className="content-stretch flex gap-[6px] items-center justify-center py-[8px] cursor-pointer"
            >
              <div className="relative shrink-0 size-[8px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill={selectedType === type ? "#141414" : "#D5D5D5"} r="4" />
                </svg>
              </div>
              <p className={`font-['Pretendard'] font-medium leading-[18px] text-[14px] tracking-[-0.3px] transition-colors duration-200 ${
                selectedType === type ? "text-[#141414]" : "text-[#D5D5D5]"
              }`}>{type}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 가격 테이블 */}
      <div className="content-stretch flex flex-col items-start justify-end pb-[16px] pt-[24px] px-[16px] w-full">
        <motion.div
          className="content-stretch flex items-center justify-between w-full"
          key={selectedType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* 최저 */}
          <div className="flex-1 min-h-px min-w-px">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col gap-[7px] items-start justify-center pl-[16px] w-full whitespace-nowrap">
                <p className="font-['Pretendard'] leading-[16px] text-[#141414] text-[12px] tracking-[-0.3px]">최저</p>
                <p className="font-['Pretendard'] font-semibold leading-[22px] text-[#141414] text-[17px] tracking-[-0.3px]">
                  {formatWon(priceData.최소)}
                </p>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="bg-[#e3e3e3] h-[41px] rounded-[100px] shrink-0 w-px" />

          {/* 평균 */}
          <div className="flex-1 min-h-px min-w-px">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col gap-[7px] items-start justify-center pl-[16px] w-full whitespace-nowrap">
                <p className="font-['Pretendard'] leading-[16px] text-[#141414] text-[12px] tracking-[-0.3px]">평균</p>
                <p className="font-['Pretendard'] font-semibold leading-[22px] text-[#00a1ff] text-[17px] tracking-[-0.3px]">
                  {formatWon(priceData.평균)}
                </p>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="bg-[#e3e3e3] h-[41px] rounded-[100px] shrink-0 w-px" />

          {/* 최고 */}
          <div className="flex-1 min-h-px min-w-px">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col gap-[7px] items-start justify-center pl-[16px] w-full whitespace-nowrap">
                <p className="font-['Pretendard'] leading-[16px] text-[#141414] text-[12px] tracking-[-0.3px]">최고</p>
                <p className="font-['Pretendard'] font-semibold leading-[22px] text-[#141414] text-[17px] tracking-[-0.3px]">
                  {formatWon(priceData.최대)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function MovingRequestScreenVarA({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  return (
    <div className="bg-white relative size-full flex flex-col">
      {/* Header Area (Fixed) */}
      <div className="shrink-0 bg-white z-50">
        <SystemStatusBar />
        <Header title="매칭 업체 목록" onBack={() => onNavigate?.("main")} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto relative">
        <div className="flex flex-col animate-in fade-in duration-300">
          <CalloutLoading />
          <SectionDivider />
          <PriceTableSection />
        </div>

        <SectionDivider />

        {/* Request Details */}
        <div className="flex flex-col px-[16px]">
          <div className="w-full py-[16px]">
            <p className="font-['Pretendard'] font-semibold leading-[22px] text-[#141414] text-[17px] tracking-[-0.3px]">
              신청내역
            </p>
          </div>

          <div className="content-stretch flex flex-col gap-[20px] items-start">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] tracking-[-0.3px]">
              <p className="font-['Apple_SD_Gothic_Neo'] font-bold text-[#141414] text-[16px]">내 신청정보</p>
              <div className="content-stretch flex flex-col font-['Pretendard'] gap-[16px] items-start text-[15px]">
                <DetailRow label="신청일자" value="2025년 1월 25일 23:15" />
                <DetailRow label="고객명" value="문지선" />
                <DetailRow label="이사종류" value="가정이사" />
                <DetailRow label="이사예정일" value="2025년 3월 25일 수요일" />
                <DetailRow label="연락처" value="010-1234-5678" />
              </div>
            </div>

            <div className="h-px w-[343px] bg-[#eaedef]" />

            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] tracking-[-0.3px]">
              <p className="font-['Apple_SD_Gothic_Neo'] font-bold text-[#141414] text-[16px] w-[173px]">출발지</p>
              <div className="content-stretch flex flex-col font-['Pretendard'] gap-[16px] items-start text-[15px]">
                <DetailRow label="주소" value="서울 서초구 서초대로74길 4 삼성생명서초타워 25층" />
                <DetailRow label="엘리베이터" value="있음" />
                <DetailRow label="평수" value="40평대" />
              </div>
            </div>

            <div className="h-px w-[343px] bg-[#eaedef]" />

            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] tracking-[-0.3px]">
              <p className="font-['Apple_SD_Gothic_Neo'] font-bold text-[#141414] text-[16px] w-[173px]">도착지</p>
              <div className="content-stretch flex flex-col font-['Apple_SD_Gothic_Neo'] gap-[16px] items-start text-[16px]">
                <DetailRow label="주소" value="서울 서초구 서초대로74길 4 삼성생명서초타워 25층" />
                <DetailRow label="엘리베이터" value="있음" />
                <DetailRow label="평수" value="40평대" />
                <DetailRow label="가구인원수" value="5인 이상" />
              </div>
            </div>

            <div className="h-px w-[343px] bg-[#eaedef]" />

            <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px]">
              <p className="font-['Apple_SD_Gothic_Neo'] font-bold leading-[24px] text-[#141414] text-[16px] tracking-[-0.3px] w-[173px]">메모</p>
              <div className="bg-[#f7f9fa] relative rounded-[4px] w-[343px]">
                <div aria-hidden="true" className="absolute border border-[#e6e6e6] inset-0 pointer-events-none rounded-[4px]" />
                <div className="content-stretch flex items-start p-[16px] w-full">
                  <p className="flex-1 font-['Apple_SD_Gothic_Neo'] leading-[24px] text-[#141414] text-[16px] tracking-[-0.3px]">고객이 입력한 내용</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}