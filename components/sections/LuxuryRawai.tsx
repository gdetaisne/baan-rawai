'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
import { EditorialCard } from '@/components/EditorialCard';
import { LuxuryListItem } from '@/components/LuxuryListItem';
import { siteConfig } from '@/config/site';

export function LuxuryRawai() {
  const t = useTranslations('rawai');

  return (
    <EditorialSection label="OUR RAWAI" title={t('title')} background="highlight">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {/* Beaches */}
        <EditorialCard>
          <h3 className="font-display text-xl text-ink mb-6">{t('beaches.title')}</h3>
          <div>
            {siteConfig.beaches.map((beach, index) => (
              <LuxuryListItem key={index} name={beach.name} description={beach.description} />
            ))}
          </div>
        </EditorialCard>

        {/* Restaurants */}
        <EditorialCard>
          <h3 className="font-display text-xl text-ink mb-6">{t('restaurants.title')}</h3>
          <div>
            {siteConfig.restaurants.map((restaurant, index) => (
              <LuxuryListItem
                key={index}
                name={restaurant.name}
                description={restaurant.description}
                link={restaurant.mapsLink !== '#' ? restaurant.mapsLink : undefined}
                linkLabel={t('restaurants.openMaps')}
              />
            ))}
          </div>
        </EditorialCard>

        {/* Massages - full width */}
        <EditorialCard className="md:col-span-2">
          <h3 className="font-display text-xl text-ink mb-3">{t('spas.title')}</h3>
          <p className="text-body text-muted leading-relaxed mb-6">{t('spas.bookingNote')}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {siteConfig.spas.map((spa, index) => (
              <div key={index} className="p-4 bg-highlight rounded-luxury">
                <p className="font-display text-lg text-ink mb-1">{spa.name}</p>
                <p className="text-sm text-muted">{spa.note}</p>
              </div>
            ))}
          </div>
        </EditorialCard>
      </div>
    </EditorialSection>
  );
}
