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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E8DCC4] safe-area-bottom shadow-lg">
        <div className="flex items-stretch divide-x divide-[#E8DCC4]">
          {/* WhatsApp */}
          <a
            href={siteConfig.whatsapp.primary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 text-[#0A4D68] hover:bg-[#FFFBF5] transition-colors"
          >
            <MessageCircle className="w-5 h-5 mb-1.5" />
            <span className="text-xs tracking-wide">{t('whatsapp')}</span>
          </a>

          {/* Directions */}
          <a
            href={siteConfig.maps.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 text-[#0A4D68] hover:bg-[#FFFBF5] transition-colors"
          >
            <MapPin className="w-5 h-5 mb-1.5" />
            <span className="text-xs tracking-wide">{t('directions')}</span>
          </a>

          {/* WiFi */}
          <button
            onClick={() => setShowWiFi(true)}
            className="flex-1 flex flex-col items-center justify-center py-3 text-[#0A4D68] hover:bg-[#FFFBF5] transition-colors"
          >
            <Wifi className="w-5 h-5 mb-1.5" />
            <span className="text-xs tracking-wide">{t('wifi')}</span>
          </button>
        </div>
      </div>

      {/* WiFi Modal */}
      {showWiFi && <WiFiModal onClose={() => setShowWiFi(false)} />}
    </>
  );
}
