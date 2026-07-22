# 오늘의집 아이콘 라이브러리

오늘의집 디자인 시스템 기반 통합 아이콘 라이브러리입니다.

## 📚 참고 자료

- **디자인 시스템**: https://fe.co-workerhou.se/catalog/?path=/docs/documentation-1-icons--docs
- **Figma 아이콘 세트**: 오늘의집 디자인 시스템

## 🎯 특징

- **TypeScript 완벽 지원**: 타입 안전성 및 자동완성
- **일관된 인터페이스**: 모든 아이콘이 동일한 Props 사용
- **디자인 시스템 준수**: CSS 변수와 통합
- **트리 쉐이킹**: 사용하지 않는 아이콘은 번들에 포함되지 않음
- **접근성**: ARIA 레이블 지원 가능

## 📦 설치 및 사용

### 기본 사용법

```tsx
import { Icon } from '@/components/icons/IconLibrary';

function MyComponent() {
  return (
    <Icon 
      name="check" 
      size={24} 
      color="var(--fg-neutral)" 
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | **required** | 아이콘 이름 (자동완성 지원) |
| `size` | `number \| string` | `24` | 아이콘 크기 (px) |
| `color` | `string` | `'currentColor'` | 아이콘 색상 (CSS 변수 권장) |
| `className` | `string` | `''` | 추가 CSS 클래스 |
| `strokeWidth` | `number` | `2` | 선 두께 |
| `onClick` | `() => void` | `undefined` | 클릭 핸들러 |

### 디자인 시스템 색상 사용

```tsx
// ✅ 권장: CSS 변수 사용
<Icon name="check" color="var(--fg-neutral)" />
<Icon name="alert" color="var(--fg-critical)" />
<Icon name="info" color="var(--fg-brand)" />

// ❌ 비권장: 하드코딩된 색상
<Icon name="check" color="#141414" />
```

### 반응형 크기

```tsx
// 고정 크기
<Icon name="home" size={24} />

// Tailwind 클래스 사용
<Icon name="home" size={24} className="md:w-8 md:h-8" />
```

### 인터랙티브 아이콘

```tsx
function DeleteButton() {
  const handleDelete = () => {
    console.log('Delete clicked');
  };

  return (
    <Icon 
      name="trash" 
      size={20}
      color="var(--fg-critical)"
      onClick={handleDelete}
      className="hover:opacity-80 transition-opacity"
    />
  );
}
```

## 📋 아이콘 카테고리

### Navigation (네비게이션)
- `chevron-left`, `chevron-right`, `chevron-up`, `chevron-down`
- `arrow-left`, `arrow-right`
- `close`

### Status & Actions (상태 및 액션)
- `check`, `check-circle`
- `plus`, `minus`
- `search`, `refresh`
- `upload`, `download`, `share`
- `trash`, `edit`, `copy`

### Content (콘텐츠)
- `home`, `user`, `settings`
- `help`, `info`, `alert`, `warning`, `error`

### Commerce (커머스)
- `cart`, `heart`, `star`, `bookmark`

### Communication (커뮤니케이션)
- `phone`, `mail`, `message`, `notification`

### Media (미디어)
- `image`, `camera`, `video`
- `play`, `pause`

### Moving Service (이사 서비스 전용)
- `truck` (이사 트럭)
- `box` (짐/박스)
- `location` (위치)
- `calendar` (날짜)
- `clock` (시간)
- `package` (포장)

## 🎨 사용 예시

### 버튼과 함께 사용

```tsx
function PrimaryButton() {
  return (
    <button className="btn-primary flex items-center gap-2">
      <Icon name="check" size={20} color="var(--fg-inverse)" />
      <span>확인</span>
    </button>
  );
}
```

### 입력 필드 아이콘

```tsx
function SearchInput() {
  return (
    <div className="relative">
      <Icon 
        name="search" 
        size={20} 
        color="var(--fg-weak)"
        className="absolute left-3 top-1/2 -translate-y-1/2"
      />
      <input 
        type="text" 
        placeholder="검색..." 
        className="pl-10"
      />
    </div>
  );
}
```

### 상태 표시

```tsx
function StatusBadge({ status }: { status: 'success' | 'error' | 'warning' }) {
  const iconMap = {
    success: { name: 'check-circle', color: 'var(--fg-brand)' },
    error: { name: 'error', color: 'var(--fg-critical)' },
    warning: { name: 'warning', color: 'var(--fg-attention)' },
  };

  const { name, color } = iconMap[status];

  return (
    <div className="flex items-center gap-2">
      <Icon name={name as IconName} size={16} color={color} />
      <span>{status}</span>
    </div>
  );
}
```

### 네비게이션 헤더

```tsx
function Header({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <header className="flex items-center gap-3 p-4">
      <Icon 
        name="chevron-left" 
        size={24} 
        color="var(--fg-neutral)"
        onClick={onBack}
      />
      <h1 className="text-heading-18">{title}</h1>
    </header>
  );
}
```

## 🔧 아이콘 추가하기

새로운 아이콘을 추가하려면:

1. **IconName 타입에 추가**
```tsx
export type IconName =
  // ... existing icons
  | 'my-new-icon';
