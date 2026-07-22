import React, { useState } from "react";
import { X, Search, MapPin } from "lucide-react";

interface AddressSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (address: string) => void;
}

export function AddressSearchModal({ isOpen, onClose, onSelect }: AddressSearchModalProps) {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setHasSearched(true);
    
    // Mock search results
    if (keyword.includes("판교")) {
      setSearchResults([
        "경기 성남시 분당구 판교역로 235 (삼평동, 에이치스퀘어 엔동)",
        "경기 성남시 분당구 판교역로 231 (삼평동, 에이치스퀘어 에스동)",
        "경기 성남시 분당구 판교역로 192 (삼평동, 판교미래에셋센터)",
        "경기 성남시 분당구 판교역로 146 (백현동, 힐스테이트 판교역)",
      ]);
    } else if (keyword.includes("서초")) {
      setSearchResults([
        "서울 서초구 서초대로 74길 11 (서초동, 삼성전자 서초사옥)",
        "서울 서초구 서초대로 74길 4 (서초동, 삼성생명 서초타워)",
        "서울 서초구 서초대로 74길 14 (서초동, 더에셋)",
      ]);
    } else {
      // Default mock results for other keywords
      setSearchResults([
        `${keyword} 관련 검색 결과 1 (예시)`,
        `${keyword} 관련 검색 결과 2 (예시)`,
        `${keyword} 관련 검색 결과 3 (예시)`,
      ]);
    }
  };

  const handleSelect = (addr: string) => {
    // Remove parentheses info for cleaner input
    const cleanAddr = addr.split('(')[0].trim();
    onSelect(cleanAddr);
    onClose();
  };

  const handleReset = () => {
    setKeyword("");
    setSearchResults([]);
    setHasSearched(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-[20px]" onClick={onClose}>
      <div 
        className="bg-white w-full max-w-[335px] relative shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button (Black square at top right) */}
        <button 
          onClick={onClose} 
          className="absolute -top-[0] -right-[0] z-10 bg-black w-[40px] h-[40px] flex items-center justify-center text-white"
        >
          <X size={24} />
        </button>

        {/* Search Bar */}
        <div className="p-[20px] pt-[30px] border-b border-[#F0F0F0]">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                if (e.target.value === "") {
                    setHasSearched(false);
                    setSearchResults([]);
                }
              }}
              placeholder="예) 판교역로 235, 분당 주공"
              className="w-full h-[50px] border border-[#DADDE0] rounded-[4px] pl-[16px] pr-[44px] text-[16px] text-[#141414] placeholder-[#C2C8CC] focus:border-[#00A1FF] focus:outline-none"
              autoFocus
            />
            <button 
              type="submit" 
              className="absolute right-[12px] top-[50%] -translate-y-[50%] text-[#141414]"
            >
              <Search size={20} />
            </button>
          </form>
          
          {/* Tooltip bubble (Only show when empty) */}
          {!hasSearched && !keyword && (
            <div className="absolute top-[85px] left-[50%] -translate-x-[50%] bg-white border border-[#EAEAEA] rounded-[4px] px-[12px] py-[6px] shadow-sm z-10 whitespace-nowrap">
              <div className="absolute -top-[5px] left-[50%] -translate-x-[50%] w-[8px] h-[8px] bg-white border-t border-l border-[#EAEAEA] rotate-45"></div>
              <span className="text-[12px] text-[#828C94]">터치하여 검색해 주세요!</span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="h-[400px] overflow-y-auto">
          {!hasSearched ? (
            /* Tip Content */
            <div className="p-[24px]">
              <h3 className="text-[20px] font-bold text-[#141414] mb-[16px]">tip</h3>
              <p className="text-[14px] text-[#525C63] leading-[22px] mb-[24px]">
                아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가 검색됩니다.
              </p>

              <div className="space-y-[20px]">
                <div>
                  <p className="text-[12px] text-[#828C94] mb-[6px]">도로명 + 건물번호</p>
                  <button onClick={() => setKeyword("판교역로 235")} className="text-[14px] text-[#00A1FF] font-medium hover:underline">
                    예) 판교역로 235, 제주 첨단로 242
                  </button>
                </div>
                
                <div>
                  <p className="text-[12px] text-[#828C94] mb-[6px]">지역명(동/리) + 번지</p>
                  <button onClick={() => setKeyword("삼평동 681")} className="text-[14px] text-[#00A1FF] font-medium hover:underline">
                    예) 삼평동 681, 제주 영평동 2181
                  </button>
                </div>

                <div>
                  <p className="text-[12px] text-[#828C94] mb-[6px]">지역명(동/리) + 건물명(아파트명)</p>
                  <button onClick={() => setKeyword("분당 주공")} className="text-[14px] text-[#00A1FF] font-medium hover:underline">
                    예) 분당 주공, 연수동 주공3차
                  </button>
                </div>

                <div>
                  <p className="text-[12px] text-[#828C94] mb-[6px]">사서함명 + 번호</p>
                  <button onClick={() => setKeyword("분당우체국사서함")} className="text-[14px] text-[#00A1FF] font-medium hover:underline">
                    예) 분당우체국사서함 1~100
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Search Results */
            <div className="bg-white">
              {searchResults.length > 0 ? (
                <ul className="divide-y divide-[#F0F0F0]">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleSelect(result)}
                        className="w-full text-left px-[20px] py-[16px] hover:bg-gray-50 flex items-start gap-[10px]"
                      >
                        <MapPin size={18} className="text-[#828C94] mt-[3px] shrink-0" />
                        <div>
                          <p className="text-[15px] text-[#141414] leading-[22px]">{result}</p>
                          <span className="text-[12px] text-[#828C94] mt-[2px] block bg-[#F7F8F9] px-[6px] py-[2px] rounded w-fit">지번 주소 보기</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-[#828C94] mt-[60px]">
                  <p>검색 결과가 없습니다.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
