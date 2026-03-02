'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function WarmHero() {
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-[#1A1916]">
      {/* Video / poster */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        poster="/IMG_3154.jpeg"
      >
        <source src="/IMG_0646.MOV" type="video/mp4" />
      </video>

      {!videoLoaded && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/IMG_3154.jpeg)' }} />
      )}

      {/* Overlay — très subtil, juste assez pour le texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      {/* Texte — bas gauche, comme Aguas de Ibiza */}
      <div className="relative h-full flex flex-col justify-end px-8 md:px-14 lg:px-20 pb-16 md:pb-20 animate-fade-in">
        {/* Grand titre */}
        <h1
          className="text-white mb-6 max-w-3xl"
          style={{
            fontFamily: 'Gloock, serif',
            fontWeight: 400,
            fontSize: 'clamp(48px, 7vw, 96px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {t('title') || 'Our home\nis yours.'}
        </h1>

        {/* Sous-titre discret */}
        <p
          className="text-white/60 text-sm md:text-base"
          style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, letterSpacing: '0.01em' }}
        >
          {t('subtitle') || 'A private villa in Rawai, Phuket'}&nbsp; ↓
        </p>
      </div>
    </section>
  );
}
