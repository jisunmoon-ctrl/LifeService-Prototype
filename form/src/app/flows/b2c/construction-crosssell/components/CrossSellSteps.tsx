import { useState } from "react";
import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import { OdsCalendar, OdsCheckbox, OdsInput, OdsDropdown, OdsTextarea } from "../../../../shared/ods";
import { AddressSearchModal } from "../../../../shared/common/AddressSearchModal";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { PYEONG_OPTIONS, type CrossSellFormData } from "./crossSellTypes";

function pad(isDesktopForm: boolean) {
  return isDesktopForm ? "" : "px-[16px]";
}

function getTodayDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

/** 프리필 안내 배너 */
function PrefillBanner({ text }: { text: string }) {
  return (
    <div className="rounded-[8px] bg-[#EAF2FF] px-[16px] py-[12px]">
      <p className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#16305E]">{text}</p>
    </div>
  );
}

/** B1: [필수] 프리필 정보 컨펌 & 수정 (주소지 = 도착지 = 청소 장소, 평수) */
export function CrossSellStep1Confirm({
  data,
  onUpdate,
}: {
  data: CrossSellFormData;
  onUpdate: (dest: CrossSellFormData["destination"]) => void;
}) {
  const { isDesktopForm } = usePreviewViewport();
  const [addrOpen, setAddrOpen] = useState(false);
  const dest = data.destination;

  return (
    <div className="w-full h-full flex flex-col">
      <FormStepTitle
        title="시공 정보를 확인해주세요"
        subtitle="이사 도착지 · 청소 장소로 사용돼요. 필요하면 수정할 수 있어요."
      />
      <div className={`flex flex-col gap-[16px] ${pad(isDesktopForm)}`}>
        <PrefillBanner text="시공 신청 정보를 불러왔어요. 확인 후 수정해주세요." />

        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#828C94]">주소지</label>
          <div className="flex gap-[8px] items-center">
            <div className="flex-1 min-w-0 h-[50px] rounded-[4px] border border-[#E6E6E6] px-[16px] flex items-center bg-[#F7F9FA]">
              <span
                className={`block min-w-0 w-full overflow-hidden text-ellipsis whitespace-nowrap text-[16px] ${
                  dest.address ? "text-[#141414]" : "text-[#C2C8CC]"
                }`}
              >
                {dest.address || "주소 검색"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setAddrOpen(true)}
              className="w-[100px] h-[50px] bg-[#00A1FF] rounded-[4px] text-white font-bold text-[16px] flex items-center justify-center shrink-0"
            >
              주소찾기
            </button>
          </div>
          <OdsInput
            type="text"
            value={dest.detailAddress}
            onChange={(e) => onUpdate({ ...dest, detailAddress: e.target.value })}
            placeholder="상세주소 입력"
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#828C94]">평수</label>
          <OdsDropdown
            options={PYEONG_OPTIONS.map((p) => ({ value: p, label: p }))}
            value={dest.pyeong}
            onValueChange={(pyeong) => onUpdate({ ...dest, pyeong })}
            placeholder="평수 선택"
          />
        </div>
      </div>

      <AddressSearchModal
        isOpen={addrOpen}
        onClose={() => setAddrOpen(false)}
        onSelect={(address) => onUpdate({ ...dest, address })}
      />
    </div>
  );
}

/** Bdate + Bcheck + Bdiff: 이사 예정일 + '청소도 같은 날' 체크 + (미체크 시) 청소 희망일 */
export function CrossSellStep2Date({
  data,
  onUpdate,
}: {
  data: CrossSellFormData;
  onUpdate: (patch: Partial<CrossSellFormData>) => void;
}) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <div className="w-full h-full flex flex-col">
      <FormStepTitle title="이사 예정일을 알려주세요" subtitle="확정된 날짜를 선택해주세요." />
      <div className={`flex flex-col gap-[20px] ${pad(isDesktopForm)} pb-[20px]`}>
        <OdsCalendar
          selectedDate={data.moveDate}
          onSelectDate={(moveDate) =>
            onUpdate({
              moveDate,
              // 같은 날 옵션이면 청소일도 동기화
              cleaningDate: data.cleaningSameDay ? moveDate : data.cleaningDate,
            })
          }
        />

        <OdsCheckbox
          checked={data.cleaningSameDay}
          onCheckedChange={(checked) =>
            onUpdate({
              cleaningSameDay: checked,
              cleaningDate: checked ? data.moveDate : (data.cleaningDate ?? data.moveDate ?? getTodayDate()),
            })
          }
        >
          청소도 같은 날 받을래요
        </OdsCheckbox>

        {!data.cleaningSameDay && (
          <div className="animate-in slide-in-from-top-4 fade-in duration-300">
            <p className="text-[16px] font-bold leading-[22px] tracking-[-0.3px] text-[#141414] mb-[12px]">
              청소 희망일을 선택해주세요
            </p>
            <OdsCalendar
              selectedDate={data.cleaningDate}
              onSelectDate={(cleaningDate) => onUpdate({ cleaningDate })}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/** Bo: [옵션] 짐 정보 · 세부 요청사항 */
export function CrossSellStep5Detail({
  data,
  onUpdate,
}: {
  data: CrossSellFormData;
  onUpdate: (memo: string) => void;
}) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <div className="w-full h-full flex flex-col">
      <FormStepTitle
        title={
          <>
            세부 요청사항이 있으면
            <br />
            남겨주세요
          </>
        }
        subtitle="선택 입력이에요. 짐 정보는 매칭 후 상담에서 조율할 수 있어요."
      />
      <div className={`flex flex-col ${pad(isDesktopForm)}`}>
        <OdsTextarea
          value={data.memo}
          onChange={onUpdate}
          placeholder="(예시) 큰 짐은 침대·냉장고가 있고, 청소는 화장실 곰팡이 제거가 필요해요."
          maxLength={200}
          height={isDesktopForm ? 160 : 140}
        />
      </div>
    </div>
  );
}
