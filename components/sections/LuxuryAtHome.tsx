'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';

export function LuxuryAtHome() {
  const t = useTranslations('atHome');
  const rules = ['shoesOff', 'noGlass', 'ac', 'towels'];
  return (
    <EditorialSection label="HOUSE NOTES" title={t('title')} background="ivory">
      <div className="max-w-3xl space-y-0 border-y border-border">
        {rules.map((rule, i) => (
          <div key={rule} className="grid md:grid-cols-[90px_1fr] gap-4 md:gap-10 py-8 border-b border-border last:border-0">
            <span
              className="text-4xl text-muted/50 flex-shrink-0 leading-none mt-1 tabular-nums"
              style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-body text-ink/80 pt-1">{t(rule)}</p>
          </div>
        ))}
      </div>
    </EditorialSection>
  );
}
