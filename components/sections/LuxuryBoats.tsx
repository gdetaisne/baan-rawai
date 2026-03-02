'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { siteConfig } from '@/config/site';

export function LuxuryBoats() {
  const t = useTranslations('boats');
  return (
    <EditorialSection label="EXCURSIONS" title={t('title')}
                      description={`${t('departure')} ${t('help')}`} background="ivory">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Half-day */}
        <div className="bg-white border border-[#DDE8EA] p-8">
          <p className="text-label text-[#1E7A8C] tracking-[0.2em] mb-8">{t('halfDay')}</p>
          <div className="space-y-6">
            {siteConfig.boats.halfDay.map((b, i) => (
              <div key={i} className="border-b border-[#DDE8EA] last:border-0 pb-5 last:pb-0">
                <p className="text-[#1A1916] mb-1" style={{ fontFamily: 'Gloock, serif', fontWeight: 400 }}>{b.name}</p>
                <p className="text-sm text-[#7A766E] mb-1">{b.why}</p>
                <p className="text-xs text-[#9BBAC0] italic">Best for: {b.bestFor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full-day */}
        <div className="bg-white border border-[#DDE8EA] p-8">
          <p className="text-label text-[#1E7A8C] tracking-[0.2em] mb-8">{t('fullDay')}</p>
          <div className="space-y-6">
            {siteConfig.boats.fullDay.map((b, i) => (
              <div key={i} className="border-b border-[#DDE8EA] last:border-0 pb-5 last:pb-0">
                <p className="text-[#1A1916] mb-1" style={{ fontFamily: 'Gloock, serif', fontWeight: 400 }}>{b.name}</p>
                <p className="text-sm text-[#7A766E] mb-1">{b.why}</p>
                <p className="text-xs text-[#9BBAC0] italic">Best for: {b.bestFor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-stop */}
        <div className="bg-white border border-[#DDE8EA] p-8">
          <p className="text-label text-[#1E7A8C] tracking-[0.2em] mb-8">{t('multiStop')}</p>
          <div className="space-y-3">
            {siteConfig.boats.multiStop.map((c, i) => (
              <div key={i} className="px-5 py-3.5 bg-[#F5F5F3] border-l-2 border-[#1E7A8C]/30">
                <p className="text-sm text-[#5C5850]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EditorialSection>
  );
}
