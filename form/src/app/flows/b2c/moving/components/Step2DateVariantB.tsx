import React, { useState } from "react";
import { Slider } from "../../../../shared/ui/slider";
import { OdsCalendar, IconRefresh } from "../../../../shared/ods";

interface Step2Props {
  selectedDate: Date | null;
  selectedTime: { start: number; end: number } | null;
  onSelectDate: (date: Date | null) => void;
  onSelectTime: (time: { start: number; end: number }) => void;
}

export function Step2DateVariantB({ selectedDate, selectedTime, onSelectDate, onSelectTime }: Step2Props) {
  const [morningRange, setMorningRange] = useState<[number, number]>([6, 12]);
  const [afternoonRange, setAfternoonRange] = useState<[number, number]>([13, 18]);

  // Reset handler
  const handleReset = () => {
    setMorningRange([6, 12]);
    setAfternoonRange([13, 18]);
    onSelectTime({ start: 6, end: 12 });
  };

  // Format time range display
  const formatTimeRange = (range: [number, number], period: 'morning' | 'afternoon') => {
    const [start, end] = range;
    if (period === 'morning' && start === 0 && end === 12) {
      return '오전 시간 전체';
    }
    if (period === 'afternoon' && start === 12 && end === 24) {
      return '오후 시간 전체';
    }
    return `${start}:00 - ${end}:00`;
  };

  // Morning range handler
  const handleMorningRangeChange = (value: number[]) => {
    if (value.length === 2) {
      const newRange: [number, number] = [value[0], value[1]];
      setMorningRange(newRange);
      // 오전/오후 중 하나라도 선택되면 selectedTime 업데이트
      onSelectTime({ start: newRange[0], end: newRange[1] });
    }
  };

  // Afternoon range handler
  const handleAfternoonRangeChange = (value: number[]) => {
    if (value.length === 2) {
      const newRange: [number, number] = [value[0], value[1]];
      setAfternoonRange(newRange);
      // 오전/오후 중 하나라도 선택되면 selectedTime 업데이트
      onSelectTime({ start: newRange[0], end: newRange[1] });
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Title Section */}
      <div className="px-[16px] py-[20px]">
        <h2 className="text-heading-24 text-[var(--fg-neutral)] mb-[6px]">
          이사 예정일을 알려주세요
        </h2>
        <p className="text-body-15 text-[var(--fg-neutral)]">
          확정된 날짜를 선택해주세요.
        </p>
      </div>

      {/* Calendar Section */}
      <div className="px-[16px] mb-[20px]">
        <OdsCalendar selectedDate={selectedDate} onSelectDate={onSelectDate} />
      </div>

      {/* Time Range Selection Section - 날짜 선택 시에만 노출 */}
      {selectedDate && (
        <div className="px-[16px] pb-[16px] animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex items-center justify-between mb-[16px]">
            <h3 className="text-heading-18 text-[var(--fg-neutral)]">
              선호 시간대 선택
            </h3>
            <button
              onClick={handleReset}
              className="flex items-center gap-[4px] px-[8px] py-[4px] rounded-[6px] hover:bg-[var(--bg-weak)] transition-colors text-[var(--fg-weak)] hover:text-[var(--fg-neutral)]"
              aria-label="초기화"
            >
              <IconRefresh size={14} />
              <span className="text-detail-12">초기화</span>
            </button>
          </div>

          {/* Morning Range Slider */}
          <div className="mb-[32px]">
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-body-15 font-medium text-[var(--fg-neutral)]">오전</span>
              <span className="text-body-14 text-[var(--fg-weak)]">
                {formatTimeRange(morningRange, 'morning')}
              </span>
            </div>

            <div className="relative">
              <Slider
                min={0}
                max={12}
                step={1}
                value={morningRange}
                onValueChange={handleMorningRangeChange}
                className="mb-[8px]"
              />

              {/* Hour Labels */}
              <div className="flex justify-between px-[2px]">
                <span className="text-detail-10 text-[var(--fg-weak)]">0</span>
                <span className="text-detail-10 text-[var(--fg-weak)]">3</span>
                <span className="text-detail-10 text-[var(--fg-weak)]">6</span>
                <span className="text-detail-10 text-[var(--fg-weak)]">9</span>
                <span className="text-detail-10 text-[var(--fg-weak)]">12</span>
              </div>
            </div>
          </div>

          {/* Afternoon Range Slider */}
          <div>
            <div className="flex items-center justify-between mb-[12px]">
              <span className="text-body-15 font-medium text-[var(--fg-neutral)]">오후</span>
              <span className="text-body-14 text-[var(--fg-weak)]">
                {formatTimeRange(afternoonRange, 'afternoon')}
              </span>
            </div>

            <div className="relative">
              <Slider
                min={12}
                max={24}
                step={1}
                value={afternoonRange}
                onValueChange={handleAfternoonRangeChange}
                className="mb-[8px]"
              />

              {/* Hour Labels */}
              <div className="flex justify-between px-[2px]">
                <span className="text-detail-10 text-[var(--fg-weak)]">12</span>
                <span className="text-detail-10 text-[var(--fg-weak)]">15</span>
                <span className="text-detail-10 text-[var(--fg-weak)]">18</span>
                <span className="text-detail-10 text-[var(--fg-weak)]">21</span>
                <span className="text-detail-10 text-[var(--fg-weak)]">24</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
