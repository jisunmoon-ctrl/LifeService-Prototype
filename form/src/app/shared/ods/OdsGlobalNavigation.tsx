import type { ReactNode } from "react";
import { ChevronDown, Search, ShoppingCart, Triangle } from "lucide-react";
import { OhouseHorizontalLogo } from "./OhouseHorizontalLogo";

const MAIN_MENUS = [
  { label: "커뮤니티", active: false },
  { label: "쇼핑", active: false },
  { label: "인테리어/생활", active: true },
] as const;

const SUB_TABS = [
  { label: "홈", active: true },
  { label: "주거공간시공", active: false },
  { label: "상업공간시공", active: false },
  { label: "시공자재랭킹", active: false },
  { label: "제품설치", active: false },
  { label: "이사", active: false },
  { label: "집보기체크리스트", active: false },
  { label: "아파트시공사례", active: false },
] as const;

const AUTH_LINKS = ["로그인", "회원가입", "고객센터"] as const;

function OdsDivider() {
  return <div className="h-px w-full bg-[#EAEDEF] shrink-0" aria-hidden />;
}

function OdsSearchField() {
  return (
    <div className="flex flex-1 min-w-0 h-[40px] items-center gap-[6px] rounded-[4px] border border-[#E6E6E6] bg-white px-[15px]">
      <Search className="size-6 shrink-0 text-[#828C94]" aria-hidden />
      <span className="flex-1 truncate text-[16px] leading-[20px] tracking-[-0.3px] text-[#C2C8CC]">
        시공업체 검색
      </span>
    </div>
  );
}

function OdsBoxButton({
  children,
  rightIcon,
}: {
  children: ReactNode;
  rightIcon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="inline-flex h-[40px] shrink-0 items-center justify-center gap-[6px] rounded-[4px] bg-[#0AA5FF] px-[16px] text-[14px] leading-[18px] tracking-[-0.3px] text-white"
    >
      {children}
      {rightIcon}
    </button>
  );
}

function OdsTabItem({ label, active }: { label: string; active: boolean }) {
  return (
    <div className="relative flex h-[50px] items-center justify-center px-[6px] shrink-0">
      <span
        className={`text-[16px] leading-[20px] tracking-[-0.3px] whitespace-nowrap ${
          active ? "font-bold text-[#0AA5FF]" : "font-bold text-[#2F3438]"
        }`}
      >
        {label}
      </span>
      {active && (
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#0AA5FF]" aria-hidden />
      )}
    </div>
  );
}

/**
 * ODS 🪣 Navigation (PC) — Figma 3617:19185
 * @bucketplace/design-system Navigation / SearchField / BoxButton / Tab / Divider 대응 프로토타입
 */
export function OdsGlobalNavigation() {
  return (
    <header className="shrink-0 w-full bg-white flex flex-col items-center" data-name="Navigation">
      <div className="flex h-[80px] w-full max-w-[1256px] items-center justify-between gap-5 px-[60px] py-[10px]">
        <div className="flex items-center gap-5 min-w-0">
          <OhouseHorizontalLogo className="shrink-0" />
          <nav className="hidden lg:flex items-center gap-5 px-[10px]" aria-label="메인 메뉴">
            {MAIN_MENUS.map(({ label, active }) => (
              <button
                key={label}
                type="button"
                className={`px-[5px] text-[18px] font-bold leading-[24px] tracking-[-0.3px] whitespace-nowrap ${
                  active ? "text-[#0AA5FF]" : "text-[#2F3438]"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-[14px] min-w-0 flex-1 max-w-[650px]">
          <div className="hidden md:flex flex-1 min-w-0 items-center gap-[14px]">
            <OdsSearchField />
            <button
              type="button"
              className="p-[6px] shrink-0 text-[#2F3438]"
              aria-label="장바구니"
            >
              <ShoppingCart className="size-6" />
            </button>
            <div className="hidden xl:flex items-center shrink-0">
              {AUTH_LINKS.map((label, i) => (
                <div key={label} className="flex items-center">
                  <button
                    type="button"
                    className="px-[10px] text-[14px] leading-[18px] tracking-[-0.3px] text-[#2F3438]"
                  >
                    {label}
                  </button>
                  {i < AUTH_LINKS.length - 1 && (
                    <div className="h-4 w-px bg-[#EAEDEF]" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
          <OdsBoxButton rightIcon={<ChevronDown className="size-[18px]" aria-hidden />}>
            글쓰기
          </OdsBoxButton>
        </div>
      </div>

      <OdsDivider />

      <div className="flex w-full max-w-[1256px] items-center gap-[10px] pr-[60px]">
        <nav
          className="flex flex-1 min-w-0 items-center gap-[10px] h-[50px] overflow-x-auto px-[60px]"
          aria-label="서브 메뉴"
        >
          {SUB_TABS.map(({ label, active }) => (
            <OdsTabItem key={label} label={label} active={active} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-[6px] w-[192px] shrink-0">
          <div className="flex items-center gap-[2px]">
            <span className="w-5 text-center text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#2F3438]">
              1
            </span>
            <Triangle className="size-3 fill-[#F05656] text-[#F05656] rotate-0" aria-hidden />
          </div>
          <span className="flex-1 truncate text-[16px] leading-[20px] tracking-[-0.3px] text-[#2F3438]">
            포트메리온
          </span>
          <button type="button" className="p-[6px] text-[#828C94]" aria-label="트렌드 더보기">
            <ChevronDown className="size-[18px]" />
          </button>
        </div>
      </div>

      <OdsDivider />
    </header>
  );
}
