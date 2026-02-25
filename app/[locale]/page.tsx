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
      <footer className="bg-gradient-tropical text-white py-16 pb-28 md:pb-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="text-5xl font-display mb-4">
            Baan Sayiuan
          </div>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-6 rounded-full" />
          <p className="text-white/70 text-lg font-fun">
            Rawai, Phuket 🏝️
          </p>
          <p className="text-white/50 text-sm mt-4">
            See you soon ☀️
          </p>
        </div>
      </footer>
    </main>
  );
}
