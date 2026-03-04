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

type Activity = typeof siteConfig.activities[number];

function ActivityItem({ activity: a, index: i }: { activity: Activity; index: number }) {
  const inner = (
    <div className="group flex gap-5 items-start py-4 border-b border-border/40 last:border-0">
      <span
        className="text-ink/25 select-none mt-0.5 flex-shrink-0"
        style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', minWidth: '20px' }}
      >
        {String(i + 1).padStart(2, '0')}
      </span>
      <div className="flex-1">
        <p
          className="text-ink leading-snug mb-1"
          style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: '20px' }}
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
      {a.mapsLink && (
        <span
          className="text-accent/50 group-hover:text-accent transition-colors flex-shrink-0 mt-1"
          style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px', letterSpacing: '0.18em' }}
        >
          Maps ↗
        </span>
      )}
    </div>
  );

  if (a.mapsLink) {
    return (
      <a href={a.mapsLink} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return inner;
}

export function LuxuryRawai() {
  const t = useTranslations('rawai');

  return (
    <section id="our-rawai" className="border-t border-border bg-background">

      {/* ── Vidéo hero avec titre centré dessus ── */}
      <div className="relative w-full h-[360px] md:h-[520px] overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/IMG_7221.jpeg"
        >
          <source src="/IMG_0769.MOV" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Titre centré */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p
            className="uppercase tracking-[0.24em] text-white/60 mb-4"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
          >
            OUR RAWAI
          </p>
          <h2
            className="font-handwritten text-white"
            style={{ fontSize: 'clamp(64px, 9vw, 130px)', lineHeight: 1.0, fontWeight: 400 }}
          >
            {t('title')}
          </h2>
        </div>
      </div>

      {/* ── Beaches — grille 3 colonnes pleine largeur ── */}
      <div className="w-full">
        <div className="px-8 md:px-14 py-8">
          <h3
            className="font-handwritten text-ink"
            style={{ fontSize: 'clamp(64px, 9vw, 130px)', lineHeight: 1.0, fontWeight: 400 }}
          >
            Beaches
          </h3>
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
      {/* ── Food — Eat like a local ── */}
      <div className="border-t border-border">
        {/* Header */}
        <div className="px-8 md:px-14 pt-12 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p
              className="uppercase tracking-[0.24em] text-accent mb-3"
              style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
            >
              FOOD
            </p>
            <h3
              className="font-handwritten text-ink leading-none"
              style={{ fontSize: 'clamp(52px, 7vw, 100px)', fontWeight: 400 }}
            >
              {t('restaurants.title')}
            </h3>
          </div>
          <p
            className="text-muted max-w-xs leading-relaxed"
            style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px' }}
          >
            Our shortlist. Every single one tested and approved. All walkable or a short Grab ride away.
          </p>
        </div>

        {/* Restaurant cards — full-bleed grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {siteConfig.restaurants.map((r, i) => (
            <a
              key={i}
              href={r.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src={r.photo ?? '/placeholder-hero.jpg'}
                alt={r.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top label */}
              <div className="absolute top-5 left-5">
                <span
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 px-3 py-1 uppercase tracking-[0.2em]"
                  style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}
                >
                  {i === 0 ? 'Seafood' : i === 1 ? 'Italian' : 'French'}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="w-6 h-px bg-[#1E7A8C] mb-4 transition-all duration-500 group-hover:w-12" />
                <h4
                  className="text-white mb-2 leading-tight"
                  style={{ fontFamily: '"Ade Display", serif', fontWeight: 400, fontSize: 'clamp(22px, 2.5vw, 30px)' }}
                >
                  {r.name}
                </h4>
                <p
                  className="text-white/0 group-hover:text-white/75 transition-all duration-500 leading-relaxed"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, fontSize: '13px' }}
                >
                  {r.description}
                </p>
                <p
                  className="text-white/40 group-hover:text-white/80 transition-colors duration-300 mt-4 uppercase tracking-[0.2em]"
                  style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}
                >
                  Open in Maps ↗
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Activities & Wellness ── */}
      <div className="border-t border-border">

        {/* Header */}
        <div className="px-8 md:px-14 pt-12 pb-10">
          <p
            className="uppercase tracking-[0.24em] text-accent mb-3"
            style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300, fontSize: '10px' }}
          >
            ACTIVITIES & WELLNESS
          </p>
          <h3
            className="font-handwritten text-ink leading-none"
            style={{ fontSize: 'clamp(52px, 7vw, 100px)', fontWeight: 400 }}
          >
            Things to do
          </h3>
        </div>

        {/* Grid 2 col asymétrique — col gauche + col droite */}
        <div className="grid md:grid-cols-2 border-t border-border divide-y md:divide-y-0 md:divide-x divide-border">

          {/* ── Colonne gauche : SPORT + MARKET ── */}
          <div className="divide-y divide-border">
            {(['sport', 'market'] as const).map((cat) => (
              <div key={cat} className="px-8 md:px-14 py-10">
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-accent uppercase tracking-[0.22em]"
                    style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}>
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-accent/20" />
                </div>
                {siteConfig.activities.filter((a) => a.category === cat).map((a, i) => (
                  <ActivityItem key={i} activity={a} index={i} />
                ))}
              </div>
            ))}
          </div>

          {/* ── Colonne droite : WELLNESS + SHOPPING ── */}
          <div className="divide-y divide-border">
            {(['wellness', 'shopping'] as const).map((cat) => (
              <div key={cat} className="px-8 md:px-14 py-10">
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-accent uppercase tracking-[0.22em]"
                    style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9px' }}>
                    {cat}
                  </span>
                  <div className="flex-1 h-px bg-accent/20" />
                </div>
                {siteConfig.activities.filter((a) => a.category === cat).map((a, i) => (
                  <ActivityItem key={i} activity={a} index={i} />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
