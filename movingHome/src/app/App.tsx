import { useEffect, useState } from "react";
import { PreviewStudio } from "./preview/PreviewStudio";
import { PreviewControlPanel } from "./preview/PreviewControlPanel";
import type { PanelTab } from "./preview/PrototypeNavMenu";
import MovingHomeScreen from "./flows/b2c/moving-home/MovingHomeScreen";
import ContentDetailScreen from "./flows/b2c/moving-home/ContentDetailScreen";
import QuoteScreen from "./flows/b2c/moving-home/QuoteScreen";
import { CONTENT_ITEMS } from "./data/contentData";

/**
 * movingHome — 이사홈 단일 페이지 프로토타입.
 * 단일 스크롤 홈 + 2개 드릴인 오버레이(콘텐츠 상세 / 견적 신청)를 movingHome 메뉴 트리로 재배치.
 * 우측 컨트롤 패널(PrototypeNavMenu)에서 화면을 전환하고, 홈 내 인터랙션으로도 이동한다.
 */

type ScreenId = "home" | "content" | "quote";

const DEFAULT_CONTENT_ID = CONTENT_ITEMS[0]?.id ?? "partner-guarantee";

/**
 * 임베드(딥링크) 모드 — 통합 프리뷰 허브(`/preview`)가 iframe 으로 로드할 때 사용.
 * `?preview=1&screen=<id>` 로 진입하면 studio 크롬 없이 feature 화면만 렌더하고,
 * 인-피처 네비게이션은 부모(허브)에 postMessage 로 알린다.
 */
const EMBED_PARAMS = new URLSearchParams(window.location.search);
const IS_EMBED = EMBED_PARAMS.get("preview") === "1";
const EMBED_SCREEN = EMBED_PARAMS.get("screen") as ScreenId | null;

/**
 * 우측 컨트롤 패널 메뉴 트리 — 상단 B2B/B2C 스위칭 탭 하위에 플로우 그룹을 평평하게 배치.
 * movingHome 은 B2C 플로우(이사홈)만 보유하므로 B2B 탭은 비활성(disabled)으로 노출된다.
 */
const PANEL_TABS: PanelTab[] = [
  {
    id: "b2c",
    label: "B2C",
    sections: [
      {
        id: "b2c-flows",
        groups: [
          {
            id: "moving-home-flow",
            label: "이사홈",
            items: [
              { id: "home", label: "① 이사홈 (메인 · 단일 페이지)" },
              { id: "content", label: "② 이사 꿀팁 콘텐츠 상세" },
              { id: "quote", label: "③ 견적 신청" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "b2b",
    label: "B2B",
    sections: [{ id: "b2b-flows", groups: [] }],
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>(EMBED_SCREEN ?? "home");
  const [selectedContentId, setSelectedContentId] = useState<string>(DEFAULT_CONTENT_ID);
  const [resetKey, setResetKey] = useState(0);

  // 임베드 모드: 인-피처 네비게이션을 허브 메뉴 트리 하이라이트와 동기화
  useEffect(() => {
    if (!IS_EMBED) return;
    try {
      window.parent?.postMessage({ __pvNav: true, screen: currentScreen }, "*");
    } catch {
      /* noop */
    }
  }, [currentScreen]);

  const goHome = () => setCurrentScreen("home");

  const handleContentSelect = (contentId: string) => {
    setSelectedContentId(contentId);
    setCurrentScreen("content");
  };

  const handleQuoteRequest = () => setCurrentScreen("quote");

  // 메뉴 트리에서 직접 화면 선택
  const handleNavSelect = (screenId: string) => {
    if (screenId === "content") {
      setSelectedContentId((prev) => prev || DEFAULT_CONTENT_ID);
    }
    setCurrentScreen(screenId as ScreenId);
  };

  const handleRestart = () => {
    setSelectedContentId(DEFAULT_CONTENT_ID);
    setCurrentScreen("home");
    setResetKey((k) => k + 1);
  };

  const showHome = currentScreen === "home";

  // 스크롤은 PreviewStudio 프레임(overflow-y-auto)이 담당 → 자연 흐름 레이아웃.
  // 홈은 내부 상태 보존을 위해 마운트 유지하고 오버레이 시 hidden 처리.
  const screen = (
    <div className="w-full bg-white">
      <div className={showHome ? undefined : "hidden"}>
        <MovingHomeScreen onContentSelect={handleContentSelect} onQuoteRequest={handleQuoteRequest} />
      </div>
      {currentScreen === "content" && (
        <ContentDetailScreen contentId={selectedContentId} onBack={goHome} />
      )}
      {currentScreen === "quote" && <QuoteScreen onBack={goHome} />}
    </div>
  );

  // 임베드 모드: studio 크롬 없이 feature 화면만 (허브 iframe 이 프레임 크기를 담당)
  if (IS_EMBED) return screen;

  const controlPanel = (
    <PreviewControlPanel
      title="movingHome"
      tabs={PANEL_TABS}
      currentScreen={currentScreen}
      onSelect={handleNavSelect}
      onRestart={handleRestart}
    />
  );

  return (
    <PreviewStudio aside={controlPanel} resetKey={resetKey}>
      {screen}
    </PreviewStudio>
  );
}
