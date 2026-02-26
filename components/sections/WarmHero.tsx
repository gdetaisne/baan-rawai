'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

export function WarmHero() {
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked - fallback to poster
      });
    }
  }, []);

  const openFormPopup = () => {
    const event = new CustomEvent('openGuestForm');
    window.dispatchEvent(event);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        poster="/IMG_3154.jpeg"
      >
        <source src="/IMG_0646.MOV" type="video/mp4" />
      </video>

      {/* Fallback Image */}
      {!videoLoaded && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/IMG_3154.jpeg)' }}
        />
      )}

      {/* Minimal Overlay - Just for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Content - Minimal COMO Style */}
      <div className="relative h-full flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-32 md:pb-40">
        <div className="max-w-4xl animate-fade-in">
          {/* Subtle Label */}
          <div className="mb-12 inline-block">
            <span className="text-white/60 text-label">
              PRIVATE VILLA · RAWAI
            </span>
            <div className="h-px w-12 bg-white/30 mt-3" />
          </div>
          
          {/* Minimal Title */}
          <h1 className="text-display-xl text-white mb-8 leading-[1.05]">
            Baan Sayiuan
          </h1>
          
          {/* Simple Description */}
          <p className="text-body-lg text-white/90 mb-16 max-w-xl">
            {t('description')}
          </p>
          
          {/* Minimal CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
            <button 
              onClick={openFormPopup}
              className="btn-primary"
            >
              {t('ctaPrimary')}
            </button>
            
            <a
              href={siteConfig.whatsapp.primary.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 text-white/80 hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
            >
              <span className="border-b border-white/0 group-hover:border-white/60 transition-all duration-500 tracking-[0.1em] font-light">
                CONTACT US
              </span>
              <span className="text-sm transform group-hover:translate-x-1 transition-transform duration-500">→</span>
            </a>
          </div>

          {/* Discreet Contact Info */}
          <div className="mt-20 flex flex-wrap items-center gap-6 text-sm text-white/50 font-light">
            <span className="tracking-wide">Available 24/7</span>
            <span className="text-white/20">·</span>
            <a 
              href={siteConfig.whatsapp.primary.link}
              className="hover:text-white/80 transition-colors tracking-wide"
            >
              {siteConfig.whatsapp.primary.number}
            </a>
            <span className="text-white/20">·</span>
            <a 
              href={`https://wa.me/${siteConfig.whatsapp.secondary.number.replace(/\D/g, '')}`}
              className="hover:text-white/80 transition-colors tracking-wide"
            >
              {siteConfig.whatsapp.secondary.number}
            </a>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <button 
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-3 text-white/40 hover:text-white/70 transition-all duration-500 group"
        >
          <span className="text-label">DISCOVER</span>
          <div className="w-px h-12 bg-white/20 group-hover:bg-white/40 transition-all duration-500" />
        </button>
      </div>
    </section>
  );
}