```

2. **iconPaths 객체에 SVG 경로 추가**
```tsx
const iconPaths: Record<IconName, { viewBox: string; paths: string[] }> = {
  // ... existing icons
  'my-new-icon': {
    viewBox: '0 0 24 24',
    paths: ['M12 2L2 7l10 5 10-5-10-5z'],
  },
};
```

3. **사용**
```tsx
<Icon name="my-new-icon" size={24} />
```

## 📐 SVG 경로 추출 방법

### Figma에서 추출
1. Figma에서 아이콘 선택
2. 우클릭 → "Copy as SVG"
3. SVG 코드에서 `<path d="...">` 부분 추출
4. `viewBox` 값 확인

### 예시
```xml
<!-- Figma에서 복사한 SVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17l-5-5" stroke="black" stroke-width="2"/>
</svg>

<!-- iconPaths에 추가할 내용 -->
{
  viewBox: '0 0 24 24',
  paths: ['M20 6L9 17l-5-5'],
}
```

## 🎯 모범 사례

### ✅ DO (권장)

```tsx
// 디자인 시스템 색상 사용
<Icon name="check" color="var(--fg-brand)" />

// 일관된 크기 사용 (16, 20, 24, 32)
<Icon name="home" size={24} />

// onClick이 있을 때 cursor 자동 적용됨
<Icon name="close" onClick={handleClose} />

// 의미 있는 크기 조합
<Icon name="info" size={16} /> {/* 작은 인라인 아이콘 */}
<Icon name="search" size={20} /> {/* 입력 필드 */}
<Icon name="home" size={24} /> {/* 버튼, 네비게이션 */}
<Icon name="image" size={32} /> {/* 큰 강조 아이콘 */}
```

### ❌ DON'T (비권장)

```tsx
// 하드코딩된 색상
<Icon name="check" color="#00A1FF" />

// 비표준 크기
<Icon name="home" size={23} />

// currentColor를 사용할 수 있는데 명시적으로 지정
<Icon name="check" color="black" className="text-black" />
```

## 🔍 타입 안전성

```tsx
// ✅ 자동완성 지원
<Icon name="check" />  // IDE가 모든 아이콘 이름 제안

// ❌ 컴파일 에러
<Icon name="invalid-icon" />  // TypeScript 에러

// 모든 아이콘 이름 목록
import { ICON_NAMES } from '@/components/icons/IconLibrary';
console.log(ICON_NAMES); // ['check', 'home', ...]
```

## 🚀 성능 최적화

- **트리 쉐이킹**: 사용하지 않는 아이콘은 번들에 포함되지 않음
- **인라인 SVG**: 별도의 파일 요청 없음
- **메모이제이션**: 필요시 `React.memo` 사용

```tsx
import React from 'react';
import { Icon } from '@/components/icons/IconLibrary';

const MemoizedIcon = React.memo(Icon);
```

## 📄 라이선스

오늘의집 디자인 시스템을 따르며, 내부 프로젝트에서만 사용 가능합니다.

## 🔗 관련 리소스

- [디자인 시스템 문서](https://fe.co-workerhou.se/catalog/)
- [Color Tokens](/src/styles/theme.css)
- [Typography System](/src/styles/theme.css)
