import { LuxuryHero } from '@/components/sections/LuxuryHero';
import { LuxuryBeforeArrival } from '@/components/sections/LuxuryBeforeArrival';
import { LuxuryArrival } from '@/components/sections/LuxuryArrival';
import { LuxuryRawai } from '@/components/sections/LuxuryRawai';
import { LuxuryBoats } from '@/components/sections/LuxuryBoats';
import { LuxuryDayPasses } from '@/components/sections/LuxuryDayPasses';
import { LuxuryAtHome } from '@/components/sections/LuxuryAtHome';
import { LuxuryGuestForm } from '@/components/sections/LuxuryGuestForm';

export default function HomePage() {
  return (
    <>
      <LuxuryHero />
      <LuxuryBeforeArrival />
      <LuxuryArrival />
      <LuxuryRawai />
      <LuxuryBoats />
      <LuxuryDayPasses />
      <LuxuryAtHome />
      <LuxuryGuestForm />

      {/* Footer */}
      <footer className="border-t border-hairline py-16 pb-28 md:pb-16 px-6 md:px-12 text-center bg-paper">
        <div className="max-w-5xl mx-auto">
          <div className="text-display-md font-display text-ink mb-4 tracking-tight">
            Baan Sayiuan
          </div>
          <div className="h-px w-16 bg-ink/20 mx-auto mb-4" />
          <p className="text-label text-muted">
            Rawai, Phuket
          </p>
        </div>
      </footer>
    </>
  );
}
