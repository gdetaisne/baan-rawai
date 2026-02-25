import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';

export function AtHome() {
  const t = useTranslations('atHome');

  const rules = ['shoesOff', 'noGlass', 'ac'];

  return (
    <section id="at-home" className="py-32 bg-background">
      <Container size="narrow">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto" />
        </div>

        <div className="space-y-8">
          {rules.map((rule) => (
            <div key={rule} className="flex items-start gap-6 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-coral mt-3 flex-shrink-0" />
              <p className="text-dusty-blue leading-relaxed flex-1">{t(rule)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
