'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, Send } from 'lucide-react';
import { EditorialSection } from '@/components/EditorialSection';
import { siteConfig } from '@/config/site';

export function LuxuryGuestForm() {
  const t = useTranslations('guestForm');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <EditorialSection label="THANK YOU" title={t('thankYou')} background="white">
        <div className="max-w-lg text-left">
          <div className="w-14 h-14 border border-border flex items-center justify-center mb-8">
            <Send className="w-5 h-5 text-accent" />
          </div>
          <p className="text-body-lg text-muted mb-8">{t('confirmation')}</p>
          <a
            href={siteConfig.whatsapp.primary.link}
            className="btn-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </EditorialSection>
    );
  }

  return (
    <EditorialSection
      id="guest-form"
      label="QUESTIONNAIRE"
      title={t('title')}
      description={t('description')}
      background="white"
    >
      <div className="max-w-3xl">
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-0 border-y border-border">
          <section className="grid md:grid-cols-[180px_1fr] gap-8 py-10 border-b border-border">
            <p className="text-accent text-muted/70 pt-1">01 · ARRIVAL</p>
            <div className="space-y-6">
              <div>
                <label className="text-label text-muted block mb-3">{t('arrival')}</label>
                <input type="datetime-local" className="field w-full" />
              </div>
              <div>
                <label className="text-label text-muted block mb-3">{t('flightNumber')}</label>
                <input type="text" className="field w-full" />
              </div>
              <div>
                <label className="text-label text-muted block mb-4">{t('needTaxi')}</label>
                <div className="flex gap-6">
                  {['yes', 'no'].map(v => (
                    <label key={v} className="inline-flex items-center gap-2 text-sm text-ink cursor-pointer">
                      <input type="radio" name="taxi" value={v} className="accent-accent" />
                      <span>{t(v as 'yes' | 'no')}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-[180px_1fr] gap-8 py-10 border-b border-border">
            <p className="text-accent text-muted/70 pt-1">02 · FOOD</p>
            <div className="space-y-6">
              <div>
                <label className="text-label text-muted block mb-3">{t('breakfast')}</label>
                <textarea rows={3} className="field w-full resize-none" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-label text-muted block mb-3">{t('juice')}</label>
                  <input type="text" className="field w-full" />
                </div>
                <div>
                  <label className="text-label text-muted block mb-3">{t('cocktail')}</label>
                  <input type="text" className="field w-full" />
                </div>
              </div>
              <div>
                <label className="text-label text-muted block mb-3">{t('allergies')}</label>
                <textarea rows={2} className="field w-full resize-none" />
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-[180px_1fr] gap-8 py-10 border-b border-border">
            <p className="text-accent text-muted/70 pt-1">03 · KIDS</p>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-label text-muted block mb-3">{t('kids')}</label>
                  <input type="number" min="0" className="field w-full" />
                </div>
                <div>
                  <label className="text-label text-muted block mb-3">{t('kidsAges')}</label>
                  <input type="text" placeholder="e.g. 3, 7" className="field w-full" />
                </div>
              </div>
              <div>
                <label className="text-label text-muted block mb-4">{t('diapers')}</label>
                <div className="flex gap-6">
                  {['yes', 'no'].map(v => (
                    <label key={v} className="inline-flex items-center gap-2 text-sm text-ink cursor-pointer">
                      <input type="radio" name="diapers" value={v} className="accent-accent" />
                      <span>{t(v as 'yes' | 'no')}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-label text-muted block mb-3">{t('diaperSize')}</label>
                  <input type="text" className="field w-full" />
                </div>
                <div>
                  <label className="text-label text-muted block mb-3">{t('babyFood')}</label>
                  <input type="text" className="field w-full" />
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-[180px_1fr] gap-8 py-10">
            <p className="text-accent text-muted/70 pt-1">04 · NOTES</p>
            <div className="space-y-6">
              <div>
                <label className="text-label text-muted block mb-3">{t('sleeping')}</label>
                <textarea rows={2} className="field w-full resize-none" />
              </div>
              <div>
                <label className="text-label text-muted block mb-3">{t('other')}</label>
                <textarea rows={3} className="field w-full resize-none" />
              </div>
            </div>
          </section>

          <div className="pt-10">
            <button type="submit" className="btn-accent w-full justify-center">
              <Send className="w-4 h-4" /> {t('submit')}
            </button>
          </div>
        </form>
      </div>
    </EditorialSection>
  );
}
