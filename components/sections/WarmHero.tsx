'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, MapPin, ChevronDown, Sparkles } from 'lucide-react';
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

  const scrollToForm = () => {
    document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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

      {/* 2025 Gradient Overlay - Dynamic & Vibrant */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/30 via-transparent to-sunset/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-4xl animate-fade-in">
          {/* Thai Badge - 2025 Style */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/90 text-sm font-medium">บ้านของเรา · {t('subtitle')}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 leading-[0.95] tracking-tight">
            Baan Sayiuan
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 font-light max-w-2xl leading-relaxed">
            Your private oasis where{' '}
            <span className="text-gold font-medium">the Andaman Sea</span>{' '}
            meets{' '}
            <span className="text-gold font-medium">jungle serenity</span>
          </p>
          
          {/* CTAs - 2025 Glassmorphism */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
            <button 
              onClick={openFormPopup}
              className="group relative px-8 py-4 bg-gradient-to-r from-ocean to-palm text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-ocean/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                {t('ctaPrimary')}
              </span>
            </button>
            
            <div className="flex gap-3">
              <a
                href={siteConfig.whatsapp.primary.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              
              <a
                href={siteConfig.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                <span className="hidden sm:inline">Directions</span>
              </a>
            </div>
          </div>

          {/* Contacts - Modern Style */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="font-medium">Questions? We're here 24/7:</span>
            <a 
              href={siteConfig.whatsapp.primary.link}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              <span className="font-semibold text-white">Lucie</span>
              <span className="text-white/60">·</span>
              <span>{siteConfig.whatsapp.primary.number}</span>
            </a>
            <a 
              href={`https://wa.me/${siteConfig.whatsapp.secondary.number.replace(/\D/g, '')}`}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              <span className="font-semibold text-white">Guillaume</span>
              <span className="text-white/60">·</span>
              <span>{siteConfig.whatsapp.secondary.number}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Animated */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors group"
        >
          <span className="text-xs tracking-wider uppercase font-medium">Discover</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 group-hover:border-white/60 transition-colors">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </button>
      </div>
    </section>
  );
}
