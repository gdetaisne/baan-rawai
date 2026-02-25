import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CopyField } from '@/components/ui/CopyField';
import { Plane, Key, Wifi, AlertTriangle, Smartphone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function BeforeArrival() {
  const t = useTranslations('beforeArrival');

  const items = [
    {
      icon: Plane,
      color: 'ocean',
      title: t('taxi.title'),
      description: t('taxi.description'),
    },
    {
      icon: Key,
      color: 'sunset',
      title: t('doorCode.title'),
      description: t('doorCode.description'),
      code: siteConfig.doorCode,
      note: t('doorCode.note'),
    },
    {
      icon: Wifi,
      color: 'palm',
      title: t('wifi.title'),
      wifi: true,
    },
    {
      icon: Smartphone,
      color: 'sky',
      title: t('esim.title'),
      description: t('esim.description'),
      cta: t('esim.cta'),
      link: siteConfig.links.esim,
    },
  ];

  return (
    <section id="before-arrival" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-100/30 rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-sunset-50 rounded-full text-sunset-600 text-sm font-fun tracking-wider mb-4">
            ✈️ Pre-flight checklist
          </div>
          <h2 className="text-5xl md:text-6xl font-display text-dark mb-4">
            {t('title')}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            const colorMap: any = {
              ocean: 'bg-ocean-500',
              sunset: 'bg-sunset-500',
              palm: 'bg-palm',
              sky: 'bg-sky',
            };

            return (
              <div
                key={index}
                className="bg-sand-50 p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all transform hover:-translate-y-1"
              >
                <div className={`inline-flex p-4 rounded-2xl ${colorMap[item.color]} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-display text-dark mb-3">{item.title}</h3>
                
                {item.wifi ? (
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
                ) : item.code ? (
                  <>
                    <p className="text-dark/70 mb-3">{item.description}</p>
                    <div className="bg-white p-4 rounded-xl border-2 border-sunset-200">
                      <span className="text-3xl font-fun font-bold text-sunset-600">{item.code}</span>
                    </div>
                    {item.note && <p className="text-sm text-dark/50 italic mt-2">({item.note})</p>}
                  </>
                ) : (
                  <>
                    <p className="text-dark/70 mb-4">{item.description}</p>
                    {item.cta && (
                      <Button variant="primary" size="sm" href={item.link}>
                        {item.cta}
                      </Button>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* ATM Warning - Full width highlight */}
        <div className="bg-gradient-to-br from-sunset-400 to-sunset-500 p-8 rounded-3xl shadow-medium text-white">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white/20 p-3 rounded-xl">
                <AlertTriangle className="w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display mb-3">{t('atm.title')}</h3>
              <p className="text-white/90 text-lg leading-relaxed">{t('atm.description')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
