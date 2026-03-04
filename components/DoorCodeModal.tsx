'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

export function DoorCodeModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations('arrival');
  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center animate-fade-in">
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full md:max-w-md bg-background border border-border p-8 md:m-4 animate-slide-up shadow-xl">
        <button onClick={onClose} className="absolute top-5 right-5 text-muted hover:text-ink transition-colors duration-500">
          <X className="w-5 h-5" />
        </button>
        <p className="text-label text-accent mb-5">{t('doorCode.title')}</p>
        <div className="space-y-4">
          <CopyField label={t('doorCode.label')} value={siteConfig.doorCode} />
          <p
            className="text-accent/80 leading-[1.75] border-l-2 border-accent/40 pl-4 py-1"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '11px', letterSpacing: '0.06em' }}
          >
            {t('doorCode.description')}
          </p>
        </div>
      </div>
    </div>
  );
}
