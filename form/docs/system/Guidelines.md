# **디자인 구현 가이드라인**

## 환경 조건

- 375x812 크기의 프레임으로 디자인을 구현합니다. 프레임의 외부는 5px의 검은색 테두리로 사각이 둥근(radius 32px) 형태입니다.
- 이 프레임은 뷰포트 중앙에 위치하며, 프레임 바깥 영역은 #EAEAEA 배경색으로 채웁니다.
- **App.tsx는 항상 아래와 같이 구현하고, import 하는 파일에 대한 코드 이외에는 수정하지 않습니다.**

## App.tsx 구조

**모든 앱은 멀티 화면 구조로 구현합니다. 단일 화면이라도 확장성을 위해 동일한 패턴을 사용합니다.**

### 🚨 중요: 화면 네비게이션 함수 사용 규칙

**복잡한 상태 관리가 필요한 경우 (오버레이, 애니메이션 등), 반드시 네비게이션 함수를 만들어 사용해야 합니다:**

1. **단순한 경우** - `setCurrentScreen` 직접 사용:

   ```tsx
   // 상태가 currentScreen 하나만 있는 경우
   onClick={() => setCurrentScreen(screen.id)}
   ```

2. **복잡한 경우** - `handleNavigate` 같은 래퍼 함수 필수:

   ```tsx
   // 여러 상태가 연동되는 경우 (baseScreen, showUpload 등)
   const handleNavigate = (screen: string) => {
     setCurrentScreen(screen);
     // 다른 상태들도 함께 업데이트
     setBaseScreen(screen);
     setShowUpload(false);
     // ...
   };

   // 컨트롤 패널과 모든 곳에서 동일한 함수 사용
   onClick={() => handleNavigate(screen.id)}
   ```

3. **일관성 유지 원칙**:
   - 앱 내 모든 화면 전환은 **동일한 네비게이션 함수**를 사용해야 합니다
   - 컨트롤 패널의 화면 선택 버튼도 예외가 아닙니다
   - Restart 버튼도 동일한 패턴을 따라야 합니다
   - 네비게이션 함수가 있다면 `setCurrentScreen`을 직접 호출하지 마세요

