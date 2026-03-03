'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

const beachMedia: { type: 'image' | 'video'; src: string }[] = [
  { type: 'video', src: '/IMG_2573.MOV'  },
  { type: 'video', src: '/IMG_0936.MOV'  },
  { type: 'video', src: '/IMG_0987.MOV'  },
];

const beachMapsLinks = [
  'https://maps.google.com/?q=Nai+Harn+Beach+Phuket',
  'https://maps.google.com/?q=Ya+Nui+Beach+Phuket',
  'https://maps.google.com/?q=Rawai+Beach+Phuket',
];

export function LuxuryRawai() {
  const t = useTranslations('rawai');

  return (
    <section id="our-rawai" className="border-t border-border bg-background">

      {/* ── Header ── */}
      <div className="px-8 md:px-14 pt-14 md:pt-20 pb-10">
        <p
          className="uppercase tracking-[0.24em] text-accent mb-8"
          style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
        >
          OUR RAWAI
        </p>
        <h2
          className="font-handwritten text-ink"
          style={{ fontSize: 'clamp(64px, 9vw, 130px)', lineHeight: 1.0, fontWeight: 400 }}
        >
          {t('title')}
        </h2>
      </div>

      {/* ── Vidéo pleine largeur ── */}
      <div className="w-full mb-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-[260px] md:h-[420px] object-cover"
          poster="/IMG_7221.jpeg"
        >
          <source src="/IMG_0987.MOV" type="video/mp4" />
        </video>
      </div>

      {/* ── Beaches — grille 3 colonnes pleine largeur ── */}
      <div className="w-full">
        <div className="px-8 md:px-14 py-6">
          <p
            className="uppercase tracking-[0.24em] text-accent"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
          >
            BEACHES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {siteConfig.beaches.map((beach, i) => (
            <a
              key={i}
              href={beachMapsLinks[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Photo ou Vidéo */}
              {beachMedia[i % beachMedia.length].type === 'video' ? (
                <video
                  autoPlay muted loop playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={beachMedia[i % beachMedia.length].src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={beachMedia[i % beachMedia.length].src}
                  alt={beach.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              )}
              {/* Overlay dégradé bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Texte superposé */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="text-white leading-tight mb-1"
                  style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 22px)' }}
                >
                  {beach.name}
                </p>
                <p
                  className="text-white/65"
                  style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px', letterSpacing: '0.1em' }}
                >
                  {beach.description}
                </p>
                <p
                  className="text-white/40 mt-2 group-hover:text-white/80 transition-colors duration-300"
                  style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  Maps ↗
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border px-8 md:px-14 py-10 md:py-12 grid md:grid-cols-2 gap-10 md:gap-16">

        {/* Restos */}
        <div>
          <p
            className="uppercase tracking-[0.24em] text-accent mb-6"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
          >
            FOOD
          </p>
          <h3
            className="text-ink mb-6"
            style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: '22px' }}
          >
            {t('restaurants.title')}
          </h3>
        <div className="divide-y divide-border">
            {siteConfig.restaurants.map((r, i) => (
              <a
                key={i}
                href={r.mapsLink !== '#' ? r.mapsLink : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`group py-4 flex items-center gap-5 ${r.mapsLink !== '#' ? 'cursor-pointer' : ''}`}
              >
                {/* Photo */}
                <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden">
                  <Image
                    src={r.photo ?? '/placeholder-hero.jpg'}
                    alt={r.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-ink text-[14px]" style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}>{r.name}</p>
                  <p className="text-muted text-[12px] mt-0.5" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }}>{r.description}</p>
                </div>
                {r.mapsLink !== '#' && (
                  <span
                    className="text-accent group-hover:text-ink transition-colors flex-shrink-0"
                    style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.14em' }}
                  >
                    Maps ↗
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Spas */}
        <div>
          <p
            className="uppercase tracking-[0.24em] text-accent mb-6"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
          >
            WELLNESS
          </p>
          <h3
            className="text-ink mb-2"
            style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: '22px' }}
          >
            {t('spas.title')}
          </h3>
          <p className="text-muted text-[13px] mb-6" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }}>{t('spas.bookingNote')}</p>
          <div className="divide-y divide-border">
            {siteConfig.spas.map((s, i) => (
              <div key={i} className="py-4">
                <p className="text-ink text-[14px]" style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}>{s.name}</p>
                <p className="text-muted text-[12px] mt-0.5" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Activities ── */}
      <div className="border-t border-border px-8 md:px-14 py-10 md:py-12">
        <p
          className="uppercase tracking-[0.24em] text-accent mb-8"
          style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
        >
          ACTIVITIES
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 divide-y sm:divide-y-0 border-t border-border">
          {siteConfig.activities.map((a, i) => (
            <div key={i} className="py-5 pr-8 border-b border-border">
              <p
                className="uppercase tracking-[0.16em] text-accent mb-1"
                style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '9px' }}
              >
                {a.category}
              </p>
              <p
                className="text-ink mb-1"
                style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: '18px' }}
              >
                {a.name}
              </p>
              <p
                className="text-muted leading-[1.65]"
                style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '12px' }}
              >
                {a.note}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
