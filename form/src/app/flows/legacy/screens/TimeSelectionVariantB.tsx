import React, { useState } from "react";
import { InputFlowLayout } from "../../../shared/flow/InputFlowLayout";
import { Step1Type } from "../../b2c/moving/components/Step1Type";
import { Step2DateVariantB } from "../../b2c/moving/components/Step2DateVariantB";
import { Step3Departure } from "../../b2c/moving/components/Step3Departure";
import { Step4Arrival } from "../../b2c/moving/components/Step4Arrival";
import { Step5Packing } from "../../b2c/moving/components/Step5Packing";
import { Step6UserInfo } from "../../b2c/moving/components/Step6UserInfo";

interface TimeSelectionVariantBProps {
  onNavigate?: (screen: string) => void;
}

interface FormData {
  moveType: 'home' | 'small' | null;
  moveDate: Date | null;
  moveTime: { start: number; end: number } | null;
  departure: {
    address: string;
    detailAddress: string;
    floor: string;
    hasElevator: boolean | null;
    pyeong: string;
  };
  arrival: {
    address: string;
    detailAddress: string;
    floor: string;
    hasElevator: boolean | null;
    pyeong: string;
    familySize: string;
  };
  packingType: 'full' | 'half' | 'general' | null;
  userInfo: {
    name: string;
    phonePrefix: string;
    phoneNumber: string;
    memo: string;
    guaranteed: boolean;
  };
}

export default function TimeSelectionVariantB({ onNavigate }: TimeSelectionVariantBProps) {
  const [currentStep, setCurrentStep] = useState(2); // Start at Step 2 (Date Selection)
  const totalSteps = 6;

  const [formData, setFormData] = useState<FormData>({
    moveType: null,
    moveDate: null,
    moveTime: null,
    departure: {
      address: "",
      detailAddress: "",
      floor: "",
      hasElevator: null,
      pyeong: "",
    },
    arrival: {
      address: "",
      detailAddress: "",
      floor: "",
      hasElevator: null,
      pyeong: "",
      familySize: "",
    },
    packingType: null,
    userInfo: {
      name: "",
      phonePrefix: "010",
      phoneNumber: "",
      memo: "",
      guaranteed: true,
    },
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      onNavigate?.("var_a");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onNavigate?.("main");
    }
  };

  const handleClose = () => {
    onNavigate?.("main");
  };

  // Step 2 Logic
  const canProceedStep2 = !!formData.moveDate && !!formData.moveTime;

  const renderBottomButton = () => {
    if (currentStep === 2) {
      return (
        <div className="flex gap-1.5">
          <button
            onClick={handleBack}
            className="w-[107px] h-[50px] rounded border border-[#DADDE0] bg-white text-[var(--fg-neutral)] text-body-16 font-semibold flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            이전
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceedStep2}
            className={`flex-1 h-[50px] rounded text-body-16 font-semibold text-white flex items-center justify-center transition-colors
              ${canProceedStep2 ? 'bg-[var(--bg-brand)] hover:opacity-90' : 'bg-[var(--bg-disabled)] text-[var(--fg-disabled)] cursor-not-allowed'}
            `}
          >
            다음
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <InputFlowLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      title="이사 신청"
      onBack={currentStep > 1 ? handleBack : undefined}
      onClose={currentStep === 1 ? handleClose : undefined}
      bottomButton={renderBottomButton()}
    >
      {currentStep === 2 && (
        <Step2DateVariantB
          selectedDate={formData.moveDate}
          selectedTime={formData.moveTime}
          onSelectDate={(date) => setFormData(prev => ({ ...prev, moveDate: date }))}
          onSelectTime={(time) => setFormData(prev => ({ ...prev, moveTime: time }))}
        />
      )}
    </InputFlowLayout>
  );
}
