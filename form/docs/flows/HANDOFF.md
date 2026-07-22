# 인터랙션 핸드오프 문서
## 오늘의집 이사 상담 신청 프로토타입

**버전:** 1.0  
**최종 수정일:** 2026-04-21  
**프레임 사이즈:** 375x812 (Mobile)

---

## 목차
1. [프로토타입 개요](#프로토타입-개요)
2. [화면 구조](#화면-구조)
3. [시간대 선택 UX](#시간대-선택-ux)
4. [입력폼 플로우](#입력폼-플로우)
5. [매칭 업체 페이지](#매칭-업체-페이지)
6. [공통 컴포넌트](#공통-컴포넌트)
7. [디자인 토큰](#디자인-토큰)

---

## 프로토타입 개요

### 목적
이사 견적 신청 과정의 시간대 선택 UX를 2가지 시안으로 비교 검증

### 주요 플로우
```
입력폼 시작
  ↓
1. 이사종류 선택
  ↓
2. 이사일 & 시간대 선택 ← 핵심 UX 검증 영역
  ↓
3. 출발지 정보
  ↓
4. 도착지 정보
  ↓
5. 포장서비스 선택
  ↓
6. 개인정보 입력
  ↓
매칭 업체 목록
```

---

## 화면 구조

### 레이아웃 시스템
모든 화면은 3단 구조를 따릅니다:

```
┌─────────────────────────┐
│  상단 고정 영역          │ ← Status Bar + Navigation (88px)
├─────────────────────────┤
│                         │
│  바디 영역 (스크롤)      │ ← 동적 컨텐츠
│                         │
├─────────────────────────┤
│  하단 고정 영역          │ ← CTA 버튼 + Home Indicator (94px)
└─────────────────────────┘
```

**CSS 구현:**
```css
/* 상단 고정 */
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: 10;

/* 바디 스크롤 */
position: absolute;
left: 0;
right: 0;
top: 88px;
bottom: 94px;
overflow-y: auto;

/* 하단 고정 */
position: absolute;
bottom: 0;
left: 0;
right: 0;
z-index: 10;
```

---

## 시간대 선택 UX

### 시안 A: 버튼 그리드 (Multiple Select)

#### 기본 동작
1. **날짜 미선택 상태**
   - 캘린더만 노출
   - 시간대 영역 숨김

2. **날짜 선택 시**
   - 시간대 영역 slide-in 애니메이션으로 노출
   - 애니메이션: `animate-in slide-in-from-top-4 fade-in duration-300`

3. **시간대 선택**
   - Multiple select 방식
   - 클릭하여 선택/해제
   - 최소 1개 이상 선택 필요

#### UI 상태

**선택된 시간대 표시**
```
선호 시간대 선택
오전 12:00, 오전 1:00, 오전 2:00  ← 선택된 시간 나열
```

**시간대 미선택 시**
```
선호 시간대 선택
상담 후 조율  ← 기본 문구
```

**버튼 상태**
- 미선택: `border-[#e0e0e0] bg-white text-[#141414]`
- 선택됨: `border-[#141414] bg-[#141414] text-white`
- 호버: `hover:border-[#141414]`

#### 시간 옵션
- **오전:** 12:00, 1:00, 2:00, ... 11:00 (12개)
- **오후:** 12:00, 1:00, 2:00, ... 11:00 (12개)
- **저장 형식:** `["오전 12:00", "오전 1:00", ...]`

#### 다음 단계 진행 조건
```javascript
const canProceed = selectedDate !== null && selectedTime.length > 0;
```

---

### 시안 B: Range Slider

#### 기본 동작
1. **날짜 미선택 상태**
   - 캘린더만 노출
   - 시간대 영역 숨김

2. **날짜 선택 시**
   - 시간대 영역 slide-in 애니메이션으로 노출

3. **초기 범위**
   - 오전: 6:00 - 12:00
   - 오후: 13:00 - 18:00

#### UI 구성

**헤더 영역**
```
선호 시간대 선택                    [초기화 아이콘] 초기화
```

**오전 Slider**
```
오전                                    6:00 - 12:00
├──────■■■■■■──────────┤
0      3      6      9      12
```

**오후 Slider**
```
오후                                    13:00 - 18:00
├──────────■■■■■────────┤
12     15     18     21     24
```

#### Slider 스펙

**Track**
- 높이: 6px
- 배경: `var(--bg-weak)` (회색)
- Border radius: 전체 라운드

**Range (선택된 구간)**
- 배경: `#141414` (검은색)

**Thumb (핸들)**
- 크기: 20x20px
- 배경: 흰색
- 테두리: 2px solid #141414
- 그림자: shadow
- 커서: `cursor-grab` → `active:cursor-grabbing`

#### 시간 범위 표시 규칙

**전체 범위 선택 시**
- 오전 0:00 - 12:00 → "오전 시간 전체"
- 오후 12:00 - 24:00 → "오후 시간 전체"

**부분 범위 선택 시**
- "6:00 - 12:00"
- "13:00 - 18:00"

#### 초기화 동작
버튼 클릭 시:
```javascript
morningRange = [6, 12];
afternoonRange = [13, 18];
```

#### 다음 단계 진행 조건
```javascript
const canProceed = selectedDate !== null && selectedTime !== null;
```

---

## 입력폼 플로우

### Step 1: 이사종류 선택

**옵션:**
- 가정이사
- 소형이사 (원룸, 투룸)

**상태:**
- `moveType: 'home' | 'small' | null`

**진행 조건:**
- 1개 옵션 선택 필수

---

### Step 2: 이사일 & 시간대 선택

#### 캘린더 UI

**월 네비게이션**
```
[2026년 5월 ▼]                    [◀] [▶]
```

**날짜 그리드**
- 7x5 그리드 (일~토)
- 이전/다음 달 날짜는 60% opacity

**선택된 날짜 스타일**
- 40x40px 검은 원형 배경
- 흰색 텍스트
- 하단 흰색 점 표시

**오늘 날짜 표시**
- 하단 검은색 점 표시 (미선택 시)

#### 시간대 선택
- 시안 A 또는 시안 B 적용
- 위 섹션 참조

**상태:**
```javascript
{
  moveDate: Date | null,
  moveTime: string[] | { start: number; end: number } | null
}
```

**진행 조건:**
- 날짜 선택 필수
- 시간대 선택 필수 (시안 A: 1개 이상, 시안 B: range 설정)

---

### Step 3: 출발지 정보

**입력 필드:**
- 주소 (필수)
- 상세주소
- 층수 (필수)
- 엘리베이터 유무 (필수) - 라디오 버튼
- 평수 (필수)

**진행 조건:**
```javascript
address && floor && hasElevator !== null && pyeong
```

---

### Step 4: 도착지 정보

**입력 필드:**
- 주소 (필수)
- 상세주소
- 층수 (필수)
- 엘리베이터 유무 (필수)
- 평수 (필수)
- 가족 구성원 수 (필수)

**진행 조건:**
```javascript
address && floor && hasElevator !== null && pyeong && familySize
```

---

### Step 5: 포장서비스 선택

**옵션:**
- 전체 포장
- 부분 포장
- 일반 이사

**상태:**
- `packingType: 'full' | 'half' | 'general' | null`

**진행 조건:**
- 1개 옵션 선택 필수

---

### Step 6: 개인정보 입력

**입력 필드:**
- 이름 (필수)
- 휴대폰 번호 (필수)
  - 국번: 010 (고정)
  - 번호: 8자리 입력
- 메모 (선택)
- 책임보장 서비스 동의 (기본 체크)

**진행 조건:**
```javascript
name && phoneNumber
```

**완료 후:**
- 매칭 업체 페이지로 이동

---

## 매칭 업체 페이지

### 상태별 화면

**매칭 중 (현재 버전)**
- 로딩 상태
- "업체 매칭 중입니다" 메시지
- 예상 대기 시간 표시

**매칭 완료**
- 업체 리스트 표시
- 각 업체별 견적 정보
- 비교 기능

---

## 공통 컴포넌트

### 네비게이션 바

**좌측 영역:**
- 뒤로가기 버튼 (Step 2 이상)
- X 닫기 버튼 (Step 1)

**중앙 영역:**
- "이사 신청" 타이틀

**Progress Bar:**
- 현재 단계 / 전체 단계 시각화
- 색상: `#0AA5FF`

---

### CTA 버튼

**Step 1:**
- "다음" 버튼만 표시
- 전체 너비

**Step 2-6:**
```
┌────────────┬───────────────────────────┐
│   이전     │          다음              │
│  (107px)   │        (flex-1)           │
└────────────┴───────────────────────────┘
```

**버튼 상태:**
- 활성: `bg-[var(--bg-brand)]` (파란색)
- 비활성: `bg-[var(--bg-disabled)]` (회색)
- 높이: 50px

---

### 프로토타입 컨트롤 패널

**위치:** 우측 상단
**너비:** 240px

**구조:**
```
┌─────────────────────────┐
│  [<]  컨트롤 패널        │ ← 접기/펼치기 버튼
├─────────────────────────┤
│  시간대 선택 UX          │
│  • 시안 A: 버튼 그리드  │ ← 선택된 화면
│  • 시안 B: Range Slider │
├─────────────────────────┤
│  입력폼                  │
│  • 현재 버전            │
│  • 1. 이사종류          │
│  • 2. 이사일            │
│  ...                    │
├─────────────────────────┤
│  매칭 업체 페이지        │
│  • 현재 버전            │
├─────────────────────────┤
│  🔄 Restart             │
│  ? 도움말               │
└─────────────────────────┘
```

**인터랙션:**
- 화면 선택 시 즉시 전환
- Restart 버튼: 첫 화면으로 + 전체 상태 초기화
- 접기 버튼: 패널 숨김 (팝오버 열림 시 자동 숨김)

---

## 디자인 토큰

### Typography

**Heading:**
```css
.text-heading-38 { font-size: 38px; line-height: 50px; font-weight: 700; }
.text-heading-24 { font-size: 24px; line-height: 32px; font-weight: 700; }
.text-heading-18 { font-size: 18px; line-height: 24px; font-weight: 700; }
.text-heading-16 { font-size: 16px; line-height: 22px; font-weight: 700; }
```

**Body:**
```css
.text-body-16 { font-size: 16px; line-height: 24px; }
.text-body-15 { font-size: 15px; line-height: 22px; }
.text-body-14 { font-size: 14px; line-height: 20px; }
```

**Detail:**
```css
.text-detail-12 { font-size: 12px; line-height: 16px; }
.text-detail-10 { font-size: 10px; line-height: 12px; }
```

### Colors

**Background:**
```css
--bg-neutral: #FFFFFF;        /* 기본 배경 */
--bg-weak: #F7F9FA;          /* 회색 배경 */
--bg-brand: #35C5F0;         /* 브랜드 파란색 */
--bg-disabled: #EDEDED;       /* 비활성 */
```

**Foreground:**
```css
--fg-neutral: #141414;        /* 기본 텍스트 */
--fg-weak: #828C94;          /* 보조 텍스트 */
--fg-inverse: #FFFFFF;        /* 반전 텍스트 */
```

**Border:**
```css
--border-neutral: #DADDE0;    /* 기본 테두리 */
--border-strong: #E0E0E0;     /* 강조 테두리 */
```

### Spacing

**Padding:**
- 화면 좌우: 16px
- 섹션 상하: 20px

**Gap:**
- 입력 필드 간격: 12px
- 섹션 간격: 20px

### Border Radius
- 버튼: 4px, 8px
- 카드: 8px, 12px
- 프레임: 27px (내부), 32px (외부)

---

## 애니메이션 & 트랜지션

### 화면 전환
- 즉시 전환 (페이드 없음)
- 스크롤 위치 초기화

### 시간대 영역 노출
```css
animate-in slide-in-from-top-4 fade-in duration-300
```

### 버튼 호버
```css
transition-colors duration-200
```

### Slider 드래그
```css
cursor: grab;
active:cursor-grabbing;
transition-colors
```

---

## 유효성 검증

### 필수 입력 체크
- 각 Step별 진행 조건 참조
- 조건 미충족 시 "다음" 버튼 비활성화

### 입력 형식
- 휴대폰 번호: 숫자만, 8자리
- 평수: 숫자만
- 층수: 숫자만

### 에러 상태
- 현재 구현되지 않음 (추후 추가 필요)

---

## 접근성

### 키보드 네비게이션
- Tab으로 포커스 이동
- Enter/Space로 선택
- Slider는 화살표 키로 조절

### 포커스 스타일
```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[#141414]
focus-visible:ring-offset-2
```

### ARIA 레이블
```html
<button aria-label="컨트롤 패널 접기">
<button aria-label="초기화">
```

---

## 기술 스택

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI (Slider, Popover)
- **Icons:** Lucide React
- **Date Handling:** date-fns

---

## 파일 구조

```
src/app/
├── components/
│   ├── flow/
│   │   ├── InputFlowLayout.tsx          # 레이아웃 래퍼
│   │   └── steps/
│   │       ├── Step1Type.tsx            # 이사종류
│   │       ├── Step2Date.tsx            # 시안 A
│   │       ├── Step2DateVariantB.tsx    # 시안 B
│   │       ├── Step3Departure.tsx       # 출발지
│   │       ├── Step4Arrival.tsx         # 도착지
│   │       ├── Step5Packing.tsx         # 포장서비스
│   │       └── Step6UserInfo.tsx        # 개인정보
│   ├── screens/
│   │   ├── InputFlowScreen.tsx          # 입력폼 통합
│   │   ├── TimeSelectionVariantA.tsx    # 시안 A 래퍼
│   │   ├── TimeSelectionVariantB.tsx    # 시안 B 래퍼
│   │   └── MovingRequestScreenVarA.tsx  # 매칭 업체
│   └── ui/
│       ├── slider.tsx                   # Range Slider
│       └── popover.tsx                  # 도움말 팝오버
├── App.tsx                              # 메인 + 컨트롤 패널
└── styles/
    ├── theme.css                        # 디자인 토큰
    └── fonts.css                        # 폰트 import
```

---

## 주요 상태 관리

### FormData 구조
```typescript
interface FormData {
  moveType: 'home' | 'small' | null;
  moveDate: Date | null;
  moveTime: string[] | { start: number; end: number } | null;
  departure: {
    address: string;
    detailAddress: string;
    floor: string;
    hasElevator: boolean | null;
    pyeong: string;
  };
  arrival: {
    address: string;
    detailAddress: string;
    floor: string;
    hasElevator: boolean | null;
    pyeong: string;
    familySize: string;
  };
  packingType: 'full' | 'half' | 'general' | null;
  userInfo: {
    name: string;
    phonePrefix: string;
    phoneNumber: string;
    memo: string;
    guaranteed: boolean;
  };
}
```

---

## 브라우저 지원

- Chrome 최신
- Safari 최신 (iOS 포함)
- Firefox 최신
- Edge 최신

---

## 알려진 제한사항

1. **캘린더 월 선택**
   - 드롭다운 UI만 존재, 실제 동작 없음

2. **주소 검색**
   - 입력 필드만 존재, 실제 API 연동 없음

3. **에러 상태**
   - 유효성 검증 메시지 미구현

4. **로딩 상태**
   - 스피너 등 로딩 UI 미구현

---

## 다음 단계 (권장사항)

### 우선순위 높음
- [ ] 실제 사용자 테스트로 시안 A vs B 검증
- [ ] 에러 메시지 및 유효성 검증 UI 추가
- [ ] 주소 검색 API 연동

### 우선순위 중간
- [ ] 캘린더 월/년 선택 기능 구현
- [ ] 로딩 상태 UI 추가
- [ ] 스크린 리더 접근성 개선

### 우선순위 낮음
- [ ] 애니메이션 미세 조정
- [ ] 다크모드 지원
- [ ] 태블릿 반응형 대응

---

## 문의

프로토타입 관련 문의사항은 개발팀으로 연락 바랍니다.

**문서 버전:** 1.0  
**작성일:** 2026-04-21
