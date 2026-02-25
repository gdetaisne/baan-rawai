import { ReactNode } from 'react';

interface LuxuryLayoutProps {
  children: ReactNode;
}

/**
 * Capella x Raffles inspired layout:
 * - Deep ink outer background
 * - Centered paper column with rounded corners
 * - Max width 1040px
 */
export function LuxuryLayout({ children }: LuxuryLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0F1416] py-0 md:py-8 md:px-6">
      {/* Paper reading surface */}
      <div className="max-w-paper mx-auto bg-[#F7F4EE] md:rounded-luxury shadow-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}
