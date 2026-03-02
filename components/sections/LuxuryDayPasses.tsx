'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { siteConfig } from '@/config/site';

export function LuxuryDayPasses() {
  const t = useTranslations('dayPasses');
  return (
    <EditorialSection label="DAY PASSES" title={t('title')} description={t('description')} background="white">
      <div className="max-w-3xl space-y-0 border-y border-border">
        {siteConfig.dayPasses.map((h, i) => (
          <article key={i} className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-10 py-8 border-b border-border last:border-0">
            <p className="text-accent text-muted/70 pt-2">{String(i + 1).padStart(2, '0')}</p>
            <div>
              <h3 className="text-display-sm text-ink mb-3">{h.name}</h3>
              <p className="text-body text-muted mb-6">{h.description}</p>
              {h.link !== '#' && (
                <a className="btn-text-dark text-[10px]" href={h.link}>
                  {t('cta')} →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </EditorialSection>
  );
}
