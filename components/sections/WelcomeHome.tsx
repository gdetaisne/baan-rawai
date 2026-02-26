'use client';

import { useTranslations } from 'next-intl';

export function WelcomeHome() {
  const t = useTranslations('welcome');

  return (
    <section className="py-32 md:py-40 px-8 md:px-12 lg:px-16 bg-paper">
      <div className="max-w-narrow mx-auto text-center">
        {/* Minimal Label */}
        <div className="mb-16">
          <span className="text-label text-muted">
            {t('label')}
          </span>
          <div className="h-px w-12 bg-ink/20 mx-auto mt-4" />
        </div>
        
        {/* Thai Title + English */}
        <div className="mb-16 space-y-6">
          <h2 className="text-display-md text-ink">
            บ้านฉันคือบ้านคุณ
          </h2>
          <p className="text-display-sm text-ink/80 italic">
            {t('title')}
          </p>
        </div>
        
        {/* Story - Minimal */}
        <div className="space-y-8 text-body-lg text-muted max-w-xl mx-auto">
          <p>
            {t('story1')}
          </p>
          <p>
            {t('story2')}
          </p>
        </div>

        {/* Signature */}
        <div className="mt-20">
          <p className="text-xl font-display italic text-ink/60">
            {t('signature')}
          </p>
        </div>
      </div>
    </section>
  );
}
