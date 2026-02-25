'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const heroImages = [
  '/IMG_3154.jpeg',
  '/IMG_1458.jpeg',
  '/IMG_7234.jpeg',
  '/IMG_3365.jpeg',
];

export function WarmHero() {
  const t = useTranslations('hero');
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Baan Sayiuan"
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Gradient Overlay - softer for warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-4xl animate-fade-in">
          {/* Warm welcome */}
          <p className="text-white/90 text-lg md:text-xl mb-4 font-light italic">
            Welcome to our home
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 leading-[1.1]">
            Baan Sayiuan
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/95 mb-12 font-light max-w-2xl">
            Your private sanctuary in Rawai, where the ocean meets the mountains
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
            <button 
              onClick={scrollToForm}
              className="btn-light text-center"
            >
              Let us prepare your stay
            </button>
            
            <div className="flex gap-3">
              <a
                href={siteConfig.whatsapp.primary.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none btn-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              
              <a
                href={siteConfig.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none btn-secondary flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                <span className="hidden sm:inline">Directions</span>
              </a>
            </div>
          </div>

          {/* Contacts - more personal */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span>Questions? We're here:</span>
            <div className="flex items-center gap-1">
              <span className="font-medium text-white">Lucie</span>
              <span>·</span>
              <span>{siteConfig.whatsapp.primary.number}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-white">Guillaume</span>
              <span>·</span>
              <span>{siteConfig.whatsapp.secondary.number}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-6 md:left-12 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-6 md:right-12 animate-bounce-soft">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-wider">Discover</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
