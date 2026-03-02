import { WarmHero } from '@/components/sections/WarmHero';
import { WelcomeHome } from '@/components/sections/WelcomeHome';
import { PhotoBand } from '@/components/sections/PhotoBand';
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
      <LuxuryBeforeArrival />
      <LuxuryArrival />
      <LuxuryRawai />
      <ThaiLexicon />
      <LuxuryBoats />
      <LuxuryDayPasses />
      <LuxuryAtHome />
      <PhotoBand />
      <WelcomeHome />
      <LuxuryGuestForm />

      <GuestFormPopup />

      <footer className="border-t border-[#DDE8EA] py-20 pb-32 md:pb-20 px-6 md:px-12 text-center bg-[#F5F5F3]">
        <div className="max-w-content mx-auto">
          <p
            className="text-2xl text-[#1A1916] mb-5 tracking-wide"
            style={{ fontFamily: 'Gloock, serif', fontWeight: 400 }}
          >
            Baan Sayiuan
          </p>
          <div className="w-10 h-px bg-[#1E7A8C]/30 mx-auto mb-5" />
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#1E7A8C', opacity: 0.6 }}>
            RAWAI · PHUKET
          </p>
        </div>
      </footer>
    </>
  );
}
