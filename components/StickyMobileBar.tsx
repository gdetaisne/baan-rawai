'use client';

import { useState } from 'react';
import { MessageCircle, Navigation, Wifi } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { WiFiModal } from '@/components/WiFiModal';
import { siteConfig } from '@/config/site';

export function StickyMobileBar() {
  const t = useTranslations('stickyBar');
  const [isWiFiModalOpen, setIsWiFiModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-md border-t border-clay/30 px-4 py-3 safe-area-bottom">
        <div className="flex items-center justify-around gap-2">
          <a
            href={siteConfig.whatsapp.primary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-4 py-2 text-ink-green hover:text-coral transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-medium">{t('whatsapp')}</span>
          </a>

          <a
            href={siteConfig.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-4 py-2 text-ink-green hover:text-coral transition-colors"
          >
            <Navigation className="w-5 h-5" />
            <span className="text-xs font-medium">{t('directions')}</span>
          </a>

          <button
            onClick={() => setIsWiFiModalOpen(true)}
            className="flex flex-col items-center gap-1 px-4 py-2 text-ink-green hover:text-coral transition-colors"
          >
            <Wifi className="w-5 h-5" />
            <span className="text-xs font-medium">{t('wifi')}</span>
          </button>
        </div>
      </div>

      <WiFiModal isOpen={isWiFiModalOpen} onClose={() => setIsWiFiModalOpen(false)} />
    </>
  );
}
