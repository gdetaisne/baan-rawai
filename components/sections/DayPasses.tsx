import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

export function DayPasses() {
  const t = useTranslations('dayPasses');

  return (
    <section id="day-passes" className="py-32 bg-background">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto mb-8" />
          <p className="text-dusty-blue max-w-2xl mx-auto leading-relaxed">{t('description')}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {siteConfig.dayPasses.map((hotel, index) => (
            <a
              key={index}
              href={hotel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 py-6 border-b border-clay/20 group hover:border-coral/30 transition-colors"
            >
              <div className="flex-1">
                <div className="text-lg font-medium text-ink-green mb-2 group-hover:text-coral transition-colors">
                  {hotel.name}
                </div>
                <div className="text-sm text-dusty-blue">{hotel.description}</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-dusty-blue group-hover:text-coral transition-colors flex-shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
