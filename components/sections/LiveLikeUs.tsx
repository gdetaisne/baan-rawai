import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';

export function LiveLikeUs() {
  const t = useTranslations('liveLikeUs');

  const items = [
    'sevenEleven',
    'tops',
    'transport',
    'pharmacy',
    'water',
  ];

  return (
    <section id="live-like-us" className="py-32 bg-cream">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {items.map((item) => (
            <div key={item} className="border-l border-clay/50 pl-8 py-4">
              <h3 className="text-xl font-medium text-ink-green mb-3 tracking-wide">
                {t(`${item}.title`)}
              </h3>
              <p className="text-dusty-blue leading-relaxed">
                {t(`${item}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
