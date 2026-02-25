import { useTranslations } from 'next-intl';
import { MessageCircle, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ContactBar() {
  const t = useTranslations('hero');

  return (
    <div className="border-t border-b border-stone-200 bg-cream-50 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-12 text-xs">
          <a
            href={siteConfig.whatsapp.primary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-stone-600 hover:text-ink transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <div>
              <div className="tracking-wider uppercase">{t('lucie')}</div>
              <div className="text-stone-400">{siteConfig.whatsapp.primary.number}</div>
            </div>
          </a>

          <div className="w-px h-8 bg-stone-200" />

          <a
            href={siteConfig.whatsapp.secondary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-stone-600 hover:text-ink transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <div>
              <div className="tracking-wider uppercase">{t('guillaume')}</div>
              <div className="text-stone-400">{siteConfig.whatsapp.secondary.number}</div>
            </div>
          </a>

          <div className="w-px h-8 bg-stone-200" />

          <a
            href={siteConfig.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-stone-600 hover:text-ink transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <div className="text-stone-600">{siteConfig.address}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
