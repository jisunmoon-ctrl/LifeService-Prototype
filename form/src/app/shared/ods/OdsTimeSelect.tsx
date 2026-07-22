import { OdsBoxButton } from "./OdsBoxButton";

// UI 패턴 원칙 (guidelines/Guidelines.md): 항목 입력 button
// 시간 칩은 열당 4개, 1/4 고정 너비 (옵션이 4의 배수가 아니어도 마지막 열 1/4 유지),
// 선택됨 = outlined / 디폴트 = normal, min-width 84px.
interface OdsTimeSelectProps {
  selectedTime: string[];
  onSelectTime: (times: string[]) => void;
  title?: string;
}

const MORNING_HOURS = ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00"];
const AFTERNOON_HOURS = ["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"];

const PER_ROW = 4;
const CHIP_GAP = 2;
const chipStyle = {
  width: `calc((100% - ${CHIP_GAP * (PER_ROW - 1)}px) / ${PER_ROW})`,
  minWidth: 84,
} as const;

export function OdsTimeSelect({
  selectedTime,
  onSelectTime,
  title = "선호 시간대 선택",
}: OdsTimeSelectProps) {
  const toggle = (time: string) => {
    if (selectedTime.includes(time)) {
      onSelectTime(selectedTime.filter((t) => t !== time));
    } else {
      onSelectTime([...selectedTime, time]);
    }
  };

  const renderSection = (period: "오전" | "오후", hours: string[]) => (
    <div className={period === "오전" ? "mb-[12px]" : undefined}>
      <div className="text-[15px] font-medium leading-[24px] tracking-[-0.3px] text-[#141414] mb-[8px]">
        {period}
      </div>
      <div className="flex flex-wrap gap-[2px]">
        {hours.map((hour) => {
          const value = `${period} ${hour}`;
          const selected = selectedTime.includes(value);
          return (
            <OdsBoxButton
              key={value}
              size="medium"
              variant={selected ? "outlined" : "normal"}
              onClick={() => toggle(value)}
              style={chipStyle}
            >
              {hour}
            </OdsBoxButton>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-[16px]">
        <h3 className="text-[18px] font-semibold leading-[24px] tracking-[-0.3px] text-[#141414] mb-[6px]">
          {title}
        </h3>
        <p className="text-[14px] leading-[18px] tracking-[-0.3px] text-[#8C8C8C]">
          {selectedTime.length > 0 ? selectedTime.join(", ") : "상담 후 조율"}
        </p>
      </div>
      {renderSection("오전", MORNING_HOURS)}
      {renderSection("오후", AFTERNOON_HOURS)}
    </div>
  );
}
