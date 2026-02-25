'use client';

import { create } from 'zustand';

interface PrivateSecrets {
  doorCode: string;
  wifiPassword: string;
}

interface PrivateModeStore {
  isUnlocked: boolean;
  secrets: PrivateSecrets | null;
  isLoading: boolean;
  error: string | null;
  unlock: (passcode: string) => Promise<boolean>;
  reset: () => void;
}

export const usePrivateMode = create<PrivateModeStore>((set) => {
  // Check sessionStorage on initialization
  const stored = typeof window !== 'undefined' ? sessionStorage.getItem('privateMode') : null;
  const initialSecrets = stored ? JSON.parse(stored) : null;

  return {
    isUnlocked: !!initialSecrets,
    secrets: initialSecrets,
    isLoading: false,
    error: null,

    unlock: async (passcode: string) => {
      set({ isLoading: true, error: null });

      try {
        const response = await fetch('/api/private', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ passcode }),
        });

        if (!response.ok) {
          const data = await response.json();
          set({ error: data.error || 'Incorrect passcode', isLoading: false });
          return false;
        }

        const secrets = await response.json();
        
        // Store in sessionStorage
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('privateMode', JSON.stringify(secrets));
        }

        set({ isUnlocked: true, secrets, isLoading: false, error: null });
        return true;
      } catch (error) {
        set({ error: 'Connection error', isLoading: false });
        return false;
      }
    },

    reset: () => {
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('privateMode');
      }
      set({ isUnlocked: false, secrets: null, error: null });
    },
  };
});
