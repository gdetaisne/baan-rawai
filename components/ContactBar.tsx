import { useTranslations } from 'next-intl';
import { MessageCircle, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ContactBar() {
  const t = useTranslations('hero');

  return (
    <div className="hidden md:block border-t border-clay/30 bg-cream py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-16 text-sm">
          <a
            href={siteConfig.whatsapp.primary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-dusty-blue hover:text-ink-green transition-colors group"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <div>
              <div className="font-medium text-ink-green">{t('lucie')}</div>
              <div className="text-xs">{siteConfig.whatsapp.primary.number}</div>
            </div>
          </a>

          <div className="w-px h-8 bg-clay/30" />

          <a
            href={siteConfig.whatsapp.secondary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-dusty-blue hover:text-ink-green transition-colors group"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <div>
              <div className="font-medium text-ink-green">{t('guillaume')}</div>
              <div className="text-xs">{siteConfig.whatsapp.secondary.number}</div>
            </div>
          </a>

          <div className="w-px h-8 bg-clay/30" />

          <a
            href={siteConfig.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-dusty-blue hover:text-ink-green transition-colors group"
          >
            <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <div className="text-xs">{siteConfig.address}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
