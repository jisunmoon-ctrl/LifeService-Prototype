import QuoteEmpty from "../../../../imports/QuoteEmpty";

export interface QuoteScreenProps {
  /** 뒤로가기 → 홈 복귀 (스크롤 위치 복원) */
  onBack: () => void;
}

/** 견적 신청 화면 마스터 (현재는 "준비중" empty state / 드릴인 오버레이). */
export default function QuoteScreen({ onBack }: QuoteScreenProps) {
  return <QuoteEmpty onBack={onBack} />;
}
