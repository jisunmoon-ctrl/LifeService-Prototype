# 이사 청소 신청폼 디자인 QA 리포트

- 일자: 2026-07-03
- 대상: 청소 신청 플로우 (모바일 375×812 기준) — Figma `O8dlcVJHtXfhuvZK3kAnEw` 6개 프레임
- 결과: **이슈 7건 발견 → 전부 수정 완료, 브라우저 검증 통과**

## 1. CTA 레이아웃 깨짐 (핵심 이슈)

| # | 증상 | 원인 | 수정 |
|---|------|------|------|
| 1 | Step 2~3에서 "다음" 버튼이 프레임 밖으로 밀려나고 "이전" 버튼이 잘림 | `FlowBottomActions`의 "다음" 버튼에 `fullWidth`(width:100%)가 걸려 flex row 안에서 컨테이너를 초과 | `fullWidth` 제거 → `flex-1 min-w-0` 로 교체 (`FlowBottomActions.tsx`) |
| 2 | CTA 높이 44px (Figma 스펙 48px) | `OdsBoxButton` 래퍼가 `extra-large`를 ODS `large`(44px)로 매핑 | ODS `extra-large`(48px)로 매핑 수정 (`OdsBoxButton.tsx`) |
| 3 | 푸터가 콘텐츠에 밀려 화면 밖으로 사라짐 | flex column에서 스크롤 영역에 `min-h-0` 누락 | 스크롤 영역에 `min-h-0` 추가 (`InputFlowLayout.tsx`) |

## 2. 프레임별 정합성 수정

### Step 1 — 청소 희망일 (7250-35907)
- 이슈 없음. 캘린더/시간대 칩/이사 견적 프리필 배너 모두 Figma와 일치 확인.

### Step 2 — 청소 장소 정보 (7250-35771 / 7258-53270)
- "주소찾기" 버튼: `brand-solid` → `normal` variant, 76×40 크기로 수정
- "배송지 불러오기" 버튼: 주소 미선택 상태에서만 노출되도록 조건 렌더링
- "리모델링 후 청소" 옵션 순서: [필요함, 필요 없음] 순으로 변경

### Step 3 — 연락처 정보 (7250-36348 / 7250-36387)
- "인증" 버튼: 데스크톱 전용 조건 제거 → 모바일에서도 노출
- 통신사 드롭다운: 모바일 너비 100px → 85px
- 전화번호 입력: `containerClassName="flex-1 min-w-0"` 로 flex 오버플로 수정
- 추가 요청 사항 placeholder: "예시:\n확장 베란다, 반려동물, 곰팡이 등…" 으로 교체
- "개인정보 이용 및 수집 안내" 링크: 콘텐츠 영역 → CTA 푸터 하단으로 이동 (`FlowBottomActions`의 `guideLink` prop 신설)

### 신청 완료 바텀시트 (7300-31220) — 신규 구현
- `CleaningCompleteSheet.tsx` 생성: 타이틀/서브타이틀, 청소 희망일·휴대폰 번호 요약 박스(#F7F8FA), 확인 CTA(brand-solid 48px)
- 데스크톱: 중앙 모달(400px) / 모바일: 바텀시트
- vaul Drawer는 `document.body`로 포털되어 프리뷰 프레임(375px)을 벗어나는 문제 → vaul 제거, `InputFlowLayout`에 `overlay` prop을 신설해 프레임 내부 `absolute inset-0` 오버레이로 렌더링
- 확인 클릭 시 시트 닫힘 + Step 1으로 복귀 동작 검증 완료

## 3. 환경 이슈 (개발 편의)

- macOS에서 Vite fsevents 워처가 죽어 수정 사항이 반영되지 않던 문제 → `vite.config.ts`에 `server.watch.usePolling: true` 설정

## 4. 검증 캡처

- `qa/figma-*.png` — Figma 원본 프레임 6종
- `qa/proto-step1-selected.png` — Step 1 프로토타입 검증
- `qa/qa-complete-sheet-final.png` — 완료 바텀시트 프레임 내 정상 렌더링 (최종)

## 수정 파일 목록

| 파일 | 변경 |
|------|------|
| `src/app/shared/ods/OdsBoxButton.tsx` | extra-large 48px 매핑 |
| `src/app/shared/flow/FlowBottomActions.tsx` | flex-1 CTA, guideLink prop |
| `src/app/shared/flow/InputFlowLayout.tsx` | min-h-0, overlay prop |
| `src/app/flows/b2c/cleaning/components/CleaningStep2Location.tsx` | 주소찾기/배송지/리모델링 |
| `src/app/flows/b2c/cleaning/components/CleaningStep3Contact.tsx` | 인증 버튼, 드롭다운, placeholder, 링크 |
| `src/app/flows/b2c/cleaning/components/CleaningCompleteSheet.tsx` | 신규 (완료 바텀시트) |
| `src/app/flows/b2c/cleaning/CleaningFlowScreen.tsx` | 완료 시트 연동, formatPhone |
| `vite.config.ts` | 폴링 워처 |
