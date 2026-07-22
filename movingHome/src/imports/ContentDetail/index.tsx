import { type ReactNode } from "react";
import {
  ArrowLeft,
  Heart,
  Image as ImageIcon,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Share2,
} from "lucide-react";
import { getContentById } from "../../app/data/contentData";

function EngagementStat({
  icon,
  count,
}: {
  icon: ReactNode;
  count: number;
}) {
  return (
    <div className="flex gap-[2px] items-center">
      {icon}
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[18px] text-[14px] text-[#2f3438] tracking-[-0.3px]">
        {count}
      </p>
    </div>
  );
}

function BodyText({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/);

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        const lines = paragraph.split("\n");
        const isSection = lines[0]?.startsWith("#");

        if (isSection) {
          return (
            <p
              key={`section-${index}`}
              className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] text-[17px] text-[#2f3438] tracking-[-0.3px] pt-[8px] pb-[4px]"
            >
              {lines[0].replace(/^#+\s*/, "")}
              {lines.length > 1 && (
                <span className="block font-['Pretendard:Regular',sans-serif] text-[16px] font-normal pt-[4px] whitespace-pre-wrap">
                  {lines.slice(1).join("\n")}
                </span>
              )}
            </p>
          );
        }

        return (
          <p
            key={`paragraph-${index}`}
            className="font-['Pretendard:Regular',sans-serif] leading-[24px] text-[16px] text-[#2f3438] tracking-[-0.3px] whitespace-pre-wrap pb-[20px]"
          >
            {paragraph}
          </p>
        );
      })}
    </>
  );
}

export default function ContentDetail({
  contentId,
  onBack,
}: {
  contentId: string;
  onBack: () => void;
}) {
  const content = getContentById(contentId);

  if (!content) {
    return (
      <div className="bg-white min-h-full flex flex-col">
        <div className="sticky top-0 z-30 bg-white">
          <div className="flex items-center h-[44px] px-[16px]">
            <button type="button" onClick={onBack} className="cursor-pointer" aria-label="뒤로가기">
              <ArrowLeft size={24} color="#141414" strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="p-[16px] text-[#828c94]">콘텐츠를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div
      className="bg-white relative min-h-full flex flex-col"
      style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}
    >
      <div className="sticky top-0 z-30 bg-white">
        <div className="flex items-center justify-between h-[44px] px-[16px] bg-white">
          <button type="button" onClick={onBack} className="cursor-pointer" aria-label="뒤로가기">
            <ArrowLeft size={24} color="#141414" strokeWidth={2} />
          </button>
          <button type="button" className="cursor-pointer" aria-label="더보기">
            <MoreHorizontal size={24} color="#141414" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="flex-1 pb-[88px]">
        <div className="px-[16px] pt-[8px] pb-[36px]">
          <h1 className="font-['Pretendard:SemiBold',sans-serif] leading-[28px] text-[20px] text-[#2f3438] tracking-[-0.3px] pb-[16px]">
            {content.title}
          </h1>

          <div className="flex gap-[8px] items-center pb-[16px]">
            <img
              alt={content.author}
              className="size-[40px] rounded-full object-cover shrink-0"
              src={content.avatar}
            />
            <div className="flex-1 min-w-0">
              <p className="font-['Pretendard:Bold',sans-serif] leading-[18px] text-[14px] text-[#2f3438] tracking-[-0.3px] truncate">
                {content.author}
              </p>
              <p className="font-['Pretendard:Medium',sans-serif] leading-[18px] text-[13px] text-[#828c94] tracking-[-0.3px] truncate">
                {content.bio}
              </p>
            </div>
            <button
              type="button"
              className="shrink-0 font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#0aa5ff] tracking-[-0.3px] cursor-pointer"
            >
              팔로우
            </button>
          </div>

          <div className="pb-[20px]">
            {content.blocks.map((block, index) =>
              block.type === "text" ? (
                <BodyText key={`${content.id}-block-${index}`} text={block.text} />
              ) : (
                <div key={`${content.id}-block-${index}`} className="pb-[16px]">
                  <img
                    alt=""
                    className="w-full h-auto rounded-[8px] block"
                    src={block.src}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ),
            )}
          </div>

          <div className="flex gap-[4px] items-center pb-[16px]">
            <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[13px] text-[#828c94] tracking-[-0.3px]">
              {content.publishedAt}
            </p>
            <span className="size-[2px] rounded-full bg-[#c2c8cc]" />
            <p className="font-['Pretendard:Regular',sans-serif] leading-[18px] text-[13px] text-[#828c94] tracking-[-0.3px]">
              조회수 {content.views}
            </p>
          </div>

          <div className="flex gap-[16px] items-center">
            <EngagementStat icon={<Heart size={24} color="#2f3438" strokeWidth={1.5} />} count={content.likes} />
            <EngagementStat
              icon={<MessageCircle size={24} color="#2f3438" strokeWidth={1.5} />}
              count={content.comments}
            />
            <EngagementStat icon={<Share2 size={24} color="#2f3438" strokeWidth={1.5} />} count={content.shares} />
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-[#eaedef] rounded-t-[16px] px-[16px] pt-[12px] pb-[20px]">
        <div className="flex gap-[12px] items-center">
          <ImageIcon size={24} color="#828c94" strokeWidth={1.5} />
          <div className="flex-1 bg-[#f5f5f5] rounded-[20px] px-[16px] py-[10px]">
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#c2c8cc] tracking-[-0.3px]">
              댓글을 입력해주세요.
            </p>
          </div>
          <Plus size={24} color="#828c94" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
