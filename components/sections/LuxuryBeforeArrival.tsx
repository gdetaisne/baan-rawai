'use client';

import { useTranslations } from 'next-intl';
import { Plane, Wifi, AlertCircle, Smartphone, Key } from 'lucide-react';
import { CopyField } from '@/components/ui/CopyField';
import { PrivateModeGate } from '@/components/PrivateModeGate';
import { siteConfig } from '@/config/site';

export function LuxuryBeforeArrival() {
  const t = useTranslations('beforeArrival');

  return (
    <section id="before-arrival" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#D4846C] text-sm tracking-widest uppercase mb-4">
            Essentials
          </p>
          <h2 className="text-display-md font-display text-[#1A1A1A] mb-6">
            {t('title')}
          </h2>
          <p className="text-[#737373] text-lg max-w-2xl mx-auto">
            Everything you need to know before you land
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Taxi */}
          <div className="bg-[#FFFBF5] border border-[#E8DCC4] p-8 rounded-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-white rounded-sm">
                <Plane className="w-6 h-6 text-[#0A4D68]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl text-[#1A1A1A] mb-3">{t('taxi.title')}</h3>
                <p className="text-[#737373] leading-relaxed">{t('taxi.description')}</p>
              </div>
            </div>
          </div>

          {/* WiFi */}
          <div className="bg-[#FFFBF5] border border-[#E8DCC4] p-8 rounded-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-sm">
                <Wifi className="w-6 h-6 text-[#0A4D68]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl text-[#1A1A1A] mb-3">{t('wifi.title')}</h3>
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
          </div>

          {/* Door code */}
          <div className="bg-[#FFFBF5] border border-[#E8DCC4] p-8 rounded-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white rounded-sm">
                <Key className="w-6 h-6 text-[#0A4D68]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl text-[#1A1A1A] mb-3">{t('doorCode.title')}</h3>
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
          </div>

          {/* eSIM */}
          <div className="bg-[#FFFBF5] border border-[#E8DCC4] p-8 rounded-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-white rounded-sm">
                <Smartphone className="w-6 h-6 text-[#0A4D68]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl text-[#1A1A1A] mb-3">{t('esim.title')}</h3>
                <p className="text-[#737373] leading-relaxed mb-6">{t('esim.description')}</p>
                <a
                  href={siteConfig.links.esim}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#0A4D68] text-white hover:bg-[#0A4D68]/90 transition-colors rounded-sm text-sm"
                >
                  {t('esim.cta')} →
                </a>
              </div>
            </div>
          </div>

          {/* ATM warning - full width */}
          <div className="md:col-span-2 bg-[#FFF5F0] border border-[#D4846C]/30 p-8 rounded-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-sm">
                <AlertCircle className="w-6 h-6 text-[#D4846C]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl text-[#1A1A1A] mb-3">{t('atm.title')}</h3>
                <p className="text-[#1A1A1A] leading-relaxed">{t('atm.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
