# 레이아웃 가이드라인

## 개요
이 문서는 오늘의집 이사 상담 신청 내역 페이지의 레이아웃 구조를 정의합니다.

## 뷰포트 및 컨테이너
- **기준 뷰포트**: 1440px (데스크톱)
- **콘텐츠 영역 Max-Width**: 약 1256px
- **Padding**: 좌우 92px
- **정렬**: 중앙 정렬

## 섹션 구조 (Vertical Stack)

### 1. ConsultationHeader
- **Height**: 80px (Padding 20px 0 포함)
- **Layout**: Flex Row, Space-between
- **구성**:
  - Left: 아이콘(40px) + 텍스트(Title, Subtitle)
  - Right: 매칭중단 버튼

### 2. MatchingStatusBar
- **Margin-top**: 24px
- **Height**: 약 56px (Padding 16px 20px)
- **Background**: #F7F9FA
- **Layout**: Flex Row, Gap 12px

### 3. 신청 내역 (Main Content)
- **Margin-top**: 40px
- **Title**: "신청 내역" (Margin-bottom 16px)

#### 3-1. 내 신청정보 (Subsection)
- **Title**: "내 신청정보"
- **Item Layout**: Label(120px) + Value(Flex 1)
- **Spacing**: Item간 12px Padding

#### 3-2. 출발지 (Subsection)
- **Title**: "출발지"
- **Structure**: InfoField List

#### 3-3. 도착지 (Subsection)
- **Title**: "도착지"
- **Structure**: InfoField List

#### 3-4. 메모 (Subsection)
- **Title**: "메모"
- **Content**: MemoBox (Background #F7F9FA, Min-height 100px)

## Spacing System
- **Section Gap**: 40px
- **Inner Element Gap**: 12px, 16px, 24px
- **Divider**: Margin 24px 0
