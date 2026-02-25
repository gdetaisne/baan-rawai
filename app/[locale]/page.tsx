import { PaperLayout } from '@/components/PaperLayout';
import { AnchorNav } from '@/components/AnchorNav';
import { Hero } from '@/components/sections/Hero';
import { MosaicGallery } from '@/components/MosaicGallery';
import { BeforeArrival } from '@/components/sections/BeforeArrival';
import { Arrival } from '@/components/sections/Arrival';
import { OurRawai } from '@/components/sections/OurRawai';
import { Boats } from '@/components/sections/Boats';
import { DayPasses } from '@/components/sections/DayPasses';
import { AtHome } from '@/components/sections/AtHome';
import { GuestForm } from '@/components/sections/GuestForm';

export default function HomePage() {
  // Gallery images
  const galleryImages = [
    { src: '/IMG_1458.jpeg', alt: 'Baan Sayiuan' },
    { src: '/IMG_3154.jpeg', alt: 'Baan Sayiuan' },
    { src: '/IMG_3365.jpeg', alt: 'Baan Sayiuan' },
    { src: '/IMG_7234.jpeg', alt: 'Baan Sayiuan' },
    { src: '/IMG_9878.jpeg', alt: 'Baan Sayiuan' },
    { src: '/db493aea-9a84-40eb-876c-c82f13e6147f.jpg', alt: 'Baan Sayiuan' },
  ];

  return (
    <PaperLayout>
      <Hero />
      <AnchorNav />
      <BeforeArrival />
      <MosaicGallery images={galleryImages} />
      <Arrival />
      <OurRawai />
      <Boats />
      <DayPasses />
      <AtHome />
      <GuestForm />

      {/* Footer */}
      <footer className="border-t border-[#E8E1D8] py-12 pb-28 md:pb-12 px-6 md:px-12 text-center">
        <div className="text-2xl font-display font-light text-[#1F2A28] mb-3 tracking-wide">
          Baan Sayiuan
        </div>
        <div className="h-px w-16 bg-[#D6C2B0] mx-auto mb-3" />
        <p className="text-xs tracking-widest uppercase text-[#7A8A8F]">
          Rawai, Phuket
        </p>
      </footer>
    </PaperLayout>
  );
}
