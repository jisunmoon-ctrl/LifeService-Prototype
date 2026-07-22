import React from "react";

interface Company {
  id: string;
  name: string;
  matchDate: string;
  profileImage?: string;
}

interface Step4Props {
  selectedCompanies: string[];
  onToggle: (companyId: string) => void;
}

export function Step4CompanySelect({ selectedCompanies, onToggle }: Step4Props) {
  // Mock company data - in real app, this would come from props or API
  const companies: Company[] = [
    {
      id: 'company-1',
      name: '숨쉬는이사',
      matchDate: '2026.05.10',
    },
    {
      id: 'company-2',
      name: '안전이사센터',
      matchDate: '2026.05.09',
    },
    {
      id: 'company-3',
      name: '믿음이사',
      matchDate: '2026.05.08',
    },
  ];

  return (
    <div className="w-full flex flex-col pt-[var(--spacing-16)] pb-[var(--spacing-8)]">
      <div className="mb-[var(--spacing-12)] px-[var(--spacing-8)]">
        <p className="text-subheading-16 text-[#2f3438]">
          특별히 불만족스러웠던 업체가 있다면 알려주세요
        </p>
      </div>

      {/* Company Cards */}
      <div className="flex flex-col gap-[var(--spacing-4)] px-[var(--spacing-8)]">
        {companies.map((company) => {
          const isSelected = selectedCompanies.includes(company.id);
          return (
            <button
              key={company.id}
              onClick={() => onToggle(company.id)}
              className={`
                w-full p-[var(--spacing-8)] rounded-[var(--radius-md)]
                border transition-all text-left flex items-center gap-[var(--spacing-6)]
                ${
                  isSelected
                    ? 'border-[var(--bg-brand)] bg-[#E6F4FA]'
                    : 'border-[var(--border-neutral)] bg-white hover:bg-[var(--bg-weak)]'
                }
              `}
            >
              {/* Profile Image */}
              <div className="w-[48px] h-[48px] rounded-full bg-[var(--bg-weak)] flex items-center justify-center shrink-0 overflow-hidden">
                {company.profileImage ? (
                  <img
                    src={company.profileImage}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-subheading-16 text-[var(--fg-weak)]">
                    {company.name.charAt(0)}
                  </span>
                )}
              </div>

              {/* Company Info */}
              <div className="flex-1 min-w-0">
                <div className="text-subheading-16 text-[var(--fg-neutral)] mb-[var(--spacing-2)]">
                  {company.name}
                </div>
                <div className="text-detail-12 text-[var(--fg-weak)]">
                  견적 신청일자 {company.matchDate}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
