import type { OrderStatus } from './types';
import { STEP_STATUS_LABEL } from './constants';

export type StepStatusBadgeVariant =
  | 'primary2'
  | 'primary3'
  | 'weak-primary2'
  | 'weak-base2';

export interface StepStatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

const VARIANT_BY_STATUS: Record<OrderStatus, StepStatusBadgeVariant> = {
  0: 'primary2',
  2: 'primary3',
  4: 'weak-primary2',
  1: 'weak-base2',
  3: 'weak-base2',
};

/** 오더 카드에서는 미사용 — 캐시 내역 등 타 지면용 */
export function StepStatusBadge({ status, className }: StepStatusBadgeProps) {
  const variant = VARIANT_BY_STATUS[status];
  const label = STEP_STATUS_LABEL[status] ?? '';

  return (
    <span className={['badge', `badge--${variant}`, className].filter(Boolean).join(' ')}>
      {label}
    </span>
  );
}

export function getStepStatusVariant(status: OrderStatus): StepStatusBadgeVariant {
  return VARIANT_BY_STATUS[status];
}

export function getStepStatusLabel(status: OrderStatus): string {
  return STEP_STATUS_LABEL[status] ?? '';
}
