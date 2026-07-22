# OrderCard — 오더(상담) 카드 + 뱃지 정책

> 사장님센터 이사 오더 목록(`/moving/steps`)의 카드 행 컴포넌트. **Ground truth = 프로토타입** (`index.html` `cardHTML` · `attrBadges` · `contractBtn`).
> repo 진입점: `steps-common/.../shared/StepCardView.tsx` (레거시 구조 — 프로토타입과 상이, 본 문서는 프로토타입 기준).
> Figma: **7701:6105** (B2B 사장님센터 · 오더_상담중 `7741:22617`)

---

## 1. 역할 · 구조

**역할**: 상담 1건 요약 행. 카드 전체가 상세로 가는 covered-link(`role=button`, 행 클릭→detail), 내부 액션 버튼은 `stopPropagation` 으로 분리.

**구조 (현행 프로토타입)**
```
article.card
├─ .card__header
│   ├─ .card__head-left   → .card__name (고객명·subTitle1·700)
│   └─ .card__head-right  → cardEstStageBadge / attrBadges ≤1개 ─gap 4px─ .card__chevron
└─ .card__body
    ├─ dl "종류·신청일" : {이사종류} · {createdDate} 신청
    ├─ dl 이사 예정일 / 출발지 / 도착지 (주소 ` ****` 마스킹)
    ├─ .card__contract-box (wait·계약완료 + 견적 존재 시 총 계약금액 요약)
    └─ .card__actions  → 채팅 보기(N뱃지) · CTA(상태/ver 분기)
```

**측정**: border 1·radius 4·shadow depth10·header/body p24·dt width80/dd·채팅버튼 h44.

---

## 2. 상태(status) 매핑 — `MOVING_STEP_STATUS`

| status | 카드 라벨(STATUS) | 소속 필터 탭(TABS) | 헤더 뱃지(현행) | CTA(현행) |
|---|---|---|---|---|
| 0 | 수락대기 | 수락대기(code 1) | 속성 뱃지(직접신청 \| 무료 수락 가능) ≤1 | — |
| 2 | 매칭완료(상담진행) | 상담중(code 2) | prod: 없음 / estimate: need·wait 단계 뱃지 | prod=계약 확정 / estimate=단계 분기 |
| 4 | 계약완료 | 계약완료(code 3) | 없음 | estimate: **견적서 확인**(outlined) · **채팅 보기**(normal) |
| 1 | 상담거절 | 상담종료(code 4) | 없음 | — |
| 3 | 상담종료 | 상담종료(code 4) | 없음 | — |

- 진행 상태는 **상단 sticky 필터 탭으로만** 표기(헤더 status 뱃지 제거).
- **estimate flow 기본 탭 = 상담중(2)** (`defaultTabForVer`, `prototype-preview-pattern.md` §2).

---

## 3. 헤더 뱃지 — 카드당 최대 1개 (우측 정렬)

`cardEstStageBadge(o)` 또는 `attrBadges(o)` — 우선순위: **견적 단계 > 무료 수락 가능 > 직접신청**.

| 뱃지 | 트리거 | 노출 status | 클래스 |
|---|---|---|---|
| 직접신청 | `direct && !freeAccept` | 0 | `.badge--direct` |
| 무료 수락 가능 | `freeAccept` | 0 | `.badge--free` |
| 견적 작성 필요 | `ver=estimate && estStage=need` | 2 | `.badge--est-need` |
| 계약대기 | `ver=estimate && estStage=wait` | 2 | `.badge--est-wait` |

> `review`(검토중) 단계는 **단일등록 flow(Figma final)에서 제거**. 운영 검수 없이 제출 즉시 `wait` 전이.

---

## 4. 액션 영역 뱃지 · CTA

### 채팅 미읽음 N 뱃지
- 위치: `.card__actions` **`채팅 보기`** 내부 `.nbadge`
- 노출: `o.chat` 존재 + `unread>0`

### CTA (`contractBtn` + `chatBtn`, 상담중 status 2)

| ver | estStage | primary CTA | secondary |
|---|---|---|---|
| prod | — | `계약 확정` (solid) | `채팅 보기` (chat 존재 시) |
| estimate | need | **`견적 보내기`** (brand-solid) → `openEstimate('order',id)` | **`채팅 보기`** (normal) |
| estimate | wait | **`견적서 확인`** (brand-outlined) → `openOrderDetail(id)` | **`채팅 보기`** (normal) |

- 노출: `st.ff.contract && status===2`
- 발송 완료: `need → wait` (`sendEstimate`)

### CTA (`viewEstBtn`, 계약완료 status 4 · ver=estimate)

| 버튼 | 상태 | 동작 |
|---|---|---|
| `견적서 확인` | brand-outlined | `openOrderDetail(id)` |
| `채팅 보기` | normal | **계약완료 카드 전건** 노출 · 미읽음 N 뱃지는 `unread>0` 일 때만 |

- 버튼 순서: **채팅 보기 → 견적서 확인**

### 신규 dot · 새로고침 · FAB
- 수락대기 탭 dot: `hasNewStep()` (status 0 존재)
- 새로고침 FAB: prod + 수락대기만 (`showRefreshFab`)
- **견적서 등록** FAB/GNB: estimate + **상담중** (`showFabCapture`, PTN-LIST-07) — 카드 CTA와 별도 진입(모달 타이틀 `견적서 등록`)

---

## 5. 견적 모달 연계 (PTN-LIST-15)

오더 CTA·GNB FAB 공통 플로우: **capture → ocr → confirm → send**.
- confirm 모달 타이틀: **`견적 확인`** (Figma `7741:6027`)
- Footer: `견적 수정` \| **`확정 견적 보내기`** (기본+기타 합계 > 0 활성)
- send 후: 모달 닫힘 · Snackbar · stage `wait` · 카드 CTA `견적서 확인`

---

## 6. Badge_policy.md ↔ 프로토타입 대조

| 항목 | 정책 doc | 프로토타입 | 판정 |
|---|---|---|---|
| A-1 헤더 status 뱃지 | 헤더 노출 | 제거(필터 탭만) | 변경 |
| A-2 수수료 면제 | yellow 헤더 | 제거 | 변경 |
| 속성 뱃지 | 미기재 | 직접신청·무료 수락 가능 | 신규 |
| E 단계 뱃지 | 릴리즈 예정 | need + wait (review 없음) | 구현 |
| B 채팅 N | 액션 영역 | 동일 | 일치 |
| C New dot | 수락대기 탭 | 동일 | 일치 |

---

## 7. ODS / 상위 룰

- **ODS**: SquareBadge(subtle) · BoxButton(`ods-box-btn`) · CircleBadge · Icon chevron/check/won
- **룰**: PTN-LIST-06·07·11·12·14·15·16 · `pattern-rules.md`
- **repo TSX**: `StepCardView.tsx` — 헤더 뱃지·FeeWaiver·신청일 위치는 프로토타입과 불일치. prod 구현 시 본 문서·프로토타입 우선.
