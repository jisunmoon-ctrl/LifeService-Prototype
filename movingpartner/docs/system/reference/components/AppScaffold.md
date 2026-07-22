# AppScaffold — 반응형 셸 (breakpoint 전환)

**역할**: 헤더/네비/푸터를 환경·viewport 로 배치하는 반응형 scaffold.

**핵심 동작 (web)**: CSS `md(768)` 기준.
- `desktopHeader`(TopNav) = `hidden md:block`
- `mobileHeader`(AppBar) = `block md:hidden`
- `mobileNav`(BottomNav) = `block md:hidden`, **type==='page'** 에서만
- Footer: desktop 항상 / mobile 은 page 타입만

**상수** (`foundation/constants/layout.ts`): topNav 71 · bottomNav 54 · appbar 45 · footer 204.

**breakpoints** (`media/styles/breakpoints.ts`): xs0 · sm375 · **md768** · lg1024 · xl1256.

**프로토타입 preview harness**
- feature 콘텐츠는 iframe(`?preview=1`) 안에서 위 breakpoint 규칙 적용.
- 스튜디오 shell(viewport 리사이즈·flow pill)은 **별도 문서** → `prototype-preview-pattern.md`.
- 스튜디오 기본 Mobile viewport = **375×720** (feature md=768 전환은 iframe 내부 width 기준).

**do**: `{Domain}Scaffold` 로 래핑(MovingScaffold). **don't**: 페이지마다 헤더/네비 개별 sticky 재구현.

**provenance**: repo `media/components/scaffold/{AppScaffold,BaseScaffold}.tsx`
