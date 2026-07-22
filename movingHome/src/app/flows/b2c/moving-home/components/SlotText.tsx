import { useEffect, useState } from "react";

const STRINGS = [
  "검증된 파트너사",
  "당일 추가금 없는",
  "최대 천만원 보상",
  "오늘의집 전담팀",
];

const ITEM_HEIGHT = 18;

export function SlotText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STRINGS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative overflow-hidden shrink-0"
      style={{ height: ITEM_HEIGHT }}
    >
      <div
        style={{
          transform: `translateY(-${currentIndex * ITEM_HEIGHT}px)`,
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {STRINGS.map((item, index) => (
          <div
            key={index}
            className="gradient-text-animated font-['Pretendard:SemiBold',sans-serif] text-[14px] tracking-[-0.3px] whitespace-nowrap"
            style={{ height: ITEM_HEIGHT, lineHeight: `${ITEM_HEIGHT}px` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
