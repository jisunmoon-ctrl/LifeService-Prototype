# Life Service Prototype — AI 가이드

문서 위계 정리는 `docs/guide/README.md`를 기준으로 관리합니다.  
ODS/레이아웃 요약 가이드는 `docs/guide/a-claude-ods-foundation-layout.md`를 참고합니다.

이 저장소는 **라이프 서비스**(이사·청소·인터넷 등) **웹 프로토타입** 문서와 구현을 다룹니다.  
코드·마크업·스타일을 생성하거나 수정할 때 아래 규칙을 **반드시** 따릅니다.

## 1. 디자인 시스템 단일 소스

- **Foundation 토큰의 정의·표·Figma 링크**는 다음 문서가 권위입니다.  
  **`docs/design-system/foundation-tokens.md`**
- 프로토타입 화면의 **모든 컴포넌트**는 색·타이포·간격·그리드·그림자를 **해당 문서의 ODS 토큰(CSS 변수 `--ods-*`)으로만** 표현합니다.
- Figma에서 임의로 읽은 hex 값을 코드에 직접 새로 박지 말고, 위 문서에 있는 토큰으로 매핑하거나, 문서에 없으면 **문서를 먼저 갱신**한 뒤 사용합니다.

## 2. 구현 시 체크리스트

1. **컬러:** `foundation-tokens.md` §1의 `--ods-color-*` 중에서만 선택.  
   텍스트 기본은 `--ods-color-foreground` 또는 `--ods-color-neutral-600` 등 문서에 명시된 역할에 맞게.
2. **타이포:** 폰트 **Pretendard**, 자간 기본 **-0.3px**, 스타일은 Heading / Body / Detail 계열과 웨이트를 문서와 동일하게.  
   임의의 `font-size`/`line-height` 조합을 새로 만들지 않습니다.
3. **레이아웃:** PC·태블릿·모바일 **마진·컨테이너·거터**는 `--ods-layout-*` 및 `--ods-space-*`를 사용합니다.  
   반응형에서 브레이크포인트는 Figma와 일치시키는 것을 우선합니다(문서 §3 참고).
4. **그림자:** `--ods-shadow-depth-10|20|30` 만 사용. 커스텀 `box-shadow` 문자열을 새로 정의하지 않습니다.

## 3. 금지 사항

- Foundation에 없는 **임의 팔레트**, **임의 spacing 스케일**, **임의 그림자**로 프로토타입 UI를 구성하지 않기.
- `CLAUDE.md`와 `foundation-tokens.md`를 수정하지 않은 채, 코드만 “비슷하게” 맞추는 것.

## 4. 문서 업데이트

- ODS Figma가 바뀌면 **`docs/design-system/foundation-tokens.md`** 를 먼저 업데이트하고, 필요 시 이 파일의 설명 한 줄을 맞춥니다.

## 5. 견적 신청 퍼널 (`prototype/apply.html`) — 스티키 CTA

- 화면 **하단 고정(sticky) 영역에는 CTA 행을 한 줄만** 둔다. 단계마다 **별도의 스티키 블록을 여러 개 중첩**하지 않는다(중복 버튼 노출 방지).
- 허용되는 조합만 사용한다.
  - **첫 단계:** `[다음]` 한 개(전폭).
  - **중간 단계:** `[이전] [다음]` (비율은 Figma·기존 `flex` 패턴 따름).
  - **마지막 단계:** `[이전] [완료]` — 완료는 보통 업체 리스트 등으로 이동하는 **primary** 한 개.
- 단계 전환 시 **같은 컨테이너 안에서만** 버튼을 갈아끼우거나, 이벤트 위임으로 처리한다. `display:flex` 등 작성자 스타일이 `hidden`과 충돌하지 않게 한다.

## 6. 참조 링크 (Figma)

- 파일: [🌀 ODS — Ohouse Design System](https://www.figma.com/design/aTdWM1sgdScr68GZdQ2sWO/%F0%9F%8C%80-ODS--Ohouse-Design-System-)
- Foundation 노드: 컬러 `58024-4643`, 타이포 `47320-24250`, 레이아웃 `47320-24799`, 쉐도우 `47320-24758` (상세 URL은 `foundation-tokens.md` 표 참고)

## 7. 라이프 이사 프로토타입 (책임보장 이사)

- 제품 Figma: [책임보장 이사 서비스](https://www.figma.com/design/O8dlcVJHtXfhuvZK3kAnEw/) — 랜딩·입력폼 프레임과 맞출 것.
- **PC(1028) 레이아웃** (1248 아트보드, Navigation 132px, 폼 카드 560px, `Progress bar_PC`, 매칭 상세 1256/1136 그리드): **`docs/design-system/pc-layout-1028-life-moving.md`**
- 구현 위치: `prototype/` (`index.html`, `apply.html`, `companies.html`).
