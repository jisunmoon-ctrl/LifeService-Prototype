/**
 * 오늘의집 아이콘 라이브러리
 * 
 * 기반: https://fe.co-workerhou.se/catalog/?path=/docs/documentation-1-icons--docs
 * 
 * 사용법:
 * import { Icon } from '@/components/icons/IconLibrary';
 * <Icon name="check" size={24} color="var(--fg-neutral)" />
 */

import React from 'react';

export type IconName =
  // Navigation
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'close'
  
  // Status & Actions
  | 'check'
  | 'check-circle'
  | 'plus'
  | 'minus'
  | 'search'
  | 'refresh'
  | 'upload'
  | 'download'
  | 'share'
  | 'trash'
  | 'edit'
  | 'copy'
  
  // Content
  | 'home'
  | 'user'
  | 'settings'
  | 'help'
  | 'info'
  | 'alert'
  | 'warning'
  | 'error'
  
  // Commerce
  | 'cart'
  | 'heart'
  | 'star'
  | 'bookmark'
  
  // Communication
  | 'phone'
  | 'mail'
  | 'message'
  | 'notification'
  
  // Media
  | 'image'
  | 'camera'
  | 'video'
  | 'play'
  | 'pause'
  
  // Moving Service Specific
  | 'truck'
  | 'box'
  | 'location'
  | 'calendar'
  | 'clock'
  | 'package';

export interface IconProps {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
  strokeWidth?: number;
  onClick?: () => void;
}

