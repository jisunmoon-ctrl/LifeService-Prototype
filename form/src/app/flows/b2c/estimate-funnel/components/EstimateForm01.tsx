import { useEffect, useRef, useState, type ReactNode } from "react";
import { CrossSellAddressStep, CrossSellTypeStep } from "../../construction-crosssell/components/CrossSellFlowSteps";
import { OdsCalendar } from "../../../../shared/ods";
import {
  isAddressSectionComplete,
  type EstimateFunnelData,
  type EstimateMoveType,
  withMoveDate,
} from "./estimateFunnelTypes";

type SectionId = "date" | "departure" | "destination" | "type";

const SECTION_ORDER: SectionId[] = ["date", "departure", "destination", "type"];

function unlockedThrough(data: EstimateFunnelData): number {
  // 0: date only · 1: +departure · 2: +destination · 3: +type
  if (!data.moveDate) return 0;
  if (!isAddressSectionComplete(data.departure)) return 1;
  if (!isAddressSectionComplete(data.destination)) return 2;
  return 3;
}

/** 새로 열린 섹션 — fade + slide 후 스크롤 앵커링 */
function RevealSection({
  fresh,
  children,
}: {
  fresh: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fresh) return;
    const id = window.setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [fresh]);

  return (
    <div
      ref={ref}
      className={`scroll-mt-[8px] ${
        fresh ? "animate-in slide-in-from-top-4 fade-in duration-300 fill-mode-both" : ""
      }`}
    >
      <div className="h-[12px] bg-[#F5F6F7]" />
      {children}
    </div>
  );
}

/** Form/01 — 섹션 완료 시 다음 섹션 순차 노출 (Figma 7942-30997) */
export function EstimateForm01({
  data,
  onUpdate,
}: {
  data: EstimateFunnelData;
  onUpdate: (patch: Partial<EstimateFunnelData> | EstimateFunnelData) => void;
}) {
  const target = unlockedThrough(data);
  // 한 번 열린 섹션은 유지 (이전 인풋을 비워도 접히지 않음)
  const [maxUnlocked, setMaxUnlocked] = useState(target);
  // 방금 새로 열린 섹션 id (애니메이션·스크롤 1회용)
  const [freshSection, setFreshSection] = useState<SectionId | null>(null);
  const prevUnlocked = useRef(target);

  useEffect(() => {
    if (target > maxUnlocked) {
      setMaxUnlocked(target);
    }
  }, [target, maxUnlocked]);

  useEffect(() => {
    if (maxUnlocked > prevUnlocked.current) {
      setFreshSection(SECTION_ORDER[maxUnlocked]);
      prevUnlocked.current = maxUnlocked;
    }
  }, [maxUnlocked]);

  const showDeparture = maxUnlocked >= 1;
  const showDestination = maxUnlocked >= 2;
  const showType = maxUnlocked >= 3;

  return (
    <div className="flex flex-col pb-[24px]">
      {/* ① 이사 예정일 — 항상 노출 */}
      <div className="px-[16px] py-[20px]">
        <h2 className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414]">
          이사 예정일을 알려주세요
        </h2>
      </div>
      <div className="px-[16px]">
        <OdsCalendar
          selectedDate={data.moveDate}
          onSelectDate={(moveDate) => onUpdate(withMoveDate(data, moveDate))}
        />
      </div>

      {/* ② 출발지 */}
      {showDeparture && (
        <RevealSection fresh={freshSection === "departure"}>
          <CrossSellAddressStep
            title="이사 출발지 정보를 알려주세요"
            data={data.departure}
            onUpdate={(departure) => onUpdate({ departure })}
          />
        </RevealSection>
      )}

      {/* ③ 도착지 */}
      {showDestination && (
        <RevealSection fresh={freshSection === "destination"}>
          <CrossSellAddressStep
            title="도착지 정보를 알려주세요"
            data={data.destination}
            onUpdate={(destination) => onUpdate({ destination })}
          />
        </RevealSection>
      )}

      {/* ④ 이사 종류 */}
      {showType && (
        <RevealSection fresh={freshSection === "type"}>
          <CrossSellTypeStep
            value={data.moveType}
            onSelect={(moveType: Exclude<EstimateMoveType, null>) => onUpdate({ moveType })}
          />
        </RevealSection>
      )}
    </div>
  );
}
