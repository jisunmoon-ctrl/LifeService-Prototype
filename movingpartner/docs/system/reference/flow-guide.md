# flow-guide — 오더(이사 상담 목록) · /moving/steps

## §A 페이지 개요
- **페이지 목적**: 이사 파트너가 배정받은 상담(오더)을 **상태별로 확인하고 관리**(수락/거절/계약확정/채팅)하는 파트너센터 메인 워크리스트.
- **UX Goal**: 새 오더를 빠르게 인지(수락대기 dot)하고, 상태를 정확히 갱신해 매칭 품질을 유지하게 한다("상태관리가 명확할수록 더 많은 오더").
- **Key Action**: ① 카드 → 상세 진입 ② 채팅 보기 ③ 계약 확정 / 견적 보내기 ④ 탭/검색으로 오더 탐색.
- **유저 스토리**: "이사 기사(파트너)로서, 들어온 오더를 상태별로 보고 빠르게 응대해 계약으로 전환하고 싶다."

## §B 전역 IA (이사 파트너 메뉴)
진입: `partner.ohou.se` 로그인 → MOVING 권한 → `/moving/steps`(기본 랜딩).
```
오더(/moving/steps) ── 채팅(/chatting/list) ── 일정마감(/moving/schedule) ── 캐시(/moving/payment/cash)
   │                                                                            └ 리뷰(/moving/reviews, FF, desktop)
   └ [mobile] 마이페이지(/moving/my)
```
- desktop TopNav / mobile BottomNav 로 동일 IA 를 반응형 노출(마이페이지·리뷰만 노출면 상이).

## §C 연결 플로우 (이 페이지 기준)
```
[로그인/약관] ──redirect(미동의)──▶ /moving/agree-terms
      │
      ▼
/moving/steps (오더 목록)  ──카드클릭──▶ /moving/steps/{id} (상담 상세)   [범위 외 stub]
      │  ├─ 채팅 보기 ─▶ /chatting/channel/{url}                    [범위 외]
      │  ├─ 계약 확정(FF) ─▶ ContractConfirm/Calendar 모달
      │  └─ 수락/거절(FF order-card) ─▶ Accept/Reject/Cash/Complete 모달
      └─ 탭/검색/페이지 ─▶ 같은 라우트 shallow query 변경
```

## §D 상태·조건 맵
**콘텐츠 status (pageStates)**: `loading`(skeleton) · `empty`(상담내역 없음) · `error`(로드 실패) · `populated`(카드+페이지네이션).
**별도 축 (status 아님)**:
- 접근 가드: `AuthGuard roles=[MOVING]`, 미동의 → 약관 redirect (auth).
- 조건부 노출(conditional): 검색바·계약확정·OrderCard·리뷰탭 = **Feature Flag** / 새로고침 = 수락대기 탭 / FeeWaiverBadge = `feeWaiverEligible` / 채팅버튼 = `chatting` 존재 / 탭 dot = `hasNewStep`.
- system chrome: OS statusbar = 범위 외(웹앱이라 미존재).

## §E provenance
IA·동작·상태분기·카피·조건 = **repo** (`apps/o2o-partner-web`, 99% 동작 게이트 통과). 시각 토큰 hue 일부 = `[inferred]`(SquareBadge primary2/3). prod 런타임 차단으로 시각 픽셀은 미대조.
