import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/IMG_7221.jpeg"
          alt="Baan Sayiuan"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-green/20 via-ink-green/10 to-ink-green/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo/Site Name */}
        <h1 className="text-7xl md:text-9xl font-display font-light tracking-widest text-ink-green mb-8 uppercase">
          Baan Sayiuan
        </h1>
        
        <div className="w-32 h-px bg-ink-green/30 mx-auto mb-8" />
        
        <p className="text-xl md:text-2xl font-light tracking-wide text-ink-green/80 mb-16">
          {t('subtitle')}
        </p>

        {/* Scroll indicator */}
        <a
          href="#welcome"
          className="inline-flex flex-col items-center gap-2 text-ink-green/60 hover:text-ink-green transition-colors"
        >
          <span className="text-sm tracking-wider uppercase">{t('ctaPrimary')}</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
