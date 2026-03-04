export const siteConfig = {
  name: 'Baan Sayiuan',
  address: '59/45 Soi Sayiuan 13 Rawai Phuket',
  
  // Contact
  whatsapp: {
    primary: {
      name: 'Lucie',
      number: '+66 95 282 4035',
      link: 'https://wa.me/66952824035',
    },
    secondary: {
      name: 'Guillaume',
      number: '+33 6 33 04 60 59',
      link: 'https://wa.me/33633046059',
    },
  },
  
  // Location
  maps: {
    link: 'https://maps.google.com/?q=59/45+Soi+Sayiuan+13+Rawai+Phuket',
  },
  
  // WiFi
  wifi: {
    network:  process.env.NEXT_PUBLIC_WIFI_NETWORK  || 'Minou_5G',
    password: process.env.NEXT_PUBLIC_WIFI_PASSWORD || '',
  },

  // Door code
  doorCode: process.env.NEXT_PUBLIC_DOOR_CODE || '',
  
  // External links
  links: {
    esim: 'https://esim.holafly.com/fr/esim-thailande/?tw_source=google&tw_adid=769625392446&tw_campaign=22896705552&utm_source=google&utm_medium=cpc&utm_id=22896705552&cq_src=google_ads&cq_cmp=22896705552&cq_term=sim%20tha%C3%AFlande&cq_plac=&cq_net=g&cq_plt=gp&utm_campaign=HLF-B2C_GOO_ASIA_ASIA_FR_SEA_GEN_DEST_PURCH_PUSH_PROSP_AO_ADM&utm_adgroup=GOO_ASIA_ASIA_FR_SEA_GEN_DEST_COUNTRY_ASIA_THAILAND_NA_NA_PURCH_PUSH_PROSP_AO&gad_source=1&gad_campaignid=22896705552&gbraid=0AAAAAoN3UHN0roTFux6y8A2qwy2LMJ5DX&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3CSjVfeEzqU9GQ3OOQmYVZGvrBYU3dyInc5qPQpnyFvoJr25wcimNAaAgFoEALw_wcB',
    tdacForm: 'https://tdac.immigration.go.th/arrival-card/#/tac/arrival-card/add',
  },
  
  // Boats
  boats: {
    halfDay: [
      { name: 'Coral Island (Koh Hae)', why: 'Clear water, easy snorkeling', bestFor: 'Families' },
      { name: 'Koh Bon', why: 'Quiet beach, shallow water', bestFor: 'Relaxation' },
      { name: 'Koh Lone', why: 'Local vibe, seafood lunch', bestFor: 'Authentic' },
    ],
    fullDay: [
      { name: 'Racha Yai', why: 'Best water quality', bestFor: 'Snorkeling' },
      { name: 'Racha Noi', why: 'Remote, pristine', bestFor: 'Adventure' },
    ],
    multiStop: [
      'Coral + Koh Bon + Koh Lone',
      'Racha + Coral',
    ],
  },
  
  // Beaches
  beaches: [
    { name: 'Nai Harn', description: 'Best swimming, sunbeds & massages on the beach, plenty of restaurants. Weekend market sometimes.' },
    { name: 'Ya Nui', description: 'Our favourite. Secret cove, perfect for snorkeling — kayak & parasol rental, tiny beach shack. Try the mango passion fruit shake.' },
    { name: 'Rawai', description: 'Seafront restaurants, perfect sunsets — not for swimming. Jump on a speedboat or longtail to the nearby islands in half a day or a full day.' },
  ],
  
  // Day passes - TODO: Add real booking links
  dayPasses: [
    {
      name: 'The Nai Harn',
      tagline: 'Infinity pool above the ocean',
      description: 'The most beautiful pool view on the island — a 50m infinity pool that drops straight into the Andaman. Sunbeds, towels, full restaurant & bar included. Book early, it sells out.',
      includes: ['Infinity pool', 'Sunbeds & towels', 'Restaurant credit', 'Gym access'],
      price: 'from 2,500 THB / person',
      link: '#',
    },
    {
      name: 'Kata Rocks',
      tagline: 'Design hotel, Kata hill views',
      description: 'A striking modernist hotel perched on the rocks above Kata Bay. Sleek pools, attentive service, and one of the best cocktail bars on the island. Chic without being stuffy.',
      includes: ['Pool access', 'Sunbeds', 'Food & drink credit', 'Gym & spa'],
      price: 'from 3,500 THB / person',
      link: '#',
    },
    {
      name: 'Sri Panwa',
      tagline: 'Cape Panwa, sunset side',
      description: 'Perched on Cape Panwa with 360° views — the sunset here is ridiculous. Multiple pools, a beach club, spa, and a tuk-tuk to drive you around the property. A full day out.',
      includes: ['Multiple pools', 'Beach club', 'Food & drink credit', 'Tuk-tuk shuttle'],
      price: 'from 3,000 THB / person',
      link: '#',
    },
  ],
  
  // Restaurants
  restaurants: [
    { 
      name: 'Nikita\'s', 
      description: 'Legendary beach restaurant in Rawai. Fresh seafood, cold beers, feet in the sand.', 
      mapsLink: 'https://maps.google.com/?q=Nikita\'s+Restaurant+Rawai+Phuket',
      photo: '/IMG_3365.jpeg',
    },
    { 
      name: 'Locanda del Pescatore', 
      description: 'Italian by the sea. Proper pasta, great wine list — a surprising gem in Rawai.',
      mapsLink: 'https://maps.google.com/?q=Locanda+del+Pescatore+Rawai+Phuket',
      photo: '/IMG_7234.jpeg',
    },
    {
      name: 'Le Celtique',
      description: 'French bistro in Rawai. Steak frites, wine, and a proper crêpe. A little piece of France.',
      mapsLink: 'https://maps.google.com/?q=Le+Celtique+Rawai+Phuket',
      photo: '/IMG_9878.jpeg',
    },
  ],
  
  // Activities (includes wellness)
  activities: [
    {
      name: 'Muay Thai',
      note: 'Tiger Muay Thai, 10 min from the house. Best gym on the island — pros train here. Go once, you\'re hooked.',
      category: 'sport',
      mapsLink: 'https://maps.google.com/?q=Tiger+Muay+Thai+Phuket',
    },
    {
      name: 'Ayurveda',
      note: 'Naga Ayurveda in Rawai. Traditional Indian treatments, real practitioners, not a tourist spa. Book in advance.',
      category: 'wellness',
      mapsLink: 'https://maps.google.com/?q=Naga+Ayurveda+Rawai+Phuket',
    },
    {
      name: 'Yoga',
      note: 'Prana Yoga, 5 min away. Daily classes from 7am, all levels. Morning flow with a sea breeze — hard to beat.',
      category: 'wellness',
      mapsLink: 'https://maps.google.com/?q=Prana+Yoga+Rawai+Phuket',
    },
    {
      name: 'Pilates',
      note: 'Studio 36 — reformer pilates on the island. Small groups, good instructors. Book 48h ahead, it fills up.',
      category: 'wellness',
      mapsLink: 'https://maps.google.com/?q=Studio+36+Pilates+Phuket',
    },
    {
      name: 'Massages',
      note: 'There\'s a massage shop every 50 meters in Rawai. Most are great. Budget 300–500 THB/hr. We have a favourite — just ask.',
      category: 'wellness',
      mapsLink: null,
    },
    {
      name: 'Jungceylon',
      note: 'Big mall in Patong. Cinema, supermarket, everything you forgot to pack. 30 min by Grab.',
      category: 'shopping',
      mapsLink: 'https://maps.google.com/?q=Jungceylon+Patong+Phuket',
    },
    {
      name: 'Central Festival',
      note: 'The main mall in Phuket Town. All the brands, a great food court, and proper air conditioning on a hot day.',
      category: 'shopping',
      mapsLink: 'https://maps.google.com/?q=Central+Festival+Phuket',
    },
    {
      name: 'Naka Weekend Market',
      note: 'Saturday & Sunday evenings. Street food, cheap clothes, local crafts, and an insane pad thai stall near the entrance. Go hungry.',
      category: 'market',
      mapsLink: 'https://maps.google.com/?q=Naka+Weekend+Market+Phuket',
    },
  ],
} as const;
