# b-1. 디자인시스템 에셋 스토리북 연결

목적: 디자인시스템 아이콘/에셋을 스토리북과 구현 경로에 일관되게 매핑합니다.

## 스토리북 기준 링크

### 상단 네비게이션 (GNB)

- menu: `IconLine3Horizontal`
- scrap: `IconBookmark`
- alarm: `IconBell`
- cart: `IconCart`

### 하단 GNB

- 홈: `IconHouse`
- 집구경: `IconBubbleLeftBubbleRight`
- 쇼핑: `IconShoppingBag`
- 인테리어/생활: `IconFaceSmilingSafetyHelmet`
- 마이페이지: `IconPerson`

## 구현 매핑 원칙

- 아이콘 사이즈는 네비게이션 기준 `24x24` 고정
- 상태형 아이콘은 line/filled 파일 분리 사용
- 활성 상태는 filled, 비활성 상태는 line 적용
- 스프라이트와 파일형 에셋을 혼용할 경우 우선순위를 문서에 명시

## 로컬 경로 규칙

- 상단 GNB: `prototype/assets/components/header/`
- 하단 GNB: `prototype/assets/components/bottom-nav/`
- 공통 SVG 스프라이트: `prototype/assets/ohouse-catalog-icons.svg`

## 검증 체크리스트

- 모든 GNB 아이콘이 24 고정인지
- 클릭/활성 전환 시 아이콘 상태가 line -> filled로 바뀌는지
- 라벨/아이콘 조합이 Figma 및 스토리북 명세와 일치하는지
