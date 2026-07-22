# prototype-preview-pattern — 디자인 리뷰 스튜디오 · preview harness

> **범위**: feature UI(오더·채팅 등)가 아닌, 프로토타입 **미리보기 셸** — viewport 리사이즈, flow 버전 전환, 콘텐츠 상태 토글, iframe 임베드, `postMessage` 동기화.
> **Ground truth**: `index.html` · `moving-1pager-prototype.html` (`#reviewOverlay`, `initStudio()`, `RV_*` 상수).
> **feature 패턴 룰**은 `pattern-rules.md` · **페이지 스펙**은 `spec.md` 참조.

---

## 1. 아키텍처

```
┌─ reviewOverlay (studio shell, 기본 진입) ─────────────────────────────┐
│ [rv__bar] Mobile·Tablet·Desktop │ W×H │ slider │ bp dot                │
│ ┌─ rv__stage ─────────────────────────────────────── rv__pills ─┐   │
│ │  ┌ handle ┬ iframe(?preview=1) ┬ handle ┐   │ 홈              │   │
│ │  └──────── bottom handle ───────────────┘   │ PRD proto list  │   │
│ │                                              │ 상태별보기+FF   │   │
│ └──────────────────────────────────────────────┴─────────────────┘   │
│ [rv__status] Frame: W×H                                                │
└────────────────────────────────────────────────────────────────────────┘
         postMessage(__rvStudio)  ↔  iframe child (feature only)
```

- **부모(스튜디오)**: 해상도·flow ver·콘텐츠 state·FF 토글. harness DOM은 `.rv` 네임스페이스.
- **자식(iframe)**: `?preview=1` — 스튜디오 UI 숨김(`.is-preview .rv{display:none}`), feature SPA만 렌더.
- **동기화**: reload 없이 `postMessage({__rvStudio:true, …})` · flow/홈 전환 시 `rvLoadFrame()` full reload.

---

## 2. 기본값 (initStudio)

| 항목 | 기본값 | 비고 |
|---|---|---|
| viewport | **375×720** (Mobile) | `RV_BPS[0]` |
| flow ver | **estimate** | 견적등록 flow |
| 콘텐츠 state | populated | filled |
| 필터 탭 (rvType / st.type) | **2 (상담중)** | `defaultTabForVer('estimate')` |
| prod flow 탭 | **1 (수락대기)** | `defaultTabForVer('prod')` |

`defaultTabForVer(ver)` — estimate → `TAB_FAB_CAPTURE_CODE(2)`, prod → `TABS[0].code(1)`.
- 초기 로드·flow pill 전환 시 적용.
- flow가 **실제로 바뀔 때만** iframe 탭 리셋(`d.rvVer !== st.ver`). 일반 `rvSync`는 사용자 탭 선택 유지.

---

## 3. 해상도 툴바 (`rv__bar`)

### breakpoint 프리셋 (`RV_BPS`)

| 라벨 | W | H | dot 색 |
|---|---|---|---|
| Mobile | 375 | 720 | `#f59e0b` |
| Tablet | 768 | (자동) | `#8b5cf6` |
| Desktop | 1024 | (자동) | `#10b981` |

- **라벨 분기**: `w<768` Mobile · `w<1024` Tablet · else Desktop (`rvBpLabel`).
- **W/H 입력** · **range slider** (320–1920) · **좌·우·하단 드래그 핸들** → iframe 실제 viewport 크기 변경 (`rvApply`, reload 없음).
- feature 반응형 전환은 iframe 내부 **md=768** 단일 breakpoint (`AppScaffold`).

---

## 4. 우측 도크 (`rv__pills`)

### 4.1 홈 (`data-kind="motion"`)
- iframe **full reload** (`rvLoadFrame`) — 인트로 모션·PTR 넛징 등 초기 상태 재생.

### 4.2 PRD 프로토타입 리스트 (`RV_PROTOS`, `data-kind="ver"`)

| ver | 메뉴명 | PRD 레이블 |
|---|---|---|
| `prod` | 기존 플로우 | Partner IA |
| `estimate` | [B2B/파트너] 확정 견적 등록 flow | Partner Quotation |
| `customer` | [B2C/유저]견적 확인 및 계약 flow | Partner Quotation |

