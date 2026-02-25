'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Lock } from 'lucide-react';
import { InfoCard } from '@/components/InfoCard';
import { Button } from '@/components/ui/Button';
import { CopyField } from '@/components/ui/CopyField';
import { PrivateModeGate } from '@/components/PrivateModeGate';
import { usePrivateMode } from '@/hooks/usePrivateMode';
import { siteConfig } from '@/config/site';

export function BeforeArrival() {
  const t = useTranslations('beforeArrival');
  const tPrivate = useTranslations('privateMode');
  const { isUnlocked, secrets } = usePrivateMode();
  const [showPrivateGate, setShowPrivateGate] = useState(false);

  return (
    <section id="before-arrival" className="py-20 px-6 md:px-12">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-light text-[#1F2A28] tracking-tight mb-3">
          {t('title')}
        </h2>
        <div className="h-px w-12 bg-[#D6C2B0] mx-auto" />
      </div>

      {/* Private mode button */}
      {siteConfig.privateAccessEnabled && (
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowPrivateGate(true)}
            className="flex items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase border border-[#E8E1D8] text-[#7A8A8F] hover:text-[#1F2A28] hover:border-[#1F2A28] transition-colors"
          >
            <Lock className="w-3 h-3" />
            {tPrivate('button')}
            {isUnlocked && <span className="w-2 h-2 rounded-full bg-green-500" />}
          </button>
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Taxi */}
        <InfoCard>
          <h3 className="text-xl font-display font-light text-[#1F2A28] mb-3 tracking-wide">
            {t('taxi.title')}
          </h3>
          <p className="text-[#7A8A8F] leading-relaxed">{t('taxi.description')}</p>
        </InfoCard>

        {/* Door code */}
        <InfoCard variant={isUnlocked ? 'accent' : 'default'}>
          <h3 className="text-xl font-display font-light text-[#1F2A28] mb-4 tracking-wide">
            {t('doorCode.title')}
          </h3>
          {isUnlocked && secrets ? (
            <div className="inline-block px-8 py-4 border border-[#1F2A28] bg-white">
              <span className="text-3xl font-display font-light tracking-widest text-[#1F2A28]">
                {secrets.doorCode}
              </span>
            </div>
          ) : (
            <p className="text-[#7A8A8F] italic">{tPrivate('locked.doorCode')}</p>
          )}
        </InfoCard>

        {/* WiFi */}
        <InfoCard variant={isUnlocked ? 'accent' : 'default'}>
          <h3 className="text-xl font-display font-light text-[#1F2A28] mb-4 tracking-wide">
            {t('wifi.title')}
          </h3>
          <div className="space-y-3">
            <CopyField
              label={t('wifi.network')}
              value={siteConfig.wifi.network}
              copyLabel={t('wifi.copy')}
              copiedLabel={t('wifi.copied')}
            />
            {isUnlocked && secrets ? (
              <CopyField
                label={t('wifi.password')}
                value={secrets.wifiPassword}
                copyLabel={t('wifi.copy')}
                copiedLabel={t('wifi.copied')}
              />
            ) : (
              <div className="border border-[#E8E1D8] bg-white p-4">
                <div className="text-xs text-[#7A8A8F] mb-1 tracking-widest uppercase">
                  {t('wifi.password')}
                </div>
                <p className="text-[#7A8A8F] italic text-sm">{tPrivate('locked.wifiPassword')}</p>
              </div>
            )}
          </div>
        </InfoCard>

        {/* ATM Warning */}
        <InfoCard variant="accent">
          <h3 className="text-xl font-display font-light text-[#1F2A28] mb-3 tracking-wide">
            {t('atm.title')}
          </h3>
          <p className="text-[#1F2A28]/80 leading-relaxed">{t('atm.description')}</p>
        </InfoCard>

        {/* eSIM */}
        <InfoCard>
          <h3 className="text-xl font-display font-light text-[#1F2A28] mb-3 tracking-wide">
            {t('esim.title')}
          </h3>
          <p className="text-[#7A8A8F] leading-relaxed mb-6">{t('esim.description')}</p>
          <Button variant="ghost" size="sm" href={siteConfig.links.esim}>
            {t('esim.cta')}
          </Button>
        </InfoCard>
      </div>

      {/* Private mode modal */}
      <PrivateModeGate isOpen={showPrivateGate} onClose={() => setShowPrivateGate(false)} />
    </section>
  );
}
