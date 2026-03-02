'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { EditorialCard } from '@/components/EditorialCard';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function LuxuryDayPasses() {
  const t = useTranslations('dayPasses');
  return (
    <EditorialSection label="DAY PASSES" title={t('title')} description={t('description')} background="white">
      <div className="grid md:grid-cols-3 gap-6">
        {siteConfig.dayPasses.map((h, i) => (
          <EditorialCard key={i}>
            <h3 className="text-display-sm text-[#1A1916] mb-3">{h.name}</h3>
            <p className="text-body text-[#7A766E] mb-6">{h.description}</p>
            {h.link !== '#' && <Button variant="ghost" size="sm" href={h.link}>{t('cta')} →</Button>}
          </EditorialCard>
        ))}
      </div>
    </EditorialSection>
  );
}
