'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function WelcomeHome() {
  const t = useTranslations('welcome');

  return (
    <section className="relative overflow-hidden border-t border-border min-h-[340px] md:min-h-[400px] flex items-center justify-center">

      {/* Fond ocean */}
      <div className="absolute inset-0">
        <Image
          src="/IMG_2278.jpeg"
          alt="Ocean — Rawai, Phuket"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 py-10 md:py-14 max-w-3xl mx-auto">

        {/* Label */}
        <p
          className="text-white/45 uppercase tracking-[0.28em] mb-8"
          style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
        >
          {t('label')}
        </p>

        {/* Paragraphe */}
        <p
          className="text-white/80 leading-[1.9] mb-8"
          style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '14px', maxWidth: '480px' }}
        >
          {t('story1')}
        </p>

        {/* Ligne fine */}
        <div className="w-10 h-px bg-white/25 mb-7" />

        {/* Signature — très grande, style poème */}
        <p
          className="font-handwritten text-white leading-[0.9]"
          style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 400, opacity: 0.9 }}
        >
          {t('signature')}
        </p>

      </div>
    </section>
  );
}
