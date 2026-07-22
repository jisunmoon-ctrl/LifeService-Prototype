# **디자인 구현 가이드라인**

## 환경 조건

### 모바일 뷰 (Mobile View)
- 375x812 크기의 프레임으로 디자인을 구현합니다. 프레임의 외부는 5px의 검은색 테두리로 사각이 둥근(radius 32px) 형태입니다.
- 이 프레임은 뷰포트 중앙에 위치하며, 프레임 바깥 영역은 #EAEAEA 배경색으로 채웁니다.

### 데스크톱 뷰 (Desktop View)
- 기본 너비 1200px에서 시작하며, 가로 리사이즈 핸들을 통해 375px ~ 1920px 사이로 조절 가능합니다.
- 프레임은 뷰포트 중앙에 위치하며, 배경색은 #EAEAEA입니다.
- 768px를 breakpoint로 사용하여 모바일/데스크톱 레이아웃을 구분합니다.

### App.tsx 구조

**모든 앱은 멀티 화면 구조로 구현합니다. 단일 화면이라도 확장성을 위해 동일한 패턴을 사용합니다.**

### 뷰포트 모드 전환 기능

```tsx
// Viewport mode state
const [viewportMode, setViewportMode] = useState<'mobile' | 'desktop'>('mobile');
const [frameWidth, setFrameWidth] = useState(1200); // Desktop mode default width

// Mobile View (375px 고정)
{viewportMode === 'mobile' && (
  <div className="relative bg-[var(--fg-neutral)] rounded-[32px] p-[5px] shadow-2xl"
       style={{ height: 'calc(100vh - 32px)', maxHeight: '822px', aspectRatio: '385 / 822' }}>
    {/* Content */}
  </div>
)}

// Desktop View (가로 리사이즈 가능)
{viewportMode === 'desktop' && (
  <div className="flex items-center gap-2">
    <div ref={frameRef} style={{ width: `${frameWidth}px`, height: 'calc(100vh - 32px)' }}>
      {/* Content */}
    </div>
    {/* Resize Handle */}
  </div>
)}
```

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

## 🔴 MANDATORY: 메인 컴포넌트 레이아웃 구조 (절대 준수)

**모든 메인 컴포넌트는 반드시 다음 3단 고정 레이아웃 구조를 따라야 합니다:**

### 모바일 레이아웃 (375px)

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

### 데스크톱 레이아웃 (768px+)

