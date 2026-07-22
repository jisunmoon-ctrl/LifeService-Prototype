import { keyframes, useTheme } from '@emotion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  BoxButton,
  Checkbox,
  Text,
} from '@bucketplace/design-system';
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconX,
} from '@bucketplace/icons';
import {
  CUST_TERM_ANCHORS,
  CUST_TERMS,
  CUST_TERMS_SECTIONS,
} from '../../../../data/custTerms';
import { useIsDesktop } from '../../../../shared/hooks/useMediaQuery';
import {
  ActionDock,
  PrototypeBottomSheet,
  PrototypeDialog,
  TopNavigation,
} from '../../../../shared/prototype-ods';

const termsScrollChevAnim = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(6px); }
  100% { transform: translateY(0); }
`;

interface TermsDetailOverlayProps {
  open: boolean;
  anchorId: string | null;
  onClose: () => void;
  onAgreeAll: () => void;
}

export function TermsDetailOverlay({
  open,
  anchorId,
  onClose,
  onAgreeAll,
}: TermsDetailOverlayProps): JSX.Element | null {
  // 색은 ODS semantic 토큰에서 가져온다 (partner.css 의 raw `var(--*)` 에 의존하지 않는다)
  const theme = useTheme();
  const isDesktop = useIsDesktop();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atBottom, setAtBottom] = useState(false);

  const checkScroll = useCallback(() => {
    const sc = scrollRef.current;
    if (!sc) return;
    const bottom = sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 24;
    setAtBottom(bottom);
  }, []);

  useEffect(() => {
    if (!open) {
      setAtBottom(false);
      return;
    }

    const sc = scrollRef.current;
    if (!sc) return;

    requestAnimationFrame(() => {
      if (anchorId) {
        const target = sc.querySelector(`#${anchorId}`);
        if (target instanceof HTMLElement) {
          sc.scrollTop = target.offsetTop - 16;
        } else {
          sc.scrollTop = 0;
        }
      } else {
        sc.scrollTop = 0;
      }
      checkScroll();
    });
  }, [open, anchorId, checkScroll]);

  const footer = (
    <ActionDock
      pattern="single"
      primaryAction={
        <BoxButton
          size="large"
          variant="brand-solid"
          fullWidth
          onClick={() => {
            if (atBottom) {
              onAgreeAll();
            } else {
              scrollRef.current?.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth',
              });
            }
          }}
        >
          <BoxButton.Slot side="center">
            {atBottom ? (
              <BoxButton.Label>모두 동의</BoxButton.Label>
            ) : (
              <BoxButton.Slot side="center">
                <BoxButton.Label>스크롤을 내려 확인</BoxButton.Label>
                <BoxButton.Icon>
                  <span
                    css={{
                      display: 'inline-flex',
                      animation: `${termsScrollChevAnim} 1.5s ease-in-out infinite`,
                    }}
                  >
                    <IconChevronDown size={14} weight="regular" renderMode="monochrome" />
                  </span>
                </BoxButton.Icon>
              </BoxButton.Slot>
            )}
          </BoxButton.Slot>
        </BoxButton>
      }
    />
  );

  const body = (
    <div
      ref={scrollRef}
      onScroll={checkScroll}
      style={{
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        padding: '0 16px 24px',
      }}
    >
      {CUST_TERMS_SECTIONS.map((section) => (
        <section key={section.id} style={{ marginBottom: 24 }}>
          <Text
            as="h3"
            id={section.id}
            variant="body16L24"
            weight={700}
            color="foreground"
            style={{ marginBottom: 8 }}
          >
            {section.title}
          </Text>
          {section.body.split('\n\n').map((paragraph) => (
            <Text
              key={paragraph.slice(0, 24)}
              variant="body14L20"
              color="foregroundWeak"
              style={{ marginBottom: 8 }}
            >
              {paragraph}
            </Text>
          ))}
        </section>
      ))}
    </div>
  );

  if (isDesktop) {
    return (
      <PrototypeDialog open={open} onOpenChange={(next) => !next && onClose()}>
        <PrototypeDialog.Portal>
          <PrototypeDialog.Overlay />
          <PrototypeDialog.Content style={{ maxWidth: 480, maxHeight: '85dvh' }}>
            <PrototypeDialog.Header>
              <TopNavigation
                left={
                  <TopNavigation.IconButton
                    icon={IconChevronLeft}
                    aria-label="뒤로"
                    onClick={onClose}
                  />
                }
                center="책임보장 이사 계약 동의"
              />
            </PrototypeDialog.Header>
            <PrototypeDialog.Body>
              <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, padding: 0 }}>
                {body}
              </div>
            </PrototypeDialog.Body>
            <PrototypeDialog.Footer>
              {footer}
            </PrototypeDialog.Footer>
          </PrototypeDialog.Content>
        </PrototypeDialog.Portal>
      </PrototypeDialog>
    );
  }

  if (!open) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10001,
        display: 'grid',
        gridTemplateRows: 'auto minmax(0, 1fr) auto',
        background: theme.colors.background,
        pointerEvents: 'auto',
      }}
    >
      <TopNavigation
        left={
          <TopNavigation.IconButton
            icon={IconChevronLeft}
            aria-label="뒤로"
            onClick={onClose}
          />
        }
        center="책임보장 이사 계약 동의"
      />
      {body}
      {footer}
    </div>
  );
}

