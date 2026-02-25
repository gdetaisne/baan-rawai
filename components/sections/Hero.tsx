import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative">
      {/* Full-bleed hero image */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <Image
          src="/IMG_7221.jpeg"
          alt="Baan Sayiuan"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1F2A28]/40" />
      </div>

      {/* Text plaque on clay surface */}
      <div className="relative -mt-32 mx-6 md:mx-12 mb-16">
        <div className="bg-[#D6C2B0] border border-[#D6C2B0]/50 p-8 md:p-12 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-[#1F2A28] tracking-tight mb-4 leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-lg md:text-xl text-[#1F2A28]/70 font-light mb-8">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="primary" size="default" href="#guest-form">
              {t('ctaPrimary')}
            </Button>
            <Button variant="ghost" size="default" href={siteConfig.whatsapp.primary.link}>
              {t('whatsapp')}
            </Button>
            <Button variant="ghost" size="default" href={siteConfig.maps.link}>
              {t('directions')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
