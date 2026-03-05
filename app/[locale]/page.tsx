'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Locale = 'fr' | 'en';

const CONTENT = {
  en: {
    brand: 'BAAN SAYIUAN',
    chapter: 'Chapter',
    nav: ['Welcome', 'Before Arrival', 'At The Villa', 'Curated Rawai', 'Day Passes', 'Guest Form'],
    heroTitle1: 'BAAN SAYIUAN',
    heroTitle2: '',
    heroScript: 'Welcome home',
    heroAddress: '59/45 Soi Sayiuan 13 Rawai Phuket',
    heroWhatsappLucie: 'WhatsApp Lucie',
    heroWhatsappGuillaume: 'WhatsApp Guillaume',
    postcardLine: 'chasing a soft lemon breeze for the day',
    welcomeTitle: 'WELCOME HOME',
    welcomeStory1:
      'Baan Sayiuan is our home and, during your stay, it is yours. We designed every detail to feel calm, effortless and beautiful.',
    welcomeStory2:
      'Towels are in the bathroom, WiFi details are available in private mode, and the best sunset spot is five minutes away.',
    welcomeSignature: 'Lucie & Guillaume',
    beforeTitle: 'BEFORE ARRIVAL',
    arrivalTitle: 'AT THE VILLA',
    rawaiTitle: 'CURATED RAWAI',
    passesTitle: 'DAY PASSES',
    formTitle: 'GUEST PREFERENCES',
    slowGuideLine1: 'A SLOW GUIDE',
    slowGuideLine2: 'TO RAWAI',
    beachesLabel: 'Beaches',
    restaurantsLabel: 'Restaurants',
    activitiesLabel: 'Activities',
    arrivalDate: 'Arrival date & time',
    flightNumber: 'Flight number',
    breakfast: 'Breakfast preferences',
    juice: 'Favorite juice',
    cocktail: 'Favorite cocktail',
    allergies: 'Allergies',
    kids: 'Kids',
    kidsAges: 'Kids ages',
    otherNotes: 'Other notes',
    unlockPrivate: 'Unlock private mode',
    passcodePlaceholder: 'Enter passcode',
    unlock: 'Unlock',
    close: 'Close',
    privateHint: 'Door code and WiFi password are protected.',
    wifiNetwork: 'WiFi network',
    wifiPassword: 'WiFi password',
    doorCode: 'Door code',
    lockedLabel: 'Locked',
    atmTitle: 'ATM TIP',
    atmText:
      "Always choose 'Without conversion'. The ATM gives cash first, then the card: take both before leaving.",
    dayPassIntro:
      'A day pass gives access to a luxury hotel without booking a room: pool, beach club and food credit included.',
    submit: 'Send',
    thankYou: 'Thanks, your form was sent.',
    whatsapp: 'WhatsApp',
    directions: 'Directions',
  },
  fr: {
    brand: 'BAAN SAYIUAN',
    chapter: 'Chapitre',
    nav: ['Bienvenue', "Avant l'arrivée", 'À la villa', 'Rawai', 'Day pass', 'Formulaire'],
    heroTitle1: 'BAAN SAYIUAN',
    heroTitle2: '',
    heroScript: 'Welcome home',
    heroAddress: '59/45 Soi Sayiuan 13 Rawai Phuket',
    heroWhatsappLucie: 'WhatsApp Lucie',
    heroWhatsappGuillaume: 'WhatsApp Guillaume',
    postcardLine: 'a la poursuite d une brise doree pour la journee',
    welcomeTitle: 'BIENVENUE',
    welcomeStory1:
      'Baan Sayiuan est notre maison, et pendant votre séjour elle devient la vôtre. Chaque détail est pensé pour être simple, calme et beau.',
    welcomeStory2:
      'Les serviettes sont dans la salle de bain, les infos WiFi sont en mode privé, et le meilleur coucher de soleil est à cinq minutes.',
    welcomeSignature: 'Lucie & Guillaume',
    beforeTitle: "AVANT L'ARRIVEE",
    arrivalTitle: 'A LA VILLA',
    rawaiTitle: 'CURATED RAWAI',
    passesTitle: 'DAY PASS',
    formTitle: 'PREFERENCES INVITES',
    slowGuideLine1: 'UN GUIDE LENT',
    slowGuideLine2: 'DE RAWAI',
    beachesLabel: 'Plages',
    restaurantsLabel: 'Restaurants',
    activitiesLabel: 'Activites',
    arrivalDate: "Date et heure d'arrivee",
    flightNumber: 'Numero de vol',
    breakfast: 'Preferences petit-dejeuner',
    juice: 'Jus prefere',
    cocktail: 'Cocktail prefere',
    allergies: 'Allergies',
    kids: 'Enfants',
    kidsAges: 'Ages des enfants',
    otherNotes: 'Autres notes',
    unlockPrivate: 'Déverrouiller le mode privé',
    passcodePlaceholder: 'Entrer le code',
    unlock: 'Déverrouiller',
    close: 'Fermer',
    privateHint: 'Le code porte et le mot de passe WiFi sont protégés.',
    wifiNetwork: 'Réseau WiFi',
    wifiPassword: 'Mot de passe WiFi',
    doorCode: 'Code porte',
    lockedLabel: 'Protégé',
    atmTitle: 'CONSEIL ATM',
    atmText:
      "Toujours choisir 'Without conversion'. Le distributeur donne d'abord le cash, puis la carte: récupérez les deux.",
    dayPassIntro:
      "Un day pass donne accès à un hôtel de luxe sans réserver de chambre: piscine, beach club et crédit restauration inclus.",
    submit: 'Envoyer',
    thankYou: 'Merci, le formulaire est envoyé.',
    whatsapp: 'WhatsApp',
    directions: 'Itinéraire',
  },
} as const;

