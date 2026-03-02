'use client';

import { useTranslations } from 'next-intl';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

export function LuxuryBeforeArrival() {
  const t = useTranslations('beforeArrival');

  return (
    <section id="before-arrival" className="bg-white">
      {/* Grand titre editorial — comme Aguas de Ibiza */}
      <div className="px-8 md:px-14 lg:px-20 pt-24 md:pt-36 pb-16 md:pb-24 border-b border-[#DDE8EA]">
        <p className="text-label text-[#1E7A8C] tracking-[0.25em] mb-10">ESSENTIALS</p>
        <h2 className="text-display-lg text-[#1A1916] max-w-3xl">
          {t('title')}
        </h2>
      </div>

      {/* Liste éditoriale — pas de cards, juste des dividers */}
      <div className="divide-y divide-[#DDE8EA]">

        {/* 01 — Taxi */}
        <div className="px-8 md:px-14 lg:px-20 py-12 md:py-16 grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 items-start">
          <span className="text-[#B8CED3] text-4xl md:text-5xl" style={{ fontFamily: 'Gloock, serif', fontWeight: 300 }}>01</span>
          <div>
            <h3 className="text-display-sm text-[#1A1916] mb-4">{t('taxi.title')}</h3>
            <p className="text-body text-[#7A766E] max-w-sm">{t('taxi.description')}</p>
          </div>
        </div>

        {/* 02 — WiFi */}
        <div className="px-8 md:px-14 lg:px-20 py-12 md:py-16 grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 items-start">
          <span className="text-[#B8CED3] text-4xl md:text-5xl" style={{ fontFamily: 'Gloock, serif', fontWeight: 300 }}>02</span>
          <div>
            <h3 className="text-display-sm text-[#1A1916] mb-4">{t('wifi.title')}</h3>
          </div>
          <div className="space-y-3">
            <CopyField label={t('wifi.network')} value={siteConfig.wifi.network} />
            <CopyField label={t('wifi.password')} value={siteConfig.wifi.password} />
          </div>
        </div>

        {/* 03 — Door code */}
        <div className="px-8 md:px-14 lg:px-20 py-12 md:py-16 grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 items-start">
          <span className="text-[#B8CED3] text-4xl md:text-5xl" style={{ fontFamily: 'Gloock, serif', fontWeight: 300 }}>03</span>
          <div>
            <h3 className="text-display-sm text-[#1A1916] mb-4">{t('doorCode.title')}</h3>
          </div>
          <div>
            <CopyField label={t('doorCode.description')} value={siteConfig.doorCode} />
          </div>
        </div>

        {/* 04 — eSIM */}
        <div className="px-8 md:px-14 lg:px-20 py-12 md:py-16 grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 items-start">
          <span className="text-[#B8CED3] text-4xl md:text-5xl" style={{ fontFamily: 'Gloock, serif', fontWeight: 300 }}>04</span>
          <div>
            <h3 className="text-display-sm text-[#1A1916] mb-4">{t('esim.title')}</h3>
            <p className="text-body text-[#7A766E] mb-6 max-w-sm">{t('esim.description')}</p>
            <a href={siteConfig.links.esim} target="_blank" rel="noopener noreferrer" className="btn-text-dark">
              {t('esim.cta')}
            </a>
          </div>
        </div>

        {/* ATM — note pleine largeur */}
        <div className="px-8 md:px-14 lg:px-20 py-10 bg-[#F5F5F3]">
          <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start">
            <p className="text-label text-[#1E7A8C] tracking-[0.2em] pt-1">NOTE</p>
            <div>
              <h3 className="text-display-sm text-[#1A1916] mb-3">{t('atm.title')}</h3>
              <p className="text-body text-[#5C5850] max-w-2xl">{t('atm.description')}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
