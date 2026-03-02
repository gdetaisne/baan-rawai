'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function WelcomeHome() {
  const t = useTranslations('welcome');

  return (
    <section className="bg-paper border-t border-border">
      {/* Photo left (60%), huge text right — Aguas de Ibiza split */}
      <div className="grid md:grid-cols-[3fr_2fr] min-h-[680px]">
        {/* Photo full-bleed */}
        <div className="relative h-72 md:h-auto img-zoom luxury-hover">
          <Image
            src="/IMG_9878.jpeg"
            alt="Baan Sayiuan"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        {/* Text column */}
        <div className="flex flex-col justify-center px-10 md:px-14 lg:px-16 py-20 md:py-28 fade-reveal">
          <p className="text-label text-accent mb-10">
            {t('label')}
          </p>

          <h2 className="text-display-lg text-ink mb-6">
            บ้านฉันคือบ้านคุณ
          </h2>

          <p className="text-2xl md:text-3xl text-muted mb-12 italic leading-snug"
             style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
            {t('title')}
          </p>

          <div className="w-10 h-px bg-border-dark mb-12" />

          <div className="space-y-5 text-body text-ink/80">
            <p>{t('story1')}</p>
            <p>{t('story2')}</p>
          </div>

          <p className="mt-12 text-xl text-ink/35 italic"
             style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
            {t('signature')}
          </p>
        </div>
      </div>
    </section>
  );
}
