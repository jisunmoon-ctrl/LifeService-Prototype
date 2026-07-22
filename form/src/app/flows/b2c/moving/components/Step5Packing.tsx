import React from "react";
import { Info } from "lucide-react";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { FormTitle } from "../../../../shared/flow/DesktopFormParts";

interface Step5Props {
  selectedType: 'full' | 'half' | 'general' | null;
  onSelect: (type: 'full' | 'half' | 'general') => void;
}

export function Step5Packing({ selectedType, onSelect }: Step5Props) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <div className={`w-full h-full flex flex-col ${isDesktopForm ? "" : "px-[16px] pt-[32px] pb-[100px]"}`}>
      {isDesktopForm ? (
        <FormTitle title="포장 종류를 선택해주세요" />
      ) : (
        <div className="mb-[32px]">
          <h2 className="text-[32px] font-bold leading-[42px] tracking-[-0.3px] text-[#141414]">
            포장 종류를<br />선택해주세요
          </h2>
        </div>
      )}

      <div className="flex flex-col gap-[16px]">
        {/* Full Packing (포장이사) */}
        <button
          onClick={() => onSelect('full')}
          className={`w-full relative rounded-[8px] p-[20px] text-left transition-all duration-200 border-[1.5px]
            ${selectedType === 'full'
              ? 'border-[#00A1FF] bg-white shadow-md'
              : 'border-[#eaedef] bg-white hover:border-gray-300'
            }
          `}
        >
          <h3 className="text-[20px] font-bold text-[#141414] mb-[8px]">포장이사</h3>
          <p className="text-[14px] text-[#828C94] mb-[20px]">
            짐포장부터 정리까지 모두 기사님이 해주세요
          </p>

          {/* Visual Steps Bar */}
          <div className="w-full mb-[24px]">
             <div className="flex justify-between items-center mb-[8px]">
               {['짐포장', '운반', '배치', '짐정리'].map((step, idx) => (
                 <div key={step} className="flex-1 text-center">
                   <div className="h-[4px] bg-[#00A1FF] mb-[6px] mx-[2px]" />
                   <span className="text-[10px] font-bold text-[#00A1FF]">{step}</span>
                 </div>
               ))}
             </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#EFFBFF] rounded-[6px] p-[12px] pl-[34px] relative">
            <div className="absolute left-[12px] top-[18px] w-[4px] h-[4px] bg-[#828C94] rounded-full" />
            <div className="absolute left-[12px] top-[40px] w-[4px] h-[4px] bg-[#828C94] rounded-full" />
            <div className="text-[12px] text-[#141414] leading-[20px]">
              <p>비용보다는 편리함이 중요한 경우</p>
              <p>짐을 미리 포장할 여유가 없는 경우</p>
            </div>
          </div>
        </button>

        {/* Half Packing (반포장이사) */}
        <button
          onClick={() => onSelect('half')}
          className={`w-full relative rounded-[8px] p-[20px] text-left transition-all duration-200 border-[1.5px]
            ${selectedType === 'half'
              ? 'border-[#00A1FF] bg-white shadow-md'
              : 'border-[#eaedef] bg-white hover:border-gray-300'
            }
          `}
        >
          <h3 className="text-[20px] font-bold text-[#141414] mb-[8px]">반포장이사</h3>
          <p className="text-[14px] text-[#828C94]">
            짐포장은 함께! 운반, 배치는 기사님이 해주세요
          </p>
        </button>

        {/* General Packing (일반이사) */}
        <button
          onClick={() => onSelect('general')}
          className={`w-full relative rounded-[8px] p-[20px] text-left transition-all duration-200 border-[1.5px]
            ${selectedType === 'general'
              ? 'border-[#00A1FF] bg-white shadow-md'
              : 'border-[#eaedef] bg-white hover:border-gray-300'
            }
          `}
        >
          <h3 className="text-[20px] font-bold text-[#141414] mb-[8px]">일반이사</h3>
          <p className="text-[14px] text-[#828C94]">
            운반만 도와주세요 나머지는 제가 할게요
          </p>
        </button>
      </div>

      <div className="mt-[32px] flex items-start gap-[6px]">
        <Info className="w-[18px] h-[18px] text-[#828C94] shrink-0" />
        <p className="text-[12px] text-[#828C94] leading-[16px]">
          실제 서비스 제공 범위는 파트너마다 다를 수 있습니다.
        </p>
      </div>
    </div>
  );
}
