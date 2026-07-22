import MovingHomeV2 from "../../../../imports/MovingHomeV2";

export interface MovingHomeScreenProps {
  /** 콘텐츠(꿀팁) 카드 탭 → 콘텐츠 상세로 이동 */
  onContentSelect: (contentId: string) => void;
  /** 비교견적 받기 / 견적 신청 → 견적 신청 화면으로 이동 */
  onQuoteRequest: () => void;
}

/**
 * 이사홈 메인 (단일 스크롤 페이지) 화면 마스터.
 * 섹션 순서: TopNavigation → ATF 헤더+바로가기 카드 → 꿀팁 모듈 → PLP(파트너 목록).
 */
export default function MovingHomeScreen(props: MovingHomeScreenProps) {
  return <MovingHomeV2 {...props} />;
}
