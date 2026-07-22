import { getConstructionBaseMonth } from "./constructionConstants";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const MONTHS_TO_SHOW = 4;
const TODAY = new Date(2026, 6, 13); // 프로토타입 고정 기준일

interface ConstructionDateRangeProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (start: Date | null, end: Date | null) => void;
}

function ymd(d: Date) {
  return d.getFullYear() * 10000 + d.getMonth() * 100 + d.getDate();
}

function buildMonthDays(base: Date, offset: number) {
  const month = new Date(base.getFullYear(), base.getMonth() + offset, 1);
  const startDow = month.getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  return { month, cells };
}

export function ConstructionDateRange({ startDate, endDate, onChange }: ConstructionDateRangeProps) {
  const base = getConstructionBaseMonth();
  const todayKey = ymd(TODAY);

  const handleClick = (date: Date) => {
    if (ymd(date) < todayKey) return; // 과거 선택 불가
    if (!startDate || (startDate && endDate)) {
      onChange(date, null);
    } else if (ymd(date) < ymd(startDate)) {
      onChange(date, null);
    } else {
      onChange(startDate, date);
    }
  };

  const inRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    const k = ymd(date);
    return k > ymd(startDate) && k < ymd(endDate);
  };
  const isEdge = (date: Date) =>
    (startDate && ymd(date) === ymd(startDate)) || (endDate && ymd(date) === ymd(endDate));

  return (
    <div className="flex flex-col">
      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 mb-[8px]">
        {WEEKDAYS.map((w) => (
          <div key={w} className="h-[32px] flex items-center justify-center text-[14px] leading-[20px] tracking-[-0.3px] text-[#8C8C8C]">
            {w}
          </div>
        ))}
      </div>

      <div className="max-h-[320px] overflow-y-auto custom-scrollbar pr-[2px]">
        {Array.from({ length: MONTHS_TO_SHOW }, (_, i) => {
          const { month, cells } = buildMonthDays(base, i);
          return (
            <div key={i} className="mb-[8px]">
              <p className="text-[16px] font-bold leading-[24px] tracking-[-0.3px] text-[#141414] mb-[8px]">
                {month.getFullYear()}년 {month.getMonth() + 1}월
              </p>
              <div className="grid grid-cols-7 gap-y-[4px]">
                {cells.map((date, idx) => {
                  if (!date) return <div key={idx} className="h-[40px]" />;
                  const past = ymd(date) < todayKey;
                  const edge = isEdge(date);
                  const between = inRange(date);
                  const isToday = ymd(date) === todayKey;
                  return (
                    <div key={idx} className="h-[40px] flex items-center justify-center relative">
                      {between && <div className="absolute inset-x-0 inset-y-[4px] bg-[#EAF6FF]" />}
                      <button
                        type="button"
                        disabled={past}
                        onClick={() => handleClick(date)}
                        className={`relative z-10 size-[40px] rounded-full flex flex-col items-center justify-center text-[15px] leading-[20px] tracking-[-0.3px] transition-default ${
                          edge
                            ? "bg-[#141414] text-white font-semibold"
                            : between
                              ? "text-[#141414]"
                              : past
                                ? "text-[#D5D9DC] cursor-not-allowed"
                                : "text-[#141414] hover:bg-[#F5F5F5]"
                        }`}
                      >
                        {date.getDate()}
                        {isToday && !edge && (
                          <span className="absolute bottom-[6px] size-[3px] rounded-full bg-[#141414]" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
