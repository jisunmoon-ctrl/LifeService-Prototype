import type { ReactNode } from "react";
import { UnifiedScreenLayout } from "../../../../shared/unified/UnifiedScreenLayout";
import { OdsBoxButton } from "../../../../shared/ods";

function InfoCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0 mt-[1px]">
      <circle cx="8" cy="8" r="6.4" stroke="#141414" strokeWidth="1.2" />
      <circle cx="8" cy="5.1" r="0.95" fill="#141414" />
      <rect x="7.15" y="7" width="1.7" height="4.3" rx="0.85" fill="#141414" />
    </svg>
  );
}

function Bullet({ children, weak }: { children: ReactNode; weak?: boolean }) {
  return (
    <li className={`list-disc ms-[20px] text-[13px] leading-[18px] tracking-[-0.3px] opacity-80 ${weak ? "text-[#8C8C8C]" : "text-[#141414]"}`}>
      {children}
    </li>
  );
}

interface StandardContractPageProps {
  onBack: () => void;
  onConfirm: () => void;
  overlay?: ReactNode;
}

/** 시공 견적 신청완료 직후 표준계약서 확인 페이지 (Figma 7787-82160) */
export function StandardContractPage({ onBack, onConfirm, overlay }: StandardContractPageProps) {
  return (
    <UnifiedScreenLayout
      title="시공 견적 신청완료"
      onBack={onBack}
      overlay={overlay}
      sticky={
        <div className="bg-white">
          <div className="h-px bg-[#EDEDED]" />
          <div className="p-[6px]">
            <OdsBoxButton variant="brand-solid" size="extra-large" fullWidth onClick={onConfirm}>
              확인
            </OdsBoxButton>
          </div>
        </div>
      }
    >
      <div className="px-[16px] pt-[16px] flex flex-col gap-[16px]">
        {/* 타이틀 */}
        <h2 className="text-[18px] font-semibold leading-[24px] tracking-[-0.3px] text-[#141414]">
          업체와 계약하게 되면
          <br />
          꼭 표준계약서로 전자계약 해주세요
        </h2>

        {/* info-box 1 (강조) */}
        <div className="rounded-[12px] bg-[#F5F5F5] p-[16px] flex flex-col gap-[8px]">
          <div className="flex items-center gap-[6px]">
            <InfoCircle />
            <p className="flex-1 text-[14px] font-medium leading-[18px] tracking-[-0.3px] text-[#141414]">
              전자계약을 해야 보호받을 수 있어요
            </p>
          </div>
          <ul className="flex flex-col">
            <Bullet>
              오늘의집이 시공 분쟁을 해결해 드리는 책임보장 서비스는 표준계약서로 전자계약을 했을 때만 받을 수
              있어요.
            </Bullet>
          </ul>
        </div>

        {/* info-box 2 (피해 안내) */}
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] font-medium leading-[18px] tracking-[-0.3px] text-[#141414]">
            이런 피해가 생길 수 있어요
          </p>
          <ul className="flex flex-col gap-[4px]">
            <Bullet weak>
              업체가 견적보다 저렴한 금액을 제안하며 표준계약서 전자계약 대신 직접 계약을 유도할 수 있어요.
            </Bullet>
            <Bullet weak>
              직접 계약 후 업체가 자재비를 먼저 받고 잠적해도 책임보장 서비스로 피해를 보상받을 수 없어요.
            </Bullet>
          </ul>
        </div>
      </div>
    </UnifiedScreenLayout>
  );
}
