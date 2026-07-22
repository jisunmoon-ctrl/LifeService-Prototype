import { useState } from "react";
import { Drawer } from "vaul";
import { X } from "lucide-react";
import { OdsBoxButton } from "../ods/OdsBoxButton";

export interface SavedAddress {
  id: string;
  label: string;
  address: string;
  detailAddress: string;
}

const MOCK_ADDRESSES: SavedAddress[] = [
  {
    id: "1",
    label: "우리집",
    address: "서울특별시 강남구 테헤란로 123",
    detailAddress: "101동 1203호",
  },
  {
    id: "2",
    label: "회사",
    address: "경기도 성남시 분당구 판교역로 235",
    detailAddress: "5층",
  },
];

interface SavedAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (address: SavedAddress) => void;
  selectedId?: string;
  variant?: "modal" | "bottomSheet";
}

function AddressList({
  selectedId,
  onSelectItem,
}: {
  selectedId?: string;
  onSelectItem: (item: SavedAddress) => void;
}) {
  return (
    <>
      {MOCK_ADDRESSES.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelectItem(item)}
          className="w-full px-[20px] py-[16px] text-left border-b border-[#EAEDEF] hover:bg-[#F7F9FA] flex items-start gap-[12px]"
        >
          <span
            className={`mt-[2px] size-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
              selectedId === item.id ? "border-[#141414]" : "border-[#C2C8CC]"
            }`}
          >
            {selectedId === item.id && <span className="size-2.5 rounded-full bg-[#141414]" />}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[16px] font-bold text-[#141414] mb-[4px]">{item.label}</p>
            <p className="text-[14px] text-[#828C94] leading-[20px]">{item.address}</p>
            <p className="text-[14px] text-[#828C94] leading-[20px]">{item.detailAddress}</p>
          </div>
        </button>
      ))}
    </>
  );
}

export function SavedAddressModal({
  isOpen,
  onClose,
  onSelect,
  selectedId,
  variant = "modal",
}: SavedAddressModalProps) {
  const [pendingId, setPendingId] = useState<string | undefined>(selectedId);

  if (!isOpen) return null;

  if (variant === "bottomSheet") {
    return (
      <Drawer.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[16px] fixed bottom-0 left-0 right-0 max-h-[85vh] z-50">
            <div className="w-full h-[54px] relative flex items-center justify-center border-b border-[#EAEDEF]">
              <div className="w-[40px] h-[4px] bg-[#E0E0E0] rounded-full absolute top-[8px]" />
              <Drawer.Title className="text-[18px] font-bold text-[#141414]">배송지 목록</Drawer.Title>
              <Drawer.Description className="sr-only">저장된 배송지 목록입니다.</Drawer.Description>
            </div>
            <div className="flex-1 overflow-y-auto">
              <AddressList
                selectedId={pendingId ?? selectedId}
                onSelectItem={(item) => setPendingId(item.id)}
              />
            </div>
            <div className="p-[6px] border-t border-[#EDEDED]">
              <OdsBoxButton
                variant="brand-solid"
                size="extra-large"
                fullWidth
                disabled={!(pendingId ?? selectedId)}
                onClick={() => {
                  const id = pendingId ?? selectedId;
                  const item = MOCK_ADDRESSES.find((a) => a.id === id);
                  if (item) {
                    onSelect(item);
                    onClose();
                  }
                }}
              >
                선택 완료
              </OdsBoxButton>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="닫기"
      />
      <div className="relative w-[400px] max-w-[calc(100vw-32px)] bg-white rounded-[8px] shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-[20px] h-[56px] border-b border-[#EAEDEF]">
          <h3 className="text-[18px] font-bold text-[#141414]">배송지 목록</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100"
            aria-label="닫기"
          >
            <X className="size-5 text-[#828C94]" />
          </button>
        </div>

        <div className="max-h-[360px] overflow-y-auto">
          <AddressList
            selectedId={selectedId}
            onSelectItem={(item) => {
              onSelect(item);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}
