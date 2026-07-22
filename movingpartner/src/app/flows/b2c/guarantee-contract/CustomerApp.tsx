import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { BoxButton, Text } from '@bucketplace/design-system';
import { IconStarFilled } from '@bucketplace/icons';
import { CUST_ACTIVE, createInitialTermsState } from '../../../data/custTerms';
import { useIsDesktop } from '../../../shared/hooks/useMediaQuery';
import {
  PrototypeOverlayProvider,
  ScreenShell,
  TopNavigation,
} from '../../../shared/prototype-ods';
import { TermsAgreementModal } from './components/TermsAgreementModal';

function formatEstimateSummary(): string {
  const total =
    CUST_ACTIVE.estimate.costA + CUST_ACTIVE.estimate.costB;
  const manwon = Math.round(total / 10000);
  return `${manwon.toLocaleString('ko-KR')}만원`;
}

/** 책임보장 견적 계약 flow 단계 — 메뉴 트리에서 진입 단계를 지정한다. */
export type CustomerStage = 'list' | 'terms' | 'contracted';

interface CustomerAppProps {
  stage?: CustomerStage;
}

export function CustomerApp({ stage = 'list' }: CustomerAppProps = {}): JSX.Element {
  // 색은 ODS semantic 토큰에서 가져온다 (partner.css 의 raw `var(--*)` 에 의존하지 않는다)
  const theme = useTheme();
  const isDesktop = useIsDesktop();
  const [termsOpen, setTermsOpen] = useState(stage === 'terms');
  const [terms, setTerms] = useState(createInitialTermsState);
  const [contracted, setContracted] = useState(stage === 'contracted');
  const [snack, setSnack] = useState<string | null>(null);

  const handleComplete = (): void => {
    if (!terms.every(Boolean)) return;
    setTermsOpen(false);
    setContracted(true);
    setSnack('계약이 확정됐어요! 문의 사항은 업체와 채팅으로 상담하세요.');
    window.setTimeout(() => setSnack(null), 4000);
  };

  const previewBody = (
    <div style={{ padding: '16px 16px 24px', display: 'grid', gap: 16 }}>
      <Text variant="body16L24" weight={700}>
        {CUST_ACTIVE.vendor}
      </Text>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <IconStarFilled
          size={16}
          weight="regular"
          renderMode="monochrome"
          style={{ color: theme.colors.foregroundWeak, flex: '0 0 auto' }}
        />
        <Text variant="body14L20" color="foregroundWeak">
          {CUST_ACTIVE.rating} ({CUST_ACTIVE.reviews})
        </Text>
      </div>
      <div
        style={{
          padding: 16,
          borderRadius: 8,
          border: `1px solid ${theme.colors.border}`,
          display: 'grid',
          gap: 8,
        }}
      >
        <Text variant="body14L20" color="foregroundWeak">
          확정 견적
        </Text>
        <Text variant="heading18">{formatEstimateSummary()}</Text>
        <Text variant="body14L20" color="foregroundWeak">
          {CUST_ACTIVE.chatMsg}
        </Text>
      </div>
      {!contracted ? (
        <BoxButton
          size="large"
          variant="brand-solid"
          fullWidth
          onClick={() => setTermsOpen(true)}
        >
          <BoxButton.Slot side="center">
            <BoxButton.Label>계약하기</BoxButton.Label>
          </BoxButton.Slot>
        </BoxButton>
      ) : (
        <Text variant="body14L20" color="foregroundWeak" align="center">
          계약 완료
        </Text>
      )}
    </div>
  );

  const termsModal = (
    <TermsAgreementModal
      open={termsOpen}
      onOpenChange={setTermsOpen}
      terms={terms}
      onTermsChange={setTerms}
      onComplete={handleComplete}
    />
  );

  const snackBar =
    snack != null ? (
      <div
        role="status"
        style={{
          position: 'fixed',
          left: '50%',
          bottom: 24,
          transform: 'translateX(-50%)',
          maxWidth: 'min(340px, calc(100vw - 32px))',
          padding: '12px 16px',
          borderRadius: 8,
          background: theme.colors.foreground,
          color: theme.colors.background,
          zIndex: 3000,
          pointerEvents: 'none',
        }}
      >
        <Text variant="body14L20" color="background">
          {snack}
        </Text>
      </div>
    ) : null;

  if (isDesktop) {
    return (
      <PrototypeOverlayProvider scope="viewport">
        <div
          style={{
            minHeight: '100dvh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 32,
            background: theme.colors.backgroundWeak,
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 480,
              background: theme.colors.background,
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}
          >
            <TopNavigation center="업체 매칭" />
            {previewBody}
          </div>
        </div>
        {termsModal}
        {snackBar}
      </PrototypeOverlayProvider>
    );
  }

  return (
    <>
      <ScreenShell
        topNavigation={<TopNavigation center="업체 매칭" />}
        overlay={termsModal}
      >
        {previewBody}
      </ScreenShell>
      {snackBar}
    </>
  );
}
