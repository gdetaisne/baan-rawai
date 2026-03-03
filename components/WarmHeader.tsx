'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function WarmHeader() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Left — language toggle */}
        <button
          onClick={toggleLanguage}
          className={`text-[10px] tracking-[0.22em] uppercase transition-colors duration-500 w-10 ${
            scrolled ? 'text-muted hover:text-ink' : 'text-white/65 hover:text-white'
          }`}
          style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}
        >
          {locale === 'en' ? 'FR' : 'EN'}
        </button>

        {/* Centre — logo + nav */}
        <div className="flex flex-col items-center gap-3">
          <span
            className={`uppercase transition-colors duration-500 ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
            style={{
              fontFamily: '"Ade Display", serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 2vw, 22px)',
              letterSpacing: '0.06em',
            }}
          >
            BAAN SAYIUAN
          </span>
          <nav className="hidden md:flex items-center gap-x-6">
            {[
              { label: 'BEFORE ARRIVAL', id: 'before-arrival' },
              { label: 'OUR RAWAI',      id: 'our-rawai'      },
              { label: 'AT HOME',        id: 'at-home'        },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-muted hover:text-ink' : 'text-white/60 hover:text-white'
                }`}
                style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right — CTA */}
        <button
          onClick={scrollToForm}
          className={`hidden md:inline-flex items-center text-[10px] tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-500 ${
            scrolled
              ? 'border-ink/30 text-ink hover:bg-ink hover:text-background'
              : 'border-white/45 text-white hover:border-white hover:bg-white/10'
          }`}
          style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }}
        >
          QUESTIONNAIRE
        </button>
      </div>
    </header>
  );
}
