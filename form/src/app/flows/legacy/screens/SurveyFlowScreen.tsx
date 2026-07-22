import React, { useState } from "react";
import { X } from "lucide-react";
import { Step1Rating } from "../../../shared/survey/Step1Rating";
import { Step2Positive } from "../../../shared/survey/Step2Positive";
import { Step3Negative } from "../../../shared/survey/Step3Negative";
import { Step4CompanySelect } from "../../../shared/survey/Step4CompanySelect";
import { Step5Feedback } from "../../../shared/survey/Step5Feedback";
import { ReviewWriteModal } from "../../../shared/survey/ReviewWriteModal";

interface SurveyData {
  rating: number | null;
  positiveItems: string[];
  negativeItems: string[];
  problematicCompanies: string[];
  feedback: string;
}

export function SurveyFlowScreen() {
  const [surveyData, setSurveyData] = useState<SurveyData>({
    rating: null,
    positiveItems: [],
    negativeItems: [],
    problematicCompanies: [],
    feedback: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleNext = () => {
    // Show modal when completing survey
    setIsModalOpen(true);
  };

  const handleContracted = () => {
    setIsModalOpen(false);
    console.log("User contracted, navigate to review funnel");
    alert("리뷰 작성 화면으로 이동합니다.");
  };

  const handleNotContracted = () => {
    setIsModalOpen(false);
    console.log("User not contracted, return to previous screen");
    alert("이전 화면으로 돌아갑니다. 감사합니다!");
  };

  const togglePositiveItem = (item: string) => {
    setSurveyData((prev) => ({
      ...prev,
      positiveItems: prev.positiveItems.includes(item)
        ? prev.positiveItems.filter((i) => i !== item)
        : [...prev.positiveItems, item],
    }));
  };

  const toggleNegativeItem = (item: string) => {
    setSurveyData((prev) => ({
      ...prev,
      negativeItems: prev.negativeItems.includes(item)
        ? prev.negativeItems.filter((i) => i !== item)
        : [...prev.negativeItems, item],
    }));
  };

  const toggleCompany = (companyId: string) => {
    setSurveyData((prev) => ({
      ...prev,
      problematicCompanies: prev.problematicCompanies.includes(companyId)
        ? prev.problematicCompanies.filter((id) => id !== companyId)
        : [...prev.problematicCompanies, companyId],
    }));
  };

  const renderContent = () => {
    return (
      <>
        {/* Header Title */}
        <div className="px-[var(--spacing-8)] pt-[var(--spacing-16)] pb-[var(--spacing-16)]">
          <h1 className="text-heading-24 text-[var(--fg-neutral)]">
            오늘의집 이사 서비스는 어떠셨나요?
          </h1>
        </div>

        {/* Step 1: Rating - Always visible */}
        <Step1Rating
          selectedRating={surveyData.rating}
          onSelect={(rating) =>
            setSurveyData((prev) => ({ ...prev, rating }))
          }
        />

        {/* Steps 2-5: Only visible after rating is selected */}
        {surveyData.rating !== null && (
          <div className="animate-in slide-in-from-top-4 fade-in duration-300 pb-[var(--spacing-12)]">
            {/* Step 2: Positive - Only show when rating >= 4 */}
            {surveyData.rating >= 4 && (
              <Step2Positive
                selectedItems={surveyData.positiveItems}
                onToggle={togglePositiveItem}
              />
            )}

            {/* Step 3: Negative - Only show when rating <= 3 */}
            {surveyData.rating <= 3 && (
              <Step3Negative
                selectedItems={surveyData.negativeItems}
                onToggle={toggleNegativeItem}
              />
            )}

            {/* Step 4: Company Select - Only show after negative feedback (rating <= 3) */}
            {surveyData.rating <= 3 && (
              <Step4CompanySelect
                selectedCompanies={surveyData.problematicCompanies}
                onToggle={toggleCompany}
              />
            )}

            {/* Step 5: Feedback - Always show after positive or negative */}
            <Step5Feedback
              feedback={surveyData.feedback}
              onUpdate={(feedback) =>
                setSurveyData((prev) => ({ ...prev, feedback }))
              }
            />
          </div>
        )}
      </>
    );
  };

  return (
    <div className="relative w-full h-full bg-white md:bg-[var(--bg-weak)] md:flex md:items-start md:justify-center md:p-[40px_16px]">
      {/* Card Wrapper (md/lg only) */}
      <div className="relative w-full h-full md:max-w-[480px] md:bg-white md:rounded-[var(--radius-xl)] md:shadow-[0_2px_5px_0_rgba(63,71,77,0.15)] md:overflow-hidden md:flex md:flex-col">
        {/* Header - Fixed */}
        <div className="absolute top-0 left-0 right-0 h-[56px] flex items-center px-[var(--spacing-8)] bg-white z-10 md:static">
          <button
            onClick={() => console.log("Close survey")}
            className="p-[var(--spacing-4)] -ml-[var(--spacing-4)] hover:bg-[var(--bg-weak)] rounded-[var(--radius-md)] transition-colors"
          >
            <X className="w-[var(--spacing-12)] h-[var(--spacing-12)] text-[var(--fg-neutral)]" />
          </button>

          <div className="flex-1" />
        </div>

        {/* Body - Scrollable */}
        <div className="absolute top-[56px] left-0 right-0 bottom-0 overflow-y-auto md:static md:flex-1">
          {renderContent()}
        </div>

        {/* Footer - Fixed (only show when rating is selected) */}
        {surveyData.rating !== null && (
          <div className="absolute bottom-0 left-0 right-0 px-[var(--spacing-8)] pt-[var(--spacing-6)] pb-[var(--spacing-12)] bg-white md:static md:px-[var(--spacing-8)] md:pt-0 md:pb-[var(--spacing-8)]">
            <button
              onClick={handleNext}
              className="w-full h-[52px] rounded-[var(--radius-md)] text-subheading-16 bg-[var(--bg-brand)] text-white hover:bg-[#0095D6] active:bg-[#007AB8] transition-all"
            >
              완료
            </button>
          </div>
        )}
      </div>

      {/* Contract Status Modal */}
      <ReviewWriteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onContracted={handleContracted}
        onNotContracted={handleNotContracted}
      />
    </div>
  );
}
