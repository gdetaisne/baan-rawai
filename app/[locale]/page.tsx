import { WarmHero } from '@/components/sections/WarmHero';
import { WelcomeHome } from '@/components/sections/WelcomeHome';
import { ExperienceGrid } from '@/components/sections/ExperienceGrid';
import { ThaiLexicon } from '@/components/sections/ThaiLexicon';
import { LuxuryBeforeArrival } from '@/components/sections/LuxuryBeforeArrival';
import { LuxuryArrival } from '@/components/sections/LuxuryArrival';
import { LuxuryRawai } from '@/components/sections/LuxuryRawai';
import { LuxuryBoats } from '@/components/sections/LuxuryBoats';
import { LuxuryDayPasses } from '@/components/sections/LuxuryDayPasses';
import { LuxuryAtHome } from '@/components/sections/LuxuryAtHome';
import { LuxuryGuestForm } from '@/components/sections/LuxuryGuestForm';
import { GuestFormPopup } from '@/components/GuestFormPopup';

export default function HomePage() {
  return (
    <>
      <WarmHero />
      <WelcomeHome />
      <ExperienceGrid />
      <ThaiLexicon />
      <LuxuryBeforeArrival />
      <LuxuryArrival />
      <LuxuryRawai />
      <LuxuryBoats />
      <LuxuryDayPasses />
      <LuxuryAtHome />
      <LuxuryGuestForm />
      
      {/* Guest Form Popup - THE differentiator */}
      <GuestFormPopup />

      {/* Minimal Footer */}
      <footer className="border-t border-black/5 py-20 pb-32 md:pb-20 px-8 md:px-12 text-center bg-paper">
        <div className="max-w-content mx-auto">
          <div className="font-display text-2xl text-ink mb-6 tracking-[0.1em]">
            BAAN SAYIUAN
          </div>
          <div className="h-px w-12 bg-ink/20 mx-auto mb-6" />
          <p className="text-label text-muted">
            RAWAI · PHUKET
          </p>
        </div>
      </footer>
    </>
  );
}
