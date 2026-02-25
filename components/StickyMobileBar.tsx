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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-deep text-white safe-area-bottom shadow-2xl">
        <div className="flex items-stretch divide-x divide-white/10">
          {/* WhatsApp */}
          <a
            href={siteConfig.whatsapp.primary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-4 hover:bg-white/10 transition-colors active:bg-white/20"
          >
            <MessageCircle className="w-6 h-6 mb-1.5" />
            <span className="text-xs tracking-wide font-medium">{t('whatsapp')}</span>
          </a>

          {/* Directions */}
          <a
            href={siteConfig.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-4 hover:bg-white/10 transition-colors active:bg-white/20"
          >
            <MapPin className="w-6 h-6 mb-1.5" />
            <span className="text-xs tracking-wide font-medium">{t('directions')}</span>
          </a>

          {/* WiFi */}
          <button
            onClick={() => setShowWiFi(true)}
            className="flex-1 flex flex-col items-center justify-center py-4 hover:bg-white/10 transition-colors active:bg-white/20"
          >
            <Wifi className="w-6 h-6 mb-1.5" />
            <span className="text-xs tracking-wide font-medium">{t('wifi')}</span>
          </button>
        </div>
      </div>

      {/* WiFi Modal */}
      {showWiFi && <WiFiModal onClose={() => setShowWiFi(false)} />}
    </>
  );
}
