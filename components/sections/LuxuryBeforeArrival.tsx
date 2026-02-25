'use client';

import { useTranslations } from 'next-intl';
import { Plane, Wifi, AlertCircle, Smartphone, Key } from 'lucide-react';
import { EditorialSection } from '@/components/EditorialSection';
import { EditorialCard } from '@/components/EditorialCard';
import { Button } from '@/components/ui/Button';
import { CopyField } from '@/components/ui/CopyField';
import { PrivateModeGate } from '@/components/PrivateModeGate';
import { siteConfig } from '@/config/site';

export function LuxuryBeforeArrival() {
  const t = useTranslations('beforeArrival');

  return (
    <EditorialSection label="ESSENTIALS" title={t('title')}>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Taxi */}
        <EditorialCard>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-highlight rounded-luxury">
              <Plane className="w-5 h-5 text-ink" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-ink mb-2">{t('taxi.title')}</h3>
            </div>
          </div>
          <p className="text-body text-muted leading-relaxed">{t('taxi.description')}</p>
        </EditorialCard>

        {/* WiFi */}
        <EditorialCard>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-highlight rounded-luxury">
              <Wifi className="w-5 h-5 text-ink" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-ink mb-2">{t('wifi.title')}</h3>
            </div>
          </div>
          <div className="space-y-3">
            <CopyField label={t('wifi.network')} value={siteConfig.wifi.network} />
            <PrivateModeGate>
              {({ doorCode, wifiPassword, isUnlocked }) => (
                <CopyField
                  label={t('wifi.password')}
                  value={isUnlocked ? wifiPassword : t('wifi.password')}
                  locked={!isUnlocked}
                />
              )}
            </PrivateModeGate>
          </div>
        </EditorialCard>

        {/* Door code */}
        <EditorialCard>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-highlight rounded-luxury">
              <Key className="w-5 h-5 text-ink" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-ink mb-2">{t('doorCode.title')}</h3>
            </div>
          </div>
          <PrivateModeGate>
            {({ doorCode, isUnlocked }) => (
              <CopyField
                label={t('doorCode.description')}
                value={isUnlocked ? doorCode : ''}
                locked={!isUnlocked}
              />
            )}
          </PrivateModeGate>
        </EditorialCard>

        {/* eSIM */}
        <EditorialCard>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-highlight rounded-luxury">
              <Smartphone className="w-5 h-5 text-ink" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-ink mb-2">{t('esim.title')}</h3>
            </div>
          </div>
          <p className="text-body text-muted leading-relaxed mb-4">{t('esim.description')}</p>
          <Button variant="ghost" size="sm" href={siteConfig.links.esim}>
            {t('esim.cta')} →
          </Button>
        </EditorialCard>

        {/* ATM warning - spans full width */}
        <EditorialCard className="md:col-span-2 bg-highlight border-accent/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-luxury">
              <AlertCircle className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl text-ink mb-3">{t('atm.title')}</h3>
              <p className="text-body text-ink leading-relaxed">{t('atm.description')}</p>
            </div>
          </div>
        </EditorialCard>
      </div>
    </EditorialSection>
  );
}
