# 🌀 ODS 입력폼 디자인 컴포넌트 및 페이지 정의

> **Design System**: ODS (Ohouse Design System)
> **Version**: 1.1
> **Last Updated**: 2026-03-18
> **Status**: ✅ Android/iOS 사용가능 | ✅ Web 사용가능

---

## 1. Overview

### 1.1 컴포넌트 설명

입력폼에서 사용되는 핵심 UI 컴포넌트들을 정의합니다. 텍스트 입력(Input Field, Input Area), 날짜 선택(Calendar), 액션 트리거(Box Button) 컴포넌트를 포함합니다.

### 1.2 컴포넌트 목록

| 컴포넌트 | 용도 | 플랫폼 지원 |
|---|---|---|
| 🌀 Input Field | 짧은 텍스트, 숫자 등 단일 라인 입력 | Android ✅ · iOS ✅ · Web ✅ |
| 🌀 Input Area (Textarea) | 여러 줄의 텍스트 입력 또는 내용 표시 | Android ❌ · iOS ✅ · Web ❌ |
| 🏗️🌀 Calendar | 날짜 선택 (일간/월간 뷰, 페이지/스크롤 방식) | Android ✅ · iOS ✅ · Web ✅ |
| 🌀 Box Button | 폼 제출, 액션 트리거 등 버튼 인터랙션 | Android ✅ · iOS ✅ · Web ✅ |

> ℹ️ Web에서 Input Area는 BDS Textarea를 사용해주세요.

---

## 2. Design Token

### 2.1 Color Token

#### Neutral / Text Colors

| Token Name | Value | 용도 |
|---|---|---|
| `neutral-500` | `#828C94` | Title 라벨 텍스트 |
| `text-primary` | `#141414` | Value 텍스트 (입력 완료) |
| `text-secondary` | `#8C8C8C` | Placeholder, Help Text |
| `text-disabled` | `#C1C1C1` | Disabled 상태 텍스트 |

#### Border Colors

| Token Name | Value | 용도 |
|---|---|---|
| `border-default` | `#E0E0E0` | 기본(Default) 상태 border |
| `border-focused` | `#00A1FF` | Focused 상태 border |
| `border-error` | `#FF7777` | Error 상태 border |

#### Background Colors

| Token Name | Value | 용도 |
|---|---|---|
| `bg-default` | `#FFFFFF` (transparent) | 기본 배경 |
| `bg-disabled` | `#F5F5F5` | Disabled 상태 배경 |

#### Semantic Colors

| Token Name | Value | 용도 |
|---|---|---|
| `color-error` | `#F05656` | Error Help Text 텍스트 |
| `color-focus` | `#00A1FF` | Focus indicator, Text Cursor |
| `color-primary` | (Primary1) | Text Button 컬러 |

### 2.2 Typography Token

#### Font Family

모든 텍스트 요소에 **Pretendard** 폰트를 사용합니다.

#### Text Styles

| Token Name | Font Size | Line Height | Font Weight | Letter Spacing | 용도 |
|---|---|---|---|---|---|
| `Body16/Body16L24_Regular` | 16px | 24px (1.5em) | 400 (Regular) | -1.875% | Input Value, Placeholder (Size 40) |
| `Body14/Body14L20_Regular` | 14px | 20px (1.43em) | 400 (Regular) | -2.14% | Input Value, Placeholder (Size 32) |
| `Body14/Body14L18_Medium` | 14px | 18px (1.29em) | 500 (Medium) | -2.14% | Title 라벨, Text Button, TextArea Title |
| `Body14/Body14L18_Semibold` | 14px | 18px (1.29em) | 600 (Semibold) | -2.14% | Calendar 요일 헤더 |
| `Body14/Body14L18_Regular` | 14px | 18px (1.29em) | 400 (Regular) | -2.14% | Calendar 날짜 (미선택) |
| `Body14/Body14L20_Medium` | 14px | 20px (1.43em) | 500 (Medium) | -2.14% | Calendar 보조 텍스트 |
| `Detail12/Detail12L16_Regular` | 12px | 16px (1.33em) | 400 (Regular) | -2.5% | Help Text, Counter |

---

## 3. Input Field

### 3.1 컴포넌트 구조

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

### 3.2 Properties (Variants)

