'use client';

import { useTranslations } from 'next-intl';
import { ChevronDown, Send, MessageCircle, MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { siteConfig } from '@/config/site';

export function WarmHero() {
  const t = useTranslations('hero');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay is blocked
      });
    }
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById('guest-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-deep">
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
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/hero-video.webm" type="video/webm" />
      </video>

      {/* Fallback Image */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: 'url(/IMG_3154.jpeg)' }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-16 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          {/* Thai subtitle */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-turquoise/90 text-white text-sm md:text-base font-medium tracking-wide rounded-full backdrop-blur-sm">
              บ้านเรา · {t('subtitle')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-display-lg text-white mb-6 text-balance max-w-4xl">
            {t('title')}
          </h1>

          {/* Description */}
          <p className="text-body-lg text-white/90 mb-10 max-w-2xl font-light">
            Your private sanctuary in Rawai. Where friends become family.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-delay">
            <button onClick={scrollToForm} className="btn-primary flex items-center gap-2">
              <Send className="w-5 h-5" />
              <span>{t('ctaPrimary')}</span>
            </button>
            <a 
              href={siteConfig.whatsapp.primary.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={siteConfig.maps.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Directions</span>
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-8 text-white/70 text-sm">
            <span className="font-medium text-white">{t('lucie')}</span> {siteConfig.whatsapp.primary.display}
            {' · '}
            <span className="font-medium text-white">{t('guillaume')}</span> {siteConfig.whatsapp.secondary.display}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-white/60 cursor-pointer group" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </div>
      </div>
    </section>
  );
}