- 클릭 시 `rvVer` 갱신 + `rvType = defaultTabForVer(rvVer)` + `rvSync` / `rvRenderPills`.
- estimate ver 에서만 feature 쪽 견적 캡처·단계 뱃지·견적 모달 활성화 (`body.ver-estimate`, PTN-LIST-13).

### 4.3 상태별보기 (접기 섹션)

**콘텐츠 state** (`RV_STATES`, `data-kind="state"`):

| state | 라벨 |
|---|---|
| populated | filled |
| empty | empty |
| loading | 로딩 |
| error | 에러 |

**Feature Flag** (`RV_FFS`, checkbox `data-ff`):

| key | 라벨 |
|---|---|
| search | 검색바 |
| reviews | 리뷰 탭 |
| contract | 계약확정 |

- FF 변경 → `st.ff` 동기화 후 `rvSync` (iframe reload 없음).

---

## 5. postMessage 프로토콜

부모 → iframe (`rvSync`):

```js
{ __rvStudio: true, rvState, rvType, rvVer, rvFf: { search, reviews, contract } }
```

iframe 수신 핸들러 (우선순위):

1. `rvType` → `st.type`, `markTabViewed`, `page=1`
2. `rvState` → `st.view`
3. `rvVer` (변경 시만) → `st.ver`, `st.type=defaultTabForVer(ver)`, 탭·페이지 리셋
4. `rvFf` → `Object.assign(st.ff, …)`
5. `rvView` → `switchView` (채팅·일정 등 멀티뷰)

변경 후: `renderVer` · nav · tabs · contents 일괄 리렌더.

### iframe URL (`previewSrc`)

쿼리: `preview=1` · `state` · `type` · `ver` · `view`(optional).
- 스튜디오 최초 로드: `rvLoadFrame()` → 위 파라미터로 iframe src 설정.
- iframe `load` 이벤트 → 부모 `rvSync()` 1회 (초기 상태 맞춤).

---

## 6. 임베드 모드 (`?preview=1`)

- `IS_PREVIEW = RVPARAMS.has('preview')`
- URL에서 `state` · `type` · `ver` · `view` 직접 주입 가능.
- `type` 미지정 시 `defaultTabForVer(st.ver)` 적용.
- 스튜디오 chrome(`.rv`) 숨김 — feature만 표시.

---

## 7. QA assertion (harness 전용)

| id | assertion |
|---|---|
| PV-01 | 기본 진입 = `#reviewOverlay` visible, iframe `preview=1` |
| PV-02 | Mobile 프리셋 = 375×720, dot=Mobile(amber) |
| PV-03 | estimate flow pill → iframe 상담중 탭(code 2) 활성 |
| PV-04 | prod flow pill → iframe 수락대기 탭(code 1) 활성 |
| PV-05 | 상태 토글 loading → skeleton, error → EmptyPage man1 |
| PV-06 | FF 검색바 off → `.searchbar` hidden |
| PV-07 | 드래그 핸들 resize → `rvDim` 텍스트 = 실제 W×H |
| PV-08 | harness 아이콘(phone/tablet/grip) = PTN-LIST-09 QA **제외** (feature 아님) |
| PV-09 | feature 영역 아이콘·뱃지·버튼 = ODS (`assets/ods-icons.js`, `ods-box-btn`, SquareBadge) — PTN-LIST-09/09c/09d |

---

## 8. 관련 문서

| 문서 | 내용 |
|---|---|
| `pattern-rules.md` PTN-LIST-09/09b/09c/09d | ODS 아이콘·뱃지·버튼·GNB nav |
| `assets/ods-icons.js` | `@bucketplace/icons` inline SVG registry + `odsIcon()` |
| `.cursor/rules/prototype-ods-compliance.mdc` | 에이전트 구현 지침 |
| `pattern-rules.md` PTN-LIST-13 | flow ver 토글 **정책**(feature 분기) |
| `spec.md` §12 | (요약 + 본 문서 링크) |
| `flow-guide.md` §B | 파트너 IA 메뉴 (feature) |
