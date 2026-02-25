'use client';

import { useEffect, useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function GuestFormPopup() {
  const t = useTranslations('guestForm');
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    arrival: '',
    flightNumber: '',
    needTaxi: '',
    breakfast: '',
    juice: '',
    cocktail: '',
    allergies: '',
    kids: '',
    kidsAges: '',
    diapers: '',
    diaperSize: '',
    babyFood: '',
    sleeping: '',
    other: '',
  });

  useEffect(() => {
    // Check if form has been submitted
    const submitted = localStorage.getItem('guestFormSubmitted');
    if (submitted) {
      setHasSubmitted(true);
      return;
    }

    // Show popup after 5 seconds if not submitted
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/guest-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.setItem('guestFormSubmitted', 'true');
        setHasSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isOpen || hasSubmitted) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-deep/80 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-turquoise to-coral p-8 text-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <Send className="w-8 h-8" />
            <h2 className="text-3xl font-display font-semibold">
              {t('title')}
            </h2>
          </div>
          <p className="text-white/90 text-lg">
            {t('description')}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Arrival */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              {t('arrival')} *
            </label>
            <input
              type="datetime-local"
              name="arrival"
              required
              value={formData.arrival}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors"
            />
          </div>

          {/* Flight Number */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              {t('flightNumber')}
            </label>
            <input
              type="text"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors"
            />
          </div>

          {/* Taxi */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              {t('needTaxi')} *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="needTaxi"
                  value="yes"
                  required
                  onChange={handleChange}
                  className="w-5 h-5 text-turquoise"
                />
                <span>{t('yes')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="needTaxi"
                  value="no"
                  onChange={handleChange}
                  className="w-5 h-5 text-turquoise"
                />
                <span>{t('no')}</span>
              </label>
            </div>
          </div>

          {/* Breakfast */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              {t('breakfast')}
            </label>
            <input
              type="text"
              name="breakfast"
              value={formData.breakfast}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors"
              placeholder="Croissants, fruits, eggs..."
            />
          </div>

          {/* Juice & Cocktail */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                {t('juice')}
              </label>
              <input
                type="text"
                name="juice"
                value={formData.juice}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                {t('cocktail')}
              </label>
              <input
                type="text"
                name="cocktail"
                value={formData.cocktail}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              {t('allergies')}
            </label>
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Kids */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                {t('kids')}
              </label>
              <input
                type="number"
                name="kids"
                min="0"
                value={formData.kids}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">
                {t('kidsAges')}
              </label>
              <input
                type="text"
                name="kidsAges"
                value={formData.kidsAges}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors"
                placeholder="2, 5, 8..."
              />
            </div>
          </div>

          {/* Other */}
          <div>
            <label className="block text-sm font-semibold text-ink mb-2">
              {t('other')}
            </label>
            <textarea
              name="other"
              value={formData.other}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border-2 border-turquoise/20 rounded-lg focus:border-turquoise focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
      </div>
    </div>
  );
}
