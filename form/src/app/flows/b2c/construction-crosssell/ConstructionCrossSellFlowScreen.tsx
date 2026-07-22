import { useState } from "react";
import { InputFlowLayout } from "../../../shared/flow/InputFlowLayout";
import { FlowBottomActions } from "../../../shared/flow/FlowBottomActions";
import { MovingCleaningCrossSellSheet } from "./components/MovingCleaningCrossSellSheet";
import {
  CrossSellFlowLayout,
  CrossSellDualAction,
} from "./components/CrossSellFlowLayout";
import {
  CrossSellDateStep,
  CrossSellAddressStep,
  CrossSellTypeStep,
} from "./components/CrossSellFlowSteps";
import { ConstructionStep6Contact } from "../../legacy/construction/components/ConstructionSteps";
import { CrossSellConfirm, type CrossSellEditTarget } from "./components/CrossSellConfirm";
import { MatchingListScreen, type AppliedServices } from "./components/CrossSellResult";
import { createInitialCrossSellData, type CrossSellFormData } from "./components/crossSellTypes";
import type { ConstructionContact } from "../../legacy/construction/components/constructionTypes";

// 플로우: 시공 연락처 입력 → (신청완료) → 크로스셀 모달 → 출발지 → 이사타입 → 확인 → 매칭 리스트
export type CrossSellView =
  | "contact"
  | "crosssell"
  | "departure"
  | "type"
  | "confirm"
  | "list";

interface Props {
  onNavigate?: (screen: string) => void;
  initialView?: CrossSellView;
}

type Stage = "contact" | "funnel" | "confirm" | "edit" | "list";

const VIEW_TO_STEP: Record<string, number> = { departure: 1, type: 2 };
const STEP_TARGET: CrossSellEditTarget[] = ["departure", "type"]; // step 1,2
const FUNNEL_TOTAL = 2;
const EXIT = "construction_step1";

// 매칭 리스트는 이사 + 이사청소만 노출 (시공은 이전 단계에서 이미 신청 완료)
const CROSSSELL_SERVICES: AppliedServices = { construction: false, moving: true, cleaning: true };

// 시공 연락처 입력 화면 프리필 값 (스타팅 포인트, 편집 가능)
const INITIAL_CONTACT: ConstructionContact = {
  name: "홍길동",
  phonePrefix: "010",
  phoneNumber: "1012345678",
  callTime: "언제든 괜찮아요",
  memo: "",
};

function createPrototypeData(initialView: CrossSellView): CrossSellFormData {
  const data = createInitialCrossSellData();
  if (["type", "confirm", "list"].includes(initialView)) {
    data.moveType = "home";
    data.departure = {
      address: "서울 서초구 서초대로74길 4 삼성생명서초타워 25층",
      detailAddress: "서울 서초구 1503호",
      floor: "5층",
      hasElevator: true,
      pyeong: "20평대",
      duplex: true,
    };
    data.cleaningSameDay = false;
    const cleaning = new Date(data.moveDate!);
    cleaning.setDate(cleaning.getDate() + 1);
    data.cleaningDate = cleaning;
  }
  return data;
}

