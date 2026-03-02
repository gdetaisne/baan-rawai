'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { EditorialCard } from '@/components/EditorialCard';
import { LuxuryListItem } from '@/components/LuxuryListItem';
import { siteConfig } from '@/config/site';

export function LuxuryRawai() {
  const t = useTranslations('rawai');
  return (
    <EditorialSection label="OUR RAWAI" title={t('title')} background="white">
      {/* Video */}
      <div className="mb-10 img-zoom">
        <video autoPlay muted loop playsInline
               className="w-full h-[280px] md:h-[400px] object-cover"
               poster="/IMG_7221.jpeg">
          <source src="/IMG_7204.MOV" type="video/mp4" />
        </video>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <EditorialCard>
          <h3 className="text-display-sm text-[#1A1916] mb-6">{t('beaches.title')}</h3>
          {siteConfig.beaches.map((b, i) => <LuxuryListItem key={i} name={b.name} description={b.description} />)}
        </EditorialCard>

        <EditorialCard>
          <h3 className="text-display-sm text-[#1A1916] mb-6">{t('restaurants.title')}</h3>
          {siteConfig.restaurants.map((r, i) => (
            <LuxuryListItem key={i} name={r.name} description={r.description}
                            link={r.mapsLink !== '#' ? r.mapsLink : undefined}
                            linkLabel={t('restaurants.openMaps')} />
          ))}
        </EditorialCard>

        <EditorialCard className="md:col-span-2">
          <h3 className="text-display-sm text-[#1A1916] mb-3">{t('spas.title')}</h3>
          <p className="text-body text-[#7A766E] mb-6">{t('spas.bookingNote')}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {siteConfig.spas.map((s, i) => (
              <div key={i} className="p-5 bg-[#F5F5F3] border border-[#DDE8EA]">
                <p className="text-[#1A1916] mb-1" style={{ fontFamily: 'Gloock, serif', fontWeight: 400 }}>{s.name}</p>
                <p className="text-sm text-[#7A766E]">{s.note}</p>
              </div>
            ))}
          </div>
        </EditorialCard>
      </div>
    </EditorialSection>
  );
}
