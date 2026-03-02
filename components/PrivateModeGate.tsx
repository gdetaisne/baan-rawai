'use client';

import { ReactNode, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Lock, X, Eye, EyeOff } from 'lucide-react';
import { usePrivateMode } from '@/hooks/usePrivateMode';
import { Button } from '@/components/ui/Button';

interface PrivateModeGateProps {
  children: (data: { isUnlocked: boolean; doorCode: string; wifiPassword: string; openModal: () => void }) => ReactNode;
}

export function PrivateModeGate({ children }: PrivateModeGateProps) {
  const [showModal, setShowModal] = useState(false);
  const { isUnlocked, doorCode, wifiPassword, unlock, isLoading, error } = usePrivateMode();
  const [passcode, setPasscode] = useState('');
  const [show, setShow] = useState(false);
  const t = useTranslations('privateMode');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await unlock(passcode);
    if (ok) { setPasscode(''); setShowModal(false); }
  };

  return (
    <>
      {children({ isUnlocked, doorCode, wifiPassword, openModal: () => setShowModal(true) })}

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-[#1A1916]/30 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative w-full max-w-md bg-white border border-[#DDE8EA] p-8 shadow-xl">
            <button onClick={() => setShowModal(false)} className="absolute top-5 right-5 text-[#7A766E] hover:text-[#1A1916]">
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 border border-[#DDE8EA] flex items-center justify-center mx-auto mb-6">
              <Lock className="w-5 h-5 text-[#1E7A8C]" />
            </div>

            <h3 className="text-display-sm text-[#1A1916] text-center mb-3">{t('title')}</h3>
            <p className="text-body text-[#7A766E] text-center mb-8">{t('description')}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  value={passcode}
                  onChange={e => setPasscode(e.target.value)}
                  placeholder={t('placeholder')}
                  className="field-box w-full pr-12"
                  disabled={isLoading}
                />
                <button type="button" onClick={() => setShow(!show)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9BBAC0] hover:text-[#7A766E] transition-colors">
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {error && <p className="text-sm text-[#1E7A8C] text-center">{error}</p>}
              <Button type="submit" variant="primary" size="default" className="w-full">
                {isLoading ? t('loading') : t('unlock')}
              </Button>
            </form>
            <p className="text-xs text-[#9BBAC0] text-center mt-5">{t('hint')}</p>
          </div>
        </div>
      )}
    </>
  );
}
