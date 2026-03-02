'use client';

import { useState } from 'react';
import { MessageCircle, MapPin, Wifi } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';
import { WiFiModal } from './WiFiModal';

export function StickyMobileBar() {
  const t = useTranslations('stickyBar');
  const [showWiFi, setShowWiFi] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border safe-area-bottom shadow-sm">
        <div className="flex items-stretch divide-x divide-border">
          <a href={siteConfig.whatsapp.primary.link} target="_blank" rel="noopener noreferrer"
             className="flex-1 flex flex-col items-center justify-center py-4 text-muted hover:text-accent transition-colors duration-500">
            <MessageCircle className="w-5 h-5 mb-1.5" />
            <span className="text-label tracking-[0.15em]">{t('whatsapp')}</span>
          </a>
          <a href={siteConfig.maps.link} target="_blank" rel="noopener noreferrer"
             className="flex-1 flex flex-col items-center justify-center py-4 text-muted hover:text-accent transition-colors duration-500">
            <MapPin className="w-5 h-5 mb-1.5" />
            <span className="text-label tracking-[0.15em]">{t('directions')}</span>
          </a>
          <button onClick={() => setShowWiFi(true)}
                  className="flex-1 flex flex-col items-center justify-center py-4 text-muted hover:text-accent transition-colors duration-500">
            <Wifi className="w-5 h-5 mb-1.5" />
            <span className="text-label tracking-[0.15em]">{t('wifi')}</span>
          </button>
        </div>
      </div>
      {showWiFi && <WiFiModal onClose={() => setShowWiFi(false)} />}
    </>
  );
}
