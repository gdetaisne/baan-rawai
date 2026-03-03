'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';
import { AlertCircle } from 'lucide-react';

export function LuxuryArrival() {
  const t = useTranslations('arrival');

  return (
    <EditorialSection label="AT THE HOUSE" title={t('title')} background="ivory">
      <div className="max-w-3xl space-y-0 border-y border-border">

        {/* WiFi */}
        <div className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-10 py-8 border-b border-border">
          <p className="text-accent text-muted/70 pt-2">01</p>
          <div>
            <h3 className="text-display-sm text-ink mb-4">{t('wifi.title')}</h3>
            <div className="space-y-2">
              <CopyField label={t('wifi.network')} value={siteConfig.wifi.network} />
              <CopyField label={t('wifi.password')} value={siteConfig.wifi.password} />
            </div>
          </div>
        </div>

        {/* Code porte */}
        <div className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-10 py-8 border-b border-border">
          <p className="text-accent text-muted/70 pt-2">02</p>
          <div>
            <h3 className="text-display-sm text-ink mb-4">{t('doorCode.title')}</h3>
            <CopyField label={t('doorCode.description')} value={siteConfig.doorCode} />
          </div>
        </div>

        {/* ATM */}
        <div className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-10 py-8">
          <p className="text-accent text-muted/70 pt-2">03</p>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-clay mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-display-sm text-ink mb-2">{t('atm.title')}</h3>
              <p className="text-body text-muted">{t('atm.description')}</p>
            </div>
          </div>
        </div>

      </div>
    </EditorialSection>
  );
}
