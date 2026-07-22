import type { BelongingsDetailItem } from "./belongingsTypes";
import {
  BelongingsScreen,
  BelongingsTitle,
  ChipSelect,
  DetailSectionHeader,
  QuantityField,
} from "./BelongingsParts";
import {
  DETAIL_FIELD_LABELS,
  getDetailFieldOrder,
  getProductDetailSpec,
  type DetailFieldKey,
} from "./belongingsDetailSpecs";

interface BelongingsManualDetailProps {
  items: BelongingsDetailItem[];
  onUpdate: (items: BelongingsDetailItem[]) => void;
}

function getSectionLabel(items: BelongingsDetailItem[], item: BelongingsDetailItem) {
  const sameNameItems = items.filter((i) => i.name === item.name);
  if (sameNameItems.length <= 1) return item.name;
  const index = sameNameItems.findIndex((i) => i.id === item.id);
  return `${item.name} (${index + 1})`;
}

function fieldValue(item: BelongingsDetailItem, key: DetailFieldKey): string {
  return item[key];
}

export function BelongingsManualDetail({ items, onUpdate }: BelongingsManualDetailProps) {
  const updateItem = (id: string, patch: Partial<BelongingsDetailItem>) => {
    onUpdate(items.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const removeItem = (id: string) => {
    onUpdate(items.filter((item) => item.id !== id));
  };

  const duplicateItem = (item: BelongingsDetailItem) => {
    onUpdate([...items, { ...item, id: `${item.id}-copy-${Date.now()}`, quantity: 1 }]);
  };

  return (
    <BelongingsScreen>
      <BelongingsTitle title="세부 정보를 알려주세요" size="medium" />

      <div className="flex flex-col pb-[60px]">
        {items.map((item, idx) => {
          const spec = getProductDetailSpec(item.name);
          const fieldKeys = getDetailFieldOrder(spec);
          const label = getSectionLabel(items, item);

          return (
            <div key={item.id}>
              {idx > 0 && <div className="h-px bg-[#EAEDEF]" />}
              <section className="px-[16px]">
                <DetailSectionHeader
                  title={label}
                  onAdd={() => duplicateItem(item)}
                  onRemove={() => removeItem(item.id)}
                />

                <div className="flex flex-col gap-[12px] pb-[16px]">
                  {fieldKeys.map((key) => (
                    <ChipSelect
                      key={key}
                      label={DETAIL_FIELD_LABELS[key]}
                      options={spec.fields[key] ?? []}
                      value={fieldValue(item, key)}
                      onChange={(value) => updateItem(item.id, { [key]: value })}
                    />
                  ))}
                  <div className="flex items-center justify-between py-[12px]">
                    <p className="text-[15px] font-medium leading-[24px] tracking-[-0.3px] text-[#141414]">
                      수량
                    </p>
                    <QuantityField
                      value={item.quantity}
                      onChange={(quantity) => updateItem(item.id, { quantity })}
                    />
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </BelongingsScreen>
  );
}

function createDetailItem(name: string, index: number): BelongingsDetailItem {
  const spec = getProductDetailSpec(name);
  return {
    id: `detail-${name}-${index}`,
    name,
    kind: spec.fields.kind?.[0] ?? "",
    size: spec.fields.size?.[0] ?? "",
    width: spec.fields.width?.[0] ?? "",
    height: spec.fields.height?.[0] ?? "",
    install: spec.fields.install?.[0] ?? "",
    quantity: 1,
  };
}

/** 선택된 제품명으로 세부 항목 생성 (기본값 = 각 필드의 첫 옵션) */
export function buildDetailItemsFromProducts(names: string[]): BelongingsDetailItem[] {
  return names.map((name, i) => createDetailItem(name, i));
}

/**
 * 목록에서 선택한 가구를 기준으로 세부 항목을 동기화.
 * - 새로 선택된 항목 추가
 * - 선택 해제된 항목 제거
 * - 기존에 입력한 세부값은 유지
 */
export function syncDetailItemsWithProducts(
  selectedNames: string[],
  existing: BelongingsDetailItem[]
): BelongingsDetailItem[] {
  const next: BelongingsDetailItem[] = [];
  const usedIds = new Set<string>();

  for (const name of selectedNames) {
    const kept = existing.filter((item) => item.name === name && !usedIds.has(item.id));
    if (kept.length > 0) {
      for (const item of kept) {
        usedIds.add(item.id);
        next.push(item);
      }
    } else {
      next.push(createDetailItem(name, next.length));
    }
  }

  return next;
}
