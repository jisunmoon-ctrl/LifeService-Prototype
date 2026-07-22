import { SystemStatusBar } from "../../../shared/mobile/SystemStatusBar";
import { MobileTopNavigation } from "../../../shared/mobile/MobileTopNavigation";
import { MobileTitleArea } from "../../../shared/mobile/MobileTitleArea";
import { MatchingStatusIndicator } from "../../../shared/mobile/MatchingStatusIndicator";
import { MatchedCompanyCard } from "../../../shared/mobile/MatchedCompanyCard";
import { ApplicationDetails } from "../../../shared/mobile/ApplicationDetails";

export default function MovingRequestScreen({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  return (
    <div className="bg-[#eaebef] relative size-full">
      {/* Fixed Top Area: 44px (Status) + 44px (Nav) = 88px */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <SystemStatusBar />
        <MobileTopNavigation />
      </div>

      {/* Body Area: Top 88px, Bottom 0px (No sticky footer) */}
      <div className="absolute left-0 right-0 top-[88px] bottom-0 overflow-y-auto">
        <div className="content-stretch flex flex-col gap-[0px] items-start bg-white min-h-full">
             <MobileTitleArea />
             <div className="flex flex-col w-full pb-[40px]">
                 <MatchingStatusIndicator />
                 <div className="flex flex-col gap-[0px] mt-[16px]">
                    <MatchedCompanyCard 
                        name="영구크린"
                        rating="5.0"
                        reviewCount={20}
                        updateTime="21.09.15. 23:15"
                        chatMessage="영구크린에서 견적서를 보냈습니다."
                        chatTime="오후 6:30"
                    />
                    <MatchedCompanyCard 
                        name="민익스프레스"
                        rating="5.0"
                        reviewCount={20}
                        updateTime="21.09.15. 23:15"
                        chatMessage="민익스프레스에서 견적서를 보냈습니다."
                        chatTime="오전 10:05"
                    />
                 </div>
                 <div className="w-full h-[10px] bg-[#F7F9FA] mt-[24px]"></div>
                 <ApplicationDetails />
             </div>
        </div>
      </div>

      {/* Fixed Bottom Area: None */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
      </div>
    </div>
  );
}
