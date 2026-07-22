import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import { OdsInput, OdsDropdown, OdsBoxButton, OdsTextarea, OdsCheckbox } from "../../../../shared/ods";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { ConstructionDateRange } from "./ConstructionDateRange";
import {
  SPACE_TYPE_OPTIONS,
  SPACE_STATUS_OPTIONS,
  SCOPE_OPTIONS,
  SERVICE_AREAS,
} from "./constructionConstants";
import {
  CALL_TIME_OPTIONS,
  type ConstructionFormData,
  type SpaceType,
  type SpaceStatus,
  type ConstructionScope,
  type ConstructionContact,
} from "./constructionTypes";

const PHONE_PREFIX_OPTIONS = [
  { value: "010", label: "010" },
  { value: "011", label: "011" },
  { value: "016", label: "016" },
];

/** 단일 선택 라디오 행 (prod: 원형 라디오 + 라벨) */
function RadioRow({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-[12px] py-[12px] text-left"
    >
      <span
        className={`shrink-0 size-[22px] rounded-full border-[1.5px] flex items-center justify-center transition-default ${
          selected ? "border-[#00A1FF]" : "border-[#D5D9DC]"
        }`}
      >
        {selected && <span className="size-[12px] rounded-full bg-[#00A1FF]" />}
      </span>
      <span className="text-[16px] leading-[24px] tracking-[-0.3px] text-[#141414]">{label}</span>
    </button>
  );
}

function stepPadding(isDesktopForm: boolean) {
  return isDesktopForm ? "" : "px-[16px]";
}

/** Step1: 시공할 공간의 종류 */
export function ConstructionStep1Space({
  value,
  onSelect,
}: {
  value: SpaceType | null;
  onSelect: (v: SpaceType) => void;
}) {
  const { isDesktopForm } = usePreviewViewport();
  return (
    <div className="w-full h-full flex flex-col">
      <FormStepTitle title="시공할 공간의 종류를 선택해주세요." />
      <div className={`flex flex-col ${stepPadding(isDesktopForm)}`}>
        {SPACE_TYPE_OPTIONS.map((o) => (
          <RadioRow key={o.id} label={o.label} selected={value === o.id} onClick={() => onSelect(o.id)} />
        ))}
      </div>
    </div>
  );
}

/** Step2: 공간 상황 */
export function ConstructionStep2Status({
  value,
  onSelect,
}: {
  value: SpaceStatus | null;
  onSelect: (v: SpaceStatus) => void;
}) {
  const { isDesktopForm } = usePreviewViewport();
  return (
    <div className="w-full h-full flex flex-col">
      <FormStepTitle title="공간 상황을 선택해주세요." />
      <div className={`flex flex-col ${stepPadding(isDesktopForm)}`}>
        {SPACE_STATUS_OPTIONS.map((o) => (
          <RadioRow key={o.id} label={o.label} selected={value === o.id} onClick={() => onSelect(o.id)} />
        ))}
        <p className="mt-[8px] text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
          부동산 미계약 상태인 경우, 상담이 불가할 수 있습니다.
        </p>
      </div>
    </div>
  );
}

