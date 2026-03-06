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
      'Baan means home in Thai.\n\nDrop your bags,\nand enjoy.\n\nYou\'re home.',
    welcomeStory2:
      'Towels are in the bathroom, WiFi details are on the wall, and the best sunset spot is five minutes away.',
    welcomeSignature: 'Lucie & Guillaume',
    beforeTitle: 'to do before you get on the plane',
    arrivalTitle: 'Water, shade, nowhere to be.',
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
      { value: 'crib-parents', label: 'Crib in parents\' bedroom' },
      { value: 'mattress-ez', label: 'Floor mattress in Ez\'s room' },
      { value: 'bunk-top', label: 'Bunk bed — top bunk' },
      { value: 'mattress-parents', label: 'Floor mattress in parents\' room' },
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
    houseRules: 'House rules: shoes off at the door (Thai style) · turn off the A/C when leaving your room · keep doors closed to keep mosquitoes out.',
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
      "ATMs here give the cash BEFORE returning your card. Many people forget their card. Don't be that person. (Pierre, if you leave your card in the ATM, we warned you — and you're buying the next round.) There's an ATM in front of every 7-Eleven.",
    dayPassIntro:
      'A day pass gets you full access to a 5-star hotel — pool, beach club, food credit — no room booking needed. Most hotels offer them. Our picks below, but we know plenty more — just ask.',
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
      'Baan veut dire maison en thaï.\n\nPosez vos valises, et profitez.\n\nVous êtes à la maison.',
    welcomeStory2:
      'Les serviettes sont dans la salle de bain, le WiFi est affiché sur le mur, et le meilleur coucher de soleil est à cinq minutes.',
    welcomeSignature: 'Lucie & Guillaume',
    beforeTitle: 'à faire avant de monter dans l\'avion',
    arrivalTitle: 'Eau, ombre, rien à faire.',
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
      { value: 'crib-parents', label: 'Lit bébé dans la chambre des parents' },
      { value: 'mattress-ez', label: 'Matelas au sol dans la chambre d\'Ez' },
      { value: 'bunk-top', label: 'Lits superposés — lit du haut' },
      { value: 'mattress-parents', label: 'Matelas au sol dans la chambre des parents' },
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
    houseRules: 'Les règles de la maison : chaussures à la porte (style thaï) · éteignez la clim en quittant votre chambre · fermez bien les portes pour les moustiques.',
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
      "Ici les distributeurs donnent le cash AVANT de rendre la carte. Beaucoup de gens oublient leur carte. Ne soyez pas cette personne. (Pierre, si tu oublies ta carte dans l'ATM, on t'aura prévenu — et tu paies ta tournée.) Il y a un ATM devant chaque 7-Eleven.",
    dayPassIntro:
      "Un day pass, c'est l'accès complet à un hôtel 5 étoiles — piscine, beach club, crédit resto — sans réserver de chambre. La plupart des hôtels le proposent. Notre sélection ci-dessous, mais on en connaît plein d'autres — demandez-nous.",
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
  { name: "Nikita's", detail: 'Seafood & cocktails', note: 'Les pieds dans l\'eau, vue sur la mer, Chang bien froide. L\'endroit où on commande "juste un verre" et on finit à dîner au coucher du soleil.', maps: 'https://maps.google.com/?q=Nikita%27s+Restaurant+Rawai+Phuket' },
  { name: 'Pure Vegan Heaven', detail: 'Végétalien · 5 min à pied', note: 'Healthy sans être austère. Jardin ombragé très agréable — parfait pour un déjeuner après le yoga. Même les non-vegans en ressortent contents.', maps: 'https://maps.google.com/?q=Pure+Vegan+Heaven+Rawai+Phuket' },
  { name: 'Locanda del Pescatore', detail: 'Italien face à la mer', note: 'Notre cantine pour notre date hebdo. Pâtes faites maison, vin correct, service sans chichi. On y revient chaque semaine depuis des années.', maps: 'https://maps.google.com/?q=Locanda+del+Pescatore+Rawai+Phuket' },
  { name: 'Nibe', detail: 'Italien · gastronomique', note: 'Probablement le meilleur restaurant italien de Phuket. Pas donné, mais chaque bouchée le justifie. Réservation recommandée.', maps: 'https://maps.google.com/?q=Nibe+Restaurant+Phuket' },
  { name: 'Groov Gastrobar', detail: 'Gastrobar · cocktails', note: 'Ambiance bar, musique, DJ certains soirs. Pas vraiment kids-friendly après 20h — mais parfait pour une soirée entre adultes.', maps: 'https://maps.google.com/?q=Groov+Gastrobar+Rawai+Phuket' },
  { name: 'Le Celtique', detail: 'Breton à Rawai', note: 'Marié à une Thaï, le patron propose un double menu. Même le menu thaï vaut vraiment le détour. Institution chez les expats français de Rawai depuis 15 ans.', maps: 'https://maps.google.com/?q=Le+Celtique+Rawai+Phuket' },
  { name: 'Vida Nova Phuket', detail: 'Breakfast & coffee shop', note: 'Beau cadre, bon café, brunchs soignés. Le genre d\'endroit où on arrive pour un café et on reste deux heures.', maps: 'https://maps.google.com/?q=Vida+Nova+Phuket' },
  { name: 'Elyseum Bathhouse', detail: 'Breakfast & café', note: 'Décor soigné, excellent café de spécialité, idéal pour travailler en remote. Wifi solide, prises partout, personne ne vous regarde de travers si vous restez 4h.', maps: 'https://maps.google.com/?q=Elyseum+Bathhouse+Phuket' },
  { name: 'We Café', detail: 'Breakfast & coffee shop', note: 'Sympa, sans prétention. Bon café, smoothies frais, portions généreuses. Le breakfast local pour bien commencer la journée — c\'est aussi le point de départ de ma rando quotidienne.', maps: 'https://maps.google.com/?q=We+Cafe+Rawai+Phuket' },
  { name: 'Wine Connection', detail: 'Cave à vin & bistrot', note: 'La meilleure sélection de vins importés du coin, à des prix corrects pour la Thaïlande. On peut boire sur place ou emporter — pratique pour ramener une bonne bouteille à la villa.', maps: 'https://maps.google.com/?q=Wine+Connection+Rawai+Phuket' },
];

const WELLNESS = [
  { name: 'Sinbi Muay Thai', detail: 'Muay Thai · 5 min à pied', detailEn: 'Muay Thai · 5 min walk', note: 'Le plus proche — ambiance usine et gros muscles, plutôt pour les confirmés.', noteEn: 'Closest — factory vibe and big muscles, better for experienced fighters.', maps: 'https://maps.google.com/?q=Sinbi+Muay+Thai+Rawai+Phuket' },
  { name: 'Shark Muay Thai', detail: 'Muay Thai · 10 min à pied', detailEn: 'Muay Thai · 10 min walk', note: 'Plus familial, mon préféré (Lucie). Cours à 10h (les autres sont à 8h). Vous pouvez aussi prendre un cours privé pour moins de 1000 baht.', noteEn: 'More family-friendly, my favourite (Lucie). Class at 10am (others start at 8am). Private lessons also available for under 1,000 baht.', maps: 'https://maps.google.com/?q=Shark+Muay+Thai+Rawai+Phuket' },
  { name: 'Phuket Muay Thai', detail: 'Muay Thai · vue mer', detailEn: 'Muay Thai · sea view', note: 'Vue mer, très sympa.', noteEn: 'Sea view, great atmosphere.', maps: 'https://maps.google.com/?q=Phuket+Muay+Thai+Phuket' },
  { name: 'Mangosteen Ayurveda', detail: 'Ayurveda & soins', detailEn: 'Ayurveda & treatments', note: 'Massages ayurvédiques, soins du corps, bains de vapeur aux herbes. Pour se remettre des excès de Chang Beer.', noteEn: 'Ayurvedic massages, body treatments, herbal steam baths. Perfect recovery after too many Chang Beers.', maps: 'https://maps.google.com/?q=Mangosteen+Ayurveda+Phuket' },
  { name: 'Jungala', detail: 'Yoga · Breathwork · Sound healing', detailEn: 'Yoga · Breathwork · Sound healing', note: 'Le genre d\'endroit où on arrive stressé et on repart comme si on avait dormi 12h.', noteEn: 'The kind of place you arrive stressed and leave feeling like you slept for 12 hours.', maps: 'https://maps.google.com/?q=Jungala+Phuket' },
  { name: 'Action Point', detail: 'Hot Yoga', detailEn: 'Hot Yoga', note: 'Yoga dans une salle chauffée à 38°C. Oui, il fait déjà 33°C dehors. Oui, c\'est quand même mieux.', noteEn: 'Yoga in a room heated to 38°C. Yes, it\'s already 33°C outside. Yes, it\'s still better.', maps: 'https://maps.google.com/?q=Action+Point+Phuket' },
  { name: 'Elite Atoll Fitness', detail: 'Reformer Pilates', detailEn: 'Reformer Pilates', note: 'Pilates sur reformer, cours en petit groupe. Le genre de workout qui fait mal le lendemain mais dont on est fier.', noteEn: 'Reformer Pilates in small groups. The kind of workout that hurts the next day but you\'re proud of.', maps: 'https://maps.google.com/?q=Elite+Atoll+Fitness+Phuket' },
  { name: 'Green Sport Massage', detail: 'Massage thaï · Saiuan 10 · 400 THB / h', detailEn: 'Thai massage · Saiuan 10 · 400 THB / h', note: 'Massage thaï traditionnel à 5 min à pied. Demandez "soft" si vous êtes un peu douillet — et ils comprendront.', noteEn: 'Traditional Thai massage 5 min walk away. Ask for "soft" if you\'re a bit of a wimp — they\'ll understand.', maps: 'https://maps.google.com/?q=Green+Sport+Massage+Rawai+Phuket' },
  { name: 'Chivitr', detail: 'Massages haut de gamme', detailEn: 'Premium massages', note: 'Pour un vrai moment de luxe. Ambiance spa, protocoles sérieux, à réserver à l\'avance.', noteEn: 'For a proper luxury experience. Spa atmosphere, serious protocols — book ahead.', maps: 'https://maps.google.com/?q=Chivitr+Phuket' },
  { name: 'Promthep Cape', detail: null, detailEn: null, note: null, noteEn: null, maps: 'https://maps.google.com/?q=Promthep+Cape+Phuket' },
  { name: 'Shark Bites', detail: 'Padel · Piscine · Bar', detailEn: 'Padel · Pool · Bar', note: 'Courts de padel, piscine avec plongeoire et mur d\'escalade — et un bar au milieu. La journée parfaite pour ne pas rentrer à la villa.', noteEn: 'Padel courts, pool with diving board and climbing wall — and a bar in the middle. The perfect excuse not to go home.', maps: 'https://maps.google.com/?q=Shark+Bites+Rawai+Phuket' },
  { name: 'Pétanque', detail: 'Secret spot · Demandez-nous', detailEn: 'Secret spot · Ask us', note: 'On cherche encore le perfect spot, mais on a une petite idée.', noteEn: 'Still hunting for the perfect spot — but we have a lead.', maps: null },
];

