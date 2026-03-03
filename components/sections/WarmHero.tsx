'use client';

import { useRef, useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export function WarmHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-ink">
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

      <div className="absolute inset-0 bg-black/25" />
      {/* Dégradé bas pour lisibilité */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* ── BOTTOM: titre + ligne + infos ── */}
      <div className="absolute bottom-0 left-0 right-0 pb-6 md:pb-8 animate-fade-in">
        {/* Bloc titre — pleine largeur */}
        <div className="px-5 md:px-10">
          {/* "Welcome to" en script */}
          <p
            className="font-handwritten text-white leading-none relative z-10"
            style={{
              fontSize: 'clamp(64px, 9vw, 130px)',
              fontWeight: 400,
              opacity: 0.80,
              marginBottom: '-0.12em',
            }}
          >
            Welcome to
          </p>
          {/* BAAN SAYIUAN — pleine largeur */}
          <p
            className="text-white uppercase leading-none whitespace-nowrap relative z-0"
            style={{
              fontFamily: '"Ade Display", serif',
              fontWeight: 400,
              fontSize: 'clamp(52px, 12.5vw, 200px)',
              letterSpacing: '-0.01em',
              opacity: 0.95,
              lineHeight: 0.9,
            }}
          >
            BAAN SAYIUAN
          </p>
        </div>

        {/* Ligne fine séparatrice */}
        <div className="h-px w-full bg-white/40 mt-4 mb-5 px-5 md:px-10" />

        {/* Infos: 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-white/20 px-5 md:px-10">
          {/* Adresse */}
          <a
            href="https://maps.google.com/?q=59/45+Soi+Sayiuan+13,+Rawai,+Mueang+Phuket+District,+Phuket+83130,+Thailand"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 md:pr-8 hover:opacity-100 transition-opacity duration-300 opacity-85"
          >
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '9px', letterSpacing: '0.24em' }}
                  className="text-white/55 uppercase">
              ADRESSE ↗
            </span>
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '12px', letterSpacing: '0.12em' }}
                  className="text-white group-hover:underline underline-offset-2">
              59/45 SOI SAYIUAN 13, RAWAI, PHUKET 83130
            </span>
          </a>

          {/* WhatsApp Lucie */}
          <a
            href={siteConfig.whatsapp.primary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 md:px-8 hover:opacity-100 transition-opacity duration-300 opacity-85"
          >
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '9px', letterSpacing: '0.24em' }}
                  className="text-white/55 uppercase">
              WHATSAPP · {siteConfig.whatsapp.primary.name.toUpperCase()}
            </span>
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '12px', letterSpacing: '0.12em' }}
                  className="text-white group-hover:underline underline-offset-2">
              {siteConfig.whatsapp.primary.number}
            </span>
          </a>

          {/* WhatsApp Guillaume */}
          <a
            href={siteConfig.whatsapp.secondary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 md:px-8 hover:opacity-100 transition-opacity duration-300 opacity-85"
          >
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '9px', letterSpacing: '0.24em' }}
                  className="text-white/55 uppercase">
              WHATSAPP · {siteConfig.whatsapp.secondary.name.toUpperCase()}
            </span>
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '12px', letterSpacing: '0.12em' }}
                  className="text-white group-hover:underline underline-offset-2">
              {siteConfig.whatsapp.secondary.number}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
