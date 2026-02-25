'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle, MapPin } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export function LuxuryHero() {
  const t = useTranslations('hero');

  const scrollToForm = () => {
    document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
      {/* Hero image with subtle overlay */}
      <div className="absolute inset-0">
        <Image
          src="/IMG_3154.jpeg"
          alt="Baan Sayiuan villa pool"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1416]/60 via-[#0F1416]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20">
        {/* Translucent plaque */}
        <div className="inline-block max-w-2xl">
          <div className="bg-highlight/90 backdrop-blur-sm px-8 md:px-12 py-8 md:py-10 border border-ink/10 rounded-luxury">
            <h1 className="text-display-xl font-display text-ink mb-3 md:mb-4 tracking-tight">
              {t('title')}
            </h1>
            <p className="text-display-sm text-ink/80 mb-8 md:mb-10 font-light">
              {t('subtitle')}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-accent text-white font-medium tracking-wide hover:bg-accent/90 transition-colors rounded-luxury text-center"
              >
                {t('ctaPrimary')}
              </button>

              {/* Secondary actions */}
              <div className="flex gap-3">
                <a
                  href={siteConfig.whatsapp.primary.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-4 bg-white/90 hover:bg-white text-ink font-medium tracking-wide transition-colors rounded-luxury flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={siteConfig.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-4 bg-white/90 hover:bg-white text-ink font-medium tracking-wide transition-colors rounded-luxury flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t('directions')}</span>
                </a>
              </div>
            </div>

            {/* Contacts */}
            <div className="mt-6 flex items-center gap-6 text-sm text-ink/70">
              <div>
                <span className="font-medium">{t('lucie')}</span>
                <span className="mx-2">·</span>
                <span>{siteConfig.whatsapp.primary.number}</span>
              </div>
              <div>
                <span className="font-medium">{t('guillaume')}</span>
                <span className="mx-2">·</span>
                <span>{siteConfig.whatsapp.secondary.number}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
