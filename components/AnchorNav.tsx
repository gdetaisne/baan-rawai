'use client';

import { useTranslations } from 'next-intl';

export function AnchorNav() {
  const t = useTranslations('nav');

  const links = [
    { id: 'before-arrival', label: t('beforeArrival') },
    { id: 'arrival', label: t('arrival') },
    { id: 'rawai', label: t('rawai') },
    { id: 'boats', label: t('boats') },
    { id: 'day-passes', label: t('dayPasses') },
    { id: 'guest-form', label: t('guestForm') },
  ];

  return (
    <nav className="border-b border-[#E8E1D8] bg-white sticky top-0 z-40 overflow-x-auto">
      <div className="flex items-center gap-8 px-6 md:px-12 py-4 min-w-max md:min-w-0 md:justify-center">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-xs tracking-widest uppercase text-[#7A8A8F] hover:text-[#1F2A28] transition-colors whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
