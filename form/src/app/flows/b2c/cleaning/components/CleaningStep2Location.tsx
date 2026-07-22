import { useState } from "react";
import { AddressSearchModal } from "../../../../shared/common/AddressSearchModal";
import { SavedAddressModal } from "../../../../shared/common/SavedAddressModal";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import {
  COUNT_OPTIONS,
  ROOM_COUNT_OPTIONS,
} from "./cleaningConstants";
import { OdsBoxButton, OdsChipSelect, OdsChipToggle, OdsInput } from "../../../../shared/ods";
import type { CleaningLocationData, CleaningUserScenario } from "./cleaningTypes";

interface CleaningStep2LocationProps {
  data: CleaningLocationData;
  userScenario: CleaningUserScenario;
  onUpdate: (data: CleaningLocationData) => void;
}

export function CleaningStep2Location({
  data,
  onUpdate,
}: CleaningStep2LocationProps) {
  const { isDesktopForm } = usePreviewViewport();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showSavedAddressModal, setShowSavedAddressModal] = useState(false);

  const contentPadding = isDesktopForm ? "" : "px-[16px] pb-[100px]";

  return (
    <div className={`w-full h-full flex flex-col ${contentPadding}`}>
      <FormStepTitle title="청소할 공간 정보를 알려주세요" />

      <div className={`flex flex-col ${isDesktopForm ? "gap-[16px]" : ""}`}>
        <div className={`flex flex-col ${isDesktopForm ? "gap-[10px]" : "gap-[8px] pb-[24px]"}`}>
          <div className="flex gap-[4px]">
            <OdsInput
              readOnly
              value={data.address}
              placeholder="주소 검색"
              onClick={() => setShowAddressModal(true)}
              className={`cursor-pointer ${data.address ? "text-[#141414]" : ""}`}
            />
            <OdsBoxButton
              variant="normal"
              size="medium"
              onClick={() => setShowAddressModal(true)}
              className="shrink-0"
            >
              주소찾기
            </OdsBoxButton>
          </div>

          <OdsInput
            type="text"
            value={data.detailAddress}
            onChange={(e) => onUpdate({ ...data, detailAddress: e.target.value })}
            placeholder="상세주소 입력"
          />

          {!data.address && (
            <OdsBoxButton
              variant="normal"
              size="medium"
              onClick={() => setShowSavedAddressModal(true)}
              className="self-start"
            >
              배송지 불러오기
            </OdsBoxButton>
          )}
        </div>

        <OdsChipSelect
          label="방 개수 (화장실, 베란다 제외)"
          options={ROOM_COUNT_OPTIONS}
          value={data.roomCount}
          onChange={(roomCount) => onUpdate({ ...data, roomCount })}
        />

        <OdsChipSelect
          label="베란다 개수"
          options={COUNT_OPTIONS}
          value={data.verandaCount}
          onChange={(verandaCount) => onUpdate({ ...data, verandaCount })}
        />

        <OdsChipSelect
          label="화장실 개수"
          options={COUNT_OPTIONS}
          value={data.bathroomCount}
          onChange={(bathroomCount) => onUpdate({ ...data, bathroomCount })}
        />

        <OdsChipToggle
          label="복층 여부"
          options={[
            { label: "있음", value: true },
            { label: "없음", value: false },
          ]}
          value={data.isDuplex}
          onChange={(isDuplex) => onUpdate({ ...data, isDuplex })}
        />

        <OdsChipToggle
          label="공간 짐·가구 여부"
          options={[
            { label: "짐·가구 있음", value: true },
            { label: "짐·가구 없음", value: false },
          ]}
          value={data.hasBelongings}
          onChange={(hasBelongings) => onUpdate({ ...data, hasBelongings })}
        />

        <OdsChipToggle
          label="리모델링 후 청소 여부"
          options={[
            { label: "필요함", value: true },
            { label: "필요 없음", value: false },
          ]}
          value={data.needsRemodelCleaning}
          onChange={(needsRemodelCleaning) => onUpdate({ ...data, needsRemodelCleaning })}
          className="pb-0"
        />
      </div>

      <AddressSearchModal
        isOpen={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onSelect={(address) => onUpdate({ ...data, address })}
      />

      <SavedAddressModal
        variant={isDesktopForm ? "modal" : "bottomSheet"}
        isOpen={showSavedAddressModal}
        onClose={() => setShowSavedAddressModal(false)}
        onSelect={(saved) =>
          onUpdate({ ...data, address: saved.address, detailAddress: saved.detailAddress })
        }
      />
    </div>
  );
}
