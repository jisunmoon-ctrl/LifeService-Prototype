import { useState } from "react";
import { UnifiedScreenLayout } from "../../../shared/unified/UnifiedScreenLayout";
import { CrossSellSheet, type CrossSellKind } from "../../../shared/unified/CrossSellSheet";
import { OdsBoxButton, IconCamera, IconListBulletSquare, IconChevronRight } from "../../../shared/ods";
import { AssetLuckyCheckLargeStillImage } from "@bucketplace/assets/image";

type CrossSellContext = "moving" | "construction";

interface CrossSellNudgeScreenProps {
  onNavigate?: (screen: string) => void;
  kind: CrossSellKind;
  /** 크로스셀 배경 맥락 (기본: 이사 이삿짐 입력 / 시공: 시공 신청 완료) */
  context?: CrossSellContext;
}

interface BgOption {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
}

const BG_OPTIONS: BgOption[] = [
  {
    icon: <IconCamera size={24} className="text-[#141414]" />,
    title: (
      <>
        짐 <span className="font-semibold">사진·영상</span> 입력
      </>
    ),
    subtitle: "사진 영상을 선택해요",
  },
  {
    icon: <IconListBulletSquare size={24} className="text-[#141414]" />,
    title: "항목 직접 입력",
    subtitle: "이삿짐 목록을 직접 선택해요",
  },
];

const ACCEPT_TARGET: Record<CrossSellKind, string> = {
  cleaning: "cleaning_step1",
  internet: "unified_internet",
  rental: "unified_rental",
};

const BACK_TARGET: Record<CrossSellContext, string> = {
  moving: "input_step1",
  construction: "construction_step1",
};

export default function CrossSellNudgeScreen({
  onNavigate,
  kind,
  context = "moving",
}: CrossSellNudgeScreenProps) {
  const [sheetOpen, setSheetOpen] = useState(true);
  const backTarget = BACK_TARGET[context];

  const sticky =
    context === "construction" ? (
      <div className="bg-white">
        <div className="h-px bg-[#EDEDED]" />
        <div className="p-[6px]">
          <OdsBoxButton
            variant="normal"
            size="extra-large"
            fullWidth
            onClick={() => onNavigate?.(backTarget)}
          >
            홈으로
          </OdsBoxButton>
        </div>
      </div>
    ) : (
      <div className="bg-white">
        <div className="h-px bg-[#EDEDED]" />
        <div className="p-[6px] flex gap-[6px]">
          <OdsBoxButton
            variant="normal"
            size="extra-large"
            className="w-[117px] shrink-0"
            onClick={() => onNavigate?.(backTarget)}
          >
            이전
          </OdsBoxButton>
          <OdsBoxButton variant="brand-solid" size="extra-large" disabled className="flex-1 min-w-0">
            이사 견적 신청
          </OdsBoxButton>
        </div>
      </div>
    );

  return (
    <UnifiedScreenLayout
      onBack={() => onNavigate?.(backTarget)}
      sticky={sticky}
      overlay={
        <CrossSellSheet
          isOpen={sheetOpen}
          kind={kind}
          onDismiss={() => setSheetOpen(false)}
          onAccept={() => onNavigate?.(ACCEPT_TARGET[kind])}
        />
      }
    >
      {context === "construction" ? (
        /* 시공 신청 완료 (크로스셀 배경) */
        <div className="h-full flex flex-col items-center justify-center px-[24px] text-center">
          <AssetLuckyCheckLargeStillImage width={96} height={96} />
          <h2 className="mt-[20px] text-[20px] font-bold leading-[28px] tracking-[-0.3px] text-[#141414]">
            시공 상담 신청이 완료되었어요
          </h2>
          <p className="mt-[8px] text-[15px] leading-[22px] tracking-[-0.3px] text-[#8C8C8C]">
            입력하신 정보를 바탕으로
            <br />
            전문 시공 업체가 순차적으로 상담을 도와드릴 예정이에요.
          </p>
        </div>
      ) : (
        <>
          {/* ATF: 이삿짐 정보 입력 방식 선택 (크로스셀 배경) */}
          <div className="px-[16px] py-[20px]">
            <h2 className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414] mb-[6px]">
              정확한 견적을 위해
              <br />
              이삿짐 정보를 알려주세요
            </h2>
            <p className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">
              원하는 방식을 선택해주세요
            </p>
          </div>

          <div className="px-[16px] flex flex-col gap-[8px]">
            {BG_OPTIONS.map((opt, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white border border-[#E0E0E0] rounded-[8px] pl-[20px] pr-[16px] py-[20px]"
              >
                <div className="flex items-center gap-[16px]">
                  <span className="shrink-0">{opt.icon}</span>
                  <div className="flex flex-col gap-[6px]">
                    <p className="text-[16px] font-semibold leading-[20px] tracking-[-0.3px] text-[#141414]">
                      {opt.title}
                    </p>
                    <p className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
                      {opt.subtitle}
                    </p>
                  </div>
                </div>
                <IconChevronRight size={16} className="text-[#8C8C8C] shrink-0" />
              </div>
            ))}
          </div>
        </>
      )}
    </UnifiedScreenLayout>
  );
}
