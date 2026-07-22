import { useState } from "react";
import { InputFlowLayout } from "../../../shared/flow/InputFlowLayout";
import { FlowBottomActions } from "../../../shared/flow/FlowBottomActions";
import { AddressSearchModal } from "../../../shared/common/AddressSearchModal";
import {
  ConstructionStep1Space,
  ConstructionStep2Status,
  ConstructionStep3Scope,
  ConstructionStep4Date,
  ConstructionStep5Address,
  ConstructionStep6Contact,
} from "./components/ConstructionSteps";
import { ConstructionComplete } from "./components/ConstructionComplete";
import {
  createInitialConstructionData,
  type ConstructionFormData,
} from "./components/constructionTypes";

interface ConstructionFlowScreenProps {
  onNavigate?: (screen: string) => void;
  initialStep?: number;
}

const TOTAL_STEPS = 6;

export default function ConstructionFlowScreen({
  onNavigate,
  initialStep = 1,
}: ConstructionFlowScreenProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [showComplete, setShowComplete] = useState(false);
  const [addressOpen, setAddressOpen] = useState(false);
  const [formData, setFormData] = useState<ConstructionFormData>(createInitialConstructionData);

  const update = (patch: Partial<ConstructionFormData>) =>
    setFormData((prev) => ({ ...prev, ...patch }));

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) setCurrentStep((s) => s + 1);
    else setShowComplete(true);
  };
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };
  const handleClose = () => onNavigate?.("construction_step1");

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!formData.spaceType;
      case 2:
        return !!formData.spaceStatus;
      case 3:
        return !!formData.scope;
      case 4:
        return !!formData.startDate && !!formData.endDate;
      case 5:
        return !!formData.address;
      case 6:
        return (
          !!formData.contact.name && !!formData.contact.phoneNumber && formData.agreedContract
        );
      default:
        return false;
    }
  };

  return (
    <InputFlowLayout
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      title="시공 상담 신청"
      onBack={currentStep > 1 ? handleBack : undefined}
      onClose={currentStep === 1 ? handleClose : undefined}
      onSkip={currentStep === 1 ? handleClose : undefined}
      bottomButton={
        <FlowBottomActions
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          canProceed={canProceed()}
          onBack={handleBack}
          onNext={handleNext}
          nextLabel={currentStep === TOTAL_STEPS ? "상담 신청" : undefined}
        />
      }
      overlay={
        <>
          <AddressSearchModal
            isOpen={addressOpen}
            onClose={() => setAddressOpen(false)}
            onSelect={(address) => {
              update({ address });
              setAddressOpen(false);
            }}
          />
          <ConstructionComplete
            isOpen={showComplete}
            onConfirm={() => {
              setShowComplete(false);
              onNavigate?.("construction_step1");
            }}
          />
        </>
      }
    >
      {currentStep === 1 && (
        <ConstructionStep1Space
          value={formData.spaceType}
          onSelect={(spaceType) => update({ spaceType })}
        />
      )}
      {currentStep === 2 && (
        <ConstructionStep2Status
          value={formData.spaceStatus}
          onSelect={(spaceStatus) => update({ spaceStatus })}
        />
      )}
      {currentStep === 3 && (
        <ConstructionStep3Scope value={formData.scope} onSelect={(scope) => update({ scope })} />
      )}
      {currentStep === 4 && (
        <ConstructionStep4Date
          data={formData}
          onChange={(startDate, endDate) => update({ startDate, endDate })}
        />
      )}
      {currentStep === 5 && (
        <ConstructionStep5Address data={formData} onOpenSearch={() => setAddressOpen(true)} />
      )}
      {currentStep === 6 && (
        <ConstructionStep6Contact
          data={formData.contact}
          agreed={formData.agreedContract}
          onUpdate={(contact) => update({ contact })}
          onAgreeChange={(agreedContract) => update({ agreedContract })}
        />
      )}
    </InputFlowLayout>
  );
}