| Property | Type | Values | Default | 설명 |
|---|---|---|---|---|
| `Size` | Variant | `32`, `40` | `40` | 입력 필드 높이 (px) |
| `State` | Variant | `default`, `focused` | `default` | 인터랙션 상태 |
| `Filled` | Variant | `true`, `false` | `false` | 값 입력 여부 |
| `Disabled` | Variant | `true`, `false` | `false` | 비활성 상태 |
| `Error` | Variant | `True`, `False` | `False` | 에러 상태 |

### 3.3 Boolean Properties (토글)

| Property | Default | 설명 |
|---|---|---|
| `Title` | `true` | Title 라벨 표시 여부 |
| `Help Text` | `true` | 하단 도움말 표시 여부 |
| `Text Button` | `false` | 입력 필드 내 텍스트 버튼 표시 여부 |
| `Clear Button` | `true` | 입력 값 초기화 버튼 표시 여부 |

### 3.4 Text Properties (편집 가능)

| Property | Default Value | 설명 |
|---|---|---|
| `↪ Title` | `Title` | 입력 필드 상단 라벨 텍스트 |
| `Placeholder` | `플레이스 홀더는 짧고 간결한 1문장으로 작성합니다.` | 미입력 상태 안내 텍스트 |
| `Value Text` | `사용자가 입력한 정보` | 입력된 값 텍스트 |

### 3.5 Size Spec

#### Size 32

| 요소 | 속성 | 값 |
|---|---|---|
| Input Container | padding | `6px 12px` |
| Input Container | border-radius | `4px` |
| Input Container | gap (내부 요소 간격) | `8px` |
| Value / Placeholder | font | Body14/Body14L20_Regular |

#### Size 40

| 요소 | 속성 | 값 |
|---|---|---|
| Input Container | padding | `7px 12px` |
| Input Container | border-radius | `4px` |
| Input Container | gap (내부 요소 간격) | `8px` |
| Value / Placeholder | font | Body16/Body16L24_Regular |

### 3.6 State Matrix

#### State × Filled = false (미입력)

| State | Border | Background | Text | 비고 |
|---|---|---|---|---|
| Default | `#E0E0E0` 1px | transparent | Placeholder `#8C8C8C` | 기본 대기 상태 |
| Focused | `#00A1FF` 1px | transparent | Placeholder `#8C8C8C` | 포커스 진입 |
| Disabled | `#E0E0E0` 1px | `#F5F5F5` | Placeholder `#C1C1C1` | 입력 불가 |
| Error | `#FF7777` 1px | transparent | Placeholder `#8C8C8C` | 유효성 검사 실패 |

#### State × Filled = true (입력 완료)

| State | Border | Background | Text | 비고 |
|---|---|---|---|---|
| Default | `#E0E0E0` 1px | transparent | Value `#141414` | 입력 완료 대기 |
| Focused | `#00A1FF` 1px | transparent | Value `#141414` + Cursor `#00A1FF` | 수정 중 |
| Disabled | `#E0E0E0` 1px | `#F5F5F5` | Value `#141414` | 입력 값 표시만 |
| Error | `#FF7777` 1px | transparent | Value `#141414` | 입력 값 에러 |

---

## 4. Input Area (Textarea)

### 4.1 컴포넌트 구조

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

### 4.2 Properties (Variants)

| Property | Type | Values | Default | 설명 |
|---|---|---|---|---|
| `State` | Variant | `Inactive`, `Pressed`, `Typing`, `Complete`, `Disabled`, `Error` | `Inactive` | 인터랙션 상태 |
| `Size` | Variant | `Small`, `Medium`, `Large` | `Small` | Textarea 높이 |

### 4.3 Boolean Properties (토글)

| Property | Default | 설명 |
|---|---|---|
| `Title` | `true` | Title 라벨 표시 여부 |
| `Help Text` | `true` | 하단 도움말 표시 여부 |

### 4.4 Size Spec

| Size | Textarea 높이 (Area 영역) | 설명 |
|---|---|---|
| Small | 76px | 짧은 텍스트 입력 |
| Medium | 136px | 중간 길이 텍스트 |
| Large | 196px | 긴 텍스트 입력 |

**공통 스타일**

| 요소 | 속성 | 값 |
|---|---|---|
| Textarea Container | padding | `16px` |
| Textarea Container | border-radius | `4px` |
| Textarea Container | gap | `10px` |
| Text | font | Body16/Body16L24_Regular |

### 4.5 State Matrix