```tsx
export default function MainComponentDesktop({
  onNavigate,
}: {
  onNavigate?: (screen: string) => void;
}) {
  return (
    <div className="bg-[#eaebef] relative size-full">
      {/* 상단 고정 영역 (선택적) */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Statusbar />
      </div>

      {/* 중앙 카드 컨테이너 (560px width) */}
      <div className="absolute left-0 right-0 top-[상단높이px] bottom-[하단높이px] overflow-y-auto flex justify-center">
        <div className="w-full max-w-[560px] bg-white rounded-lg shadow-lg p-6">
          {/* Content */}
        </div>
      </div>

      {/* 하단 고정 영역 (선택적) */}
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

## 프로토타입 컨트롤 패널

- **위치**: 프레임 바깥 우상단 (`absolute top-4 right-4 z-50 flex items-start gap-2`)
- **형태**: 흰색 카드 형태 (rounded-2xl, shadow-lg, 240px 너비)

### 컨트롤 패널 구성 요소

1. **화면 선택 섹션** (그룹화)
   - "입력폼" 그룹
   - "매칭 업체 페이지" 그룹
   
2. **뷰포트 모드 토글** ⭐ NEW
   - Mobile/Desktop 전환 버튼
   - Desktop 모드일 때 현재 너비 표시
   - 아이콘: `<Smartphone />`, `<Monitor />`

3. **버전 보관함**
   - 현재 화면 저장하기 버튼
   - 저장된 버전 목록 (로컬 스토리지)

4. **Restart & 도움말**
   - Restart: 첫 번째 화면으로 이동 + 상태 초기화
   - 도움말: 템플릿 이용 가이드 팝오버

### 접기/펼치기 기능

- **접기 버튼** (ChevronRight): 패널이 열려있고 팝오버가 닫혀있을 때만 표시
- **펼치기 버튼** (ChevronLeft): 패널이 접혀있을 때만 표시
- 패널 본체: `isPanelOpen === true`일 때만 렌더링

## 반응형 레이아웃 (Responsive)

### Breakpoints

```css
/* Mobile First */
@media (min-width: 768px) {
  /* Desktop 레이아웃 적용 */
  .container {
    max-width: 560px;
    margin: 0 auto;
    padding: 24px;
  }
}
```

### Desktop 레이아웃 특징

- **중앙 정렬 카드**: 560px 고정 너비, 좌우 자동 마진
- **배경**: #eaebef (모바일과 동일)
- **카드 스타일**: bg-white, rounded-lg, shadow-lg
- **Input 컴포넌트**: 480px width (max-width)
- **Button 컴포넌트**: 492px width (max-width)
- **Progress Bar**: 상단 고정, 전체 너비

## 리사이즈 핸들 (Desktop Only)

```tsx
{/* Resize Handle */}
<div
  className="h-12 w-8 bg-[var(--bg-neutral)] rounded-lg shadow-lg border border-[var(--border-neutral)] 
             flex items-center justify-center cursor-ew-resize hover:bg-[var(--bg-weak)] transition-default"
  onMouseDown={(e) => {
    e.preventDefault();
    setIsResizing(true);
    
    const startX = e.clientX;
    const startWidth = frameWidth;
    
    const handleMouseMove = (e: MouseEvent) => {
      const diff = e.clientX - startX;
      const newWidth = Math.max(375, Math.min(1920, startWidth + diff));
      setFrameWidth(newWidth);
    };
    
    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }}
>
  <GripVertical className="size-4 text-[var(--fg-weak)]" />
</div>
```

### 리사이즈 제한

- **최소 너비**: 375px (모바일 최소 너비)
- **최대 너비**: 1920px (Full HD)
- **기본 너비**: 1200px

## 프레임 & 컨테인먼트

- **뷰포트(Viewport)**: 사용자가 보는 전체 화면
- **프레임(Frame)**: 실제 디자인이 구현되는 콘텐츠 영역
  - Mobile: 375x812 고정
  - Desktop: 가로 375px ~ 1920px 가변, 세로 calc(100vh - 32px)
- 모든 화면은 프레임 컨테이너 내부에서만 동작해야 합니다.
- 상단/하단 고정 요소는 브라우저 뷰포트 기준이 아닌 **프레임 컨테이너 기준**으로 배치합니다.
- **절대 `overflow-hidden`을 사용하지 마세요** - 이는 푸터나 하단 콘텐츠를 가릴 수 있습니다.

## 레이아웃 & 스타일

- **레이아웃**: 피그마 레이아웃과 동일하게 구현하며, Auto Layout 적용
- **반응형 대응**:
  - Mobile: 375x812 고정
  - Desktop: 560px 중앙 카드 (768px+ breakpoint)
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

## 디자인 시스템

- **디자인 토큰**: `/src/styles/theme.css` 참조
- **타이포그래피**: Pretendard Variable (System.md 참조)
- **컬러**: CSS 변수 사용 (`var(--bg-neutral)` 등)
- **아이콘**: `/src/app/shared/icons/` 라이브러리 사용

## 문서

- [System.md](/System.md) - 종합 디자인 시스템 문서
- [ICON_LIBRARY.md](/ICON_LIBRARY.md) - 아이콘 라이브러리 가이드
- [ODS Input Component Definition](/src/imports/ODS_Input_Component_Definition.md) - ODS 입력폼 컴포넌트 정의

---

**Last Updated**: 2026-03-18  
**Version**: 2.0 (Viewport Mode 추가)