/** Step3: 원하는 시공 (전체/부분) — 리치 카드 */
export function ConstructionStep3Scope({
  value,
  onSelect,
}: {
  value: ConstructionScope | null;
  onSelect: (v: ConstructionScope) => void;
}) {
  const { isDesktopForm } = usePreviewViewport();
  return (
    <div className="w-full h-full flex flex-col">
      <FormStepTitle title="원하는 시공을 선택해주세요" />
      <div className={`flex flex-col gap-[8px] ${stepPadding(isDesktopForm)}`}>
        {SCOPE_OPTIONS.map((o) => {
          const selected = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onSelect(o.id)}
              className={`w-full rounded-[8px] bg-white text-left p-[16px] flex items-center gap-[12px] transition-colors ${
                selected ? "border-[1.5px] border-[#00A1FF]" : "border border-[#EAEDEF] hover:border-[#DADDE0]"
              }`}
            >
              <span
                className={`shrink-0 size-[22px] rounded-full border-[1.5px] flex items-center justify-center ${
                  selected ? "border-[#00A1FF]" : "border-[#D5D9DC]"
                }`}
              >
                {selected && <span className="size-[12px] rounded-full bg-[#00A1FF]" />}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[16px] font-bold leading-[22px] tracking-[-0.3px] text-[#141414]">
                  {o.label}
                </p>
                <p className="mt-[4px] text-[14px] leading-[20px] tracking-[-0.3px] text-[#828C94]">
                  {o.description}
                </p>
              </div>
              <div className="shrink-0 size-[64px] rounded-[8px] bg-[#F2F4F6]" aria-hidden />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Step4: 시공 기간 (날짜 범위) */
export function ConstructionStep4Date({
  data,
  onChange,
}: {
  data: ConstructionFormData;
  onChange: (start: Date | null, end: Date | null) => void;
}) {
  const { isDesktopForm } = usePreviewViewport();
  return (
    <div className="w-full h-full flex flex-col">
      <FormStepTitle
        title="어느 기간에 시공하길 원하시나요?"
        subtitle={
          <>
            상담과정에서 시공 일정은 변동될 수 있습니다.
            <br />
            희망하는 대략적인 시작일과 종료일을 선택해주세요.
          </>
        }
      />
      <div className={`flex flex-col ${stepPadding(isDesktopForm)}`}>
        <ConstructionDateRange
          startDate={data.startDate}
          endDate={data.endDate}
          onChange={onChange}
        />
        <div className="mt-[16px] rounded-[8px] bg-[#F5F6F7] px-[16px] py-[12px]">
          <p className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
            · 시공이 임박했거나 3달 이후인 경우 상담이 어려울 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Step5: 시공 주소 */
export function ConstructionStep5Address({
  data,
  onOpenSearch,
}: {
  data: ConstructionFormData;
  onOpenSearch: () => void;
}) {
  const { isDesktopForm } = usePreviewViewport();
  return (
    <div className="w-full h-full flex flex-col">
      <FormStepTitle title="시공할 곳의 주소를 알려주세요." subtitle="아파트단지 또는 지번까지만 필요합니다." />
      <div className={`flex flex-col ${stepPadding(isDesktopForm)}`}>
        <div className="flex gap-[8px] items-center">
          <OdsInput
            type="text"
            value={data.address}
            readOnly
            onClick={onOpenSearch}
            placeholder="주소를 검색해주세요"
            containerClassName="flex-1 min-w-0"
            className="w-full cursor-pointer"
          />
          <OdsBoxButton variant="brand-solid" size="medium" className="shrink-0 whitespace-nowrap" onClick={onOpenSearch}>
            주소찾기
          </OdsBoxButton>
        </div>

        <div className="mt-[24px] rounded-[8px] bg-[#F5F6F7] px-[16px] py-[16px]">
          <p className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#8C8C8C] mb-[4px]">서비스 지역</p>
          <p className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#525B61]">· {SERVICE_AREAS}</p>
        </div>
      </div>
    </div>
  );
}

const LEGAL_DISCLAIMER =
  "(주)버킷플레이스는 고객과 시공사 간 원활한 거래를 위하여 지원하는 중개자로서 거래의 당사자가 아니므로 거래에 따른 책임을 부담하지 않으며, 시공사의 고객 동의 없는 개인정보 수집 및 제3자 제공 등에도 법적 책임을 부담하지 않습니다.";

/** Step6: 연락처 (prod: 이름·연락처·통화희망시간·요청사항 + 안내 및 이용동의 체크) */
export function ConstructionStep6Contact({
  data,
  agreed,
  onUpdate,
  onAgreeChange,
}: {
  data: ConstructionContact;
  agreed: boolean;
  onUpdate: (data: ConstructionContact) => void;
  onAgreeChange: (agreed: boolean) => void;
}) {
  const { isDesktopForm } = usePreviewViewport();
  return (
    <div className={`w-full h-full flex flex-col ${isDesktopForm ? "" : "pb-[40px]"}`}>
      <FormStepTitle
        title={
          <>
            원활한 상담을 위해
            <br />
            이름과 연락처가 필요해요
          </>
        }
      />
      <div className={`flex flex-col gap-[20px] pb-[60px] ${stepPadding(isDesktopForm)}`}>
        {/* 안내 배너 */}
        <div className="flex items-center gap-[6px] rounded-[8px] bg-[#F5F6F7] px-[16px] py-[12px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
            <circle cx="8" cy="8" r="6.5" stroke="#8C8C8C" strokeWidth="1.2" />
            <path d="M8 7.2v3.4M8 5.2v.05" stroke="#8C8C8C" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="text-[13px] leading-[18px] tracking-[-0.3px] text-[#525B61]">
            연락처는 시공 업체에게 안심번호로 전달해요.
          </span>
        </div>

        {/* 이름 + 연락처 */}
        <div className="flex flex-col gap-[8px]">
          <OdsInput
            type="text"
            value={data.name}
            onChange={(e) => onUpdate({ ...data, name: e.target.value })}
            placeholder="이름 입력"
          />
          <div className="flex items-center gap-[8px] w-full min-w-0">
            <OdsDropdown
              options={PHONE_PREFIX_OPTIONS}
              value={data.phonePrefix}
              onValueChange={(phonePrefix) => onUpdate({ ...data, phonePrefix })}
              containerClassName="w-[85px] shrink-0"
            />
            <OdsInput
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => onUpdate({ ...data, phoneNumber: e.target.value.replace(/[^0-9]/g, "") })}
              placeholder="입력해주세요"
              containerClassName="flex-1 min-w-0"
              className="w-full"
            />
          </div>
          <OdsBoxButton
            variant="brand-solid"
            size="extra-large"
            fullWidth
            disabled={!data.phoneNumber}
          >
            인증번호 받기
          </OdsBoxButton>
        </div>

        {/* 통화 희망 시간 */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#828C94]">통화희망시간</label>
          <OdsDropdown
            options={CALL_TIME_OPTIONS.map((t) => ({ value: t, label: t }))}
            value={data.callTime}
            onValueChange={(callTime) => onUpdate({ ...data, callTime })}
          />
        </div>

        {/* 요청사항 (선택) */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] leading-[20px] tracking-[-0.3px] text-[#828C94]">요청사항 (선택)</label>
          <OdsTextarea
            value={data.memo}
            onChange={(memo) => onUpdate({ ...data, memo })}
            placeholder="특이사항, 세부시공내역, 원하는 스타일 등"
            maxLength={200}
            height={isDesktopForm ? 140 : 120}
          />
        </div>

        {/* 상담신청 프로세스 안내 */}
        <div className="pt-[4px]">
          <p className="text-[15px] font-bold leading-[22px] tracking-[-0.3px] text-[#141414] mb-[16px]">
            상담신청 완료 후 아래 순서로 진행돼요
          </p>
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[10px]">
              <span className="shrink-0 size-[20px] rounded-full bg-[#EAEDEF] flex items-center justify-center text-[12px] font-bold text-[#2F3438]">
                1
              </span>
              <p className="pt-[1px] text-[14px] leading-[18px] tracking-[-0.3px] text-[#2F3438]">
                통화 가능 시간에 업체와 짧은 <span className="font-bold">유선 상담 진행</span>
              </p>
            </div>
            <div className="flex gap-[10px]">
              <span className="shrink-0 size-[20px] rounded-full bg-[#EAEDEF] flex items-center justify-center text-[12px] font-bold text-[#2F3438]">
                2
              </span>
              <div className="pt-[1px] flex flex-col gap-[6px]">
                <p className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#2F3438]">
                  정확한 견적을 위해 <span className="font-bold">대면 상담 진행</span>
                </p>
                <p className="text-[13px] leading-[19px] tracking-[-0.3px] text-[#828C94]">
                  대면 상담을 진행하지 않고 가견적을 받을 시 견적에 차이가 날 수 있어요.
                  <br />
                  대면 상담 진행 시, 원하는 조건에 따른 정확한 견적을 받아보실 수 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 안내 및 이용동의 */}
        <div className="flex flex-col gap-[16px] pt-[16px]">
          <div className="flex flex-col">
            <p className="text-[17px] font-bold leading-[22px] tracking-[-0.3px] text-[#141414] pb-[16px]">
              안내 및 이용동의
            </p>

            <p className="text-[14px] font-medium leading-[18px] tracking-[-0.3px] text-[#141414] pb-[12px]">
              오늘의집은 고객님의 계약서와 최종 견적서(변경 포함)를 바탕으로 시공 중 발생할 수 있는 분쟁을 중재하고
              지원해요.
            </p>
            <ul className="pb-[16px]">
              <li className="list-disc ms-[19.5px] text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
                책임보장업체가 아닌 경우에는 오늘의집 중재 및 책임보장 서비스를 이용하실 수 없어요.
              </li>
            </ul>

            <p className="text-[14px] font-medium leading-[18px] tracking-[-0.3px] text-[#141414] pb-[12px]">
              시공 문제로 고객님께 재산상 피해가 발생한 경우, 오늘의집이 최대 3,000만 원까지 보상해 드려요.
            </p>
            <ul className="pb-[16px]">
              <li className="list-disc ms-[19.5px] text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
                &apos;오늘의집인테리어&apos;(직시공) &amp; &apos;오늘의집시공&apos; 서비스의 경우에는 계약금액 전액을
                기준으로 보상해 드려요.
              </li>
            </ul>

            <p className="text-[14px] font-medium leading-[18px] tracking-[-0.3px] text-[#141414] pb-[12px]">
              업체와 계약 시, 표준계약서 전자계약을 해야 보호받을 수 있어요
            </p>
            <ul className="flex flex-col gap-[16px] pb-[16px]">
              <li className="list-disc ms-[19.5px] text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
                오늘의집이 시공 분쟁을 해결해 드리는 책임보장 서비스는 표준계약서로 전자계약을 했을 때만 받을 수
                있어요.
              </li>
              <li className="list-disc ms-[19.5px] text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
                업체가 견적보다 저렴한 금액을 제안하며 표준계약서 전자계약 대신 직접 계약을 유도할 수 있어요.
              </li>
              <li className="list-disc ms-[19.5px] text-[13px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
                직접 계약 후 업체가 자재비를 먼저 받고 잠적해도 책임보장 서비스로 피해를 보상받을 수 없어요
              </li>
            </ul>
          </div>

          <div className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-[8px] p-[16px]">
            <OdsCheckbox checked={agreed} onCheckedChange={onAgreeChange}>
              위 내용을 확인했으며, 책임보장 조건을 이해했어요.
            </OdsCheckbox>
          </div>

          <p className="text-[12px] leading-[16px] tracking-[-0.3px] text-[#8C8C8C]">{LEGAL_DISCLAIMER}</p>
        </div>
      </div>
    </div>
  );
}
