import React from "react";
import { Star, Phone, Truck } from "lucide-react";

// SVG Paths
const svgPaths = {
  starFill: "M4.51508 0.904845C4.68739 0.498384 5.26345 0.498385 5.43577 0.904846L6.31355 2.97542C6.38412 3.14187 6.53905 3.25727 6.71874 3.27721L8.9046 3.51979C9.32758 3.56673 9.50228 4.08696 9.19337 4.37968L7.52638 5.95926C7.40135 6.07773 7.34611 6.25222 7.38017 6.42107L7.84015 8.70138C7.92629 9.12836 7.4632 9.45364 7.09075 9.22777L5.2347 8.10216C5.07535 8.00553 4.87549 8.00553 4.71615 8.10216L2.8601 9.22777C2.48765 9.45364 2.02456 9.12836 2.11069 8.70138L2.57068 6.42107C2.60474 6.25222 2.54949 6.07773 2.42446 5.95926L0.757482 4.37968C0.448569 4.08696 0.623269 3.56673 1.04624 3.51979L3.2321 3.27721C3.4118 3.25727 3.56673 3.14187 3.6373 2.97542L4.51508 0.904845Z",
  shield: "M3.76807 0C3.83243 2.65761e-06 3.89541 0.0186806 3.94941 0.0537914L5.6373 1.15126C5.85795 1.29471 6.14209 1.29472 6.36273 1.15126L8.05059 0.0537914C8.10459 0.0186806 8.16757 2.65758e-06 8.23193 0H11.6667C11.8508 0 12 0.149644 12 0.334238V8.83377C12 9.05728 11.8886 9.26602 11.7031 9.39L6.55469 12.8316C6.21879 13.0561 5.78121 13.0561 5.44531 12.8316L0.296875 9.39C0.111409 9.26602 0 9.05728 0 8.83377V0.334238C0 0.149643 0.149238 3.44547e-08 0.333333 0H3.76807ZM8.354 3.98409C8.286 3.91645 8.17618 3.91689 8.10872 3.98507L5.75938 6.35982C5.69154 6.42839 5.581 6.4284 5.51315 6.35986L4.22445 5.0578C4.15697 4.98963 4.04715 4.98923 3.97917 5.05688L3.28978 5.74292C3.2218 5.81057 3.22137 5.92066 3.28883 5.98883L5.16862 7.88805C5.29238 8.01308 5.46081 8.08339 5.63649 8.08337C5.81217 8.08334 5.98057 8.01301 6.1043 7.88795L9.04453 4.91588C9.11198 4.84769 9.11152 4.7376 9.04352 4.66996L8.354 3.98409Z"
};

function StarIcon() {
  return (
    <div className="size-[12px] relative">
      <svg className="block size-full" fill="none" viewBox="0 0 10 10">
        <path d={svgPaths.starFill} fill="#0AA5FF" />
      </svg>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="size-[12px] relative flex items-center justify-center">
      <svg className="block w-[12px] h-[13px]" fill="none" viewBox="0 0 12 13">
        <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.shield} fill="#0AA5FF" />
      </svg>
    </div>
  );
}

interface MatchedCompanyCardProps {
  name: string;
  rating: string;
  reviews: number;
  time: string;
  hasGuarantee?: boolean;
  profileImage?: string;
  applicationDate?: string;
}

export function MatchedCompanyCard({ 
  name, 
  rating, 
  reviews, 
  time, 
  hasGuarantee = false,
  profileImage,
  applicationDate = "2026.05.10"
}: MatchedCompanyCardProps) {
  return (
    <div className="w-full bg-white rounded-lg border border-[var(--border-neutral)] p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex gap-3">
        {/* Profile Image */}
        <div className="w-[48px] h-[48px] rounded-full bg-[var(--bg-weak)] flex items-center justify-center shrink-0 overflow-hidden">
          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-subheading-16 text-[var(--fg-weak)]">
              {name.charAt(0)}
            </span>
          )}
        </div>

        {/* Company Info */}
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          {/* Status & Time */}
          <div className="flex items-center justify-between w-full">
             <div className="bg-[var(--bg-brand)] px-1.5 py-1 rounded flex items-center justify-center h-6">
               <span className="text-detail-12 font-semibold text-white">매칭완료</span>
             </div>
             <span className="text-body-13 text-[#8c8c8c]">{time}</span>
          </div>

          {/* Company Name & Details */}
          <div className="flex flex-col gap-1">
            <h3 className="text-heading-18 text-[var(--fg-neutral)]">{name}</h3>
            
            {/* Application Date */}
            <div className="text-body-13 text-[var(--fg-weak)]">
              견적 신청일자 {applicationDate}
            </div>
            
            <div className="flex flex-col gap-1">
              {/* Rating & Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  <StarIcon />
                  <span className="text-body-13 font-semibold text-[#2f3438]">{rating}</span>
                </div>
                <span className="text-body-13 text-[#2f3438]">
                  리뷰 <span className="font-semibold">{reviews}</span>
                </span>
              </div>
              
              {/* Guarantee Badge */}
              {hasGuarantee && (
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    <ShieldIcon />
                    <span className="text-body-13 font-semibold text-[var(--fg-brand)]">오늘의집 책임보장</span>
                  </div>
                  <span className="text-detail-12 text-[#828c94]">파손 보험, A/S 서비스</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 items-center">
        <button className="flex-1 flex items-center justify-center gap-1 h-full group">
           <Truck className="size-4 text-[var(--fg-neutral)]" strokeWidth={2} />
           <span className="text-heading-16 text-[var(--fg-neutral)]">업체 보기</span>
        </button>
        
        <div className="w-px h-10 bg-[var(--border-neutral)]" />
        
        <button className="flex-1 flex items-center justify-center gap-1 h-full group">
           <Phone className="size-4 text-[var(--fg-neutral)]" strokeWidth={2} />
           <span className="text-heading-16 text-[#2f3438]">전화하기</span>
        </button>
      </div>
    </div>
  );
}