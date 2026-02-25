import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function Arrival() {
  const t = useTranslations('arrival');

  return (
    <section id="arrival" className="py-32 bg-cream">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="border-l border-clay/50 pl-8 py-4">
            <h3 className="text-2xl font-display font-light tracking-wide uppercase text-ink-green mb-4">
              {t('immigration.title')}
            </h3>
            <p className="text-dusty-blue leading-relaxed">{t('immigration.description')}</p>
          </div>

          <div className="border-l border-clay/50 pl-8 py-4">
            <h3 className="text-2xl font-display font-light tracking-wide uppercase text-ink-green mb-4">
              {t('fastTrack.title')}
            </h3>
            <p className="text-dusty-blue leading-relaxed">{t('fastTrack.description')}</p>
          </div>

          <div className="border-l border-clay/50 pl-8 py-4">
            <h3 className="text-2xl font-display font-light tracking-wide uppercase text-ink-green mb-4">
              {t('tm0.title')}
            </h3>
            <p className="text-dusty-blue leading-relaxed mb-6">{t('tm0.description')}</p>
            <Button variant="ghost" size="sm" href={siteConfig.links.tm0Form}>
              {t('tm0.cta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
