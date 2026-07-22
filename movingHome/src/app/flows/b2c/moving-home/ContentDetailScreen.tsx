import ContentDetail from "../../../../imports/ContentDetail";

export interface ContentDetailScreenProps {
  /** 표시할 콘텐츠 ID (CONTENT_ITEMS 참조) */
  contentId: string;
  /** 뒤로가기 → 홈 복귀 (스크롤 위치 복원) */
  onBack: () => void;
}

/** 이사 꿀팁 콘텐츠 상세 화면 마스터 (드릴인 오버레이). */
export default function ContentDetailScreen({ contentId, onBack }: ContentDetailScreenProps) {
  return <ContentDetail contentId={contentId} onBack={onBack} />;
}