export default function ConstructionCrossSellFlowScreen({ onNavigate, initialView = "contact" }: Props) {
  const [stage, setStage] = useState<Stage>(() => {
    if (initialView === "contact") return "contact";
    if (initialView === "crosssell") return "contact";
    if (initialView === "confirm") return "confirm";
    if (initialView === "list") return "list";
    return "funnel";
  });
  const [step, setStep] = useState<number>(VIEW_TO_STEP[initialView] ?? 1);
  const [editTarget, setEditTarget] = useState<CrossSellEditTarget | null>(null);
  const [data, setData] = useState<CrossSellFormData>(() => createPrototypeData(initialView));

  const [contact, setContact] = useState<ConstructionContact>(INITIAL_CONTACT);
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(initialView === "crosssell");

  const update = (patch: Partial<CrossSellFormData>) => setData((prev) => ({ ...prev, ...patch }));

  const targetCanProceed = (target: CrossSellEditTarget): boolean => {
    switch (target) {
      case "date":
      case "cleaningDate":
        return !!data.moveDate && (data.cleaningSameDay || !!data.cleaningDate);
      // 주소 + 평수 필수 (층수/복층/엘리베이터는 옵셔널)
      case "departure":
        return !!data.departure.address && !!data.departure.pyeong;
      case "destination":
        return !!data.destination.address && !!data.destination.pyeong;
      case "type":
        return !!data.moveType;
    }
  };

  const renderStepContent = (target: CrossSellEditTarget) => {
    switch (target) {
      case "date":
      case "cleaningDate":
        return <CrossSellDateStep data={data} onUpdate={update} />;
      case "departure":
        return (
          <CrossSellAddressStep
            title="이사 출발지 정보를 알려주세요"
            data={data.departure}
            onUpdate={(departure) => update({ departure })}
          />
        );
      case "destination":
        return (
          <CrossSellAddressStep
            title="이사 도착지 정보를 알려주세요"
            data={data.destination}
            onUpdate={(destination) => update({ destination })}
            showSavedAddress={false}
          />
        );
      case "type":
        return <CrossSellTypeStep value={data.moveType} onSelect={(moveType) => update({ moveType })} />;
    }
  };

  const enterCrossSellModal = () => {
    setShowModal(false);
    setStep(1);
    setStage("funnel");
  };

  // ── 스타팅 포인트: 시공 연락처 입력 → (신청완료) → 크로스셀 모달 ──
  if (stage === "contact") {
    const contactValid = !!contact.name && !!contact.phoneNumber && agreed;
    return (
      <InputFlowLayout
        currentStep={6}
        totalSteps={6}
        title="시공 견적"
        onBack={() => onNavigate?.(EXIT)}
        overlay={
          <MovingCleaningCrossSellSheet
            isOpen={showModal}
            onDecline={() => setShowModal(false)}
            onAccept={enterCrossSellModal}
          />
        }
        bottomButton={
          <FlowBottomActions
            currentStep={6}
            totalSteps={6}
            canProceed={contactValid}
            onBack={() => onNavigate?.(EXIT)}
            onNext={() => setShowModal(true)}
            nextLabel="신청완료"
            backLabel="뒤로"
          />
        }
      >
        <ConstructionStep6Contact
          data={contact}
          agreed={agreed}
          onUpdate={setContact}
          onAgreeChange={setAgreed}
        />
      </InputFlowLayout>
    );
  }

  // ── 스테이지: 확인 (이대로 신청할까요?) ──
  if (stage === "confirm") {
    return (
      <CrossSellConfirm
        data={data}
        onEdit={(target) => {
          // 청소 희망일 수정 → 청소 같은날 해제 + 청소 캘린더 노출(앵커링은 스텝에서 처리)
          if (target === "cleaningDate") {
            update({ cleaningSameDay: false, cleaningDate: data.cleaningDate ?? data.moveDate });
          }
          setEditTarget(target);
          setStage("edit");
        }}
        onSubmit={() => setStage("list")}
        onBack={() => {
          setStep(FUNNEL_TOTAL);
          setStage("funnel");
        }}
      />
    );
  }

  // ── 스테이지: 개별 항목 수정 ──
  if (stage === "edit" && editTarget) {
    const backToConfirm = () => {
      setEditTarget(null);
      setStage("confirm");
    };
    return (
      <CrossSellFlowLayout
        leftIcon="close"
        onLeft={backToConfirm}
        bottom={
          <CrossSellDualAction
            nextLabel="수정 완료"
            onPrev={backToConfirm}
            onNext={backToConfirm}
            disabled={!targetCanProceed(editTarget)}
          />
        }
      >
        {renderStepContent(editTarget)}
      </CrossSellFlowLayout>
    );
  }

  // ── 스테이지: 매칭 리스트 (상담내역) ──
  if (stage === "list") {
    return <MatchingListScreen services={CROSSSELL_SERVICES} onBack={() => onNavigate?.(EXIT)} />;
  }

  // ── 스테이지: 이사+이사청소 통합 퍼널 (이사일 → 출발지 → 이사타입) ──
  const target = STEP_TARGET[step - 1];
  const handleNext = () => {
    if (step < FUNNEL_TOTAL) {
      if (step === 1 && !data.moveType) update({ moveType: "home" });
      setStep((s) => s + 1);
    }
    else setStage("confirm");
  };
  const backToModal = () => {
    setShowModal(true);
    setStage("contact");
  };
  const handlePrev = () => {
    if (step > 1) setStep((s) => s - 1);
    else backToModal();
  };

  return (
    <CrossSellFlowLayout
      leftIcon="close"
      onLeft={() => (step > 1 ? handlePrev() : backToModal())}
      progress={step / FUNNEL_TOTAL}
      bottom={
        <CrossSellDualAction
          nextLabel={step === FUNNEL_TOTAL ? "입력 완료" : "다음"}
          onPrev={handlePrev}
          onNext={handleNext}
          disabled={!targetCanProceed(target)}
        />
      }
    >
      {renderStepContent(target)}
    </CrossSellFlowLayout>
  );
}
