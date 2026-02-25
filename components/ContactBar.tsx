import { useTranslations } from 'next-intl';
import { MessageCircle, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ContactBar() {
  const t = useTranslations('hero');

  return (
    <div className="hidden md:block bg-gradient-ocean py-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-12 text-sm">
          <a
            href={siteConfig.whatsapp.primary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
          >
            <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white/20 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-fun font-medium">{t('lucie')}</div>
              <div className="text-xs text-white/70">{siteConfig.whatsapp.primary.number}</div>
            </div>
          </a>

          <div className="w-px h-12 bg-white/20" />

          <a
            href={siteConfig.whatsapp.secondary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
          >
            <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white/20 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-fun font-medium">{t('guillaume')}</div>
              <div className="text-xs text-white/70">{siteConfig.whatsapp.secondary.number}</div>
            </div>
          </a>

          <div className="w-px h-12 bg-white/20" />

          <a
            href={siteConfig.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
          >
            <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white/20 transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs text-white/90">{siteConfig.address}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
