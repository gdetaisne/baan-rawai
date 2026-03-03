'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { siteConfig } from '@/config/site';

export function LuxuryBoats() {
  const t = useTranslations('boats');
  return (
    <EditorialSection label="EXCURSIONS" title={t('title')}
                      description={`${t('departure')} ${t('help')}`} background="ivory">
      <div className="space-y-0 border-y border-border">
        {/* Half-day */}
        <section className="grid md:grid-cols-[220px_1fr] gap-8 py-10 border-b border-border">
          <p className="text-accent text-muted/70 pt-2">01 · {t('halfDay')}</p>
          <div className="space-y-6">
            {siteConfig.boats.halfDay.map((b, i) => (
              <div key={i} className="border-b border-border/70 last:border-0 pb-5 last:pb-0">
                <p className="text-ink mb-1" style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}>{b.name}</p>
                <p className="text-sm text-muted mb-1">{b.why}</p>
                <p className="text-xs text-muted/70 italic">Best for: {b.bestFor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full-day */}
        <section className="grid md:grid-cols-[220px_1fr] gap-8 py-10 border-b border-border">
          <p className="text-accent text-muted/70 pt-2">02 · {t('fullDay')}</p>
          <div className="space-y-6">
            {siteConfig.boats.fullDay.map((b, i) => (
              <div key={i} className="border-b border-border/70 last:border-0 pb-5 last:pb-0">
                <p className="text-ink mb-1" style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}>{b.name}</p>
                <p className="text-sm text-muted mb-1">{b.why}</p>
                <p className="text-xs text-muted/70 italic">Best for: {b.bestFor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Multi-stop */}
        <section className="grid md:grid-cols-[220px_1fr] gap-8 py-10">
          <p className="text-accent text-muted/70 pt-2">03 · {t('multiStop')}</p>
          <div className="space-y-3">
            {siteConfig.boats.multiStop.map((c, i) => (
              <div key={i} className="px-5 py-3.5 bg-surface border border-border luxury-hover">
                <p className="text-sm text-ink">{c}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </EditorialSection>
  );
}
