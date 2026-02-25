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
  
  // WiFi - network name can be public, password requires private mode
  wifi: {
    network: process.env.NEXT_PUBLIC_WIFI_NETWORK || 'Minou_5G',
  },
  
  // Private mode
  privateAccessEnabled: true,
  
  // External links
  links: {
    esim: 'https://esim.holafly.com/fr/esim-thailande/?tw_source=google&tw_adid=769625392446&tw_campaign=22896705552&utm_source=google&utm_medium=cpc&utm_id=22896705552&cq_src=google_ads&cq_cmp=22896705552&cq_term=sim%20tha%C3%AFlande&cq_plac=&cq_net=g&cq_plt=gp&utm_campaign=HLF-B2C_GOO_ASIA_ASIA_FR_SEA_GEN_DEST_PURCH_PUSH_PROSP_AO_ADM&utm_adgroup=GOO_ASIA_ASIA_FR_SEA_GEN_DEST_COUNTRY_ASIA_THAILAND_NA_NA_PURCH_PUSH_PROSP_AO&gad_source=1&gad_campaignid=22896705552&gbraid=0AAAAAoN3UHN0roTFux6y8A2qwy2LMJ5DX&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3CSjVfeEzqU9GQ3OOQmYVZGvrBYU3dyInc5qPQpnyFvoJr25wcimNAaAgFoEALw_wcB',
    tm0Form: process.env.NEXT_PUBLIC_TM0_FORM_URL || '', // Empty = hide button
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
    { name: 'Ya Nui', description: 'Small cove, calm water' },
    { name: 'Ao Sane', description: 'Rocky, good snorkeling' },
    { name: 'Rawai', description: 'Sunset views, not for swimming' },
  ],
  
  // Day passes - TODO: Add real booking links
  dayPasses: [
    { name: 'The Nai Harn', description: 'Panoramic views, infinity pool', link: '#' },
    { name: 'Kata Rocks', description: 'Design hotel, very chic', link: '#' },
    { name: 'Sri Panwa', description: 'Sunset infinity pool', link: '#' },
  ],
  
  // Restaurants - TODO: Add real names and Google Maps links
  restaurants: [
    { name: 'Restaurant Name 1', description: 'Easy lunch, kid-friendly', mapsLink: '#' },
    { name: 'Restaurant Name 2', description: 'Sunset seafood on the sand', mapsLink: '#' },
    { name: 'Restaurant Name 3', description: 'Elevated Thai cuisine', mapsLink: '#' },
    { name: 'Restaurant Name 4', description: 'Italian, great pizza', mapsLink: '#' },
    { name: 'Restaurant Name 5', description: 'Beach club vibes', mapsLink: '#' },
  ],
  
  // Spas - TODO: Add real names
  spas: [
    { name: 'Spa Name 1', note: 'Traditional Thai massage' },
    { name: 'Spa Name 2', note: 'Luxury spa experience' },
  ],
} as const;
