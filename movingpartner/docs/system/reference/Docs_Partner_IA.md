# 오늘의집 사장님센터(이사) — 기존 IA · 사용자 흐름 정리

> **목적**: 먹지 OCR 견적서 신규 플로우를 추가하기 전에, 기존 파트너 앱(사장님센터 이사)의 위계 구조(IA)와 메인 사용자 흐름을 기준점으로 정리.
> **출처**: 업로드된 프로토타입 `index.html`(repo `apps/o2o-partner-web` 기반 충실 재현, `/moving/steps`) + `flow-guide.md`. 동작·상태분기·카피·조건은 repo 기준, 일부 시각 토큰만 추정.

---

## 1. 개요

- **앱 성격**: 이사 파트너(사장님)가 배정받은 상담(오더)을 **상태별로 확인·관리**(수락/거절/계약확정/채팅)하는 파트너센터 워크리스트 웹앱.
- **진입 경로**: `partner.ohou.se` 로그인 → `MOVING` 권한 확인 → **`/moving/steps`(오더 목록)가 기본 랜딩**. 약관 미동의 시 `/moving/agree-terms`로 redirect.
- **플랫폼**: 반응형 웹앱. **768px(md)** 기준으로 모바일 ↔ 데스크탑 IA가 전환됨(웹앱이라 OS 상태바 없음).
- **UX 목표**: 새 오더를 빠르게 인지(수락대기 dot)하고 상태를 정확히 갱신해 매칭 품질 유지 — *"상태관리가 명확할수록 더 많은 오더가 들어와요."*

---

## 2. 전역 IA (네비게이션 위계)

```
사장님센터(이사) · partner.ohou.se
│
├── 오더        /moving/steps            ← 기본 랜딩 (메인 워크리스트)
│     └── 상담 상세   /moving/steps/{id}
│           ├── 채팅   /chatting/channel/{url}
│           ├── 계약 확정 → ContractConfirm / Calendar 모달   (FF: contract)
│           └── 수락 / 거절 → Accept / Reject / Cash / Complete 모달  (FF: order-card)
│
├── 채팅        /chatting/list           (ChannelCardList)
├── 일정마감    /moving/schedule         (ScheduleCalendar · 날짜 마감)
├── 캐시        /moving/payment/cash     (잔액 + 충전 + 거래내역)
├── 리뷰        /moving/reviews          (FF: reviews · 데스크탑 전용)
└── 마이페이지  /moving/my               (모바일 전용)
```

**데스크탑 ↔ 모바일 노출 차이**

| 구분 | 데스크탑(md+) TopNav | 모바일(<md) BottomNav |
|---|---|---|
| 공통 메뉴 | 오더 · 채팅 · 일정마감 · 캐시 | 오더 · 채팅 · 일정마감 · 캐시 |
| 차이 | + **리뷰**(FF) | + **마이페이지** |
| 헤더 | TopNav(71px) + Footer | AppBar(45px, 뒤로가기) + Footer |
| 활성 표현 | 텍스트 brand blue | 아이콘 line→filled 전환 + 컬러 전환 |

---

## 3. 메인 화면: 오더 목록 (`/moving/steps`)

파트너의 핵심 작업 공간. 위에서 아래로 다음 요소로 구성됨.

1. **ListCallout** — "오더상태에 변경이 있다면 업데이트 해주세요" 상시 안내
2. **ListTab (sticky 상태 필터)** — 4개 탭, 수락대기 탭에 신규건 **dot** 표시
3. **SearchBar** (FF: search) — 고객명·연락처 검색
4. **StepCard 리스트** — 오더 카드(아래 4절)
5. **ClosedCallout** — "신청일 기준 6개월 전 상담내역까지만 확인 가능"
6. **Pagination** — 페이지당 10건 (모바일 5 / 데스크탑 10 윈도우)
7. **StickyRefreshButton** — **수락대기 탭에서만** 노출되는 새로고침 FAB

**콘텐츠 상태(pageStates)**: `loading`(스켈레톤) · `empty`(상담내역 없음 + 새로고침) · `error`(불러오기 실패 + 재시도) · `populated`(카드 + 페이지네이션).

---

## 4. 오더 카드(StepCard) 구조 & 상태 모델

**카드 구성**
- 헤더: 상태 뱃지 · 고객명(마스킹, 예: `스*******`) · 신청일 · `수수료 면제` 뱃지(조건부) · chevron(상세 진입)
- 바디: 이사 종류 / 이사 예정일 / 출발지 / 도착지
- 액션(조건부): **채팅 보기**(채팅 존재 시, 미읽음 N 뱃지) · **계약 확정**(매칭완료·prod) / **견적 보내기·견적서 확인**(매칭완료·estimate, Figma 7701:6105)

