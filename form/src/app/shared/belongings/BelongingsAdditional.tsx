import { BelongingsContent, BelongingsOptionCard, BelongingsScreen, BelongingsTitle } from "./BelongingsParts";

interface BelongingsAdditionalProps {
  hasManualItems: boolean;
  hasMedia: boolean;
  onAddManual: () => void;
  onAddPhoto: () => void;
}

export function BelongingsAdditional({
  hasManualItems,
  hasMedia,
  onAddManual,
  onAddPhoto,
}: BelongingsAdditionalProps) {
  return (
    <BelongingsScreen>
      <BelongingsTitle
        title="짐 정보 입력 완료!"
        subtitle={
          <>
            입력한 정보를 바탕으로 기본 견적을 알려드릴게요.
            <br />
            더 정확한 견적을 받으려면 짐 정보도 입력하세요.
          </>
        }
      />

      <BelongingsContent className="flex flex-col gap-[8px]">
        {!hasManualItems && (
          <BelongingsOptionCard
            icon="list"
            title="항목 직접 입력"
            description="이삿짐 목록을 직접 선택해요"
            onClick={onAddManual}
          />
        )}
        {!hasMedia && (
          <BelongingsOptionCard
            icon="camera"
            title="사진·영상 촬영"
            description={
              <>
                방 사진<span className="font-bold">·</span>영상으로 빠르게 전달해요
              </>
            }
            onClick={onAddPhoto}
          />
        )}
      </BelongingsContent>
    </BelongingsScreen>
  );
}