| State | Border | Background | Text Color | 비고 |
|---|---|---|---|---|
| Inactive | `#E0E0E0` 1px | transparent | `#8C8C8C` (placeholder) | 미입력 대기 |
| Pressed | `#00A1FF` 1px | transparent | `#141414` (value) | 포커스 진입, 값 있음 |
| Typing | `#00A1FF` 1px | transparent | `#141414` + Cursor | 입력 중 |
| Complete | `#E0E0E0` 1px | transparent | `#141414` (value) | 입력 완료 |
| Disabled | `#E0E0E0` 1px | `#F5F5F5` | `#8C8C8C` | 입력 불가 |
| Error | `#FF7777` 1px | transparent | `#141414` (value) | 유효성 검사 실패 |

---

## 5. Sub-Component: Help Text

### 5.1 개요

Input Field, Input Area, Dropdown 컴포넌트와 함께 사용 가능한 보조 텍스트 컴포넌트입니다.

### 5.2 Variants

| Type | Error | 설명 |
|---|---|---|
| Help Text | `False` | 기본 도움말 텍스트 (`#8C8C8C`) |
| Help Text | `True` | 에러 도움말 텍스트 (`#F05656`) |
| Counter | `False` | 글자 수 카운터 (형식: `99/99`) |

### 5.3 스타일 스펙

| 요소 | 속성 | 값 |
|---|---|---|
| Help Text | font | Detail12/Detail12L16_Regular |
| Help Text (normal) | color | `#8C8C8C` |
| Help Text (error) | color | `#F05656` |
| Counter | font | Detail12/Detail12L16_Regular |
| Counter | color | `#8C8C8C` |
| Container | gap (아이콘과 텍스트) | `6px` |

---

## 6. Sub-Component: Text Button (Input 내부)

### 6.1 스타일 스펙

| 요소 | 속성 | 값 |
|---|---|---|
| Text Button | font | Body14/Body14L18_Medium |
| Text Button (active) | color | Primary1 (`#00A1FF`) |
| Text Button (disabled) | color | `#C1C1C1` |
| Container | padding | `1px 4px` |
| Container | height | `26px` |
| Container | gap | `4px` |

---

## 7. Calendar

### 7.1 컴포넌트 설명

날짜를 선택하기 위한 캘린더 컴포넌트입니다. 일간(Day) 뷰와 연월(Year & Month) 뷰를 지원하며, 페이지 네비게이션과 스크롤 방식 두 가지 인터랙션 패턴을 제공합니다.

### 7.2 컴포넌트 구조

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

### 7.3 Properties (Variants)

| Property | Type | Values | Default | 설명 |
|---|---|---|---|---|
| `Variant` | Variant | `page(day)`, `scroll`, `page(year & month)` | `page(day)` | 캘린더 표시 방식 |
| `Locale` | Variant | `ko`, `en`, `ja` | `ko` | 언어/로케일 설정 |

### 7.4 Sub-Component: Calendar Day

날짜 셀 단위 컴포넌트입니다.

#### Variant Properties

| Property | Type | Values | Default | 설명 |
|---|---|---|---|---|
| `Selected` | Variant | `true`, `false` | `false` | 선택 상태 |
| `Today` | Variant | `true`, `false` | `false` | 오늘 날짜 여부 |
| `Disabled` | Variant | `true`, `false` | `false` | 비활성 상태 |
| `Outside` | Variant | `true`, `false` | `false` | 현재 월 밖의 날짜 |

#### Boolean Properties

| Property | Default | 설명 |
|---|---|---|
| `Range` | `false` | 범위 선택 시 Range Strip 표시 여부 |
| `Label` | `15` | 날짜 숫자 텍스트 |

#### State Matrix

| Selected | Today | Disabled | Outside | 텍스트 색상 | 배경 | Font Weight | 비고 |
|---|---|---|---|---|---|---|---|
| false | false | false | false | `#141414` | transparent | 400 (Regular) | 기본 날짜 |
| true | false | false | false | `#FFFFFF` | `#141414` (circle) | 500 (Medium) | 선택된 날짜 |
| false | true | false | false | `#141414` | transparent + Dot `#141414` | 400 (Regular) | 오늘 (미선택) |
| true | true | false | false | `#FFFFFF` | `#141414` (circle) + Dot `#FFFFFF` | 500 (Medium) | 오늘 (선택됨) |
| false | false | true | false | `#C1C1C1` | transparent | 400 (Regular) | 비활성 날짜 |
| * | * | false | true | 상위와 동일 | 상위와 동일 | 상위와 동일 | opacity: 0.6 적용 |
| * | * | true | true | `#C1C1C1` | transparent | 상위와 동일 | 비활성 + 외부 월 |

