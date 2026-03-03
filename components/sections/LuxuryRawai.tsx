'use client';

import { useTranslations } from 'next-intl';
import { EditorialSection } from '@/components/EditorialSection';
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

      <div className="space-y-0 border-y border-border">
        <section className="grid md:grid-cols-[220px_1fr] gap-8 py-10 border-b border-border">
          <p className="text-accent text-muted/70 pt-2">BEACHES</p>
          <div>
            <h3 className="text-display-sm text-ink mb-6">{t('beaches.title')}</h3>
            {siteConfig.beaches.map((b, i) => <LuxuryListItem key={i} name={b.name} description={b.description} />)}
          </div>
        </section>

        <section className="grid md:grid-cols-[220px_1fr] gap-8 py-10 border-b border-border">
          <p className="text-accent text-muted/70 pt-2">FOOD</p>
          <div>
            <h3 className="text-display-sm text-ink mb-6">{t('restaurants.title')}</h3>
            {siteConfig.restaurants.map((r, i) => (
              <LuxuryListItem key={i} name={r.name} description={r.description}
                              link={r.mapsLink !== '#' ? r.mapsLink : undefined}
                              linkLabel={t('restaurants.openMaps')} />
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-[220px_1fr] gap-8 py-10">
          <p className="text-accent text-muted/70 pt-2">WELLNESS</p>
          <div>
            <h3 className="text-display-sm text-ink mb-3">{t('spas.title')}</h3>
            <p className="text-body text-muted mb-6">{t('spas.bookingNote')}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {siteConfig.spas.map((s, i) => (
                <div key={i} className="p-5 bg-background border border-border luxury-hover">
                  <p className="text-ink mb-1" style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}>{s.name}</p>
                  <p className="text-sm text-muted">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </EditorialSection>
  );
}
