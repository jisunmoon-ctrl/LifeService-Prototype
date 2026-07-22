import InputFlowScreen from "../../b2c/moving/InputFlowScreen";

export default function InputFormScreenVarA({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  // This screen now implements the full input flow (Step 1 -> Step 2 -> ...)
  return <InputFlowScreen onNavigate={onNavigate} />;
}
