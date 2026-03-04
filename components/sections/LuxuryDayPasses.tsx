'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

export function LuxuryDayPasses() {
  const t = useTranslations('dayPasses');

  return (
    <section id="day-passes" className="border-t border-border bg-background">

      {/* ── Header ── */}
      <div className="px-8 md:px-14 pt-12 pb-10 max-w-content mx-auto">
        <p
          className="uppercase tracking-[0.24em] text-accent mb-3"
          style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
        >
          DAY PASSES
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-handwritten text-ink leading-none"
            style={{ fontSize: 'clamp(52px, 7vw, 100px)', fontWeight: 400 }}
          >
            {t('title')}
          </h2>
          <p
            className="text-muted max-w-sm leading-relaxed pb-1"
            style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '14px' }}
          >
            {t('intro')}
          </p>
        </div>
      </div>

      {/* ── Concept — ce que c'est ── */}
      <div className="border-t border-border">
        <div className="px-8 md:px-14 py-12 max-w-content mx-auto grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20">

          {/* Explication */}
          <div>
            <p
              className="uppercase tracking-[0.22em] text-ink/30 mb-6"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}
            >
              {t('whatIsItLabel')}
            </p>
            <p
              className="text-ink leading-[1.8] mb-6"
              style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '15px' }}
            >
              {t('whatIsIt')}
            </p>
            <p
              className="text-muted leading-[1.8]"
              style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px' }}
            >
              {t('whatIsItDetail')}
            </p>
          </div>

          {/* Ce qui est inclus — liste sobre */}
          <div>
            <p
              className="uppercase tracking-[0.22em] text-ink/30 mb-6"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}
            >
              {t('typicallyIncludesLabel')}
            </p>
            <div className="divide-y divide-border">
              {(['poolAccess', 'sunbedsAndTowels', 'foodCredit', 'facilities'] as const).map((key) => (
                <div key={key} className="flex items-baseline justify-between py-3.5">
                  <p
                    className="text-ink"
                    style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: '16px' }}
                  >
                    {t(`includes.${key}.label`)}
                  </p>
                  <p
                    className="text-muted text-right max-w-[180px]"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '11px' }}
                  >
                    {t(`includes.${key}.detail`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Farang Tip */}
        <div className="px-8 md:px-14 pb-12 max-w-content mx-auto">
          <div className="border-l-2 border-clay bg-[#FFF8EC] pl-5 pr-6 py-4">
            <p
              className="text-clay uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '9px' }}
            >
              ★ FARANG TIP
            </p>
            <p
              className="text-ink/75 leading-[1.8] italic"
              style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px' }}
            >
              {t('farangTip')}
            </p>
          </div>
        </div>
      </div>

      {/* ── Hôtels ── */}
      <div className="border-t border-border">
        <div className="px-8 md:px-14 py-10 max-w-content mx-auto">
          <p
            className="uppercase tracking-[0.22em] text-ink/30 mb-10"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}
          >
            {t('ourPicksLabel')}
          </p>

          <div className="divide-y divide-border">
            {siteConfig.dayPasses.map((h, i) => (
              <div key={i} className="group grid md:grid-cols-[48px_1fr_auto] gap-6 md:gap-14 py-10 items-start">

                {/* Numéro */}
                <p
                  className="text-ink/20 pt-1"
                  style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>

                {/* Contenu */}
                <div>
                  <h3
                    className="text-ink leading-tight mb-1"
                    style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: '26px' }}
                  >
                    {h.name}
                  </h3>
                  <p
                    className="text-accent mb-5"
                    style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.12em' }}
                  >
                    {h.tagline}
                  </p>
                  <p
                    className="text-muted leading-[1.75] mb-6 max-w-xl"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px' }}
                  >
                    {h.description}
                  </p>

                  {/* Tags inclus */}
                  <div className="flex flex-wrap gap-2">
                    {h.includes.map((inc, j) => (
                      <span
                        key={j}
                        className="border border-border text-muted px-3 py-1"
                        style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.1em' }}
                      >
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prix + CTA */}
                <div className="flex flex-col items-end gap-4 pt-1">
                  <p
                    className="text-ink/50 whitespace-nowrap"
                    style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.1em' }}
                  >
                    {h.price}
                  </p>
                  {h.link !== '#' ? (
                    <a
                      href={h.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-ink transition-colors uppercase tracking-[0.18em]"
                      style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}
                    >
                      {t('cta')} ↗
                    </a>
                  ) : (
                    <span
                      className="text-ink/25 uppercase tracking-[0.18em]"
                      style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}
                    >
                      {t('comingSoon')}
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
