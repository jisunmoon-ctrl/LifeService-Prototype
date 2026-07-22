import { CircleCheck } from "lucide-react";
import { OdsCalendar, OdsCheckbox, OdsInput, OdsDropdown, OdsBoxButton } from "../../../../shared/ods";
import { AddressSearchModal } from "../../../../shared/common/AddressSearchModal";
import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import { FLOOR_OPTIONS, PYEONG_OPTIONS, type AddressInfo, type CrossSellFormData } from "./crossSellTypes";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────── 이사 예정일 + 청소 희망일 ─────────────────────────── */
export function CrossSellDateStep({
  data,
  onUpdate,
}: {
  data: CrossSellFormData;
  onUpdate: (patch: Partial<CrossSellFormData>) => void;
}) {
  const cleaningSectionRef = useRef<HTMLDivElement>(null);

  // 청소 같은날 체크 해제 시, 하단 청소 희망일 섹션으로 스크롤 앵커링
  useEffect(() => {
    if (!data.cleaningSameDay) {
      const id = window.setTimeout(() => {
        cleaningSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => window.clearTimeout(id);
    }
  }, [data.cleaningSameDay]);

  return (
    <div className="flex flex-col pb-[20px]">
      <FormStepTitle title="이사 예정일을 알려주세요" />
      <div className="px-[16px]">
        <OdsCalendar
          selectedDate={data.moveDate}
          onSelectDate={(moveDate) =>
            onUpdate({ moveDate, cleaningDate: data.cleaningSameDay ? moveDate : data.cleaningDate })
          }
        />
      </div>

      <div className="px-[16px] pt-[16px]">
        <OdsCheckbox
          checked={data.cleaningSameDay}
          onCheckedChange={(checked) =>
            onUpdate({ cleaningSameDay: checked, cleaningDate: checked ? data.moveDate : null })
          }
        >
          청소도 같은 날 받을래요
        </OdsCheckbox>
      </div>

      {!data.cleaningSameDay && (
        <div
          ref={cleaningSectionRef}
          className="scroll-mt-[8px] animate-in slide-in-from-top-4 fade-in duration-300"
        >
          <FormStepTitle title="청소 희망일을 알려주세요" />
          <div className="px-[16px]">
            <OdsCalendar
              selectedDate={data.cleaningDate}
              onSelectDate={(cleaningDate) => onUpdate({ cleaningDate })}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────── 주소 정보 (출발지/도착지 공용) ─────────────────────────── */
export function CrossSellAddressStep({
  title,
  data,
  onUpdate,
  showSavedAddress = true,
}: {
  title: string;
  data: AddressInfo;
  onUpdate: (data: AddressInfo) => void;
  showSavedAddress?: boolean;
}) {
  const [addrOpen, setAddrOpen] = useState(false);
  // 배송지를 이미 불러왔으면 버튼 숨김
  const [savedLoaded, setSavedLoaded] = useState(false);

  const loadSavedAddress = () => {
    onUpdate({
      ...data,
      address: "서울 강남구 테헤란로 152 강남파이낸스센터",
      detailAddress: "1201호",
    });
    setSavedLoaded(true);
  };

  return (
    <div className="flex flex-col pb-[20px]">
      <FormStepTitle title={title} />

      <div className="px-[16px] flex flex-col gap-[10px] pb-[16px]">
        {/* 주소 찾기 */}
        <div className="flex gap-[4px] items-center h-[40px]">
          <div className="flex-1 min-w-0 h-[40px] rounded-[4px] border border-[#E6E6E6] px-[16px] flex items-center bg-[#F7F9FA]">
            <span
              className={`block min-w-0 w-full overflow-hidden text-ellipsis whitespace-nowrap text-[15px] ${
                data.address ? "text-[#141414]" : "text-[#C2C8CC]"
              }`}
            >
              {data.address || "주소 찾기"}
            </span>
          </div>
          <OdsBoxButton variant="brand-solid" size="medium" className="shrink-0" onClick={() => setAddrOpen(true)}>
            주소 찾기
          </OdsBoxButton>
        </div>

        <OdsInput
          type="text"
          value={data.detailAddress}
          onChange={(e) => onUpdate({ ...data, detailAddress: e.target.value })}
          placeholder="상세 주소 입력"
        />

        {showSavedAddress && !savedLoaded && (
          <OdsBoxButton variant="normal" size="medium" className="self-start" onClick={loadSavedAddress}>
            배송지 불러오기
          </OdsBoxButton>
        )}

        {/* 평수 */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">평수</label>
          <OdsDropdown
            options={PYEONG_OPTIONS.map((p) => ({ value: p, label: p }))}
            value={data.pyeong}
            onValueChange={(pyeong) => onUpdate({ ...data, pyeong })}
            placeholder="평수 선택"
          />
        </div>

        {/* 층수 */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">층수</label>
          <OdsDropdown
            options={FLOOR_OPTIONS.map((f) => ({ value: f, label: f }))}
            value={data.floor}
            onValueChange={(floor) => onUpdate({ ...data, floor })}
            placeholder="층수 선택"
          />
        </div>

        <OdsCheckbox checked={data.duplex} onCheckedChange={(duplex) => onUpdate({ ...data, duplex })}>
          복층이에요
        </OdsCheckbox>

        {/* 엘리베이터 */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">엘리베이터</label>
          <div className="flex gap-[2px] w-full">
            {[
              { label: "있음", value: true },
              { label: "없음", value: false },
            ].map(({ label, value }) => (
              <button
                key={label}
                type="button"
                onClick={() => onUpdate({ ...data, hasElevator: value })}
                className={`flex-1 h-[40px] rounded-[8px] border text-[16px] leading-[20px] tracking-[-0.3px] transition-all ${
                  data.hasElevator === value
                    ? "border-[#00A1FF] bg-[#EBF8FF] text-[#00A1FF] font-medium"
                    : "border-[#E0E0E0] bg-white text-[#141414] font-medium"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AddressSearchModal
        isOpen={addrOpen}
        onClose={() => setAddrOpen(false)}
        onSelect={(address) => onUpdate({ ...data, address })}
      />
    </div>
  );
}

/* ─────────────────────────── 이사 종류 (가정/소형) ─────────────────────────── */
const MOVE_OPTIONS = [
  {
    id: "home" as const,
    title: "가정이사",
    description: (
      <>
        냉장고, 세탁기 같은 큰 가전·가구가
        <br />
        포함된 짐이 많은 이사
      </>
    ),
    recommend: "2인 이상 가구 (아파트 · 빌라) 분들",
  },
  {
    id: "small" as const,
    title: "소형이사",
    description: (
      <>
        냉장고, 세탁기 같은 큰 가전·가구가
        <br />
        없는 짐이 적은 이사
      </>
    ),
    recommend: "1인 가구 (원룸 · 오피스텔) 분들",
  },
];

export function CrossSellTypeStep({
  value,
  onSelect,
}: {
  value: "home" | "small" | null;
  onSelect: (v: "home" | "small") => void;
}) {
  return (
    <div className="flex flex-col pb-[20px]">
      <FormStepTitle title="이사 종류를 알려주세요" />
      <div className="px-[16px] flex flex-col gap-[8px]">
        {MOVE_OPTIONS.map((o) => {
          const selected = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onSelect(o.id)}
              className={`w-full rounded-[12px] bg-white text-left p-[16px] flex flex-col transition-colors ${
                selected ? "border-[1.5px] border-[#00A1FF]" : "border border-[#EAEDEF]"
              }`}
            >
              <h3 className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414]">{o.title}</h3>
              <p className="mt-[4px] text-[14px] leading-[18px] tracking-[-0.3px] text-[#828C94]">
                {o.description}
              </p>
              <div className="mt-[16px]">
                <div className="h-px bg-[#EAEDEF] mb-[12px]" />
                <div className="flex items-start gap-[4px]">
                  <CircleCheck className="size-[18px] shrink-0 text-[#00A1FF] fill-[#00A1FF] stroke-white" />
                  <p className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#00A1FF] font-semibold">
                    <span className="font-bold">{o.recommend}</span>
                    <span className="font-normal">께 추천해요</span>
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
