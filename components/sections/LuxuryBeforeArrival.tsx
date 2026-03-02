'use client';

import { useTranslations } from 'next-intl';
import { Plane, Wifi, Key, Smartphone, AlertCircle } from 'lucide-react';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

export function LuxuryBeforeArrival() {
  const t = useTranslations('beforeArrival');

  return (
    <section id="before-arrival" className="section-padding bg-white border-t border-[#DDE8EA]">
      <div className="max-w-content mx-auto">
        <div className="section-header text-center">
          <p className="text-label text-[#1E7A8C] tracking-[0.25em] mb-8">ESSENTIALS</p>
          <h2 className="text-display-md text-[#1A1916] mb-6">{t('title')}</h2>
          <p className="text-body-lg text-[#7A766E] max-w-xl mx-auto">
            Everything you need to know before you land.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#DDE8EA]">
          {/* Taxi */}
          <div className="bg-white p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-10 h-10 border border-[#DDE8EA] flex items-center justify-center">
                <Plane className="w-4 h-4 text-[#1E7A8C]" />
              </div>
              <div>
                <h3 className="text-display-sm text-[#1A1916] mb-3">{t('taxi.title')}</h3>
                <p className="text-body text-[#7A766E]">{t('taxi.description')}</p>
              </div>
            </div>
          </div>

          {/* WiFi */}
          <div className="bg-white p-8 md:p-10">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-10 h-10 border border-[#DDE8EA] flex items-center justify-center">
                <Wifi className="w-4 h-4 text-[#1E7A8C]" />
              </div>
              <h3 className="text-display-sm text-[#1A1916]">{t('wifi.title')}</h3>
            </div>
            <div className="space-y-3">
              <CopyField label={t('wifi.network')} value={siteConfig.wifi.network} />
              <CopyField label={t('wifi.password')} value={siteConfig.wifi.password} />
            </div>
          </div>

          {/* Door code */}
          <div className="bg-white p-8 md:p-10">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-10 h-10 border border-[#DDE8EA] flex items-center justify-center">
                <Key className="w-4 h-4 text-[#1E7A8C]" />
              </div>
              <h3 className="text-display-sm text-[#1A1916]">{t('doorCode.title')}</h3>
            </div>
            <CopyField label={t('doorCode.description')} value={siteConfig.doorCode} />
            <p className="mt-4 text-sm text-[#7A766E] leading-relaxed">
              Touch screen with palm → type <span className="font-medium text-[#1A1916]">5734</span> → touch screen with palm
              <span className="block mt-1 text-xs text-[#1E7A8C]">(you must hear Lock Open)</span>
            </p>
          </div>

          {/* eSIM */}
          <div className="bg-white p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-10 h-10 border border-[#DDE8EA] flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-[#1E7A8C]" />
              </div>
              <div>
                <h3 className="text-display-sm text-[#1A1916] mb-3">{t('esim.title')}</h3>
                <p className="text-body text-[#7A766E] mb-6">{t('esim.description')}</p>
                <a href={siteConfig.links.esim} target="_blank" rel="noopener noreferrer"
                   className="btn-text-dark text-[10px]">
                  {t('esim.cta')}
                </a>
              </div>
            </div>
          </div>

          {/* ATM — full width */}
          <div className="md:col-span-2 bg-[#F9F9F7] border-t-2 border-[#1E7A8C]/20 p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-10 h-10 border border-[#1E7A8C]/20 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-[#1E7A8C]" />
              </div>
              <div>
                <h3 className="text-display-sm text-[#1A1916] mb-3">{t('atm.title')}</h3>
                <p className="text-body text-[#5C5850]">{t('atm.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
