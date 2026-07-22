# legacy — 패널 메뉴에 노출되지 않는 화면

프리뷰 패널(B2C/B2B 탭)에 없는 화면들입니다. 삭제하지 않고 여기 모아둡니다.

| 위치 | 내용 | 비고 |
|---|---|---|
| `construction/` | 시공신청 입력폼 6단계 (`construction_step1~6`) | 메뉴에서 삭제됨. **크로스셀링 flow 의 이탈(back/exit) 타깃**이라 화면 스위치는 유지 |
| `screens/MovingRequestScreenVarA.tsx` | 이사 신청 시안 A (`var_a`) | `handleGoBack()` 의 기본 복귀 화면 |
| `screens/InputFormScreenVarA.tsx` | 입력폼 시안 A (`input_a`) | App 스위치에 존재, 메뉴 미노출 |
| `screens/ResponsibilityServiceScreen.tsx` | 오늘의집 책임보장 소개 (`responsibility_intro`) | App 스위치에 존재, 메뉴 미노출 |
| `screens/` 나머지 | Internet/Rental/PhotoEstimate/Survey/TimeSelection/MovingRequest 시안 | 현재 어디에서도 import 되지 않음 (참고용 보관) |

메뉴에 다시 올릴 때는 `src/app/App.tsx` 의 `PANEL_TABS` 에 플로우/화면을 추가하고,
해당 화면을 `flows/<tab>/<flow-id>/` 로 옮긴 뒤 `docs/flows/<tab>/<flow-id>/README.md` 를 작성하세요.
