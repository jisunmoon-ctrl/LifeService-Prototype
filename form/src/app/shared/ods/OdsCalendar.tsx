import { useState } from "react";
import { IconChevronDown, IconChevronLeft, IconChevronRight } from "./OdsIcons";

// ODS Calendar (@bucketplace/design-system) 스펙을 토큰으로 재현.
// Header(Title + Prev/Next) / WeekDays / Body / Day 구조. 선택 상태는 ODS 시맨틱
// 토큰 가이드에 따라 emphasis( var(--bg-emphasis) = #00A1FF )로 표현한다.
interface OdsCalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  /** 초기 표시 월 (기본: 오늘) */
  defaultMonth?: Date;
}

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

function buildDays(date: Date): (number | null)[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const startingDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];

  for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  while (days.length < 35) days.push(null);
  return days;
}

export function OdsCalendar({ selectedDate, onSelectDate, defaultMonth }: OdsCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const base = defaultMonth ?? new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  const days = buildDays(currentMonth);
  const monthName = `${currentMonth.getFullYear()}년 ${currentMonth.getMonth() + 1}월`;

  const goMonth = (delta: number) =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1));

  const isSameDay = (day: number, ref: Date | null) =>
    !!ref &&
    ref.getDate() === day &&
    ref.getMonth() === currentMonth.getMonth() &&
    ref.getFullYear() === currentMonth.getFullYear();

  return (
    <div>
      {/* Calendar.Header */}
      <div className="flex items-center justify-between mb-[12px]">
        <button
          type="button"
          className="flex items-center gap-[4px] h-[32px] px-[12px] rounded-[8px] hover:bg-[var(--bg-weak)]"
        >
          <span className="text-body-16 font-semibold text-[var(--fg-neutral)]">{monthName}</span>
          <IconChevronDown size={12} className="text-[var(--fg-neutral)]" />
        </button>
        <div className="flex gap-[8px]">
          <button
            type="button"
            onClick={() => goMonth(-1)}
            aria-label="이전 달"
            className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center hover:bg-[var(--bg-weak)]"
          >
            <IconChevronLeft size={18} className="text-[var(--fg-neutral)]" />
          </button>
          <button
            type="button"
            onClick={() => goMonth(1)}
            aria-label="다음 달"
            className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center hover:bg-[var(--bg-weak)]"
          >
            <IconChevronRight size={18} className="text-[var(--fg-neutral)]" />
          </button>
        </div>
      </div>

      {/* Calendar.WeekDays */}
      <div className="grid grid-cols-7 h-[36px] text-detail-14 font-semibold text-[#8C8C8C] mb-[4px]">
        {WEEKDAYS.map((d) => (
          <div key={d} className="flex items-center justify-center">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar.Body */}
      <div className="grid grid-cols-7 gap-y-[4px]">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="h-[40px] w-[40px] mx-auto" />;
          }
          const selected = isSameDay(day, selectedDate);
          const today = isSameDay(day, new Date());

          return (
            <button
              key={index}
              type="button"
              onClick={() =>
                onSelectDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
              }
              className="h-[40px] w-[40px] flex items-center justify-center relative mx-auto cursor-pointer"
            >
              {/* Calendar.Day - selected: emphasis 원 */}
              {selected && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[40px] h-[40px] bg-[#141414] rounded-full" />
                </div>
              )}
              <span
                className={`relative text-detail-14 ${
                  selected ? "text-white font-medium" : "text-[var(--fg-neutral)]"
                }`}
              >
                {day}
              </span>
              {today && (
                <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2">
                  <span
                    className={`block w-[5px] h-[5px] rounded-full ${
                      selected ? "bg-white" : "bg-[#141414]"
                    }`}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
