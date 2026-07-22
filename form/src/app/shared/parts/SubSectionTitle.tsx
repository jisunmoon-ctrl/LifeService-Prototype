interface SubSectionTitleProps {
  children: React.ReactNode;
}

export function SubSectionTitle({ children }: SubSectionTitleProps) {
  return (
    <h3 className="text-[16px] font-[660] leading-[19px] text-[#2F3438] mb-[16px]">
      {children}
    </h3>
  );
}
