import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, X, Sparkles, CheckCircle2 } from "lucide-react";

interface PhotoEstimateStepDProps {
  onNavigate?: (screen: string) => void;
}

interface Room {
  id: string;
  name: string;
  photos: string[];
  suggestedItems: string[];
}

export default function PhotoEstimateStepD({ onNavigate }: PhotoEstimateStepDProps) {
  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", name: "거실", photos: [], suggestedItems: ["TV", "소파", "책장"] },
    { id: "2", name: "주방", photos: [], suggestedItems: ["냉장고", "식기세척기", "전조기"] },
  ]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isGuideExpanded, setIsGuideExpanded] = useState(true);
  const [editingRoomId, setEditingRoomId] = useState<string | null>(null);
  const [activeRoomId, setActiveRoomId] = useState<string | null>(null);

  const roomTemplates = {
    거실: ["TV", "소파", "책장", "에어컨"],
    주방: ["냉장고", "식기세척기", "전조기", "정수기"],
    침실: ["침대", "옷장", "서랍장", "에어컨"],
    욕실: ["세탁기", "건조기"],
    현관: ["신발장"],
  };

  const allLargeItems = {
    가전: ["TV", "냉장고", "세탁기", "냉장고", "에어컨", "스타일러", "식기세척기", "정수기", "안마의자", "로봇청소기", "건조기"],
    가구: ["침대", "옷장", "책장", "서랍장", "소파", "식탁", "피아노", "신발장"],
  };

  const handleAddRoom = () => {
    const newRoom: Room = {
      id: Date.now().toString(),
      name: `방 ${rooms.length + 1}`,
      photos: [],
      suggestedItems: [],
    };
    setRooms([...rooms, newRoom]);
  };

  const handleRemoveRoom = (roomId: string) => {
    setRooms(rooms.filter(room => room.id !== roomId));
  };

  const handleAddPhoto = (roomId: string) => {
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
    onNavigate?.("var_a");
  };

  const handleRoomNameChange = (roomId: string, newName: string) => {
    setRooms(rooms.map(room => {
      if (room.id !== roomId) return room;
      
      // 방 이름에 따라 추천 아이템 자동 설정
      const templateKey = Object.keys(roomTemplates).find(key => 
        newName.includes(key)
      ) as keyof typeof roomTemplates;
      
      return {
        ...room,
        name: newName,
        suggestedItems: templateKey ? roomTemplates[templateKey] : [],
      };
    }));
  };

  const acceptAllSuggestions = (roomId: string) => {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;
    
    setSelectedItems(prev => {
      const newItems = [...prev];
      room.suggestedItems.forEach(item => {
        if (!newItems.includes(item)) {
          newItems.push(item);
        }
      });
      return newItems;
    });
  };

  const totalPhotos = rooms.reduce((sum, room) => sum + room.photos.length, 0);
  const totalSuggestions = rooms.reduce((sum, room) => sum + room.suggestedItems.length, 0);

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
          <div className="absolute left-0 top-0 h-full bg-[var(--bg-brand)] transition-all" style={{ width: '100%' }} />
        </div>
      </div>

      {/* 바디 영역 */}
      <div className="absolute left-0 right-0 top-[94px] bottom-[96px] overflow-y-auto">
        <div className="content-stretch flex flex-col gap-4 items-start p-4">
          {/* 타이틀 */}
          <h2 className="text-heading-24 font-semibold text-[var(--fg-neutral)]">
            정확한 견적을 위해<br />
            짐 정보를 입력해주세요
          </h2>

          {/* 스마트 가이드 배너 */}
          <div className="bg-gradient-to-r from-[#00a1ff]/10 to-[#35c5f0]/10 border border-[var(--border-brand)] rounded-lg p-3 w-full flex items-start gap-2">
            <Sparkles className="size-5 text-[var(--fg-brand)] shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-body-14 font-semibold text-[var(--fg-brand)] mb-1">
                AI 스마트 가이드
              </p>
              <p className="text-detail-12 text-[var(--fg-neutral)]">
                공간을 선택하면 해당 공간에 있을 가능성이 높은 큰 짐을 자동으로 추천해드려요
              </p>
            </div>
          </div>

          {/* 가이드 박스 */}
          <div className="bg-[#f5f5f5] rounded-lg p-4 w-full">
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

          {/* 공간별 사진 + 추천 큰짐 */}
          {rooms.map((room) => (
            <div key={room.id} className="w-full bg-white rounded-lg p-4 shadow-sm">
              {/* 공간 이름 */}
              <div className="flex items-center justify-between mb-3">
                {editingRoomId === room.id ? (
                  <input
                    type="text"
                    value={room.name}
                    onChange={(e) => handleRoomNameChange(room.id, e.target.value)}
                    onBlur={() => setEditingRoomId(null)}
                    className="text-body-16 font-semibold text-[var(--fg-neutral)] bg-transparent border-b border-[var(--border-brand)] outline-none"
                    autoFocus
                  />
                ) : (
                  <h3
                    onClick={() => setEditingRoomId(room.id)}
                    className="text-body-16 font-semibold text-[var(--fg-neutral)] cursor-pointer flex items-center gap-2"
                  >
                    {room.name}
                    {room.suggestedItems.length > 0 && (
                      <span className="text-detail-10 bg-[var(--bg-brand)] text-white px-1.5 py-0.5 rounded-full">
                        AI 추천 {room.suggestedItems.length}개
                      </span>
                    )}
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

              {/* 사진 촬영 영역 */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-detail-12 text-[var(--fg-weak)]">
                    사진 ({room.photos.length}/10)
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1">
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
                    </button>
                  )}
                </div>
              </div>

              {/* AI 추천 큰짐 */}
              {room.suggestedItems.length > 0 && (
                <div className="border-t border-[var(--border-neutral)] pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <Sparkles className="size-3 text-[var(--fg-brand)]" />
                      <span className="text-detail-12 font-semibold text-[var(--fg-brand)]">
                        추천 큰짐
                      </span>
                    </div>
                    <button
                      onClick={() => acceptAllSuggestions(room.id)}
                      className="text-detail-12 text-[var(--fg-brand)] font-medium"
                    >
                      전체 선택
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {room.suggestedItems.map((item) => {
                      const isSelected = selectedItems.includes(item);
                      return (
                        <button
                          key={item}
                          onClick={() => toggleLargeItem(item)}
                          className={`px-3 py-1.5 rounded-full text-detail-12 border transition-default flex items-center gap-1 ${
                            isSelected
                              ? 'border-[var(--border-brand)] bg-[var(--bg-brand-weak)] text-[var(--fg-brand)]'
                              : 'border-[var(--border-neutral)] bg-white text-[var(--fg-neutral)]'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="size-3" />}
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
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

          {/* 추가 큰짐 선택 */}
          <div className="w-full bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-body-16 font-semibold text-[var(--fg-neutral)] mb-3">
              추가로 필요한 큰짐이 있나요?
            </h3>
            
            {/* 가전 */}
            <div className="mb-4">
              <h4 className="text-body-14 font-medium text-[var(--fg-weak)] mb-2">가전</h4>
              <div className="grid grid-cols-3 gap-2">
                {allLargeItems.가전.map((item) => {
                  const isRecommended = rooms.some(r => r.suggestedItems.includes(item));
                  if (isRecommended) return null; // 이미 추천된 항목은 제외
                  
                  return (
                    <button
                      key={item}
                      onClick={() => toggleLargeItem(item)}
                      className={`px-3 py-2 rounded border transition-default ${
                        selectedItems.includes(item)
                          ? 'border-[var(--border-brand)] bg-[var(--bg-brand-weak)] text-[var(--fg-brand)]'
                          : 'border-[var(--border-neutral)] bg-white text-[var(--fg-neutral)]'
                      }`}
                    >
                      <span className="text-detail-12">{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 가구 */}
            <div>
              <h4 className="text-body-14 font-medium text-[var(--fg-weak)] mb-2">가구</h4>
              <div className="grid grid-cols-3 gap-2">
                {allLargeItems.가구.map((item) => {
                  const isRecommended = rooms.some(r => r.suggestedItems.includes(item));
                  if (isRecommended) return null; // 이미 추천된 항목은 제외
                  
                  return (
                    <button
                      key={item}
                      onClick={() => toggleLargeItem(item)}
                      className={`px-3 py-2 rounded border transition-default ${
                        selectedItems.includes(item)
                          ? 'border-[var(--border-brand)] bg-[var(--bg-brand-weak)] text-[var(--fg-brand)]'
                          : 'border-[var(--border-neutral)] bg-white text-[var(--fg-neutral)]'
                      }`}
                    >
                      <span className="text-detail-12">{item}</span>
                    </button>
                  );
                })}
              </div>
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