### 7.5 Sub-Component: Arrow Button

월 이동 네비게이션 버튼입니다.

| 요소 | 속성 | 값 |
|---|---|---|
| Container | size | `32 × 32` px |
| Container | border-radius | `8px` |
| Container | layout | row, center-aligned |
| Arrow Button (Left/Right) | Disabled variant | `true`, `false` |

### 7.6 Sub-Component: Calendar Year Month

연/월 선택 그리드 셀 컴포넌트입니다.

| Property | Type | 설명 |
|---|---|---|
| Interaction Layer (Default) | State | `idle` 상태 기본 |
| Interaction Layer (Selected) | State | `idle` 상태 선택 |

### 7.7 Size Spec

| 요소 | 속성 | 값 |
|---|---|---|
| Calendar Day Cell | height | `40px` |
| Calendar Day Cell | width | fill (7등분) |
| Calendar Day Selected Circle | size | `40 × 40` px |
| Calendar Day Selected Circle | border-radius | `9999px` (원형) |
| Today Dot | size | `5 × 5` px |
| Today Dot | position | 하단 중앙 (y: 31px) |
| Weekday Row | height | `36px` |
| Weekday Font | style | Body14/Body14L18_Semibold, `#8C8C8C` |
| Day Label Font (default) | style | Body14/Body14L18_Regular, `#141414` |
| Day Label Font (selected) | style | Body14/Body14L18_Medium, `#FFFFFF` |
| Header → Body gap | gap | `12px` |
| Body (Weekdays → Days) gap | gap | `4px` |
| Toggle View Button | height | `32px` |
| Toggle View Button | padding | `0px 12px` |
| Toggle View Button | border-radius | `8px` |
| Arrow Buttons gap | gap | `8px` |

### 7.8 Range Strip (범위 선택)

날짜 범위 선택 시 연속된 날짜 간 배경을 연결하는 스트립 컴포넌트입니다.

| Property | Values | 설명 |
|---|---|---|
| `Option` | `start`, `middle`, `end` | 범위 내 위치 |

---

## 8. Box Button

### 8.1 컴포넌트 설명

폼 제출, 액션 트리거 등에 사용되는 박스형 버튼 컴포넌트입니다. Filled와 Outlined 두 가지 형태를 지원하며, Primary1과 Base1 컬러 변형을 제공합니다.

개발 완료 여부: Android ✅, iOS ✅, Web ✅ (업데이트 개발중)

### 8.2 컴포넌트 구조

```
🌀 Box Button
├── [Left Icon] (선택)
├── Title (버튼 텍스트)
└── [Right Icon] (선택)
```

### 8.3 Properties (Variants)

| Property | Type | Values | Default | 설명 |
|---|---|---|---|---|
| `Shape` | Variant | `Filled`, `Outlined` | `Filled` | 버튼 형태 (채움/테두리) |
| `Variant` | Variant | `Primary1`, `Base1` | `Primary1` | 컬러 변형 |
| `Loading` | Variant | `True`, `False` | `False` | 로딩 상태 |
| `State` | Variant | `Enabled`, `Disabled` | `Enabled` | 활성/비활성 상태 |
| `Size` | Variant | `50(PC only)`, `44`, `40`, `32`, `28` | `44` | 버튼 높이 (px) |

### 8.4 Boolean Properties (토글)

| Property | Default | 설명 |
|---|---|---|
| `🔸 Left Icon` | `true` | 좌측 아이콘 표시 여부 |
| `🔸 Right Icon` | `true` | 우측 아이콘 표시 여부 |

### 8.5 Text Properties (편집 가능)

| Property | Default Value | 설명 |
|---|---|---|
| `Title` | `Button` | 버튼 라벨 텍스트 |

### 8.6 Size Spec

| Size | Height | Padding | gap | 비고 |
|---|---|---|---|---|
| 50 (PC only) | 50px | `15px 16px` | `4px` | PC 전용 대형 버튼 |
| 44 | 44px | `12px 16px` | `4px` | 기본 버튼 |
| 40 | 40px | `10px 16px` | `4px` | 중형 버튼 |
| 32 | 32px | `6px 8px` | `4px` | 소형 버튼 |
| 28 | 28px | `4px 8px` | `4px` | 초소형 버튼 |

**공통 스타일**

