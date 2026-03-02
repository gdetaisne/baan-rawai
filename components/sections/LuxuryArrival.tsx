'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { EditorialCard } from '@/components/EditorialCard';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function LuxuryArrival() {
  const t = useTranslations('arrival');
  return (
    <EditorialSection label="ARRIVAL" title={t('title')} background="ivory">
      <div className="max-w-3xl mx-auto space-y-4">
        <EditorialCard>
          <h3 className="text-display-sm text-[#1A1916] mb-3">{t('immigration.title')}</h3>
          <p className="text-body text-[#7A766E]">{t('immigration.description')}</p>
        </EditorialCard>

        <EditorialCard className="border-l-2 border-l-[#1E7A8C]">
          <h3 className="text-display-sm text-[#1A1916] mb-3">{t('fastTrack.title')}</h3>
          <p className="text-body text-[#5C5850]">{t('fastTrack.description')}</p>
        </EditorialCard>

        <EditorialCard>
          <h3 className="text-display-sm text-[#1A1916] mb-3">{t('tm0.title')}</h3>
          <p className="text-body text-[#7A766E] mb-6">{t('tm0.description')}</p>
          <Button variant="ghost" size="sm" href={siteConfig.links.tdacForm}>{t('tm0.cta')} →</Button>
        </EditorialCard>
      </div>
    </EditorialSection>
  );
}
