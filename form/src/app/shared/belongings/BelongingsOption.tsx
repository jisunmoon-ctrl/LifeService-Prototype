import { BelongingsContent, BelongingsOptionCard, BelongingsScreen, BelongingsTitle } from "./BelongingsParts";

interface BelongingsOptionProps {
  onSelectPhoto: () => void;
  onSelectManual: () => void;
}

export function BelongingsOption({ onSelectPhoto, onSelectManual }: BelongingsOptionProps) {
  return (
    <BelongingsScreen>
      <BelongingsTitle
        title={
          <>
            정확한 견적을 위해
            <br />
            이삿짐 정보를 알려주세요
          </>
        }
        subtitle="원하는 방식을 선택해주세요"
      />
      <BelongingsContent className="flex flex-col gap-[8px]">
        <BelongingsOptionCard
          icon="camera"
          title="사진·영상 촬영"
          description={
            <>
              방 사진<span className="font-bold">·</span>영상으로 빠르게 전달해요
            </>
          }
          onClick={onSelectPhoto}
        />
        <BelongingsOptionCard
          icon="list"
          title="항목 직접 입력"
          description="이삿짐 목록을 직접 선택해요"
          onClick={onSelectManual}
        />
      </BelongingsContent>
    </BelongingsScreen>
  );
}
