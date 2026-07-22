import React, { useState } from "react";
import { Drawer } from "vaul";
import { ChevronDown, Info } from "lucide-react";
import { AddressSearchModal } from "../../../../shared/common/AddressSearchModal";
import { SavedAddressModal } from "../../../../shared/common/SavedAddressModal";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { FormFieldLabel, FormTitle } from "../../../../shared/flow/DesktopFormParts";
import { OdsCheckbox, OdsInput } from "../../../../shared/ods";

interface Step4Props {
  data: {
    address: string;
    detailAddress: string;
    floor: string;
    hasElevator: boolean | null;
    pyeong: string;
    familySize: string;
  };
  onUpdate: (data: Step4Props["data"]) => void;
}

const floors = ["반지하", "1층", "2층", "3층", "4층", "5층", "6층", "7층", "8층 이상"];
const pyeongs = ["10평 이하", "10평~15평", "15평~20평", "20평~25평", "25평~30평", "30평 이상"];
const familySizes = ["1인", "2인", "3인", "4인", "5인 이상"];

export function Step4Arrival({ data, onUpdate }: Step4Props) {
  const { isDesktopForm } = usePreviewViewport();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showSavedAddressModal, setShowSavedAddressModal] = useState(false);
  const [isFloorOpen, setIsFloorOpen] = useState(false);
  const [isPyeongOpen, setIsPyeongOpen] = useState(false);
  const [isFamilyOpen, setIsFamilyOpen] = useState(false);
  const [isFamilyHelpOpen, setIsFamilyHelpOpen] = useState(false);
  const [isDuplex, setIsDuplex] = useState(false);

  const selectClass =
    "w-full h-[50px] rounded-[4px] border border-[#E6E6E6] px-[16px] text-[16px] bg-white focus:border-[#00A1FF] focus:outline-none appearance-none text-[#141414]";

  const elevatorButtons = (
    <div className="flex gap-[6px] w-full">
      {[
        { label: "있음", value: true },
        { label: "없음", value: false },
      ].map(({ label, value }) => (
        <button
          key={label}
          type="button"
          onClick={() => onUpdate({ ...data, hasElevator: value })}
          className={`flex-1 h-[44px] rounded-[4px] border text-[14px] transition-all ${
            data.hasElevator === value
              ? "border-[#00A1FF] bg-[#EBF8FF] text-[#00A1FF] font-medium"
              : isDesktopForm
                ? "border-[#E6E6E6] bg-white text-[#828C94]"
                : "border-[#dadde0] bg-white text-[#828c94] hover:bg-gray-50"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  const renderSelectField = (
    label: string,
    value: string,
    placeholder: string,
    options: string[],
    onChange: (v: string) => void,
    mobileOpen: () => void
  ) => {
    if (isDesktopForm) {
      return (
        <div className="flex flex-col gap-[8px] w-full">
          <FormFieldLabel>{label}</FormFieldLabel>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${selectClass} ${!value ? "text-[#C2C8CC]" : ""}`}
          >
            <option value="">{placeholder}</option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div className="mt-[8px]">
        <label className="block text-[16px] text-[#828c94] mb-[8px]">{label}</label>
        <button
          type="button"
          onClick={mobileOpen}
          className={`w-full h-[50px] rounded-[4px] border border-[#dadde0] px-[16px] flex items-center justify-between bg-white text-[16px] ${
            value ? "text-[#141414]" : "text-[#c2c8cc]"
          }`}
        >
          {value || placeholder}
          <ChevronDown className="w-[20px] h-[20px] text-[#828C94]" />
        </button>
      </div>
    );
  };

  return (
    <div className={`w-full h-full flex flex-col ${isDesktopForm ? "" : "px-[16px] pt-[32px] pb-[100px]"}`}>
      {isDesktopForm ? (
        <FormTitle title="도착지에 대해 알려주세요" />
      ) : (
        <div className="mb-[32px]">
          <h2 className="text-[32px] font-bold leading-[42px] tracking-[-0.3px] text-[#141414]">
            도착지에 대해
            <br />
            알려주세요
          </h2>
        </div>
      )}

      <div className={`flex flex-col ${isDesktopForm ? "gap-[16px]" : "gap-[12px]"}`}>
        <div className={`flex flex-col ${isDesktopForm ? "gap-[10px]" : "gap-[12px]"}`}>
          <div className="flex gap-[4px]">
            <div
              className={`flex-1 h-[50px] rounded-[4px] border border-[#E6E6E6] px-[16px] flex items-center bg-[#F7F9FA] text-[16px] ${
                data.address ? "text-[#141414]" : "text-[#C2C8CC]"
              }`}
            >
              {data.address || "주소 검색"}
            </div>
            <button
              type="button"
              onClick={() => setShowAddressModal(true)}
              className={`${isDesktopForm ? "w-[98px]" : "w-[100px]"} h-[50px] bg-[#00A1FF] rounded-[4px] text-white font-bold text-[16px] flex items-center justify-center shrink-0`}
            >
              주소찾기
            </button>
          </div>

          <OdsInput
            type="text"
            value={data.detailAddress}
            onChange={(e) => onUpdate({ ...data, detailAddress: e.target.value })}
            placeholder="상세주소 입력"
          />

          {isDesktopForm && (
            <button
              type="button"
              onClick={() => setShowSavedAddressModal(true)}
              className="self-start h-[40px] px-[16px] rounded-[4px] border border-[#E6E6E6] bg-white text-[14px] font-medium text-[#141414] hover:bg-gray-50"
            >
              배송지 불러오기
            </button>
          )}
        </div>

        {isDesktopForm ? (
          <>
            <div className="flex flex-col gap-[8px] w-full">
              <FormFieldLabel>층수</FormFieldLabel>
              <select
                value={data.floor}
                onChange={(e) => onUpdate({ ...data, floor: e.target.value })}
                className={`${selectClass} ${!data.floor ? "text-[#C2C8CC]" : ""}`}
              >
                <option value="">층수 선택</option>
                {floors.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
              <OdsCheckbox checked={isDuplex} onCheckedChange={setIsDuplex}>
                복층이에요
              </OdsCheckbox>
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <FormFieldLabel>엘리베이터</FormFieldLabel>
              {elevatorButtons}
            </div>
            {renderSelectField("평수", data.pyeong, "평수 선택", pyeongs, (pyeong) =>
              onUpdate({ ...data, pyeong })
            , () => setIsPyeongOpen(true))}
            {renderSelectField(
              "가구 인원수",
              data.familySize,
              "인원 선택",
              familySizes,
              (familySize) => onUpdate({ ...data, familySize }),
              () => setIsFamilyOpen(true)
            )}
          </>
        ) : (
          <>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsFloorOpen(true)}
                className={`w-full h-[50px] rounded-[4px] border border-[#dadde0] px-[16px] flex items-center justify-between bg-white text-[16px] ${
                  data.floor ? "text-[#141414]" : "text-[#c2c8cc]"
                }`}
              >
                {data.floor || "층수 선택"}
                <ChevronDown className="w-[20px] h-[20px] text-[#828C94]" />
              </button>
            </div>
            <div className="mt-[8px]">
              <label className="block text-[16px] text-[#828c94] mb-[8px]">엘리베이터</label>
              {elevatorButtons}
            </div>
            {renderSelectField("평수", data.pyeong, "평수 선택", pyeongs, (pyeong) =>
              onUpdate({ ...data, pyeong })
            , () => setIsPyeongOpen(true))}
            <div className="mt-[8px]">
              <label className="block text-[16px] text-[#828c94] mb-[8px] flex items-center gap-1">
                가구 인원수
                <button type="button" onClick={() => setIsFamilyHelpOpen(true)} className="text-[#828C94]">
                  <Info className="w-4 h-4" />
                </button>
              </label>
              <button
                type="button"
                onClick={() => setIsFamilyOpen(true)}
                className={`w-full h-[50px] rounded-[4px] border border-[#dadde0] px-[16px] flex items-center justify-between bg-white text-[16px] ${
                  data.familySize ? "text-[#141414]" : "text-[#c2c8cc]"
                }`}
              >
                {data.familySize || "인원 선택"}
                <ChevronDown className="w-[20px] h-[20px] text-[#828C94]" />
              </button>
            </div>
          </>
        )}
      </div>

      <AddressSearchModal
        isOpen={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onSelect={(address) => onUpdate({ ...data, address })}
      />

      <SavedAddressModal
        isOpen={showSavedAddressModal}
        onClose={() => setShowSavedAddressModal(false)}
        onSelect={(saved) =>
          onUpdate({ ...data, address: saved.address, detailAddress: saved.detailAddress })
        }
      />

      {!isDesktopForm && (
        <>
          <SimpleDrawer open={isFloorOpen} onOpenChange={setIsFloorOpen} title="층수" items={floors} onSelect={(floor) => { onUpdate({ ...data, floor }); setIsFloorOpen(false); }} />
          <SimpleDrawer open={isPyeongOpen} onOpenChange={setIsPyeongOpen} title="평수" items={pyeongs} onSelect={(pyeong) => { onUpdate({ ...data, pyeong }); setIsPyeongOpen(false); }} />
          <SimpleDrawer open={isFamilyOpen} onOpenChange={setIsFamilyOpen} title="가구 인원수" items={familySizes} onSelect={(familySize) => { onUpdate({ ...data, familySize }); setIsFamilyOpen(false); }} />
        </>
      )}

      {isFamilyHelpOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center px-[20px]" onClick={() => setIsFamilyHelpOpen(false)}>
          <div className="bg-white w-full max-w-[320px] rounded-[8px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-[20px] pb-[16px]">
              <p className="text-[16px] text-[#141414] leading-[24px]">
                가구 인원수 정보로 고객님의 이삿짐 규모를 예측할 수 있습니다. 도착지 기준으로 입력해주세요.
              </p>
            </div>
            <div className="border-t border-[#eaedef] p-[16px]">
              <button type="button" onClick={() => setIsFamilyHelpOpen(false)} className="w-full h-[50px] bg-[#00A1FF] rounded-[4px] text-white text-[16px] font-bold">
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SimpleDrawer({
  open,
  onOpenChange,
  title,
  items,
  onSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  items: string[];
  onSelect: (item: string) => void;
}) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[16px] fixed bottom-0 left-0 right-0 max-h-[85vh] z-50">
          <div className="w-full h-[54px] relative flex items-center justify-center border-b border-[#eaedef]">
            <div className="w-[40px] h-[4px] bg-[#e0e0e0] rounded-full absolute top-[8px]" />
            <Drawer.Title className="sr-only">{title}</Drawer.Title>
            <span className="text-[20px] font-bold text-[#141414]">{title}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-0">
            {items.map((item) => (
              <button key={item} type="button" onClick={() => onSelect(item)} className="w-full text-left px-[24px] py-[16px] text-[16px] text-[#141414] border-b border-[#eaedef]">
                {item}
              </button>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