interface TermsAgreementContentProps {
  terms: boolean[];
  allAgreed: boolean;
  onOpenDetail: (anchorId: string) => void;
}

function TermsAgreementContent({
  terms,
  allAgreed,
  onOpenDetail,
}: TermsAgreementContentProps): JSX.Element {
  const theme = useTheme();
  return (
    <div style={{ display: 'grid', gap: 16, padding: '8px 16px 0' }}>
      <Text variant="heading18" color="foreground">
        계약을 위해
        <br />
        아래 내용을 모두 확인해주세요.
      </Text>

      <button
        type="button"
        onClick={() => onOpenDetail(CUST_TERM_ANCHORS[0])}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          width: '100%',
          padding: '12px 14px',
          border: `1px solid ${theme.colors.border}`,
          borderRadius: 8,
          background: theme.colors.background,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            minWidth: 0,
            pointerEvents: 'none',
          }}
        >
          <Checkbox checked={allAgreed} aria-hidden tabIndex={-1}>
            <Checkbox.Indicator>
              <Checkbox.IndicatorIcon />
            </Checkbox.Indicator>
            <Checkbox.Label>
              <Text variant="body14L20" weight={600} color="foreground">
                전체 동의
              </Text>
            </Checkbox.Label>
          </Checkbox>
        </span>
        <IconChevronRight
          size={16}
          weight="regular"
          renderMode="monochrome"
          style={{ flexShrink: 0, color: theme.colors.foregroundWeak }}
        />
      </button>

      <div style={{ display: 'grid', gap: 4 }}>
        {CUST_TERMS.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => onOpenDetail(CUST_TERM_ANCHORS[index])}
            style={{
              appearance: 'none',
              border: 'none',
              background: 'transparent',
              padding: '10px 0',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <Text
              variant="body14L20"
              color={terms[index] ? 'foreground' : 'foregroundWeak'}
            >
              {label}
            </Text>
          </button>
        ))}
      </div>
    </div>
  );
}

interface TermsAgreementModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  terms: boolean[];
  onTermsChange: (terms: boolean[]) => void;
  onComplete: () => void;
}

export function TermsAgreementModal({
  open,
  onOpenChange,
  terms,
  onTermsChange,
  onComplete,
}: TermsAgreementModalProps): JSX.Element {
  const theme = useTheme();
  const isDesktop = useIsDesktop();
  const allAgreed = terms.every(Boolean);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailAnchor, setDetailAnchor] = useState<string | null>(null);

  const openDetail = (anchorId: string): void => {
    setDetailAnchor(anchorId);
    setDetailOpen(true);
  };

  const closeDetail = (): void => {
    setDetailOpen(false);
    setDetailAnchor(null);
  };

  const agreeAll = (): void => {
    onTermsChange(terms.map(() => true));
    closeDetail();
  };

  const footer = (
    <ActionDock
      pattern="single"
      primaryAction={
        <BoxButton
          size="large"
          variant="brand-solid"
          fullWidth
          disabled={!allAgreed}
          onClick={onComplete}
        >
          <BoxButton.Slot side="center">
            <BoxButton.Label>확인 완료</BoxButton.Label>
          </BoxButton.Slot>
        </BoxButton>
      }
    />
  );

  const content = (
    <TermsAgreementContent
      terms={terms}
      allAgreed={allAgreed}
      onOpenDetail={openDetail}
    />
  );

  const detail = (
    <TermsDetailOverlay
      open={detailOpen}
      anchorId={detailAnchor}
      onClose={closeDetail}
      onAgreeAll={agreeAll}
    />
  );

  if (isDesktop) {
    return (
      <>
        <PrototypeDialog open={open} onOpenChange={onOpenChange}>
          <PrototypeDialog.Portal>
            <PrototypeDialog.Overlay />
            <PrototypeDialog.Content style={{ maxWidth: 480 }}>
              <PrototypeDialog.Header>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '100%',
                    padding: '8px 8px 0',
                  }}
                >
                  <PrototypeDialog.Close asChild>
                    <button
                      type="button"
                      aria-label="닫기"
                      style={{
                        width: 40,
                        height: 40,
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.colors.foreground,
                      }}
                    >
                      <IconX size={24} weight="regular" renderMode="monochrome" />
                    </button>
                  </PrototypeDialog.Close>
                </div>
              </PrototypeDialog.Header>
              <PrototypeDialog.Body>
                <div>{content}</div>
              </PrototypeDialog.Body>
              <PrototypeDialog.Footer>{footer}</PrototypeDialog.Footer>
            </PrototypeDialog.Content>
          </PrototypeDialog.Portal>
        </PrototypeDialog>
        {detail}
      </>
    );
  }

  return (
    <>
      <PrototypeBottomSheet open={open} onOpenChange={onOpenChange}>
        <PrototypeBottomSheet.Portal>
          <PrototypeBottomSheet.Overlay />
          <PrototypeBottomSheet.Content>
            <PrototypeBottomSheet.Header>
              <PrototypeBottomSheet.Grabber />
            </PrototypeBottomSheet.Header>
            <PrototypeBottomSheet.Body>{content}</PrototypeBottomSheet.Body>
            <PrototypeBottomSheet.Footer>{footer}</PrototypeBottomSheet.Footer>
          </PrototypeBottomSheet.Content>
        </PrototypeBottomSheet.Portal>
      </PrototypeBottomSheet>
      {detail}
    </>
  );
}
