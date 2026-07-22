import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";
import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import { OdsCalendar, OdsTimeSelect } from "../../../../shared/ods";

interface Step2Props {
  selectedDate: Date | null;
  selectedTime: string[];
  onSelectDate: (date: Date | null) => void;
  onSelectTime: (times: string[]) => void;
}

export function Step2Date({ selectedDate, selectedTime, onSelectDate, onSelectTime }: Step2Props) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <FormStepTitle
        title="이사 예정일을 알려주세요"
        subtitle="확정된 날짜를 선택해주세요."
      />

      <div className={`${isDesktopForm ? "" : "px-[16px]"} mb-[20px]`}>
        <OdsCalendar selectedDate={selectedDate} onSelectDate={onSelectDate} />
      </div>

      {selectedDate && (
        <div
          className={`${
            isDesktopForm ? "pb-[16px]" : "px-[16px] pb-[16px]"
          } animate-in slide-in-from-top-4 fade-in duration-300`}
        >
          <OdsTimeSelect selectedTime={selectedTime} onSelectTime={onSelectTime} />
        </div>
      )}
    </div>
  );
}
