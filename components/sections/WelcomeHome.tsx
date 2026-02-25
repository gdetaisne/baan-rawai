'use client';

import { useTranslations } from 'next-intl';

export function WelcomeHome() {
  const t = useTranslations('welcome');

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-paper via-white to-paper relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sunset/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-ocean/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sunset/20 to-ocean/20 backdrop-blur-sm rounded-full mb-8">
          <span className="text-sm tracking-widest uppercase text-ocean font-semibold">
            {t('label')}
          </span>
        </div>
        
        {/* Thai Title + English */}
        <div className="mb-8 space-y-3">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-ocean">
            บ้านฉันคือบ้านคุณ
          </h2>
          <p className="text-3xl md:text-4xl font-display text-[#1A1A1A] italic">
            {t('title')}
          </p>
        </div>
        
        {/* Story - 2025 card style */}
        <div className="space-y-6 text-lg md:text-xl text-[#737373] leading-relaxed max-w-3xl mx-auto">
          <p className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-sand shadow-lg">
            {t('story1')}
          </p>
          <p className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-sand shadow-lg">
            {t('story2')}
          </p>
        </div>

        {/* Signature with gradient */}
        <div className="mt-16 inline-block p-8 bg-gradient-to-br from-ocean/5 via-sunset/5 to-palm/5 rounded-3xl border border-sand/50">
          <p className="text-2xl font-display italic bg-gradient-to-r from-ocean via-sunset to-palm bg-clip-text text-transparent">
            {t('signature')}
          </p>
        </div>
      </div>
    </section>
  );
}
