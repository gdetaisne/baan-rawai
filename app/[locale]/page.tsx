'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';

type Locale = 'fr' | 'en';

const CONTENT = {
  en: {
    brand: 'BAAN SAYIUAN',
    chapter: 'Chapter',
    nav: ['Welcome', 'Before Arrival', 'At The Villa', 'Curated Rawai', 'Day Passes', 'Guest Form'],
    heroTitle1: 'THE RAWAI',
    heroTitle2: 'HOUSE MANUAL',
    heroLabel: 'A private luxury editorial by Lucie and Guillaume',
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
    nav: ['Welcome', 'Avant arrivée', 'À la villa', 'Rawai', 'Day Pass', 'Formulaire'],
    heroTitle1: 'THE RAWAI',
    heroTitle2: 'HOUSE MANUAL',
    heroLabel: 'Un guide éditorial privé par Lucie & Guillaume',
    welcomeTitle: 'WELCOME HOME',
    welcomeStory1:
      'Baan Sayiuan est notre maison, et pendant votre séjour elle devient la vôtre. Chaque détail est pensé pour être simple, calme et beau.',
    welcomeStory2:
      'Les serviettes sont dans la salle de bain, les infos WiFi sont en mode privé, et le meilleur coucher de soleil est à cinq minutes.',
    welcomeSignature: 'Lucie & Guillaume',
    beforeTitle: 'BEFORE ARRIVAL',
    arrivalTitle: 'AT THE VILLA',
    rawaiTitle: 'CURATED RAWAI',
    passesTitle: 'DAY PASSES',
    formTitle: 'GUEST PREFERENCES',
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

export default function HomePage() {
  const params = useParams<{ locale: string }>();
  const locale = (params?.locale === 'fr' ? 'fr' : 'en') as Locale;
  const t = CONTENT[locale];

  const [privateOpen, setPrivateOpen] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [unlockLoading, setUnlockLoading] = useState(false);
  const [unlockError, setUnlockError] = useState('');
  const [secrets, setSecrets] = useState<{ doorCode: string; wifiPassword: string } | null>(null);
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

  const unlocked = useMemo(() => Boolean(secrets), [secrets]);

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

  useEffect(() => {
    const raw = sessionStorage.getItem('private_secrets');
    if (!raw) return;
    try {
      setSecrets(JSON.parse(raw));
    } catch {
      sessionStorage.removeItem('private_secrets');
    }
  }, []);

  const unlockPrivate = async () => {
    setUnlockLoading(true);
    setUnlockError('');
    try {
      const res = await fetch('/api/private', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });
      const data = await res.json();
      if (!res.ok) {
        setUnlockError(data?.error || 'Failed');
        return;
      }
      setSecrets({ doorCode: data.doorCode, wifiPassword: data.wifiPassword });
      sessionStorage.setItem('private_secrets', JSON.stringify({ doorCode: data.doorCode, wifiPassword: data.wifiPassword }));
      setPrivateOpen(false);
      setPasscode('');
    } catch {
      setUnlockError('Network error');
    } finally {
      setUnlockLoading(false);
    }
  };

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
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#f6f2ec]/20 bg-[#13100e]/50 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1160px] items-center justify-between px-4 md:px-8">
          <p className="font-display text-lg uppercase tracking-[0.06em] text-[#f6f2ec]">{t.brand}</p>
          <nav className="hidden gap-6 md:flex">
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
          </nav>
        </div>
      </header>

      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          data-cinematic-video
          data-rate="0.8"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder-hero.jpg"
        >
          <source src="/IMG_2903.MOV" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#1f1b18]/28" />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-24 md:px-10 md:pb-14 md:pt-24">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.35em] text-[#f6f2ec]/90">
              {t.chapter} 01 - The House Guide
            </p>
          </div>

          <div className="max-w-[900px]">
            <h1 className="font-display text-[#f6f2ec] uppercase leading-[0.92] tracking-[-0.01em] text-[13.5vw] md:text-[96px]">
              {t.heroTitle1}
              <br />
              {t.heroTitle2}
            </h1>
            <p className="font-script mt-2 text-5xl leading-none text-[#f6f2ec]/95 md:text-7xl">slow living notes</p>
            <p className="font-label mt-4 text-[10px] uppercase tracking-[0.33em] text-[#f6f2ec]/80 md:text-[11px]">
              {t.heroLabel}
            </p>
          </div>
        </div>
      </section>

      <section id="welcome" className="relative overflow-hidden px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1160px]">
          <p className="font-label mb-4 text-[10px] uppercase tracking-[0.26em] text-[#1f1b18]/60">{t.welcomeTitle}</p>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <article className="paper-card cinematic-frame p-3 md:col-span-5 md:p-4">
              <video
                className="cinematic-video h-[260px] w-full object-cover md:h-[360px]"
                data-cinematic-video
                data-rate="0.9"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/IMG_2901.MOV" type="video/mp4" />
              </video>
              <p className="font-label mt-4 text-[10px] uppercase tracking-[0.28em] text-[#1f1b18]/62">
                Seaside chapter / curated mood
              </p>
            </article>

            <article className="paper-card p-5 md:col-span-4 md:p-7">
              <p className="font-label text-[10px] uppercase tracking-[0.28em] text-[#1f1b18]/70">
                Editor's note
              </p>
              <p className="font-display mt-5 text-[34px] uppercase leading-[0.95] tracking-[-0.01em] md:text-[48px]">
                A SLOW GUIDE
                <br />
                TO RAWAI
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
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/IMG_2902.MOV" type="video/mp4" />
              </video>
              <div className="mt-4 border-t border-[#1f1b18]/20 pt-3">
                <p className="font-label text-[9px] uppercase tracking-[0.24em] text-[#1f1b18]/65">Issue 01 / 2026</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="before-arrival" className="px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1160px]">
          <p className="font-display text-[34px] uppercase md:text-[48px]">{t.beforeTitle}</p>
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

      <section id="arrival" className="px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1160px]">
          <p className="font-display text-[34px] uppercase md:text-[48px]">{t.arrivalTitle}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-12">
            <article className="paper-card p-6 md:col-span-8">
              <p className="font-label text-[10px] uppercase tracking-[0.26em] text-[#1f1b18]/65">{t.privateHint}</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-md border border-[#1f1b18]/14 p-4">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em]">{t.wifiNetwork}</p>
                  <p className="mt-2 text-lg">Minou_5G</p>
                </div>
                <div className="rounded-md border border-[#1f1b18]/14 p-4">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em]">{t.wifiPassword}</p>
                  <p className="mt-2 text-lg">{unlocked ? secrets?.wifiPassword : t.lockedLabel}</p>
                </div>
                <div className="rounded-md border border-[#1f1b18]/14 p-4 md:col-span-2">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em]">{t.doorCode}</p>
                  <p className="mt-2 text-lg">{unlocked ? secrets?.doorCode : t.lockedLabel}</p>
                </div>
              </div>
              {!unlocked && (
                <button
                  type="button"
                  onClick={() => setPrivateOpen(true)}
                  className="font-label mt-6 rounded-md border border-[#1f1b18]/25 px-4 py-3 text-[10px] uppercase tracking-[0.2em]"
                >
                  {t.unlockPrivate}
                </button>
              )}
            </article>
            <article className="paper-card p-6 md:col-span-4">
              <p className="font-display text-[28px] uppercase">{t.atmTitle}</p>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#1f1b18]/78">{t.atmText}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="rawai" className="px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1160px]">
          <p className="font-display text-[34px] uppercase md:text-[48px]">{t.rawaiTitle}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-12">
            <article className="paper-card p-6 md:col-span-5">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-[#1f1b18]/65">Beaches</p>
              <ul className="mt-4 space-y-3">
                {BEACHES.map((beach) => (
                  <li key={beach} className="text-[15px] leading-[1.7] text-[#1f1b18]/78">
                    {beach}
                  </li>
                ))}
              </ul>
            </article>
            <article className="paper-card p-6 md:col-span-4">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-[#1f1b18]/65">Restaurants</p>
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
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-[#1f1b18]/65">Activities</p>
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

      <section id="day-passes" className="px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1160px]">
          <p className="font-display text-[34px] uppercase md:text-[48px]">{t.passesTitle}</p>
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
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/IMG_2900.MOV" type="video/mp4" />
            </video>
          </article>
        </div>
      </section>

      <section id="guest-form" className="px-5 pb-28 pt-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[920px]">
          <p className="font-display text-[34px] uppercase md:text-[48px]">{t.formTitle}</p>
          <form onSubmit={submitGuestForm} className="paper-card mt-8 grid gap-4 p-6 md:grid-cols-2">
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder="Arrival date & time"
              value={form.arrival}
              onChange={(e) => setForm((prev) => ({ ...prev, arrival: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder="Flight number"
              value={form.flightNumber}
              onChange={(e) => setForm((prev) => ({ ...prev, flightNumber: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder="Breakfast preferences"
              value={form.breakfast}
              onChange={(e) => setForm((prev) => ({ ...prev, breakfast: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder="Favorite juice"
              value={form.juice}
              onChange={(e) => setForm((prev) => ({ ...prev, juice: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder="Favorite cocktail"
              value={form.cocktail}
              onChange={(e) => setForm((prev) => ({ ...prev, cocktail: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder="Allergies"
              value={form.allergies}
              onChange={(e) => setForm((prev) => ({ ...prev, allergies: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder="Kids"
              value={form.kids}
              onChange={(e) => setForm((prev) => ({ ...prev, kids: e.target.value }))}
            />
            <input
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder="Kids ages"
              value={form.kidsAges}
              onChange={(e) => setForm((prev) => ({ ...prev, kidsAges: e.target.value }))}
            />
            <textarea
              className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none md:col-span-2"
              rows={4}
              placeholder="Other notes"
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
          <button
            type="button"
            onClick={() => setPrivateOpen(true)}
            className="font-label flex-1 rounded-md border border-[#1f1b18]/20 px-3 py-2 text-center text-[10px] uppercase tracking-[0.18em]"
          >
            Door
          </button>
        </div>
      </div>

      {privateOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#14110f]/50 p-5">
          <div className="paper-card w-full max-w-[420px] p-6">
            <p className="font-display text-[30px] uppercase">Private Access</p>
            <input
              type="password"
              className="mt-4 w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none"
              placeholder={t.passcodePlaceholder}
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            {unlockError && <p className="mt-2 text-sm text-red-700">{unlockError}</p>}
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={unlockPrivate}
                disabled={unlockLoading}
                className="font-label flex-1 rounded-md border border-[#1f1b18]/25 px-4 py-3 text-[10px] uppercase tracking-[0.2em]"
              >
                {unlockLoading ? '...' : t.unlock}
              </button>
              <button
                type="button"
                onClick={() => setPrivateOpen(false)}
                className="font-label flex-1 rounded-md border border-[#1f1b18]/25 px-4 py-3 text-[10px] uppercase tracking-[0.2em]"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
