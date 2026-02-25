'use client';

import { ReactNode, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Lock, X, Eye, EyeOff } from 'lucide-react';
import { usePrivateMode } from '@/hooks/usePrivateMode';
import { Button } from '@/components/ui/Button';

interface PrivateModeGateProps {
  children: (data: {
    isUnlocked: boolean;
    doorCode: string;
    wifiPassword: string;
    openModal: () => void;
  }) => ReactNode;
}

/**
 * Render prop component that provides private data and unlock modal.
 */
export function PrivateModeGate({ children }: PrivateModeGateProps) {
  const [showModal, setShowModal] = useState(false);
  const { isUnlocked, doorCode, wifiPassword, unlock, isLoading, error } = usePrivateMode();
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const t = useTranslations('privateMode');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await unlock(passcode);
    if (success) {
      setPasscode('');
      setShowModal(false);
    }
  };

  return (
    <>
      {children({
        isUnlocked,
        doorCode,
        wifiPassword,
        openModal: () => setShowModal(true),
      })}

      {/* Unlock modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0F1416]/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md bg-paper border border-hairline p-8 md:rounded-luxury shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-muted hover:text-ink transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center mb-6">
              <div className="p-4 border border-hairline bg-highlight rounded-luxury">
                <Lock className="w-8 h-8 text-ink" />
              </div>
            </div>

            <h3 className="font-display text-display-sm text-center text-ink mb-3 tracking-tight">
              {t('title')}
            </h3>
            <p className="text-center text-muted mb-8 text-sm leading-relaxed">
              {t('description')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={showPasscode ? 'text' : 'password'}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder={t('placeholder')}
                  className="w-full px-4 py-3.5 border border-hairline bg-white text-ink focus:outline-none focus:border-accent transition-colors rounded-luxury"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors"
                >
                  {showPasscode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {error && <p className="text-sm text-accent text-center">{error}</p>}

              <Button
                type="submit"
                variant="primary"
                size="default"
                className="w-full"
              >
                {isLoading ? t('loading') : t('unlock')}
              </Button>
            </form>

            <p className="text-xs text-muted text-center mt-6">{t('hint')}</p>
          </div>
        </div>
      )}
    </>
  );
}