const BEFORE_ARRIVAL = [
  {
    title: 'eSIM',
    description: 'Install before takeoff so you are connected right after landing.',
    cta: 'Holafly',
    link: 'https://esim.holafly.com/fr/esim-thailande/',
  },
  {
    title: 'Airport Taxi',
    description: 'We can arrange your taxi at 700 THB.',
    cta: 'Guest form',
    link: '#guest-form',
  },
  {
    title: 'TDAC',
    description: 'Fill the official arrival card before your flight.',
    cta: 'Official TDAC',
    link: 'https://tdac.immigration.go.th/arrival-card/#/tac/arrival-card/add',
  },
  {
    title: 'Grab',
    description: 'Essential app for transport and delivery in Thailand.',
    cta: 'Download Grab',
    link: 'https://www.grab.com/th/en/download/',
  },
];

const BEACHES = [
  'Nai Harn - Best swimming, beach massages and many restaurants.',
  'Ya Nui - Secret cove, snorkeling, kayak and the best mango passion fruit shake.',
  'Rawai - Sunset restaurants and departure point for longtail and speedboats.',
];

const RESTAURANTS = [
  { name: "Nikita's", maps: 'https://maps.google.com/?q=Nikita%27s+Restaurant+Rawai+Phuket' },
  { name: 'Locanda del Pescatore', maps: 'https://maps.google.com/?q=Locanda+del+Pescatore+Rawai+Phuket' },
  { name: 'Le Celtique', maps: 'https://maps.google.com/?q=Le+Celtique+Rawai+Phuket' },
];

const ACTIVITIES = [
  'Muay Thai - Tiger Muay Thai',
  'Ayurveda - Naga Ayurveda',
  'Yoga - Prana Yoga',
  'Pilates - Studio 36',
  'Massages - Local recommendation',
  'Jungceylon - Patong mall',
  'Central Festival - Phuket Town mall',
  'Naka Weekend Market - Street food and local crafts',
];

const DAY_PASSES = [
  { name: 'The Nai Harn', price: 'from 2,500 THB', detail: 'Infinity pool, sunbeds/towels, restaurant credit, gym' },
  { name: 'Kata Rocks', price: 'from 3,500 THB', detail: 'Pool, sunbeds, food/drink credit, gym/spa' },
  { name: 'Sri Panwa', price: 'from 3,000 THB', detail: 'Multiple pools, beach club, food credit, tuk-tuk shuttle' },
];

