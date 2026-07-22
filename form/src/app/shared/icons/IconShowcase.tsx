/**
 * 아이콘 라이브러리 쇼케이스
 * 
 * 모든 아이콘을 한눈에 확인하고 테스트할 수 있는 컴포넌트
 */

import { useState } from 'react';
import { Icon, ICON_NAMES, IconName } from './IconLibrary';
import { Check, Copy } from 'lucide-react';

interface IconGroup {
  title: string;
  icons: IconName[];
}

const iconGroups: IconGroup[] = [
  {
    title: 'Navigation',
    icons: ['chevron-left', 'chevron-right', 'chevron-up', 'chevron-down', 'arrow-left', 'arrow-right', 'close'],
  },
  {
    title: 'Status & Actions',
    icons: ['check', 'check-circle', 'plus', 'minus', 'search', 'refresh', 'upload', 'download', 'share', 'trash', 'edit', 'copy'],
  },
  {
    title: 'Content',
    icons: ['home', 'user', 'settings', 'help', 'info', 'alert', 'warning', 'error'],
  },
  {
    title: 'Commerce',
    icons: ['cart', 'heart', 'star', 'bookmark'],
  },
  {
    title: 'Communication',
    icons: ['phone', 'mail', 'message', 'notification'],
  },
  {
    title: 'Media',
    icons: ['image', 'camera', 'video', 'play', 'pause'],
  },
  {
    title: 'Moving Service',
    icons: ['truck', 'box', 'location', 'calendar', 'clock', 'package'],
  },
];

export function IconShowcase() {
  const [selectedIcon, setSelectedIcon] = useState<IconName>('check');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState('var(--fg-neutral)');
  const [strokeWidth, setStrokeWidth] = useState(2);

  const copyCode = (iconName: IconName) => {
    const code = `<Icon name="${iconName}" size={${iconSize}} color="${iconColor}" />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-background-dim)] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-heading-32 font-bold text-[var(--fg-neutral)] mb-2">
            아이콘 라이브러리
          </h1>
          <p className="text-body-16 text-[var(--fg-weak)]">
            오늘의집 디자인 시스템 기반 통합 아이콘 라이브러리 · 총 {ICON_NAMES.length}개 아이콘
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 아이콘 목록 */}
          <div className="lg:col-span-2 space-y-6">
            {iconGroups.map((group) => (
              <div key={group.title} className="bg-[var(--bg-neutral)] rounded-xl p-6 border border-[var(--border-neutral)]">
                <h2 className="text-heading-18 font-semibold text-[var(--fg-neutral)] mb-4">
                  {group.title}
                </h2>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                  {group.icons.map((iconName) => (
                    <button
                      key={iconName}
                      onClick={() => setSelectedIcon(iconName)}
                      className={`relative group flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                        selectedIcon === iconName
                          ? 'bg-[var(--bg-brand-weak)] border-2 border-[var(--border-brand)]'
                          : 'bg-[var(--bg-weak)] hover:bg-[var(--border-neutral)] border-2 border-transparent'
                      }`}
                    >
                      <Icon 
                        name={iconName} 
                        size={24} 
                        color={selectedIcon === iconName ? 'var(--fg-brand)' : 'var(--fg-neutral)'}
                      />
                      <span className="text-detail-10 text-[var(--fg-weak)] mt-2 text-center break-all">
                        {iconName}
                      </span>
                      
                      {/* Copy button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyCode(iconName);
                        }}
                        className="absolute top-1 right-1 p-1 bg-[var(--bg-neutral)] rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy code"
                      >
                        {copiedIcon === iconName ? (
                          <Check className="size-3 text-green-600" />
                        ) : (
                          <Copy className="size-3 text-[var(--fg-weak)]" />
                        )}
                      </button>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 컨트롤 패널 */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--bg-neutral)] rounded-xl p-6 border border-[var(--border-neutral)] sticky top-8">
              <h2 className="text-heading-18 font-semibold text-[var(--fg-neutral)] mb-4">
                Preview
              </h2>

              {/* 아이콘 프리뷰 */}
              <div className="flex items-center justify-center p-8 bg-[var(--bg-weak)] rounded-lg mb-6">
                <Icon 
                  name={selectedIcon} 
                  size={iconSize} 
                  color={iconColor}
                  strokeWidth={strokeWidth}
                />
              </div>

              {/* 컨트롤 */}
              <div className="space-y-4">
                {/* Icon Name */}
                <div>
                  <label className="text-body-14 font-medium text-[var(--fg-neutral)] mb-2 block">
                    Icon Name
                  </label>
                  <div className="text-body-14 text-[var(--fg-brand)] font-mono bg-[var(--bg-weak)] px-3 py-2 rounded">
                    {selectedIcon}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <label className="text-body-14 font-medium text-[var(--fg-neutral)] mb-2 block">
                    Size: {iconSize}px
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="64"
                    step="4"
                    value={iconSize}
                    onChange={(e) => setIconSize(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-detail-12 text-[var(--fg-weak)] mt-1">
                    <span>12px</span>
                    <span>64px</span>
                  </div>
                </div>

                {/* Stroke Width */}
                <div>
                  <label className="text-body-14 font-medium text-[var(--fg-neutral)] mb-2 block">
                    Stroke Width: {strokeWidth}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="0.5"
                    value={strokeWidth}
                    onChange={(e) => setStrokeWidth(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-detail-12 text-[var(--fg-weak)] mt-1">
                    <span>1</span>
                    <span>4</span>
                  </div>
                </div>

                {/* Color Presets */}
                <div>
                  <label className="text-body-14 font-medium text-[var(--fg-neutral)] mb-2 block">
                    Color
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Neutral', value: 'var(--fg-neutral)' },
                      { label: 'Weak', value: 'var(--fg-weak)' },
                      { label: 'Brand', value: 'var(--fg-brand)' },
                      { label: 'Critical', value: 'var(--fg-critical)' },
                      { label: 'Inverse', value: 'var(--fg-inverse)' },
                      { label: 'Attention', value: 'var(--fg-attention)' },
                    ].map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setIconColor(preset.value)}
                        className={`px-3 py-2 rounded text-detail-12 font-medium transition-all ${
                          iconColor === preset.value
                            ? 'bg-[var(--bg-brand)] text-[var(--fg-inverse)]'
                            : 'bg-[var(--bg-weak)] text-[var(--fg-neutral)] hover:bg-[var(--border-neutral)]'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="divider-horizontal my-4" />

                {/* Code Example */}
                <div>
                  <label className="text-body-14 font-medium text-[var(--fg-neutral)] mb-2 block">
                    Code
                  </label>
                  <div className="relative bg-[var(--bg-weak)] p-3 rounded font-mono text-detail-12 text-[var(--fg-neutral)] break-all">
                    <code>
                      {`<Icon\n  name="${selectedIcon}"\n  size={${iconSize}}\n  color="${iconColor}"\n  strokeWidth={${strokeWidth}}\n/>`}
                    </code>
                    <button
                      onClick={() => copyCode(selectedIcon)}
                      className="absolute top-2 right-2 p-1.5 bg-[var(--bg-neutral)] rounded hover:bg-[var(--border-neutral)] transition-colors"
                    >
                      {copiedIcon === selectedIcon ? (
                        <Check className="size-3.5 text-green-600" />
                      ) : (
                        <Copy className="size-3.5 text-[var(--fg-weak)]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
