'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { EditorialCard } from '@/components/EditorialCard';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function LuxuryDayPasses() {
  const t = useTranslations('dayPasses');

  return (
    <EditorialSection
      label="DAY PASSES"
      title={t('title')}
      description={t('description')}
      background="highlight"
    >
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {siteConfig.dayPasses.map((hotel, index) => (
          <EditorialCard key={index}>
            <h3 className="font-display text-xl text-ink mb-2">{hotel.name}</h3>
            <p className="text-body text-muted leading-relaxed mb-6">{hotel.description}</p>
            {hotel.link !== '#' && (
              <Button variant="ghost" size="sm" href={hotel.link}>
                {t('cta')} →
              </Button>
            )}
          </EditorialCard>
        ))}
      </div>
    </EditorialSection>
  );
}