// SVG Path 정의
const iconPaths: Record<IconName, { viewBox: string; paths: string[] }> = {
  // Navigation Icons
  'chevron-left': {
    viewBox: '0 0 24 24',
    paths: ['M15 18l-6-6 6-6'],
  },
  'chevron-right': {
    viewBox: '0 0 24 24',
    paths: ['M9 18l6-6-6-6'],
  },
  'chevron-up': {
    viewBox: '0 0 24 24',
    paths: ['M18 15l-6-6-6 6'],
  },
  'chevron-down': {
    viewBox: '0 0 24 24',
    paths: ['M6 9l6 6 6-6'],
  },
  'arrow-left': {
    viewBox: '0 0 24 24',
    paths: ['M19 12H5', 'M12 19l-7-7 7-7'],
  },
  'arrow-right': {
    viewBox: '0 0 24 24',
    paths: ['M5 12h14', 'M12 5l7 7-7 7'],
  },
  'close': {
    viewBox: '0 0 24 24',
    paths: ['M18 6L6 18', 'M6 6l12 12'],
  },

  // Status & Actions
  'check': {
    viewBox: '0 0 24 24',
    paths: ['M20 6L9 17l-5-5'],
  },
  'check-circle': {
    viewBox: '0 0 24 24',
    paths: ['M22 11.08V12a10 10 0 1 1-5.93-9.14', 'M22 4L12 14.01l-3-3'],
  },
  'plus': {
    viewBox: '0 0 24 24',
    paths: ['M12 5v14', 'M5 12h14'],
  },
  'minus': {
    viewBox: '0 0 24 24',
    paths: ['M5 12h14'],
  },
  'search': {
    viewBox: '0 0 24 24',
    paths: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M21 21l-4.35-4.35'],
  },
  'refresh': {
    viewBox: '0 0 24 24',
    paths: [
      'M1 4v6h6',
      'M23 20v-6h-6',
      'M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15',
    ],
  },
  'upload': {
    viewBox: '0 0 24 24',
    paths: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M17 8l-5-5-5 5', 'M12 3v12'],
  },
  'download': {
    viewBox: '0 0 24 24',
    paths: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  },
  'share': {
    viewBox: '0 0 24 24',
    paths: [
      'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8',
      'M16 6l-4-4-4 4',
      'M12 2v13',
    ],
  },
  'trash': {
    viewBox: '0 0 24 24',
    paths: ['M3 6h18', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'],
  },
  'edit': {
    viewBox: '0 0 24 24',
    paths: [
      'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
      'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
    ],
  },
  'copy': {
    viewBox: '0 0 24 24',
    paths: [
      'M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z',
      'M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2',
    ],
  },

  // Content
  'home': {
    viewBox: '0 0 24 24',
    paths: ['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10'],
  },
  'user': {
    viewBox: '0 0 24 24',
    paths: ['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'],
  },
  'settings': {
    viewBox: '0 0 24 24',
    paths: [
      'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
      'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
    ],
  },
  'help': {
    viewBox: '0 0 24 24',
    paths: [
      'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
      'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3',
      'M12 17h.01',
    ],
  },
  'info': {
    viewBox: '0 0 24 24',
    paths: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 16v-4', 'M12 8h.01'],
  },
  'alert': {
    viewBox: '0 0 24 24',
    paths: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 8v4', 'M12 16h.01'],
  },
  'warning': {
    viewBox: '0 0 24 24',
    paths: [
      'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
      'M12 9v4',
      'M12 17h.01',
    ],
  },
  'error': {
    viewBox: '0 0 24 24',
    paths: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M15 9l-6 6', 'M9 9l6 6'],
  },

  // Commerce
  'cart': {
    viewBox: '0 0 24 24',
    paths: ['M9 2L7 6', 'M17 6l-2-4', 'M21 6H3', 'M19 6l-2 14H7L5 6', 'M10 11v6', 'M14 11v6'],
  },
  'heart': {
    viewBox: '0 0 24 24',
    paths: [
      'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    ],
  },
  'star': {
    viewBox: '0 0 24 24',
    paths: [
      'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    ],
  },
  'bookmark': {
    viewBox: '0 0 24 24',
    paths: ['M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'],
  },

  // Communication
  'phone': {
    viewBox: '0 0 24 24',
    paths: [
      'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
    ],
  },
  'mail': {
    viewBox: '0 0 24 24',
    paths: [
      'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      'M22 6l-10 7L2 6',
    ],
  },
  'message': {
    viewBox: '0 0 24 24',
    paths: ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
  },
  'notification': {
    viewBox: '0 0 24 24',
    paths: [
      'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9',
      'M13.73 21a2 2 0 0 1-3.46 0',
    ],
  },

  // Media
  'image': {
    viewBox: '0 0 24 24',
    paths: [
      'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z',
      'M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
      'M21 15l-5-5L5 21',
    ],
  },
  'camera': {
    viewBox: '0 0 24 24',
    paths: [
      'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z',
      'M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    ],
  },
  'video': {
    viewBox: '0 0 24 24',
    paths: [
      'M23 7l-7 5 7 5V7z',
      'M15 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z',
    ],
  },
  'play': {
    viewBox: '0 0 24 24',
    paths: ['M5 3l14 9-14 9V3z'],
  },
  'pause': {
    viewBox: '0 0 24 24',
    paths: ['M6 4h4v16H6z', 'M14 4h4v16h-4z'],
  },

  // Moving Service Specific
  'truck': {
    viewBox: '0 0 24 24',
    paths: [
      'M1 3h15v13H1z',
      'M16 8h3l3 3v5h-6V8z',
      'M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
      'M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
    ],
  },
  'box': {
    viewBox: '0 0 24 24',
    paths: [
      'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
      'M3.27 6.96L12 12.01l8.73-5.05',
      'M12 22.08V12',
    ],
  },
  'location': {
    viewBox: '0 0 24 24',
    paths: [
      'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z',
      'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    ],
  },
  'calendar': {
    viewBox: '0 0 24 24',
    paths: [
      'M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z',
      'M16 2v4',
      'M8 2v4',
      'M3 10h18',
    ],
  },
  'clock': {
    viewBox: '0 0 24 24',
    paths: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 6v6l4 2'],
  },
  'package': {
    viewBox: '0 0 24 24',
    paths: [
      'M16.5 9.4l-9-5.19',
      'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
      'M3.27 6.96L12 12.01l8.73-5.05',
      'M12 22.08V12',
    ],
  },
};

/**
 * Icon 컴포넌트
 * 
 * @example
 * <Icon name="check" size={24} color="var(--fg-neutral)" />
 */
export function Icon({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  strokeWidth = 2,
  onClick,
}: IconProps) {
  const iconData = iconPaths[name];

  if (!iconData) {
    console.warn(`Icon "${name}" not found in icon library`);
    return null;
  }

  const { viewBox, paths } = iconData;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : undefined}
    >
      {paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
}

/**
 * 아이콘 이름 목록 (타입 힌트 및 자동완성용)
 */
export const ICON_NAMES: IconName[] = Object.keys(iconPaths) as IconName[];
