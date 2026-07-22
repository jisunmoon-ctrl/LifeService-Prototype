import { SystemStatusBar } from "../../../shared/mobile/SystemStatusBar";
import { MobileTopNavigation } from "../../../shared/mobile/MobileTopNavigation";
import { MobileTitleArea } from "../../../shared/mobile/MobileTitleArea";
import { MatchingStatusIndicator } from "../../../shared/mobile/MatchingStatusIndicator";
import { MatchedCompanyCard } from "../../../shared/mobile/MatchedCompanyCard";
import { ApplicationDetails } from "../../../shared/mobile/ApplicationDetails";
import { BadgeCheck } from "lucide-react";

export default function MovingRequestScreenVarC({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const companies = [
    {
      id: 1,
      name: "영구크린",
      rating: "5.0",
      reviewCount: 124,
      updateTime: "방금 전",
      isCertified: true
    },
    {
      id: 2,
      name: "민익스프레스",
      rating: "4.8",
      reviewCount: 42,
      updateTime: "1시간 전",
      isCertified: false
    },
    {
      id: 3,
      name: "통인익스프레스",
      rating: "4.7",
      reviewCount: 89,
      updateTime: "3시간 전",
      isCertified: false
    }
  ];

  const certifiedCompanies = companies.filter(c => c.isCertified);
  const generalCompanies = companies.filter(c => !c.isCertified);

  const allCompanies = [...certifiedCompanies, ...generalCompanies];

  return (
    <div className="bg-[#eaebef] relative size-full">
      <div className="absolute top-0 left-0 right-0 z-10">
        <SystemStatusBar />
        <MobileTopNavigation />
      </div>

      <div className="absolute left-0 right-0 top-[88px] bottom-0 overflow-y-auto">
        <div className="content-stretch flex flex-col gap-[0px] items-start bg-[var(--bg-neutral)] min-h-full pb-[40px]">
             <MobileTitleArea />
             <div className="flex flex-col w-full">
                 <MatchingStatusIndicator />
                 
                 {/* Variation C: Minimal Integrated List */}
                 
                 <div className="w-full mt-[12px] border-t border-[var(--border-neutral)]">
                   {allCompanies.map(company => (
                     <MatchedCompanyCard 
                       key={company.id}
                       {...company}
                       isCertified={company.isCertified}
                       variant="list"
                     />
                   ))}
                 </div>
                 
                 <div className="w-full px-[16px] mt-[24px]">
                    <p className="text-detail-12 text-[var(--fg-weak)] text-center bg-[var(--bg-weak)] py-[12px] rounded-[8px]">
                       인증 파트너는 오늘의집이 꼼꼼하게 검증한 업체예요.
                    </p>
                 </div>

                 <div className="w-full h-[10px] bg-[var(--bg-weak)] mt-[24px]"></div>
                 <ApplicationDetails />
             </div>
        </div>
      </div>
    </div>
  );
}
