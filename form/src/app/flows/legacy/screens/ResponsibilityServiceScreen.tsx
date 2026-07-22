import React from "react";
import { ChevronLeft, Share, ChevronDown, Star, ShieldCheck } from "lucide-react";
import { SystemStatusBar } from "../../../shared/mobile/SystemStatusBar";
import imgHeroShield from "figma:asset/fb8f98eadc29fd8000636e038c39f6d5c9854635.png";
import { imgColorSet } from "../../../../imports/svg-8lgw2";

// --- Components ---

function Header({ onBack }: { onBack?: () => void }) {
  return (
    <div className="h-[44px] w-full bg-white flex items-center justify-between px-4 relative z-20 sticky top-0">
      <button onClick={onBack} className="p-1 -ml-1">
        <div className="relative shrink-0 size-6">
          <div 
            className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat" 
            style={{ 
              maskImage: `url('${imgColorSet}')`,
              WebkitMaskImage: `url('${imgColorSet}')`,
              maskPosition: "3.95px 3.95px",
              WebkitMaskPosition: "3.95px 3.95px",
              maskSize: "16.1px 16.1px",
              WebkitMaskSize: "16.1px 16.1px"
            }}
          >
            <div className="absolute bg-[var(--fg-neutral)] inset-0" />
          </div>
        </div>
      </button>
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-heading-16 text-[var(--fg-neutral)]">
        오늘의집 책임보장
      </h1>
      <button className="p-1 -mr-1">
        <Share className="size-6 text-[#2f3438]" />
      </button>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[458px] relative w-full shrink-0 bg-gradient-to-b from-[#e8faff] to-white">
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center pt-[60px]">
        {/* Title Group */}
        <div className="flex flex-col gap-[12px] items-center text-center w-[311px]">
          <div className="flex flex-col items-center">
            <h2 className="font-['Pretendard'] font-semibold text-[24px] text-[#141414] leading-[32px] tracking-[-0.3px]">
              추가금과 분실 걱정된다면?<br/>
              오늘의집 책임보장
            </h2>
          </div>
          <p className="font-['Pretendard'] font-normal text-[15px] text-[#141414] leading-[24px] tracking-[-0.3px] break-keep">
            책임보장 업체를 선택하면 이사 중 발생한 파손이나 지연을 오늘의집이 중재하고 A/S를 지원해요.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-[40px] relative size-[146px]">
          <img 
            src={imgHeroShield} 
            alt="Responsibility Shield" 
            className="size-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Chevron Down */}
        <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="size-[24px] text-[#8c8c8c]" />
        </div>
      </div>
    </div>
  );
}

function ProblemSolutionSection() {
  return (
    <div className="bg-white w-full px-[24px] py-[60px] flex flex-col gap-[30px] items-center">
      {/* Section Title */}
      <div className="flex flex-col gap-[12px] items-center text-center w-[311px]">
        <h2 className="font-['Pretendard'] font-semibold text-[24px] text-[#141414] leading-[32px] tracking-[-0.3px]">
          어떤 문제를 어떻게 해결하나요?
        </h2>
        <p className="font-['Pretendard'] font-normal text-[15px] text-[#141414] leading-[24px] tracking-[-0.3px] break-keep">
          이사 중 빈번히 발생하는 골치 아픈 문제들,<br/>
          책임보장으로 한큐에 해결해요.
        </p>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-[8px] w-full">
        <SolutionCard 
          title="이사 도중 가구, 귀중품\n파손이나 분실이 발생한다면?"
          desc="이사 중 소중한 가구나 귀중품에 손상 금액만큼\n보상을 통해 배상해드려요."
        />
        <SolutionCard 
          title="예상치 못한\n추가금이 발생한다면?"
          desc="현장에서의 불합리한 추가 비용 요구는 없이,\n계약 시 안내받은 견적 그대로, 정직하게"
        />
        <SolutionCard 
          title="계약했던 예약 일정이\n갑자기 취소된다면?"
          desc="약속된 일정을 철저히 준수하며,\n위반 시 확실한 피해 보상을 약속해요."
        />
      </div>
    </div>
  );
}

function SolutionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="w-full bg-[#ecf2f7] rounded-[12px] p-[20px] h-[321px] relative overflow-hidden group">
      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-[10px] items-start text-left">
        <h3 className="font-['Pretendard'] font-semibold text-[20px] text-[#141414] leading-[28px] tracking-[-0.3px] whitespace-pre-wrap">
          {title}
        </h3>
        <p className="font-['Pretendard'] font-normal text-[14px] text-[#141414] leading-[18px] break-keep whitespace-pre-wrap">
          {desc}
        </p>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,11,43,0.05)] to-transparent pointer-events-none" />
    </div>
  );
}