const ACCESS = {
  wifiNetwork: 'Minou_5G',
  wifiPassword: process.env.NEXT_PUBLIC_WIFI_PASSWORD || '',
  doorCode: process.env.NEXT_PUBLIC_DOOR_CODE || '',
};

export default function HomePage() {
  const params = useParams<{ locale: string }>();
  const locale = (params?.locale === 'fr' ? 'fr' : 'en') as Locale;
  const t = CONTENT[locale];

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    arrival: '',
    flightNumber: '',
    taxi: 'yes',
    breakfast: '',
    juice: '',
    cocktail: '',
    allergies: '',
    kids: '',
    kidsAges: '',
    other: '',
  });

  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>('[data-cinematic-video]');
    videos.forEach((video) => {
      const targetRate = Number(video.dataset.rate ?? '0.9');
      const applyRate = () => {
        video.playbackRate = targetRate;
      };

      applyRate();
      video.addEventListener('loadedmetadata', applyRate);
      (video as HTMLVideoElement & { __rateHandler?: () => void }).__rateHandler = applyRate;
    });

    return () => {
      videos.forEach((video) => {
        const handler = (video as HTMLVideoElement & { __rateHandler?: () => void }).__rateHandler;
        if (handler) {
          video.removeEventListener('loadedmetadata', handler);
        }
      });
    };
  }, []);

  const submitGuestForm = async (e: FormEvent) => {
    e.preventDefault();
    setSent(false);
    const res = await fetch('/api/guest-form', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#efede8] text-[#1f1b18]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#f6f2ec]/20 bg-[#13100e]/55 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1160px] items-center justify-between px-4 md:px-8">
          <p className="font-display text-lg uppercase tracking-[0.06em] text-[#f6f2ec]">{t.brand}</p>
          <div className="hidden items-center gap-5 md:flex">
            <nav className="flex gap-5">
              <a href="#welcome" className="font-label text-[10px] uppercase tracking-[0.22em] text-[#f6f2ec]/85">
                {t.nav[0]}
              </a>
              <a href="#before-arrival" className="font-label text-[10px] uppercase tracking-[0.22em] text-[#f6f2ec]/85">
                {t.nav[1]}
              </a>
              <a href="#arrival" className="font-label text-[10px] uppercase tracking-[0.22em] text-[#f6f2ec]/85">
                {t.nav[2]}
              </a>
              <a href="#rawai" className="font-label text-[10px] uppercase tracking-[0.22em] text-[#f6f2ec]/85">
                {t.nav[3]}
              </a>
              <a href="#day-passes" className="font-label text-[10px] uppercase tracking-[0.22em] text-[#f6f2ec]/85">
                {t.nav[4]}
              </a>
              <a href="#guest-form" className="font-label text-[10px] uppercase tracking-[0.22em] text-[#f6f2ec]/85">
                {t.nav[5]}
              </a>
            </nav>
            <div className="flex items-center rounded-full border border-[#f6f2ec]/30 p-0.5">
              <a
                href="/fr"
                className={`font-label rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] ${
                  locale === 'fr' ? 'bg-[#f6f2ec] text-[#13100e]' : 'text-[#f6f2ec]/85'
                }`}
              >
                FR
              </a>
              <a
                href="/en"
                className={`font-label rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] ${
                  locale === 'en' ? 'bg-[#f6f2ec] text-[#13100e]' : 'text-[#f6f2ec]/85'
                }`}
              >
                EN
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/fr"
              className={`font-label rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] ${
                locale === 'fr' ? 'border-[#f6f2ec] bg-[#f6f2ec] text-[#13100e]' : 'border-[#f6f2ec]/40 text-[#f6f2ec]'
              }`}
            >
              FR
            </a>
            <a
              href="/en"
              className={`font-label rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] ${
                locale === 'en' ? 'border-[#f6f2ec] bg-[#f6f2ec] text-[#13100e]' : 'border-[#f6f2ec]/40 text-[#f6f2ec]'
              }`}
            >
              EN
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          data-cinematic-video
          data-rate="0.8"
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder-hero.jpg"
        >
          <source src="/IMG_2903-web.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#1f1b18]/34" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_42%)]" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 pt-24 md:px-10 md:pb-14 md:pt-24">
          <div className="max-w-[920px]">
            <h1 className="font-display text-[#f6f2ec] uppercase leading-[0.9] tracking-[0.018em] text-[13.5vw] md:text-[110px]">
              {t.heroTitle1}
            </h1>
            <p className="font-script mt-3 text-5xl leading-none text-[#f6f2ec]/95 md:text-7xl">{t.heroScript}</p>

            <div className="mt-6 max-w-[520px] rounded-[2px] border border-[#f6f2ec]/35 bg-[#13100e]/32 p-4 backdrop-blur-sm md:p-5">
              <p className="font-label text-[9px] uppercase tracking-[0.26em] text-[#f6f2ec]/72">Address</p>
              <p className="mt-2 text-[15px] text-[#f6f2ec] md:text-[16px]">{t.heroAddress}</p>
              <div className="mt-4 grid gap-2 md:grid-cols-2">
                <a
                  href="https://wa.me/66952824035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label rounded border border-[#f6f2ec]/28 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#f6f2ec]"
                >
                  {t.heroWhatsappLucie}
                </a>
                <a
                  href="https://wa.me/33633046059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label rounded border border-[#f6f2ec]/28 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#f6f2ec]"
                >
                  {t.heroWhatsappGuillaume}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="welcome" className="premium-section relative overflow-hidden px-5 py-16 md:px-10 md:py-24">
        <div className="section-shell">
          <p className="section-kicker mb-4">{t.welcomeTitle}</p>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <article className="md:col-span-5">
              <div className="paper-card p-3 md:p-4">
                <div className="border border-[#1f1b18]/18 bg-[#fbf8f2] p-2">
                  <video
                    className="h-[220px] w-full object-cover md:h-[280px]"
                    data-cinematic-video
                    data-rate="0.9"
                    preload="metadata"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/IMG_2901-web.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="paper-card mt-4 p-4 md:p-5">
                <div className="grid grid-cols-[1fr_auto] gap-4 border border-[#1f1b18]/18 bg-[#f8f4ed] p-4 md:p-5">
                  <div>
                    <p className="font-display text-[28px] uppercase leading-[0.9] tracking-[0.02em] md:text-[34px]">POSTCARD</p>
                    <p className="font-label mt-1 text-[8px] uppercase tracking-[0.24em] text-[#1f1b18]/55">
                      this space for writing messages
                    </p>

                    <p className="font-script mt-8 max-w-[290px] text-[42px] leading-[0.82] text-[#1f1b18]/92">
                      {t.postcardLine}
                    </p>
                  </div>

                  <div className="w-[94px] md:w-[110px]">
                    <div className="h-[70px] border border-[#1f1b18]/22 md:h-[82px]" />
                    <p className="font-label mt-2 text-[7px] uppercase tracking-[0.22em] text-[#1f1b18]/55">place stamp here</p>
                  </div>

                  <div className="col-span-2 mt-4 grid gap-3 md:grid-cols-[1fr_1fr]">
                    <div className="border-t border-[#1f1b18]/20 pt-2">
                      <p className="font-label text-[8px] uppercase tracking-[0.22em] text-[#1f1b18]/52">to</p>
                    </div>
                    <div className="space-y-3">
                      <div className="border-b border-[#1f1b18]/28" />
                      <div className="border-b border-[#1f1b18]/28" />
                      <div className="border-b border-[#1f1b18]/28" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="paper-card p-5 md:col-span-4 md:p-7">
              <p className="section-title mt-5">
                {t.slowGuideLine1}
                <br />
                {t.slowGuideLine2}
              </p>
              <div className="mt-6 border-t border-[#1f1b18]/25 pt-4">
                <p className="text-[14px] leading-[1.75] text-[#1f1b18]/78 md:text-[15px]">{t.welcomeStory1}</p>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#1f1b18]/78 md:text-[15px]">{t.welcomeStory2}</p>
                <p className="font-script mt-5 text-5xl text-[#1f1b18]/90 md:text-6xl">{t.welcomeSignature}</p>
              </div>
            </article>

            <article className="paper-card cinematic-frame p-3 md:col-span-3 md:p-4">
              <video
                className="cinematic-video h-[220px] w-full object-cover md:h-[260px]"
                data-cinematic-video
                data-rate="0.9"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/IMG_2902-web.mp4" type="video/mp4" />
              </video>
              <div className="mt-4 border-t border-[#1f1b18]/20 pt-3" />
            </article>
          </div>
        </div>
      </section>

      <section id="before-arrival" className="premium-section px-5 py-16 md:px-10 md:py-24">
        <div className="section-shell">
          <p className="section-kicker mb-3">{t.chapter} 02</p>
          <p className="section-title">{t.beforeTitle}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {BEFORE_ARRIVAL.map((item) => (
              <article key={item.title} className="paper-card p-5 md:p-7">
                <p className="font-display text-[26px] uppercase">{item.title}</p>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#1f1b18]/78">{item.description}</p>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-label mt-5 inline-block text-[10px] uppercase tracking-[0.24em] text-[#1f1b18]"
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="arrival" className="premium-section px-5 py-16 md:px-10 md:py-24">
        <div className="section-shell">
          <p className="section-kicker mb-3">{t.chapter} 03</p>
          <p className="section-title">{t.arrivalTitle}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-12">
            <article className="paper-card p-6 md:col-span-8">
              <p className="font-label text-[10px] uppercase tracking-[0.26em] text-[#1f1b18]/65">{t.privateHint}</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-md border border-[#1f1b18]/14 p-4">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em]">{t.wifiNetwork}</p>
                  <p className="mt-2 text-lg">{ACCESS.wifiNetwork}</p>
                </div>
                <div className="rounded-md border border-[#1f1b18]/14 p-4">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em]">{t.wifiPassword}</p>
                  <p className="mt-2 text-lg">{ACCESS.wifiPassword || '-'}</p>
                </div>
                <div className="rounded-md border border-[#1f1b18]/14 p-4 md:col-span-2">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em]">{t.doorCode}</p>
                  <p className="mt-2 text-lg">{ACCESS.doorCode || '-'}</p>
                </div>
              </div>
            </article>
            <article className="paper-card p-6 md:col-span-4">
              <p className="font-display text-[28px] uppercase">{t.atmTitle}</p>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#1f1b18]/78">{t.atmText}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="rawai" className="premium-section px-5 py-16 md:px-10 md:py-24">
        <div className="section-shell">
          <p className="section-kicker mb-3">{t.chapter} 04</p>
          <p className="section-title">{t.rawaiTitle}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-12">
            <article className="paper-card p-6 md:col-span-5">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-[#1f1b18]/65">{t.beachesLabel}</p>
              <ul className="mt-4 space-y-3">
                {BEACHES.map((beach) => (
                  <li key={beach} className="text-[15px] leading-[1.7] text-[#1f1b18]/78">
                    {beach}
                  </li>
                ))}
              </ul>
            </article>
            <article className="paper-card p-6 md:col-span-4">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-[#1f1b18]/65">{t.restaurantsLabel}</p>
              <ul className="mt-4 space-y-3">
                {RESTAURANTS.map((restaurant) => (
                  <li key={restaurant.name} className="text-[15px] leading-[1.7] text-[#1f1b18]/78">
                    {restaurant.name}{' '}
                    <a href={restaurant.maps} target="_blank" rel="noopener noreferrer" className="font-label text-[9px] uppercase tracking-[0.18em]">
                      Maps
                    </a>
                  </li>
                ))}
              </ul>
            </article>
            <article className="paper-card p-6 md:col-span-3">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-[#1f1b18]/65">{t.activitiesLabel}</p>
              <ul className="mt-4 space-y-3">
                {ACTIVITIES.map((activity) => (
                  <li key={activity} className="text-[14px] leading-[1.65] text-[#1f1b18]/78">
                    {activity}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="day-passes" className="premium-section px-5 py-16 md:px-10 md:py-24">
        <div className="section-shell">
          <p className="section-kicker mb-3">{t.chapter} 05</p>
          <p className="section-title">{t.passesTitle}</p>
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.8] text-[#1f1b18]/78">{t.dayPassIntro}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {DAY_PASSES.map((pass) => (
              <article key={pass.name} className="paper-card p-6">
                <p className="font-display text-[28px] uppercase leading-[0.95]">{pass.name}</p>
                <p className="font-label mt-3 text-[10px] uppercase tracking-[0.22em]">{pass.price}</p>
                <p className="mt-4 text-[14px] leading-[1.75] text-[#1f1b18]/78">{pass.detail}</p>
              </article>
            ))}
          </div>
          <article className="paper-card cinematic-frame mt-8 p-3 md:mt-10 md:p-4">
            <video
              className="cinematic-video h-[260px] w-full object-cover md:h-[420px]"
              data-cinematic-video
              data-rate="0.9"
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/IMG_2900-web.mp4" type="video/mp4" />
            </video>
          </article>
        </div>
      </section>

      <section id="guest-form" className="premium-section px-5 pb-28 pt-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[920px]">
          <p className="section-kicker mb-3">{t.chapter} 06</p>
          <p className="section-title">{t.formTitle}</p>
          <form onSubmit={submitGuestForm} className="paper-card mt-8 grid gap-4 p-6 md:grid-cols-2 md:p-8">
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.arrivalDate}
              value={form.arrival}
              onChange={(e) => setForm((prev) => ({ ...prev, arrival: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.flightNumber}
              value={form.flightNumber}
              onChange={(e) => setForm((prev) => ({ ...prev, flightNumber: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.breakfast}
              value={form.breakfast}
              onChange={(e) => setForm((prev) => ({ ...prev, breakfast: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.juice}
              value={form.juice}
              onChange={(e) => setForm((prev) => ({ ...prev, juice: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.cocktail}
              value={form.cocktail}
              onChange={(e) => setForm((prev) => ({ ...prev, cocktail: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.allergies}
              value={form.allergies}
              onChange={(e) => setForm((prev) => ({ ...prev, allergies: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.kids}
              value={form.kids}
              onChange={(e) => setForm((prev) => ({ ...prev, kids: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.kidsAges}
              value={form.kidsAges}
              onChange={(e) => setForm((prev) => ({ ...prev, kidsAges: e.target.value }))}
            />
            <textarea
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none md:col-span-2"
              rows={4}
              placeholder={t.otherNotes}
              value={form.other}
              onChange={(e) => setForm((prev) => ({ ...prev, other: e.target.value }))}
            />
            <button type="submit" className="font-label mt-2 rounded-md border border-[#1f1b18]/25 px-4 py-3 text-[10px] uppercase tracking-[0.2em] md:col-span-2">
              {t.submit}
            </button>
            {sent && <p className="font-script text-4xl md:col-span-2">{t.thankYou}</p>}
          </form>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#1f1b18]/10 bg-[#f6f2ec]/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-[520px] gap-2">
          <a
            href="https://wa.me/66952824035"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label flex-1 rounded-md border border-[#1f1b18]/20 px-3 py-2 text-center text-[10px] uppercase tracking-[0.18em]"
          >
            {t.whatsapp}
          </a>
          <a
            href="https://maps.google.com/?q=59/45+Soi+Sayiuan+13+Rawai+Phuket"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label flex-1 rounded-md border border-[#1f1b18]/20 px-3 py-2 text-center text-[10px] uppercase tracking-[0.18em]"
          >
            {t.directions}
          </a>
          <a
            href="#arrival"
            className="font-label flex-1 rounded-md border border-[#1f1b18]/20 px-3 py-2 text-center text-[10px] uppercase tracking-[0.18em]"
          >
            Door
          </a>
        </div>
      </div>
    </main>
  );
}
