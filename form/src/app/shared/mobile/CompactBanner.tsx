import React from "react";
import { ChevronRight } from "lucide-react";

const shieldPath = "M3.76807 0C3.83243 2.65761e-06 3.89541 0.0186806 3.94941 0.0537914L5.6373 1.15126C5.85795 1.29471 6.14209 1.29472 6.36273 1.15126L8.05059 0.0537914C8.10459 0.0186806 8.16757 2.65758e-06 8.23193 0H11.6667C11.8508 0 12 0.149644 12 0.334238V8.83377C12 9.05728 11.8886 9.26602 11.7031 9.39L6.55469 12.8316C6.21879 13.0561 5.78121 13.0561 5.44531 12.8316L0.296875 9.39C0.111409 9.26602 0 9.05728 0 8.83377V0.334238C0 0.149643 0.149238 3.44547e-08 0.333333 0H3.76807ZM8.354 3.98409C8.286 3.91645 8.17618 3.91689 8.10872 3.98507L5.75938 6.35982C5.69154 6.42839 5.581 6.4284 5.51315 6.35986L4.22445 5.0578C4.15697 4.98963 4.04715 4.98923 3.97917 5.05688L3.28978 5.74292C3.2218 5.81057 3.22137 5.92066 3.28883 5.98883L5.16862 7.88805C5.29238 8.01308 5.46081 8.08339 5.63649 8.08337C5.81217 8.08334 5.98057 8.01301 6.1043 7.88795L9.04453 4.91588C9.11198 4.84769 9.11152 4.7376 9.04352 4.66996L8.354 3.98409Z";

function ShieldIcon() {
  return (
    <div className="size-[12px] relative flex items-center justify-center">
      <svg className="block w-[12px] h-[13px]" fill="none" viewBox="0 0 12 13">
        <path fillRule="evenodd" clipRule="evenodd" d={shieldPath} fill="#0AA5FF" />
      </svg>
    </div>
  );
}

export function CompactBanner({ onClick }: CompactBannerProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[var(--bg-brand-weak)] rounded-lg p-3 flex items-center justify-between hover:bg-opacity-80 transition-colors"
      aria-label="오늘의집 책임보장 서비스 보기"
    >
      <div className="flex items-center gap-1">
        <span className="text-body-14 font-medium text-[var(--fg-neutral)]">추가금이나 분실 걱정된다면?</span>
        <div className="flex items-center gap-0.5">
          <ShieldIcon />
          <span className="text-body-15 font-semibold text-[var(--fg-brand)]">오늘의집 책임보장</span>
        </div>
      </div>
      <ChevronRight className="size-5 text-[var(--fg-neutral)] shrink-0" />
    </button>
  );
}