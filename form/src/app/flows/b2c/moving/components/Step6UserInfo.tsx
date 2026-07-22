import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import { FormFieldLabel } from "../../../../shared/flow/DesktopFormParts";
import { OdsBoxButton, OdsDropdown, OdsInput, OdsTextarea } from "../../../../shared/ods";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";

interface Step6Props {
  data: {
    name: string;
    phonePrefix: string;
    phoneNumber: string;
    memo: string;
    guaranteed?: boolean;
  };
  onUpdate: (data: Step6Props["data"]) => void;
}

const PHONE_PREFIX_OPTIONS = [
  { value: "010", label: "010" },
  { value: "011", label: "011" },
  { value: "016", label: "016" },
];

export function Step6UserInfo({ data, onUpdate }: Step6Props) {
  const { isDesktopForm } = usePreviewViewport();

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
            onChange={(e) => onUpdate({ ...data, name: e.target.value })}
            placeholder="이름"
          />

          <div className={`flex gap-[8px] ${isDesktopForm ? "items-center" : ""}`}>
            <OdsDropdown
              options={PHONE_PREFIX_OPTIONS}
              value={data.phonePrefix}
              onValueChange={(phonePrefix) => onUpdate({ ...data, phonePrefix })}
              containerClassName={isDesktopForm ? "w-[120px] shrink-0" : "w-[100px] shrink-0"}
            />

            <OdsInput
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                onUpdate({ ...data, phoneNumber: val });
              }}
              placeholder="'-' 제외하고 입력"
              containerClassName="flex-1 min-w-0"
            />

            {isDesktopForm && (
              <OdsBoxButton
                variant="brand-solid"
                size="medium"
                disabled={!data.phoneNumber}
                className="shrink-0"
              >
                인증
              </OdsBoxButton>
            )}
          </div>
        </div>

        <div className={isDesktopForm ? "" : ""}>
          {isDesktopForm && (
            <div className="mb-[8px]">
              <FormFieldLabel>추가 요청 사항</FormFieldLabel>
            </div>
          )}
          <OdsTextarea
            value={data.memo}
            onChange={(memo) => onUpdate({ ...data, memo })}
            placeholder="(예시) 큰 짐은 침대, 냉장고 등이 있고, 보관이사는 10일 정도 필요해요."
            maxLength={100}
            height={isDesktopForm ? 152 : 120}
          />
        </div>

        {!isDesktopForm && (
          <p className="text-[12px] text-[#c2c8cc] leading-[16px] tracking-[-0.3px]">
            (주)버킷플레이스는 통신판매중개자로서 통신판매의 당사자가 아니며, 입점업체가 등록한 상품, 상품정보 및
            거래에 대하여 (주)버킷플레이스는 일체 책임을 지지 않습니다.
          </p>
        )}
      </div>
    </div>
  );
}
