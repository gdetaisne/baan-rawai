'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';

export function LuxuryAtHome() {
  const t = useTranslations('atHome');
  const rules = ['shoesOff', 'noGlass', 'ac'];
  return (
    <EditorialSection label="HOUSE NOTES" title={t('title')} background="ivory">
      <div className="max-w-2xl mx-auto divide-y divide-[#DDE8EA]">
        {rules.map((rule, i) => (
          <div key={rule} className="flex items-start gap-8 py-8">
            <span
              className="text-4xl text-[#B8CED3] flex-shrink-0 leading-none mt-1 tabular-nums"
              style={{ fontFamily: 'Gloock, serif', fontWeight: 400 }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-body text-[#5C5850] flex-1 pt-1">{t(rule)}</p>
          </div>
        ))}
      </div>
    </EditorialSection>
  );
}