**상태 코드(MOVING_STEP_STATUS) ↔ 필터 탭(consultationDashboardType)**

| 상태코드 | 카드 라벨 | 뱃지 | 소속 필터 탭 |
|---|---|---|---|
| 0 | 수락대기 | request(red) | **수락대기** (code 1) |
| 2 | 매칭완료(상담진행) | ongoing(green) | **상담중** (code 2) |
| 4 | 계약완료 | contract(red-weak) | **계약완료** (code 3) |
| 1 | 상담거절 | gray | **상담종료** (code 4) |
| 3 | 상담종료 | gray | **상담종료** (code 4) |

> 탭은 4개(수락대기·상담중·계약완료·상담종료), 기본 선택은 **수락대기**. `계약 확정` 버튼은 **매칭완료(status 2)** 카드에서만 노출 → 누르면 계약확정/캘린더 모달로 진행.

---

## 5. 보조 화면

| 화면 | 라우트 | 핵심 기능 |
|---|---|---|
| **채팅** | `/chatting/list` | 채널 카드 리스트(아바타·고객명·최근 메시지·미읽음 뱃지), 알림 설정 |
| **일정마감** | `/moving/schedule` | 4개월 멀티선택 캘린더로 날짜 마감/해제. *"마감된 날짜가 예정일인 오더는 매칭되지 않습니다."* |
| **캐시** | `/moving/payment/cash` | 잔액 + 무료캐시 + 충전 버튼 + 거래내역(오더 수락 시 −2,000캐시 등 차감 기록) |
| **리뷰** | `/moving/reviews` | FF·데스크탑 전용(범위 외 stub) |
| **마이페이지** | `/moving/my` | 모바일 전용 메뉴 리스트 |

---

## 6. 핵심 사용자 흐름 (오더 → 계약)

```
로그인/약관 ──(미동의)──▶ /moving/agree-terms
     │
     ▼
[오더 목록] 수락대기 탭(dot)  ──카드 클릭──▶ 상담 상세(/moving/steps/{id})
     │                                          │
     │  ├─ 수락/거절 모달 ─▶ status 0 → 2(매칭완료) or 1(거절)
     │  ├─ 채팅 보기 ─▶ /chatting/channel/{url}
     │  └─ 일정마감으로 가용일 관리
     ▼
[상담중 탭] 매칭완료(status 2)  ──[계약 확정]──▶ ContractConfirm/Calendar 모달
     │                                                  │
     ▼                                                  ▼
[계약완료 탭] status 4 ◀────────────────────── 계약 체결 완료
```

**상태 전이 요약**: `수락대기(0)` → 수락 → `매칭완료(2)` → 계약확정 → `계약완료(4)` / (거절 시 `상담거절(1)`, 종료 시 `상담종료(3)`). 캐시는 오더 수락 시점에 차감되는 구조.

---

## 7. 조건부 노출 (Feature Flag · 가드)

- **접근 가드**: `AuthGuard roles=[MOVING]`, 미동의 → 약관 redirect.
- **Feature Flags**: `search`(검색바) · `reviews`(리뷰 탭) · `contract`(계약확정 버튼) · `order-card`(수락/거절 모달).
- **조건부 표시**: 수락대기 탭 dot = `hasNewStep` / 새로고침 FAB = 수락대기 탭 / `수수료 면제` 뱃지 = `feeWaiverEligible` / 채팅 버튼 = 채팅 존재.

---

## 8. 신규 플로우(먹지 OCR 견적서) 삽입 지점 — 참고

신규 견적·계약 플로우는 기존 IA를 깨지 않고 **오더 목록 → 상담 상세 → 계약 확정** 축에 자연스럽게 붙음.

- **진입점 후보**: 상담 상세(`/moving/steps/{id}`) 또는 매칭완료 카드의 **`계약 확정` 액션**을 "견적서 작성"으로 확장.
- **상태 연계**: 신규 플로우는 `매칭완료(2)` 이후 ~ `계약완료(4)` 사이 구간을 대체/보강(먹지 사진 → OCR 초안 → 표준 견적서 → 운영팀 검토 → 고객 인앱 계약).
- **유지해야 할 패턴**: 상태 뱃지 체계, sticky 탭 필터, 카드 액션 버튼(`btn--solid`/`btn--outline`), pageStates(loading/empty/error), 캐시 차감 시점.

---

### 부록 — 디자인/IA 기준값
- 레이아웃 상수: TopNav 71px · BottomNav 54px · AppBar 45px · 콘텐츠 max 1136px
- 브랜드 컬러: `foreground-brand #00A1FF`, 위험 `#FD3D4A`
- 폰트: Pretendard
- 페이지당 오더: 10건
