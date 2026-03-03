'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Footprints, Wind } from 'lucide-react';

const rules = [
  { key: 'shoesOff', icon: Footprints },
  { key: 'ac',       icon: Wind       },
];

export function LuxuryAtHome() {
  const t = useTranslations('atHome');

  return (
    <section id="at-home" className="border-t border-border bg-background">
      <div className="flex flex-col md:flex-row min-h-[360px]">

        {/* ── GAUCHE : règles + tip ── */}
        <div className="flex-1 px-8 md:px-14 py-10 md:py-14 flex flex-col justify-center">

          <p
            className="uppercase tracking-[0.24em] text-accent mb-8"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
          >
            HOUSE NOTES
          </p>

          <h2
            className="font-handwritten text-ink mb-10"
            style={{ fontSize: 'clamp(64px, 9vw, 130px)', lineHeight: 1.0, fontWeight: 400 }}
          >
            {t('title')}
          </h2>

          {/* 2 règles */}
          <div className="divide-y divide-border mb-8">
            {rules.map(({ key, icon: Icon }) => (
              <div key={key} className="flex items-start gap-4 py-5">
                <div className="flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center mt-0.5">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </div>
                <p
                  className="text-ink/80 leading-[1.7] pt-1"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px' }}
                >
                  {t(key)}
                </p>
              </div>
            ))}
          </div>

          {/* Tip serviettes — encadré */}
          <div className="border border-border px-5 py-4 flex items-start gap-4">
            <p
              className="uppercase tracking-[0.2em] text-accent whitespace-nowrap mt-0.5"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '9px' }}
            >
              TIP
            </p>
            <p
              className="text-muted leading-[1.7]"
              style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px' }}
            >
              {t('towels')}
            </p>
          </div>

        </div>

        {/* ── DROITE : photo ── */}
        <div className="md:w-[42%] flex-shrink-0 flex items-center justify-center p-8 md:p-10 bg-paper">
          <div className="relative w-full h-[280px] md:h-[420px]">
            <Image
              src="/IMG_9878.jpeg"
              alt="À la maison — Baan Sayiuan"
              fill
              className="object-cover object-center"
              sizes="42vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
