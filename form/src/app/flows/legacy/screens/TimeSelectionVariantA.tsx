import React from "react";
import InputFlowScreen from "../../b2c/moving/InputFlowScreen";

export default function TimeSelectionVariantA({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  // 시안A: 기존 버튼 그리드 방식
  return <InputFlowScreen onNavigate={onNavigate} initialStep={2} />;
}
