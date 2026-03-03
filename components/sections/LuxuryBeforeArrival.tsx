'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

const GRAB_URL = 'https://www.grab.com/download/';

export function LuxuryBeforeArrival() {
  const t = useTranslations('beforeArrival');

  const items = [
    {
      key: 'esim',
      cta: { label: t('esim.cta'), href: siteConfig.links.esim, internal: false },
    },
    {
      key: 'taxi',
      cta: { label: t('taxi.cta'), href: '#guest-form', internal: true },
    },
    {
      key: 'tdac',
      cta: { label: t('tdac.cta'), href: siteConfig.links.tdacForm, internal: false },
    },
    {
      key: 'grab',
      cta: { label: t('grab.cta'), href: GRAB_URL, internal: false },
    },
  ];

  return (
    <section id="before-arrival" className="border-t border-border bg-paper">
      <div className="flex flex-col md:flex-row min-h-[600px]">

        {/* ── GAUCHE : vidéo verticale cadrée de blanc ── */}
        <div className="md:w-1/2 flex-shrink-0 flex items-center justify-center p-8 md:p-10">
          <div className="relative w-full max-w-[320px] mx-auto" style={{ aspectRatio: '9/16' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/IMG_0936.MOV" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* ── DROITE : liste ── */}
        <div className="flex-1 px-8 md:px-14 py-12 md:py-16 flex flex-col justify-center">
          {/* Header */}
          <p
            className="uppercase tracking-[0.24em] text-accent mb-6"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
          >
            ESSENTIALS
          </p>
          <h2
            className="font-handwritten text-ink mb-10"
            style={{ fontSize: 'clamp(64px, 9vw, 130px)', lineHeight: 1.0, fontWeight: 400 }}
          >
            {t('title')}
          </h2>

          {/* Items */}
          <div className="divide-y divide-border">
            {items.map(({ key, cta }) => (
              <div key={key} className="py-4 group">
                <h3
                  className="text-ink mb-1"
                  style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: '16px', lineHeight: 1.2 }}
                >
                  {t(`${key}.title`)}
                </h3>
                <p
                  className="text-muted mb-2 leading-[1.65]"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '12px', maxWidth: '420px' }}
                >
                  {t(`${key}.description`)}
                </p>
                {cta && (
                  cta.internal ? (
                    <button
                      onClick={() => document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-accent hover:text-ink transition-colors duration-200 text-left"
                      style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase' }}
                    >
                      {cta.label} →
                    </button>
                  ) : (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-ink transition-colors duration-200"
                      style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase' }}
                    >
                      {cta.label} →
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cadre immigration pleine largeur ── */}
      <div className="bg-[#1A2E3D] px-8 md:px-14 py-10 md:py-14">
        <div className="max-w-content mx-auto">
          {/* Titre script */}
          <p
            className="font-handwritten text-white mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 90px)', fontWeight: 400, lineHeight: 1.0, opacity: 0.95 }}
          >
            {t('immigrationTip.label')}
          </p>
          {/* Ligne fine */}
          <div className="w-12 h-px bg-white/20 mb-6" />
          {/* Texte */}
          <p
            className="text-white/75 leading-[1.85] max-w-3xl"
            style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '14px' }}
          >
            {t('immigrationTip.description')}
          </p>
        </div>
      </div>

    </section>
  );
}
