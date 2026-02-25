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
      <div className="relative w-full md:max-w-md bg-cream-50 border-t md:border border-stone-200 p-8 md:m-4 animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-ink transition-colors"
          aria-label={t('close')}
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-display font-light text-ink mb-8 tracking-wide">{t('title')}</h3>

        <div className="space-y-4">
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
