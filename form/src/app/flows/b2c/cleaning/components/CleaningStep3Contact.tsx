import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import {
  OdsBoxButton,
  OdsChip,
  OdsDropdown,
  OdsInput,
  OdsTextarea,
} from "../../../../shared/ods";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import type { CleaningContactData, CleaningUserScenario } from "./cleaningTypes";

interface CleaningStep3ContactProps {
  data: CleaningContactData;
  memo: string;
  userScenario: CleaningUserScenario;
  showAuthButton?: boolean;
  onUpdateContact: (data: CleaningContactData) => void;
  onUpdateMemo: (memo: string) => void;
}

const PHONE_PREFIX_OPTIONS = [
  { value: "010", label: "010" },
  { value: "011", label: "011" },
  { value: "016", label: "016" },
];

const GENERAL_CONTACT_PREFILL = {
  name: "이집사",
  phonePrefix: "010",
  phoneNumber: "87654321",
  phoneVerified: true,
};

export function CleaningStep3Contact({
  data,
  memo,
  userScenario,
  showAuthButton = true,
  onUpdateContact,
  onUpdateMemo,
}: CleaningStep3ContactProps) {
  const { isDesktopForm } = usePreviewViewport();

  const handleImportContact = () => {
    onUpdateContact({ ...GENERAL_CONTACT_PREFILL });
  };

  return (
    <div className={`w-full h-full flex flex-col ${isDesktopForm ? "" : "px-[16px] pb-[100px]"}`}>
      <FormStepTitle
        title={
          <>
            마지막으로
            <br />
            연락 받으실 정보를 알려주세요
          </>
        }
      />

      <div className={`flex flex-col ${isDesktopForm ? "gap-[24px]" : "gap-[20px]"}`}>
        <div className={`flex flex-col ${isDesktopForm ? "gap-[8px]" : "gap-[12px]"}`}>
          <OdsInput
            type="text"
            value={data.name}
            onChange={(e) => onUpdateContact({ ...data, name: e.target.value })}
            placeholder="이름"
          />

          <div className={`flex gap-[8px] ${isDesktopForm ? "items-center" : ""}`}>
            <OdsDropdown
              options={PHONE_PREFIX_OPTIONS}
              value={data.phonePrefix}
              onValueChange={(phonePrefix) => onUpdateContact({ ...data, phonePrefix })}
              containerClassName={isDesktopForm ? "w-[120px] shrink-0" : "w-[85px] shrink-0"}
            />

            {/* ODS Input 은 내부 input 에 className 이 적용되므로 flex 축소는 래퍼 컨테이너에 지정 */}
            <OdsInput
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                onUpdateContact({ ...data, phoneNumber: val, phoneVerified: false });
              }}
              placeholder="'-' 제외하고 입력"
              containerClassName="flex-1 min-w-0"
              className="w-full"
            />

            {showAuthButton && (
              <OdsBoxButton
                variant="brand-solid"
                size="medium"
                disabled={!data.phoneNumber}
                onClick={() => onUpdateContact({ ...data, phoneVerified: true })}
                className="shrink-0 enabled:bg-[#00A1FF]"
              >
                인증
              </OdsBoxButton>
            )}
          </div>

          {userScenario === "general" && (
            <OdsChip onClick={handleImportContact}>연락처 불러오기</OdsChip>
          )}
        </div>

        <OdsTextarea
          label="추가 요청 사항"
          value={memo}
          onChange={onUpdateMemo}
          placeholder={"예시:\n확장 베란다, 반려동물, 곰팡이 등 파트너가 알아야 할 정보가 있다면 상세히 적어주세요."}
          maxLength={100}
          height={152}
        />

        <div className="flex flex-col gap-[8px]">
          <p className="text-[12px] leading-[20px] tracking-[-0.3px] text-[#8C8C8C]">
            (주)버킷플레이스는 통신판매중개자로서 통신판매의 당사자가 아니며, 입점업체가 등록한 상품, 상품정보 및
            거래에 대하여 (주)버킷플레이스는 일체 책임을 지지 않습니다.
          </p>
          {isDesktopForm && (
            <button type="button" className="text-[12px] leading-[16px] tracking-[-0.3px] text-[#8C8C8C] underline text-left">
              개인정보 이용 및 수집 안내
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
