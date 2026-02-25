'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';

export function LuxuryAtHome() {
  const t = useTranslations('atHome');

  const rules = ['shoesOff', 'noGlass', 'ac'];

  return (
    <EditorialSection label="HOUSE NOTES" title={t('title')}>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={rule} className="flex items-start gap-6 py-4 border-b border-hairline last:border-0">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-highlight flex items-center justify-center">
                <span className="text-sm font-medium text-accent">{index + 1}</span>
              </div>
              <p className="text-body text-ink leading-relaxed flex-1 pt-0.5">{t(rule)}</p>
            </div>
          ))}
        </div>
      </div>
    </EditorialSection>
  );
}