const DAY_PASSES = [
  { name: 'The Nai Harn', price: 'from 2,500 THB', detail: 'Infinity pool, sunbeds/towels, restaurant credit, gym' },
  { name: 'SAii Laguna', price: 'from 800 THB', detail: '55m waterslide, adults pool, beach access, dining credit' },
  { name: 'Sri Panwa', price: 'from 1,888 THB', detail: '48m forest pool, panoramic view, daybed, dining credit' },
];

const ACCESS = {
  wifiNetwork: 'Minou_5G',
  wifiPassword: process.env.NEXT_PUBLIC_WIFI_PASSWORD || 'minoumi123!',
  doorCode: process.env.NEXT_PUBLIC_DOOR_CODE || '5734',
};


function SevenElevenReceipt({ locale }: { locale: string }) {
  const items = [
    { name: 'Chang Beer 640ml', price: '65' },
    { name: 'Singha Water x2', price: '20' },
    { name: "Lay's BBQ 75g", price: '28' },
    { name: 'SIM True Move H', price: '299' },
    { name: 'Sunscreen SPF50', price: '189' },
    { name: 'Ice Cream Bar', price: '35' },
  ];
  const subtotal = 636;
  const cash = 700;
  return (
    <div style={{
      fontFamily: "'Courier New', Courier, monospace",
      width: '168px',
      background: '#fdfbf6',
      boxShadow: '0 3px 14px rgba(31,27,24,0.22)',
      position: 'relative',
      clipPath: 'polygon(0 0,100% 0,100% calc(100% - 8px),calc(100% - 5px) 100%,calc(100% - 11px) calc(100% - 5px),calc(100% - 17px) 100%,calc(100% - 23px) calc(100% - 4px),calc(100% - 29px) 100%,calc(100% - 35px) calc(100% - 6px),calc(100% - 41px) 100%,calc(100% - 47px) calc(100% - 4px),calc(100% - 53px) 100%,calc(100% - 59px) calc(100% - 5px),calc(100% - 65px) 100%,calc(100% - 71px) calc(100% - 4px),calc(100% - 77px) 100%,0 calc(100% - 3px))',
    }}>

      {/* Header — logo inline + infos magasin */}
      <div style={{ padding: '10px 12px 8px', borderBottom: '1px dashed rgba(31,27,24,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <img src="/collage/7eleven-logo-new.png" alt="7-Eleven" style={{ width: '36px', flexShrink: 0, borderRadius: '5px' }} />
          <div>
            <p style={{ fontSize: '9px', fontWeight: '800', color: '#1a1714', letterSpacing: '0.06em', lineHeight: 1.2 }}>7-ELEVEN #08412</p>
            <p style={{ fontSize: '5.5px', color: 'rgba(31,27,24,0.35)', letterSpacing: '0.04em', marginTop: '1px' }}>CASHIER: NUI  REG:02</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(31,27,24,0.08)', paddingTop: '5px', textAlign: 'center' }}>
          <a href="https://share.google/dzSNztRG5borA1tmw" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <p style={{ fontSize: '6.5px', color: 'rgba(31,27,24,0.65)', letterSpacing: '0.03em', lineHeight: 1.45 }}>Soi Saiuan 11, Rawai<br/>Phuket 83130</p>
            <p style={{ fontSize: '6.5px', fontWeight: '600', color: '#b03020', marginTop: '3px', letterSpacing: '0.05em' }}>→ Voir sur Maps</p>
          </a>
        </div>
      </div>

      {/* Items */}
      <div style={{ padding: '5px 10px 3px' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6.5px', color: 'rgba(31,27,24,0.72)', lineHeight: 1.75 }}>
            <span>{item.name}</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', minWidth: '24px', textAlign: 'right' }}>฿{item.price}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div style={{ padding: '4px 10px 4px', borderTop: '1px dashed rgba(31,27,24,0.18)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', fontWeight: '700', color: '#1a1714' }}>
          <span>TOTAL</span><span>฿{subtotal}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6px', color: 'rgba(31,27,24,0.38)', marginTop: '1px' }}>
          <span>CASH</span><span>฿{cash}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6px', color: 'rgba(31,27,24,0.38)' }}>
          <span>CHANGE</span><span>฿{cash - subtotal}</span>
        </div>
      </div>

      {/* Barcode */}
      <div style={{ padding: '5px 10px 3px', borderTop: '1px dashed rgba(31,27,24,0.12)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', gap: '1px', alignItems: 'flex-end' }}>
          {[2,1,3,1,2,1,3,2,1,2,3,1,3,1,2,1,2,3,1,2,1,3,2,1,2,1,3,2,1,2,3,1,2,3,1,2,1,3,2,1].map((h, i) => (
            <div key={i} style={{ width: i % 4 === 0 ? '2px' : '1px', height: `${h * 4 + 6}px`, background: 'rgba(31,27,24,0.80)' }} />
          ))}
        </div>
        <p style={{ fontSize: '5.5px', color: 'rgba(31,27,24,0.25)', letterSpacing: '0.12em', marginTop: '2px' }}>8 85580 08412 6</p>
      </div>

      {/* Footer */}
      <div style={{ padding: '3px 10px 12px', textAlign: 'center' }}>
        <p style={{ fontSize: '6px', color: 'rgba(31,27,24,0.30)', letterSpacing: '0.06em' }}>ขอบคุณที่ใช้บริการ</p>
        <p style={{ fontSize: '5.5px', color: 'rgba(31,27,24,0.18)', letterSpacing: '0.08em', marginTop: '1px' }}>THANK YOU · COME AGAIN</p>
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

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Force autoplay sur mobile (iOS Safari bloque parfois l'autoplay)
  useEffect(() => {
    const tryPlay = (video: HTMLVideoElement) => {
      if (video.paused) {
        video.play().catch(() => {/* silencieux si bloqué par le navigateur */});
      }
    };

    const videos = document.querySelectorAll<HTMLVideoElement>('video[autoplay], video[autoPlay]');
    videos.forEach(tryPlay);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            tryPlay(video);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );
    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
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
              <p className="section-kicker mb-3">{locale === 'fr' ? 'Préparez votre séjour' : 'Plan Your Stay'}</p>
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

              {/* Post-it house rules */}
              <div className="relative mt-4 inline-block max-w-xs">
                <div style={{
                  background: '#fde9a2',
                  padding: '12px 14px 14px',
                  boxShadow: '2px 3px 8px rgba(0,0,0,0.13)',
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '11px',
                  lineHeight: 1.65,
                  color: '#3a2f1a',
                  transform: 'rotate(0.8deg)',
                }}>
                  {t.houseRules}
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
              <span className="md:hidden">{locale === 'fr' ? 'Questionnaire' : 'Questionnaire'}</span>
              <span className="hidden md:inline">{locale === 'fr' ? 'Préparez votre séjour' : 'Plan Your Stay'}</span>
            </button>
            <div className="flex items-center rounded-full border border-[#f6f2ec]/30 p-0.5">
              <a href="/fr" className={`font-label rounded-full px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] md:px-2.5 md:py-1 md:text-[10px] ${locale === 'fr' ? 'bg-[#f6f2ec] text-[#13100e]' : 'text-[#f6f2ec]/85'}`}>FR</a>
              <a href="/en" className={`font-label rounded-full px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] md:px-2.5 md:py-1 md:text-[10px] ${locale === 'en' ? 'bg-[#f6f2ec] text-[#13100e]' : 'text-[#f6f2ec]/85'}`}>EN</a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <img src="/poster-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-top md:hidden" style={{ filter: 'brightness(1.10) contrast(1.03) saturate(1.1)' }} />
        <video
          className="absolute inset-0 h-full w-full object-cover object-top hidden md:block"
          style={{ filter: 'brightness(1.10) contrast(1.03) saturate(1.1)' }}
          data-cinematic-video
          data-rate="0.8"
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/IMG_3036-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1f1b18]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b18]/60 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-20 md:px-10 md:pb-12 md:pt-20">

          {/* Haut — label éditorial discret */}
          <div>
            <p className="font-label text-[9px] uppercase tracking-[0.38em] text-[#f6f2ec]/50">
              Rawai · Phuket · Thailand
            </p>
          </div>

          {/* Bas — titre petit + liens */}
          <div>
            <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
              <div>
              <div className="relative inline-block">
                <h1 className="font-display text-[#f6f2ec] uppercase leading-[0.88] tracking-[0.06em] text-[clamp(52px,8vw,110px)]">
                  {t.heroTitle1}
                </h1>
                <p
                  className="font-script leading-[0.85] text-[#f6f2ec] absolute pointer-events-none"
                  style={{ fontSize: 'clamp(26px, 3vw, 42px)', transform: 'rotate(-10deg)', transformOrigin: 'left bottom', bottom: '110%', left: '0px' }}
                >
                  Welcome<br />home
                </p>
              </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[#f6f2ec]/20 pt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="https://maps.google.com/?q=59/45+Soi+Sayiuan+13+Rawai+Phuket"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[10px] uppercase tracking-[0.28em] text-[#f6f2ec]/70 underline underline-offset-4 decoration-[#f6f2ec]/25 transition-all hover:text-white hover:decoration-[#f6f2ec]/60"
              >
                {t.heroAddress}
              </a>
              <span className="h-px w-4 bg-[#f6f2ec]/20" />
              <a
                href="https://wa.me/66952824035"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[10px] uppercase tracking-[0.28em] text-[#f6f2ec]/70 underline underline-offset-4 decoration-[#f6f2ec]/25 transition-all hover:text-white hover:decoration-[#f6f2ec]/60"
              >
                {t.heroWhatsappLucie}
              </a>
              <a
                href="https://wa.me/33633046059"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[10px] uppercase tracking-[0.28em] text-[#f6f2ec]/70 underline underline-offset-4 decoration-[#f6f2ec]/25 transition-all hover:text-white hover:decoration-[#f6f2ec]/60"
              >
                {t.heroWhatsappGuillaume}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* POSTCARD SECTION */}
      <section id="welcome" className="relative overflow-hidden px-5 py-8 md:px-10 md:py-24">
        {/* background vidéo */}
        <img src="/poster-welcome.jpg" alt="" className="absolute inset-0 h-full w-full object-cover md:hidden" />
        <video
          className="absolute inset-0 h-full w-full object-cover hidden md:block"
          autoPlay muted loop playsInline preload="metadata"
        >
          <source src="/IMG_2901-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1a1410]/45" />

        <div className="relative mx-auto max-w-[420px]">

          {/* CARTE 1 — recto photo */}
          <div className="reveal bg-[#f8f4eb] p-2 pb-6 shadow-[0_8px_40px_rgba(0,0,0,0.40)]">
            <div className="relative overflow-hidden" style={{ height: '160px' }}>
              <img
                src="/IMG_1697.jpg"
                alt="Baan Sayiuan"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.15)' }} />
              <p
                className="font-script absolute bottom-3 left-3 whitespace-pre-line leading-none text-white"
                style={{ fontSize: 'clamp(18px, 3vw, 42px)', textShadow: '0 2px 8px rgba(0,0,0,0.60)', transform: 'rotate(-4deg)', transformOrigin: 'left bottom' }}
              >
                {t.postcardLine}
              </p>
            </div>
          </div>

          {/* espace entre les deux cartes */}
          <div className="h-3" />

          {/* CARTE 2 — verso texte */}
          <div className="reveal reveal-delay-2 bg-[#f8f4eb] px-4 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)]" style={{ minHeight: '172px', display: 'flex', flexDirection: 'column' }}>

            {/* header + stamp — sans trait */}
            <div className="flex items-start justify-between mb-2">
              <p className="font-display text-[14px] uppercase tracking-[0.06em] text-[#1f1b18]/50">POSTCARD</p>
              <div style={{ width: '44px', height: '44px', flexShrink: 0 }}>
                <img
                  src="/collage/ed314742de5bf7445488ba1b5414ac6c.jpg"
                  alt="Thailand stamp"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', opacity: 0.92 }}
                />
              </div>
            </div>

            {/* corps : texte pleine largeur */}
            <div className="flex-1">
              <p className="font-script whitespace-pre-line text-[15px] md:text-[17px] leading-[1.35] text-[#1f1b18]/70">
                {t.welcomeStory1}
              </p>
            </div>

            {/* pied */}
            <p className="font-label mt-2 text-[6px] uppercase tracking-[0.20em] text-[#1f1b18]/25">
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
            <p className="reveal section-kicker mb-4">Before You Land</p>
            <h2 className="reveal reveal-delay-1 font-display text-[clamp(34px,5vw,72px)] uppercase leading-[0.92] tracking-[0.01em] text-[#1f1b18]">
              {t.beforeTitle}
            </h2>
          </div>

          {/* COLLAGE — mobile: stack / desktop: overlap libre */}
          <div className="relative mx-auto mt-14 max-w-[1160px]">

            {/* version mobile — stack simple */}
            <div className="flex flex-col gap-10 px-4 sm:hidden">
              {(locale === 'fr' ? [
                { label: 'Aéroport · Transfert', title: 'Taxi Aéroport', desc: 'Votre chauffeur vous attendra à la sortie avec un panneau à votre nom. 700 THB, de l\'aéroport de Phuket jusqu\'à la villa. Signalez-le dans le formulaire et on s\'occupe de tout.', cta: 'Formulaire', href: '#guest-form' },
                { label: 'Connexion', title: 'eSIM', desc: 'À installer avant de décoller — connecté dès l\'atterrissage.', cta: 'Holafly', href: 'https://esim.holafly.com/fr/esim-thailande/' },
                { label: 'Pro tip', title: 'Priority Lane', desc: 'Au passport control, approchez l\'agent et dites juste "priority lane — how much ?". Il annonce un prix entre 500 et 1000 bahts — c\'est du bakchich, cash bahts uniquement. Bureau de change juste avant l\'immigration si besoin. Passeports, TDAC et biftons sortis à l\'avance. Vous passerez en 2 minutes. Sans ça : comptez entre 30 min et 2h dans la queue.', cta: null, href: null },
                { label: 'Immigration', title: 'TDAC', desc: 'Remplissez la carte d\'arrivée en ligne avant votre vol.', cta: 'Site officiel', href: 'https://tdac.immigration.go.th/arrival-card/#/tac/arrival-card/add' },
                { label: 'Transport & Livraison', title: 'Grab', desc: 'Le Uber de l\'Asie du Sud-Est. Taxis, scooters, livraison. Indispensable en Thaïlande.', cta: 'Télécharger', href: 'https://www.grab.com/th/en/download/' },
              ] : [
                { label: 'Airport · Transfer', title: 'Airport Taxi', desc: 'Your driver will be waiting at arrivals with a sign in your name. 700 THB, straight from Phuket airport to the villa. Just mention it in the guest form and we\'ll sort it.', cta: 'Guest form', href: '#guest-form' },
                { label: 'Data', title: 'eSIM', desc: 'Install before takeoff — connected straight from landing.', cta: 'Holafly', href: 'https://esim.holafly.com/fr/esim-thailande/' },
                { label: 'Pro tip', title: 'Priority Lane', desc: 'At passport control, use the Priority Lane. Just say "priority lane — how much?" to the agent — expect 500 to 1000 baht, it\'s up to them. Cash in baht only (exchange desk just before immigration). Have passports, TDAC forms and cash ready. Without it: 30 min to 2 hours in line.', cta: null, href: null },
                { label: 'Immigration', title: 'TDAC', desc: 'Fill the arrival card online before your flight. Takes 2 minutes.', cta: 'Official site', href: 'https://tdac.immigration.go.th/arrival-card/#/tac/arrival-card/add' },
                { label: 'Transport & Food', title: 'Grab', desc: 'The Uber of Southeast Asia. Taxis, scooters, delivery. Essential in Thailand.', cta: 'Download', href: 'https://www.grab.com/th/en/download/' },
              ]).map((item, i) => (
                <div key={item.title} className={`reveal reveal-delay-${Math.min(i + 1, 5)} relative`}>
                  <div className="tape-vintage absolute -top-3 left-6 z-10 h-6 w-16" />
                  {item.title === 'TDAC' && (
                    <span className="stamp-mandatory absolute -right-2 -top-5 z-20" style={{ fontSize: '9px', padding: '5px 10px 4px', transform: 'rotate(5deg)' }}>
                      {locale === 'fr' ? 'Obligatoire' : 'Required'}<br/>
                      <span style={{ fontSize: '7px', letterSpacing: '0.05em' }}>บังคับ</span>
                    </span>
                  )}
                  <div className="bg-[#faf7f2] p-5 shadow-[0_4px_20px_rgba(31,27,24,0.12)]">
                    <p className="font-label text-[8px] uppercase tracking-[0.26em] text-[#1f1b18]/40">{item.label}</p>
                    <p className="font-display mt-1 text-[26px] uppercase leading-none">{item.title}</p>
                    <p className="mt-3 text-[13px] leading-[1.7] text-[#1f1b18]/68">{item.desc}</p>
                    {item.cta && item.href && <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-label mt-4 inline-block border-b border-[#1f1b18]/25 pb-px text-[9px] uppercase tracking-[0.24em] text-[#1f1b18]/55 hover:text-[#1f1b18]">{item.cta} →</a>}
                  </div>
                </div>
              ))}
              <div className="reveal reveal-delay-1 relative" style={{}}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-18 -translate-x-1/2" />
                <div className="bg-[#f8f4eb] p-3 pb-8 shadow-[0_6px_24px_rgba(31,27,24,0.14)]">
                  <img src="/IMG_1458b.jpg" alt="" className="h-[200px] w-full object-cover" />
                </div>
              </div>
            </div>

            {/* version desktop — collage overlap */}
            <div className="hidden sm:block">
              <div className="relative mx-auto" style={{ width: '980px', height: '820px' }}>

              {/* GRANDE PHOTO GAUCHE — balade père fils vers la mer */}
              <div className="absolute" style={{ left: '0px', top: '20px', width: '230px', zIndex: 1 }}>
                <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged p-3 pb-10 shadow-[0_8px_36px_rgba(31,27,24,0.22)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.08)' }}>
                  <img src="/IMG_7729.jpg" alt="" className="h-[320px] w-full object-cover" style={{ filter: 'sepia(0.08) contrast(1.02) brightness(1.02)', objectPosition: 'center' }} />
                </div>
              </div>

              {/* TAXI */}
              <div className="absolute" style={{ left: '252px', top: '15px', width: '255px', zIndex: 3 }}>
                <div className="tape-vintage absolute -top-4 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged relative px-6 py-6 shadow-[0_6px_28px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <span className="stamp-price absolute -right-4 -top-5 z-10" style={{ fontSize: '9px', transform: 'rotate(5deg)' }}>700 THB<br/>door to door</span>
                  <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Aéroport · Transfert' : 'Airport · Transfer'}</p>
                  <p className="font-display mt-2 text-[34px] uppercase leading-[0.88]" style={{ color: '#1a1714' }}>{locale === 'fr' ? 'Taxi\nAéroport' : 'Airport\nTaxi'}</p>
                  <p className="mt-3 text-[12px] leading-[1.7]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "Votre chauffeur vous attendra à la sortie avec un panneau à votre nom. Signalez-le dans le formulaire et on s'occupe de tout." : "Your driver will be waiting at arrivals with a sign in your name. Just mention it in the guest form and we'll sort it."}</p>
                  <a href="#guest-form" className="font-label mt-3 inline-block border-b pb-px text-[8px] uppercase tracking-[0.24em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.28)', color: 'rgba(31,27,24,0.60)' }}>{locale === 'fr' ? 'Formulaire →' : 'Guest form →'}</a>
                </div>

              </div>

              {/* PHOTO PORTRAIT MILIEU — cocktail à la villa */}
              <div className="absolute" style={{ left: '526px', top: '50px', width: '205px', zIndex: 4 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged p-2 pb-8 shadow-[0_6px_24px_rgba(31,27,24,0.20)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.08)' }}>
                  <img src="/IMG_1458b.jpg" alt="" className="h-[260px] w-full object-cover" style={{ filter: 'sepia(0.08) contrast(1.02) brightness(1.02)' }} />
                </div>
              </div>

              {/* eSIM */}
              <div className="absolute" style={{ left: '748px', top: '10px', width: '195px', zIndex: 2 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged relative overflow-visible p-5 shadow-[0_4px_20px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <img src="/collage/138b0b0bd528ce0fd7eb2fbc548ae461.png" alt="" className="pointer-events-none absolute" style={{ width: '80px', bottom: '-22px', right: '-22px', zIndex: 10, opacity: 1, transform: 'rotate(20deg)' }} />
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Connexion' : 'Data'}</p>
                  <p className="font-display mt-1 text-[28px] uppercase leading-none" style={{ color: '#1a1714' }}>eSIM</p>
                  <p className="mt-2 text-[12px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "À installer avant de décoller — connecté dès l'atterrissage." : 'Install before takeoff — connected straight from landing.'}</p>
                  <a href="https://esim.holafly.com/fr/esim-thailande/" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>Holafly →</a>
                </div>
              </div>

              {/* PHOTO BAS DROITE — Lucie et les enfants dans l'eau */}
              <div className="absolute" style={{ left: '750px', top: '270px', width: '200px', zIndex: 2 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged p-2 pb-7 shadow-[0_6px_24px_rgba(31,27,24,0.18)]" style={{ background: '#f0ece3', border: '1px solid rgba(31,27,24,0.08)' }}>
                  <img src="/IMG_3948b.jpg" alt="" className="h-[220px] w-full object-cover" style={{ filter: 'sepia(0.08) contrast(1.02) brightness(1.02)', objectPosition: 'top' }} />
                </div>
              </div>

              {/* PRIORITY LANE */}
              <div className="absolute" style={{ left: '0px', top: '430px', width: '280px', zIndex: 3 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged relative p-5 shadow-[0_4px_20px_rgba(31,27,24,0.16)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <img src="/collage/d097cfd24072805eecf86a53c65db8a3.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.07, mixBlendMode: 'multiply', objectPosition: 'center' }} />
                  <span className="stamp-important absolute right-2 -top-4 z-20" style={{ width: '70px', height: '70px', transform: 'rotate(-6deg)' }}>
                    <span style={{ fontSize: '9px' }}>ด่วน</span>
                    <span style={{ fontSize: '7px' }}>priority</span>
                  </span>
                  <span className="stamp-price absolute right-6 top-[48px] z-10" style={{ transform: 'rotate(8deg)', fontSize: '7.5px' }}>
                    cash baht only<br/>
                    <span style={{ fontSize: '7px', letterSpacing: '0.05em' }}>เงินสดเท่านั้น</span>
                  </span>
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>Pro tip</p>
                  <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>Priority<br/>Lane</p>
                  <img src="/collage/garuda-stamp.png" alt="" className="absolute bottom-4 left-4 w-[64px] opacity-[0.08]" style={{ filter: 'grayscale(1)', mixBlendMode: 'multiply', transform: 'rotate(-8deg)' }} />
                  <p className="mt-3 text-[12px] leading-[1.7]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "Au passport control, approchez l'agent et dites juste \"priority lane — how much ?\". Il annonce un prix entre 500 et 1000 bahts — c'est du bakchich, cash bahts uniquement. Bureau de change juste avant si besoin. Passeports, TDAC et biftons sortis à l'avance. Vous passerez en 2 minutes. Sans ça : 30 min à 2h dans la queue." : 'At passport control, walk up to the agent and say "priority lane — how much?" They\'ll quote you 500–1000 baht — it\'s a bribe, cash in baht only. Exchange desk right before if needed. Passports, TDAC forms and cash out and ready. You\'re through in 2 minutes. Without it: queue for 30 min to 2 hours.'}</p>
                </div>
              </div>

              {/* TDAC */}
              <div className="absolute" style={{ left: '300px', top: '440px', width: '205px', zIndex: 3 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged relative p-4 shadow-[0_3px_16px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <span className="stamp-mandatory absolute -right-8 -top-10 z-20" style={{ fontSize: '10px', padding: '6px 12px 5px', transform: 'rotate(6deg)' }}>
                    {locale === 'fr' ? 'Obligatoire' : 'Required'}<br/>
                    <span style={{ fontSize: '8px', letterSpacing: '0.05em' }}>บังคับ</span>
                  </span>
                  <img src="/collage/garuda-stamp.png" alt="" className="pointer-events-none absolute" style={{ width: '70px', bottom: '-12px', right: '-16px', transform: 'rotate(6deg)', opacity: 0.55, mixBlendMode: 'multiply' }} />
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>Immigration</p>
                  <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>TDAC</p>
                  <p className="mt-2 text-[12px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "Remplissez la carte d'arrivée en ligne avant votre vol." : 'Fill the arrival card online before your flight. Takes 2 minutes.'}</p>
                  <a href="https://tdac.immigration.go.th/arrival-card/#/tac/arrival-card/add" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Site officiel →' : 'Official site →'}</a>
                </div>
              </div>

              {/* GRAB */}
              <div className="absolute" style={{ left: '526px', top: '440px', width: '195px', zIndex: 3 }}>
                <div className="tape-vintage absolute -top-3 left-1/2 z-10 h-7 w-20 -translate-x-1/2" />
                <div className="paper-aged p-4 shadow-[0_3px_16px_rgba(31,27,24,0.14)]" style={{ background: '#e8dfd0', border: '1px solid rgba(31,27,24,0.10)' }}>
                  <p className="font-label text-[7px] uppercase tracking-[0.24em]" style={{ color: 'rgba(31,27,24,0.45)' }}>{locale === 'fr' ? 'Transport & Livraison' : 'Transport & Food'}</p>
                  <p className="font-display mt-1 text-[26px] uppercase leading-none" style={{ color: '#1a1714' }}>Grab</p>
                  <p className="mt-2 text-[12px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.72)' }}>{locale === 'fr' ? "Le Uber de l'Asie du Sud-Est. Taxis, scooters, livraison. Indispensable en Thaïlande." : 'The Uber of Southeast Asia. Taxis, scooters, delivery. Essential in Thailand.'}</p>
                  <a href="https://www.grab.com/th/en/download/" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[8px] uppercase tracking-[0.20em] hover:opacity-100" style={{ borderColor: 'rgba(31,27,24,0.25)', color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Télécharger →' : 'Download →'}</a>
                </div>
              </div>

              </div>{/* fin mx-auto 980px */}
            </div>{/* fin hidden sm:block */}
          </div>
        </div>
      </section>

      {/* ── AT THE VILLA – editorial sombre ──────────────────────── */}
      <section id="arrival" className="relative overflow-hidden" style={{ background: '#1f1b18' }}>

        {/* Header — fond crème séparé */}
        <div className="px-5 pt-20 pb-12 md:px-10 md:pt-28 md:pb-16 text-center" style={{ background: '#f8f4eb' }}>
          <p className="reveal font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>At The Villa</p>
          <h2 className="reveal reveal-delay-1 font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>{t.arrivalTitle}</h2>
        </div>

        {/* Grid principale — 3 colonnes sur fond sombre */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: '1px solid rgba(255,248,236,0.08)' }}>

          {/* ── COL 1 — Photo piscine ── */}
          <div className="relative overflow-hidden h-[220px] md:h-auto md:min-h-[480px]" style={{ borderRight: '1px solid rgba(255,248,236,0.08)' }}>
            <img src="/IMG_pool_evening.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'sepia(0.12) contrast(1.06) brightness(0.80)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(31,27,24,0.70) 0%, transparent 60%)' }} />
          </div>

          {/* ── COL 2 — Codes accès ── */}
          <div className="flex flex-col justify-center px-8 py-12 md:py-16" style={{ borderRight: '1px solid rgba(255,248,236,0.08)', borderTop: '1px solid rgba(255,248,236,0.08)' }}>
            <p className="reveal font-label text-[7px] uppercase tracking-[0.32em] mb-10" style={{ color: 'rgba(255,248,236,0.30)' }}>{locale === 'fr' ? 'Accès · Villa' : 'Access · Villa'}</p>

            {/* WiFi réseau */}
            <div className="reveal mb-7" style={{ borderBottom: '1px solid rgba(255,248,236,0.07)', paddingBottom: '20px' }}>
              <p className="font-label text-[7px] uppercase tracking-[0.22em] mb-2" style={{ color: 'rgba(255,248,236,0.30)' }}>{t.wifiNetwork}</p>
              <p style={{ fontFamily: 'monospace', fontSize: '20px', color: '#fff8ec', letterSpacing: '0.04em', lineHeight: 1.2 }}>{ACCESS.wifiNetwork}</p>
            </div>

            {/* WiFi password */}
            <div className="reveal reveal-delay-1 mb-7" style={{ borderBottom: '1px solid rgba(255,248,236,0.07)', paddingBottom: '20px' }}>
              <p className="font-label text-[7px] uppercase tracking-[0.22em] mb-2" style={{ color: 'rgba(255,248,236,0.30)' }}>{t.wifiPassword}</p>
              <p style={{ fontFamily: 'monospace', fontSize: '20px', color: '#fff8ec', letterSpacing: '0.04em', lineHeight: 1.2 }}>{ACCESS.wifiPassword}</p>
            </div>

            {/* Code porte — mis en avant */}
            <div className="reveal reveal-delay-2">
              <p className="font-label text-[7px] uppercase tracking-[0.22em] mb-3" style={{ color: 'rgba(255,248,236,0.30)' }}>{t.doorCode}</p>
              <p style={{ fontFamily: 'monospace', fontSize: '36px', color: '#fff8ec', letterSpacing: '0.10em', lineHeight: 1 }}>{ACCESS.doorCode}</p>
              <div className="mt-5" style={{ borderLeft: '1px solid rgba(255,248,236,0.15)', paddingLeft: '12px' }}>
                <p className="font-label text-[11px] leading-[2.2]" style={{ color: 'rgba(255,248,236,0.55)' }}>
                  {locale === 'fr'
                    ? <><span style={{ display: 'block' }}>1. Paume entière sur le capteur</span><span style={{ display: 'block' }}>2. Tapez le code</span><span style={{ display: 'block' }}>3. Paume entière sur le capteur</span><span style={{ display: 'block', fontStyle: 'italic', color: 'rgba(255,248,236,0.20)' }}>"door unlocked" ✓</span></>
                    : <><span style={{ display: 'block' }}>1. Full palm on the sensor</span><span style={{ display: 'block' }}>2. Tap the code</span><span style={{ display: 'block' }}>3. Full palm on the sensor</span><span style={{ display: 'block', fontStyle: 'italic', color: 'rgba(255,248,236,0.20)' }}>"door unlocked" ✓</span></>}
                </p>
              </div>
            </div>
          </div>

          {/* ── COL 3 — Important ATM + photo mugs ── */}
          <div className="flex flex-col">

            {/* Photo mugs */}
            <div className="relative overflow-hidden h-[220px] md:h-[260px]" style={{ borderBottom: '1px solid rgba(255,248,236,0.08)' }}>
              <img src="/IMG_pool_mugs.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', filter: 'sepia(0.12) contrast(1.06) brightness(0.80)' }} />
            </div>

            {/* Important ATM */}
            <div className="reveal flex-1 px-8 py-10">
              <span className="stamp-price inline-block mb-4" style={{ fontSize: '7px', transform: 'rotate(-2deg)', display: 'inline-block' }}>without<br/>conversion</span>
              <p className="font-label text-[7px] uppercase tracking-[0.24em] mb-2" style={{ color: 'rgba(255,248,236,0.35)' }}>{locale === 'fr' ? 'Conseil · Argent' : 'Tip · Money'}</p>
              <p className="font-display text-[28px] uppercase leading-none mb-4" style={{ color: '#fff8ec' }}>Important ATM</p>
              <p className="text-[12px] leading-[1.85]" style={{ color: 'rgba(255,248,236,0.55)' }}>{t.atmText}</p>
            </div>

          </div>

        </div>

        {/* Receipt 7-Eleven — bande éditoriale */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderTop: '1px solid rgba(255,248,236,0.08)' }}>

          {/* Texte gauche */}
          <div className="flex flex-col justify-center px-8 py-10 md:px-14 md:py-14" style={{ borderRight: '1px solid rgba(255,248,236,0.08)' }}>
            <p className="font-label text-[7px] uppercase tracking-[0.32em] mb-4" style={{ color: 'rgba(255,248,236,0.35)' }}>7-Eleven · une institution</p>
            <p className="font-script leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#fff8ec' }}>
              {locale === 'fr' ? 'Le meilleur voisin du monde' : 'The world\'s best neighbour'}
            </p>
            <p className="text-[12px] leading-[1.9]" style={{ color: 'rgba(255,248,236,0.52)', maxWidth: '380px' }}>
              {locale === 'fr'
                ? <>À 200m à pied. Chang Beer bien froide, eau, glaces, SIM cards, crème solaire oubliée, snacks de minuit. <span style={{ color: 'rgba(255,248,236,0.75)' }}>Ouvert 24h/24, 7j/7</span> — y compris à 3h du mat quand l&apos;envie prend. L&apos;ATM juste devant accepte les cartes étrangères.</>
                : <>A 2-minute walk. Ice-cold Chang Beer, water, ice cream, SIM cards, forgotten sunscreen, midnight snacks. <span style={{ color: 'rgba(255,248,236,0.75)' }}>Open 24/7</span> — including at 3am when the mood strikes. The ATM out front takes foreign cards.</>}
            </p>
            <p className="mt-6 text-[10px]" style={{ color: 'rgba(255,248,236,0.28)', fontFamily: 'monospace', letterSpacing: '0.08em' }}>
              Soi Sairaan 11, Rawai · Phuket 83130
            </p>
          </div>

          {/* Receipt droite — desktop seulement */}
          <div className="hidden md:flex items-center justify-center px-8 py-14">
            <div style={{ transform: 'rotate(-1.5deg)', maxWidth: '200px', width: '100%' }}>
              <SevenElevenReceipt locale={locale} />
            </div>
          </div>

        </div>

      </section>

      <section id="rawai" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32" style={{ background: '#f8f4eb' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />

        {/* ── Décos scrapbook tropicales ── */}
        <img src="/collage/hibiscus.png" alt="" className="pointer-events-none absolute hidden md:block" style={{ width: '180px', top: '40px', right: '-60px', transform: 'rotate(18deg)', opacity: 0.75, zIndex: 0 }} />
        <img src="/collage/caladium-leaf.png" alt="" className="pointer-events-none absolute hidden md:block" style={{ width: '160px', top: '320px', left: '-60px', transform: 'rotate(-12deg)', opacity: 0.60, zIndex: 0 }} />
        <img src="/collage/mango-sticky-rice.png" alt="" className="pointer-events-none absolute hidden md:block" style={{ width: '160px', top: '620px', right: '-55px', transform: 'rotate(10deg)', opacity: 0.80, mixBlendMode: 'multiply', zIndex: 0 }} />
        <img src="/collage/tom-yum-bowl.png" alt="" className="pointer-events-none absolute hidden md:block" style={{ width: '200px', top: '900px', right: '-70px', transform: 'rotate(-8deg)', opacity: 0.70, mixBlendMode: 'multiply', zIndex: 0 }} />
        <img src="/collage/coconut-drink.png" alt="" className="pointer-events-none absolute hidden md:block" style={{ width: '160px', top: '1150px', left: '-55px', transform: 'rotate(8deg)', opacity: 0.75, mixBlendMode: 'multiply', zIndex: 0 }} />
        <img src="/collage/tom-kha-plate.png" alt="" className="pointer-events-none absolute hidden md:block" style={{ width: '170px', top: '1400px', left: '-65px', transform: 'rotate(10deg)', opacity: 0.75, mixBlendMode: 'multiply', zIndex: 0 }} />
        <img src="/collage/pad-thai.png" alt="" className="pointer-events-none absolute hidden md:block" style={{ width: '180px', top: '1700px', right: '-60px', transform: 'rotate(-6deg)', opacity: 0.75, mixBlendMode: 'multiply', zIndex: 0 }} />
        <img src="/collage/dragonfruit-nobg.png" alt="" className="pointer-events-none absolute hidden md:block" style={{ width: '190px', bottom: '120px', right: '-65px', transform: 'rotate(-6deg)', opacity: 0.72, zIndex: 0 }} />

        <div className="relative mx-auto max-w-5xl">

          {/* Header */}
          <div className="mb-20 text-center">
            <p className="reveal font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>Out &amp; About · Rawai</p>
            <h2 className="reveal reveal-delay-1 font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>{t.rawaiTitle}</h2>
          </div>

          {/* ── PLAGES ─────────────────────────────── */}
          <div className="mb-2 flex items-center gap-4">
            <p className="font-script text-[22px]" style={{ color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Les Plages' : 'The Beaches'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>

          {/* 3 plages côte à côte — vidéo + overlay texte */}
          <div className="reveal mb-16 grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden" style={{ border: '1px solid rgba(31,27,24,0.08)' }}>

            {/* Nai Harn */}
            <div className="relative overflow-hidden group h-[300px] md:h-[480px]" style={{ borderRight: '1px solid rgba(31,27,24,0.10)' }}>
              <img src="/poster-nai-harn.jpg" alt="" className="md:hidden w-full h-full object-cover" style={{ filter: 'sepia(0.10) contrast(1.04) brightness(0.92)' }} />
              <video autoPlay muted loop playsInline preload="metadata" className="hidden md:block" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.04) brightness(0.92)', transform: 'scale(1.04)' }}>
                <source src="/IMG_2573-web.mp4" type="video/mp4" />
              </video>
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.78) 0%, rgba(26,23,20,0.18) 50%, transparent 100%)' }} />
              {/* Texte bas */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(255,248,236,0.60)' }}>{locale === 'fr' ? 'Plage' : 'Beach'}</p>
                <h3 className="font-display mt-1 text-[32px] uppercase leading-none" style={{ color: '#fff8ec' }}>Nai Harn</h3>
                <p className="mt-2 text-[11px] leading-[1.65]" style={{ color: 'rgba(255,248,236,0.72)', maxWidth: '220px' }}>{locale === 'fr' ? 'Massages sur la plage et restos en bord de mer. La plage préférée des locaux. Transats à louer.' : 'Beach massages and restaurants on the sand. The locals\' favourite. Sun loungers for hire.'}</p>
              </div>
              {/* Numéro coin haut */}
              <p className="absolute top-5 left-6 font-label text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,248,236,0.35)' }}>01</p>
            </div>

            {/* Ya Nui */}
            <div className="relative overflow-hidden group h-[300px] md:h-[480px]" style={{ borderRight: '1px solid rgba(31,27,24,0.10)' }}>
              <img src="/poster-ya-nui.jpg" alt="" className="md:hidden w-full h-full object-cover" style={{ filter: 'sepia(0.10) contrast(1.04) brightness(0.92)' }} />
              <video autoPlay muted loop playsInline preload="metadata" className="hidden md:block" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.04) brightness(0.92)', transform: 'scale(1.04)' }}>
                <source src="/IMG_5636-web.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.78) 0%, rgba(26,23,20,0.18) 50%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(255,248,236,0.60)' }}>{locale === 'fr' ? 'Crique secrète' : 'Secret cove'}</p>
                <h3 className="font-display mt-1 text-[32px] uppercase leading-none" style={{ color: '#fff8ec' }}>Ya Nui</h3>
                <p className="mt-2 text-[11px] leading-[1.65]" style={{ color: 'rgba(255,248,236,0.72)', maxWidth: '220px' }}>{locale === 'fr' ? 'Notre préférée. Snorkeling, kayak et le meilleur smoothie mangue passion de Thaïlande. Kayaks à louer pour rejoindre la petite île en face.' : 'Our favourite. Snorkeling, kayak and the best mango passion fruit shake in Thailand. Rent a kayak to reach the small island just opposite.'}</p>
              </div>
              <p className="absolute top-5 left-6 font-label text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,248,236,0.35)' }}>02</p>
            </div>

            {/* Rawai */}
            <div className="relative overflow-hidden group h-[300px] md:h-[480px]">
              <img src="/poster-rawai.jpg" alt="" className="md:hidden w-full h-full object-cover" style={{ filter: 'sepia(0.10) contrast(1.04) brightness(0.92)' }} />
              <video autoPlay muted loop playsInline preload="metadata" className="hidden md:block" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.04) brightness(0.92)', transform: 'scale(1.04)' }}>
                <source src="/IMG_0987-web.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.78) 0%, rgba(26,23,20,0.18) 50%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(255,248,236,0.60)' }}>{locale === 'fr' ? 'Front de mer' : 'Seafront'}</p>
                <h3 className="font-display mt-1 text-[32px] uppercase leading-none" style={{ color: '#fff8ec' }}>Rawai</h3>
                <p className="mt-2 text-[11px] leading-[1.65]" style={{ color: 'rgba(255,248,236,0.72)', maxWidth: '220px' }}>{locale === 'fr' ? 'Couchers de soleil, restos face à la mer, départ bateaux longue queue et speedboats. Pas de baignade mais très agréable. Ne pas louper le marché aux poissons à gauche du pier.' : 'Sunset restaurants, longtail boats and speedboats to the islands. No swimming but lovely atmosphere. Don\'t miss the fish market just left of the pier.'}</p>
              </div>
              <p className="absolute top-5 left-6 font-label text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,248,236,0.35)' }}>03</p>
            </div>

          </div>

          {/* ── RESTAURANTS ─────────────────────────── */}
          <div className="mb-2 flex items-center gap-4">
            <p className="font-script text-[22px]" style={{ color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Les Restos' : 'Restaurants'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>

          {RESTAURANTS.map((r, i) => (
            <div key={r.name} className="reveal group py-5" style={{ borderBottom: '1px solid rgba(31,27,24,0.08)' }}>
              <div className="flex items-start justify-between gap-8">
                <div className="flex gap-5 items-start">
                  <span className="font-label text-[7.5px] uppercase tracking-[0.18em] mt-1.5 w-5 shrink-0" style={{ color: 'rgba(31,27,24,0.25)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-display text-[clamp(17px,1.8vw,24px)] uppercase leading-none" style={{ color: '#1a1714' }}>{r.name}</p>
                    {r.detail && <p className="font-label mt-1 text-[7px] uppercase tracking-[0.20em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{r.detail}</p>}
                    {r.note && <p className="mt-2 text-[11.5px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.52)', maxWidth: '560px' }}>{r.note}</p>}
                  </div>
                </div>
                <a href={r.maps} target="_blank" rel="noopener noreferrer" className="font-label shrink-0 border-b pb-px text-[7.5px] uppercase tracking-[0.20em] opacity-40 hover:opacity-80 transition-opacity mt-1" style={{ borderColor: 'rgba(31,27,24,0.20)', color: '#1a1714' }}>Maps →</a>
              </div>
            </div>
          ))}

          {/* ── WELLNESS & ACTIVITÉS ─────────────────── */}
          <div className="mb-2 mt-16 flex items-center gap-4">
            <p className="font-script text-[22px]" style={{ color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Wellness & Activités' : 'Wellness & Activities'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>

          {/* Wellness — liste avec description + Maps */}
          <div className="mb-16">
            {[
              {
                num: '01',
                label: locale === 'fr' ? 'Vue panoramique · Workout' : 'Panoramic view · Workout',
                name: 'Promthep Cape',
                desc: locale === 'fr'
                  ? 'La plus belle vue de Phuket — et le meilleur workout. Je vais faire cette rando tous les matins de 8h à 9h après l\'école. Rejoignez-moi si vous voulez.'
                  : 'Best view in Phuket — and the best workout. I go on this hike every morning 8–9am after school drop-off. Join me if you want.',
                maps: 'https://maps.google.com/?q=Promthep+Cape+Phuket',
              },
              ...WELLNESS.filter(w => w.name !== 'Promthep Cape').map((w, i) => ({
                num: `0${i + 2}`,
                label: (locale === 'fr' ? w.detail : w.detailEn) || '',
                name: w.name,
                desc: locale === 'fr' ? (w.note || null) : (w.noteEn || null),
                maps: w.maps,
              })),
            ].map((item) => (
              <div key={item.name} className="reveal" style={{ borderBottom: '1px solid rgba(31,27,24,0.08)' }}>
                <div className="flex items-start justify-between py-5 gap-8">
                  <div className="flex gap-5 items-start flex-1">
                    <span className="font-label text-[7.5px] uppercase tracking-[0.18em] mt-1.5 w-5 shrink-0" style={{ color: 'rgba(31,27,24,0.25)' }}>{item.num}</span>
                    <div>
                      <p className="font-display text-[clamp(17px,1.8vw,24px)] uppercase leading-none" style={{ color: '#1a1714' }}>{item.name}</p>
                      {item.label && <p className="font-label mt-1 text-[7px] uppercase tracking-[0.20em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{item.label}</p>}
                      {item.desc && <p className="mt-2 text-[11.5px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.52)', maxWidth: '560px' }}>{item.desc}</p>}
                    </div>
                  </div>
                  <a href={item.maps ?? undefined} target="_blank" rel="noopener noreferrer" className="font-label shrink-0 border-b pb-px text-[7.5px] uppercase tracking-[0.20em] opacity-40 hover:opacity-80 transition-opacity mt-1" style={{ borderColor: 'rgba(31,27,24,0.20)', color: '#1a1714' }}>Maps →</a>
                </div>
              </div>
            ))}
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
            <p className="reveal font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? 'Au départ de Rawai' : 'Departing from Rawai'}</p>
            <h2 className="reveal reveal-delay-1 font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>
              {locale === 'fr' ? 'Day Trip\npar Bateau' : 'Day Trip\nby Boat'}
            </h2>
          </div>

          {/* ── GRAND PANNEAU VIDÉO ─────────────────────────────── */}
          <div className="reveal relative mb-0 overflow-hidden h-[280px] md:h-[520px]">
            <img src="/poster-daytrip.jpg" alt="" className="md:hidden w-full h-full object-cover" style={{ filter: 'sepia(0.12) contrast(1.05) brightness(0.85)' }} />
            <video autoPlay muted loop playsInline preload="metadata" className="hidden md:block" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.12) contrast(1.05) brightness(0.85)' }}>
              <source src="/IMG_2900-web.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.90) 0%, rgba(26,23,20,0.30) 45%, rgba(26,23,20,0.10) 100%)' }} />
            {/* Longtail — info bas gauche */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12" style={{ maxWidth: '420px' }}>
              <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(255,248,236,0.50)' }}>{locale === 'fr' ? 'Au départ de Rawai Beach' : 'Departing from Rawai Beach'}</p>
              <h3 className="font-display mt-2 text-[clamp(28px,4vw,52px)] uppercase leading-none" style={{ color: '#fff8ec' }}>{locale === 'fr' ? 'Îles &\nDaytrips' : 'Islands &\nDay Trips'}</h3>
              <p className="mt-3 text-[12px] leading-[1.75]" style={{ color: 'rgba(255,248,236,0.68)', maxWidth: '340px' }}>
                {locale === 'fr'
                  ? 'Lon, Bon, Coral, Racha, Koh Phi Phi — tout est accessible depuis le pier de Rawai, à 5 min à pied. En longtail pour les îles proches, en speedboat pour aller plus loin.'
                  : 'Lon, Bon, Coral, Racha, Koh Phi Phi — all reachable from Rawai pier, 5 min walk away. Longtail for nearby islands, speedboat for further adventures.'}
              </p>
            </div>
            {/* Photo longtail supprimée */}
          </div>

          {/* ── BANDE INFO ──────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ background: '#2a2420', borderTop: '1px solid rgba(255,248,236,0.06)' }}>

            {/* Longtail */}
            <div className="p-8 md:p-10" style={{ borderRight: '1px solid rgba(255,248,236,0.07)' }}>
              <p className="font-label text-[7px] uppercase tracking-[0.26em]" style={{ color: 'rgba(255,248,236,0.35)' }}>{locale === 'fr' ? 'Bateau traditionnel' : 'Traditional boat'}</p>
              <p className="font-display mt-2 text-[22px] uppercase leading-none" style={{ color: '#fff8ec' }}>Longtail</p>
              <p className="mt-3 text-[11.5px] leading-[1.75]" style={{ color: 'rgba(255,248,236,0.58)' }}>
                {locale === 'fr'
                  ? 'Le bateau local par excellence. Lent, authentique, économique. Parfait pour Lon, Bon ou Coral Island — à négocier directement sur la plage.'
                  : 'The local classic. Slow, authentic, cheap. Perfect for Lon, Bon or Coral Island — negotiate directly on the beach.'}
              </p>
              <div className="mt-5 space-y-1.5">
                {[
                  { label: locale === 'fr' ? 'Lon Island' : 'Lon Island', time: '10 min' },
                  { label: locale === 'fr' ? 'Bon Island' : 'Bon Island', time: '15 min' },
                  { label: locale === 'fr' ? 'Coral Island' : 'Coral Island', time: '30 min' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="font-label text-[8px] uppercase tracking-[0.16em]" style={{ color: 'rgba(255,248,236,0.40)' }}>{item.label}</span>
                    <span className="font-label text-[8px] uppercase tracking-[0.12em]" style={{ color: 'rgba(255,248,236,0.25)' }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Boat Service */}
            <div className="p-8 md:p-10" style={{ borderRight: '1px solid rgba(255,248,236,0.07)' }}>
              <p className="font-label text-[7px] uppercase tracking-[0.26em]" style={{ color: 'rgba(255,248,236,0.35)' }}>{locale === 'fr' ? 'Réservation · Rawai Beach' : 'Booking · Rawai Beach'}</p>
              <p className="font-display mt-2 text-[22px] uppercase leading-none" style={{ color: '#fff8ec' }}>Boat Service</p>
              <p className="mt-3 text-[11.5px] leading-[1.75]" style={{ color: 'rgba(255,248,236,0.58)' }}>
                {locale === 'fr'
                  ? 'Sur place à Rawai Beach ou directement par téléphone. Les prix varient selon la destination et la saison — négocier est normal et attendu.'
                  : 'On site at Rawai Beach or by phone. Prices vary by destination and season — bargaining is expected and normal.'}
              </p>
              <div className="mt-5 space-y-2">
                <a href="tel:+66814526859" className="font-label flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] opacity-60 hover:opacity-100 transition-opacity" style={{ color: '#fff8ec' }}>
                  <span style={{ opacity: 0.4 }}>→</span> Ar-non · 081-452-6859
                </a>
                <a href="tel:+66824573860" className="font-label flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] opacity-60 hover:opacity-100 transition-opacity" style={{ color: '#fff8ec' }}>
                  <span style={{ opacity: 0.4 }}>→</span> Poo · 082-457-3860
                </a>
              </div>
            </div>

            {/* Plus Loin */}
            <div className="p-8 md:p-10 relative">
              <span className="stamp-important absolute right-6 top-6 z-10" style={{ width: '58px', height: '58px', transform: 'rotate(6deg)', fontSize: '6.5px' }}>
                <span style={{ fontSize: '7.5px' }}>réveil</span>
                <span>4h00</span>
              </span>
              <p className="font-label text-[7px] uppercase tracking-[0.26em]" style={{ color: 'rgba(255,248,236,0.35)' }}>{locale === 'fr' ? 'Pour les courageux' : 'For the brave'}</p>
              <p className="font-display mt-2 text-[22px] uppercase leading-none" style={{ color: '#fff8ec' }}>{locale === 'fr' ? 'Plus Loin' : 'Further Away'}</p>
              <p className="mt-3 text-[11.5px] leading-[1.75]" style={{ color: 'rgba(255,248,236,0.58)' }}>
                {locale === 'fr'
                  ? 'Koh Phi Phi et James Bond Island sont faisables en daytrip — mais il faut se lever TRÈS tôt (départ 4h–5h) pour profiter des spots avant les foules.'
                  : 'Koh Phi Phi and James Bond Island are doable as day trips — but you need to leave VERY early (4–5am) to enjoy the spots before the crowds arrive.'}
              </p>
              <div className="mt-5 space-y-1.5">
                {[
                  { label: 'Koh Phi Phi', time: locale === 'fr' ? '1h30 speedboat' : '1.5h speedboat' },
                  { label: 'James Bond Island', time: locale === 'fr' ? '2h bateau' : '2h by boat' },
                  { label: 'Racha Island', time: '45 min speedboat' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="font-label text-[8px] uppercase tracking-[0.16em]" style={{ color: 'rgba(255,248,236,0.40)' }}>{item.label}</span>
                    <span className="font-label text-[8px] uppercase tracking-[0.12em]" style={{ color: 'rgba(255,248,236,0.25)' }}>{item.time}</span>
                  </div>
                ))}
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
            <p className="reveal font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>{locale === 'fr' ? "Au-delà de Rawai" : "Beyond Rawai"}</p>
            <h2 className="reveal reveal-delay-1 font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>
              {locale === 'fr' ? 'Phuket' : 'Phuket'}
            </h2>
          </div>

          {/* ── CULTURE ───────────────────────────────────────── */}
          <div className="mb-2 flex items-center gap-4">
            <p className="font-script text-[22px]" style={{ color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Culture' : 'Culture'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div className="mb-16">
            {[
              { num: '01', name: 'Big Buddha', label: locale === 'fr' ? 'Monument' : 'Landmark', desc: locale === 'fr' ? '45 mètres de marbre blanc, vue panoramique sur toute l\'île. Coucher de soleil ici, c\'est quelque chose.' : '45 meters of white marble, panoramic view over the whole island. Catch the sunset — it\'s something else.', maps: 'https://maps.google.com/?q=Big+Buddha+Phuket' },
              { num: '02', name: 'Phuket Town', label: locale === 'fr' ? 'Vieille ville · 30 min' : 'Old Town · 30 min', desc: locale === 'fr' ? 'Architecture sino-portugaise, coffee shops dans des shophouses centenaires et street food de qualité. Le samedi soir, le marché de nuit envahit les rues — local et pas touristique.' : 'Sino-Portuguese architecture, specialty coffee in century-old shophouses and great street food. Saturday night, the walking street market takes over — local, not touristy.', maps: 'https://maps.google.com/?q=Phuket+Old+Town' },
              { num: '03', name: 'Wat Chalong', label: locale === 'fr' ? 'Temple · 20 min' : 'Temple · 20 min', desc: locale === 'fr' ? 'Le temple le plus vénéré de Phuket. Dorures, encens et calme — à faire le matin de préférence.' : 'The most revered temple in Phuket. Gold, incense and quiet — go in the morning.', maps: 'https://maps.google.com/?q=Wat+Chalong+Phuket' },
            ].map((item) => (
              <div key={item.name} className="reveal group py-5" style={{ borderBottom: '1px solid rgba(31,27,24,0.08)' }}>
                <div className="flex items-start justify-between gap-8">
                  <div className="flex gap-5 items-start">
                    <span className="font-label text-[7.5px] uppercase tracking-[0.18em] mt-1.5 w-5 shrink-0" style={{ color: 'rgba(31,27,24,0.25)' }}>{item.num}</span>
                    <div>
                      <p className="font-display text-[clamp(17px,1.8vw,24px)] uppercase leading-none" style={{ color: '#1a1714' }}>{item.name}</p>
                      <p className="font-label mt-1 text-[7px] uppercase tracking-[0.20em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{item.label}</p>
                      <p className="mt-2 text-[11.5px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.52)', maxWidth: '560px' }}>{item.desc}</p>
                    </div>
                  </div>
                  <a href={item.maps ?? undefined} target="_blank" rel="noopener noreferrer" className="font-label shrink-0 border-b pb-px text-[7.5px] uppercase tracking-[0.20em] opacity-40 hover:opacity-80 transition-opacity mt-1" style={{ borderColor: 'rgba(31,27,24,0.20)', color: '#1a1714' }}>Maps →</a>
                </div>
              </div>
            ))}
          </div>

          {/* ── NATURE & AVENTURE ─────────────────────────────── */}
          <div className="mb-2 flex items-center gap-4">
            <p className="font-script text-[22px]" style={{ color: 'rgba(31,27,24,0.55)' }}>{locale === 'fr' ? 'Nature & Aventure' : 'Nature & Adventure'}</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div className="mb-16">
            {[
              { num: '01', name: 'Day Sail', label: locale === 'fr' ? 'Voile · Ao Po Marina' : 'Sailing · Ao Po Marina', desc: locale === 'fr' ? 'Location de voilier pour la journée ou sunset cruise depuis Ao Po marina. La façon la plus belle de voir les îles.' : 'Charter a sailboat for the day or join a sunset cruise from Ao Po marina. The most beautiful way to see the islands.', maps: 'https://maps.google.com/?q=Ao+Po+Grand+Marina+Phuket', maps2: null, maps2label: null },
              { num: '02', name: 'Elephant Hills', label: locale === 'fr' ? 'Sanctuaire éthique' : 'Ethical sanctuary', desc: locale === 'fr' ? 'Pour voir des éléphants sans les monter. On les observe, on les nourrit, on les respecte. L\'une des rares expériences vraiment éthiques de Thaïlande.' : 'See elephants without riding them. Observe, feed and respect them. One of the few genuinely ethical experiences in Thailand.', maps: 'https://maps.google.com/?q=Elephant+Hills+Phuket', maps2: null, maps2label: null },
              { num: '03', name: 'Red Mountain', label: locale === 'fr' ? 'Golf · 15 min' : 'Golf · 15 min', desc: locale === 'fr' ? 'Le meilleur parcours de Phuket, green fees raisonnables. Pour les golfeurs sérieux — et pour les autres, Dino Golf juste à côté (mini-golf kitsch avec des dinosaures géants, incontournable).' : 'Best course in Phuket, reasonable green fees. For serious golfers — and for everyone else, Dino Golf right next door (kitsch mini-golf with giant dinosaurs, a must).', maps: 'https://maps.google.com/?q=Red+Mountain+Golf+Club+Phuket', maps2: 'https://maps.google.com/?q=Dino+Golf+Phuket', maps2label: 'Dino Golf →' },
            ].map((item) => (
              <div key={item.name} className="reveal group py-5" style={{ borderBottom: '1px solid rgba(31,27,24,0.08)' }}>
                <div className="flex items-start justify-between gap-8">
                  <div className="flex gap-5 items-start">
                    <span className="font-label text-[7.5px] uppercase tracking-[0.18em] mt-1.5 w-5 shrink-0" style={{ color: 'rgba(31,27,24,0.25)' }}>{item.num}</span>
                    <div>
                      <p className="font-display text-[clamp(17px,1.8vw,24px)] uppercase leading-none" style={{ color: '#1a1714' }}>{item.name}</p>
                      <p className="font-label mt-1 text-[7px] uppercase tracking-[0.20em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{item.label}</p>
                      <p className="mt-2 text-[11.5px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.52)', maxWidth: '560px' }}>{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 shrink-0 mt-1">
                    <a href={item.maps} target="_blank" rel="noopener noreferrer" className="font-label border-b pb-px text-[7.5px] uppercase tracking-[0.20em] opacity-40 hover:opacity-80 transition-opacity" style={{ borderColor: 'rgba(31,27,24,0.20)', color: '#1a1714' }}>Maps →</a>
                    {item.maps2 && <a href={item.maps2} target="_blank" rel="noopener noreferrer" className="font-label border-b pb-px text-[7.5px] uppercase tracking-[0.20em] opacity-40 hover:opacity-80 transition-opacity" style={{ borderColor: 'rgba(31,27,24,0.20)', color: '#1a1714' }}>{item.maps2label}</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── SHOPPING ──────────────────────────────────────── */}
          <div className="mb-2 flex items-center gap-4">
            <p className="font-script text-[22px]" style={{ color: 'rgba(31,27,24,0.55)' }}>Shopping</p>
            <div className="flex-1 border-t" style={{ borderColor: 'rgba(31,27,24,0.12)' }} />
          </div>
          <div>
            {[
              { num: '01', name: 'Rawai Plaza', label: locale === 'fr' ? 'Mall local · 2 min à pied' : 'Local mall · 2 min walk', desc: locale === 'fr' ? 'Le petit mall du quartier, juste au bout de la rue. Tops Market au rez-de-chaussée — le meilleur endroit pour acheter du bon vin et des fromages importés à prix raisonnable. Pratique pour les courses du quotidien.' : 'The neighbourhood mall, just down the street. Tops Market on the ground floor — best place to find decent wine and imported cheese at reasonable prices. Handy for everyday shopping.', maps: 'https://maps.google.com/?q=Rawai+Plaza+Phuket' },
              { num: '02', name: 'Robinson Lifestyle', label: locale === 'fr' ? 'Mall · Cinéma · 20 min' : 'Mall · Cinema · 20 min', desc: locale === 'fr' ? 'Le mall familial de Chalong. Cinéma MX4D au dernier étage, OYO (genre Chuck E. Cheese thaïlandais) idéal pour les kids quand il pleut, et plein de boutiques classiques. Le plan B parfait en journée de mousson.' : 'The family mall in Chalong. MX4D cinema on the top floor, OYO (think Thai Chuck E. Cheese) perfect for kids on a rainy day, plus all the usual shops. The perfect plan B on a monsoon day.', maps: 'https://maps.google.com/?q=Robinson+Lifestyle+Chalong+Phuket' },
              { num: '03', name: 'Central Floresta', label: locale === 'fr' ? 'Mall luxe · 35 min' : 'Luxury mall · 35 min', desc: locale === 'fr' ? 'Hermès, Louis Vuitton, Rolex sous un même toit — et une clim à 18°C qui fait du bien après une journée à 34°C. Le food court au sous-sol est une vraie bonne surprise : cheap, varié, bondé de Thaïlandais (bon signe). Juste à côté de Central Festival pour les marques plus accessibles.' : 'Hermès, Louis Vuitton, Rolex under one roof — and 18°C air-con that feels amazing after a day in 34°C heat. The basement food court is a genuine hidden gem: cheap, varied, packed with locals (always a good sign). Right next to Central Festival for more accessible brands.', maps: 'https://maps.google.com/?q=Central+Phuket+Floresta' },
            ].map((item) => (
              <div key={item.name} className="reveal group py-5" style={{ borderBottom: '1px solid rgba(31,27,24,0.08)' }}>
                <div className="flex items-start justify-between gap-8">
                  <div className="flex gap-5 items-start">
                    <span className="font-label text-[7.5px] uppercase tracking-[0.18em] mt-1.5 w-5 shrink-0" style={{ color: 'rgba(31,27,24,0.25)' }}>{item.num}</span>
                    <div>
                      <p className="font-display text-[clamp(17px,1.8vw,24px)] uppercase leading-none" style={{ color: '#1a1714' }}>{item.name}</p>
                      <p className="font-label mt-1 text-[7px] uppercase tracking-[0.20em]" style={{ color: 'rgba(31,27,24,0.35)' }}>{item.label}</p>
                      <p className="mt-2 text-[11.5px] leading-[1.65]" style={{ color: 'rgba(31,27,24,0.52)', maxWidth: '560px' }}>{item.desc}</p>
                    </div>
                  </div>
                  <a href={item.maps ?? undefined} target="_blank" rel="noopener noreferrer" className="font-label shrink-0 border-b pb-px text-[7.5px] uppercase tracking-[0.20em] opacity-40 hover:opacity-80 transition-opacity mt-1" style={{ borderColor: 'rgba(31,27,24,0.20)', color: '#1a1714' }}>Maps →</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="day-passes" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32" style={{ background: '#f8f4eb' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />

        <div className="relative mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="reveal font-label mb-3 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(31,27,24,0.40)' }}>Upgrade Your Day</p>
            <h2 className="reveal reveal-delay-1 font-display text-[clamp(34px,5vw,72px)] uppercase leading-none" style={{ color: '#1a1714' }}>{t.passesTitle}</h2>
          </div>

          {/* Grande vidéo intro avec texte overlay */}
          <div className="reveal relative mb-12 overflow-hidden h-[260px] md:h-[480px]" style={{ border: '1px solid rgba(31,27,24,0.08)' }}>
            <img src="/poster-daypass.jpg" alt="" className="md:hidden h-full w-full object-cover" style={{ filter: 'sepia(0.08) contrast(1.05) brightness(0.82)' }} />
            <video
              className="hidden md:block h-full w-full object-cover"
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
              style={{ filter: 'sepia(0.08) contrast(1.05) brightness(0.82)' }}
            >
              <source src="/IMG_2903-web.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,23,20,0.15) 0%, transparent 35%, rgba(26,23,20,0.75) 75%, rgba(26,23,20,0.92) 100%)' }} />
            {/* Label haut gauche */}
            <p className="absolute top-8 left-8 md:top-10 md:left-12 font-label text-[7px] uppercase tracking-[0.32em]" style={{ color: 'rgba(255,248,236,0.45)' }}>Upgrade Your Day</p>
            {/* Texte bas */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="font-display text-[clamp(28px,4vw,52px)] uppercase leading-none" style={{ color: '#fff8ec' }}>{t.passesTitle}</h3>
              <p className="mt-4 text-[12px] leading-[1.8]" style={{ color: 'rgba(255,248,236,0.65)', maxWidth: '560px' }}>{t.dayPassIntro}</p>
            </div>
          </div>

          {/* 3 hôtels */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden" style={{ border: '1px solid rgba(31,27,24,0.08)' }}>

            {/* The Nai Harn */}
            <div className="relative overflow-hidden group h-[320px] md:h-[480px]" style={{ borderRight: '1px solid rgba(31,27,24,0.10)' }}>
              <img src="/nai-harn-pool.jpeg" alt="The Nai Harn pool" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.04) brightness(0.88)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.82) 0%, rgba(26,23,20,0.18) 50%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(255,248,236,0.60)' }}>{locale === 'fr' ? 'Hôtel 5★ · Nai Harn · 10 min' : '5★ Hotel · Nai Harn · 10 min'}</p>
                <h3 className="font-display mt-1 text-[28px] uppercase leading-none" style={{ color: '#fff8ec' }}>The Nai Harn</h3>
                <p className="font-label mt-1.5 text-[8px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,248,236,0.50)' }}>from 2,500 THB</p>
                <p className="mt-2 text-[11px] leading-[1.65]" style={{ color: 'rgba(255,248,236,0.72)', maxWidth: '220px' }}>{locale === 'fr' ? 'Piscine à débordement face à la mer, transats, serviettes, crédit restaurant et accès gym. Vue imprenable sur la baie de Nai Harn.' : 'Infinity pool facing the sea, sunbeds, towels, restaurant credit and gym access. Stunning view over Nai Harn bay.'}</p>
                <a href="https://www.thenaiharn.com/offers/day-pass/" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[7.5px] uppercase tracking-[0.18em] opacity-60 hover:opacity-100 transition-opacity" style={{ borderColor: 'rgba(255,248,236,0.35)', color: '#fff8ec' }}>{locale === 'fr' ? 'Réserver →' : 'Book →'}</a>
              </div>
              <p className="absolute top-5 left-6 font-label text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,248,236,0.35)' }}>01</p>
            </div>

            {/* SAii Laguna */}
            <div className="relative overflow-hidden group h-[320px] md:h-[480px]" style={{ borderRight: '1px solid rgba(31,27,24,0.10)' }}>
              <img src="/saii-laguna.jpeg" alt="SAii Laguna Phuket" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.04) brightness(0.88)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.82) 0%, rgba(26,23,20,0.18) 50%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(255,248,236,0.60)' }}>{locale === 'fr' ? 'Hôtel 5★ · Bangtao · 30 min' : '5★ Hotel · Bangtao · 30 min'}</p>
                <h3 className="font-display mt-1 text-[28px] uppercase leading-none" style={{ color: '#fff8ec' }}>SAii Laguna</h3>
                <p className="font-label mt-1.5 text-[8px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,248,236,0.50)' }}>from 800 THB</p>
                <p className="mt-2 text-[11px] leading-[1.65]" style={{ color: 'rgba(255,248,236,0.72)', maxWidth: '220px' }}>{locale === 'fr' ? 'Toboggan de 55m, piscine adultes, accès plage, crédit restaurant. Idéal en famille et bonne excuse pour découvrir le nord de l\'île.' : 'A bit further but perfect with kids — 55m waterslide, adults-only pool, beach access, dining credit. Great excuse to discover the north of the island.'}</p>
                <a href="https://www.saiihotels.com/laguna-phuket/things-to-do/resort-daypass/" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[7.5px] uppercase tracking-[0.18em] opacity-60 hover:opacity-100 transition-opacity" style={{ borderColor: 'rgba(255,248,236,0.35)', color: '#fff8ec' }}>{locale === 'fr' ? 'Réserver →' : 'Book →'}</a>
              </div>
              <p className="absolute top-5 left-6 font-label text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,248,236,0.35)' }}>02</p>
            </div>

            {/* Sri Panwa */}
            <div className="relative overflow-hidden group h-[320px] md:h-[480px]">
              <img src="/sri-panwa-pool.jpeg" alt="Sri Panwa pool" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.10) contrast(1.04) brightness(0.88)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.82) 0%, rgba(26,23,20,0.18) 50%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-label text-[7px] uppercase tracking-[0.28em]" style={{ color: 'rgba(255,248,236,0.60)' }}>{locale === 'fr' ? 'Hôtel 5★ · Cap Panwa · 25 min' : '5★ Hotel · Cape Panwa · 25 min'}</p>
                <h3 className="font-display mt-1 text-[28px] uppercase leading-none" style={{ color: '#fff8ec' }}>Sri Panwa</h3>
                <p className="font-label mt-1.5 text-[8px] uppercase tracking-[0.18em]" style={{ color: 'rgba(255,248,236,0.50)' }}>from 1,888 THB</p>
                <p className="mt-2 text-[11px] leading-[1.65]" style={{ color: 'rgba(255,248,236,0.72)', maxWidth: '220px' }}>{locale === 'fr' ? 'Piscine forêt panoramique de 48m, vue sur l\'Andaman, daybed réservé, crédit repas chez Baba Chino. Le plus spectaculaire des trois.' : '48m forest pool with panoramic Andaman views, reserved daybed, dining credit at Baba Chino. The most spectacular of the three.'}</p>
                <a href="https://www.sripanwa.com/phuket-day-pass/" target="_blank" rel="noopener noreferrer" className="font-label mt-3 inline-block border-b pb-px text-[7.5px] uppercase tracking-[0.18em] opacity-60 hover:opacity-100 transition-opacity" style={{ borderColor: 'rgba(255,248,236,0.35)', color: '#fff8ec' }}>{locale === 'fr' ? 'Réserver →' : 'Book →'}</a>
              </div>
              <p className="absolute top-5 left-6 font-label text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(255,248,236,0.35)' }}>03</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUESTIONNAIRE ──────────────────────────────────────────── */}
      <section id="guest-form" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-32" style={{ background: '#1a1714' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="reveal font-label mb-4 text-[9px] uppercase tracking-[0.32em]" style={{ color: 'rgba(248,244,235,0.35)' }}>{locale === 'fr' ? 'Avant votre arrivée' : 'Before you arrive'}</p>
          <h2 className="reveal reveal-delay-1 font-display text-[clamp(34px,5vw,64px)] uppercase leading-none" style={{ color: '#f8f4eb' }}>
            {locale === 'fr' ? 'Préparez\nvotre séjour' : 'Plan\nyour stay'}
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-[13px] leading-[1.8]" style={{ color: 'rgba(248,244,235,0.55)', maxWidth: '480px', margin: '24px auto 0' }}>
            {locale === 'fr'
              ? 'Cocktails de bienvenue, transfert aéroport, préférences petit-déjeuner, couchage enfants — remplissez le formulaire et on prépare tout avant votre arrivée.'
              : 'Welcome cocktails, airport transfer, breakfast preferences, kids\' sleeping arrangements — fill in the form and we\'ll have everything ready before you arrive.'}
          </p>
          <button
            onClick={() => setFormOpen(true)}
            className="reveal reveal-delay-3 font-label mt-10 inline-block border px-8 py-4 text-[10px] uppercase tracking-[0.26em] transition-colors text-[#f8f4eb] hover:bg-[#f8f4eb] hover:text-[#1a1714]"
            style={{ borderColor: 'rgba(248,244,235,0.35)' }}
          >
            {locale === 'fr' ? 'Remplir le formulaire →' : 'Fill in the form →'}
          </button>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="relative overflow-hidden bg-[#f8f4eb] px-6 py-16 md:px-10 md:py-20" style={{ borderTop: '1px solid rgba(31,27,24,0.10)' }}>
        {/* grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '160px 160px' }} />

        <div className="relative mx-auto max-w-6xl">

          {/* Top row: signature + links */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

            {/* Signature */}
            <div className="reveal flex-shrink-0">
              <p className="font-script text-[clamp(24px,3vw,36px)] leading-none" style={{ color: '#1a1714' }}>
                Lucie &amp;<br />Guillaume
              </p>
              <p className="font-label mt-3 text-[8px] uppercase tracking-[0.28em]" style={{ color: 'rgba(31,27,24,0.40)' }}>
                Baan Sayiuan — Rawai, Phuket
              </p>
            </div>

            {/* Address + contact */}
            <div className="reveal reveal-delay-1 flex flex-col gap-6 md:flex-row md:gap-16">

              <div>
                <p className="font-label mb-3 text-[8px] uppercase tracking-[0.28em]" style={{ color: 'rgba(31,27,24,0.35)' }}>
                  {locale === 'fr' ? 'Adresse' : 'Address'}
                </p>
                <a
                  href="https://maps.google.com/?q=59/45+Soi+Sayiuan+13+Rawai+Phuket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] leading-[1.8]"
                  style={{ color: 'rgba(31,27,24,0.65)' }}
                >
                  59/45 Soi Sayiuan 13<br />
                  Rawai, Mueang Phuket<br />
                  83130 Thailand
                </a>
              </div>

              <div>
                <p className="font-label mb-3 text-[8px] uppercase tracking-[0.28em]" style={{ color: 'rgba(31,27,24,0.35)' }}>
                  Contact
                </p>
                <a
                  href="https://wa.me/66952824035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label text-[10px] uppercase tracking-[0.20em] hover:opacity-100 transition-opacity"
                  style={{ color: 'rgba(31,27,24,0.55)' }}
                >
                  WhatsApp →
                </a>
              </div>

              <div>
                <p className="font-label mb-3 text-[8px] uppercase tracking-[0.28em]" style={{ color: 'rgba(31,27,24,0.35)' }}>
                  {locale === 'fr' ? 'Votre séjour' : 'Your stay'}
                </p>
                <button
                  onClick={() => setFormOpen(true)}
                  className="font-label text-[10px] uppercase tracking-[0.20em] hover:opacity-100 transition-opacity"
                  style={{ color: 'rgba(31,27,24,0.55)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  {locale === 'fr' ? 'Préparez votre séjour →' : 'Plan Your Stay →'}
                </button>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t" style={{ borderColor: 'rgba(31,27,24,0.10)' }} />

          {/* Bottom row: copyright */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="font-label text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.28)' }}>
              © 2025 Baan Sayiuan — Rawai, Phuket, Thailand
            </p>
            <p className="font-label text-[8px] uppercase tracking-[0.22em]" style={{ color: 'rgba(31,27,24,0.20)' }}>
              Made with love for our guests
            </p>
          </div>

        </div>
      </footer>

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
