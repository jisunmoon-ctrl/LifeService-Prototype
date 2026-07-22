import React, { useCallback, useState } from "react";
import { InputFlowLayout } from "../../../shared/flow/InputFlowLayout";
import { FlowBottomActions } from "../../../shared/flow/FlowBottomActions";
import { Step1Type } from "./components/Step1Type";
import { Step2Date } from "./components/Step2Date";
import { Step3Departure } from "./components/Step3Departure";
import { Step4Arrival } from "./components/Step4Arrival";
import { Step5Belongings, type BelongingsNavState } from "./components/Step5Belongings";
import { Step6UserInfo } from "./components/Step6UserInfo";
import {
  defaultBelongingsData,
  type BelongingsData,
} from "../../../shared/belongings/belongingsTypes";

interface InputFlowScreenProps {
  onNavigate?: (screen: string) => void;
  initialStep?: number;
}

interface FormData {
  moveType: "home" | "small" | null;
  moveDate: Date | null;
  moveTime: string[];
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
  belongings: BelongingsData;
  userInfo: {
    name: string;
    phonePrefix: string;
    phoneNumber: string;
    memo: string;
    guaranteed: boolean;
  };
}

const defaultBelongingsNav: BelongingsNavState = {
  canProceed: true,
  nextLabel: "건너뛰기",
  onNext: () => {},
  onBack: () => false,
};

export default function InputFlowScreen({ onNavigate, initialStep = 1 }: InputFlowScreenProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const totalSteps = 6;
  const [belongingsNav, setBelongingsNav] = useState<BelongingsNavState>(defaultBelongingsNav);

  const [formData, setFormData] = useState<FormData>({
    moveType: null,
    moveDate: null,
    moveTime: [],
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
    belongings: defaultBelongingsData(),
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
      setCurrentStep((prev) => prev + 1);
    } else {
      onNavigate?.("var_a");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      onNavigate?.("input_step1");
    }
  };

  const handleFlowBack = () => {
    if (currentStep === 5 && belongingsNav.onBack()) {
      return;
    }
    handleBack();
  };

  const handleFlowNext = () => {
    if (currentStep === 5) {
      belongingsNav.onNext();
      return;
    }
    handleNext();
  };

  const handleClose = () => {
    onNavigate?.("input_step1");
  };

  const handleBelongingsNavChange = useCallback((nav: BelongingsNavState) => {
    setBelongingsNav(nav);
  }, []);

  // Step5Belongings 는 이 콜백들을 nav useEffect 의 의존성으로 쓴다.
  // 인라인 화살표로 넘기면 매 렌더마다 identity 가 바뀌어 nav 갱신 → 리렌더 → nav 갱신 루프가 된다.
  const handleBelongingsUpdate = useCallback((belongings: BelongingsData) => {
    setFormData((prev) => ({ ...prev, belongings }));
  }, []);

  const handleBelongingsComplete = useCallback(() => setCurrentStep(6), []);

  const getCanProceed = () => {
    switch (currentStep) {
      case 1:
        return !!formData.moveType;
      case 2:
        return !!formData.moveDate && formData.moveTime.length > 0;
      case 3:
        return (
          !!formData.departure.address &&
          !!formData.departure.floor &&
          formData.departure.hasElevator !== null &&
          !!formData.departure.pyeong
        );
      case 4:
        return (
          !!formData.arrival.address &&
          !!formData.arrival.floor &&
          formData.arrival.hasElevator !== null &&
          !!formData.arrival.pyeong &&
          !!formData.arrival.familySize
        );
      case 5:
        return belongingsNav.canProceed;
      case 6:
        return !!formData.userInfo.name && !!formData.userInfo.phoneNumber;
      default:
        return false;
    }
  };

  const bottomNextLabel = currentStep === 5 ? belongingsNav.nextLabel : undefined;

  return (
    <InputFlowLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      title="이사 신청"
      onBack={currentStep > 1 ? handleFlowBack : undefined}
      onClose={currentStep === 1 ? handleClose : undefined}
      onSkip={currentStep === 1 ? handleClose : undefined}
      bottomButton={
        <FlowBottomActions
          currentStep={currentStep}
          totalSteps={totalSteps}
          canProceed={getCanProceed()}
          onBack={handleFlowBack}
          onNext={handleFlowNext}
          nextLabel={bottomNextLabel}
        />
      }
    >
      {currentStep === 1 && (
        <Step1Type
          selectedType={formData.moveType}
          onSelect={(type) => setFormData((prev) => ({ ...prev, moveType: type }))}
        />
      )}

      {currentStep === 2 && (
        <Step2Date
          selectedDate={formData.moveDate}
          selectedTime={formData.moveTime}
          onSelectDate={(date) => setFormData((prev) => ({ ...prev, moveDate: date }))}
          onSelectTime={(time) => setFormData((prev) => ({ ...prev, moveTime: time }))}
        />
      )}

      {currentStep === 3 && (
        <Step3Departure
          data={formData.departure}
          onUpdate={(newData) => setFormData((prev) => ({ ...prev, departure: newData }))}
        />
      )}

      {currentStep === 4 && (
        <Step4Arrival
          data={formData.arrival}
          onUpdate={(newData) => setFormData((prev) => ({ ...prev, arrival: newData }))}
        />
      )}

      {currentStep === 5 && (
        <Step5Belongings
          data={formData.belongings}
          onUpdate={handleBelongingsUpdate}
          onNavChange={handleBelongingsNavChange}
          onComplete={handleBelongingsComplete}
        />
      )}

      {currentStep === 6 && (
        <Step6UserInfo
          data={formData.userInfo}
          onUpdate={(newData) => setFormData((prev) => ({ ...prev, userInfo: newData }))}
        />
      )}
    </InputFlowLayout>
  );
}
