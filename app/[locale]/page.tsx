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
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <>
      <WarmHero />
      <WelcomeHome />
      <LuxuryBeforeArrival />
      <LuxuryArrival />
      <LuxuryAtHome />
      <LuxuryRawai />
      <LuxuryDayPasses />
      <PhotoBand />
      <LuxuryGuestForm />
      <ThaiLexicon />

      <GuestFormPopup />

      <footer className="border-t border-border py-20 pb-32 md:pb-20 px-6 md:px-12 bg-paper">
        <div className="max-w-content mx-auto flex flex-col items-center gap-5 text-center">

          {/* Wordmark — même style que le header (h1 → Ade Display) */}
          <h2 className="font-light text-xl text-ink tracking-[0.1em]" style={{ fontWeight: 300 }}>
            {siteConfig.name.toUpperCase()}
          </h2>

          <div className="w-10 h-px bg-accent/30" />

          {/* Adresse complète */}
          <div className="flex flex-col items-center gap-1">
            <a
              href={siteConfig.maps.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#2E6B8A', opacity: 0.7 }}
            >
              59/45 Soi Sayiuan 13
            </a>
            <span
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#2E6B8A', opacity: 0.5 }}
            >
              Rawai · Phuket 83130 · Thailand
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}
