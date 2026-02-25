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

      {/* Footer */}
      <footer className="border-t border-[#E8DCC4] py-16 pb-28 md:pb-16 px-6 md:px-12 text-center bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="font-display text-3xl text-[#1A1A1A] mb-4">
            Baan Sayiuan
          </div>
          <div className="h-px w-16 bg-[#D4846C] mx-auto mb-4" />
          <p className="text-sm tracking-wider uppercase text-[#737373]">
            Rawai, Phuket
          </p>
        </div>
      </footer>
    </>
  );
}
