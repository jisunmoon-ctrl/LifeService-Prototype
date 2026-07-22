import type { ReactNode } from "react";
import { usePreviewViewport } from "../../preview/PreviewViewportContext";
import { FormTitle } from "./DesktopFormParts";

interface FormStepTitleProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

/**
 * Figma Form/Title (7781:58122)
 * Heading20/Heading20_Semibold — 20px / 28px / Semibold / -0.3px / #141414
 * Container: px-16 py-20, inner gap-6
 */
export function FormStepTitle({ title, subtitle }: FormStepTitleProps) {
  const { isDesktopForm } = usePreviewViewport();

  if (isDesktopForm) {
    return <FormTitle title={title} subtitle={subtitle} />;
  }

  return (
    <div className="flex gap-[10px] items-start px-[16px] py-[20px]">
      <div className="flex-1 min-w-0 flex flex-col gap-[6px] text-[#141414] tracking-[-0.3px]">
        <h2 className="text-[20px] font-semibold leading-[28px]">{title}</h2>
        {subtitle && <p className="text-[15px] leading-[24px]">{subtitle}</p>}
      </div>
    </div>
  );
}
