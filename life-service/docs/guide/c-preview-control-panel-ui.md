# c. 프리뷰 외 컨트롤 패널 UI 관리 문서

목적: 프로토타입 프리뷰 영역 바깥의 제어 UI(AB 탭 메뉴, 핸들/토글, 보조 패널)를 관리합니다.

## 대상 영역

- AB 프리뷰 페이지의 컨트롤 바
- 탭 전환 버튼(A/B, 시공/생활 등)
- 핸들/토글/디버그 버튼
- 프리뷰를 제외한 상태 표시 영역

## 설계 원칙

- 프리뷰 콘텐츠와 컨트롤 레이어를 분리
- 컨트롤 변경이 프리뷰 렌더 레이아웃을 깨지 않도록 독립 스타일 사용
- 접근성: 버튼 role/label/selected 상태를 명시

## 현재 프로젝트 기준 연결점

- 엔트리: `prototype/index.html`
- 위계 기준:
  - `docs/guide/README.md`
  - `docs/guide/b-2-global-components-structure.md`
- 관련 스펙/흐름(레거시 상세본):
  - `02-screen-structure.md`
  - `03-flow-spec.md`
  - `docs/hub-ia-comparison.md`

## 권장 제어 컴포넌트

- `PreviewTabGroup` (AB 전환)
- `PanelTargetSwitch` (패널 대상 전환)
- `HandleControl` (확장/축소)
- `StateBadge` (현재 모드/활성 탭 표시)

## 운영 체크리스트

- 컨트롤 영역은 sticky/fixed 정책이 문서화되어 있는지
- 프리뷰 iframe/패널 전환 시 상태 동기화가 되는지
- 탭/핸들 UI가 모바일/데스크톱에서 모두 깨지지 않는지
