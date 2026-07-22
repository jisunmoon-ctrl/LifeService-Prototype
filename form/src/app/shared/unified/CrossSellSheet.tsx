import type { ReactNode } from "react";
import { OdsBoxButton } from "../ods";
import {
  AssetWiFiRouterLargeDarkBlueView2StillImage,
  AssetWaterPurifierLargeGenuineBlueView2StillImage,
} from "@bucketplace/assets/image";
import { CrossSellMovingCleaningIllustration } from "../../flows/b2c/construction-crosssell/components/CrossSellMovingCleaningIllustration";

export type CrossSellKind = "cleaning" | "internet" | "rental";

interface CrossSellConfig {
  title: ReactNode;
  illustration: ReactNode;
  description: ReactNode;
}

const ILLUSTRATION_SIZE = 120;
const illoProps = { width: ILLUSTRATION_SIZE, height: ILLUSTRATION_SIZE } as const;

const CONFIG: Record<CrossSellKind, CrossSellConfig> = {
  cleaning: {
    title: "같은 정보로 이사 청소도 한번에 신청할까요?",
    illustration: <CrossSellMovingCleaningIllustration />,
    description: (
      <>
        미리 신청하시면 이사예정일이 가까워졌을 때
        <br />
        원하는 일정에 맞춰 상담을 도와드려요.
      </>
    ),
  },
  internet: {
    title: (
      <>
        나와 비슷한 고객이 많이 선택한
        <br />
        인터넷 상품을 확인하고 상담 신청하세요.
      </>
    ),
    illustration: <AssetWiFiRouterLargeDarkBlueView2StillImage {...illoProps} />,
    description: (
      <>
        미리 신청하시면 이사예정일이 가까워졌을 때
        <br />
        원하는 설치 일정에 맞춰 상담을 도와드려요.
      </>
    ),
  },
  rental: {
    title: "인기 렌탈 상품 추천 받고 상담 신청하기",
    illustration: <AssetWaterPurifierLargeGenuineBlueView2StillImage {...illoProps} />,
    description: (
      <>
        미리 신청하시면 이사예정일이 가까워졌을 때
        <br />
        원하는 설치 일정에 맞춰 상담을 도와드려요.
      </>
    ),
  },
};

interface CrossSellSheetProps {
  isOpen: boolean;
  kind: CrossSellKind;
  onDismiss: () => void;
  onAccept: () => void;
}

/**
 * 크로스셀 바텀시트 (Figma 7735-48831/49046/51240)
 * vaul 대신 프레임 내부 fixed 오버레이 방식 (CleaningCompleteSheet 과 동일 패턴)
 */
export function CrossSellSheet({ isOpen, kind, onDismiss, onAccept }: CrossSellSheetProps) {
  if (!isOpen) return null;
  const cfg = CONFIG[kind];

  return (
    <div className="absolute inset-0 z-[100] flex flex-col justify-end">
      <div
        className="absolute inset-0 bg-black/40 animate-in fade-in duration-200"
        aria-hidden
        onClick={onDismiss}
      />
      <div className="relative bg-white rounded-t-[16px] animate-in slide-in-from-bottom duration-300">
        <div className="mx-auto w-[36px] h-[4px] bg-[#EAEDEF] rounded-full mt-[8px] mb-[8px]" />

        <div className="flex flex-col items-center px-[16px] pt-[16px]">
          <p className="text-[16px] font-bold leading-[22px] tracking-[-0.3px] text-[#141414] text-center">
            {cfg.title}
          </p>

          <div
            className={`flex items-center justify-center${kind === "cleaning" ? "" : " my-[20px]"}`}
          >
            {cfg.illustration}
          </div>

          <p className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C] text-center pb-[20px]">
            {cfg.description}
          </p>
        </div>

        <div className="flex items-center gap-[8px] px-[16px] pb-[8px]">
          <OdsBoxButton variant="normal" size="extra-large" onClick={onDismiss} className="min-w-[88px] shrink-0">
            괜찮아요
          </OdsBoxButton>
          <OdsBoxButton variant="brand-solid" size="extra-large" onClick={onAccept} className="flex-1 min-w-0">
            같이 신청
          </OdsBoxButton>
        </div>

        <div className="h-[20px]" />
      </div>
    </div>
  );
}
