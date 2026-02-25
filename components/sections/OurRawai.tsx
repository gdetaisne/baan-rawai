import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

export function OurRawai() {
  const t = useTranslations('rawai');

  return (
    <section id="rawai" className="py-32 bg-background">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto" />
        </div>

        {/* Beaches */}
        <div className="max-w-4xl mx-auto mb-24">
          <h3 className="text-3xl font-display font-light tracking-wide uppercase text-ink-green mb-12 text-center">
            {t('beaches.title')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {siteConfig.beaches.map((beach) => (
              <div key={beach.name} className="group">
                <div className="text-lg font-medium text-ink-green mb-2 tracking-wide">{beach.name}</div>
                <div className="text-sm text-dusty-blue leading-relaxed">{beach.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="max-w-4xl mx-auto mb-24">
          <h3 className="text-3xl font-display font-light tracking-wide uppercase text-ink-green mb-12 text-center">
            {t('restaurants.title')}
          </h3>
          <div className="space-y-6">
            {siteConfig.restaurants.map((restaurant, index) => (
              <a
                key={index}
                href={restaurant.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 py-6 border-b border-clay/20 group hover:border-coral/30 transition-colors"
              >
                <div className="flex-1">
                  <div className="text-lg font-medium text-ink-green mb-2 group-hover:text-coral transition-colors">
                    {restaurant.name}
                  </div>
                  <div className="text-sm text-dusty-blue">{restaurant.description}</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-dusty-blue group-hover:text-coral transition-colors flex-shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>

        {/* Spas */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-display font-light tracking-wide uppercase text-ink-green mb-12 text-center">
            {t('spas.title')}
          </h3>
          <div className="space-y-6">
            {siteConfig.spas.map((spa, index) => (
              <div key={index} className="py-4 border-b border-clay/20">
                <div className="text-lg font-medium text-ink-green mb-2">{spa.name}</div>
                <div className="text-sm text-dusty-blue">{spa.note}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-dusty-blue/60 italic text-center mt-8">{t('spas.bookingNote')}</p>
        </div>
      </Container>
    </section>
  );
}
