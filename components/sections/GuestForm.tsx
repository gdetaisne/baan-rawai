'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function GuestForm() {
  const t = useTranslations('guestForm');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="guest-form" className="py-32 bg-cream">
        <Container size="narrow" className="text-center">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-8">
            {t('thankYou')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto mb-12" />
          <p className="text-dusty-blue mb-12 text-lg leading-relaxed">{t('confirmation')}</p>
          <p className="text-dusty-blue/70 mb-8">{t('contactUs')}</p>
          <Button variant="primary" href={siteConfig.whatsapp.primary.link}>
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <section id="guest-form" className="py-32 bg-cream">
      <Container size="narrow">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-light tracking-wider uppercase text-ink-green mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-px bg-ink-green/30 mx-auto mb-8" />
          <p className="text-dusty-blue">{t('description')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
              {t('arrival')}
            </label>
            <input
              type="datetime-local"
              className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
              {t('flightNumber')}
            </label>
            <input
              type="text"
              className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-4">
              {t('needTaxi')}
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="taxi" value="yes" className="mr-3" />
                <span className="text-dusty-blue">{t('yes')}</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="taxi" value="no" className="mr-3" />
                <span className="text-dusty-blue">{t('no')}</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
              {t('breakfast')}
            </label>
            <textarea
              rows={4}
              className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors resize-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
                {t('juice')}
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
                {t('cocktail')}
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
              {t('allergies')}
            </label>
            <textarea
              rows={3}
              className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors resize-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
                {t('kids')}
              </label>
              <input
                type="number"
                min="0"
                className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
                {t('kidsAges')}
              </label>
              <input
                type="text"
                placeholder="e.g. 3, 7"
                className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors"
              />
            </div>
          </div>

          <div className="border-t border-clay/30 pt-8">
            <h4 className="text-sm font-medium tracking-wide uppercase text-ink-green mb-6">
              {t('babyNeeds')}
            </h4>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-4">
                  {t('diapers')}
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="diapers" value="yes" className="mr-3" />
                    <span className="text-dusty-blue">{t('yes')}</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="diapers" value="no" className="mr-3" />
                    <span className="text-dusty-blue">{t('no')}</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
                  {t('diaperSize')}
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
                  {t('babyFood')}
                </label>
                <textarea
                  rows={3}
                  className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
              {t('sleeping')}
            </label>
            <textarea
              rows={3}
              className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium tracking-wide uppercase text-ink-green mb-3">
              {t('other')}
            </label>
            <textarea
              rows={4}
              className="w-full px-6 py-4 bg-white border border-clay/30 focus:outline-none focus:border-coral/50 transition-colors resize-none"
            />
          </div>

          <div className="pt-8">
            <Button type="submit" variant="primary" size="lg" className="w-full">
              {t('submit')}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
