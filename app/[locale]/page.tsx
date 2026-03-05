'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Locale = 'fr' | 'en';

const CONTENT = {
  en: {
    brand: 'BAAN SAYIUAN',
    chapter: 'The Guide',
    nav: ['Welcome', 'Before Arrival', 'At The Villa', 'Curated Rawai', 'Day Passes', 'Guest Form'],
    heroTitle1: 'BAAN SAYIUAN',
    heroTitle2: '',
    heroScript: 'Welcome home',
    heroAddress: '59/45 Soi Sayiuan 13 Rawai Phuket',
    heroWhatsappLucie: 'WhatsApp Lucie',
    heroWhatsappGuillaume: 'WhatsApp Guillaume',
    postcardLine: 'Love,\nLucie & Guillaume',
    welcomeTitle: 'WELCOME HOME',
    welcomeStory1:
      'baan means home in Thai.\n\nOurs is in Rawai,\nnear the sea,\nwith a pool to cool off\nand cold beers waiting.\n\nDrop your bags,\nand enjoy.\n\nYou\'re home.',
    welcomeStory2:
      'Towels are in the bathroom, WiFi details are on the wall, and the best sunset spot is five minutes away.',
    welcomeSignature: 'Lucie & Guillaume',
    beforeTitle: 'to do before you get on the plane',
    arrivalTitle: 'Pool open. Beer cold. WiFi fast.',
    rawaiTitle: 'CURATED RAWAI',
    passesTitle: 'DAY PASSES',
    formTitle: 'GUEST PREFERENCES',
    slowGuideLine1: 'A SLOW GUIDE',
    slowGuideLine2: 'TO RAWAI',
    beachesLabel: 'Beaches',
    restaurantsLabel: 'Restaurants',
    activitiesLabel: 'Activities',
    arrivalTime: 'Arrival time (e.g. 14:30)',
    flightNumber: 'Flight number (optional)',
    taxiLabel: 'Airport taxi — we\'ll book it for you. Your driver will be waiting with a sign (700 THB)',
    taxiYes: 'Yes please',
    taxiNo: 'No thanks, I\'ll sort it',
    cocktailLabel: 'Favourite cocktail(s) — we\'ll have them ready',
    cocktailOpts: ['Gin & Tonic', 'Mojito', 'Spritz', 'Margarita', 'Rum & Coke', 'Whisky Soda'],
    cocktailOther: 'Other cocktail',
    juiceLabel: 'Morning juice preference',
    juiceOpts: [
      { value: 'lemon-ginger', label: 'Lemon Ginger' },
      { value: 'green', label: 'Green Juice (celery, cucumber)' },
      { value: 'orange', label: 'Orange Juice' },
      { value: 'passion', label: 'Passion Fruit' },
      { value: 'mango', label: 'Mango' },
      { value: 'other', label: 'Other' },
    ],
    juiceOther: 'Specify your juice',
    breakfastAdultsLabel: 'Breakfast for adults — what do you like?',
    breakfastAdultsPlaceholder: 'e.g. eggs, fruit, toast, yogurt, smoothie bowl… tell us everything',
    breakfastKidsLabel: 'Breakfast for the kids',
    breakfastKidsPlaceholder: 'e.g. pancakes, fruit, cereal…',
    allergies: 'Allergies or food you absolutely hate',
    kidsCount: 'Number of kids',
    kidsAges: 'Their ages (e.g. 2 and 5)',
    kidsSleepingLabel: 'Sleeping arrangements for the kids',
    kidsSleepingOpts: [
      { value: 'bunk-top', label: "Top bunk in Ezekiel's room" },
      { value: 'mattress-ez', label: "Floor mattress in Ez's room" },
      { value: 'crib-parents', label: 'Crib in parents\' room' },
      { value: 'other', label: 'Other' },
    ],
    kidsSleepingOther: 'Describe the arrangement',
    diapersLabel: 'Should we get diapers?',
    diapersYes: 'Yes',
    diapersNo: 'No',
    diapersSize: 'Diaper size (e.g. 4, 5, 6…)',
    babyFoodLabel: 'Baby food needed?',
    babyFoodYes: 'Yes',
    babyFoodNo: 'No',
    towelNote: 'No need to bring beach or pool towels — we have everything. We also have a stroller available.',
    other: 'Anything else we should know?',
    unlockPrivate: 'Unlock private mode',
    passcodePlaceholder: 'Enter passcode',
    unlock: 'Unlock',
    close: 'Close',
    privateHint: 'Your door code & WiFi password.',
    wifiNetwork: 'WiFi network',
    wifiPassword: 'WiFi password',
    doorCode: 'Door code',
    lockedLabel: 'Locked',
    atmTitle: 'ATM TIP',
    atmText:
      "ATMs here give the cash BEFORE returning your card. Many people forget their card. Don't be that person. (Pierre, if you leave your card in the ATM, we warned you — and you're buying the next round.) Also, always choose 'Without conversion'. There's an ATM in front of every 7-Eleven.",
    dayPassIntro:
      'A day pass gets you full access to a 5-star hotel — pool, beach club, food credit — no room booking needed. Best upgrade of your trip.',
    submit: 'Send it',
    thankYou: 'Got it — we\'ll make sure everything is perfect.',
    whatsapp: 'WhatsApp',
    directions: 'Directions',
  },
  fr: {
    brand: 'BAAN SAYIUAN',
    chapter: 'Le Guide',
    nav: ['Bienvenue', "Avant l'arrivée", 'À la villa', 'Rawai', 'Day Pass', 'Formulaire'],
    heroTitle1: 'BAAN SAYIUAN',
    heroTitle2: '',
    heroScript: 'Welcome home',
    heroAddress: '59/45 Soi Sayiuan 13 Rawai Phuket',
    heroWhatsappLucie: 'WhatsApp Lucie',
    heroWhatsappGuillaume: 'WhatsApp Guillaume',
    postcardLine: 'Love,\nLucie & Guillaume',
    welcomeTitle: 'BIENVENUE',
    welcomeStory1:
      'baan veut dire maison en thaï.\n\nLa nôtre est à Rawai,\nprès de la mer,\navec une piscine pour se rafraîchir\net des bières au frais.\n\nPosez vos valises,\net profitez.\n\nVous êtes à la maison.',
    welcomeStory2:
      'Les serviettes sont dans la salle de bain, le WiFi est affiché sur le mur, et le meilleur coucher de soleil est à cinq minutes.',
    welcomeSignature: 'Lucie & Guillaume',
    beforeTitle: 'à faire avant de monter dans l\'avion',
    arrivalTitle: 'Piscine ouverte. Bière fraîche. WiFi rapide.',
    rawaiTitle: 'CURATED RAWAI',
    passesTitle: 'DAY PASS',
    formTitle: 'VOS PRÉFÉRENCES',
    slowGuideLine1: 'LE GUIDE',
    slowGuideLine2: 'DE RAWAI',
    beachesLabel: 'Plages',
    restaurantsLabel: 'Restaurants',
    activitiesLabel: 'Activités',
    arrivalTime: 'Heure d\'arrivée (ex. 14:30)',
    flightNumber: 'Numéro de vol (optionnel)',
    taxiLabel: 'Taxi aéroport — on s\'occupe de le réserver pour vous, il vous attendra avec un panneau nominatif (700 THB)',
    taxiYes: 'Oui, avec plaisir',
    taxiNo: 'Non merci, je gère',
    cocktailLabel: 'Cocktail(s) préféré(s) — on les prépare',
    cocktailOpts: ['Gin & Tonic', 'Mojito', 'Spritz', 'Margarita', 'Rhum Coca', 'Whisky Soda'],
    cocktailOther: 'Autre cocktail',
    juiceLabel: 'Jus du matin',
    juiceOpts: [
      { value: 'lemon-ginger', label: 'Citron Gingembre' },
      { value: 'green', label: 'Jus vert (céleri, concombre)' },
      { value: 'orange', label: 'Jus d\'orange' },
      { value: 'passion', label: 'Fruit de la passion' },
      { value: 'mango', label: 'Mangue' },
      { value: 'other', label: 'Autre' },
    ],
    juiceOther: 'Précisez votre jus',
    breakfastAdultsLabel: 'Petit-déjeuner adultes — qu\'est-ce que vous aimez ?',
    breakfastAdultsPlaceholder: 'ex. œufs, fruits, toast, yaourt, smoothie bowl… dites-nous tout',
    breakfastKidsLabel: 'Petit-déjeuner pour les enfants',
    breakfastKidsPlaceholder: 'ex. pancakes, fruits, céréales…',
    allergies: 'Allergies ou aliments que vous détestez',
    kidsCount: 'Nombre d\'enfants',
    kidsAges: 'Leurs âges (ex. 2 et 5 ans)',
    kidsSleepingLabel: 'Couchage pour les enfants',
    kidsSleepingOpts: [
      { value: 'bunk-top', label: 'Lit du haut dans la chambre d\'Ezekiel' },
      { value: 'mattress-ez', label: 'Matelas au sol dans la chambre d\'Ez' },
      { value: 'crib-parents', label: 'Lit bébé dans la chambre des parents' },
      { value: 'other', label: 'Autre' },
    ],
    kidsSleepingOther: 'Décrivez l\'arrangement',
    diapersLabel: 'On prévoit des couches ?',
    diapersYes: 'Oui',
    diapersNo: 'Non',
    diapersSize: 'Taille des couches (ex. 4, 5, 6…)',
    babyFoodLabel: 'Besoin de nourriture bébé ?',
    babyFoodYes: 'Oui',
    babyFoodNo: 'Non',
    towelNote: 'Pas besoin d\'apporter des serviettes de bain ou de plage — on a tout sur place. Une poussette est également disponible.',
    other: 'Autre chose qu\'on devrait savoir ?',
    unlockPrivate: 'Mode privé',
    passcodePlaceholder: 'Code d\'accès',
    unlock: 'Déverrouiller',
    close: 'Fermer',
    privateHint: 'Votre code porte & mot de passe WiFi.',
    wifiNetwork: 'Réseau WiFi',
    wifiPassword: 'Mot de passe WiFi',
    doorCode: 'Code porte',
    lockedLabel: 'Protégé',
    atmTitle: 'CONSEIL ATM',
    atmText:
      "Ici les distributeurs donnent le cash AVANT de rendre la carte. Beaucoup de gens oublient leur carte. Ne soyez pas cette personne. (Pierre, si tu oublies ta carte dans l'ATM, on t'aura prévenu — et tu paies ta tournée.) Aussi, choisissez toujours 'Without conversion'. Il y a un ATM devant chaque 7-Eleven.",
    dayPassIntro:
      "Un day pass, c'est l'accès complet à un hôtel 5 étoiles — piscine, beach club, crédit resto — sans réserver de chambre. Le meilleur upgrade de votre séjour.",
    submit: 'Envoyer',
    thankYou: 'Reçu — on s\'occupe de tout.',
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
  { name: "Nikita's", detail: 'Seafood & cocktails, pieds dans l\'eau', maps: 'https://maps.google.com/?q=Nikita%27s+Restaurant+Rawai+Phuket' },
  { name: 'Locanda del Pescatore', detail: 'Cuisine italienne face à la mer', maps: 'https://maps.google.com/?q=Locanda+del+Pescatore+Rawai+Phuket' },
  { name: 'Le Celtique', detail: 'Breton à Rawai — galettes & moules', maps: 'https://maps.google.com/?q=Le+Celtique+Rawai+Phuket' },
];

const WELLNESS = [
  { name: 'Tiger Muay Thai', detail: 'Muay Thai & MMA', maps: 'https://maps.google.com/?q=Tiger+Muay+Thai+Phuket' },
  { name: 'Naga Ayurveda', detail: 'Ayurveda & soins', maps: 'https://maps.google.com/?q=Naga+Ayurveda+Rawai+Phuket' },
  { name: 'Prana Yoga', detail: 'Yoga', maps: 'https://maps.google.com/?q=Prana+Yoga+Rawai+Phuket' },
  { name: 'Studio 36', detail: 'Pilates', maps: 'https://maps.google.com/?q=Studio+36+Rawai+Phuket' },
  { name: 'Massages thaï', detail: '~250 THB / h', maps: 'https://maps.google.com/?q=massage+Rawai+Phuket' },
  { name: 'Promthep Cape', detail: null, maps: 'https://maps.google.com/?q=Promthep+Cape+Phuket' },
];

const DAY_PASSES = [
  { name: 'The Nai Harn', price: 'from 2,500 THB', detail: 'Infinity pool, sunbeds/towels, restaurant credit, gym' },
  { name: 'SAii Laguna', price: 'from 800 THB', detail: '55m waterslide, adults pool, beach access, dining credit' },
  { name: 'Sri Panwa', price: 'from 1,888 THB', detail: '48m forest pool, panoramic view, daybed, dining credit' },
];

const ACCESS = {
  wifiNetwork: 'Minou_5G',
  wifiPassword: process.env.NEXT_PUBLIC_WIFI_PASSWORD || '',
  doorCode: process.env.NEXT_PUBLIC_DOOR_CODE || '',
};


function SevenElevenReceipt({ locale }: { locale: string }) {
  const now = new Date();
  const dateStr = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  return (
    <div
      className="paper-aged shadow-[0_4px_20px_rgba(31,27,24,0.18)]"
      style={{
        background: '#f5f2ea',
        border: '1px solid rgba(31,27,24,0.12)',
        fontFamily: "'Courier New', Courier, monospace",
        padding: '16px 14px 20px',
        position: 'relative',
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 8px) 100%, calc(100% - 16px) calc(100% - 6px), calc(100% - 24px) 100%, calc(100% - 32px) calc(100% - 7px), calc(100% - 40px) 100%, calc(100% - 48px) calc(100% - 5px), calc(100% - 56px) 100%, calc(100% - 64px) calc(100% - 8px), calc(100% - 72px) 100%, calc(100% - 80px) calc(100% - 6px), calc(100% - 88px) 100%, calc(100% - 96px) calc(100% - 7px), calc(100% - 104px) 100%, calc(100% - 112px) calc(100% - 5px), 0 calc(100% - 5px))',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', borderBottom: '1px dashed rgba(31,27,24,0.25)', paddingBottom: '10px', marginBottom: '10px' }}>
        <p style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '0.05em', color: '#1a1714', lineHeight: 1.1 }}>7-ELEVEN</p>
        <p style={{ fontSize: '8px', color: 'rgba(31,27,24,0.55)', marginTop: '3px', lineHeight: 1.4 }}>
          SOI SAIUAN 11 — RAWAI<br />PHUKET 83130
        </p>
        <p style={{ fontSize: '7px', color: 'rgba(31,27,24,0.40)', marginTop: '2px' }}>STORE#: 08412  TERM ID: 22</p>
        <p style={{ fontSize: '7px', color: 'rgba(31,27,24,0.40)' }}>DATE: {dateStr}  TIME: {timeStr}</p>
      </div>

      {/* Items */}
      <div style={{ fontSize: '9px', color: 'rgba(31,27,24,0.70)', lineHeight: 1.8, marginBottom: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Chang Beer (640ml)</span><span>฿ 65</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Lay&apos;s (75g)</span><span>฿ 28</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>SIM True Move H</span><span>฿ 299</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Sunscreen SPF 50</span><span>฿ 189</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Bottled Water x2</span><span>฿ 20</span>
        </div>
      </div>

      {/* Total */}
      <div style={{ borderTop: '1px dashed rgba(31,27,24,0.25)', paddingTop: '8px', marginBottom: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 'bold', color: '#1a1714' }}>
          <span>TOTAL</span><span>฿ 601</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: 'rgba(31,27,24,0.50)', marginTop: '3px' }}>
          <span>CASH</span><span>฿ 700</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: 'rgba(31,27,24,0.50)' }}>
          <span>CHANGE</span><span>฿ 99</span>
        </div>
      </div>

      {/* Footer note */}
      <div style={{ borderTop: '1px dashed rgba(31,27,24,0.25)', paddingTop: '10px', textAlign: 'center' }}>
        <p style={{ fontSize: '7px', color: 'rgba(31,27,24,0.45)', lineHeight: 1.6, marginBottom: '8px' }}>
          {locale === 'fr'
            ? '5 min à pied de chez nous. Indispensable.\nSIM, bières, solaire, snacks — vous trouverez tout.'
            : '5 min walk from the villa. The holy grail.\nSIM cards, beers, sunscreen — it has everything.'}
        </p>
        <a
          href="https://share.google/dzSNztRG5borA1tmw"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontSize: '7px',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(31,27,24,0.55)',
            borderBottom: '1px solid rgba(31,27,24,0.25)',
            paddingBottom: '1px',
            textDecoration: 'none',
          }}
        >
          {locale === 'fr' ? 'Voir sur Maps →' : 'View on Maps →'}
        </a>
        <p style={{ fontSize: '8px', color: 'rgba(31,27,24,0.35)', marginTop: '10px', letterSpacing: '0.08em' }}>*** THANK YOU ***</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const params = useParams<{ locale: string }>();
  const locale = (params?.locale === 'fr' ? 'fr' : 'en') as Locale;
  const t = CONTENT[locale];

  const [sent, setSent] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({
    arrivalTime: '',
    flightNumber: '',
    taxi: '' as '' | 'yes' | 'no',
    cocktails: [] as string[],
    cocktailOther: '',
    juice: '' as '' | 'lemon-ginger' | 'green' | 'orange' | 'passion' | 'mango' | 'other',
    juiceOther: '',
    breakfastAdults: '',
    breakfastKids: '',
    allergies: '',
    kidsCount: '',
    kidsAges: '',
    kidsSleeping: [] as string[],
    kidsSleepingOther: '',
    diapers: '' as '' | 'yes' | 'no',
    diapersSize: '',
    babyFood: '' as '' | 'yes' | 'no',
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
      {/* Modal formulaire */}
      {formOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#13100e]/70 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) setFormOpen(false); }}>
          <div className="relative mx-auto w-full max-w-[760px] min-h-full shadow-2xl md:my-16 md:min-h-0" style={{ background: '#fffdf0' }}>
            <button onClick={() => setFormOpen(false)} className="sticky top-0 z-20 flex w-full items-center justify-end gap-2 border-b border-[#1f1b18]/10 bg-[#fffdf0] px-5 py-4 font-label text-[10px] uppercase tracking-[0.2em] opacity-70 hover:opacity-100">
              ✕ {locale === 'fr' ? 'Fermer' : 'Close'}
            </button>
            <div className="px-5 pb-12 pt-6 md:px-10">
              <p className="section-kicker mb-3">Plan Your Stay</p>
              <p className="section-title">{t.formTitle}</p>
              {/* Post-it note towels */}
              <div className="relative mt-6 inline-block max-w-xs">
                {/* fleur en collage qui déborde */}
                <img
                  src="/collage/138b0b0bd528ce0fd7eb2fbc548ae461.png"
                  alt=""
                  style={{
                    position: 'absolute',
                    bottom: '-18px',
                    right: '-22px',
                    width: '72px',
                    opacity: 0.9,
                    transform: 'rotate(20deg)',
                    mixBlendMode: 'multiply',
                    pointerEvents: 'none',
                    zIndex: 10,
                  }}
                />
                {/* scotch en haut */}
                <div className="tape-vintage absolute -top-3 left-1/2 z-20 h-5 w-14 -translate-x-1/2" />
                {/* post-it jaune */}
                <div style={{
                  background: '#fef6c7',
                  padding: '14px 18px 18px',
                  boxShadow: '2px 4px 12px rgba(31,27,24,0.15), inset 0 -1px 0 rgba(31,27,24,0.05)',
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '11px',
                  lineHeight: 1.65,
                  color: '#3a2f1a',
                  transform: 'rotate(-1.2deg)',
                }}>
                  {t.towelNote}
                </div>
              </div>

              <form onSubmit={async (e) => { await submitGuestForm(e); }} className="mt-8 space-y-8">

                {/* Arrivée */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="font-label mb-2 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.arrivalTime}</label>
                    <input type="time" className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none" value={form.arrivalTime} onChange={(e) => setForm((prev) => ({ ...prev, arrivalTime: e.target.value }))} />
                  </div>
                  <div>
                    <label className="font-label mb-2 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.flightNumber}</label>
                    <input className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none" placeholder="ex. TG413" value={form.flightNumber} onChange={(e) => setForm((prev) => ({ ...prev, flightNumber: e.target.value }))} />
                  </div>
                </div>

                {/* Taxi */}
                <div>
                  <label className="font-label mb-3 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.taxiLabel}</label>
                  <div className="flex gap-3">
                    {(['yes', 'no'] as const).map((v) => (
                      <button key={v} type="button" onClick={() => setForm((prev) => ({ ...prev, taxi: v }))} className="font-label border px-5 py-2.5 text-[9px] uppercase tracking-[0.18em] transition-colors" style={{ background: form.taxi === v ? '#fef3c7' : 'transparent', color: form.taxi === v ? '#78450f' : 'rgba(31,27,24,0.65)', borderColor: form.taxi === v ? '#d4a017' : 'rgba(31,27,24,0.20)' }}>
                        {v === 'yes' ? t.taxiYes : t.taxiNo}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cocktails */}
                <div>
                  <label className="font-label mb-3 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.cocktailLabel}</label>
                  <div className="flex flex-wrap gap-2">
                    {t.cocktailOpts.map((c) => (
                      <button key={c} type="button" onClick={() => setForm((prev) => ({ ...prev, cocktails: prev.cocktails.includes(c) ? prev.cocktails.filter((x) => x !== c) : [...prev.cocktails, c] }))} className="font-label border px-4 py-2 text-[9px] uppercase tracking-[0.16em] transition-colors" style={{ background: form.cocktails.includes(c) ? '#fef3c7' : 'transparent', color: form.cocktails.includes(c) ? '#78450f' : 'rgba(31,27,24,0.65)', borderColor: form.cocktails.includes(c) ? '#d4a017' : 'rgba(31,27,24,0.20)' }}>
                        {c}
                      </button>
                    ))}
                  </div>
                  <input className="mt-3 w-full border border-[#1f1b18]/20 bg-transparent px-3 py-2.5 text-sm outline-none" placeholder={t.cocktailOther} value={form.cocktailOther} onChange={(e) => setForm((prev) => ({ ...prev, cocktailOther: e.target.value }))} />
                </div>

                {/* Jus */}
                <div>
                  <label className="font-label mb-3 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.juiceLabel}</label>
                  <div className="flex flex-wrap gap-2">
                    {t.juiceOpts.map((j) => (
                      <button key={j.value} type="button" onClick={() => setForm((prev) => ({ ...prev, juice: j.value as typeof prev.juice }))} className="font-label border px-4 py-2 text-[9px] uppercase tracking-[0.16em] transition-colors" style={{ background: form.juice === j.value ? '#fef3c7' : 'transparent', color: form.juice === j.value ? '#78450f' : 'rgba(31,27,24,0.65)', borderColor: form.juice === j.value ? '#d4a017' : 'rgba(31,27,24,0.20)' }}>
                        {j.label}
                      </button>
                    ))}
                  </div>
                  {form.juice === 'other' && (
                    <input className="mt-3 w-full border border-[#1f1b18]/20 bg-transparent px-3 py-2.5 text-sm outline-none" placeholder={t.juiceOther} value={form.juiceOther} onChange={(e) => setForm((prev) => ({ ...prev, juiceOther: e.target.value }))} />
                  )}
                </div>

                {/* Breakfast */}
                <div className="rounded-sm border border-[#d4a017]/30 bg-[#fffbeb] p-5 space-y-5">
                  <p className="font-label text-[8px] uppercase tracking-[0.28em]" style={{ color: '#78450f' }}>
                    {locale === 'fr' ? 'Petit-déjeuner' : 'Breakfast'}
                  </p>
                  <div>
                    <label className="font-label mb-2 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.breakfastAdultsLabel}</label>
                    <textarea
                      className="w-full border border-[#1f1b18]/15 bg-transparent px-3 py-3 text-sm outline-none resize-none"
                      rows={3}
                      placeholder={t.breakfastAdultsPlaceholder}
                      value={form.breakfastAdults}
                      onChange={(e) => setForm((prev) => ({ ...prev, breakfastAdults: e.target.value }))}
                    />
                  </div>
                  {Number(form.kidsCount) > 0 && (
                    <div>
                      <label className="font-label mb-2 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.breakfastKidsLabel}</label>
                      <textarea
                        className="w-full border border-[#1f1b18]/15 bg-transparent px-3 py-3 text-sm outline-none resize-none"
                        rows={2}
                        placeholder={t.breakfastKidsPlaceholder}
                        value={form.breakfastKids}
                        onChange={(e) => setForm((prev) => ({ ...prev, breakfastKids: e.target.value }))}
                      />
                    </div>
                  )}
                </div>

                {/* Allergies */}
                <div>
                  <label className="font-label mb-2 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.allergies}</label>
                  <input className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none" placeholder="ex. noix, lactose…" value={form.allergies} onChange={(e) => setForm((prev) => ({ ...prev, allergies: e.target.value }))} />
                </div>

                {/* Enfants */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="font-label mb-2 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.kidsCount}</label>
                    <input type="number" min="0" max="10" className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none" value={form.kidsCount} onChange={(e) => setForm((prev) => ({ ...prev, kidsCount: e.target.value }))} />
                  </div>
                  <div>
                    <label className="font-label mb-2 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.kidsAges}</label>
                    <input className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none" placeholder="ex. 2 et 5" value={form.kidsAges} onChange={(e) => setForm((prev) => ({ ...prev, kidsAges: e.target.value }))} />
                  </div>
                </div>

                {Number(form.kidsCount) > 0 && (
                  <div>
                    <label className="font-label mb-3 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.kidsSleepingLabel}</label>
                    <div className="flex flex-col gap-2">
                      {t.kidsSleepingOpts.map((opt) => (
                        <button key={opt.value} type="button" onClick={() => setForm((prev) => ({ ...prev, kidsSleeping: prev.kidsSleeping.includes(opt.value) ? prev.kidsSleeping.filter((x) => x !== opt.value) : [...prev.kidsSleeping, opt.value] }))} className="font-label border px-4 py-2.5 text-left text-[9px] uppercase tracking-[0.14em] transition-colors" style={{ background: form.kidsSleeping.includes(opt.value) ? '#fef3c7' : 'transparent', color: form.kidsSleeping.includes(opt.value) ? '#78450f' : 'rgba(31,27,24,0.65)', borderColor: form.kidsSleeping.includes(opt.value) ? '#d4a017' : 'rgba(31,27,24,0.20)' }}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {form.kidsSleeping.includes('other') && (
                      <input className="mt-3 w-full border border-[#1f1b18]/20 bg-transparent px-3 py-2.5 text-sm outline-none" placeholder={t.kidsSleepingOther} value={form.kidsSleepingOther} onChange={(e) => setForm((prev) => ({ ...prev, kidsSleepingOther: e.target.value }))} />
                    )}
                  </div>
                )}

                {Number(form.kidsCount) > 0 && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="font-label mb-3 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.diapersLabel}</label>
                      <div className="flex gap-3">
                        {(['yes', 'no'] as const).map((v) => (
                          <button key={v} type="button" onClick={() => setForm((prev) => ({ ...prev, diapers: v }))} className="font-label border px-5 py-2.5 text-[9px] uppercase tracking-[0.18em] transition-colors" style={{ background: form.diapers === v ? '#fef3c7' : 'transparent', color: form.diapers === v ? '#78450f' : 'rgba(31,27,24,0.65)', borderColor: form.diapers === v ? '#d4a017' : 'rgba(31,27,24,0.20)' }}>
                            {v === 'yes' ? t.diapersYes : t.diapersNo}
                          </button>
                        ))}
                      </div>
                      {form.diapers === 'yes' && (
                        <input className="mt-3 w-full border border-[#1f1b18]/20 bg-transparent px-3 py-2.5 text-sm outline-none" placeholder={t.diapersSize} value={form.diapersSize} onChange={(e) => setForm((prev) => ({ ...prev, diapersSize: e.target.value }))} />
                      )}
                    </div>
                    <div>
                      <label className="font-label mb-3 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.babyFoodLabel}</label>
                      <div className="flex gap-3">
                        {(['yes', 'no'] as const).map((v) => (
                          <button key={v} type="button" onClick={() => setForm((prev) => ({ ...prev, babyFood: v }))} className="font-label border px-5 py-2.5 text-[9px] uppercase tracking-[0.18em] transition-colors" style={{ background: form.babyFood === v ? '#fef3c7' : 'transparent', color: form.babyFood === v ? '#78450f' : 'rgba(31,27,24,0.65)', borderColor: form.babyFood === v ? '#d4a017' : 'rgba(31,27,24,0.20)' }}>
                            {v === 'yes' ? t.babyFoodYes : t.babyFoodNo}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Notes libres */}
                <div>
                  <label className="font-label mb-2 block text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.50)' }}>{t.other}</label>
                  <textarea className="w-full border border-[#1f1b18]/20 bg-transparent px-3 py-3 text-sm outline-none" rows={4} value={form.other} onChange={(e) => setForm((prev) => ({ ...prev, other: e.target.value }))} />
                </div>

                <button type="submit" className="font-label w-full border px-4 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:opacity-80" style={{ borderColor: '#d4a017', color: '#78450f', background: '#fef3c7' }}>
                  {t.submit}
                </button>
                {sent && <p className="font-script text-4xl">{t.thankYou}</p>}
              </form>
            </div>
          </div>
        </div>
      )}

      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#f6f2ec]/20 bg-[#13100e]/55 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[1160px] items-center justify-between px-4 md:h-14 md:px-8">
          <p className="font-display text-base uppercase tracking-[0.06em] text-[#f6f2ec] md:text-lg">{t.brand}</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFormOpen(true)}
              className="font-label border border-[#f6f2ec]/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-[#f6f2ec] transition-colors hover:bg-[#f6f2ec] hover:text-[#13100e] md:px-4 md:py-2 md:text-[10px] md:tracking-[0.22em]"
            >
              <span className="md:hidden">{locale === 'fr' ? 'Préparer' : 'Book'}</span>
              <span className="hidden md:inline">{locale === 'fr' ? 'Vos préférences' : 'Plan Your Stay'}</span>
            </button>
            <div className="flex items-center rounded-full border border-[#f6f2ec]/30 p-0.5">
              <a href="/fr" className={`font-label rounded-full px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] md:px-2.5 md:py-1 md:text-[10px] ${locale === 'fr' ? 'bg-[#f6f2ec] text-[#13100e]' : 'text-[#f6f2ec]/85'}`}>FR</a>
              <a href="/en" className={`font-label rounded-full px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] md:px-2.5 md:py-1 md:text-[10px] ${locale === 'en' ? 'bg-[#f6f2ec] text-[#13100e]' : 'text-[#f6f2ec]/85'}`}>EN</a>
            </div>
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

        <div className="absolute inset-0 bg-[#1f1b18]/48" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b18]/60 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 pt-24 md:px-10 md:pb-14 md:pt-24">
          <div className="max-w-[920px]">
            <h1 className="font-display text-[#f6f2ec] uppercase leading-[0.9] tracking-[0.018em] text-[13.5vw] md:text-[110px]">
              {t.heroTitle1}
            </h1>
            <p className="font-script mt-3 text-5xl leading-none text-[#f6f2ec]/95 md:text-7xl">{t.heroScript}</p>

            <div className="mt-8 border-t border-[#f6f2ec]/20 pt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://maps.google.com/?q=59/45+Soi+Sayiuan+13+Rawai+Phuket"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-label text-[10px] uppercase tracking-[0.28em] text-[#f6f2ec]/65 transition-all hover:text-[#f6f2ec]/90"
              >
                {t.heroAddress}
              </a>
              <span className="h-px w-4 bg-[#f6f2ec]/25" />
              <a
                href="https://wa.me/66952824035"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[10px] uppercase tracking-[0.28em] text-[#f6f2ec]/65 transition-all hover:text-[#f6f2ec]/90"
              >
                {t.heroWhatsappLucie}
              </a>
              <a
                href="https://wa.me/33633046059"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[10px] uppercase tracking-[0.28em] text-[#f6f2ec]/65 transition-all hover:text-[#f6f2ec]/90"
              >
                {t.heroWhatsappGuillaume}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POSTCARD SECTION */}
      <section id="welcome" className="relative overflow-hidden px-5 py-16 md:px-10 md:py-24">
        {/* background vidéo */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay muted loop playsInline preload="metadata"
        >
          <source src="/IMG_2901-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1a1410]/45" />

        <div className="relative mx-auto max-w-[420px]">

          {/* CARTE 1 — recto photo */}
          <div className="bg-[#f8f4eb] p-3 pb-10 shadow-[0_8px_40px_rgba(0,0,0,0.40)]">
            <div className="relative overflow-hidden">
              <img
                src="/IMG_1697.jpg"
                alt="Baan Sayiuan"
                className="h-[260px] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.15)' }} />
              <p
                className="font-script absolute bottom-3 left-3 whitespace-pre-line text-[36px] leading-none text-white"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.60)' }}
              >
                {t.postcardLine}
              </p>
            </div>
          </div>

          {/* espace entre les deux cartes */}
          <div className="h-5" />

          {/* CARTE 2 — verso texte */}
          <div className="bg-[#f8f4eb] px-6 py-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">

            {/* header + stamp */}
            <div className="flex items-start justify-between border-b border-[#1f1b18]/12 pb-3">
              <div>
                <p className="font-display text-[18px] tracking-[0.04em] text-[#1f1b18]/75">PostCard</p>
              </div>
              {/* Stamp encadré haut droite — deux timbres */}
              <div className="flex flex-col gap-1" style={{ flexShrink: 0 }}>
                <div className="border border-[#1f1b18]/20 p-[3px]" style={{ width: '66px', height: '66px' }}>
                  <img
                    src="/collage/36b98c7a95217e0156084589d885709e.png"
                    alt="Thailand elephant stamp"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply', opacity: 0.85 }}
                  />
                </div>
                <div className="border border-[#1f1b18]/20 p-[3px]" style={{ width: '66px', height: '50px' }}>
                  <img
                    src="/collage/dc5080eb41238f6faf9474661b8be7ad.jpg"
                    alt="Thailand Muay Thai stamp"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply', opacity: 0.85 }}
                  />
                </div>
              </div>
            </div>

            {/* corps : texte pleine largeur + lignes adresse */}
            <div className="mt-4 grid grid-cols-[1fr_80px] gap-4">
              <p className="font-script whitespace-pre-line text-[26px] leading-[1.25] text-[#1f1b18]/70">
                {t.welcomeStory1}
              </p>
              {/* lignes adresse à droite */}
              <div className="flex flex-col justify-end gap-2 pb-1">
                <div className="border-b border-[#1f1b18]/18" />
                <div className="border-b border-[#1f1b18]/18" />
                <div className="border-b border-[#1f1b18]/18" />
                <div className="border-b border-[#1f1b18]/18" />
              </div>
            </div>

            {/* pied */}
            <p className="font-label mt-5 border-t border-[#1f1b18]/10 pt-3 text-[7px] uppercase tracking-[0.22em] text-[#1f1b18]/32">
              baan Sayiuan · 59/45 Soi Sayiuan 13 · Rawai · Phuket · Thailand
            </p>
          </div>

        </div>
      </section>

      <section id="before-arrival" className="relative overflow-hidden bg-[#f8f4eb] px-5 py-16 md:px-10 md:py-20">
        {/* grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.20]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />

        <div className="relative">
          {/* TITRE SECTION — massif pleine largeur comme le screenshot */}
          <div className="mx-auto max-w-[1160px] px-2 text-center">
            <p className="section-kicker mb-4">Before You Land</p>
            <h2 className="font-display text-[clamp(34px,5vw,72px)] uppercase leading-[0.92] tracking-[0.01em] text-[#1f1b18]">
              {t.beforeTitle}
            </h2>
          </div>

          {/* COLLAGE — mobile: stack / desktop: overlap libre */}
          <div className="relative mx-auto mt-14 max-w-[1160px]">

            {/* version mobile — stack simple */}
            <div className="flex flex-col gap-10 px-4 md:hidden">
              {(locale === 'fr' ? [
                { label: 'Aéroport · Transfert', title: 'Taxi Aéroport', desc: 'Votre chauffeur vous attendra à la sortie avec un panneau à votre nom. 700 THB, de l\'aéroport de Phuket jusqu\'à la villa. Signalez-le dans le formulaire et on s\'occupe de tout.', cta: 'Formulaire', href: '#guest-form' },
                { label: 'Connexion', title: 'eSIM', desc: 'À installer avant de décoller — connecté dès l\'atterrissage.', cta: 'Holafly', href: 'https://esim.holafly.com/fr/esim-thailande/' },
                { label: '✈ Pro tip', title: 'Priority Lane', desc: 'Au passport control, approchez l\'agent et dites juste "priority lane — how much ?". Il annonce un prix entre 500 et 1000 bahts — c\'est du bakchich, cash bahts uniquement. Bureau de change juste avant l\'immigration si besoin. Passeports, TDAC et biftons sortis à l\'avance. Vous passerez en 2 minutes. Sans ça : comptez entre 30 min et 2h dans la queue.', cta: null, href: null },
                { label: 'Immigration', title: 'TDAC', desc: 'Remplissez la carte d\'arrivée en ligne avant votre vol.', cta: 'Site officiel', href: 'https://tdac.immigration.go.th/arrival-card/#/tac/arrival-card/add' },
                { label: 'Transport & Livraison', title: 'Grab', desc: 'Le Uber de l\'Asie du Sud-Est. Taxis, scooters, livraison. Indispensable en Thaïlande.', cta: 'Télécharger', href: 'https://www.grab.com/th/en/download/' },
              ] : [
                { label: 'Airport · Transfer', title: 'Airport Taxi', desc: 'Your driver will be waiting at arrivals with a sign in your name. 700 THB, straight from Phuket airport to the villa. Just mention it in the guest form and we\'ll sort it.', cta: 'Guest form', href: '#guest-form' },
                { label: 'Data', title: 'eSIM', desc: 'Install before takeoff — connected straight from landing.', cta: 'Holafly', href: 'https://esim.holafly.com/fr/esim-thailande/' },
                { label: '✈ Pro tip', title: 'Priority Lane', desc: 'At passport control, use the Priority Lane. Just say "priority lane — how much?" to the agent — expect 500 to 1000 baht, it\'s up to them. Cash in baht only (exchange desk just before immigration). Have passports, TDAC forms and cash ready. Without it: 30 min to 2 hours in line.', cta: null, href: null },
                { label: 'Immigration', title: 'TDAC', desc: 'Fill the arrival card online before your flight. Takes 2 minutes.', cta: 'Official site', href: 'https://tdac.immigration.go.th/arrival-card/#/tac/arrival-card/add' },
                { label: 'Transport & Food', title: 'Grab', desc: 'The Uber of Southeast Asia. Taxis, scooters, delivery. Essential in Thailand.', cta: 'Download', href: 'https://www.grab.com/th/en/download/' },
              ]).map((item) => (
                <div key={item.title} className="relative">
                  <div className="tape-vintage absolute -top-3 left-6 z-10 h-6 w-16" />
                  <div className="bg-[#faf7f2] p-5 shadow-[0_4px_20px_rgba(31,27,24,0.12)]">
                    <p className="font-label text-[8px] uppercase tracking-[0.26em] text-[#1f1b18]/40">{item.label}</p>
                    <p className="font-display mt-1 text-[26px] uppercase leading-none">{item.title}</p>
                    <p className="mt-3 text-[13px] leading-[1.7] text-[#1f1b18]/68">{item.desc}</p>
                    {item.cta && item.href && <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-label mt-4 inline-block border-b border-[#1f1b18]/25 pb-px text-[9px] uppercase tracking-[0.24em] text-[#1f1b18]/55 hover:text-[#1f1b18]">{item.cta} →</a>}
                  </div>
                </div>
              ))}
              <div className="relative" style={{}}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-18 -translate-x-1/2" />
                <div className="bg-[#f8f4eb] p-3 pb-8 shadow-[0_6px_24px_rgba(31,27,24,0.14)]">
                  <img src="/IMG_7234.jpeg" alt="" className="h-[200px] w-full object-cover" />
                </div>
              </div>
            </div>

            {/* version desktop — collage overlap */}
            <div className="relative hidden md:block" style={{ height: '820px' }}>

              {/* GRANDE PHOTO GAUCHE */}
              <div className="absolute left-[10px] top-[30px] w-[310px]" style={{ zIndex: 1 }}>
                <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged p-3 pb-10 shadow-[0_8px_36px_rgba(31,27,24,0.22)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.08)' }}>
                  <img src="/IMG_7512.jpeg" alt="" className="h-[400px] w-full object-cover" style={{ filter: 'sepia(0.10) contrast(1.02) brightness(1.02)' }} />
                </div>
              </div>

              {/* TAXI */}
              <div className="absolute left-[280px] top-[15px] w-[265px]" style={{ zIndex: 3 }}>
                <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged relative px-6 py-6 shadow-[0_6px_28px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <span className="stamp-price absolute -right-4 -top-5 z-10" style={{ fontSize: '9px', transform: 'rotate(5deg)' }}>700 THB<br/>door to door</span>
                  <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Aéroport · Transfert' : 'Airport · Transfer'}</p>
                  <p className="font-display mt-2 text-[34px] uppercase leading-[0.88]" style={{ color: '#1a1714' }}>{locale === 'fr' ? 'Taxi\nAéroport' : 'Airport\nTaxi'}</p>
                  <p className="mt-3 text-[12px] leading-[1.7]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "Votre chauffeur vous attendra à la sortie avec un panneau à votre nom. Signalez-le dans le formulaire et on s'occupe de tout." : "Your driver will be waiting at arrivals with a sign in your name. Just mention it in the guest form and we'll sort it."}</p>
                  <a href="#guest-form" className="font-label mt-3 inline-block border-b pb-px text-[8px] uppercase tracking-[0.24em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.28)', color: 'rgba(31,27,24,0.60)' }}>{locale === 'fr' ? 'Formulaire →' : 'Guest form →'}</a>
                </div>
              </div>

              {/* PHOTO PORTRAIT */}
              <div className="absolute left-[545px] top-[80px] w-[210px]" style={{ zIndex: 4 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged relative p-2 pb-8 shadow-[0_6px_24px_rgba(31,27,24,0.20)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.08)' }}>
                  <img src="/IMG_9878.jpeg" alt="" className="h-[240px] w-full object-cover" style={{ filter: 'sepia(0.10) contrast(1.02) brightness(1.02)' }} />
                </div>
              </div>

              {/* eSIM */}
              <div className="absolute left-[760px] top-[10px] w-[200px]" style={{ zIndex: 2 }}>
                <div className="tape-vintage absolute -top-3 left-4 z-10 h-7 w-18" />
                <div className="paper-aged p-5 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Connexion' : 'Data'}</p>
                  <p className="font-display mt-1 text-[28px] uppercase leading-none" style={{ color: '#1a1714' }}>eSIM</p>
                  <p className="mt-2 text-[12px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "À installer avant de décoller — connecté dès l'atterrissage." : 'Install before takeoff — connected straight from landing.'}</p>
                  <a href="https://esim.holafly.com/fr/esim-thailande/" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Holafly →</a>
                </div>
              </div>

              {/* PHOTO BAS DROITE */}
              <div className="absolute left-[760px] top-[290px] w-[210px]" style={{ zIndex: 2 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-18 -translate-x-1/2" />
                <div className="paper-aged p-2 pb-7 shadow-[0_6px_24px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.08)' }}>
                  <img src="/IMG_3154.jpeg" alt="" className="h-[200px] w-full object-cover" style={{ filter: 'sepia(0.10) contrast(1.02) brightness(1.02)' }} />
                </div>
              </div>

              {/* PRIORITY LANE */}
              <div className="absolute left-[30px] top-[460px] w-[290px]" style={{ zIndex: 3 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged relative overflow-hidden p-5 shadow-[0_4px_20px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  {/* billets en fond */}
                  <img src="/collage/d097cfd24072805eecf86a53c65db8a3.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.07, mixBlendMode: 'multiply', objectPosition: 'center' }} />
                  {/* Stamp "priority" circulaire */}
                  <span className="stamp-important absolute -right-5 -top-5 z-20" style={{ width: '70px', height: '70px', transform: 'rotate(-6deg)' }}>
                    <span style={{ fontSize: '9px' }}>ด่วน</span>
                    <span style={{ fontSize: '7px' }}>priority</span>
                  </span>
                  {/* Stamp "cash baht only" qui chevauche le stamp priority */}
                  <span className="stamp-price absolute -right-1 top-[44px] z-10" style={{ transform: 'rotate(8deg)', fontSize: '7.5px' }}>
                    cash baht only<br/>
                    <span style={{ fontSize: '7px', letterSpacing: '0.05em' }}>เงินสดเท่านั้น</span>
                  </span>
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>✈ Pro tip</p>
                  <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>Priority<br/>Lane</p>
                  <img src="/garuda-stamp.png" alt="" className="absolute bottom-4 left-4 w-[64px] opacity-[0.08]" style={{ filter: 'grayscale(1)', mixBlendMode: 'multiply', transform: 'rotate(-8deg)' }} />
                  <p className="mt-3 text-[12px] leading-[1.7]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "Au passport control, approchez l'agent et dites juste \"priority lane — how much ?\". Il annonce un prix entre 500 et 1000 bahts — c'est du bakchich, cash bahts uniquement. Bureau de change juste avant si besoin. Passeports, TDAC et biftons sortis à l'avance. Vous passerez en 2 minutes. Sans ça : 30 min à 2h dans la queue." : 'At passport control, walk up to the agent and say "priority lane — how much?" They\'ll quote you 500–1000 baht — it\'s a bribe, cash in baht only. Exchange desk right before if needed. Passports, TDAC forms and cash out and ready. You\'re through in 2 minutes. Without it: queue for 30 min to 2 hours.'}</p>
                </div>
              </div>

              {/* TDAC */}
              <div className="absolute left-[340px] top-[440px] w-[205px]" style={{ zIndex: 3 }}>
                <div className="tape-vintage absolute -top-3 left-4 z-10 h-7 w-18" />
                <div className="paper-aged relative p-4 shadow-[0_3px_16px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <span className="stamp-mandatory absolute -right-5 -top-5 z-20" style={{ fontSize: '10px', padding: '6px 12px 5px', transform: 'rotate(6deg)' }}>
                    {locale === 'fr' ? 'Obligatoire' : 'Required'}<br/>
                    <span style={{ fontSize: '8px', letterSpacing: '0.05em' }}>บังคับ</span>
                  </span>
                  <img src="/garuda-stamp.png" alt="" className="absolute bottom-3 right-3 w-[56px] opacity-[0.12]" style={{ filter: 'grayscale(1)', mixBlendMode: 'multiply' }} />
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>Immigration</p>
                  <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>TDAC</p>
                  <p className="mt-2 text-[12px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "Remplissez la carte d'arrivée en ligne avant votre vol." : 'Fill the arrival card online before your flight. Takes 2 minutes.'}</p>
                  <a href="https://tdac.immigration.go.th/arrival-card/#/tac/arrival-card/add" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Site officiel →' : 'Official site →'}</a>
                </div>
              </div>

              {/* GRAB */}
              <div className="absolute left-[560px] top-[450px] w-[200px]" style={{ zIndex: 3 }}>
                <div className="tape-vintage absolute -top-3 left-6 z-10 h-7 w-16" />
                <div className="paper-aged p-4 shadow-[0_3px_16px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Transport & Livraison' : 'Transport & Food'}</p>
                  <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>Grab</p>
                  <p className="mt-2 text-[12px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "Le Uber de l'Asie du Sud-Est. Taxis, scooters, livraison. Indispensable en Thaïlande." : 'The Uber of Southeast Asia. Taxis, scooters, delivery. Essential in Thailand.'}</p>
                  <a href="https://www.grab.com/th/en/download/" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Télécharger →' : 'Download →'}</a>
                </div>
              </div>

              {/* FRANGIPANIER — déborde entre les cartes */}
              <img
                src="/collage/138b0b0bd528ce0fd7eb2fbc548ae461.png"
                alt=""
                className="pointer-events-none absolute"
                style={{ width: '160px', left: '390px', top: '360px', transform: 'rotate(15deg)', zIndex: 10, opacity: 0.90 }}
              />

            </div>
          </div>
        </div>
      </section>

      {/* ── AT THE VILLA – scrapbook ─────────────────────────────── */}
      <section id="arrival" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32" style={{ background: '#f8f4eb' }}>
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>At The Villa</p>
            <h2 className="font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>{t.arrivalTitle}</h2>
          </div>

          {/* ── MOBILE layout ────────────────────────────────────── */}
          <div className="flex flex-col gap-6 md:hidden">

            {/* WiFi + Door code card */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged p-5 shadow-[0_3px_16px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Accès · Villa' : 'Access · Villa'}</p>
                <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>{locale === 'fr' ? 'Bienvenue' : 'Welcome'}</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded border border-[#1f1b18]/15 p-3">
                    <p className="font-label text-[8px] uppercase tracking-[0.2em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{t.wifiNetwork}</p>
                    <p className="mt-1 text-[15px]" style={{ color: '#1a1714' }}>{ACCESS.wifiNetwork}</p>
                  </div>
                  <div className="rounded border border-[#1f1b18]/15 p-3">
                    <p className="font-label text-[8px] uppercase tracking-[0.2em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{t.wifiPassword}</p>
                    <p className="mt-1 text-[15px]" style={{ color: '#1a1714' }}>{ACCESS.wifiPassword || '—'}</p>
                  </div>
                  <div className="rounded border border-[#1f1b18]/15 p-3">
                    <p className="font-label text-[8px] uppercase tracking-[0.2em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{t.doorCode}</p>
                    <p className="mt-1 text-[15px]" style={{ color: '#1a1714' }}>{ACCESS.doorCode || '—'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ATM card */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged p-5 shadow-[0_3px_16px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Conseil · Argent' : 'Tip · Money'}</p>
                <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>{t.atmTitle}</p>
                <p className="mt-3 text-[12px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>{t.atmText}</p>
              </div>
            </div>

            {/* 7-Eleven receipt */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <SevenElevenReceipt locale={locale} />
            </div>

          </div>

          {/* ── DESKTOP collage ──────────────────────────────────── */}
          <div className="relative hidden md:block" style={{ height: '680px' }}>

            {/* Photo 1 – villa pool */}
            <div className="absolute" style={{ left: '18px', top: '30px', width: '260px', zIndex: 1 }}>
              <div className="paper-aged shadow-[0_4px_20px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 28px 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '190px' }}>
                  <img src="/IMG_3541.jpeg" alt="Villa pool" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.02) brightness(1.02)' }} />
                </div>
              </div>
            </div>

            {/* Photo 2 – interior */}
            <div className="absolute" style={{ left: '56px', top: '300px', width: '240px', zIndex: 2 }}>
              <div className="paper-aged shadow-[0_4px_20px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 28px 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '175px' }}>
                  <img src="/IMG_7221.jpeg" alt="Villa interior" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.02) brightness(1.02)' }} />
                </div>
              </div>
            </div>

            {/* WiFi + Door code card */}
            <div className="absolute" style={{ left: '300px', top: '20px', width: '230px', zIndex: 4 }}>
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged p-5 shadow-[0_3px_16px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Accès · Villa' : 'Access · Villa'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>{locale === 'fr' ? 'Bienvenue' : 'Welcome'}</p>
                <div className="mt-4 space-y-2">
                  <div className="rounded border border-[#1f1b18]/15 p-2">
                    <p className="font-label text-[7px] uppercase tracking-[0.2em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{t.wifiNetwork}</p>
                    <p className="mt-0.5 text-[13px]" style={{ color: '#1a1714' }}>{ACCESS.wifiNetwork}</p>
                  </div>
                  <div className="rounded border border-[#1f1b18]/15 p-2">
                    <p className="font-label text-[7px] uppercase tracking-[0.2em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{t.wifiPassword}</p>
                    <p className="mt-0.5 text-[13px]" style={{ color: '#1a1714' }}>{ACCESS.wifiPassword || '—'}</p>
                  </div>
                  <div className="rounded border border-[#1f1b18]/15 p-2">
                    <p className="font-label text-[7px] uppercase tracking-[0.2em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{t.doorCode}</p>
                    <p className="mt-0.5 text-[13px]" style={{ color: '#1a1714' }}>{ACCESS.doorCode || '—'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ATM card */}
            <div className="absolute" style={{ left: '550px', top: '10px', width: '230px', zIndex: 5 }}>
              <div className="tape-vintage absolute -top-4 left-6 z-10 h-7 w-16" />
              <span className="stamp-important absolute -top-4 right-4 z-20" style={{ transform: 'rotate(8deg)', fontSize: '7px', lineHeight: 1.3 }}>
                <span style={{ display: 'block' }}>without</span>
                <span style={{ display: 'block' }}>conversion</span>
              </span>
              <div className="paper-aged p-5 shadow-[0_3px_16px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Conseil · Argent' : 'Tip · Money'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>{t.atmTitle}</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>{t.atmText}</p>
                {/* polaroid billets */}
                <div className="mt-4" style={{ background: '#f0ece3', padding: '6px 6px 18px 6px', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <img src="/collage/b84df0dd1d821c306c9808cc2763a167.png" alt="Thai baht" style={{ width: '100%', height: '80px', objectFit: 'cover', objectPosition: 'top', filter: 'sepia(0.08) contrast(1.02)', mixBlendMode: 'multiply' }} />
                </div>
              </div>
            </div>

            {/* 7-Eleven receipt */}
            <div className="absolute" style={{ left: '798px', top: '0px', width: '250px', zIndex: 4 }}>
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <SevenElevenReceipt locale={locale} />
            </div>

            {/* Photo 3 – beach or garden */}
            <div className="absolute" style={{ left: '320px', top: '370px', width: '220px', zIndex: 2 }}>
              <div className="paper-aged shadow-[0_4px_20px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 28px 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '165px' }}>
                  <img src="/IMG_2278.jpeg" alt="Villa garden" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.02) brightness(1.02)' }} />
                </div>
              </div>
            </div>

            {/* Photo 4 – details */}
            <div className="absolute" style={{ left: '570px', top: '380px', width: '200px', zIndex: 3 }}>
              <div className="paper-aged shadow-[0_4px_20px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 28px 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '160px' }}>
                  <img src="/IMG_8518.jpeg" alt="Villa detail" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.02) brightness(1.02)' }} />
                </div>
              </div>
            </div>

            {/* PITAYA — déco scrapbook débordante */}
            <img
              src="/collage/4dcc1b0d1ee63c4ea436141058ecb0c0.png"
              alt=""
              className="pointer-events-none absolute"
              style={{ width: '180px', right: '-20px', bottom: '20px', transform: 'rotate(-12deg)', zIndex: 10, opacity: 0.88 }}
            />

          </div>
        </div>
      </section>

      <section id="rawai" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32" style={{ background: '#f8f4eb' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />

        <div className="relative mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-16 text-center">
            <p className="font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>Out &amp; About</p>
            <h2 className="font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>{t.rawaiTitle}</h2>
          </div>

          {/* ── LES PLAGES ─────────────────────────────────────────── */}
          <div className="mb-6 flex items-center gap-4">
            <p className="font-label text-[8px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{locale === 'fr' ? 'Les Plages' : 'The Beaches'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Nai Harn */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_6px_28px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 0 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '220px', position: 'relative' }}>
                  <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02)' }}>
                    <source src="/IMG_0780-web.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 pb-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Plage · 10 min' : 'Beach · 10 min'}</p>
                  <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>Nai Harn</p>
                  <p className="mt-2 text-[11px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.68)' }}>{locale === 'fr' ? 'Meilleure baignade, massages sur la plage et restau en bord de mer.' : 'Best swimming, beach massages and restaurants right on the sand.'}</p>
                </div>
              </div>
            </div>

            {/* Ya Nui */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_6px_28px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 0 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '220px', position: 'relative' }}>
                  <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02)' }}>
                    <source src="/IMG_0941-web.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 pb-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Crique secrète · 12 min' : 'Secret cove · 12 min'}</p>
                  <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>Ya Nui</p>
                  <p className="mt-2 text-[11px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.68)' }}>{locale === 'fr' ? 'Snorkeling, kayak et le meilleur smoothie mangue passion de Thaïlande.' : 'Snorkeling, kayak and the best mango passion fruit shake in Thailand.'}</p>
                </div>
              </div>
            </div>

            {/* Rawai */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_6px_28px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 0 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '220px', position: 'relative' }}>
                  <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02)' }}>
                    <source src="/IMG_0987-web.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 pb-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Front de mer · 5 min' : 'Seafront · 5 min'}</p>
                  <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>Rawai</p>
                  <p className="mt-2 text-[11px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.68)' }}>{locale === 'fr' ? 'Couchers de soleil, restaus face à la mer, départ bateaux longue queue et speedboats.' : 'Sunset restaurants, longtail boats and speedboats to the islands.'}</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── LES RESTOS ─────────────────────────────────────────── */}
          <div className="mb-6 flex items-center gap-4">
            <p className="font-label text-[8px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{locale === 'fr' ? 'Les Restos' : 'Restaurants'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

            {RESTAURANTS.map((r, i) => (
              <div key={r.name} className="relative">
                <div className={`tape-vintage absolute -top-4 z-10 h-7 w-16 ${i === 0 ? 'left-8' : i === 1 ? 'left-1/2 -translate-x-1/2' : 'right-8'}`} />
                <div className="paper-aged h-full p-6 shadow-[0_3px_16px_rgba(31,27,24,0.12)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Restaurant' : 'Restaurant'}</p>
                  <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>{r.name}</p>
                  {r.detail && <p className="mt-2 text-[11px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.65)' }}>{r.detail}</p>}
                  <a href={r.maps} target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Maps →</a>
                </div>
              </div>
            ))}

          </div>

          {/* ── WELLNESS & ACTIVITÉS ───────────────────────────────── */}
          <div className="mb-6 flex items-center gap-4">
            <p className="font-label text-[8px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{locale === 'fr' ? 'Wellness & Activités' : 'Wellness & Activities'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Liste wellness */}
            <div className="relative md:col-span-2">
              <div className="tape-vintage absolute -top-4 left-8 z-10 h-7 w-16" />
              <div className="paper-aged p-6 shadow-[0_3px_16px_rgba(31,27,24,0.12)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <ul className="grid gap-3 md:grid-cols-2">
                  {WELLNESS.filter(w => w.name !== 'Promthep Cape').map((w) => (
                    <li key={w.name} className="flex items-baseline justify-between gap-3">
                      <div>
                        <span className="text-[14px] leading-[1.5]" style={{ color: '#1a1714' }}>{w.name}</span>
                        {w.detail && <span className="ml-2 text-[10px]" style={{ color: 'rgba(31,27,24,0.45)' }}>{w.detail}</span>}
                      </div>
                      <a href={w.maps} target="_blank" rel="noopener noreferrer" className="font-label shrink-0 border-b pb-px text-[7px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.50)' }}>Maps →</a>
                    </li>
                  ))}
                  {/* Promthep Cape — pleine largeur */}
                  <li className="col-span-2 mt-1 border-t pt-3" style={{ borderColor: 'rgba(31,27,24,0.12)' }}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[14px] leading-[1.5]" style={{ color: '#1a1714' }}>Promthep Cape</span>
                        <p className="mt-1 text-[10px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.55)', fontStyle: 'italic' }}>
                          {locale === 'fr'
                            ? 'La plus belle vue de Phuket — et le meilleur workout gratuit. Lucie y va tous les matins de 8h à 9h après avoir déposé Ezekiel à l\'école. Rejoignez-la si vous voulez.'
                            : 'Best view in Phuket — best free workout. Lucie goes every morning from 8 to 9 after school drop-off. You\'re welcome to join.'}
                        </p>
                      </div>
                      <a href="https://maps.google.com/?q=Promthep+Cape+Phuket" target="_blank" rel="noopener noreferrer" className="font-label shrink-0 border-b pb-px text-[7px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.50)' }}>Maps →</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sharkbait */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged p-6 shadow-[0_3px_16px_rgba(31,27,24,0.12)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Padel · Piscine · Bar' : 'Padel · Pool · Bar'}</p>
                <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>Sharkbait</p>
                <p className="mt-3 text-[12px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>
                  {locale === 'fr'
                    ? 'Courts de padel, piscine avec plongeoire et mur d\'escalade — et entre les deux, un bar. Le spot parfait pour une journée complète à Rawai.'
                    : 'Padel courts, a pool with a diving board and climbing wall — and a bar right in between. The perfect spot for a full day out in Rawai.'}
                </p>
                <a href="https://maps.google.com/?q=Sharkbait+Rawai+Phuket" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Maps →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── DAY TRIP BY BOAT ─────────────────────────────────────── */}
      <section id="boat-trips" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32" style={{ background: '#f8f4eb' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />

        <div className="relative mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Au départ de Rawai' : 'Departing from Rawai'}</p>
            <h2 className="font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>
              {locale === 'fr' ? 'Day Trip\npar Bateau' : 'Day Trip\nby Boat'}
            </h2>
          </div>

          {/* ── LONGTAIL vs SPEEDBOAT ──────────────────────────── */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Longtail */}
            <div className="relative" style={{}}>
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_6px_28px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 0 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '200px' }}>
                  <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02)' }}>
                    <source src="/IMG_2899-web.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 pb-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Bateau traditionnel' : 'Traditional boat'}</p>
                  <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>Longtail</p>
                  <p className="mt-2 text-[11px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                    {locale === 'fr'
                      ? 'Le bateau local par excellence. Parfait pour Lon Island, Bon Island ou Coral Island. Lent, authentique, économique. On les trouve à 5 min à pied de la maison.'
                      : 'The local classic. Perfect for Lon, Bon or Coral Island. Slow, authentic, cheap. You can book them 5 min walk from the villa.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Speedboat */}
            <div className="relative" style={{}}>
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_6px_28px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 0 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '200px' }}>
                  <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02)' }}>
                    <source src="/IMG_2900-web.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 pb-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Pour aller plus loin' : 'For longer rides'}</p>
                  <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>Speedboat</p>
                  <p className="mt-2 text-[11px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                    {locale === 'fr'
                      ? 'Pour Racha Island, Koh Phi Phi ou James Bond Island. Plus cher mais on couvre beaucoup plus de terrain. À réserver à l\'avance.'
                      : 'For Racha Island, Koh Phi Phi or James Bond Island. More expensive but covers far more ground. Book in advance.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Carte des îles + contact bateau */}
            <div className="relative" style={{}}>
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_6px_28px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', padding: '10px 10px 0 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '200px' }}>
                  <video autoPlay muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02)' }}>
                    <source src="/IMG_0769-web.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 pb-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Les îles proches' : 'Nearby islands'}</p>
                  <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>{locale === 'fr' ? 'Les Îles' : 'The Islands'}</p>
                  <p className="mt-2 text-[11px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                    {locale === 'fr'
                      ? 'Lon, Bon, Coral, Buddha, Potato, Racha — toutes accessibles depuis Rawai Beach en 10 à 40 minutes.'
                      : 'Lon, Bon, Coral, Buddha, Potato, Racha — all reachable from Rawai Beach in 10 to 40 minutes.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ── DEUX CARTES : contact + daytrips lointains ─────── */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Contact Boat Service */}
            <div className="relative" style={{}}>
              <div className="tape-vintage absolute -top-4 left-8 z-10 h-7 w-16" />
              <div className="paper-aged overflow-hidden shadow-[0_4px_20px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                {/* photo pancarte boat service — entière */}
                <div style={{ background: '#1a1714', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '220px' }}>
                  <img
                    src="/IMG_2981.jpeg"
                    alt="Boat service Rawai"
                    style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'contrast(1.05) brightness(0.98)' }}
                  />
                </div>
                <div className="p-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Réservation · Rawai Beach' : 'Booking · Rawai Beach'}</p>
                  <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>Boat Service</p>
                  <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>
                    {locale === 'fr'
                      ? 'Sur place à Rawai Beach ou par téléphone. Les prix varient selon la destination et la saison — négocier est normal.'
                      : 'On site at Rawai Beach or by phone. Prices vary by destination and season — bargaining is expected.'}
                  </p>
                  <div className="mt-3 space-y-1">
                    <a href="tel:+66814526859" className="font-label block text-[9px] uppercase tracking-[0.20em]" style={{ color: 'rgba(31,27,24,0.65)' }}>Ar-non · 081-452-6859</a>
                    <a href="tel:+66824573860" className="font-label block text-[9px] uppercase tracking-[0.20em]" style={{ color: 'rgba(31,27,24,0.65)' }}>Poo · 082-457-3860</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Daytrips lointains */}
            <div className="relative" style={{}}>
              <div className="tape-vintage absolute -top-4 right-8 z-10 h-7 w-16" />
              <div className="paper-aged p-6 shadow-[0_4px_20px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <span className="stamp-important absolute -right-4 -top-5 z-20" style={{ width: '68px', height: '68px', transform: 'rotate(6deg)', fontSize: '7px' }}>
                  <span style={{ fontSize: '8px' }}>réveil</span>
                  <span>4h00</span>
                </span>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Pour les courageux' : 'For the brave'}</p>
                <p className="font-display mt-1 text-[22px] uppercase leading-none" style={{ color: '#1a1714' }}>{locale === 'fr' ? 'Plus\nLoin' : 'Further\nAway'}</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>
                  {locale === 'fr'
                    ? 'Koh Phi Phi et James Bond Island sont faisables en daytrip depuis Phuket — mais il faut se lever TRÈS tôt (départ 4h–5h) pour éviter les hordes de touristes et profiter des spots. Réservation organisée en tour ou en bateau privé.'
                    : 'Koh Phi Phi and James Bond Island are doable as day trips from Phuket — but you need to be up VERY early (4–5am departure) to beat the crowds and actually enjoy the spots. Book as a tour or a private boat.'}
                </p>
                <ul className="mt-4 space-y-1">
                  {[
                    locale === 'fr' ? 'Koh Phi Phi — 1h30 en speedboat' : 'Koh Phi Phi — 1.5h by speedboat',
                    locale === 'fr' ? 'James Bond Island — 2h en bateau' : 'James Bond Island — 2h by boat',
                    locale === 'fr' ? 'Racha Island — 45 min en speedboat' : 'Racha Island — 45 min by speedboat',
                  ].map((item) => (
                    <li key={item} className="text-[11px] leading-[1.6]" style={{ color: 'rgba(31,27,24,0.72)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── DÉCOUVERTE DE PHUKET ─────────────────────────────── */}
      <section id="phuket" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32" style={{ background: '#efede8' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />

        <div className="relative mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-16 text-center">
            <p className="font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? "Au-delà de Rawai" : "Beyond Rawai"}</p>
            <h2 className="font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>
              {locale === 'fr' ? 'Phuket' : 'Phuket'}
            </h2>
          </div>

          {/* ── CULTURE ───────────────────────────────────────── */}
          <div className="mb-6 flex items-center gap-4">
            <p className="font-label text-[8px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{locale === 'fr' ? 'Culture' : 'Culture'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Big Buddha */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged p-6 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Monument · 45 min' : 'Landmark · 45 min'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>Big Buddha</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                  {locale === 'fr'
                    ? '45 mètres de marbre blanc, vue panoramique sur toute l\'île. Coucher de soleil ici, c\'est quelque chose.'
                    : '45 meters of white marble, panoramic view over the whole island. Catch the sunset — it\'s something else.'}
                </p>
                <a href="https://maps.google.com/?q=Big+Buddha+Phuket" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Maps →</a>
              </div>
            </div>

            {/* Old Town */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-8 z-10 h-7 w-16" />
              <div className="paper-aged p-6 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Vieille ville · 30 min' : 'Old Town · 30 min'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>Phuket Town</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                  {locale === 'fr'
                    ? 'Architecture sino-portugaise, coffee shops dans des shophouses centenaires et street food de qualité. Le samedi soir, le marché de nuit envahit les rues — local et pas touristique.'
                    : 'Sino-Portuguese architecture, specialty coffee in century-old shophouses and great street food. Saturday night, the walking street market takes over — local, not touristy.'}
                </p>
                <a href="https://maps.google.com/?q=Phuket+Old+Town" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Maps →</a>
              </div>
            </div>

            {/* Wat Chalong */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 right-8 z-10 h-7 w-16" />
              <div className="paper-aged p-6 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Temple · 20 min' : 'Temple · 20 min'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>Wat Chalong</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                  {locale === 'fr'
                    ? 'Le temple le plus vénéré de Phuket. Dorures, encens et calme — à faire le matin de préférence.'
                    : 'The most revered temple in Phuket. Gold, incense and quiet — go in the morning.'}
                </p>
                <a href="https://maps.google.com/?q=Wat+Chalong+Phuket" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Maps →</a>
              </div>
            </div>

          </div>

          {/* ── NATURE & AVENTURE ─────────────────────────────── */}
          <div className="mb-6 flex items-center gap-4">
            <p className="font-label text-[8px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{locale === 'fr' ? 'Nature & Aventure' : 'Nature & Adventure'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Voile */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged p-6 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Voile · Ao Po Marina' : 'Sailing · Ao Po Marina'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>{locale === 'fr' ? 'Day Sail' : 'Day Sail'}</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                  {locale === 'fr'
                    ? 'Location de voilier pour la journée ou sunset cruise depuis Ao Po marina. La façon la plus belle de voir les îles.'
                    : 'Charter a sailboat for the day or join a sunset cruise from Ao Po marina. The most beautiful way to see the islands.'}
                </p>
                <a href="https://maps.google.com/?q=Ao+Po+Grand+Marina+Phuket" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Maps →</a>
              </div>
            </div>

            {/* Elephant Sanctuary */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-8 z-10 h-7 w-16" />
              <div className="paper-aged p-6 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Sanctuaire · Éthique' : 'Sanctuary · Ethical'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>Elephant Hills</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                  {locale === 'fr'
                    ? 'Pour voir des éléphants sans les monter. Sanctuaire éthique — on les observe, on les nourrit, on les respecte.'
                    : 'See elephants without riding them. An ethical sanctuary — observe, feed and respect them.'}
                </p>
                <a href="https://maps.google.com/?q=Elephant+Hills+Phuket" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Maps →</a>
              </div>
            </div>

            {/* Golf + Dino */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 right-8 z-10 h-7 w-16" />
              <div className="paper-aged p-6 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Golf · 15 min' : 'Golf · 15 min'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>Red Mountain</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                  {locale === 'fr'
                    ? 'Le meilleur parcours de Phuket, green fees raisonnables. Pour les golfeurs sérieux — et pour les autres, il y a Dino Golf juste à côté (mini-golf kitsch avec des dinosaures géants, incontournable).'
                    : 'Best course in Phuket, reasonable green fees. For serious golfers — and for everyone else, Dino Golf is right there (kitsch mini-golf with giant dinosaurs, a must).'}
                </p>
                <div className="mt-4 flex gap-4">
                  <a href="https://maps.google.com/?q=Red+Mountain+Golf+Club+Phuket" target="_blank" rel="noopener noreferrer" className="font-label border-b pb-px text-[8px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Golf →</a>
                  <a href="https://maps.google.com/?q=Dino+Golf+Phuket" target="_blank" rel="noopener noreferrer" className="font-label border-b pb-px text-[8px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Dino Golf →</a>
                </div>
              </div>
            </div>

          </div>

          {/* ── SHOPPING ──────────────────────────────────────── */}
          <div className="mb-6 mt-16 flex items-center gap-4">
            <p className="font-label text-[8px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.35)' }}>Shopping</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Central Phuket Floresta */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged p-6 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.10)' }}>
                <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Mall luxe · 35 min' : 'Luxury mall · 35 min'}</p>
                <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>Central Floresta</p>
                <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.68)' }}>
                  {locale === 'fr'
                    ? 'Le mall premium de Phuket — Hermès, Louis Vuitton, Rolex, et toutes les grandes enseignes sous un même toit. Climatisation bienvenue après une journée au soleil. Juste à côté de Central Festival pour les marques plus accessibles.'
                    : 'Phuket\'s premium mall — Hermès, Louis Vuitton, Rolex and all the big names under one roof. Welcome air-con after a day in the sun. Right next to Central Festival for more accessible brands.'}
                </p>
                <a href="https://maps.google.com/?q=Central+Phuket+Floresta" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em]" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Maps →</a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="day-passes" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32" style={{ background: '#f8f4eb' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />

        <div className="relative mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>Upgrade Your Day</p>
            <h2 className="font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>{t.passesTitle}</h2>
          </div>

          {/* Grande vidéo intro avec scotch */}
          <div className="relative mb-12">
            <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-24 -translate-x-1/2" />
            <div className="paper-aged overflow-hidden shadow-[0_8px_40px_rgba(31,27,24,0.20)]" style={{ background: '#f0ece3', padding: '10px 10px 0 10px', border: '1px solid rgba(31,27,24,0.10)' }}>
              <video
                className="h-[280px] w-full object-cover md:h-[420px]"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
                style={{ filter: 'sepia(0.06) contrast(1.02)' }}
              >
                <source src="/IMG_2900-web.mp4" type="video/mp4" />
              </video>
              <div className="p-5 pb-6">
                <p className="text-[13px] leading-[1.8]" style={{ color: 'rgba(31,27,24,0.72)' }}>{t.dayPassIntro}</p>
              </div>
            </div>
          </div>

          {/* 3 hôtels */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* The Nai Harn */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_4px_20px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '160px', background: '#c8bfaf' }}>
                  <img src="https://www.thenaiharn.com/wp-content/uploads/2023/06/infinity-pool-naiharn-phuket.jpg" alt="The Nai Harn pool" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02) brightness(1.02)' }} />
                </div>
                <div className="p-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Hôtel 5★ · Nai Harn · 10 min' : '5★ Hotel · Nai Harn · 10 min'}</p>
                  <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>The Nai Harn</p>
                  <p className="font-label mt-2 text-[9px] uppercase tracking-[0.18em]" style={{ color: 'rgba(31,27,24,0.55)' }}>from 2,500 THB</p>
                  <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>
                    {locale === 'fr'
                      ? 'Piscine à débordement face à la mer, transats, serviettes, crédit restaurant et accès gym. Vue imprenable sur la baie de Nai Harn.'
                      : 'Infinity pool facing the sea, sunbeds, towels, restaurant credit and gym access. Stunning view over Nai Harn bay.'}
                  </p>
                  <a href="https://www.thenaiharn.com/offers/day-pass/" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Réserver →' : 'Book →'}</a>
                </div>
              </div>
            </div>

            {/* SAii Laguna */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_4px_20px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '160px', background: '#c8bfaf' }}>
                  <img src="https://www.saiihotels.com/wp-content/uploads/2023/08/SAii-Laguna-Phuket-Pool-Slide.jpg" alt="SAii Laguna Phuket" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02) brightness(1.02)' }} />
                </div>
                <div className="p-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Hôtel 5★ · Bangtao · 30 min' : '5★ Hotel · Bangtao · 30 min'}</p>
                  <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>SAii Laguna</p>
                  <p className="font-label mt-2 text-[9px] uppercase tracking-[0.18em]" style={{ color: 'rgba(31,27,24,0.55)' }}>from 800 THB</p>
                  <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>
                    {locale === 'fr'
                      ? 'Un peu plus loin mais idéal en famille — toboggan de 55m, piscine adultes, accès plage, crédit restaurant. Bonne excuse pour découvrir le nord de l\'île.'
                      : 'A bit further but perfect with kids — 55m waterslide, adults-only pool, beach access, dining credit. Great excuse to discover the north of the island.'}
                  </p>
                  <a href="https://www.saiihotels.com/laguna-phuket/things-to-do/resort-daypass/" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Réserver →' : 'Book →'}</a>
                </div>
              </div>
            </div>

            {/* Sri Panwa */}
            <div className="relative">
              <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
              <div className="paper-aged shadow-[0_4px_20px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                <div style={{ overflow: 'hidden', height: '160px', background: '#c8bfaf' }}>
                  <img src="https://www.sripanwa.com/wp-content/uploads/2022/03/sri-panwa-pool-panoramic.jpg" alt="Sri Panwa pool" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) contrast(1.02) brightness(1.02)' }} />
                </div>
                <div className="p-5">
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Hôtel 5★ · Cap Panwa · 25 min' : '5★ Hotel · Cape Panwa · 25 min'}</p>
                  <p className="font-display mt-1 text-[24px] uppercase leading-none" style={{ color: '#1a1714' }}>Sri Panwa</p>
                  <p className="font-label mt-2 text-[9px] uppercase tracking-[0.18em]" style={{ color: 'rgba(31,27,24,0.55)' }}>from 1,888 THB</p>
                  <p className="mt-3 text-[11px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>
                    {locale === 'fr'
                      ? 'Piscine forêt panoramique de 48m, vue sur l\'Andaman, daybed réservé, crédit repas chez Baba Chino. Le plus spectaculaire des trois.'
                      : '48m forest pool with panoramic Andaman views, reserved daybed, dining credit at Baba Chino. The most spectacular of the three.'}
                  </p>
                  <a href="https://www.sripanwa.com/phuket-day-pass/" target="_blank" rel="noopener noreferrer" className="font-label mt-4 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Réserver →' : 'Book →'}</a>
                </div>
              </div>
            </div>

          </div>
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
