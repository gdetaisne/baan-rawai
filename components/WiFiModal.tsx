'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CopyField } from '@/components/ui/CopyField';
import { PrivateModeGate } from '@/components/PrivateModeGate';
import { siteConfig } from '@/config/site';

interface WiFiModalProps {
  onClose: () => void;
}

export function WiFiModal({ onClose }: WiFiModalProps) {
  const t = useTranslations('wifiModal');

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0F1416]/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full md:max-w-md bg-paper border-t md:border border-hairline p-8 md:m-4 md:rounded-luxury animate-slide-up shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted hover:text-ink transition-colors"
          aria-label={t('close')}
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display text-display-sm text-ink mb-8 tracking-tight">{t('title')}</h3>

        <div className="space-y-4">
          <CopyField label={t('network')} value={siteConfig.wifi.network} />
          
          <PrivateModeGate>
            {({ wifiPassword, isUnlocked }) => (
              <CopyField
                label={t('password')}
                value={isUnlocked ? wifiPassword : ''}
                locked={!isUnlocked}
              />
            )}
          </PrivateModeGate>
        </div>
      </div>
    </div>
  );
}
