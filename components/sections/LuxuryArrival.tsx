'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

export function LuxuryArrival() {
  const t = useTranslations('arrival');

  return (
    <section id="arrival" className="border-t border-border bg-background">
      <div className="flex flex-col md:flex-row min-h-[560px]">

        {/* ── GAUCHE : infos pratiques ── */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-14 md:py-20">

          {/* Label */}
          <p
            className="uppercase tracking-[0.24em] text-accent mb-8"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
          >
            AT THE HOUSE
          </p>

          {/* Titre script */}
          <h2
            className="font-handwritten text-ink mb-10"
            style={{ fontSize: 'clamp(64px, 9vw, 130px)', lineHeight: 1.0, fontWeight: 400 }}
          >
            {t('title')}
          </h2>

          {/* WiFi */}
          <div className="mb-6">
            <p
              className="uppercase tracking-[0.2em] text-muted mb-3"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
            >
              {t('wifi.title')}
            </p>
            <div className="space-y-2">
              <CopyField label={t('wifi.network')} value={siteConfig.wifi.network} />
              <CopyField label={t('wifi.password')} value={siteConfig.wifi.password} />
            </div>
          </div>

          {/* Code porte */}
          <div className="mb-8">
            <p
              className="uppercase tracking-[0.2em] text-muted mb-3"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
            >
              {t('doorCode.title')}
            </p>
            <CopyField label={t('doorCode.label')} value={siteConfig.doorCode} />
            {/* Instructions — encadré accent */}
            <div className="mt-3 border-l-2 border-accent/40 pl-4 py-1">
              <p
                className="text-accent/80 leading-[1.75]"
                style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '11px', letterSpacing: '0.06em' }}
              >
                {t('doorCode.description')}
              </p>
            </div>
          </div>

          {/* ATM — encart sombre */}
          <div className="bg-[#1A2E3D] px-6 py-6 mt-2">
            <p
              className="text-white/45 uppercase tracking-[0.22em] mb-4"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
            >
              {t('atm.title')}
            </p>
            <p
              className="text-white uppercase tracking-[0.18em] mb-4"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '12px' }}
            >
              {t('atm.highlight')}
            </p>
            <p
              className="text-white/65 leading-[1.75] mb-5"
              style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px' }}
            >
              {t('atm.description')}
            </p>
            {/* Farang Tip */}
            <div className="border-l-2 border-[#C96F4A] pl-4 py-1">
              <p
                className="text-[#C96F4A] uppercase tracking-[0.2em] mb-2"
                style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '9px' }}
              >
                ★ FARANG TIP
              </p>
              <p
                className="text-white/70 leading-[1.8]"
                style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px', fontStyle: 'italic' }}
              >
                {t('atm.farangTip')}
              </p>
            </div>
          </div>
        </div>

        {/* ── DROITE : photo cadrée ── */}
        <div className="md:w-[45%] flex-shrink-0 flex items-center justify-center p-8 md:p-10 bg-paper">
          <div className="relative w-full h-[320px] md:h-[480px]">
            <Image
              src="/IMG_1458.jpeg"
              alt="Baan Sayiuan — Rawai"
              fill
              className="object-cover object-center"
              sizes="45vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
