import { useEffect, useState } from "react";
import { OdsBoxButton, OdsTextarea, IconQuestionCircle } from "../../../../shared/ods";
import { CrossSellDualAction, CrossSellFlowLayout } from "../../construction-crosssell/components/CrossSellFlowLayout";
import {
  formatEstimateDate,
  moveTypeLabel,
  type EstimateFunnelData,
} from "./estimateFunnelTypes";

export type EstimateEditTarget =
  | "contact"
  | "date"
  | "departure"
  | "destination"
  | "type";

/** 슬롯머신 숫자 1자리 — 여러 바퀴 돌린 뒤 목표 자릿수에 정지 */
function SlotMachineDigit({
  value,
  delayMs = 0,
  durationMs = 1200,
  spins = 2,
}: {
  value: number;
  delayMs?: number;
  durationMs?: number;
  spins?: number;
}) {
  const [offset, setOffset] = useState(0);
  const [ready, setReady] = useState(false);
  const digit = ((value % 10) + 10) % 10;
  // 0..9 를 spins+1 바퀴 반복해 마지막 칸이 목표 숫자
  const stripLen = spins * 10 + digit + 1;
  const strip = Array.from({ length: stripLen }, (_, i) => i % 10);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOffset(stripLen - 1);
      setReady(true);
      return;
    }

    const start = window.setTimeout(() => {
      setReady(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setOffset(stripLen - 1));
      });
    }, delayMs);

    return () => window.clearTimeout(start);
  }, [delayMs, stripLen]);

  return (
    <span
      className="relative inline-block overflow-hidden align-middle"
      style={{ height: "1.4em", width: "0.62em" }}
      aria-hidden
    >
      <span
        className="absolute left-0 top-0 flex w-full flex-col items-center"
        style={{
          transform: `translateY(${-offset * 1.4}em)`,
          transition: ready
            ? `transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`
            : "none",
        }}
      >
        {strip.map((n, i) => (
          <span
            key={i}
            className="flex w-full items-center justify-center tabular-nums"
            style={{ height: "1.4em", lineHeight: "1.4em" }}
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}

/** 정수 전체를 자릿수별 슬롯머신으로 표시 */
function SlotMachineNumber({
  value,
  delayMs = 0,
  durationMs = 1200,
}: {
  value: number;
  delayMs?: number;
  durationMs?: number;
}) {
  const digits = String(Math.max(0, Math.floor(value))).split("").map(Number);
  return (
    <span className="inline-flex items-center" aria-label={`${value}`}>
      {digits.map((d, i) => (
        <SlotMachineDigit
          key={`${value}-${i}`}
          value={d}
          delayMs={delayMs + i * 90}
          durationMs={durationMs}
          spins={2 + (digits.length - 1 - i)}
        />
      ))}
    </span>
  );
}

function ConfirmRow({
  label,
  lines,
  onEdit,
  detailSize = 14,
}: {
  label: string;
  lines: string[];
  onEdit: () => void;
  /** Figma: 연락처 Detail13, 그 외 Body14 */
  detailSize?: 13 | 14;
}) {
  return (
    <div className="flex gap-[16px] items-center px-[16px] py-[18px] w-full">
      <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
        <p className="text-[15px] font-semibold leading-[24px] tracking-[-0.3px] text-[#141414]">
          {label}
        </p>
        <div className="flex flex-col gap-[4px]">
          {lines.filter(Boolean).map((l, i) => (
            <p
              key={i}
              className={`${
                detailSize === 13 ? "text-[13px]" : "text-[14px]"
              } leading-[18px] tracking-[-0.3px] text-[#8C8C8C] break-keep`}
            >
              {l}
            </p>
          ))}
        </div>
      </div>
      <OdsBoxButton variant="normal" size="medium" className="shrink-0" onClick={onEdit}>
        수정
      </OdsBoxButton>
    </div>
  );
}

interface EstimateConfirmProps {
  data: EstimateFunnelData;
  onUpdateRequestMemo: (requestMemo: string) => void;
  onEdit: (target: EstimateEditTarget) => void;
  onSubmit: () => void;
  onBack: () => void;
}

/** Form/Confirm — 예상 견적가 + 추가 요청 + 신청 정보 (Figma 7942-42568) */
export function EstimateConfirm({
  data,
  onUpdateRequestMemo,
  onEdit,
  onSubmit,
  onBack,
}: EstimateConfirmProps) {
  const contactLine =
    [data.contact.name, data.contact.phone].filter(Boolean).join(" · ") || "-";
  const departureLines = [
    [data.departure.address, data.departure.detailAddress].filter(Boolean).join(" ") || "-",
    data.departure.pyeong,
  ];
  const destinationLines = [
    data.destination.address || "-",
    data.destination.pyeong,
  ];

  return (
    <CrossSellFlowLayout
      title="이사 무료 견적 확인"
      leftIcon="back"
      onLeft={onBack}
      bottom={
        <CrossSellDualAction
          prevLabel="이전"
          nextLabel="이대로 견적 신청"
          onPrev={onBack}
          onNext={onSubmit}
        />
      }
    >
      <div className="px-[16px] py-[20px] flex flex-col gap-[6px]">
        <h2 className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414]">
          <span className="block">예상 견적가는</span>
          <span className="inline-flex items-center flex-wrap">
            <span className="inline-flex items-center text-[#00A1FF]">
              <SlotMachineNumber value={150} delayMs={80} durationMs={1100} />
              <span className="mx-[4px]">-</span>
              <SlotMachineNumber value={180} delayMs={220} durationMs={1300} />
              <span className="ml-[2px]">만원</span>
            </span>
            <IconQuestionCircle
              size={16}
              className="shrink-0 text-[#8C8C8C] mx-[2px]"
            />
            <span>이에요</span>
          </span>
        </h2>
        <p className="text-[15px] leading-[24px] tracking-[-0.3px] text-[#8C8C8C]">
          최종 견적가는 파트너와 상의 후 확정되요.
        </p>
      </div>

      <div className="px-[16px] pb-[16px]">
        <OdsTextarea
          value={data.requestMemo}
          onChange={onUpdateRequestMemo}
          maxLength={100}
          height={152}
          placeholder={
            "추가 요청 사항이 있다면 작성해주세요\n예시:\n보관이사는 10일 정도 필요해요.\n냉장고, TV 등 버리고 갈 짐이 있어요.\n반려동물이 있어요."
          }
        />
      </div>

      <div className="h-[12px] bg-[#F5F6F7]" />

      <ConfirmRow
        label="연락처 정보"
        lines={[contactLine]}
        detailSize={13}
        onEdit={() => onEdit("contact")}
      />
      <div className="h-px bg-[#EAEDEF]" />
      <ConfirmRow
        label="이사 예정일"
        lines={[formatEstimateDate(data.moveDate)]}
        onEdit={() => onEdit("date")}
      />
      <div className="h-px bg-[#EAEDEF]" />
      <ConfirmRow label="출발지" lines={departureLines} onEdit={() => onEdit("departure")} />
      <div className="h-px bg-[#EAEDEF]" />
      <ConfirmRow label="도착지" lines={destinationLines} onEdit={() => onEdit("destination")} />
      <div className="h-px bg-[#EAEDEF]" />
      <ConfirmRow
        label="이사유형"
        lines={[moveTypeLabel(data.moveType)]}
        onEdit={() => onEdit("type")}
      />
      <div className="h-[24px]" />
    </CrossSellFlowLayout>
  );
}
