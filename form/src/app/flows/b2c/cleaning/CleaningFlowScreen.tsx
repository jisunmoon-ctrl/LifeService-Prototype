import { useState } from "react";
import { InputFlowLayout } from "../../../shared/flow/InputFlowLayout";
import { FlowBottomActions } from "../../../shared/flow/FlowBottomActions";
import { CleaningStep1Date } from "./components/CleaningStep1Date";
import { CleaningStep2Location } from "./components/CleaningStep2Location";
import { CleaningStep3Contact } from "./components/CleaningStep3Contact";
import { CleaningCompleteSheet } from "./components/CleaningCompleteSheet";
import {
  createInitialCleaningFormData,
  isLocationComplete,
} from "./components/cleaningConstants";
import type { CleaningFormData, CleaningUserScenario } from "./components/cleaningTypes";

interface CleaningFlowScreenProps {
  onNavigate?: (screen: string) => void;
  initialStep?: number;
  userScenario?: CleaningUserScenario;
  hasRecentMovingQuote?: boolean;
  prefillLocation?: boolean;
  prefillContact?: boolean;
  prefillTime?: boolean;
  prefillDate?: boolean;
  showAuthButton?: boolean;
}

export default function CleaningFlowScreen({
  onNavigate,
  initialStep = 1,
  userScenario = "moving",
  hasRecentMovingQuote,
  prefillLocation,
  prefillContact,
  prefillTime,
  prefillDate,
  showAuthButton = true,
}: CleaningFlowScreenProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [showComplete, setShowComplete] = useState(false);
  const totalSteps = 3;
  const showMovingQuotePrefill = hasRecentMovingQuote ?? userScenario === "moving";

  const [formData, setFormData] = useState<CleaningFormData>(() =>
    createInitialCleaningFormData(userScenario, {
      hasRecentMovingQuote: showMovingQuotePrefill,
      prefillLocation,
      prefillContact,
      prefillTime,
      prefillDate,
    })
  );

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowComplete(true);
    }
  };

  const formatPhone = () => {
    const { phonePrefix, phoneNumber } = formData.contact;
    if (!phoneNumber) return "-";
    const num =
      phoneNumber.length > 4
        ? `${phoneNumber.slice(0, phoneNumber.length - 4)}-${phoneNumber.slice(-4)}`
        : phoneNumber;
    return `${phonePrefix}-${num}`;
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    onNavigate?.("cleaning_step1");
  };

  const getCanProceed = () => {
    switch (currentStep) {
      case 1:
        return !!formData.cleaningDate && formData.cleaningTime.length > 0;
      case 2:
        return isLocationComplete(formData.location);
      case 3:
        return !!formData.contact.name && !!formData.contact.phoneNumber;
      default:
        return false;
    }
  };

  const nextLabel = currentStep === totalSteps ? "견적 신청" : undefined;

  return (
    <InputFlowLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      title="청소 신청"
      onBack={currentStep > 1 ? handleBack : undefined}
      onClose={currentStep === 1 ? handleClose : undefined}
      onSkip={currentStep === 1 ? handleClose : undefined}
      bottomButton={
        <FlowBottomActions
          currentStep={currentStep}
          totalSteps={totalSteps}
          canProceed={getCanProceed()}
          onBack={handleBack}
          onNext={handleNext}
          nextLabel={nextLabel}
          guideLink={currentStep === totalSteps ? "개인정보 이용 및 수집 안내" : undefined}
        />
      }
      overlay={
        <CleaningCompleteSheet
          isOpen={showComplete}
          cleaningDate={formData.cleaningDate}
          phoneDisplay={formatPhone()}
          onConfirm={() => {
            setShowComplete(false);
            onNavigate?.("cleaning_step1");
          }}
        />
      }
    >
      {currentStep === 1 && (
        <CleaningStep1Date
          selectedDate={formData.cleaningDate}
          selectedTime={formData.cleaningTime}
          hasRecentMovingQuote={showMovingQuotePrefill}
          onSelectDate={(cleaningDate) => setFormData((prev) => ({ ...prev, cleaningDate }))}
          onSelectTime={(cleaningTime) => setFormData((prev) => ({ ...prev, cleaningTime }))}
        />
      )}

      {currentStep === 2 && (
        <CleaningStep2Location
          data={formData.location}
          userScenario={userScenario}
          onUpdate={(location) => setFormData((prev) => ({ ...prev, location }))}
        />
      )}

      {currentStep === 3 && (
        <CleaningStep3Contact
          data={formData.contact}
          memo={formData.additionalMemo}
          userScenario={userScenario}
          showAuthButton={showAuthButton}
          onUpdateContact={(contact) => setFormData((prev) => ({ ...prev, contact }))}
          onUpdateMemo={(additionalMemo) => setFormData((prev) => ({ ...prev, additionalMemo }))}
        />
      )}
    </InputFlowLayout>
  );
}
