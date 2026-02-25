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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <EditorialSection label="THANK YOU" title={t('thankYou')} background="highlight">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-block p-5 bg-white rounded-luxury mb-8">
            <Send className="w-10 h-10 text-accent" />
          </div>
          <p className="text-body-lg text-ink mb-8 leading-relaxed">{t('confirmation')}</p>
          <p className="text-body text-muted mb-8">{t('contactUs')}</p>
          <Button variant="primary" size="default" href={siteConfig.whatsapp.primary.link}>
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      </EditorialSection>
    );
  }

  return (
    <EditorialSection
      label="PREPARE YOUR STAY"
      title={t('title')}
      description={t('description')}
      background="highlight"
    >
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Arrival */}
          <div>
            <label className="block text-label text-ink mb-3">{t('arrival')}</label>
            <input
              type="datetime-local"
              className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury"
            />
          </div>

          {/* Flight number */}
          <div>
            <label className="block text-label text-ink mb-3">{t('flightNumber')}</label>
            <input
              type="text"
              className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury"
            />
          </div>

          {/* Need taxi */}
          <div>
            <label className="block text-label text-ink mb-4">{t('needTaxi')}</label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="taxi"
                  value="yes"
                  className="mr-2 accent-accent"
                />
                <span className="text-body text-ink">{t('yes')}</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="taxi"
                  value="no"
                  className="mr-2 accent-accent"
                />
                <span className="text-body text-ink">{t('no')}</span>
              </label>
            </div>
          </div>

          {/* Breakfast */}
          <div>
            <label className="block text-label text-ink mb-3">{t('breakfast')}</label>
            <textarea
              rows={3}
              className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury resize-none"
            />
          </div>

          {/* Juice & Cocktail */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-label text-ink mb-3">{t('juice')}</label>
              <input
                type="text"
                className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury"
              />
            </div>
            <div>
              <label className="block text-label text-ink mb-3">{t('cocktail')}</label>
              <input
                type="text"
                className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury"
              />
            </div>
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-label text-ink mb-3">{t('allergies')}</label>
            <textarea
              rows={2}
              className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury resize-none"
            />
          </div>

          {/* Kids */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-label text-ink mb-3">{t('kids')}</label>
              <input
                type="number"
                min="0"
                className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury"
              />
            </div>
            <div>
              <label className="block text-label text-ink mb-3">{t('kidsAges')}</label>
              <input
                type="text"
                placeholder="e.g. 3, 7"
                className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury"
              />
            </div>
          </div>

          {/* Baby needs */}
          <div className="p-6 bg-white border border-hairline rounded-luxury space-y-4">
            <h4 className="text-label text-ink">{t('babyNeeds')}</h4>

            <div>
              <label className="block text-sm text-muted mb-3">{t('diapers')}</label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="diapers"
                    value="yes"
                    className="mr-2 accent-accent"
                  />
                  <span className="text-body text-ink">{t('yes')}</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="diapers"
                    value="no"
                    className="mr-2 accent-accent"
                  />
                  <span className="text-body text-ink">{t('no')}</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">{t('diaperSize')}</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-hairline bg-paper text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury"
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">{t('babyFood')}</label>
              <textarea
                rows={2}
                className="w-full px-4 py-2.5 border border-hairline bg-paper text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury resize-none"
              />
            </div>
          </div>

          {/* Sleeping */}
          <div>
            <label className="block text-label text-ink mb-3">{t('sleeping')}</label>
            <textarea
              rows={2}
              className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury resize-none"
            />
          </div>

          {/* Other */}
          <div>
            <label className="block text-label text-ink mb-3">{t('other')}</label>
            <textarea
              rows={3}
              className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-6">
            <Button type="submit" variant="primary" size="lg" className="w-full">
              <Send className="w-5 h-5 mr-2" />
              {t('submit')}
            </Button>
          </div>
        </form>
      </div>
    </EditorialSection>
  );
}
