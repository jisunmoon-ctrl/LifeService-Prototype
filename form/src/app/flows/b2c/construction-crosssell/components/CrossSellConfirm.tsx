import { CrossSellFlowLayout } from "./CrossSellFlowLayout";
import { OdsBoxButton } from "../../../../shared/ods";
import { FormStepTitle } from "../../../../shared/flow/FormStepTitle";
import { formatAddressDetail, type CrossSellFormData } from "./crossSellTypes";

export type CrossSellEditTarget = "date" | "cleaningDate" | "departure" | "destination" | "type";

function fmtDate(d: Date | null) {
  if (!d) return "-";
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

function moveTypeLabel(type: CrossSellFormData["moveType"]) {
  if (type === "home") return "가정이사";
  if (type === "small") return "소형이사";
  return "-";
}

function addressLine(info: CrossSellFormData["departure"]) {
  return [info.address, info.detailAddress].filter(Boolean).join(" ") || "-";
}

/** 확인 페이지 정보 행 (라벨 + 값 + 수정 버튼) — Figma 7781:58361 */
function InfoRow({
  label,
  lines,
  onEdit,
  detailSize = 14,
}: {
  label: string;
  lines: string[];
  onEdit: () => void;
  /** Figma: 이사 예정일 Detail13, 그 외 Body14 */
  detailSize?: 13 | 14;
}) {
  return (
    <div className="flex gap-[16px] items-center px-[16px] py-[18px] w-full">
      <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
        <p className="text-[15px] font-semibold leading-[24px] tracking-[-0.3px] text-[#141414]">{label}</p>
        <div className="flex flex-col gap-[4px]">
          {lines.filter(Boolean).map((l, i) => (
            <p
              key={i}
              className={`${
                detailSize === 13 ? "text-[13px]" : "text-[14px]"
              } leading-[18px] tracking-[-0.3px] text-[#8C8C8C] overflow-hidden text-ellipsis break-keep`}
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

function RowDivider() {
  return <div className="h-px bg-[#EAEDEF]" />;
}

interface CrossSellConfirmProps {
  data: CrossSellFormData;
  onEdit: (target: CrossSellEditTarget) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function CrossSellConfirm({ data, onEdit, onSubmit, onBack }: CrossSellConfirmProps) {
  const cleaningDateValue = data.cleaningSameDay ? data.moveDate : data.cleaningDate;

  const movingRows: {
    label: string;
    lines: string[];
    target: CrossSellEditTarget;
    detailSize?: 13 | 14;
  }[] = [
    { label: "이사 예정일", lines: [fmtDate(data.moveDate)], target: "date", detailSize: 13 },
    {
      label: "출발지",
      lines: [addressLine(data.departure), data.departure.pyeong],
      target: "departure",
    },
    {
      label: "도착지",
      lines: [addressLine(data.destination), data.destination.pyeong],
      target: "destination",
    },
    { label: "이사유형", lines: [moveTypeLabel(data.moveType)], target: "type" },
  ];

  const cleaningRows: { label: string; lines: string[]; target: CrossSellEditTarget }[] = [
    { label: "청소 희망일", lines: [fmtDate(cleaningDateValue)], target: "cleaningDate" },
    {
      label: "장소 정보",
      lines: [addressLine(data.departure), formatAddressDetail(data.departure)],
      target: "departure",
    },
  ];

  return (
    <CrossSellFlowLayout
      leftIcon="back"
      onLeft={onBack}
      bottom={
        <OdsBoxButton variant="brand-solid" size="extra-large" fullWidth onClick={onSubmit}>
          이사·청소 견적 신청
        </OdsBoxButton>
      }
    >
      <FormStepTitle
        title={
          <>
            아래 정보로
            <br />
            이사·청소 견적 받으시겠어요?
          </>
        }
      />

      <div className="flex flex-col pb-[60px]">
        {/* 이사 신청 정보 */}
        <div className="flex flex-col">
          <div className="px-[16px]">
            <h3 className="text-[17px] font-semibold leading-[22px] tracking-[-0.3px] text-[#141414]">
              이사 신청 정보
            </h3>
          </div>
          {movingRows.map((r, i) => (
            <div key={r.label}>
              <InfoRow
                label={r.label}
                lines={r.lines}
                detailSize={r.detailSize}
                onEdit={() => onEdit(r.target)}
              />
              {i < movingRows.length - 1 && <RowDivider />}
            </div>
          ))}
        </div>

        {/* Section divider — ODS Divider height={12} */}
        <div className="h-[12px] bg-[#F5F6F7]" />

        {/* 청소 신청 정보 */}
        <div className="flex flex-col">
          <div className="pt-[16px] px-[16px]">
            <h3 className="text-[17px] font-semibold leading-[22px] tracking-[-0.3px] text-[#141414]">
              청소 신청 정보
            </h3>
          </div>
          {cleaningRows.map((r, i) => (
            <div key={r.label}>
              <InfoRow label={r.label} lines={r.lines} onEdit={() => onEdit(r.target)} />
              {i < cleaningRows.length - 1 && <RowDivider />}
            </div>
          ))}
        </div>
      </div>
    </CrossSellFlowLayout>
  );
}
