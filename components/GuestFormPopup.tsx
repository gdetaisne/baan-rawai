'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X, Send, Check } from 'lucide-react';

export function GuestFormPopup() {
  const t = useTranslations('guestForm');
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem('guestFormSubmitted');
    const seen = localStorage.getItem('guestFormPopupSeen');
    if (submitted) { setIsSubmitted(true); return; }
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('guestFormPopupSeen', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const h = () => setIsOpen(true);
    window.addEventListener('openGuestForm', h);
    return () => window.removeEventListener('openGuestForm', h);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/guest-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        localStorage.setItem('guestFormSubmitted', 'true');
        setIsSubmitted(true);
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        alert('Error submitting. Please try WhatsApp instead.');
      }
    } catch {
      alert('Error submitting. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/45 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-background border border-border shadow-2xl animate-slide-up">

        {/* Close */}
        <button onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 z-10 p-1.5 text-muted hover:text-ink transition-colors">
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-12 text-left">
            <div className="w-14 h-14 border border-border flex items-center justify-center mb-8">
              <Check className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-display-sm text-ink mb-4">{t('thankYou')}</h3>
            <p className="text-body text-muted">{t('confirmation')}</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-8 md:px-10 pt-10 pb-8 border-b border-border">
              <p className="text-label text-accent mb-5">QUESTIONNAIRE</p>
              <h2 className="text-display-md text-ink mb-4">{t('title')}</h2>
              <p className="text-body text-muted">{t('description')}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 md:px-10 py-8 space-y-6">
              <div>
                <label className="text-label text-muted block mb-3">{t('arrival')} *</label>
                <input type="datetime-local" name="arrival" required className="field w-full" />
              </div>

              <div>
                <label className="text-label text-muted block mb-3">{t('flightNumber')}</label>
                <input type="text" name="flightNumber" placeholder="e.g. TG417" className="field w-full" />
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

              <div>
                <label className="text-label text-muted block mb-3">{t('breakfast')}</label>
                <textarea name="breakfast" rows={2} placeholder="e.g. Eggs, croissants, juice…" className="field w-full resize-none" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-label text-muted block mb-3">{t('juice')}</label>
                  <input type="text" name="juice" placeholder="Orange, mango…" className="field w-full" />
                </div>
                <div>
                  <label className="text-label text-muted block mb-3">{t('cocktail')}</label>
                  <input type="text" name="cocktail" placeholder="Mojito…" className="field w-full" />
                </div>
              </div>

              <div>
                <label className="text-label text-muted block mb-3">{t('allergies')}</label>
                <textarea name="allergies" rows={2} className="field w-full resize-none" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-label text-muted block mb-3">{t('kids')}</label>
                  <input type="number" name="kids" min="0" defaultValue="0" className="field w-full" />
                </div>
                <div>
                  <label className="text-label text-muted block mb-3">{t('kidsAges')}</label>
                  <input type="text" name="kidsAges" placeholder="e.g. 3, 7" className="field w-full" />
                </div>
              </div>

              <div>
                <label className="text-label text-muted block mb-3">{t('other')}</label>
                <textarea name="other" rows={3} placeholder="Anything else?" className="field w-full resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting}
                      className="w-full py-4 bg-accent text-white text-[10px] tracking-[0.2em] uppercase hover:bg-ink transition-colors duration-500 disabled:opacity-50 flex items-center justify-center gap-3"
                      style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }}>
                {isSubmitting
                  ? <><div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" /><span>Sending…</span></>
                  : <><Send className="w-4 h-4" /><span>{t('submit')}</span></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
