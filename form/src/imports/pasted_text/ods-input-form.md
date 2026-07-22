# 🌀 ODS Input Form 컴포넌트 및 페이지 정의

> **Design System**: ODS (Ohouse Design System)
> **Version**: 1.0
> **Last Updated**: 2026-03-18
> **Status**: ✅ Android/iOS 사용가능 | ✅ Web 사용가능

---

## 1. Overview

### 1.1 컴포넌트 설명

사용자에게 짧은 텍스트나 숫자 등의 정보를 입력받을 때 사용하는 폼 컴포넌트입니다. Input Field와 Input Area(Textarea) 두 가지 유형으로 구성되며, 각각 단일 라인 입력과 여러 줄 텍스트 입력을 담당합니다.

### 1.2 컴포넌트 목록

| 컴포넌트 | 용도 | 플랫폼 지원 |
|---|---|---|
| 🌀 Input Field | 짧은 텍스트, 숫자 등 단일 라인 입력 | Android ✅ · iOS ✅ · Web ✅ |
| 🌀 Input Area (Textarea) | 여러 줄의 텍스트 입력 또는 내용 표시 | Android ❌ · iOS ✅ · Web ❌ |

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

## 7. Usage Guidelines

### 7.1 Help Text 사용 규칙

Help Text와 Counter를 함께 사용할 수 없습니다. 하나의 Input에는 Help Text 또는 Counter 중 하나만 사용해야 합니다.

### 7.2 Height (Textarea)

입력된 텍스트가 지정된 영역을 초과하면 스크롤이 발생합니다. 줄이 바뀌면 이전 줄이 화면 위로 스크롤됩니다.

### 7.3 Placeholder 작성 가이드

플레이스홀더는 짧고 간결한 1문장으로 작성하는 것을 권장하나, 필요한 가이드 내용에 따라 여러 문장을 사용할 수 있습니다.

---

## 8. 컴포넌트 조합 (Composition)

### 8.1 Input Field 전체 조합

```
[Title: True] + [Help Text: True]
├── Title 라벨 (Body14/Body14L18_Medium, #828C94)
├── Input Container
│   ├── Placeholder or Value
│   ├── [Text Button] (선택)
│   └── [Clear Button] (선택)
└── Help Text (Detail12/Detail12L16_Regular, #8C8C8C or #F05656)
```

### 8.2 조합별 간격

| 구간 | 값 |
|---|---|
| Title → Input Container | `8px` |
| Input Container → Help Text | `4px` |
| Input Field 전체 gap (내부) | `8px` |

---

## 9. Spacing & Layout

### 9.1 Input Field 내부 레이아웃

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

### 9.2 Input Area 내부 레이아웃

| 요소 | Layout | 값 |
|---|---|---|
| 전체 컨테이너 | direction | column |
| 전체 컨테이너 | gap | `4px` |
| Field 영역 | direction | column |
| Field 영역 | gap | `8px` |
| Textarea | padding | `16px` |
| Textarea | border-radius | `4px` |

---

## 10. UX Writing

> 📌 UX Writing 가이드 문서를 참고해주세요.

---

## Appendix: Figma 링크

| 컴포넌트 | Figma URL |
|---|---|
| Input Field | [ODS Input Field](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=47047-72484&m=dev) |
| Input Area (Textarea) | [ODS Input Area](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=47058-12028&m=dev) |
| Color Token | [ODS Color Token](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=58024-4643&m=dev) |
| Typography | [ODS Typography](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-?node-id=47320-24250&m=d) |
