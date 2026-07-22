import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, X, Camera, Image as ImageIcon } from "lucide-react";

interface PhotoEstimateStepAProps {
  onNavigate?: (screen: string) => void;
  step: 7 | 8; // Step 7: 사진 촬영, Step 8: 큰 짐 입력
}

interface Room {
  id: string;
  name: string;
  photos: string[];
}

interface LargeItem {
  id: string;
  name: string;
  category: string;
}

export default function PhotoEstimateStepA({ onNavigate, step }: PhotoEstimateStepAProps) {
  // Step 7: 공간별 사진 상태
  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", name: "거실", photos: [] },
    { id: "2", name: "주방", photos: [] },
  ]);
  const [isGuideExpanded, setIsGuideExpanded] = useState(true);
  const [editingRoomId, setEditingRoomId] = useState<string | null>(null);

  // Step 8: 큰 짐 상태
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const largeItemsData = {
    가전: ["TV", "냉장고", "세탁기", "냉장고", "에어컨", "스타일러", "식기세척기", "정수기", "안마의자", "로봇청소기", "건조기", "책장"],
    가구: ["침대", "옷장", "책장", "서랍장", "소파", "식탁", "피아노"],
  };

  const handleAddRoom = () => {
    const newRoom: Room = {
      id: Date.now().toString(),
      name: `방 ${rooms.length + 1}`,
      photos: [],
    };
    setRooms([...rooms, newRoom]);
  };

  const handleRemoveRoom = (roomId: string) => {
    setRooms(rooms.filter(room => room.id !== roomId));
  };

  const handleAddPhoto = (roomId: string) => {
    // 실제로는 카메라/갤러리 열기
    const newPhoto = `photo-${Date.now()}.jpg`;
    setRooms(rooms.map(room => 
      room.id === roomId 
        ? { ...room, photos: [...room.photos, newPhoto].slice(0, 10) }
        : room
    ));
  };

  const handleRemovePhoto = (roomId: string, photoIndex: number) => {
    setRooms(rooms.map(room =>
      room.id === roomId
        ? { ...room, photos: room.photos.filter((_, i) => i !== photoIndex) }
        : room
    ));
  };

  const toggleLargeItem = (itemName: string) => {
    setSelectedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    );
  };

  const handleNext = () => {
    if (step === 7) {
      // 다음 스텝으로
      onNavigate?.("input_step8");
    } else {
      // 마지막 스텝이므로 완료
      onNavigate?.("var_a");
    }
  };

  // Step 7: 공간별 사진 촬영
  if (step === 7) {
    return (
      <div className="bg-[#eaebef] relative size-full">
        {/* 상단 고정 영역 */}
        <div className="absolute top-0 left-0 right-0 z-10">
          {/* Status Bar */}
          <div className="bg-white h-[44px] relative shrink-0 w-full">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-[343px]">
              <div className="text-body-14 text-[var(--fg-neutral)]">9:41</div>
              <div className="flex items-center gap-1">
                <div className="text-body-14">📶</div>
                <div className="text-body-14">📡</div>
                <div className="text-body-14">🔋</div>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="bg-white h-[44px] relative shrink-0 w-full border-b border-[var(--border-neutral)]">
            <button
              onClick={() => onNavigate?.("input_step6")}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-1"
            >
              <X className="size-5 text-[var(--fg-neutral)]" />
            </button>
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-heading-18 font-bold text-[var(--fg-neutral)]">
              이사 신청
            </h1>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-body-14 text-[var(--fg-weak)]"
            >
              다음에
            </button>
          </div>

          {/* Progress Bar */}
          <div className="h-[6px] bg-[#f7f9fa] relative w-full">
            <div className="absolute left-0 top-0 h-full bg-[var(--bg-brand)] transition-all" style={{ width: '87.5%' }} />
          </div>
        </div>

        {/* 바디 영역 */}
        <div className="absolute left-0 right-0 top-[94px] bottom-[96px] overflow-y-auto">
          <div className="content-stretch flex flex-col gap-[10px] items-start p-4">
            {/* 타이틀 */}
            <h2 className="text-heading-24 font-semibold text-[var(--fg-neutral)] mb-2">
              정확한 견적을 위해<br />
              짐 사진을 찍어주세요
            </h2>

            {/* 가이드 박스 */}
            <div className="bg-[#f5f5f5] rounded-lg p-4 w-full mb-4">
              <button
                onClick={() => setIsGuideExpanded(!isGuideExpanded)}
                className="flex items-center justify-between w-full mb-2"
              >
                <span className="text-body-14 font-semibold text-[var(--fg-neutral)]">
                  정확한 견적을 받으려면?
                </span>
                {isGuideExpanded ? (
                  <ChevronUp className="size-4 text-[var(--fg-neutral)]" />
                ) : (
                  <ChevronDown className="size-4 text-[var(--fg-neutral)]" />
                )}
              </button>
              
              {isGuideExpanded && (
                <>
                  <p className="text-body-14 text-[var(--fg-neutral)] mb-2">
                    내부 짐까지 잘 보일 수 있도록 서랍을 다 끝까지 열고 찍어주세요.
                  </p>
                  <div className="flex gap-1">
                    <div className="flex-1 aspect-square bg-[#d9d9d9] rounded"></div>
                    <div className="flex-1 aspect-square bg-[#d9d9d9] rounded"></div>
                    <div className="flex-1 aspect-square bg-[#d9d9d9] rounded"></div>
                  </div>
                </>
              )}
            </div>

            {/* 공간별 사진 목록 */}
            {rooms.map((room) => (
              <div key={room.id} className="w-full">
                <div className="flex items-center justify-between px-4 py-3">
                  {editingRoomId === room.id ? (
                    <input
                      type="text"
                      value={room.name}
                      onChange={(e) => {
                        setRooms(rooms.map(r =>
                          r.id === room.id ? { ...r, name: e.target.value } : r
                        ));
                      }}
                      onBlur={() => setEditingRoomId(null)}
                      className="text-heading-16 font-semibold text-[var(--fg-neutral)] bg-transparent border-b border-[var(--border-brand)] outline-none"
                      autoFocus
                    />
                  ) : (
                    <h3
                      onClick={() => setEditingRoomId(room.id)}
                      className="text-heading-16 font-semibold text-[var(--fg-neutral)] cursor-pointer"
                    >
                      {room.name}
                    </h3>
                  )}
                  {rooms.length > 1 && (
                    <button
                      onClick={() => handleRemoveRoom(room.id)}
                      className="text-detail-12 text-[var(--fg-critical)]"
                    >
                      삭제
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-1 px-4">
                  {room.photos.map((photo, index) => (
                    <div key={index} className="relative aspect-square bg-[#f5f5f5] rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-detail-10 text-[var(--fg-weak)]">
                        {index + 1}
                      </div>
                      <button
                        onClick={() => handleRemovePhoto(room.id, index)}
                        className="absolute top-1 right-1 bg-black/50 rounded-full p-0.5"
                      >
                        <X className="size-3 text-white" />
                      </button>
                    </div>
                  ))}
                  
                  {room.photos.length < 10 && (
                    <button
                      onClick={() => handleAddPhoto(room.id)}
                      className="aspect-square bg-[#f5f5f5] rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-[#e0e0e0] transition-default"
                    >
                      <Plus className="size-5 text-[var(--fg-weak)]" />
                      <span className="text-detail-10 text-[var(--fg-weak)]">
                        {room.photos.length}/10
                      </span>
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* 방 추가 버튼 */}
            <button
              onClick={handleAddRoom}
              className="w-full px-4 py-3 border border-[var(--border-neutral)] rounded flex items-center justify-center gap-2 hover:bg-[var(--bg-weak)] transition-default"
            >
              <Plus className="size-4 text-[var(--fg-neutral)]" />
              <span className="text-body-16 font-semibold text-[var(--fg-neutral)]">
                방 추가
              </span>
            </button>
          </div>
        </div>

        {/* 하단 고정 영역 */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          {/* Button Area */}
          <div className="bg-white p-1.5">
            <button
              onClick={handleNext}
              className="w-full h-[50px] bg-[var(--bg-brand)] text-white rounded flex items-center justify-center text-body-16 font-bold hover:opacity-90 transition-default"
            >
              다음
            </button>
          </div>

          {/* Home Indicator */}
          <div className="bg-white h-[34px] flex items-center justify-center">
            <div className="w-[134px] h-[5px] bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  // Step 8: 큰 짐 여부도 체크
  return (
    <div className="bg-[#eaebef] relative size-full">
      {/* 상단 고정 영역 */}
      <div className="absolute top-0 left-0 right-0 z-10">
        {/* Status Bar */}
        <div className="bg-white h-[44px] relative shrink-0 w-full">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-[343px]">
            <div className="text-body-14 text-[var(--fg-neutral)]">9:41</div>
            <div className="flex items-center gap-1">
              <div className="text-body-14">📶</div>
              <div className="text-body-14">📡</div>
              <div className="text-body-14">🔋</div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-white h-[44px] relative shrink-0 w-full border-b border-[var(--border-neutral)]">
          <button
            onClick={() => onNavigate?.("input_step7")}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-1"
          >
            <X className="size-5 text-[var(--fg-neutral)]" />
          </button>
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-heading-18 font-bold text-[var(--fg-neutral)]">
            이사 신청
          </h1>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-body-14 text-[var(--fg-weak)]"
          >
            다음에
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-[6px] bg-[#f7f9fa] relative w-full">
          <div className="absolute left-0 top-0 h-full bg-[var(--bg-brand)] transition-all" style={{ width: '100%' }} />
        </div>
      </div>

      {/* 바디 영역 */}
      <div className="absolute left-0 right-0 top-[94px] bottom-[96px] overflow-y-auto">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-4">
          {/* 타이틀 */}
          <h2 className="text-heading-24 font-semibold text-[var(--fg-neutral)] mb-4">
            큰 짐 여부도<br />
            체크해주세요
          </h2>

          {/* 가전 */}
          <div className="w-full mb-4">
            <h3 className="text-body-16 font-semibold text-[var(--fg-neutral)] mb-3 px-2">
              가전
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {largeItemsData.가전.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleLargeItem(item)}
                  className={`px-4 py-3 rounded border transition-default ${
                    selectedItems.includes(item)
                      ? 'border-[var(--border-brand)] bg-[var(--bg-brand-weak)] text-[var(--fg-brand)]'
                      : 'border-[var(--border-neutral)] bg-white text-[var(--fg-neutral)]'
                  }`}
                >
                  <span className="text-body-14">{item}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 가구 */}
          <div className="w-full">
            <h3 className="text-body-16 font-semibold text-[var(--fg-neutral)] mb-3 px-2">
              가구
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {largeItemsData.가구.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleLargeItem(item)}
                  className={`px-4 py-3 rounded border transition-default ${
                    selectedItems.includes(item)
                      ? 'border-[var(--border-brand)] bg-[var(--bg-brand-weak)] text-[var(--fg-brand)]'
                      : 'border-[var(--border-neutral)] bg-white text-[var(--fg-neutral)]'
                  }`}
                >
                  <span className="text-body-14">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 하단 고정 영역 */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Button Area */}
        <div className="bg-white p-1.5">
          <button
            onClick={handleNext}
            className="w-full h-[50px] bg-[var(--bg-brand)] text-white rounded flex items-center justify-center text-body-16 font-bold hover:opacity-90 transition-default"
          >
            다음
          </button>
        </div>

        {/* Home Indicator */}
        <div className="bg-white h-[34px] flex items-center justify-center">
          <div className="w-[134px] h-[5px] bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