| 요소 | 속성 | 값 |
|---|---|---|
| Container | border-radius | `4px` |
| Container | layout | row, center-aligned |
| Container | gap | `4px` |

### 8.7 Shape × Variant × State Matrix

#### Filled

| Variant | State | Background | Border | Text/Icon Color |
|---|---|---|---|---|
| Primary1 | Enabled | `#00A1FF` | none | `#FFFFFF` |
| Primary1 | Disabled | `#EDEDED` | none | (muted) |
| Primary1 | Loading | `#00A1FF` | none | Spinner |

#### Outlined

| Variant | State | Background | Border | Text/Icon Color |
|---|---|---|---|---|
| Primary1 | Enabled | transparent | `#00A1FF` 1px | `#00A1FF` |
| Primary1 | Disabled | transparent | `#E0E0E0` 1px | (muted) |
| Primary1 | Loading | transparent | `#00A1FF` 1px | Spinner |
| Base1 | Enabled | transparent | `#E0E0E0` 1px | `#141414` |
| Base1 | Disabled | transparent | `#E0E0E0` 1px | (muted) |
| Base1 | Loading | transparent | `#E0E0E0` 1px | Spinner |

### 8.8 Usage Guidelines

Filled Primary1은 페이지 내 가장 중요한 CTA(Call to Action)에 사용합니다. Outlined Base1은 보조 액션에, Outlined Primary1은 Filled와 동급이나 시각적 무게를 줄이고 싶을 때 사용합니다. 하나의 폼에 Filled 버튼은 1개만 사용하는 것을 권장합니다.

---

## 9. Usage Guidelines (공통)

### 9.1 Help Text 사용 규칙

Help Text와 Counter를 함께 사용할 수 없습니다. 하나의 Input에는 Help Text 또는 Counter 중 하나만 사용해야 합니다.

### 9.2 Height (Textarea)

입력된 텍스트가 지정된 영역을 초과하면 스크롤이 발생합니다. 줄이 바뀌면 이전 줄이 화면 위로 스크롤됩니다.

### 9.3 Placeholder 작성 가이드

플레이스홀더는 짧고 간결한 1문장으로 작성하는 것을 권장하나, 필요한 가이드 내용에 따라 여러 문장을 사용할 수 있습니다.

---

## 10. 컴포넌트 조합 (Composition)

### 10.1 Input Field 전체 조합

```
[Title: True] + [Help Text: True]
├── Title 라벨 (Body14/Body14L18_Medium, #828C94)
├── Input Container
│   ├── Placeholder or Value
│   ├── [Text Button] (선택)
│   └── [Clear Button] (선택)
└── Help Text (Detail12/Detail12L16_Regular, #8C8C8C or #F05656)
```

### 10.2 조합별 간격

| 구간 | 값 |
|---|---|
| Title → Input Container | `8px` |
| Input Container → Help Text | `4px` |
| Input Field 전체 gap (내부) | `8px` |

---

## 11. Spacing & Layout

### 11.1 Input Field 내부 레이아웃

| 요소 | Layout | 값 |
|---|---|---|
| 전체 컨테이너 | direction | column |
| 전체 컨테이너 | gap | `8px` |
| Field 영역 | direction | column |
| Field 영역 | gap | `4px` |
| Input (Size 32) | direction | row, center-aligned |
| Input (Size 32) | padding | `6px 12px` |
| Input (Size 40) | direction | row, center-aligned |
| Input (Size 40) | padding | `7px 12px` |

### 11.2 Input Area 내부 레이아웃

| 요소 | Layout | 값 |
|---|---|---|
| 전체 컨테이너 | direction | column |
| 전체 컨테이너 | gap | `4px` |
| Field 영역 | direction | column |
| Field 영역 | gap | `8px` |
| Textarea | padding | `16px` |
| Textarea | border-radius | `4px` |

---

## 12. UX Writing

> 📌 UX Writing 가이드 문서를 참고해주세요.

---

## Appendix: Figma 링크

| 컴포넌트 | Figma URL |
|---|---|
| Input Field | [ODS Input Field](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=47047-72484&m=dev) |
| Input Area (Textarea) | [ODS Input Area](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=47058-12028&m=dev) |
| Calendar | [ODS Calendar](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=59334-33219&m=dev) |
| Box Button | [ODS Box Button](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=46912-42169&m=dev) |
| Color Token | [ODS Color Token](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=58024-4643&m=dev) |
| Typography | [ODS Typography](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=47320-24250&m=d) |
