'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function WarmHeader() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    localStorage.setItem('preferredLocale', newLocale);
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
  };

  const scrollToForm = () => {
    document.getElementById('guest-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-sm border-b border-[#DDE8EA]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-12 py-5 grid grid-cols-3 items-center">
        {/* Left — language toggle */}
        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className={`text-[10px] tracking-[0.22em] uppercase transition-colors duration-500 ${
              scrolled ? 'text-[#7A766E] hover:text-[#1A1916]' : 'text-white/60 hover:text-white'
            }`}
            style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }}
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </button>
        </div>

        {/* Center — logo */}
        <div className="flex justify-center">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ fontFamily: 'Gloock, serif' }}
            className={`text-lg md:text-xl font-normal tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-[#1A1916]' : 'text-white'
            }`}
          >
            Baan Sayiuan
          </a>
        </div>

        {/* Right — CTA with border */}
        <div className="flex justify-end">
          <button
            onClick={scrollToForm}
            className={`hidden md:inline-flex items-center text-[10px] tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-500 ${
              scrolled
                ? 'border-[#1A1916]/25 text-[#1A1916] hover:bg-[#1A1916] hover:text-white'
                : 'border-white/50 text-white hover:border-white hover:bg-white/10'
            }`}
            style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }}
          >
            {t('ctaPrimary')}
          </button>
        </div>
      </div>
    </header>
  );
}
