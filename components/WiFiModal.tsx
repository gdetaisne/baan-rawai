'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

export function WiFiModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations('wifiModal');
  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center animate-fade-in">
      <div className="absolute inset-0 bg-[#1A1916]/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full md:max-w-md bg-white border border-[#DDE8EA] p-8 md:m-4 animate-slide-up shadow-xl">
        <button onClick={onClose} className="absolute top-5 right-5 text-[#7A766E] hover:text-[#1A1916] transition-colors">
          <X className="w-5 h-5" />
        </button>
        <p className="text-label text-[#1E7A8C] tracking-[0.22em] mb-5">WiFi</p>
        <h3 className="text-display-sm text-[#1A1916] mb-8">{t('title')}</h3>
        <div className="space-y-3">
          <CopyField label={t('network')} value={siteConfig.wifi.network} />
          <CopyField label={t('password')} value={siteConfig.wifi.password} />
        </div>
      </div>
    </div>
  );
}
