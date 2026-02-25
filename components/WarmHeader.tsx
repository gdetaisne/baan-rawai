'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Send } from 'lucide-react';

export function WarmHeader() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    localStorage.setItem('preferredLocale', newLocale);
    router.push(newPath);
  };

  const scrollToForm = () => {
    document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center justify-between">
        {/* Logo/Name */}
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-display text-xl md:text-2xl font-semibold transition-colors ${
            scrolled ? 'text-ink' : 'text-white'
          }`}
        >
          Baan Sayiuan
        </a>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className={`text-xs tracking-widest uppercase font-semibold transition-colors ${
              scrolled 
                ? 'text-muted hover:text-ink' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Desktop CTA */}
          <button
            onClick={scrollToForm}
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
              scrolled
                ? 'bg-turquoise text-white hover:bg-turquoise/90 shadow-lg shadow-turquoise/30'
                : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>{t('ctaPrimary')}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
