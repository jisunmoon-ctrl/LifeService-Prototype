# StepCardView — 오더(상담) 카드

> repo 컴포넌트 `steps-common/.../shared/StepCardView.tsx` 문서.
> **프로토타입 현행 스펙**은 `components/OrderCard.md` 가 ground truth — 본 문서는 repo 구조 참조 + 프로토타입 delta 를 명시한다.

---

## repo 구조 (레거시)

```
header: badge + 고객명 + "신청일 신청" + FeeWaiverBadge? + chevron
body:   items dl × N + 채팅버튼? + 계약확정?
```

**조건부 (repo)**: FeeWaiverBadge(`feeWaiverEligible`) · 채팅(`chatting`) · 계약확정(onGoing & FF) · N뱃지(unread>0).

---

## 프로토타입 delta (OrderCard.md 기준)

| 영역 | repo | 프로토타입 |
|---|---|---|
| 헤더 status 뱃지 | SquareBadge 노출 | **제거** — 필터 탭만 |
| FeeWaiverBadge | 조건부 노출 | **제거** |
| 헤더 신청일 | 헤더 인라인 | **본문 row1** `종류·신청일` |
| 헤더 우측 | status 뱃지 | **속성/단계 뱃지 ≤1** + chevron |
| 상담중 CTA | `계약 확정` | ver 분기: prod=동일 / estimate=need **`견적 보내기`** · wait **`견적서 확인`** + **`채팅 보기`** |

---

## 공통 (repo · 프로토타입 일치)

- 카드 전체 = covered link → `/moving/steps/{id}`
- 내부 버튼 = `stopPropagation`
- 측정: border 1 base4 · radius 4 · shadow depth10 · header/body p24 · dt 80px · 채팅 h44
- **ODS**: SquareBadge · OutlineAnchorButton · CircleBadge · Icon chevron_right

**상호작용**: log(STEP_CARD / STEP_CHAT / STEP_CONTRACT)

**provenance**: repo `StepCardView.tsx` · 프로토타입 `index.html` `cardHTML`
