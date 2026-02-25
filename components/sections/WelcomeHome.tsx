'use client';

import { useTranslations } from 'next-intl';

export function WelcomeHome() {
  const t = useTranslations('welcome');

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFBF5]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Small intro */}
        <p className="text-[#D4846C] text-sm tracking-widest uppercase mb-6">
          {t('label')}
        </p>
        
        {/* Main message */}
        <h2 className="text-display-md font-display text-[#1A1A1A] mb-8">
          {t('title')}
        </h2>
        
        {/* Story */}
        <div className="space-y-6 text-body-lg text-[#737373] leading-relaxed">
          <p>{t('story1')}</p>
          <p>{t('story2')}</p>
        </div>

        {/* Signature touch */}
        <p className="mt-12 text-[#1A1A1A] font-display italic text-xl">
          {t('signature')}
        </p>
      </div>
    </section>
  );
}
