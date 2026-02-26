'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-6 flex items-center justify-between">
        {/* Minimal Wordmark */}
        <h1 className={`font-light text-xl tracking-[0.1em] transition-colors duration-500 ${
          scrolled ? 'text-ink' : 'text-white'
        }`}>
          {siteConfig.name.toUpperCase()}
        </h1>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-8 md:gap-10">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className={`text-label hover:opacity-60 transition-all duration-500 ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
            aria-label="Toggle language"
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Desktop text link */}
          <button
            onClick={scrollToForm}
            className={`hidden md:block text-label hover:opacity-60 transition-all duration-500 ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            INQUIRE
          </button>
        </nav>
      </div>
    </header>
  );
}
