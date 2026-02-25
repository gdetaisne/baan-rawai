'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { EditorialCard } from '@/components/EditorialCard';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function LuxuryArrival() {
  const t = useTranslations('arrival');

  return (
    <EditorialSection
      label="ARRIVAL"
      title={t('title')}
      background="default"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Immigration */}
        <EditorialCard>
          <h3 className="font-display text-xl text-ink mb-3">{t('immigration.title')}</h3>
          <p className="text-body text-muted leading-relaxed">{t('immigration.description')}</p>
        </EditorialCard>

        {/* Fast Track - highlighted */}
        <EditorialCard className="bg-highlight border-accent2/20">
          <h3 className="font-display text-xl text-ink mb-3">{t('fastTrack.title')}</h3>
          <p className="text-body text-ink leading-relaxed">{t('fastTrack.description')}</p>
        </EditorialCard>

        {/* TM0 */}
        <EditorialCard>
          <h3 className="font-display text-xl text-ink mb-3">{t('tm0.title')}</h3>
          <p className="text-body text-muted leading-relaxed mb-6">{t('tm0.description')}</p>
          {siteConfig.links.tm0Form ? (
            <Button variant="ghost" size="sm" href={siteConfig.links.tm0Form}>
              {t('tm0.cta')} →
            </Button>
          ) : (
            <p className="text-sm text-muted italic">{t('tm0.comingSoon')}</p>
          )}
        </EditorialCard>
      </div>
    </EditorialSection>
  );
}
