import { WarmHero } from '@/components/sections/WarmHero';
import { WelcomeHome } from '@/components/sections/WelcomeHome';
import { PhotoMoments } from '@/components/sections/PhotoMoments';
import { ThaiLexicon } from '@/components/sections/ThaiLexicon';
import { ExperienceGrid } from '@/components/sections/ExperienceGrid';
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
      <PhotoMoments />
      <ExperienceGrid />
      <ThaiLexicon />
      <LuxuryBeforeArrival />
      <LuxuryArrival />
      <LuxuryRawai />
      <LuxuryBoats />
      <LuxuryDayPasses />
      <LuxuryAtHome />
      <LuxuryGuestForm />

      {/* Guest Form Popup */}
      <GuestFormPopup />

      {/* Footer */}
      <footer className="border-t border-turquoise/10 py-16 pb-28 md:pb-16 px-6 md:px-12 text-center bg-gradient-to-br from-cream via-white to-cream">
        <div className="max-w-5xl mx-auto">
          <div className="font-display text-4xl text-ink mb-4 tracking-tight">
            Baan Sayiuan
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-turquoise to-coral mx-auto mb-4" />
          <p className="text-sm tracking-widest uppercase text-muted">
            Rawai, Phuket · บ้านเรา
          </p>
        </div>
      </footer>
    </>
  );
}
