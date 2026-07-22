import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import { OdsCalendar, OdsTimeSelect } from "../../../../shared/ods";
import { getMockMoveDate } from "./cleaningConstants";
import { usePreviewViewport } from "../../../../preview/PreviewViewportContext";

interface CleaningStep1DateProps {
  selectedDate: Date | null;
  selectedTime: string[];
  hasRecentMovingQuote: boolean;
  onSelectDate: (date: Date | null) => void;
  onSelectTime: (times: string[]) => void;
}

export function CleaningStep1Date({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: CleaningStep1DateProps) {
  const { isDesktopForm } = usePreviewViewport();

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <FormStepTitle
        title="청소 희망일을 알려주세요"
        subtitle="확정된 날짜를 선택해주세요."
      />

      <div className={`${isDesktopForm ? "" : "px-[16px]"} mb-[20px]`}>
        <OdsCalendar
          selectedDate={selectedDate}
          onSelectDate={onSelectDate}
          defaultMonth={getMockMoveDate()}
        />
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
