'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { EditorialSection } from '@/components/EditorialSection';
import { siteConfig } from '@/config/site';

export function LuxuryGuestForm() {
  const t = useTranslations('guestForm');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <EditorialSection label="THANK YOU" title={t('thankYou')} background="white">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-14 h-14 border border-[#1E7A8C]/40 flex items-center justify-center mx-auto mb-8">
            <Send className="w-5 h-5 text-[#1E7A8C]" />
          </div>
          <p className="text-body-lg text-[#5C5850] mb-8">{t('confirmation')}</p>
          <Button variant="primary" href={siteConfig.whatsapp.primary.link}>
            <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
          </Button>
        </div>
      </EditorialSection>
    );
  }

  return (
    <EditorialSection id="guest-form" label="PREPARE YOUR STAY"
                      title={t('title')} description={t('description')} background="white">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
          {/* Arrival */}
          <div>
            <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('arrival')}</label>
            <input type="datetime-local" className="field-box w-full" />
          </div>

          <div>
            <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('flightNumber')}</label>
            <input type="text" className="field-box w-full" />
          </div>

          {/* Taxi */}
          <div>
            <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-4">{t('needTaxi')}</label>
            <div className="flex gap-4">
              {['yes', 'no'].map(v => (
                <label key={v} className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#DDE8EA] cursor-pointer hover:border-[#1E7A8C]/40 has-[:checked]:border-[#1E7A8C] has-[:checked]:bg-[#F9F9F7] transition-all duration-300">
                  <input type="radio" name="taxi" value={v} className="accent-[#1E7A8C]" />
                  <span className="text-sm text-[#1A1916]">{t(v as 'yes' | 'no')}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('breakfast')}</label>
            <textarea rows={3} className="field-box w-full resize-none" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('juice')}</label>
              <input type="text" className="field-box w-full" />
            </div>
            <div>
              <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('cocktail')}</label>
              <input type="text" className="field-box w-full" />
            </div>
          </div>

          <div>
            <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('allergies')}</label>
            <textarea rows={2} className="field-box w-full resize-none" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('kids')}</label>
              <input type="number" min="0" className="field-box w-full" />
            </div>
            <div>
              <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('kidsAges')}</label>
              <input type="text" placeholder="e.g. 3, 7" className="field-box w-full" />
            </div>
          </div>

          {/* Baby */}
          <div className="p-6 bg-[#F5F5F3] border border-[#DDE8EA] space-y-4">
            <h4 className="text-label text-[#1E7A8C] tracking-[0.2em]">{t('babyNeeds')}</h4>
            <div>
              <label className="text-sm text-[#7A766E] block mb-3">{t('diapers')}</label>
              <div className="flex gap-4">
                {['yes', 'no'].map(v => (
                  <label key={v} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="diapers" value={v} className="accent-[#1E7A8C]" />
                    <span className="text-sm text-[#1A1916]">{t(v as 'yes' | 'no')}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-[#7A766E] block mb-2">{t('diaperSize')}</label>
              <input type="text" className="field-box w-full" />
            </div>
            <div>
              <label className="text-sm text-[#7A766E] block mb-2">{t('babyFood')}</label>
              <textarea rows={2} className="field-box w-full resize-none" />
            </div>
          </div>

          <div>
            <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('sleeping')}</label>
            <textarea rows={2} className="field-box w-full resize-none" />
          </div>

          <div>
            <label className="text-label text-[#1E7A8C] tracking-[0.2em] block mb-3">{t('other')}</label>
            <textarea rows={3} className="field-box w-full resize-none" />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            <Send className="w-4 h-4 mr-2" /> {t('submit')}
          </Button>
        </form>
      </div>
    </EditorialSection>
  );
}
