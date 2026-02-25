'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Send } from 'lucide-react';

export function LuxuryHeader() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const scrollToForm = () => {
    document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F4EE]/95 backdrop-blur-luxury shadow-sm border-b border-hairline'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
        {/* Wordmark */}
        <h1 className="font-display text-2xl md:text-3xl tracking-tight text-ink">
          {siteConfig.name}
        </h1>

        {/* Right side actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="text-label text-muted hover:text-ink transition-colors"
            aria-label="Toggle language"
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Desktop CTA */}
          <button
            onClick={scrollToForm}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm tracking-wide hover:bg-accent/90 transition-colors rounded-luxury"
          >
            <Send className="w-4 h-4" />
            <span>{t('ctaPrimary')}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
