interface MemoBoxProps {
  content: string;
}

export function MemoBox({ content }: MemoBoxProps) {
  return (
    <div className="w-full bg-[#F7F9FA] rounded-[8px] px-[20px] py-[16px] min-h-[100px]">
      <p className="text-[14px] font-[400] leading-[22px] text-[#2F3438] whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
}
