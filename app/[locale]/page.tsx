import { WarmHero } from '@/components/sections/WarmHero';
import { WelcomeHome } from '@/components/sections/WelcomeHome';
import { PhotoBand } from '@/components/sections/PhotoBand';
import { ThaiLexicon } from '@/components/sections/ThaiLexicon';
import { LuxuryBeforeArrival } from '@/components/sections/LuxuryBeforeArrival';
import { LuxuryArrival } from '@/components/sections/LuxuryArrival';
import { LuxuryRawai } from '@/components/sections/LuxuryRawai';
import { LuxuryDayPasses } from '@/components/sections/LuxuryDayPasses';
import { LuxuryAtHome } from '@/components/sections/LuxuryAtHome';
import { LuxuryGuestForm } from '@/components/sections/LuxuryGuestForm';
import { GuestFormPopup } from '@/components/GuestFormPopup';

export default function HomePage() {
  return (
    <>
      <WarmHero />
      <WelcomeHome />
      <LuxuryBeforeArrival />
      <LuxuryArrival />
      <LuxuryAtHome />
      <LuxuryRawai />
      <ThaiLexicon />
      <LuxuryDayPasses />
      <PhotoBand />
      <LuxuryGuestForm />

      <GuestFormPopup />

      <footer className="border-t border-border py-20 pb-32 md:pb-20 px-6 md:px-12 text-center bg-paper">
        <div className="max-w-content mx-auto">
          <p
            className="text-2xl text-ink mb-5 tracking-wide"
            style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}
          >
            Baan Sayiuan
          </p>
          <div className="w-10 h-px bg-accent/30 mx-auto mb-5" />
          <p style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#2E6B8A', opacity: 0.6 }}>
            RAWAI · PHUKET
          </p>
        </div>
      </footer>
    </>
  );
}
