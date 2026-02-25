import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

export function BeforeArrival() {
  const t = useTranslations('beforeArrival');

  return (
    <section id="before-arrival" className="py-32 md:py-40 bg-cream-50">
      <Container size="narrow">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-light text-ink tracking-wide mb-4">
            {t('title')}
          </h2>
          <div className="h-px w-24 bg-stone-300 mx-auto" />
        </div>

        {/* Content */}
        <div className="space-y-16">
          {/* Taxi */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-display font-light text-ink mb-4 tracking-wide">
              {t('taxi.title')}
            </h3>
            <p className="text-stone-600 leading-relaxed">{t('taxi.description')}</p>
          </div>

          <div className="h-px w-12 bg-stone-200 mx-auto" />

          {/* Door Code */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-display font-light text-ink mb-4 tracking-wide">
              {t('doorCode.title')}
            </h3>
            <div className="inline-block px-8 py-4 border border-stone-200 bg-white">
              <span className="text-3xl font-display font-light tracking-widest text-ink">
                {siteConfig.doorCode}
              </span>
            </div>
            <p className="text-sm text-stone-400 italic mt-3">({t('doorCode.note')})</p>
          </div>

          <div className="h-px w-12 bg-stone-200 mx-auto" />

          {/* WiFi */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-display font-light text-ink mb-6 tracking-wide">
              {t('wifi.title')}
            </h3>
            <div className="space-y-3">
              <CopyField
                label={t('wifi.network')}
                value={siteConfig.wifi.name}
                copyLabel={t('wifi.copy')}
                copiedLabel={t('wifi.copied')}
              />
              <CopyField
                label={t('wifi.password')}
                value={siteConfig.wifi.password}
                copyLabel={t('wifi.copy')}
                copiedLabel={t('wifi.copied')}
              />
            </div>
          </div>

          <div className="h-px w-12 bg-stone-200 mx-auto" />

          {/* eSIM */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-display font-light text-ink mb-4 tracking-wide">
              {t('esim.title')}
            </h3>
            <p className="text-stone-600 leading-relaxed mb-6">{t('esim.description')}</p>
            <Button variant="ghost" size="sm" href={siteConfig.links.esim}>
              {t('esim.cta')}
            </Button>
          </div>

          <div className="h-px w-12 bg-stone-200 mx-auto" />

          {/* ATM Warning */}
          <div className="text-center max-w-xl mx-auto p-8 border border-stone-200 bg-stone-50">
            <h3 className="text-xl font-display font-light text-ink mb-4 tracking-wide">
              {t('atm.title')}
            </h3>
            <p className="text-stone-700 leading-relaxed">{t('atm.description')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
