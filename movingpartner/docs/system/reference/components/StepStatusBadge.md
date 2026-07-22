# StepStatusBadge — 상태 뱃지

**역할**: 상담 status 를 색+라벨로 표기 (bds `SquareBadge`).

> **오더 카드에서는 미사용** — 진행 상태는 ListTab 필터로만 표기(PTN-LIST-11). 아래 매핑은 캐시 내역 등 타 지면 재사용·의미 참조용.

**라벨** (STEP_STATUS_NAME): 수락대기/매칭완료/계약완료/상담거절/상담종료.

| status | bds variant | proto |
|---|---|---|
| 수락대기 | fill primary2 | red `#FD3D4A` |
| 매칭완료 | fill primary3 | green `#1BA774` |
| 계약완료 | weak primary2 | light red `#FCE7E6`/`#DA1B34` |
| 상담거절·상담종료 | weak base2 | gray `#F5F5F5`/`#8C8C8C` |

**do**: 종료계열 weak 로 약화. **don't**: 오더 카드 헤더에 status 뱃지 재도입.

**provenance**: repo `StepStatusBadge.tsx` · `pattern-rules.md` PTN-LIST-08
