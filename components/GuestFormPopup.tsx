'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X, Send, Sparkles, Check } from 'lucide-react';

export function GuestFormPopup() {
  const t = useTranslations('guestForm');
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if form already submitted or popup already shown
    const submitted = localStorage.getItem('guestFormSubmitted');
    const seen = localStorage.getItem('guestFormPopupSeen');
    
    if (submitted) {
      setIsSubmitted(true);
      return;
    }

    // Show popup after 5 seconds if never seen
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('guestFormPopupSeen', 'true');
        setHasSeenPopup(true);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenPopup(true);
    }
  }, []);

  useEffect(() => {
    // Listen for custom event to open popup
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openGuestForm', handleOpen);
    return () => window.removeEventListener('openGuestForm', handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/guest-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        localStorage.setItem('guestFormSubmitted', 'true');
        setIsSubmitted(true);
        
        // Close after showing success for 3 seconds
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        alert('Error submitting form. Please try WhatsApp instead.');
      }
    } catch (error) {
      console.error('Form error:', error);
      alert('Error submitting form. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-slide-up">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-[#1A1A1A]" />
        </button>

        {isSubmitted ? (
          // Success State
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-palm to-ocean rounded-full mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-display font-bold text-[#1A1A1A] mb-4">
              {t('thankYou')}!
            </h3>
            <p className="text-lg text-[#737373] leading-relaxed">
              {t('confirmation')}
            </p>
          </div>
        ) : (
          // Form
          <>
            {/* Header */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-ocean via-palm to-sunset text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/IMG_3154.jpeg')] bg-cover bg-center opacity-20" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-sm tracking-widest uppercase font-semibold">Important</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  {t('title')}
                </h2>
                <p className="text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
                  {t('description')}
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
              {/* Arrival */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  {t('arrival')} *
                </label>
                <input
                  type="datetime-local"
                  name="arrival"
                  required
                  className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                />
              </div>

              {/* Flight */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  {t('flightNumber')}
                </label>
                <input
                  type="text"
                  name="flightNumber"
                  placeholder="e.g. TG417"
                  className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                />
              </div>

              {/* Taxi */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-3">
                  {t('needTaxi')}
                </label>
                <div className="flex gap-4">
                  <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-sand rounded-xl cursor-pointer hover:border-ocean transition-colors has-[:checked]:border-ocean has-[:checked]:bg-ocean/5">
                    <input type="radio" name="taxi" value="yes" className="accent-ocean" />
                    <span className="font-medium">{t('yes')}</span>
                  </label>
                  <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-sand rounded-xl cursor-pointer hover:border-ocean transition-colors has-[:checked]:border-ocean has-[:checked]:bg-ocean/5">
                    <input type="radio" name="taxi" value="no" className="accent-ocean" />
                    <span className="font-medium">{t('no')}</span>
                  </label>
                </div>
              </div>

              {/* Breakfast */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  {t('breakfast')}
                </label>
                <textarea
                  name="breakfast"
                  rows={2}
                  placeholder="e.g. Eggs, croissants, fresh juice..."
                  className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all resize-none"
                />
              </div>

              {/* Juice & Cocktail */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    {t('juice')}
                  </label>
                  <input
                    type="text"
                    name="juice"
                    placeholder="Orange, mango..."
                    className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    {t('cocktail')}
                  </label>
                  <input
                    type="text"
                    name="cocktail"
                    placeholder="Mojito, margarita..."
                    className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                  />
                </div>
              </div>

              {/* Allergies */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  {t('allergies')}
                </label>
                <textarea
                  name="allergies"
                  rows={2}
                  className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all resize-none"
                />
              </div>

              {/* Kids */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    {t('kids')}
                  </label>
                  <input
                    type="number"
                    name="kids"
                    min="0"
                    defaultValue="0"
                    className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    {t('kidsAges')}
                  </label>
                  <input
                    type="text"
                    name="kidsAges"
                    placeholder="e.g. 3, 7"
                    className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all"
                  />
                </div>
              </div>

              {/* Other */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  {t('other')}
                </label>
                <textarea
                  name="other"
                  rows={3}
                  placeholder="Anything else we should know?"
                  className="w-full px-4 py-3 border-2 border-sand bg-white text-[#1A1A1A] rounded-xl focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-ocean via-palm to-sunset text-white font-bold text-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t('submit')}</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
