import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/IMG_7221.jpeg"
          alt="Baan Sayiuan"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-light text-white tracking-wider mb-8 leading-none">
          Baan Sayiuan
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-white/40" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="h-px w-12 bg-white/40" />
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
          {t('subtitle')}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70">
        <span className="text-xs tracking-widest uppercase">{t('ctaPrimary')}</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
