'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    // Store preference in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLocale', newLocale);
    }
    // Navigate to new locale
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="fixed top-8 right-8 z-50 flex items-center gap-2 px-4 py-2 bg-cream-50/90 backdrop-blur-sm border border-stone-200 text-ink hover:bg-white transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-xs uppercase tracking-widest">{locale === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}
