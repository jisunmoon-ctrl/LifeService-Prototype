import { IconMinus, IconPlus } from "../ods";
import { PRODUCT_CATEGORIES } from "./belongingsConstants";
import { BOX_ICON } from "./belongingsProductIcons";
import type { BelongingsProductItem } from "./belongingsTypes";
import { BelongingsContent, BelongingsScreen, BelongingsTitle } from "./BelongingsParts";
import { FurnitureSelectorTile } from "./FurnitureSelectorTile";

interface BelongingsManualSelectProps {
  products: BelongingsProductItem[];
  boxCount: number;
  memo: string;
  onToggleProduct: (name: string, category: string) => void;
  onBoxCountChange: (count: number) => void;
  onMemoChange: (memo: string) => void;
  /** true면 페이지 타이틀 숨김 (상위 페이지에서 타이틀·옵션 카드 구성 시) */
  hideTitle?: boolean;
}

export function BelongingsManualSelect({
  products,
  boxCount,
  memo,
  onToggleProduct,
  onBoxCountChange,
  onMemoChange,
  hideTitle = false,
}: BelongingsManualSelectProps) {
  const isSelected = (name: string) => products.some((p) => p.name === name && p.selected);

  return (
    <BelongingsScreen>
      {!hideTitle && <BelongingsTitle title="주요 짐 목록을 선택하세요" />}

      <BelongingsContent className={`flex flex-col gap-[20px] ${hideTitle ? "" : "pt-[16px]"}`}>
        {PRODUCT_CATEGORIES.map((cat) => (
          <section key={cat.id}>
            <h3 className="text-[15px] font-semibold leading-[24px] tracking-[-0.3px] text-[#141414] pb-[12px]">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-[4px]">
              {cat.items.map((name) => (
                <FurnitureSelectorTile
                  key={name}
                  label={name}
                  selected={isSelected(name)}
                  onClick={() => onToggleProduct(name, cat.label)}
                />
              ))}
            </div>
          </section>
        ))}

        <div className="h-px bg-[#EAEDEF]" />

        <section>
          <h3 className="text-[15px] font-semibold leading-[24px] text-[#141414] mb-[8px]">
            잔 짐 박스 예상 수량
          </h3>
          <p className="text-[14px] leading-[18px] text-[#8C8C8C] mb-[16px]">
            5호 박스 기준으로 예상 수량을 입력해주세요. 박스 1개에는 얇은 이불 1~2장 정도 들어가요.
          </p>
          <div className="flex items-center gap-[16px] p-[16px] rounded-[8px] bg-[#F5F5F5]">
            <div className="shrink-0 w-[100px] h-[88px] flex items-center justify-center overflow-hidden">
              <img
                src={BOX_ICON}
                alt=""
                className="max-w-full max-h-full object-contain pointer-events-none"
                draggable={false}
              />
            </div>
            <div className="flex flex-col items-center gap-[8px]">
              <p className="text-[14px] font-semibold text-[#141414]">5호 박스 기준</p>
              <div className="flex items-center gap-[16px] border border-[#E0E0E0] rounded-[4px] p-[8px] bg-white">
                <button type="button" onClick={() => onBoxCountChange(Math.max(0, boxCount - 1))} className="p-0">
                  <IconMinus size={16} className="text-[#141414]" />
                </button>
                <span className="text-[15px] font-semibold text-[#2F3438] min-w-[28px] text-center">{boxCount}</span>
                <button type="button" onClick={() => onBoxCountChange(boxCount + 1)} className="p-0">
                  <IconPlus size={16} className="text-[#141414]" />
                </button>
              </div>
            </div>
          </div>
          <ul className="mt-[12px] flex flex-col gap-[8px] text-[14px] leading-[18px] text-[#8C8C8C]">
            <li className="flex gap-[6px]">
              <span>•</span>
              식기, 의류, 주방용품, 책과 같이 수납된 짐들은 모두 꺼내서 포장해야 해요.
            </li>
            <li className="flex gap-[6px]">
              <span>•</span>
              실제 포장 시 잔 짐이 예상보다 많은 경우가 많아요. 예상 수량을 넉넉하게 잡아주세요.
            </li>
          </ul>
        </section>

        <div className="h-px bg-[#EAEDEF]" />

        <section>
          <h3 className="text-[15px] font-semibold leading-[24px] text-[#141414] pb-[12px]">추가 설명</h3>
          <textarea
            value={memo}
            onChange={(e) => onMemoChange(e.target.value)}
            placeholder={"침대와 매트리스트는 버릴 예정이에요.\n벽걸이 TV 분리 운반 및 설치가 필요해요\n장롱 분해가 필요해요"}
            className="w-full h-[108px] rounded-[4px] border border-[#E0E0E0] p-[16px] text-[16px] leading-[24px] placeholder-[#8C8C8C] focus:border-[#00A1FF] focus:outline-none resize-none"
          />
        </section>
      </BelongingsContent>
    </BelongingsScreen>
  );
}

export function buildProductList(): BelongingsProductItem[] {
  return PRODUCT_CATEGORIES.flatMap((cat) =>
    cat.items.map((name) => ({ id: `${cat.id}-${name}`, name, category: cat.label, selected: false }))
  );
}

export function getDefaultSelectedNames(): string[] {
  return ["TV", "세탁기", "건조기"];
}
