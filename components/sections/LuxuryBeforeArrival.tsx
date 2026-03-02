'use client';

import { useTranslations } from 'next-intl';
import { Plane, Wifi, Key, Smartphone, AlertCircle } from 'lucide-react';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

export function LuxuryBeforeArrival() {
  const t = useTranslations('beforeArrival');

  return (
    <section id="before-arrival" className="section-padding bg-paper border-t border-border">
      <div className="max-w-content mx-auto">
        <div className="section-header">
          <p className="text-label text-accent mb-8">ESSENTIALS</p>
          <h2 className="text-display-md text-ink mb-6">{t('title')}</h2>
          <p className="text-body-lg text-muted max-w-xl">
            Everything you need to know before you land
          </p>
        </div>

        <div className="space-y-0 border-y border-border">
          {/* Taxi */}
          <div className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-10 py-9 border-b border-border">
            <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center">
              <Plane className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-display-sm text-ink mb-3">{t('taxi.title')}</h3>
              <p className="text-body text-muted">{t('taxi.description')}</p>
            </div>
          </div>

          {/* WiFi */}
          <div className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-10 py-9 border-b border-border">
            <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center">
              <Wifi className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-display-sm text-ink mb-5">{t('wifi.title')}</h3>
              <div className="space-y-3">
                <CopyField label={t('wifi.network')} value={siteConfig.wifi.network} />
                <CopyField label={t('wifi.password')} value={siteConfig.wifi.password} />
              </div>
            </div>
          </div>

          {/* Door code */}
          <div className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-10 py-9 border-b border-border">
            <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center">
              <Key className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-display-sm text-ink mb-5">{t('doorCode.title')}</h3>
              <CopyField label={t('doorCode.description')} value={siteConfig.doorCode} />
            </div>
          </div>

          {/* eSIM */}
          <div className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-10 py-9">
            <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-display-sm text-ink mb-3">{t('esim.title')}</h3>
              <p className="text-body text-muted mb-6">{t('esim.description')}</p>
              <a href={siteConfig.links.esim} target="_blank" rel="noopener noreferrer"
                 className="btn-text-dark text-[10px]">
                {t('esim.cta')}
              </a>
            </div>
          </div>
        </div>

        {/* ATM note */}
        <div className="mt-8 p-7 md:p-9 bg-background border border-border">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-clay" />
            </div>
            <div>
              <h3 className="text-display-sm text-ink mb-2">{t('atm.title')}</h3>
              <p className="text-body text-muted">{t('atm.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
