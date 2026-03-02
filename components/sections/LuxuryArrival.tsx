'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { siteConfig } from '@/config/site';

export function LuxuryArrival() {
  const t = useTranslations('arrival');
  return (
    <EditorialSection label="ARRIVAL" title={t('title')} background="ivory">
      <div className="max-w-3xl space-y-0 border-y border-border">
        <div className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-10 py-8 border-b border-border">
          <p className="text-accent text-muted/70 pt-2">01</p>
          <div>
            <h3 className="text-display-sm text-ink mb-3">{t('immigration.title')}</h3>
            <p className="text-body text-muted">{t('immigration.description')}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-10 py-8 border-b border-border">
          <p className="text-accent text-muted/70 pt-2">02</p>
          <div>
            <h3 className="text-display-sm text-ink mb-3">{t('fastTrack.title')}</h3>
            <p className="text-body text-muted">{t('fastTrack.description')}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-10 py-8">
          <p className="text-accent text-muted/70 pt-2">03</p>
          <div>
            <h3 className="text-display-sm text-ink mb-3">{t('tm0.title')}</h3>
            <p className="text-body text-muted mb-6">{t('tm0.description')}</p>
            <a href={siteConfig.links.tdacForm} className="btn-text-dark text-[10px]">
              {t('tm0.cta')} →
            </a>
          </div>
        </div>
      </div>
    </EditorialSection>
  );
}
