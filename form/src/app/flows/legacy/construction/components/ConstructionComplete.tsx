import { OdsBoxButton } from "../../../../shared/ods";
import { AssetLuckyCheckLargeStillImage } from "@bucketplace/assets/image";

interface ConstructionCompleteProps {
  isOpen: boolean;
  onConfirm: () => void;
}

/** 시공 상담 신청 완료 (prod #complete) — 프레임 내부 풀스크린 오버레이 */
export function ConstructionComplete({ isOpen, onConfirm }: ConstructionCompleteProps) {
  if (!isOpen) return null;
  return (
    <div className="absolute inset-0 z-[100] bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-[24px] text-center">
        <AssetLuckyCheckLargeStillImage width={96} height={96} />
        <h2 className="mt-[20px] text-[20px] font-bold leading-[28px] tracking-[-0.3px] text-[#141414]">
          상담 신청이 완료되었어요
        </h2>
        <p className="mt-[8px] text-[15px] leading-[22px] tracking-[-0.3px] text-[#8C8C8C]">
          입력하신 정보를 바탕으로
          <br />
          전문 시공 업체가 순차적으로 상담을 도와드릴 예정이에요.
        </p>
      </div>
      <div className="p-[16px]">
        <OdsBoxButton variant="brand-solid" size="extra-large" fullWidth onClick={onConfirm}>
          확인
        </OdsBoxButton>
      </div>
    </div>
  );
}
