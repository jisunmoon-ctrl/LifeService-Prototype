# ListTab — 상태 필터 탭 (sticky)

**역할**: status enum 으로 리스트 필터. `FixedTab` / `position:sticky`.

**items**: `common.consultationDashboardType`
- 수락대기(1) · 상담중(2) · 계약완료(3) · 상담종료(4)

**props/상태**
- `currentIndex` = `?type` query (프로토타입: `st.type`)
- 첫 탭 `bullet`: `hasNewStep()` → red dot (카운트 없음)

**기본 탭 (프로토타입)**
- `type` 미지정 시 `defaultTabForVer(st.ver)`:
  - `estimate` → **상담중(2)** — 견적등록 flow 랜딩
  - `prod` → **수락대기(1)**

**동작**: 클릭 → `?type={code}&page=1` + scroll top + `markTabViewed`.

**레이아웃**: sticky top = appbar(45) | topnav(71). mobile full-bleed(px0), desktop 좌측정렬.

**연계 (estimate ver)**
- 수락대기: PTR 넛징 (`showPtrNudge`)
- 상담중: 견적서 등록 FAB (`showFabCapture`)

**ODS**: bds `FixedTab`/`TabItem`. border-bottom divider, bg groupedContents.

**do**: 탭 = URL query 단일 소스. **don't**: 로컬 state 만으로 탭 관리.

**provenance**: repo `steps-common/.../list-tab/*` · 프로토타입 `renderTabs`/`TABS`
