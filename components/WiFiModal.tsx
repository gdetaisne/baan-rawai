'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

interface WiFiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WiFiModal({ isOpen, onClose }: WiFiModalProps) {
  const t = useTranslations('wifiModal');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink-green/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full md:max-w-md bg-white border-t md:border border-ocean-100 md:rounded-3xl p-8 md:m-4 animate-slide-up shadow-hard">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-dark/50 hover:text-dark transition-colors"
          aria-label={t('close')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-block bg-ocean-50 p-3 rounded-2xl mb-4">
          <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        </div>

        <h3 className="text-3xl font-display text-dark mb-6">{t('title')}</h3>

        <div className="space-y-3">
          <CopyField
            label={t('network')}
            value={siteConfig.wifi.name}
            copyLabel={t('copy')}
            copiedLabel={t('copied')}
          />
          <CopyField
            label={t('password')}
            value={siteConfig.wifi.password}
            copyLabel={t('copy')}
            copiedLabel={t('copied')}
          />
        </div>
      </div>
    </div>
  );
}
