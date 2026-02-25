import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean-500 via-ocean-400 to-sky">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/IMG_7221.jpeg"
          alt="Baan Sayiuan"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-600/60 via-ocean-500/40 to-transparent" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sunset-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-sand-400/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32">
        {/* Small label */}
        <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-fun tracking-wider">
          Rawai, Phuket 🏝️
        </div>
        
        {/* Main Title - Mixed typography */}
        <div className="mb-8 space-y-2">
          <h1 className="text-7xl md:text-9xl font-display font-bold text-white tracking-tight leading-none">
            Baan
          </h1>
          <h1 className="text-6xl md:text-8xl font-fun font-light text-sand-300 tracking-widest italic">
            SAYIUAN
          </h1>
        </div>
        
        <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-8 rounded-full" />
        
        <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
          {locale === 'fr' ? 'Notre maison, c\'est la vôtre' : 'Our home is your home'}
        </p>

        {/* Scroll indicator */}
        <a
          href="#welcome"
          className="inline-flex flex-col items-center gap-3 text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm tracking-widest uppercase font-fun">{t('ctaPrimary')}</span>
          <div className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-white transition-all group-hover:scale-110">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </a>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-sand-50">
          <path d="M0,0 C150,60 350,60 600,30 C850,0 1050,0 1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