function FooterCTASection() {
  return (
    <div className="bg-[#f7f9fa] w-full px-[24px] pt-[60px] pb-[100px] flex flex-col items-center">
      <div className="flex flex-col gap-[30px] items-center w-full max-w-[326px]">
        {/* Title */}
        <h2 className="font-['Pretendard'] font-bold text-[26px] text-black text-center leading-[1.3] tracking-[-1px] whitespace-pre-wrap">
          따로 가입할 필요 없이,<br/>
          책임보상 업체와 계약하세요
        </h2>

        {/* Partner Cards */}
        <div className="flex flex-col gap-[12px] w-full items-center">
          <PartnerCard name="영구이사" rating="4.8" reviews={15} />
          <PartnerCard name="깔끔이사" rating="5.0" reviews={24} />
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ name, rating, reviews }: { name: string; rating: string; reviews: number }) {
  return (
    <div className="bg-white rounded-[8px] p-[16px] w-[268px] border border-[#e0e0e0] flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[4px] items-start">
        {/* Name */}
        <div className="flex items-center gap-[5px]">
          <span className="font-['Pretendard'] font-semibold text-[18px] text-[#141414] leading-[24px] tracking-[-0.3px]">
            {name}
          </span>
        </div>
        
        {/* Info Block */}
        <div className="flex flex-col gap-[8px] items-start">
          {/* Rating & Reviews */}
          <div className="flex items-center gap-[6px]">
             <div className="flex items-center gap-[2px]">
               <Star className="size-[12px] text-[#0aa5ff] fill-[#0aa5ff]" />
               <span className="font-['Pretendard'] font-bold text-[13px] text-[#2f3438] leading-[18px] tracking-[-0.3px]">{rating}</span>
             </div>
             <span className="font-['Pretendard'] font-normal text-[13px] text-[#2f3438] leading-[18px] tracking-[-0.3px]">
               리뷰 <span className="font-bold">{reviews}</span>
             </span>
          </div>
          
          {/* Guarantee Badge */}
          <div className="flex items-center gap-[4px]">
             <div className="flex items-center gap-[2px]">
               <ShieldCheck className="size-[12px] text-[#00a1ff]" />
               <span className="font-['Pretendard'] font-semibold text-[13px] text-[#00a1ff] leading-[18px] tracking-[-0.3px]">
                 오늘의집 책임보장
               </span>
             </div>
             <span className="font-['Pretendard'] font-normal text-[12px] text-[#828c94] leading-[16px] tracking-[-0.3px]">
               파손 보험, A/S 서비스
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResponsibilityServiceScreen({ onNavigate, onBack }: { onNavigate?: (screen: string) => void; onBack?: () => void }) {
  return (
    <div className="bg-white relative size-full flex flex-col">
      {/* Header Area */}
      <div className="shrink-0 bg-white z-50">
        <SystemStatusBar />
        <Header onBack={onBack} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <HeroSection />
        <ProblemSolutionSection />
        <FooterCTASection />
      </div>
    </div>
  );
}