import { useTranslations } from 'next-intl';
import { CuratedListItem } from '@/components/CuratedListItem';
import { siteConfig } from '@/config/site';

export function OurRawai() {
  const t = useTranslations('rawai');

  return (
    <section id="rawai" className="py-20 px-6 md:px-12 bg-[#F7F5F2]/30">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-light text-[#1F2A28] tracking-tight mb-3">
            {t('title')}
          </h2>
          <div className="h-px w-12 bg-[#D6C2B0] mx-auto" />
        </div>

        {/* Beaches */}
        <div className="mb-20">
          <h3 className="text-sm tracking-widest uppercase text-[#7A8A8F] mb-8 text-center">
            {t('beaches.title')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {siteConfig.beaches.map((beach) => (
              <div key={beach.name} className="border-l border-[#D6C2B0] pl-4">
                <div className="font-display text-lg text-[#1F2A28] mb-1">{beach.name}</div>
                <div className="text-sm text-[#7A8A8F]">{beach.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="mb-20">
          <h3 className="text-sm tracking-widest uppercase text-[#7A8A8F] mb-8 text-center">
            {t('restaurants.title')}
          </h3>
          <div>
            {siteConfig.restaurants.map((restaurant, index) => (
              <CuratedListItem
                key={index}
                name={restaurant.name}
                description={restaurant.description}
                link={restaurant.mapsLink}
                linkLabel={t('restaurants.openMaps')}
              />
            ))}
          </div>
        </div>

        {/* Spas */}
        <div>
          <h3 className="text-sm tracking-widest uppercase text-[#7A8A8F] mb-8 text-center">
            {t('spas.title')}
          </h3>
          <div className="space-y-6">
            {siteConfig.spas.map((spa, index) => (
              <div key={index} className="border-l border-[#D6C2B0] pl-4">
                <div className="font-display text-lg text-[#1F2A28] mb-1">{spa.name}</div>
                <div className="text-sm text-[#7A8A8F]">{spa.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#7A8A8F] italic text-center mt-8">{t('spas.bookingNote')}</p>
        </div>
      </div>
    </section>
  );
}
