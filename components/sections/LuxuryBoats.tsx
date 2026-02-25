'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { siteConfig } from '@/config/site';

export function LuxuryBoats() {
  const t = useTranslations('boats');

  return (
    <EditorialSection
      label="EXCURSIONS"
      title={t('title')}
      description={`${t('departure')} ${t('help')}`}
    >
      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        {/* Half-day */}
        <div>
          <h3 className="text-label text-accent mb-6">{t('halfDay')}</h3>
          <div className="space-y-6">
            {siteConfig.boats.halfDay.map((boat, index) => (
              <div key={index}>
                <p className="font-display text-lg text-ink mb-1.5">{boat.name}</p>
                <p className="text-sm text-muted mb-1 leading-relaxed">{boat.why}</p>
                <p className="text-xs text-muted/70 italic">Best for: {boat.bestFor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full-day */}
        <div>
          <h3 className="text-label text-accent mb-6">{t('fullDay')}</h3>
          <div className="space-y-6">
            {siteConfig.boats.fullDay.map((boat, index) => (
              <div key={index}>
                <p className="font-display text-lg text-ink mb-1.5">{boat.name}</p>
                <p className="text-sm text-muted mb-1 leading-relaxed">{boat.why}</p>
                <p className="text-xs text-muted/70 italic">Best for: {boat.bestFor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-stop */}
        <div>
          <h3 className="text-label text-accent mb-6">{t('multiStop')}</h3>
          <div className="space-y-4">
            {siteConfig.boats.multiStop.map((combo, index) => (
              <div key={index} className="p-4 bg-highlight rounded-luxury">
                <p className="text-sm text-ink">{combo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EditorialSection>
  );
}
