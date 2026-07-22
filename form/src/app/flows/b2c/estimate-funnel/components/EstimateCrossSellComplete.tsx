import { useState, type ReactNode } from "react";
import {
  AssetCleaningToolLargeGenuineBlueView2StillImage,
  AssetWiFiRouterLargeDarkBlueView1StillImage,
} from "@bucketplace/assets/image";
import { CrossSellFlowLayout } from "../../construction-crosssell/components/CrossSellFlowLayout";
import { OdsBoxButton, OdsCheckbox, IconInfoCircle } from "../../../../shared/ods";

export interface EstimateCrossSellSelection {
  cleaning: boolean;
  internet: boolean;
}

interface EstimateCrossSellCompleteProps {
  initialSelection?: EstimateCrossSellSelection;
  onClose: () => void;
  onViewHistory: (selection: EstimateCrossSellSelection) => void;
  onConfirm: (selection: EstimateCrossSellSelection) => void;
}

function ServiceCard({
  checked,
  onCheckedChange,
  image,
  imageSize,
  children,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  image: ReactNode;
  imageSize: number;
  children: ReactNode;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onCheckedChange(!checked)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCheckedChange(!checked);
        }
      }}
      className="w-full flex items-center justify-between border border-solid border-[#E0E0E0] rounded-[8px] py-[8px] pr-[16px] text-left bg-white cursor-pointer"
    >
      <div
        className="shrink-0 flex items-center justify-center overflow-hidden"
        style={{ width: imageSize, height: imageSize }}
      >
        {image}
      </div>
      <div className="flex flex-1 min-w-0 items-center gap-[15px]">
        <div className="flex-1 min-w-0 flex flex-col gap-[2px] font-semibold text-[15px] leading-[24px] tracking-[-0.3px] text-[#141414]">
          {children}
        </div>
        <span className="shrink-0" onClick={(e) => e.stopPropagation()}>
          <OdsCheckbox checked={checked} onCheckedChange={onCheckedChange} />
        </span>
      </div>
    </div>
  );
}

/** 견적 신청완료 + 크로스셀 (Figma 7944-74957) */
export function EstimateCrossSellComplete({
  initialSelection,
  onClose,
  onViewHistory,
  onConfirm,
}: EstimateCrossSellCompleteProps) {
  const [selection, setSelection] = useState<EstimateCrossSellSelection>(
    initialSelection ?? { cleaning: false, internet: false }
  );
  const hasSelection = selection.cleaning || selection.internet;

  return (
    <CrossSellFlowLayout
      title="이사 신청"
      leftIcon="close"
      onLeft={onClose}
      bottom={
        <div className="-m-[6px]">
          <div className="flex gap-[4px] items-center px-[16px] pt-[12px] pb-[8px]">
            <IconInfoCircle size={16} className="shrink-0 text-[#8C8C8C]" />
            <p className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
              평일 기준 24시간 내에 전문 상담원이 연락드릴 예정이에요.
            </p>
          </div>
          <div className="h-px bg-[#EDEDED]" />
          <div className="p-[6px] flex gap-[6px]">
            <OdsBoxButton
              variant="normal"
              size="extra-large"
              onClick={() => onViewHistory(selection)}
              className="flex-1 min-w-0"
            >
              신청 내역 보기
            </OdsBoxButton>
            <OdsBoxButton
              variant="brand-solid"
              size="extra-large"
              onClick={() => onConfirm(selection)}
              disabled={!hasSelection}
              className="flex-1 min-w-0"
            >
              확인
            </OdsBoxButton>
          </div>
        </div>
      }
    >
      <div className="flex flex-col">
        <div className="px-[16px] py-[20px] flex flex-col gap-[6px]">
          <h2 className="text-[24px] font-semibold leading-[32px] tracking-[-0.3px] text-[#141414]">
            <span className="text-[#00A1FF]">신청 완료!</span>
            <br />
            업체 매칭을 시작할게요
          </h2>
          <p className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#8C8C8C]">
            매칭이 완료되기까지 시간이 걸릴 수 있어요.
            <br />
            완료되면 채팅으로 알려드릴게요.
          </p>
        </div>

        <div className="h-px w-full bg-[#EDEDED]" />

        <div className="flex flex-col">
          <div className="px-[16px] py-[20px]">
            <p className="text-[18px] font-semibold leading-[24px] tracking-[-0.3px] text-[#141414]">
              함께 신청하면 더 큰 혜택
            </p>
          </div>

          <div className="px-[16px] pb-[20px] flex flex-col gap-[8px]">
            <ServiceCard
              checked={selection.cleaning}
              onCheckedChange={(cleaning) => setSelection((s) => ({ ...s, cleaning }))}
              imageSize={72}
              image={
                <AssetCleaningToolLargeGenuineBlueView2StillImage width={72} height={72} />
              }
            >
              <p className="w-full">이사 청소</p>
              <p className="w-full">
                <span>20평대 평균 </span>
                <span className="text-[#00A1FF]">20만원</span>
                <span>부터~</span>
              </p>
            </ServiceCard>

            <ServiceCard
              checked={selection.internet}
              onCheckedChange={(internet) => setSelection((s) => ({ ...s, internet }))}
              imageSize={80}
              image={
                <AssetWiFiRouterLargeDarkBlueView1StillImage width={80} height={80} />
              }
            >
              <p className="w-full">인터넷 가입 신청</p>
            </ServiceCard>
          </div>
        </div>
      </div>
    </CrossSellFlowLayout>
  );
}
