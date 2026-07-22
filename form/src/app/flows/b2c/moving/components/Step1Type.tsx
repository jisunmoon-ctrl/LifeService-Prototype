import type { ReactNode } from "react";
import { CircleCheck } from "lucide-react";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { FormTitle } from "../../../../shared/flow/DesktopFormParts";

interface Step1Props {
  selectedType: "home" | "small" | null;
  onSelect: (type: "home" | "small") => void;
}

const MOVE_OPTIONS = [
  {
    id: "home" as const,
    title: "가정이사",
    description: (
      <>
        냉장고, 세탁기 같은 큰 가전·가구가
        <br />
        <span className="font-bold">포함된</span> 짐이 많은 이사
      </>
    ),
    recommendBold: "2인 이상 가구 (아파트 · 빌라) 분들",
  },
  {
    id: "small" as const,
    title: "소형이사",
    description: (
      <>
        냉장고, 세탁기 같은 큰 가전·가구가
        <br />
        <span className="font-bold">없는 </span>
        짐이 적은 이사
      </>
    ),
    recommendBold: "1인 가구 (원룸 · 오피스텔) 분들",
  },
];

function MoveTypeCard({
  title,
  description,
  recommendBold,
  selected,
  onClick,
}: {
  title: string;
  description: ReactNode;
  recommendBold: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[151px] rounded-[8px] bg-white text-left p-[20px] flex flex-col transition-colors ${
        selected
          ? "border-[1.5px] border-[#00A1FF]"
          : "border border-[#EAEDEF] hover:border-[#DADDE0]"
      }`}
    >
      <div>
        <h3 className="text-[20px] font-bold leading-[28px] tracking-[-0.3px] text-[#141414]">
          {title}
        </h3>
        <p className="mt-[4px] text-[14px] leading-[18px] tracking-[-0.3px] text-[#828C94]">
          {description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="h-px bg-[#EAEDEF] mb-[12px]" />
        <div className="flex items-start gap-[4px]">
          <CircleCheck className="size-[18px] shrink-0 text-[#00A1FF] fill-[#00A1FF] stroke-white" />
          <p className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#00A1FF]">
            <span className="font-bold">{recommendBold}</span>
            <span className="font-normal">께 추천해요</span>
          </p>
        </div>
      </div>
    </button>
  );
}

export function Step1Type({ selectedType, onSelect }: Step1Props) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <div className={`w-full h-full flex flex-col ${isDesktopForm ? "" : "pb-[100px]"}`}>
      {isDesktopForm ? (
        <FormTitle title="이사 종류를 알려주세요" />
      ) : (
        <div className="px-[16px] py-[20px]">
          <h2 className="text-[24px] font-semibold leading-[32px] tracking-[-0.3px] text-[#141414]">
            이사 종류를 알려주세요
          </h2>
        </div>
      )}

      <div className={`flex flex-col gap-[8px] ${isDesktopForm ? "" : "px-[16px]"}`}>
        {MOVE_OPTIONS.map((option) => (
          <MoveTypeCard
            key={option.id}
            title={option.title}
            description={option.description}
            recommendBold={option.recommendBold}
            selected={selectedType === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
