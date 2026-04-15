# a. ODS 파운데이션/레이아웃 가이드 (CLAUDE)

이 문서는 ODS 기반 구현 규칙을 한 곳에서 확인하기 위한 운영 가이드입니다.  
실제 규칙의 권위 문서는 루트 `CLAUDE.md`이며, 본 문서는 적용 범위와 참조 체계를 명확히 정리합니다.

## 목적

- ODS 토큰/레이아웃 기준의 단일 진입점 제공
- 해상도 대응 스펙(브레이크포인트, auto-fill, 패딩/마진) 운영 기준 명시
- 구현 전/후 체크리스트 일원화

## 기준 문서 (Single Source)

- 전역 가이드: `CLAUDE.md`
- 토큰 원본: `docs/design-system/foundation-tokens.md`
- PC 1028 레이아웃: `docs/design-system/pc-layout-1028-life-moving.md`

## 해상도 대응 스펙 운영 규칙

### 브레이크포인트

- 모바일 기본: 375 기준
- 중간 폭 확장: 카드/콘텐츠 최대폭 정책(예: 560) 준수
- 데스크톱 퍼널: 1028 스펙 기반으로 운영(코드에서 1024 미디어쿼리 사용 가능)

### 레이아웃/패딩/그리드

- 레이아웃 값은 `--ods-layout-*`, `--ods-space-*` 우선 사용
- 임의 margin/padding/column 스케일 추가 금지
- 카드/섹션/고정바는 safe-area와 하단 고정 UI 겹침 규칙 준수

### auto-fill / 반응형 배치

- 리스트/카드 자동배치는 기존 컴포넌트 패턴과 문서화된 최소 너비를 기준으로 정의
- 새 auto-fill 규칙이 필요하면 토큰/레이아웃 문서에 먼저 반영 후 코드 적용

## 구현 체크리스트

- 색상/타이포/간격/쉐도우가 모두 `--ods-*` 사용인지 확인
- 반응형 분기 시 각 구간의 컨테이너 폭/패딩이 문서와 일치하는지 확인
- fixed/sticky UI가 콘텐츠를 가리지 않는지 확인

## 변경 정책

- ODS/Figma 변경 시 우선 업데이트 순서:
  1) `docs/design-system/foundation-tokens.md`
  2) 필요 시 `docs/design-system/pc-layout-1028-life-moving.md`
  3) `CLAUDE.md` 및 구현 코드 반영
