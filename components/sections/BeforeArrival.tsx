import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CopyField } from '@/components/ui/CopyField';
import { siteConfig } from '@/config/site';

export function BeforeArrival() {
  const t = useTranslations('beforeArrival');

  return (
    <section id="before-arrival" className="py-32 bg-background">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Taxi */}
          <div className="border-l border-clay/50 pl-8 py-4">
            <h3 className="text-2xl font-display font-light tracking-wide uppercase text-ink-green mb-4">
              {t('taxi.title')}
            </h3>
            <p className="text-dusty-blue leading-relaxed">{t('taxi.description')}</p>
          </div>

          {/* Door Code */}
          <div className="border-l border-clay/50 pl-8 py-4">
            <h3 className="text-2xl font-display font-light tracking-wide uppercase text-ink-green mb-4">
              {t('doorCode.title')}
            </h3>
            <p className="text-dusty-blue mb-4">
              {t('doorCode.description')}: <span className="font-medium text-ink-green text-xl">{siteConfig.doorCode}</span>
            </p>
            <p className="text-sm text-dusty-blue/60 italic">({t('doorCode.note')})</p>
          </div>

          {/* WiFi */}
          <div className="border-l border-clay/50 pl-8 py-4">
            <h3 className="text-2xl font-display font-light tracking-wide uppercase text-ink-green mb-6">
              {t('wifi.title')}
            </h3>
            <div className="space-y-3 max-w-md">
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

          {/* ATM Warning */}
          <div className="border-l-2 border-coral/40 pl-8 py-4 bg-coral/5">
            <h3 className="text-2xl font-display font-light tracking-wide uppercase text-ink-green mb-4">
              {t('atm.title')}
            </h3>
            <p className="text-ink-green leading-relaxed">{t('atm.description')}</p>
          </div>

          {/* eSIM */}
          <div className="border-l border-clay/50 pl-8 py-4">
            <h3 className="text-2xl font-display font-light tracking-wide uppercase text-ink-green mb-4">
              {t('esim.title')}
            </h3>
            <p className="text-dusty-blue leading-relaxed mb-6">{t('esim.description')}</p>
            <Button variant="ghost" size="sm" href={siteConfig.links.esim}>
              {t('esim.cta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
