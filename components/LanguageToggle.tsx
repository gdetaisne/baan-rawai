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
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-white shadow-soft hover:shadow-medium rounded-full text-ocean-600 hover:text-ocean-700 transition-all font-fun font-medium"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm uppercase tracking-wider">{locale === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}
