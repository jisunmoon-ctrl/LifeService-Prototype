# 🏠 오늘의집 이사 신청 프로토타입 디자인 시스템

> **Project**: 오늘의집 이사 상담 신청 프로토타입  
> **Design System**: ODS (Ohouse Design System)  
> **Version**: 1.1.0  
> **Last Updated**: 2026-03-18  
> **Framework**: React + TypeScript + Tailwind CSS v4

---

## 📋 목차

1. [개요](#1-개요)
2. [디자인 토큰](#2-디자인-토큰)
3. [타이포그래피](#3-타이포그래피)
4. [컴포넌트 시스템](#4-컴포넌트-시스템)
5. [레이아웃 시스템](#5-레이아웃-시스템)
6. [아이콘 라이브러리](#6-아이콘-라이브러리)
7. [페이지 구조](#7-페이지-구조)
8. [사용 가이드](#8-사용-가이드)

---

## 1. 개요

### 1.1 프로젝트 구조

```
오늘의집 이사 신청 프로토타입
├── 입력폼 (6단계 퍼널)
│   ├── 1. 이사종류
│   ├── 2. 이사일
│   ├── 3. 출발지
│   ├── 4. 도착지
│   ├── 5. 포장서비스
│   └── 6. 개인정보
├── 매칭 업체 페이지
│   ├── 매칭 대기 화면
│   └── 견적 정보 표시
└── 책임보장 서비스 소개 페이지
```

### 1.2 기술 스택

| 영역 | 기술 |
|------|------|
| **프레임워크** | React 18 + TypeScript |
| **스타일링** | Tailwind CSS v4 + CSS Variables |
| **애니메이션** | Motion (Framer Motion) |
| **아이콘** | Lucide React + 커스텀 SVG |
| **상태 관리** | React Hooks (useState) |
| **라우팅** | 네비게이션 함수 기반 화면 전환 |

### 1.3 디자인 원칙

- ✅ **375×812px 모바일 프레임** 기준 디자인
- ✅ **Figma 디자인 시스템 1:1 구현**
- ✅ **컴포넌트 재사용성** 극대화
- ✅ **디자인 토큰 시스템** 일관성
- ✅ **접근성(Accessibility)** 고려

---

## 2. 디자인 토큰

### 2.1 Color System

모든 색상은 CSS 변수로 정의되어 있으며, `/src/styles/theme.css`에서 관리됩니다.

#### Background Colors

| Token | Value | 용도 |
|-------|-------|------|
| `--bg-neutral` | `#FFFFFF` | 기본 배경 (White) |
| `--bg-weak` | `#F5F5F5` | 회색 배경 (Light Gray) |
| `--bg-dim` | `rgba(0,0,0,0.6)` | 딤드 처리 배경 |
| `--bg-overlay` | `rgba(0,0,0,0.5)` | 오버레이 배경 |
| `--bg-background-dim` | `#EAEBEF` | 프레임 외부 배경 |
| `--bg-disabled` | `#EDEDED` | Disabled 상태 배경 |

#### Border Colors

| Token | Value | 용도 |
|-------|-------|------|
| `--border-neutral` | `#EBEBEB` | 기본 테두리 |
| `--border-strong` | `#141414` | 강조 테두리 |
| `--border-neutral-strong` | `#E0E0E0` | Input 기본 테두리 |
| `--border-neutral-inverse` | `#EAEDEF` | 밝은 테두리 |
| `--border-thumbnail` | `rgba(0,0,0,0.05)` | 썸네일 테두리 |

#### Foreground (Text/Icon) Colors

| Token | Value | 용도 |
|-------|-------|------|
| `--fg-neutral` | `#141414` | 기본 텍스트 (Black) |
| `--fg-inverse` | `#FFFFFF` | 반전 텍스트 (White) |
| `--fg-weak` | `#BCBCBC` | 보조 텍스트 (Light Gray) |
| `--fg-foreground-weak` | `#9E9E9E` | 약한 텍스트 (Medium Gray) |
| `--fg-disabled` | `#C2C8CC` | Disabled 텍스트 |

#### Brand Colors (오늘의집 브랜드)

| Token | Value | 용도 |
|-------|-------|------|
| `--bg-brand` | `#00A1FF` | 브랜드 메인 컬러 (Blue) |
| `--bg-brand-weak` | `#F0F8FC` | 브랜드 연한 배경 |
| `--border-brand` | `#00A1FF` | 브랜드 테두리 |
| `--fg-brand` | `#00A1FF` | 브랜드 텍스트 |

#### Semantic Colors

**Attention (Yellow)**

| Token | Value | 용도 |
|-------|-------|------|
| `--bg-attention` | `#FDF6E6` | 경고 배경 |
| `--bg-attention-weak` | `#FCF4DD` | 경고 연한 배경 |
| `--border-attention` | `#F5DF4D` | 경고 테두리 |
| `--fg-attention` | `#623B00` | 경고 텍스트 |

**Critical (Red)**

| Token | Value | 용도 |
|-------|-------|------|
| `--bg-critical` | `#FF7777` | 오류 배경 |
| `--bg-critical-weak` | `#FFF0F0` | 오류 연한 배경 |
| `--border-critical` | `#FF7777` | 오류 테두리 |
| `--fg-critical` | `#F05656` | 오류 텍스트 |

**Emphasis (Blue/Brand Alias)**

| Token | Value | 용도 |
|-------|-------|------|
| `--bg-emphasis` | `#00A1FF` | 강조 배경 |
| `--bg-emphasis-weak` | `#F0F8FC` | 강조 연한 배경 |
| `--border-emphasis` | `#00A1FF` | 강조 테두리 |
| `--fg-emphasis` | `#00A1FF` | 강조 텍스트 |

### 2.2 Spacing System (8px Base)

| Token | Value | 사용 예시 |
|-------|-------|-----------|
| `--spacing-0` | `0px` | 간격 없음 |
| `--spacing-1` | `2px` | 최소 간격 |
| `--spacing-2` | `4px` | 아주 작은 간격 |
| `--spacing-3` | `6px` | 작은 간격 |
| `--spacing-4` | `8px` | 기본 간격 |
| `--spacing-6` | `12px` | 중간 간격 |
| `--spacing-8` | `16px` | 표준 패딩 |
| `--spacing-10` | `20px` | 큰 간격 |
| `--spacing-12` | `24px` | 섹션 간격 |
| `--spacing-16` | `32px` | 큰 섹션 간격 |
| `--spacing-20` | `40px` | 아주 큰 간격 |

### 2.3 Border Radius

| Token | Value | 사용 예시 |
|-------|-------|-----------|
| `--radius-xs` | `2px` | 최소 라운딩 |
| `--radius-sm` | `4px` | Input, Button |
| `--radius-md` | `8px` | Card |
| `--radius-lg` | `12px` | 큰 카드 |
| `--radius-xl` | `16px` | 모달 |
| `--radius-2xl` | `20px` | 컨트롤 패널 |
| `--radius-3xl` | `24px` | 큰 모달 |
| `--radius-full` | `9999px` | 원형 버튼 |

### 2.4 Shadows

| Token | Value | 사용 예시 |
|-------|-------|-----------|
| `--shadow-sm` | `0 1px 2px 0 rgba(0,0,0,0.05)` | 작은 그림자 |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | 중간 그림자 |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | 큰 그림자 |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | 아주 큰 그림자 |

---

## 3. 타이포그래피

### 3.1 Font Family

모든 텍스트는 **Pretendard Variable** 폰트를 사용합니다.

```css
font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 3.2 Typography Scale

#### Heading (제목)

| 클래스 | Font Size | Line Height | Font Weight | 용도 |
|--------|-----------|-------------|-------------|------|
| `text-heading-38` | 38px | 50px | 700 (Bold) | 페이지 메인 타이틀 |
| `text-heading-24` | 24px | 32px | 700 (Bold) | 섹션 타이틀 |
| `text-heading-20` | 20px | 28px | 700 (Bold) | 서브 섹션 타이틀 |
| `text-heading-18` | 18px | 24px | 700 (Bold) | 카드 타이틀 |
| `text-heading-16` | 16px | 22px | 700 (Bold) | 작은 타이틀 |
| `text-heading-14` | 14px | 20px | 700 (Bold) | 최소 타이틀 |

#### Body (본문)

| 클래스 | Font Size | Line Height | Font Weight | 용도 |
|--------|-----------|-------------|-------------|------|
| `text-body-16` | 16px | 24px | 400 (Regular) | 기본 본문 텍스트 |
| `text-body-15` | 15px | 22px | 400 (Regular) | 상세 정보 |
| `text-body-14` | 14px | 20px | 400 (Regular) | 보조 정보 |
| `text-body-13` | 13px | 18px | 400 (Regular) | 작은 정보 |

#### Detail (상세 텍스트)

| 클래스 | Font Size | Line Height | Font Weight | 용도 |
|--------|-----------|-------------|-------------|------|
| `text-detail-12` | 12px | 16px | 400 (Regular) | Help Text, 캡션 |
| `text-detail-10` | 10px | 12px | 400 (Regular) | 작은 캡션, 라벨 |

#### Font Weight 유틸리티

| 클래스 | Font Weight | 용도 |
|--------|-------------|------|
| `font-regular` | 400 | 기본 텍스트 |
| `font-medium` | 500 | 중간 강조 |
| `font-semibold` | 600 | 강조 |
| `font-bold` | 700 | 강한 강조 |

### 3.3 ODS Input Form 타이포그래피

ODS Input Form 컴포넌트에서 사용하는 특정 타이포그래피:

| Token Name | Font Size | Line Height | Font Weight | Letter Spacing | 용도 |
|------------|-----------|-------------|-------------|----------------|------|
| `Body16/Body16L24_Regular` | 16px | 24px | 400 | -1.875% | Input Value, Placeholder (Size 40) |
| `Body14/Body14L20_Regular` | 14px | 20px | 400 | -2.14% | Input Value, Placeholder (Size 32) |
| `Body14/Body14L18_Medium` | 14px | 18px | 500 | -2.14% | Title 라벨, Text Button |
| `Detail12/Detail12L16_Regular` | 12px | 16px | 400 | -2.5% | Help Text, Counter |

---

## 4. 컴포넌트 시스템

### 4.1 Input Field

**파일 위치**: `/src/app/shared/ods/ · /src/app/shared/flow/`

**디자인 정의**: [ODS Input Component Definition](/src/imports/ODS_Input_Component_Definition.md)

#### 컴포넌트 구조

```
🌀 Input Field
├── Title (선택)
├── Field
│   ├── Input
│   │   ├── Placeholder / Value Text
│   │   ├── Text Button (선택)
│   │   └── Clear Button (선택)
│   └── Help Text (선택)
```

#### Variants

| Property | Values | Default | 설명 |
|----------|--------|---------|------|
| `Size` | `32`, `40` | `40` | 입력 필드 높이 (px) |
| `State` | `default`, `focused`, `disabled`, `error` | `default` | 상태 |
| `Filled` | `true`, `false` | `false` | 값 입력 여부 |

#### Boolean Properties

| Property | Default | 설명 |
|----------|---------|------|
| `Title` | `true` | Title 라벨 표시 여부 |
| `Help Text` | `true` | 하단 도움말 표시 여부 |
| `Text Button` | `false` | 입력 필드 내 텍스트 버튼 표시 여부 |
| `Clear Button` | `true` | 입력 값 초기화 버튼 표시 여부 |

#### Size Spec

**Size 32**
```css
padding: 6px 12px;
border-radius: 4px;
gap: 8px;
font: Body14/Body14L20_Regular;
```

**Size 40**
```css
padding: 7px 12px;
border-radius: 4px;
gap: 8px;
font: Body16/Body16L24_Regular;
```

#### State × Filled Matrix

**미입력 (Filled = false)**

| State | Border | Background | Text |
|-------|--------|------------|------|
| Default | `#E0E0E0` 1px | transparent | Placeholder `#8C8C8C` |
| Focused | `#00A1FF` 1px | transparent | Placeholder `#8C8C8C` |
| Disabled | `#E0E0E0` 1px | `#F5F5F5` | Placeholder `#C1C1C1` |
| Error | `#FF7777` 1px | transparent | Placeholder `#8C8C8C` |

**입력 완료 (Filled = true)**

| State | Border | Background | Text |
|-------|--------|------------|------|
| Default | `#E0E0E0` 1px | transparent | Value `#141414` |
| Focused | `#00A1FF` 1px | transparent | Value `#141414` + Cursor `#00A1FF` |
| Disabled | `#E0E0E0` 1px | `#F5F5F5` | Value `#141414` |
| Error | `#FF7777` 1px | transparent | Value `#141414` |

#### 사용 예시

```tsx
// 기본 입력 필드 (Size 40)
<div className="flex flex-col gap-2 w-full">
  <label className="text-body-14 font-medium text-[#828C94]">
    이름
  </label>
  <input
    type="text"
    placeholder="이름을 입력하세요"
    className="h-10 px-3 py-[7px] rounded border border-[#E0E0E0] 
               text-body-16 text-[var(--fg-neutral)]
               placeholder:text-[#8C8C8C]
               focus:border-[var(--border-brand)] focus:outline-none
               disabled:bg-[#F5F5F5] disabled:text-[#C1C1C1]"
  />
  <p className="text-detail-12 text-[#8C8C8C]">
    실명을 입력해주세요.
  </p>
</div>

// Size 32 입력 필드
<input
  type="text"
  placeholder="검색어를 입력하세요"
  className="h-8 px-3 py-1.5 rounded border border-[#E0E0E0]
             text-body-14 text-[var(--fg-neutral)]
             placeholder:text-[#8C8C8C]
             focus:border-[var(--border-brand)] focus:outline-none"
/>
```

### 4.2 Input Area (Textarea)

**디자인 정의**: [ODS Input Component Definition](/src/imports/ODS_Input_Component_Definition.md)

#### 컴포넌트 구조

```
🌀 Input Area
├── Title (선택)
├── Field
│   ├── Textarea
│   │   └── Area
│   │       ├── Text (Placeholder / Value)
│   │       └── Text Cursor (Typing 상태)
│   └── Help Text (선택)
```

#### Size Variants

| Size | Height | 용도 |
|------|--------|------|
| `Small` | 76px | 짧은 텍스트 입력 |
| `Medium` | 136px | 중간 길이 텍스트 |
| `Large` | 196px | 긴 텍스트 입력 |

#### 공통 스타일

```css
padding: 16px;
border-radius: 4px;
gap: 10px;
font: Body16/Body16L24_Regular;
```

#### State Matrix

| State | Border | Background | Text Color |
|-------|--------|------------|------------|
| Inactive | `#E0E0E0` 1px | transparent | `#8C8C8C` (placeholder) |
| Pressed | `#00A1FF` 1px | transparent | `#141414` (value) |
| Typing | `#00A1FF` 1px | transparent | `#141414` + Cursor |
| Complete | `#E0E0E0` 1px | transparent | `#141414` (value) |
| Disabled | `#E0E0E0` 1px | `#F5F5F5` | `#8C8C8C` |
| Error | `#FF7777` 1px | transparent | `#141414` (value) |

#### 사용 예시

```tsx
// Small Textarea (76px)
<div className="flex flex-col gap-1 w-full">
  <label className="text-body-14 font-medium text-[#828C94]">
    요청사항
  </label>
  <textarea
    placeholder="요청사항을 입력하세요"
    className="h-[76px] p-4 rounded border border-[#E0E0E0]
               text-body-16 text-[var(--fg-neutral)]
               placeholder:text-[#8C8C8C] resize-none
               focus:border-[var(--border-brand)] focus:outline-none
               disabled:bg-[#F5F5F5]"
  />
  <p className="text-detail-12 text-[#8C8C8C]">
    추가로 전달할 내용을 입력해주세요.
  </p>
</div>

// Medium Textarea (136px) with Counter
<div className="flex flex-col gap-1 w-full">
  <textarea
    maxLength={100}
    placeholder="내용을 입력하세요"
    className="h-[136px] p-4 rounded border border-[#E0E0E0]
               text-body-16 text-[var(--fg-neutral)]
               placeholder:text-[#8C8C8C] resize-none
               focus:border-[var(--border-brand)] focus:outline-none"
  />
  <p className="text-detail-12 text-[#8C8C8C] text-right">
    {value.length}/100
  </p>
</div>
```

### 4.3 Calendar

**디자인 정의**: [ODS Input Component Definition](/src/imports/ODS_Input_Component_Definition.md)

#### 컴포넌트 구조

```
🏗️🌀 Calendar
├── Day View (페이지 방식)
│   ├── Header
│   │   ├── Left (Toggle View Button — 연/월 표시)
│   │   └── Right (Arrow Button Left + Arrow Button Right)
│   ├── Body
│   │   ├── Weekdays (일 ~ 토)
│   │   └── Days (Calendar Day × 35~42)
│   └── [Year Month View] (연/월 선택 뷰로 전환 시)
├── Scroll View (스크롤 방식)
│   └── 연속된 월별 Day Grid
└── Year & Month View (페이지 방식)
    └── Year Month Grid (월 선택)
```

#### Variants

| Property | Values | Default | 설명 |
|----------|--------|---------|------|
| `Variant` | `page(day)`, `scroll`, `page(year & month)` | `page(day)` | 캘린더 표시 방식 |
| `Locale` | `ko`, `en`, `ja` | `ko` | 언어/로케일 설정 |

#### Calendar Day (날짜 셀)

**State Matrix**

| Selected | Today | Disabled | Outside | 텍스트 | 배경 | Weight |
|----------|-------|----------|---------|--------|------|--------|
| false | false | false | false | `#141414` | transparent | 400 |
| true | false | false | false | `#FFFFFF` | `#141414` (circle) | 500 |
| false | true | false | false | `#141414` | transparent + Dot | 400 |
| true | true | false | false | `#FFFFFF` | `#141414` + Dot | 500 |
| false | false | true | false | `#C1C1C1` | transparent | 400 |

#### Size Spec

| 요소 | 속성 | 값 |
|------|------|-----|
| Calendar Day Cell | height | `40px` |
| Calendar Day Cell | width | fill (7등분) |
| Selected Circle | size | `40 × 40px` |
| Selected Circle | border-radius | `9999px` |
| Today Dot | size | `5 × 5px` |
| Weekday Row | height | `36px` |
| Weekday Font | style | Body14/Body14L18_Semibold, `#8C8C8C` |
| Day Label (default) | style | Body14/Body14L18_Regular, `#141414` |
| Day Label (selected) | style | Body14/Body14L18_Medium, `#FFFFFF` |

### 4.4 Box Button

**디자인 정의**: [ODS Input Component Definition](/src/imports/ODS_Input_Component_Definition.md)

#### 컴포넌트 구조

```
🌀 Box Button
├── [Left Icon] (선택)
├── Title (버튼 텍스트)
└── [Right Icon] (선택)
```

#### Variants

| Property | Values | Default | 설명 |
|----------|--------|---------|------|
| `Shape` | `Filled`, `Outlined` | `Filled` | 버튼 형태 |
| `Variant` | `Primary1`, `Base1` | `Primary1` | 컬러 변형 |
| `Loading` | `True`, `False` | `False` | 로딩 상태 |
| `State` | `Enabled`, `Disabled` | `Enabled` | 활성/비활성 |
| `Size` | `50`, `44`, `40`, `32`, `28` | `44` | 버튼 높이 (px) |

#### Size Spec

| Size | Height | Padding | Gap |
|------|--------|---------|-----|
| 50 (PC only) | 50px | `15px 16px` | `4px` |
| 44 | 44px | `12px 16px` | `4px` |
| 40 | 40px | `10px 16px` | `4px` |
| 32 | 32px | `6px 8px` | `4px` |
| 28 | 28px | `4px 8px` | `4px` |

**공통 스타일**
```css
border-radius: 4px;
layout: row, center-aligned;
gap: 4px;
```

#### Shape × Variant × State Matrix

**Filled**

| Variant | State | Background | Border | Text/Icon Color |
|---------|-------|------------|--------|-----------------|
| Primary1 | Enabled | `#00A1FF` | none | `#FFFFFF` |
| Primary1 | Disabled | `#EDEDED` | none | (muted) |
| Primary1 | Loading | `#00A1FF` | none | Spinner |

**Outlined**

| Variant | State | Background | Border | Text/Icon Color |
|---------|-------|------------|--------|-----------------|
| Primary1 | Enabled | transparent | `#00A1FF` 1px | `#00A1FF` |
| Primary1 | Disabled | transparent | `#E0E0E0` 1px | (muted) |
| Base1 | Enabled | transparent | `#E0E0E0` 1px | `#141414` |
| Base1 | Disabled | transparent | `#E0E0E0` 1px | (muted) |

#### 사용 예시

```tsx
// Filled Primary1 - Size 44 (기본)
<button className="h-[44px] px-4 py-3 bg-[var(--bg-brand)] text-white
                   rounded flex items-center justify-center gap-1
                   hover:opacity-90 transition-default
                   disabled:bg-[#EDEDED] disabled:text-[#C2C8CC]">
  <span className="text-body-16 font-semibold">신청하기</span>
</button>

// Outlined Base1 - Size 40
<button className="h-10 px-4 py-2.5 bg-transparent border border-[#E0E0E0]
                   text-[var(--fg-neutral)] rounded flex items-center justify-center
                   hover:bg-gray-50 transition-default">
  <span className="text-body-14 font-medium">취소</span>
</button>

// Filled Primary1 with Loading
<button className="h-[44px] px-4 py-3 bg-[var(--bg-brand)]
                   rounded flex items-center justify-center gap-1"
        disabled>
  <Loader2 className="size-4 text-white animate-spin" />
  <span className="text-body-16 font-semibold text-white">처리중...</span>
</button>
```

### 4.5 Help Text

**디자인 정의**: [ODS Input Component Definition](/src/imports/ODS_Input_Component_Definition.md)

Input Field, Input Area, Dropdown과 함께 사용 가능한 보조 텍스트 컴포넌트입니다.

#### Variants

| Type | Error | 설명 |
|------|-------|------|
| Help Text | `False` | 기본 도움말 (`#8C8C8C`) |
| Help Text | `True` | 에러 도움말 (`#F05656`) |
| Counter | `False` | 글자 수 카운터 (형식: `99/99`) |

#### 스타일 스펙

| 요소 | 속성 | 값 |
|------|------|-----|
| Help Text | font | Detail12/Detail12L16_Regular |
| Help Text (normal) | color | `#8C8C8C` |
| Help Text (error) | color | `#F05656` |
| Counter | font | Detail12/Detail12L16_Regular |
| Counter | color | `#8C8C8C` |
| Container | gap (아이콘과 텍스트) | `6px` |

#### 사용 예시

```tsx
// 기본 Help Text
<p className="text-detail-12 text-[#8C8C8C]">
  휴대폰 번호를 정확히 입력해주세요.
</p>

// Error Help Text
<p className="text-detail-12 text-[var(--fg-critical)] flex items-center gap-1.5">
  <ErrorIcon className="size-3" />
  필수 항목입니다.
</p>

// Counter
<p className="text-detail-12 text-[#8C8C8C] text-right">
  {value.length}/100
</p>
```

### 4.6 Text Button (Input 내부)

**디자인 정의**: [ODS Input Component Definition](/src/imports/ODS_Input_Component_Definition.md)

입력 필드 내부에 배치되는 인라인 텍스트 버튼입니다.

#### 스타일 스펙

| 요소 | 속성 | 값 |
|------|------|-----|
| Text Button | font | Body14/Body14L18_Medium |
| Text Button (active) | color | `#00A1FF` |
| Text Button (disabled) | color | `#C1C1C1` |
| Container | padding | `1px 4px` |
| Container | height | `26px` |

#### 사용 예시

```tsx
<div className="relative">
  <input
    type="text"
    placeholder="인증번호 입력"
    className="h-10 px-3 py-[7px] pr-[72px] rounded border border-[#E0E0E0]
               text-body-16 focus:border-[var(--border-brand)] focus:outline-none"
  />
  <button
    className="absolute right-3 top-1/2 -translate-y-1/2
               px-1 py-[1px] h-[26px] text-body-14 font-medium
               text-[var(--fg-brand)] hover:opacity-80 transition-default
               disabled:text-[#C1C1C1]">
    인증하기
  </button>
</div>
```

### 4.7 Radio Button

**디자인 정의**: System 기본 컴포넌트

#### 스타일 스펙

```tsx
// 선택되지 않음
<div className="size-2 rounded-full bg-[#D5D5D5]" />

// 선택됨
<div className="size-2 rounded-full bg-[#141414]" />

// 라벨
<span className="text-body-14 font-medium text-[var(--fg-neutral)]">
  옵션 라벨
</span>
```

### 4.8 Checkbox

**디자인 정의**: System 기본 컴포넌트

#### 스타일 스펙

```tsx
// 미선택
<div className="size-4 rounded border border-[#E0E0E0]" />

// 선택됨
<div className="size-4 rounded bg-[var(--bg-brand)] flex items-center justify-center">
  <CheckIcon className="size-3 text-white" />
</div>

// 라벨
<span className="text-body-14 text-[var(--fg-neutral)]">
  체크박스 라벨
</span>
```

### 4.9 Dropdown / Select

**디자인 정의**: System 기본 컴포넌트

#### 스타일 스펙

```tsx
<select className="h-10 px-3 py-2 rounded border border-[#E0E0E0]
                   text-body-16 text-[var(--fg-neutral)]
                   bg-white appearance-none
                   focus:border-[var(--border-brand)] focus:outline-none">
  <option value="">선택하세요</option>
  <option value="1">옵션 1</option>
  <option value="2">옵션 2</option>
</select>
```

### 4.10 Card

**디자인 정의**: System 기본 컴포넌트

#### 기본 카드

```tsx
<div className="bg-[var(--bg-neutral)] rounded-lg border border-[var(--border-neutral)]
                p-4 shadow-sm">
  {/* Card Content */}
</div>
```

#### 강조 카드

```tsx
<div className="bg-[var(--bg-brand-weak)] rounded-lg border border-[var(--border-brand)]
                p-4">
  {/* Emphasis Card Content */}
</div>
```

---

## 5. 레이아웃 시스템

### 5.1 프레임 구조

```tsx
// 375×812px 모바일 프레임
<div className="size-full bg-[var(--bg-background-dim)] flex items-center justify-center">
  {/* 디바이스 프레임 */}
  <div className="relative bg-[var(--fg-neutral)] rounded-[32px] p-[5px]"
       style={{ height: 'calc(100vh - 32px)', maxHeight: '822px', aspectRatio: '385 / 822' }}>
    <div className="bg-[var(--bg-neutral)] rounded-[27px] overflow-hidden size-full">
      {/* 스크린 콘텐츠 */}
    </div>
  </div>
</div>
```

### 5.2 3단 고정 레이아웃 (필수)

모든 메인 화면은 반드시 다음 구조를 따라야 합니다:

```tsx
<div className="bg-[var(--bg-weak)] relative size-full">
  {/* 🔧 상단 고정 영역 */}
  <div className="absolute top-0 left-0 right-0 z-10">
    <Statusbar />
    <TopNavigation />
  </div>

  {/* 🔧 바디 영역 - 상단/하단 높이에 맞춰 동적 계산 */}
  <div className="absolute left-0 right-0 top-[88px] bottom-[94px] overflow-y-auto">
    <div className="flex flex-col gap-[10px]">
      {/* 스크롤 가능한 콘텐츠 */}
    </div>
  </div>

  {/* 🔧 하단 고정 영역 */}
  <div className="absolute bottom-0 left-0 right-0 z-10">
    <StickyFooter />
  </div>
</div>
```

#### 높이 계산 방법

1. **상단 영역**: Status Bar (44px) + Navigation Bar (44px) = **88px**
2. **하단 영역**: Button Area (60px) + Footer (34px) = **94px**
3. **바디 영역**: `top-[88px] bottom-[94px]`

### 5.3 System Status Bar

```tsx
function Statusbar() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      {/* Battery, WiFi, Cellular, Time */}
    </div>
  );
}
```

### 5.4 Top Navigation

```tsx
function TopNavigation({ title, onBack }) {
  return (
    <div className="h-[44px] w-full bg-white flex items-center justify-between px-4">
      <button onClick={onBack}>
        <ChevronLeft className="size-6" />
      </button>
      <h1 className="text-heading-16 font-bold">{title}</h1>
      <div className="w-6" />
    </div>
  );
}
```

### 5.5 Sticky Footer

```tsx
function StickyFooter() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      {/* Button Area */}
      <div className="bg-white h-[60px] px-4 py-2">
        <button className="h-full w-full bg-[var(--bg-brand)] text-white rounded">
          다음
        </button>
      </div>
      
      {/* Home Indicator (optional) */}
      <div className="bg-white h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-black rounded-full" />
      </div>
    </div>
  );
}
```

---

## 6. 아이콘 라이브러리

### 6.1 개요

**파일 위치**: `/src/app/shared/icons/IconLibrary.tsx`

총 **60+ 아이콘** 제공, 7개 카테고리로 분류

### 6.2 사용법

```tsx
import { Icon } from '@/components/icons';

// 기본 사용
<Icon name="check" size={24} color="var(--fg-neutral)" />

// 인터랙티브
<Icon 
  name="trash" 
  size={20} 
  color="var(--fg-critical)"
  onClick={() => handleDelete()}
  className="hover:opacity-80 transition-default cursor-pointer"
/>
```

### 6.3 Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `name` | `IconName` | **required** | 아이콘 이름 (자동완성 지원) |
| `size` | `number \| string` | `24` | 아이콘 크기 (px) |
| `color` | `string` | `'currentColor'` | 아이콘 색상 (CSS 변수 권장) |
| `className` | `string` | `''` | 추가 CSS 클래스 |
| `strokeWidth` | `number` | `2` | 선 두께 |
| `onClick` | `() => void` | `undefined` | 클릭 핸들러 |

### 6.4 아이콘 카테고리

**Navigation** (7개)  
`chevron-left` `chevron-right` `chevron-up` `chevron-down` `arrow-left` `arrow-right` `close`

**Status & Actions** (12개)  
`check` `check-circle` `plus` `minus` `search` `refresh` `upload` `download` `share` `trash` `edit` `copy`

**Content** (8개)  
`home` `user` `settings` `help` `info` `alert` `warning` `error`

**Commerce** (4개)  
`cart` `heart` `star` `bookmark`

**Communication** (4개)  
`phone` `mail` `message` `notification`

**Media** (5개)  
`image` `camera` `video` `play` `pause`

**Moving Service** (6개)  
`truck` `box` `location` `calendar` `clock` `package`

### 6.5 권장 사이즈

| 용도 | 크기 |
|------|------|
| 인라인 아이콘, 뱃지 | 16px |
| 입력 필드, 작은 버튼 | 20px |
| 버튼, 네비게이션 | 24px |
| 큰 강조 아이콘 | 32px |
| 빈 상태, 플레이스홀더 | 48px+ |

---

## 7. 페이지 구조

### 7.1 입력폼 (6단계 퍼널)

**파일**: `/src/app/flows/b2c/moving/InputFlowScreen.tsx`

#### 단계별 구성

1. **이사종류**: 가정이사 / 사무실이사 / 짐보관 선택
2. **이사일**: 날짜 선택
3. **출발지**: 주소, 엘리베이터, 평수 입력
4. **도착지**: 주소, 엘리베이터, 평수, 가구인원수 입력
5. **포장서비스**: 포장/반포장/일반 선택
6. **개인정보**: 이름, 연락처 입력

#### 공통 구조

```tsx
<div className="bg-white relative size-full flex flex-col">
  {/* 상단 고정 */}
  <div className="shrink-0">
    <SystemStatusBar />
    <ProgressBar current={step} total={6} />
    <TopNavigation title={stepTitle} onBack={handleBack} />
  </div>

  {/* 바디 스크롤 영역 */}
  <div className="flex-1 overflow-y-auto px-4 py-6">
    {/* 단계별 폼 */}
  </div>

  {/* 하단 고정 */}
  <div className="shrink-0">
    <div className="bg-white p-4 border-t border-[var(--border-neutral)]">
      <button className="h-[56px] w-full bg-[var(--bg-brand)] text-white rounded">
        다음
      </button>
    </div>
    <HomeIndicator />
  </div>
</div>
```

### 7.2 매칭 업체 페이지

**파일**: `/src/app/flows/legacy/screens/MovingRequestScreenVarA.tsx`

#### 구성 요소

1. **CalloutLoading**: 매칭 진행 상태 표시
2. **PriceTableSection**: 견적 정보 (최저/평균/최고)
   - 포장/반포장/일반 토글
   - 툴팁 정보
3. **RequestDetails**: 신청 내역 상세

#### 가격 테이블 구조

```tsx
<div className="flex items-center justify-between w-full">
  {/* 최저 */}
  <div className="flex-1">
    <p className="text-detail-12 text-[var(--fg-neutral)]">최저</p>
    <p className="text-heading-17 font-semibold text-[var(--fg-neutral)]">
      {formatWon(priceData.최소)}
    </p>
  </div>

  <div className="bg-[#e3e3e3] h-[41px] w-px" />

  {/* 평균 */}
  <div className="flex-1">
    <p className="text-detail-12 text-[var(--fg-neutral)]">평균</p>
    <p className="text-heading-17 font-semibold text-[var(--fg-brand)]">
      {formatWon(priceData.평균)}
    </p>
  </div>

  <div className="bg-[#e3e3e3] h-[41px] w-px" />

  {/* 최고 */}
  <div className="flex-1">
    <p className="text-detail-12 text-[var(--fg-neutral)]">최고</p>
    <p className="text-heading-17 font-semibold text-[var(--fg-neutral)]">
      {formatWon(priceData.최대)}
    </p>
  </div>
</div>
```

### 7.3 책임보장 서비스 소개

**파일**: `/src/app/flows/legacy/screens/ResponsibilityServiceScreen.tsx`

#### 특징

- 배너 클릭 시 진입
- Dismiss(X) 클릭 시 히스토리 기반 이전 화면 복귀
- 서비스 안내 콘텐츠

---

## 8. 사용 가이드

### 8.1 새 화면 추가하기

#### 1. 컴포넌트 파일 생성

```tsx
// /src/app/flows/b2c/<flow>/NewScreen.tsx
import { SystemStatusBar } from "../mobile/SystemStatusBar";

export default function NewScreen({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  return (
    <div className="bg-white relative size-full flex flex-col">
      {/* 상단 고정 */}
      <div className="shrink-0 bg-white z-50">
        <SystemStatusBar />
        <Header title="새 화면" onBack={() => onNavigate?.("main")} />
      </div>

      {/* 바디 스크롤 영역 */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* 콘텐츠 */}
      </div>

      {/* 하단 고정 (선택) */}
      <div className="shrink-0">
        <StickyFooter />
      </div>
    </div>
  );
}
```

#### 2. App.tsx에 등록

```tsx
// import 추가
import NewScreen from "./flows/b2c/<flow>/NewScreen";

// screenGroups에 추가
const screenGroups: ScreenGroup[] = [
  {
    title: "새 그룹",
    screens: [
      { id: "new_screen", name: "새 화면" },
    ]
  }
];

// renderScreen에 추가
const renderScreen = () => {
  switch (currentScreen) {
    case "new_screen": return <NewScreen onNavigate={handleNavigate} />;
    // ... other cases
  }
};
```

### 8.2 디자인 토큰 사용하기

```tsx
// ✅ 권장: CSS 변수 사용
<div className="bg-[var(--bg-neutral)] text-[var(--fg-neutral)]">
  <p className="text-body-16">텍스트</p>
</div>

// ❌ 비권장: 하드코딩
<div className="bg-white text-black">
  <p className="text-[16px]">텍스트</p>
</div>
```

### 8.3 타이포그래피 사용하기

```tsx
// ✅ 권장: 유틸리티 클래스 사용
<h1 className="text-heading-24 font-bold text-[var(--fg-neutral)]">제목</h1>
<p className="text-body-16 text-[var(--fg-neutral)]">본문</p>
<span className="text-detail-12 text-[var(--fg-weak)]">캡션</span>

// ❌ 비권장: 인라인 스타일
<h1 style={{ fontSize: '24px', fontWeight: 700 }}>제목</h1>
```

### 8.4 Spacing 사용하기

```tsx
// ✅ 권장: Tailwind 유틸리티 사용
<div className="px-4 py-6 gap-3">

// ✅ 권장: 픽셀 값으로 정확한 간격
<div className="px-[16px] py-[24px] gap-[12px]">

// ❌ 비권장: CSS 변수를 직접 사용
<div style={{ padding: 'var(--spacing-8)' }}>
```

### 8.5 애니메이션 사용하기

```tsx
import { motion } from "motion/react";

// 페이드 인
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  {content}
</motion.div>

// 슬라이드 업
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {content}
</motion.div>

// 회전 애니메이션 (로딩)
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
>
  <LoadingIcon />
</motion.div>
```

### 8.6 반응형 (선택)

프로젝트는 **375×812px 모바일 프레임 고정**이지만, 필요시 반응형 적용 가능:

```tsx
// Tailwind 브레이크포인트 사용
<div className="text-body-14 md:text-body-16">
  {content}
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {items}
</div>
```

---

## 9. 체크리스트

### 9.1 새 화면 구현 시

- [ ] 3단 고정 레이아웃 구조 준수 (상단/바디/하단)
- [ ] 상단/하단 높이 정확히 계산하여 바디 영역 설정
- [ ] 바디 영역에 `overflow-y-auto` 적용 (절대 `overflow-hidden` 금지)
- [ ] `absolute` 포지셔닝으로 상단/하단 고정
- [ ] z-index 적용 (상단/하단 `z-10` 이상)
- [ ] SystemStatusBar 포함
- [ ] TopNavigation 또는 커스텀 헤더 구현
- [ ] onNavigate prop 받아서 화면 전환 처리
- [ ] 모든 텍스트에 디자인 토큰 적용

### 9.2 컴포넌트 구현 시

- [ ] CSS 변수 사용 (하드코딩 금지)
- [ ] 타이포그래피 유틸리티 클래스 사용
- [ ] Spacing 시스템 준수
- [ ] 컴포넌트 재사용성 고려
- [ ] TypeScript 타입 정의
- [ ] Props 인터페이스 명확히 정의
- [ ] 기본값(default props) 설정

### 9.3 스타일링 시

- [ ] Tailwind 유틸리티 클래스 우선 사용
- [ ] 인라인 스타일 최소화
- [ ] 일관된 클래스 네이밍 (BEM 또는 Tailwind)
- [ ] 반응형 필요시 Tailwind 브레이크포인트 사용
- [ ] hover/focus/active 상태 정의
- [ ] transition 클래스 적용 (`transition-default`)

### 9.4 접근성 (Accessibility)

- [ ] 시맨틱 HTML 사용 (`<button>`, `<input>`, `<label>`)
- [ ] aria-label 또는 aria-labelledby 제공
- [ ] 키보드 네비게이션 가능
- [ ] focus 상태 시각적으로 표시
- [ ] 색상만으로 정보 전달하지 않음
- [ ] 충분한 대비율 (WCAG AA 이상)

---

## 10. 참고 자료

### 10.1 문서

- [Guidelines.md](/Guidelines.md) - 프로젝트 구현 가이드라인
- [ICON_LIBRARY.md](/ICON_LIBRARY.md) - 아이콘 라이브러리 통합 가이드
- [ODS Input Component Definition](/src/imports/ODS_Input_Component_Definition.md) - ODS 입력폼 디자인 컴포넌트 정의
- [ODS Input Form (Legacy)](/src/imports/pasted_text/ods-input-form.md) - ODS Input 컴포넌트 정의 (구버전)

### 10.2 파일 경로

```
프로젝트 루트
├── /src/app/
│   ├── App.tsx                          # 메인 앱 (라우팅)
│   ├── /components/
│   │   ├── /screens/                    # 페이지 컴포넌트
│   │   │   ├── MovingRequestScreenVarA.tsx
│   │   │   ├── InputFormScreenVarA.tsx
│   │   │   ├── InputFlowScreen.tsx
│   │   │   └── ResponsibilityServiceScreen.tsx
│   │   ├── /mobile/                     # 모바일 전용 컴포넌트
│   │   │   └── SystemStatusBar.tsx
│   │   ├── /icons/                      # 아이콘 라이브러리
│   │   │   ├── IconLibrary.tsx
│   │   │   ├── IconShowcase.tsx
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   └── /ui/                         # shadcn/ui 컴포넌트
│   │       └── popover.tsx
│   └── /utils/
│       └── movingPriceData.ts           # CSV 데이터 유틸리티
├── /src/styles/
│   ├── theme.css                        # 디자인 토큰 정의
│   └── fonts.css                        # 폰트 import
├── /src/imports/
│   ├── svg-*.tsx                        # Figma에서 추출한 SVG
│   └── 이사_견적_데이터.csv              # 견적 데이터
└── /public/
    └── ...
```

### 10.3 외부 링크

- [ODS Figma Design System](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-)
- [오늘의집 아이콘 카탈로그](https://fe.co-workerhou.se/catalog/?path=/docs/documentation-1-icons--docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/)
- [Motion (Framer Motion)](https://motion.dev/)
- [Lucide Icons](https://lucide.dev/)

---

## 11. 버전 히스토리

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-18 | 초기 디자인 시스템 문서 작성 |
| 1.0.1 | 2026-03-18 | 통합 입력폼 테스트 시안 제거, 디자인 토큰 전면 적용 |
| 1.1.0 | 2026-03-18 | ODS Input Component Definition 통합 (Input Field, Textarea, Calendar, Box Button) |

---

**Last Updated**: 2026-03-18  
**Maintained by**: 오늘의집 프론트엔드 팀