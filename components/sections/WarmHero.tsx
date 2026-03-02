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
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#1F3D35]">
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

      {/* Overlay — cinematic, luxe et lisible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]" />

      {/* Texte principal */}
      <div className="relative h-full flex flex-col justify-end px-8 md:px-14 lg:px-20 pb-24 md:pb-28 animate-fade-in">
        <p className="text-[10px] md:text-[11px] text-white/65 uppercase tracking-[0.26em] mb-5"
           style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}>
          Rawai, Phuket · Since 2025
        </p>

        <h1
          className="text-white mb-6 max-w-3xl"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 400,
            fontSize: 'clamp(54px, 8.8vw, 112px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {t('title')}
        </h1>

        <p
          className="text-white/75 text-sm md:text-base max-w-lg"
          style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, letterSpacing: '0.02em' }}
        >
          {t('subtitle')}
        </p>
      </div>

      {/* Bottom utility bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/25 bg-black/25 backdrop-blur-sm">
        <div className="max-w-container mx-auto px-8 md:px-14 lg:px-20 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <button
            onClick={() => document.getElementById('before-arrival')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-left text-white/80 hover:text-white transition-colors"
          >
            <p className="text-[9px] uppercase tracking-[0.22em] mb-1" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}>Check-in</p>
            <p className="text-sm" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }}>Before you arrive</p>
          </button>

          <button
            onClick={() => document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-left text-white/80 hover:text-white transition-colors"
          >
            <p className="text-[9px] uppercase tracking-[0.22em] mb-1" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}>Questionnaire</p>
            <p className="text-sm" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }}>Prepare your stay</p>
          </button>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); document.getElementById('before-arrival')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="hidden md:block text-left text-white/80 hover:text-white transition-colors"
          >
            <p className="text-[9px] uppercase tracking-[0.22em] mb-1" style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}>Location</p>
            <p className="text-sm" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }}>Rawai, Phuket</p>
          </a>

          <button
            onClick={() => document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:flex justify-end text-white hover:text-[#C96F4A] transition-colors text-sm uppercase tracking-[0.18em]"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}
          >
            Check availability
          </button>
        </div>
      </div>
    </section>
  );
}
