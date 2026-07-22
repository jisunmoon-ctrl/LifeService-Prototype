# QA — 견적 신청 퍼널 UX iteration (Figma 7942)

- **대상**: `EstimateBelongingsStep` · `EstimateConfirm` · belongings 서브스크린
- **True Source**: Figma file `O8dlcVJHtXfhuvZK3kAnEw`
  - Form/01 `7942:30997`
  - Form/02-1 이삿짐 `7942:43864`
  - Form/Confirm `7942:42568`
  - Photo `7943:70847` / Detail `7943:70834` (옵션)
- **캡처**: `qa/figma-*.png` · `qa/proto-belongings.png` · `qa/proto-confirm-frame.png`
- **viewport**: Mobile 360×640 (프로토타입 프레임)
- **아이콘 근거**: `@bucketplace/icons` regular weight → `OdsIcons.tsx` 인라인 (self-contained)

## 결론

- **ODS 아이콘 교체 완료**: Sparkles / QuestionCircle / ArrowLeft / Plus / Minus / ChevronRight
- **Confirm**: 예상 견적가·추가 요청·컨펌 리스트·듀얼 CTA **구조 일치**
- **Belongings**: 목록 기본 + 사진 옵션 카드·단일「다음」·nav 타이틀·progress 50% **반영**
- **잔여 갭**: 가전 그리드 **이모지 vs Figma 실사 아이콘**, Detail/Photo는 옵션 경로로 유지

---

## ✅ 수정 반영 (이번 QA)

| 항목 | Before | After |
|------|--------|-------|
| 사진 옵션 아이콘 | lucide `Sparkles` | ODS `IconSparkles` 24 |
| 견적가 도움말 | lucide `HelpCircle` | ODS `IconQuestionCircle` 16 |
| 뒤로가기 | lucide `ArrowLeft` | ODS `IconArrowLeft` 24 |
| 박스 ± / 사진 추가 | lucide Minus·Plus | ODS `IconMinus` / `IconPlus` |
| 옵션 chevron | (이미 ODS) | `IconChevronRight` 16 |
| Belongings nav 타이틀 | 「이사 신청」 | 「이사 무료 견적 받기」 |
| Belongings CTA | 이전+다음 | 단일 「다음」(Figma StickyButton) |
| Progress | 없음 | Linear 6px / 50% (`progress={0.5}`) |
| 연락처 상세 타이포 | 14px | Detail13 (13px) |

---

## 🔴 High

### [H-1] 가전/가구 타일 아이콘 — 이모지 vs Figma 실사 에셋
- **Figma**: 카테고리별 실사·일러스트 제품 아이콘
- **프로토타입**: 이모지(`📺`/`🧊`/…) + 미매핑 항목 `📦`
- **판정**: 시각 fidelity 갭. ODS monochrome 아이콘셋과 별개 **에셋 교체** 필요
- **조치**: `@bucketplace/assets` 또는 Figma export 매핑 후 `ProductIcon` 교체 (별도 작업)

---

## 🟡 Med

### [M-1] Form/01 · Photo · Detail progress 비율
- Belongings만 `0.5` 반영. Form/01·옵션 화면 progress 값은 Figma 노드별 재확인 후 확장 가능

### [M-2] 선택 타일 스타일
- 프로토타입: brand border `#00A1FF` + `#EBF8FF`
- Figma 스크린샷 일부는 진한 보더로 보임 — 토큰 확정 후 필요 시 조정

### [M-3] Belongings 「추가 설명」메모
- 수동 선택 컴포넌트에 메모 textarea 유지. Figma 첫 뷰포트엔 미노출(스크롤 하단 가능) — 유지/제거는 디자인 확인

---

## 🟢 Low / 통과

- Confirm 가격 카피·파란 강조·QuestionCircle·textarea 0/100·컨펌 5행·이전/이대로 견적 신청 ✓
- Belongings 타이틀/서브/사진 옵션 카드/가전 4열 그리드/단일 다음 ✓
- Status bar · home indicator — QA 제외 (OS chrome)

---

## 아이콘 매핑 (확정)

| UI | Figma | ODS |
|----|-------|-----|
| 사진·영상 옵션 | Sparkles | `IconSparkles` |
| 견적가 도움말 | Question Circle | `IconQuestionCircle` |
| Top nav back | Arrow Left | `IconArrowLeft` |
| 옵션 chevron | Chevron Right | `IconChevronRight` |
| 박스 수량 ± | Minus / Plus | `IconMinus` / `IconPlus` |
| 사진 추가 | Plus | `IconPlus` |
