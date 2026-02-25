'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface PhotoMoment {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const moments: PhotoMoment[] = [
  {
    image: '/IMG_7234.jpeg',
    title: 'Crystal Waters',
    description: 'Discover pristine beaches just minutes from home. Nai Harn, Ya Nui, and Ao Sane offer the clearest waters in Phuket.',
  },
  {
    image: '/IMG_3365.jpeg',
    title: 'Island Dreams',
    description: 'Hop between hidden islands on a traditional longtail boat. Coral Island, Koh Bon, and Racha await.',
    reverse: true,
  },
  {
    image: '/IMG_1458.jpeg',
    title: 'Local Soul',
    description: 'Experience authentic Thai culture. From street food to temple visits, Rawai keeps it real.',
  },
];

export function PhotoMoments() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          {moments.map((moment, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32 last:mb-0 px-6 md:px-16 ${
                moment.reverse ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden hover-zoom cursor-pointer group ${
                  moment.reverse ? 'md:col-start-2' : ''
                }`}
                onClick={() => setLightboxImage(moment.image)}
              >
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8 text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={`${moment.reverse ? 'md:col-start-1 md:row-start-1' : ''} animate-fade-in`}>
                <div className="inline-block px-4 py-2 bg-coral/10 text-coral text-sm font-semibold tracking-wide rounded-full mb-6">
                  MOMENT {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="text-display-md mb-6">
                  {moment.title}
                </h2>
                <p className="text-body-lg text-muted leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-deep/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
