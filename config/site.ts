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
    { name: 'Nai Harn', description: 'Main beach, best swimming' },
    { name: 'Ya Nui', description: 'Our favourite — small cove, calm water' },
    { name: 'Rawai', description: 'Sunset views, not for swimming' },
  ],
  
  // Day passes - TODO: Add real booking links
  dayPasses: [
    { name: 'The Nai Harn', description: 'Panoramic views, infinity pool', link: '#' },
    { name: 'Kata Rocks', description: 'Design hotel, very chic', link: '#' },
    { name: 'Sri Panwa', description: 'Sunset infinity pool', link: '#' },
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
  
  // Spas - TODO: Add real names
  spas: [
    { name: 'Spa Name 1', note: 'Traditional Thai massage' },
    { name: 'Spa Name 2', note: 'Luxury spa experience' },
  ],

  // Activities
  activities: [
    { name: 'Muay Thai', note: 'Tiger Muay Thai — 10 min away. Best gym on the island.', category: 'sport' },
    { name: 'Ayurveda', note: 'Naga Ayurveda — traditional treatments, highly recommended.', category: 'wellness' },
    { name: 'Yoga', note: 'Prana Yoga — daily classes, all levels.', category: 'wellness' },
    { name: 'Pilates', note: 'Studio 36 — reformer pilates, book in advance.', category: 'wellness' },
    { name: 'Jungceylon', note: 'Patong — big mall, cinema, supermarket.', category: 'shopping' },
    { name: 'Central Festival', note: 'Phuket Town — the main mall, all brands.', category: 'shopping' },
    { name: 'Night Market', note: 'Naka Weekend Market (Sat & Sun) — street food, clothes, everything.', category: 'market' },
  ],
} as const;
