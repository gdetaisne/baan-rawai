import { Hero } from '@/components/sections/Hero';
import { Welcome } from '@/components/sections/Welcome';
import { PhotoGrid } from '@/components/PhotoGrid';
import { ContactBar } from '@/components/ContactBar';
import { BeforeArrival } from '@/components/sections/BeforeArrival';
import { Arrival } from '@/components/sections/Arrival';
import { OurRawai } from '@/components/sections/OurRawai';
import { Boats } from '@/components/sections/Boats';
import { DayPasses } from '@/components/sections/DayPasses';
import { LiveLikeUs } from '@/components/sections/LiveLikeUs';
import { AtHome } from '@/components/sections/AtHome';
import { GuestForm } from '@/components/sections/GuestForm';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Welcome />
      <PhotoGrid />
      <ContactBar />
      <BeforeArrival />
      <Arrival />
      <PhotoGrid />
      <OurRawai />
      <Boats />
      <DayPasses />
      <LiveLikeUs />
      <AtHome />
      <GuestForm />

      {/* Footer */}
      <footer className="bg-ink-green text-background py-16 pb-28 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-4xl font-display font-light tracking-widest uppercase mb-6">
            Baan Sayiuan
          </div>
          <div className="w-16 h-px bg-clay/30 mx-auto mb-6" />
          <p className="text-clay/60 text-sm tracking-wide">
            Rawai, Phuket
          </p>
        </div>
      </footer>
    </main>
  );
}
