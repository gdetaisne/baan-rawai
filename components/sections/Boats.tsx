import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

export function Boats() {
  const t = useTranslations('boats');

  return (
    <section id="boats" className="py-32 bg-cream">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-20">
          {/* Half-day */}
          <div>
            <h3 className="text-3xl font-display font-light tracking-wide uppercase text-ink-green mb-10 text-center">
              {t('halfDay')}
            </h3>
            <div className="space-y-8">
              {siteConfig.boats.halfDay.map((boat) => (
                <div key={boat.name} className="flex items-start gap-6 py-4">
                  <div className="flex-1">
                    <div className="text-lg font-medium text-ink-green mb-2">{boat.name}</div>
                    <div className="text-sm text-dusty-blue mb-2">{boat.why}</div>
                    <div className="text-xs text-dusty-blue/60 italic">Best for: {boat.bestFor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-day */}
          <div>
            <h3 className="text-3xl font-display font-light tracking-wide uppercase text-ink-green mb-10 text-center">
              {t('fullDay')}
            </h3>
            <div className="space-y-8">
              {siteConfig.boats.fullDay.map((boat) => (
                <div key={boat.name} className="flex items-start gap-6 py-4">
                  <div className="flex-1">
                    <div className="text-lg font-medium text-ink-green mb-2">{boat.name}</div>
                    <div className="text-sm text-dusty-blue mb-2">{boat.why}</div>
                    <div className="text-xs text-dusty-blue/60 italic">Best for: {boat.bestFor}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multi-stop */}
          <div>
            <h3 className="text-3xl font-display font-light tracking-wide uppercase text-ink-green mb-10 text-center">
              {t('multiStop')}
            </h3>
            <div className="space-y-4">
              {siteConfig.boats.multiStop.map((combo, index) => (
                <div key={index} className="text-center text-dusty-blue py-2">
                  {combo}
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="border-t border-clay/30 pt-8 text-center space-y-3">
            <p className="text-sm text-dusty-blue">{t('departure')}</p>
            <p className="text-sm text-dusty-blue/70 italic">{t('help')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
