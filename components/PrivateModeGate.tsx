'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Lock, X, Eye, EyeOff } from 'lucide-react';
import { usePrivateMode } from '@/hooks/usePrivateMode';

interface PrivateModeGateProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivateModeGate({ isOpen, onClose }: PrivateModeGateProps) {
  const t = useTranslations('privateMode');
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const { unlock, isLoading, error } = usePrivateMode();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await unlock(passcode);
    if (success) {
      setPasscode('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-cream-50 border border-stone-200 p-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-ink transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center mb-6">
          <div className="p-4 border border-stone-200 bg-white">
            <Lock className="w-8 h-8 text-stone-600" />
          </div>
        </div>

        <h3 className="text-2xl font-display font-light text-center text-ink mb-2 tracking-wide">
          {t('title')}
        </h3>
        <p className="text-center text-stone-600 mb-8 text-sm">
          {t('description')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPasscode ? 'text' : 'password'}
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder={t('placeholder')}
              className="w-full px-4 py-3 border border-stone-200 bg-white text-ink focus:outline-none focus:border-ink transition-colors"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPasscode(!showPasscode)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-ink"
            >
              {showPasscode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={isLoading || !passcode}
            className="w-full px-6 py-3 bg-ink text-cream-50 hover:bg-ink/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm tracking-wider uppercase"
          >
            {isLoading ? t('loading') : t('unlock')}
          </button>
        </form>

        <p className="text-xs text-stone-400 text-center mt-6">
          {t('hint')}
        </p>
      </div>
    </div>
  );
}
