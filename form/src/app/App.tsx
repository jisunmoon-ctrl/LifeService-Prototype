import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "./shared/ui/popover";
import { HelpCircle, Copy, Check, X, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import MovingRequestScreenVarA from "./flows/legacy/screens/MovingRequestScreenVarA";
import InputFormScreenVarA from "./flows/legacy/screens/InputFormScreenVarA";
import ResponsibilityServiceScreen from "./flows/legacy/screens/ResponsibilityServiceScreen";
import InputFlowScreen from "./flows/b2c/moving/InputFlowScreen";
import CleaningFlowScreen from "./flows/b2c/cleaning/CleaningFlowScreen";
import ConstructionFlowScreen from "./flows/legacy/construction/ConstructionFlowScreen";
import ConstructionCrossSellFlowScreen, {
  type CrossSellView,
} from "./flows/b2c/construction-crosssell/ConstructionCrossSellFlowScreen";
import EstimateFunnelFlowScreen, {
  type EstimateView,
} from "./flows/b2c/estimate-funnel/EstimateFunnelFlowScreen";
import { PreviewStudio } from "./preview/PreviewStudio";
import { PrototypeNavMenu, type PanelTab } from "./preview/PrototypeNavMenu";

/**
 * 임베드(딥링크) 모드 — 통합 프리뷰 허브(`/preview`)가 iframe 으로 로드할 때 사용.
 * `?preview=1&screen=<id>` 로 진입하면 studio 크롬(해상도 바·우측 패널) 없이 feature 화면만 렌더하고,
 * 인-피처 네비게이션은 부모(허브)에 postMessage 로 알린다.
 */
const EMBED_PARAMS = new URLSearchParams(window.location.search);
const IS_EMBED = EMBED_PARAMS.get("preview") === "1";
const EMBED_SCREEN = EMBED_PARAMS.get("screen");

/**
 * 우측 컨트롤 패널 메뉴 트리 — 상단 B2B/B2C 스위칭 탭 하위에 플로우 그룹을 평평하게 배치.
 * form 프로토타입은 B2C 플로우만 보유하므로 B2B 탭은 비활성(disabled)으로 노출된다.
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
            id: "construction-crosssell",
            label: "시공신청 크로스셀링 flow",
            items: [
              { id: "cxs_contact", label: "① 시공 연락처 입력 (시작)" },
              { id: "cxs_crosssell", label: "② 이사+청소 크로스셀 제안" },
              { id: "cxs_departure", label: "③ 출발지" },
              { id: "cxs_type", label: "④ 이사 타입" },
              { id: "cxs_confirm", label: "⑤ 신청 정보 확인" },
              { id: "cxs_list", label: "⑥ 매칭 리스트 (상담내역)" },
            ],
          },
          {
            id: "estimate-funnel-ux",
            label: "견적신청퍼널 UX iteration",
            items: [
              { id: "est_home", label: "① 이사 홈 (시작)" },
              { id: "est_form", label: "② 견적 정보 입력" },
              { id: "est_belongings", label: "③ 이삿짐 정보 (목록+사진옵션)" },
              { id: "est_belongings_photo", label: "③-1 사진·영상 (옵션)" },
              { id: "est_belongings_detail", label: "③-2 세부 정보" },
              { id: "est_confirm", label: "④ 신청 정보 확인" },
              { id: "est_crosssell", label: "⑤ 신청완료·크로스셀" },
              { id: "est_list", label: "⑥ 매칭 리스트" },
            ],
          },
          {
            id: "moving-form",
            label: "이사",
            items: [
              { id: "input_step1", label: "이사종류" },
              { id: "input_step2", label: "이사일/시간대" },
              { id: "input_step3", label: "출발지" },
              { id: "input_step4", label: "도착지" },
              { id: "input_step5", label: "이삿짐 입력" },
              { id: "input_step6", label: "개인정보" },
            ],
          },
          {
            id: "cleaning-form",
            label: "이사청소",
            items: [
              { id: "cleaning_step1", label: "청소 희망일" },
              { id: "cleaning_step2", label: "청소 장소 정보" },
              { id: "cleaning_step3", label: "연락처 정보" },
              { id: "cleaning_step4", label: "연락처 정보 (입력완료)" },
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
  const [currentScreen, setCurrentScreen] = useState(EMBED_SCREEN ?? "cxs_contact");
  const [history, setHistory] = useState<string[]>([]);
  const [resetKey, setResetKey] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // 임베드 모드: 인-피처 네비게이션을 허브 메뉴 트리 하이라이트와 동기화
  useEffect(() => {
    if (!IS_EMBED) return;
    try {
      window.parent?.postMessage({ __pvNav: true, screen: currentScreen }, "*");
    } catch {
      /* noop */
    }
  }, [currentScreen]);

  const copyToClipboard = (text: string, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const variationPrompt = `지금 화면은 지우고 새 화면으로 프로토타이핑을 해보려고 해.
이번 프로토타이핑의 목적은 같은 화면을 여러 버전으로 만들어서 비교해 보고, 그중 더 나은 디자인을 선택하기 위해서야.

먼저 시안 A부터 공유할게.
첨부한 디자인이랑 가이드라인을 참고해서 똑같이 구현해 줘. 시간이 좀 걸리더라도 가이드라인을 제대로 지켰는지 꼭 확인하고, 빠진 요소 없이 전부 구현됐는지도 체크해 줬으면 해.`;

  const uxFlowPrompt = `우리는 앱에 새 기능을 추가하려 해.
사용자가 이미지를 업로드하면 AI가 유사한 상품을 찾아주는 기능이야.
이번 프로젝트는 대대적인 리뉴얼이 아니라 운영 기능을 확장하는 거라서, 기존 앱의 UX/UI 흐름을 크게 바꾸지 않고 자연스럽게 이어져야 해.

그럼 이 프로토타입을 만들려면 내가 어떤 화면들을 먼저 제공해야 할까?
예: 홈 화면, 이미지 업로드 화면, 상품 리스트 화면 등`;

  const handleNavigate = (screen: string) => {
    setHistory((prev) => [...prev, currentScreen]);
    setCurrentScreen(screen);
  };

  const handleGoBack = () => {
    if (history.length > 0) {
      const prevScreen = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setCurrentScreen(prevScreen);
    } else {
      setCurrentScreen("var_a");
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "var_a":
        return <MovingRequestScreenVarA onNavigate={handleNavigate} />;
      case "input_a":
        return <InputFormScreenVarA onNavigate={handleNavigate} />;
      case "input_step1":
        return <InputFlowScreen key={`step1-${resetKey}`} onNavigate={handleNavigate} initialStep={1} />;
      case "input_step2":
        return <InputFlowScreen key={`step2-${resetKey}`} onNavigate={handleNavigate} initialStep={2} />;
      case "input_step3":
        return <InputFlowScreen key={`step3-${resetKey}`} onNavigate={handleNavigate} initialStep={3} />;
      case "input_step4":
        return <InputFlowScreen key={`step4-${resetKey}`} onNavigate={handleNavigate} initialStep={4} />;
      case "input_step5":
        return <InputFlowScreen key={`step5-${resetKey}`} onNavigate={handleNavigate} initialStep={5} />;
      case "input_step6":
        return <InputFlowScreen key={`step6-${resetKey}`} onNavigate={handleNavigate} initialStep={6} />;
      case "cleaning_step1":
        return (
          <CleaningFlowScreen
            key={`cleaning1-${resetKey}`}
            onNavigate={handleNavigate}
            initialStep={1}
            userScenario="moving"
            hasRecentMovingQuote
            prefillDate={false}
            prefillTime={false}
          />
        );
      case "cleaning_step2":
        return (
          <CleaningFlowScreen
            key={`cleaning2-${resetKey}`}
            onNavigate={handleNavigate}
            initialStep={2}
            userScenario="moving"
            prefillLocation
          />
        );
      case "cleaning_step3":
        return (
          <CleaningFlowScreen
            key={`cleaning3-${resetKey}`}
            onNavigate={handleNavigate}
            initialStep={3}
            userScenario="general"
            prefillContact={false}
          />
        );
      case "cleaning_step4":
        return (
          <CleaningFlowScreen
            key={`cleaning4-${resetKey}`}
            onNavigate={handleNavigate}
            initialStep={3}
            userScenario="moving"
            prefillContact
            showAuthButton={false}
          />
        );
      case "cxs_contact":
      case "cxs_crosssell":
      case "cxs_type":
      case "cxs_departure":
      case "cxs_confirm":
      case "cxs_list": {
        const view = currentScreen.replace("cxs_", "") as CrossSellView;
        return (
          <ConstructionCrossSellFlowScreen
            key={`${currentScreen}-${resetKey}`}
            onNavigate={handleNavigate}
            initialView={view}
          />
        );
      }
      case "est_home":
      case "est_form":
      case "est_belongings":
      case "est_belongings_photo":
      case "est_belongings_manual":
      case "est_belongings_detail":
      case "est_confirm":
      case "est_crosssell":
      case "est_list": {
        const view = currentScreen.replace("est_", "") as EstimateView;
        return (
          <EstimateFunnelFlowScreen
            key={`${currentScreen}-${resetKey}`}
            onNavigate={handleNavigate}
            initialView={view}
          />
        );
      }
      case "construction_step1":
        return <ConstructionFlowScreen key={`cstr1-${resetKey}`} onNavigate={handleNavigate} initialStep={1} />;
      case "construction_step2":
        return <ConstructionFlowScreen key={`cstr2-${resetKey}`} onNavigate={handleNavigate} initialStep={2} />;
      case "construction_step3":
        return <ConstructionFlowScreen key={`cstr3-${resetKey}`} onNavigate={handleNavigate} initialStep={3} />;
      case "construction_step4":
        return <ConstructionFlowScreen key={`cstr4-${resetKey}`} onNavigate={handleNavigate} initialStep={4} />;
      case "construction_step5":
        return <ConstructionFlowScreen key={`cstr5-${resetKey}`} onNavigate={handleNavigate} initialStep={5} />;
      case "construction_step6":
        return <ConstructionFlowScreen key={`cstr6-${resetKey}`} onNavigate={handleNavigate} initialStep={6} />;
      case "responsibility_intro":
        return <ResponsibilityServiceScreen onNavigate={handleNavigate} onBack={handleGoBack} />;
      default:
        return (
          <ConstructionCrossSellFlowScreen
            key={`default-${resetKey}`}
            onNavigate={handleNavigate}
            initialView="contact"
          />
        );
    }
  };

  // 임베드 모드: studio 크롬 없이 feature 화면만 (허브 iframe 이 프레임 크기를 담당)
  if (IS_EMBED) {
    return <div className="w-full min-h-full bg-white">{renderScreen()}</div>;
  }

  const controlPanel = (
    <div className="flex items-start gap-2">
      {isPanelOpen && !isPopoverOpen && (
        <button
          onClick={() => setIsPanelOpen(false)}
          className="bg-[var(--bg-neutral)] rounded-full shadow-lg border border-[var(--border-neutral)] p-2.5 hover:bg-[var(--bg-weak)] transition-default cursor-pointer"
          aria-label="컨트롤 패널 접기"
        >
          <ChevronRight className="size-5 text-[var(--fg-neutral)]" />
        </button>
      )}

      {!isPanelOpen && (
        <button
          onClick={() => setIsPanelOpen(true)}
          className="bg-[var(--bg-neutral)] rounded-full shadow-lg border border-[var(--border-neutral)] p-2.5 hover:bg-[var(--bg-weak)] transition-default cursor-pointer"
          aria-label="컨트롤 패널 열기"
        >
          <ChevronLeft className="size-5 text-[var(--fg-neutral)]" />
        </button>
      )}

      {isPanelOpen && (
        <div className="bg-[var(--bg-neutral)] rounded-2xl shadow-lg border border-[var(--border-neutral)] p-3 w-[240px] max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar flex flex-col">
            <PrototypeNavMenu
              tabs={PANEL_TABS}
              currentScreen={currentScreen}
              onSelect={setCurrentScreen}
            />

          <div className="my-3 divider-horizontal shrink-0" />

          <div className="space-y-0.5 shrink-0">
            <button
                onClick={() => {
                  setCurrentScreen("cxs_contact");
                  setResetKey((prev) => prev + 1);
                }}
              className="w-full px-3 py-2 rounded-lg text-left hover:bg-[var(--bg-weak)] transition-default flex items-center gap-2 text-[var(--fg-neutral)] cursor-pointer"
            >
              <RotateCcw className="size-4" />
              <span className="text-body-14">Restart</span>
            </button>

            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <button
                  className="w-full px-3 py-2 rounded-lg text-left hover:bg-[var(--bg-weak)] transition-default flex items-center gap-2 text-[var(--fg-neutral)] cursor-pointer"
                  aria-label="템플릿 이용 가이드"
                >
                  <HelpCircle className="size-4" />
                  <span className="text-body-14">도움말</span>
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                side="left"
                sideOffset={16}
                alignOffset={-136}
                className="w-[500px] max-h-[80vh] p-0 rounded-2xl flex flex-col z-[60]"
                onInteractOutside={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.closest('button[aria-label="프롬프트 복사"]')) {
                    e.preventDefault();
                  }
                }}
                onFocusOutside={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.tagName === "TEXTAREA") {
                    e.preventDefault();
                  }
                }}
              >
                <div className="px-5 pt-5 pb-3 border-b border-[var(--border-neutral)] flex items-start justify-between shrink-0">
                  <div>
                    <h3 className="mb-1.5 text-heading-16 font-semibold">템플릿 이용 가이드</h3>
                    <p className="text-muted-foreground text-detail-12">
                      참고용으로 작성된 예시 프롬프트입니다. 필요에 맞게 수정해서 사용하세요.
                    </p>
                  </div>
                  <PopoverClose className="rounded-md p-1 hover:bg-[var(--bg-weak)] transition-default cursor-pointer">
                    <X className="size-4 text-[var(--fg-weak)]" />
                  </PopoverClose>
                </div>

                <div className="p-5 space-y-5 overflow-y-auto custom-scrollbar">
                  <div className="space-y-2">
                    <h4 className="text-detail-12 font-semibold">하나의 화면을 여러 시안으로 베리에이션 때</h4>
                    <div className="group relative bg-[var(--bg-weak)] border border-[var(--border-neutral)] rounded-lg p-3">
                      <button
                        type="button"
                        onClick={(e) => copyToClipboard(variationPrompt, "variation", e)}
                        className="absolute top-2 right-2 p-1 rounded bg-[var(--bg-neutral)]/80 hover:bg-[var(--bg-neutral)] border border-[var(--border-neutral)] transition-default opacity-0 group-hover:opacity-100 cursor-pointer"
                        aria-label="프롬프트 복사"
                      >
                        {copiedPrompt === "variation" ? (
                          <Check className="size-3 text-green-600" />
                        ) : (
                          <Copy className="size-3 text-[var(--fg-foreground-weak)]" />
                        )}
                      </button>
                      <pre className="whitespace-pre-wrap leading-relaxed text-[var(--fg-neutral)] text-detail-12 font-sans">
                        {variationPrompt}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-detail-12 font-semibold">기존 UX를 유지하며 새로운 플로우를 구상할 때</h4>
                    <div className="group relative bg-[var(--bg-weak)] border border-[var(--border-neutral)] rounded-lg p-3">
                      <button
                        type="button"
                        onClick={(e) => copyToClipboard(uxFlowPrompt, "uxflow", e)}
                        className="absolute top-2 right-2 p-1 rounded bg-[var(--bg-neutral)]/80 hover:bg-[var(--bg-neutral)] border border-[var(--border-neutral)] transition-default opacity-0 group-hover:opacity-100 cursor-pointer"
                        aria-label="프롬프트 복사"
                      >
                        {copiedPrompt === "uxflow" ? (
                          <Check className="size-3 text-green-600" />
                        ) : (
                          <Copy className="size-3 text-[var(--fg-foreground-weak)]" />
                        )}
                      </button>
                      <pre className="whitespace-pre-wrap leading-relaxed text-[var(--fg-neutral)] text-detail-12 font-sans">
                        {uxFlowPrompt}
                      </pre>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <PreviewStudio aside={controlPanel} resetKey={resetKey}>
      {renderScreen()}
    </PreviewStudio>
  );
}
