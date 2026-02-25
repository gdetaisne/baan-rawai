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
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-ocean-100 px-4 py-3 safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around gap-2">
          <a
            href={siteConfig.whatsapp.primary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-4 py-2 text-ocean-600 hover:text-ocean-700 active:scale-95 transition-all"
          >
            <div className="bg-ocean-50 p-2 rounded-full">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-xs font-fun font-medium">{t('whatsapp')}</span>
          </a>

          <a
            href={siteConfig.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-4 py-2 text-ocean-600 hover:text-ocean-700 active:scale-95 transition-all"
          >
            <div className="bg-ocean-50 p-2 rounded-full">
              <Navigation className="w-5 h-5" />
            </div>
            <span className="text-xs font-fun font-medium">{t('directions')}</span>
          </a>

          <button
            onClick={() => setIsWiFiModalOpen(true)}
            className="flex flex-col items-center gap-1 px-4 py-2 text-ocean-600 hover:text-ocean-700 active:scale-95 transition-all"
          >
            <div className="bg-ocean-50 p-2 rounded-full">
              <Wifi className="w-5 h-5" />
            </div>
            <span className="text-xs font-fun font-medium">{t('wifi')}</span>
          </button>
        </div>
      </div>

      <WiFiModal isOpen={isWiFiModalOpen} onClose={() => setIsWiFiModalOpen(false)} />
    </>
  );
}