```tsx
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "./components/ui/popover";
import { HelpCircle, Copy, Check, X, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("main");
  const [resetKey, setResetKey] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // 구현된 화면 목록 (실제 화면에 맞게 수정)
  const screens = [
    { id: "main", name: "메인 화면" },
    { id: "login", name: "로그인" },
    { id: "signup", name: "회원가입" },
    { id: "profile", name: "프로필" },
    { id: "settings", name: "설정" }
  ];

  // 🚨 복잡한 상태 관리가 필요한 경우, 이런 식으로 네비게이션 함수를 만드세요
  // 예시: 여러 상태를 동시에 관리해야 하는 경우
  // const handleNavigate = (screen: string) => {
  //   setCurrentScreen(screen);
  //   setBaseScreen(screen);
  //   setShowUpload(false);
  //   // ... 기타 상태 업데이트
  // };

  const renderScreen = () => {
    switch (currentScreen) {
      case "main": return <MainComponent onNavigate={setCurrentScreen} />;
      case "login": return <LoginComponent onNavigate={setCurrentScreen} />;
      case "signup": return <SignupComponent onNavigate={setCurrentScreen} />;
      case "profile": return <ProfileComponent onNavigate={setCurrentScreen} />;
      case "settings": return <SettingsComponent onNavigate={setCurrentScreen} />;
      default: return <MainComponent onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="size-full bg-[#eaeaea] flex items-center justify-center relative">
      {/* 프로토타입 컨트롤 패널 */}
      <div className="absolute top-4 right-4 z-50 flex items-start gap-2">
        {/* 접기 버튼 (패널이 열려있고 팝오버가 닫혀있을 때만 표시) */}
        {isPanelOpen && !isPopoverOpen && (
          <button
            onClick={() => setIsPanelOpen(false)}
            className="bg-white rounded-full shadow-lg border border-gray-200 p-2.5 hover:bg-gray-50 transition-colors mt-0"
            aria-label="컨트롤 패널 접기"
          >
            <ChevronRight className="size-5 text-gray-700" />
          </button>
        )}

        {/* 펼치기 버튼 (패널이 접혀있을 때만 표시) */}
        {!isPanelOpen && (
          <button
            onClick={() => setIsPanelOpen(true)}
            className="bg-white rounded-full shadow-lg border border-gray-200 p-2.5 hover:bg-gray-50 transition-colors"
            aria-label="컨트롤 패널 열기"
          >
            <ChevronLeft className="size-5 text-gray-700" />
          </button>
        )}

        {/* 컨트롤 패널 */}
        {isPanelOpen && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-3 w-[220px]">
          {/* 화면 선택 섹션 */}
          <div className="space-y-2">
            <p className="text-xs text-gray-500 px-1.5">화면 선택</p>

            {/* 화면 옵션들 */}
            <div className="space-y-1.5">
              {screens.map(screen => (
                <button
                  key={screen.id}
                  onClick={() => setCurrentScreen(screen.id)}
                  {/* 🚨 복잡한 상태 관리가 필요한 경우: onClick={() => handleNavigate(screen.id)} */}
                  className={`w-full px-3 py-2 rounded-lg text-left transition-colors duration-200 flex items-center justify-between ${
                    currentScreen === screen.id
                      ? 'bg-[#0F172A] text-white'
                      : 'bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm">{screen.name}</span>
                  {currentScreen === screen.id && (
                    <Check className="size-4" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 디바이더 */}
          <div className="my-3 border-t border-gray-200" />

          {/* Restart & 도움말 버튼 */}
          <div className="space-y-0.5">
            <button
              onClick={() => {
                setCurrentScreen(screens[0].id);
                {/* 🚨 복잡한 상태 관리가 필요한 경우:
                    handleNavigate(screens[0].id);
                    setResetKey(prev => prev + 1);
                    또는 모든 상태를 초기화하는 로직 추가 */}
                setResetKey(prev => prev + 1);
              }}
              className="w-full px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 text-gray-900"
            >
              <RotateCcw className="size-4" />
              <span className="text-sm">Restart</span>
            </button>

            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <button
                  className="w-full px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 text-gray-900"
                  aria-label="템플릿 이용 가이드"
                >
                  <HelpCircle className="size-4" />
                  <span className="text-sm">도움말</span>
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                side="left"
                sideOffset={16}
                alignOffset={-136}
                className="w-[500px] max-h-[80vh] p-0 rounded-2xl flex flex-col"
                onInteractOutside={(e) => {
                  // Prevent closing when clicking copy buttons
                  const target = e.target as HTMLElement;
                  if (target.closest('button[aria-label="프롬프트 복사"]')) {
                    e.preventDefault();
                  }
                }}
                onFocusOutside={(e) => {
                  // Prevent closing when focus moves to textarea during copy
                  const target = e.target as HTMLElement;
                  if (target.tagName === 'TEXTAREA') {
                    e.preventDefault();
                  }
                }}
              >
                {/* 헤더 - 고정 */}
                <div className="px-5 pt-5 pb-3 border-b border-gray-200 flex items-start justify-between shrink-0">
                  <div>
                    <h3 className="mb-1.5 font-semibold">템플릿 이용 가이드</h3>
                    <p className="text-muted-foreground text-xs">
                      참고용으로 작성된 예시 프롬프트입니다. 필요에 맞게 수정해서 사용하세요.
                    </p>
                  </div>
                  <PopoverClose className="rounded-md p-1 hover:bg-gray-100 transition-colors">
                    <X className="size-4 text-gray-500" />
                  </PopoverClose>
                </div>

                {/* 콘텐츠 - 스크롤 가능 */}
                <div className="p-5 space-y-5 overflow-y-auto">
                  {/* 화면 베리에이션 */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold">하나의 화면을 여러 시안으로 베리에이션할 때</h4>
                    <div className="group relative bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <button
                        type="button"
                        onClick={(e) => copyToClipboard(variationPrompt, 'variation', e)}
                        className="absolute top-2 right-2 p-1 rounded bg-white/80 hover:bg-white border border-gray-300 transition-all duration-200 opacity-0 group-hover:opacity-100"
                        aria-label="프롬프트 복사"
                      >
                        {copiedPrompt === 'variation' ? (
                          <Check className="size-3 text-green-600" />
                        ) : (
                          <Copy className="size-3 text-gray-600" />
                        )}
                      </button>
                      <pre className="whitespace-pre-wrap leading-relaxed text-gray-700 text-xs">
{`지금 화면은 지우고 새 화면으로 프로토타이핑을 해보려고 해.
이번 프로토타이핑의 목적은 같은 화면을 여러 버전으로 만들어서 비교해 보고, 그중 더 나은 디자인을 선택하기 위해서야.

먼저 시안 A부터 공유할게.
첨부한 디자인이랑 가이드라인을 참고해서 똑같이 구현해 줘. 시간이 좀 걸리더라도 가이드라인을 제대로 지켰는지 꼭 확인하고, 빠진 요소 없이 전부 구현됐는지도 체크해 줬으면 해.`}
                      </pre>
                    </div>
                  </div>

                  {/* 기존 UX 유지하며 새로운 플로우 구상 */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold">기존 UX를 유지하며 새로운 플로우를 구상할 때</h4>
                    <div className="group relative bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <button
                        type="button"
                        onClick={(e) => copyToClipboard(uxFlowPrompt, 'uxflow', e)}
                        className="absolute top-2 right-2 p-1 rounded bg-white/80 hover:bg-white border border-gray-300 transition-all duration-200 opacity-0 group-hover:opacity-100"
                        aria-label="프롬프트 복사"
                      >
                        {copiedPrompt === 'uxflow' ? (
                          <Check className="size-3 text-green-600" />
                        ) : (
                          <Copy className="size-3 text-gray-600" />
                        )}
                      </button>
                      <pre className="whitespace-pre-wrap leading-relaxed text-gray-700 text-xs">
{`우리는 앱에 새 기능을 추가하려 해.
사용자가 이미지를 업로드하면 AI가 유사한 상품을 찾아주는 기능이야.
이번 프로젝트는 대대적인 리뉴얼이 아니라 운영 기능을 확장하는 거라서, 기존 앱의 UX/UI 흐름을 크게 바꾸지 않고 자연스럽게 이어져야 해.

그럼 이 프로토타입을 만들려면 내가 어떤 화면들을 먼저 제공해야 할까?
예: 홈 화면, 이미지 업로드 화면, 상품 리스트 화면 등`}
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

      {/* 디바이스 프레임 */}
      <div className="relative w-[385px] h-[822px] bg-black rounded-[32px] p-[5px]">
        <div key={resetKey} className="w-[375px] h-[812px] bg-white rounded-[27px] overflow-y-auto relative">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
```

## 🔴 MANDATORY: 메인 컴포넌트 레이아웃 구조 (절대 준수)

**모든 메인 컴포넌트는 반드시 다음 3단 고정 레이아웃 구조를 따라야 합니다:**

```tsx
export default function MainComponent({
  onNavigate,
}: {
  onNavigate?: (screen: string) => void;
}) {
  return (
    <div className="bg-[#eaebef] relative size-full">
      {/* 🔧 상단 고정 영역 - 절대 변경 금지 */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Statusbar />
        <TopNavigation />
      </div>

      {/* 🔧 바디 영역 - 상단/하단 높이에 맞춰 동적 계산 필수 */}
      <div className="absolute left-0 right-0 top-[상단영역높이px] bottom-[하단영역높이px] overflow-y-auto">
        <div className="content-stretch flex flex-col gap-[10px] items-start">
          {/* 모든 스크롤 가능한 콘텐츠 섹션들 */}
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>

      {/* 🔧 하단 고정 영역 - 절대 변경 금지 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <StickyFooter />
      </div>
    </div>
  );
}
```

### 🚫 절대 금지 사항

1. **단일 스크롤 구조 금지**: 모든 요소를 하나의 스크롤 컨테이너에 배치하는 것 금지
2. **overflow-hidden 사용 금지**: 콘텐츠가 가려질 수 있으므로 절대 사용 금지
3. **헤더/푸터 스크롤 금지**: 상단/하단 고정 요소가 콘텐츠와 함께 스크롤되게 구현 금지
4. **relative 포지셔닝만 사용 금지**: 고정 레이아웃에 absolute 포지셔닝 필수
5. **높이 계산 누락 금지**: 바디 영역의 top/bottom 값 정확히 계산하지 않는 것 금지
6. **padding 방식 금지**: 바디 영역에 `padding-top/bottom` 사용하지 말고 `top-[]/bottom-[]` 사용 필수

### ✅ 필수 적용 사항

1. **상단 고정 영역**: `absolute top-0 left-0 right-0 z-10`
2. **바디 스크롤 영역**: `absolute left-0 right-0 top-[상단높이px] bottom-[하단높이px] overflow-y-auto`
3. **하단 고정 영역**: `absolute bottom-0 left-0 right-0 z-10`
4. **동적 높이 계산**: 상단/하단 영역의 실제 높이를 측정하여 바디 영역에 정확히 적용
5. **z-index 적용**: 고정 영역은 반드시 `z-10` 이상
6. **배경색 통일**: 메인 컨테이너 `bg-[#eaebef]` 고정 사용

## 🔧 높이 계산 방법

**상단/하단 영역의 실제 높이를 디자인에서 측정하여 정확히 적용해야 합니다:**

1. **상단 영역 높이 계산**:
   - Status Bar 높이 측정 (예: 44px, 50px 등)
   - Navigation Bar 높이 측정 (예: 44px, 56px 등)
   - **상단 총 높이** = Status Bar + Navigation Bar

2. **하단 영역 높이 계산**:
   - Button/CTA 영역 높이 측정 (예: 60px, 80px 등)
   - Footer/Indicator 영역 높이 측정 (예: 34px, 없으면 0px)
   - **하단 총 높이** = Button 영역 + Footer 영역

3. **바디 영역 적용**:

   ```tsx
   // 예시: 상단 88px, 하단 94px인 경우
   <div className="absolute left-0 right-0 top-[88px] bottom-[94px] overflow-y-auto">

   // 예시: 상단 100px, 하단 60px인 경우
   <div className="absolute left-0 right-0 top-[100px] bottom-[60px] overflow-y-auto">
   ```

## 🔧 컴포넌트 구조 강제 규칙

### Status Bar (디자인에 따라 높이 가변)

```tsx
function Statusbar() {
  return (
    <div className="bg-white h-[실제디자인높이px] relative shrink-0 w-full">
      {/* Battery, WiFi, Cellular, Time 구현 */}
    </div>
  );
}
```

### Top Navigation (디자인에 따라 높이 가변)

```tsx
function TopNavigation() {
  return (
    <div className="bg-white h-[실제디자인높이px] relative shrink-0 w-full">
      {/* Left Icons, Center Title, Right Icons 구현 */}
    </div>
  );
}
```

### Sticky Footer (디자인에 따라 높이 가변)

```tsx
function StickyFooter() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      {/* Button Area */}
      <div className="bg-white h-[실제디자인높이px] relative shrink-0 w-full">
        {/* 결제 버튼 등 */}
      </div>

      {/* Footer Info (있는 경우만) */}
      <div className="bg-white h-[실제디자인높이px] relative shrink-0 w-full">
        {/* Home Indicator 등 */}
      </div>
    </div>
  );
}
```

## 프로토타입 컨트롤 패널

- **위치**: 프레임 바깥 우상단 (`absolute top-4 right-4 z-50 flex items-start gap-2`)
- **형태**: 흰색 카드 형태 (rounded-2xl, shadow-lg, 220px 너비)
- **접기/펼치기 기능**:
  - **접기 버튼** (ChevronRight 아이콘):
    - 패널이 열려있고(`isPanelOpen === true`) 팝오버가 닫혀있을 때(`isPopoverOpen === false`)만 표시
    - 둥근 버튼 형태 (`rounded-full`, `shadow-lg`, `p-2.5`)
    - 클릭 시 `setIsPanelOpen(false)`로 패널 접기
    - 아이콘: `ChevronRight` (size-5, text-gray-700)
  - **펼치기 버튼** (ChevronLeft 아이콘):
    - 패널이 접혀있을 때(`isPanelOpen === false`)만 표시
    - 둥근 버튼 형태 (`rounded-full`, `shadow-lg`, `p-2.5`)
    - 클릭 시 `setIsPanelOpen(true)`로 패널 펼치기
    - 아이콘: `ChevronLeft` (size-5, text-gray-700)
  - **패널 본체**: `isPanelOpen === true`일 때만 렌더링
- **구성 요소**:
  - **화면 선택 섹션**:
    - "화면 선택" 텍스트 라벨 (text-xs, 아이콘 없음)
    - 모든 화면 옵션을 버튼 형태로 나열 (드롭다운 아님)
    - 선택된 화면: 검은색 배경(`bg-[#0F172A]`) + 흰색 텍스트 + 체크마크 아이콘 (size-4)
    - 선택되지 않은 화면: 흰색 배경 + 검은색 텍스트 + hover:bg-gray-50
  - **디바이더**: 화면 선택과 액션 버튼 사이 구분선
  - **Restart 버튼**:
    - RotateCcw 아이콘 (lucide-react, size-4)과 "Restart" 텍스트 (text-sm)
    - 클릭 시 첫 번째 화면(`screens[0].id`)으로 이동하고 **모든 컴포넌트 상태를 초기화** (key prop 변경으로 강제 리마운트)
  - **도움말 버튼**:
    - HelpCircle 아이콘 (size-4)과 "도움말" 텍스트 (text-sm)
    - 클릭 시 템플릿 이용 가이드 팝업 토글
- **스타일링**:
  - 패널 내부 요소: `p-3` 패딩, `space-y-2` (화면 선택 섹션), `space-y-1.5` (화면 옵션들), `space-y-0.5` (Restart & 도움말 버튼)
  - 모든 버튼: `w-full` 너비, `px-3 py-2` 패딩, `rounded-lg`, `text-sm`, 좌측 정렬
  - 화면 선택 라벨: `px-1.5`
  - 디바이더: `my-3`
  - `z-50`으로 최상단 레이어에 배치
  - 호버 효과: hover:bg-gray-50 (선택되지 않은 항목)
- **적용 대상**: 모든 앱에서 항상 포함 (테스트 편의성)
- **장점**:
  - 각 화면을 개별적으로 테스트 가능
  - 모든 화면이 한눈에 보여 빠른 네비게이션
  - 순차적 탐색 없이 바로 원하는 화면 접근
  - Restart로 완전한 초기 상태 복원 (입력값, 선택값, 스크롤 위치 등 모두 초기화)
  - 효율적인 프로토타입 검증 워크플로우
  - 도움말을 통해 템플릿 사용법 즉시 확인 가능
  - 접기/펼치기 기능으로 화면을 넓게 볼 수 있음
  - 팝오버 열림 시 접기 버튼 자동 숨김으로 UI 충돌 방지

### 도움말 팝업 구현

- **컴포넌트**: Popover (shadcn/ui) 사용 - **Controlled Component**로 구현
  - `open={isPopoverOpen}` - 팝오버 열림/닫힘 상태 제어
  - `onOpenChange={setIsPopoverOpen}` - 상태 변경 핸들러
  - 팝오버 상태는 접기 버튼 표시 여부 제어에 사용됨
- **트리거**: 컨트롤 패널 하단의 "도움말" 버튼 (HelpCircle 아이콘 + 텍스트)
- **위치**: `align="start" side="left" sideOffset={16} alignOffset={-136}` - 도움말 버튼의 좌측에 표시, 컨트롤 패널과 16px 간격
- **스타일**:
  - Popover 너비: 500px
  - 최대 높이: 80vh
  - border-radius: rounded-2xl (컨트롤 패널과 동일)
  - 상위 컨테이너: p-0 (패딩 없음), flex flex-col (플렉스 컨테이너)
- **구조**:
  - **헤더 영역** (패딩 px-5 pt-5 pb-3, 하단 디바이더, shrink-0으로 고정):
    - 제목: "템플릿 이용 가이드" (h3, font-semibold)
    - 설명: "참고용으로 작성된 예시 프롬프트입니다. 필요에 맞게 수정해서 사용하세요." (text-xs)
    - X 버튼: 우측 상단에 PopoverClose 컴포넌트로 닫기 버튼 배치 (size-4 아이콘, p-1, hover:bg-gray-100)
    - **헤더는 스크롤 시에도 항상 고정되어 표시됨**
  - **콘텐츠 영역** (패딩 p-5, overflow-y-auto로 스크롤 가능):
    - 두 가지 시나리오를 나열 형식으로 제공 (아코디언 없음)
    - 섹션 간 간격: space-y-5
    - 섹션 내부 간격: space-y-2
    - 섹션 제목: text-xs font-semibold
    - 프롬프트 박스: p-3, text-xs
    - **콘텐츠 영역만 스크롤됨**
- **시나리오**:
  1. **하나의 화면을 여러 시안으로 베리에이션할 때**
  2. **기존 UX를 유지하며 새로운 플로우를 구상할 때**
- **예시 프롬프트**:
  - **시나리오 1 - 화면 베리에이션**:

    ```
    지금 화면은 지우고 새 화면으로 프로토타이핑을 해보려고 해.
    이번 프로토타이핑의 목적은 같은 화면을 여러 버전으로 만들어서 비교해 보고, 그중 더 나은 디자인을 선택하기 위해서야.

    먼저 시안 A부터 공유할게.
    첨부한 디자인이랑 가이드라인을 참고해서 똑같이 구현해 줘. 시간이 좀 걸리더라도 가이드라인을 제대로 지켰는지 꼭 확인하고, 빠진 요소 없이 전부 구현됐는지도 체크해 줬으면 해.
    ```

  - **시나리오 2 - 기존 UX 유지하며 새로운 플로우 구상**:

    ```
    우리는 앱에 새 기능을 추가하려 해.
    사용자가 이미지를 업로드하면 AI가 유사한 상품을 찾아주는 기능이야.
    이번 프로젝트는 대대적인 리뉴얼이 아니라 운영 기능을 확장하는 거라서, 기존 앱의 UX/UI 흐름을 크게 바꾸지 않고 자연스럽게 이어져야 해.

    그럼 이 프로토타입을 만들려면 내가 어떤 화면들을 먼저 제공해야 할까?
    예: 홈 화면, 이미지 업로드 화면, 상품 리스트 화면 등
    ```

  - 각 프롬프트 박스는 회색 배경(bg-gray-50)의 코드 블록 형태로 표시
  - 프롬프트 박스에 호버 시 우측 상단에 복사 버튼 표시 (size-3 아이콘, p-1)
- **동작**:
  - 도움말 버튼을 클릭하면 팝업이 토글됨
  - 자동으로 열리지 않으며, 사용자가 명시적으로 버튼을 클릭해야 함
  - X 버튼 클릭 시 팝오버가 닫힘 (PopoverClose 사용)
  - 각 프롬프트 박스에 마우스 호버 시 복사 버튼이 나타남
  - 복사 버튼 클릭 시 해당 프롬프트가 클립보드에 복사되고, 2초간 체크마크 아이콘으로 변경됨
  - 복사 버튼 클릭 시 팝오버는 닫히지 않음 (onFocusOutside 핸들러로 textarea 포커스 이동 차단)
- **배치 이점**:
  - 좌측 배치로 컨트롤 패널과 16px 간격을 두고 나란히 배치
  - 500px 너비의 팝오버가 충분한 공간에 표시됨
  - 디바이스 프레임을 가리지 않음
  - rounded-2xl로 컨트롤 패널과 시각적으로 일관성 유지

## 프레임 & 컨테인먼트

- **뷰포트(Viewport)**: 사용자가 보는 전체 화면
- **프레임(Frame)**: 실제 디자인이 구현되는 콘텐츠 영역 (375x812)
- 모든 화면은 프레임 컨테이너 내부에서만 동작해야 합니다.
- 상단/하단 고정 요소는 브라우저 뷰포트 기준이 아닌 **프레임 컨테이너 기준**으로 배치합니다.
- 요소가 프레임 경계를 벗어나지 않도록 제한합니다.
- **App.tsx의 디바이스 프레임**에는 `overflow-y-auto`를 사용하여 스크롤을 가능하게 합니다.
- **절대 `overflow-hidden`을 사용하지 마세요** - 이는 푸터나 하단 콘텐츠를 가릴 수 있습니다.

## 레이아웃 & 스타일

- **레이아웃**: 피그마 레이아웃과 동일하게 구현하며, Auto Layout 적용
- **반응형 대응**:
  - 프레임은 375x812 고정
- **컴포넌트 프레임 너비 보정**:
  - 피그마에서 너비가 지정되지 않은 경우 전체 너비를 자동으로 채웁니다.
  - 고정 너비(Fixed width)로 설정된 프레임은 그대로 유지합니다.
- **배경색**: 부모 프레임의 배경색을 적용합니다.
- **요소 배치 유지**: width가 늘어나도 간격과 배치를 유지합니다.
- **간격**: padding, margin, gap 등 모든 여백은 픽셀 단위로 정확히 구현합니다.
- **재사용성**: 모든 컴포넌트는 반복 가능한 단위로 구성합니다.

## 레이아웃 구현 상세 가이드

- 화면은 **상단 고정 영역 / 바디 영역(스크롤 가능) / 하단 고정 영역**으로 나눕니다.
- 하단 고정 영역은 첨부하는 디자인에 따라 존재하지 않을 수도 있습니다.
- 바디 영역은 **절대 padding 방식을 사용하지 말고** `absolute` 포지셔닝으로 정확한 위치 지정 필수

## 상단 고정 영역

- 프레임 기준으로 배치하며, 스크롤 시 항상 상단에 고정됩니다.
- 상태바(Status Bar) + 네비게이션 바(Navigation Bar)를 한 세트로 구성하고 항상 고정합니다.
- Status Bar는 **프레임 내부의 최상단(children 첫 번째 요소)**에 위치해야 합니다.
- **정확한 구현**: `absolute top-0 left-0 right-0 z-10`으로 배치합니다.
- **높이 계산**: Status Bar 높이 + Navigation Bar 높이 = 상단 총 높이
- Status Bar는 항상 다른 콘텐츠보다 z-index가 높아야 합니다.

## 하단 고정 영역

- 프레임 기준으로 배치하며, 스크롤 시 항상 하단에 고정됩니다.
- **범위**: 앱의 바텀 탭바(Tab Bar), 고정 CTA 바(Fixed CTA Bar)를 포함합니다.
- 바텀 탭바는 뷰포트 하단에 고정하며 Home Indicator를 포함합니다. → 본문과 독립적으로 항상 고정 노출됩니다.
- **정확한 구현**: `absolute bottom-0 left-0 right-0 z-10`으로 배치합니다.
- **높이 계산**: Button Area 높이 + Footer Info 높이(있는 경우) = 하단 총 높이

## 바디 영역(콘텐츠 영역)

- 헤더/푸터를 제외한 나머지 영역을 차지합니다.
- 반드시 세로 스크롤이 가능해야 하며, `overflow-y: auto` 처리가 필요합니다.
- 콘텐츠가 헤더/푸터에 가려지지 않도록 주의합니다.
- **정확한 구현**: `absolute left-0 right-0 top-[상단총높이px] bottom-[하단총높이px] overflow-y-auto`

## 절대 위치(absolute) 처리 규칙

- 피그마에서 absolute 포지셔닝을 사용하는 경우:
  - 상단/하단 고정 요소는 absolute/sticky 유지 가능
  - 바디 영역 내부 요소는 relative로 변환 후 margin/padding으로 배치
- 절대 위치를 무분별하게 사용하지 않고, 반드시 상단/본문/하단 레이아웃 안에서 재정렬합니다.

## 디자인 시스템 토큰 (Design System Tokens)

`/src/styles/theme.css`에 정의된 CSS 변수와 유틸리티 클래스를 반드시 사용해야 합니다. 하드코딩된 값 사용을 금지합니다.

### 1. Typography (폰트)
- **Font Family**: `Pretendard Variable` (기본 적용됨)
- **Utility Classes** (반드시 아래 클래스를 사용):
  - **Heading**:
    - `text-heading-38`: 38px / 50px / Bold
    - `text-heading-24`: 24px / 32px / Bold
    - `text-heading-20`: 20px / 28px / Bold
    - `text-heading-18`: 18px / 24px / Bold
    - `text-heading-16`: 16px / 22px / Bold
    - `text-heading-14`: 14px / 20px / Bold
  - **Body**:
    - `text-body-16`: 16px / 24px
    - `text-body-15`: 15px / 22px
    - `text-body-14`: 14px / 20px
    - `text-body-13`: 13px / 18px
  - **Detail**:
    - `text-detail-12`: 12px / 16px
    - `text-detail-10`: 10px / 12px
- **Font Weight**:
  - `font-regular` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700)

### 2. Colors (컬러)
하드코딩된 HEX 값 대신 반드시 다음 CSS 변수(`var(--name)`)를 사용하세요.

- **Background**:
  - `var(--bg-neutral)`: 기본 배경 (White / Dark: Gray-950)
  - `var(--bg-weak)`: 회색 배경 (Gray-50 / Dark: Gray-900)
  - `var(--bg-dim)`: 딤드 처리 (Black Alpha 60%)
- **Border**:
  - `var(--border-neutral)`: 기본 테두리
  - `var(--border-strong)`: 강조 테두리
- **Foreground (Text/Icon)**:
  - `var(--fg-neutral)`: 기본 텍스트 (Gray-900 / Dark: Gray-50)
  - `var(--fg-weak)`: 보조 텍스트 (Gray-400 / Dark: Gray-500)
  - `var(--fg-inverse)`: 반전 텍스트 (White / Dark: Gray-900)
- **Brand**:
  - `var(--bg-brand)`: 브랜드 메인 컬러 (#35C5F0)
  - `var(--bg-brand-weak)`: 브랜드 연한 배경 (#F0F8FC)
- **Semantic (상태)**:
  - Attention (Yellow): `var(--bg-attention)`, `var(--fg-attention)`
  - Critical (Red): `var(--bg-critical)`, `var(--fg-critical)`
  - Disabled: `var(--bg-disabled)`, `var(--fg-disabled)`

## 아이콘

- 디자인에 사용된 모든 SVG 아이콘을 추출하여 동일하게 적용
- SVG가 아닌 이미지을 경우 이미지를 추출하여 동일한 사이즈로 적용합니다.
- 아이콘 프레임 여백/바운딩 박스 보존: 아이콘 벡터(svg)를 감싸고 있는 프레임의 크기와 위치 및 배치, 아이콘의 사이즈와 위치와 배치를 디자인과 동일하게 구현합니다.
- 동일 패턴의 컴포넌트 안에 아이콘이나 이미지가 들어가는 자리가 있다면, 아이콘/이미지가 무엇이든 간에 항상 같은 크기와 같은 위치의 영역을 차지하도록 고정해주세요.
- 모든 아이콘은 SVG의 preserveAspectRatio="xMidYMid meet"을 사용하고, 컨테이너는 디자인의 바운딩 박스를 그대로 유지하며 가운데 정렬하세요.
- 아이콘 배치과 비율 유지: 컴포넌트 내 아이콘들은 반응형 대응으로 width가 늘어나도, 아이콘의 크기나 비율, 아이콘 간의 간��이나 배치(중앙/좌/우)를 동일하게 유지합니다.

## 이미지

- 디자인에 사용된 이미지를 모두 추출하여 동일하게 적용

## UI 패턴 원칙: 항목 입력 Button (선택형 버튼 그룹)

폼에서 옵션을 선택하는 버튼 그룹(방 개수, 베란다/화장실 개수, 복층 여부, 선호 시간대 등)에 적용하는 공통 원칙.
참조: Figma `O8dlcVJHtXfhuvZK3kAnEw` 노드 `7258-53270`(청소 장소 정보), `3595-17717`(선호 시간대 선택)

### i. 선택 상태 variant

- **선택됨 = ODS BoxButton `outlined`**: 흰색 배경 + `1.5px` 검정(`#141414`) 테두리 + 검정 레이블. 검정 solid 채움을 사용하지 않는다.
- **디폴트 = ODS BoxButton `normal`**: 흰색 배경 + `1px` `#E0E0E0` 테두리.
- 공통: 높이 `40px`(medium), radius `8px`, 레이블 14px Medium `#141414`, 버튼 간 gap `2px`.

### ii. 너비 규칙 (동일 섹션 = 동일 너비)

- 동일한 섹션 하위의 버튼은 **모두 동일한 너비**를 적용하고, 한 열(row)을 100% 너비로 채운다(fill).
- 옵션 개수가 열당 개수(n)로 나누어 떨어지지 않으면, **마지막 열의 버튼은 첫 열의 1/n 고정 너비를 그대로 유지**한다. 남는 공간을 채우기 위해 마지막 열 버튼을 늘리지 않는다.
  - 예: 시간대 오전 6개 (열당 4개) → 2번째 열의 2개 버튼도 1/4 너비 고정.
  - 구현: 컨테이너 `flex flex-wrap gap-[2px]` + 버튼 `width: calc((100% - gap × (n-1)) / n)` 고정.
- 열당 개수(n)는 레이블 길이에 따라 결정: 짧은 레이블(시간, 개수)은 4개, 긴 레이블(룸 타입)은 3개, 양자택일(있음/없음)은 2개.

### iii. 최소 너비 (레이블 길이 기준)

- 내부 레이블 텍스트 길이에 따라 `min-width 84~100px`를 적용한다.
  - 짧은 레이블 (2~4자: "없음", "1개", "6:00"): `min-width: 84px`
  - 긴 레이블 (5자 이상: "5룸 이상", "3개 이상"): `min-width: 100px`
- min-width 미만으로 줄어들 경우 다음 열로 wrap 한다.

## 공통 룰: 데스크탑 폼 콘텐츠 영역 (max-height + 스크롤 dim)

데스크탑 해상도의 폼 카드(560px 흰색 카드)의 콘텐츠 영역에 공통 적용하는 룰.
참조: Figma `O8dlcVJHtXfhuvZK3kAnEw` 노드 `7250-37178`

- **콘텐츠 영역 `max-height: 600px`** 적용. 초과분은 세로 스크롤 (`overflow-y: auto`).
- **스크롤이 발생하면(콘텐츠가 넘칠 때) 콘텐츠 영역 하단에 gradient dim 처리**:
  - 위치: 콘텐츠 영역 하단(고정 버튼 바로 위)에 absolute overlay, 콘텐츠 전체 너비
  - 높이: `50px`
  - 그라디언트: `linear-gradient(to bottom, rgba(255,255,255,0), #FFFFFF)`
  - `pointer-events: none`
- 스크롤이 발생하지 않는(콘텐츠가 600px 이내인) 화면에서는 dim을 노출하지 않는다.
- 스크롤이 끝(최하단)에 도달하면 dim을 숨겨 마지막 항목이 가려지지 않게 한다.