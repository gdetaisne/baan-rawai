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
  
  // WiFi (can be overridden by env vars)
  wifi: {
    name: process.env.NEXT_PUBLIC_WIFI_NAME || 'BaanSayiuan_5G',
    password: process.env.NEXT_PUBLIC_WIFI_PASSWORD || 'UpdateBeforeArrival',
  },
  
  // Door code
  doorCode: process.env.NEXT_PUBLIC_DOOR_CODE || 'XXXX',
  
  // External links
  links: {
    esim: 'https://www.airalo.com/thailand-esim',
    tm0Form: process.env.NEXT_PUBLIC_TM0_FORM_URL || 'https://www.example.com/tm0',
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
  
  // Day passes (TODO: Add real booking links)
  dayPasses: [
    { name: 'The Nai Harn', description: 'Panoramic views', link: '#' },
    { name: 'Kata Rocks', description: 'Design hotel, very chic', link: '#' },
    { name: 'Sri Panwa', description: 'Sunset infinity pool', link: '#' },
  ],
  
  // Restaurants (TODO: Add real names and Google Maps links)
  restaurants: [
    { name: 'Restaurant Name 1', description: 'Easy lunch, kid-friendly', mapsLink: '#' },
    { name: 'Restaurant Name 2', description: 'Sunset seafood on the sand', mapsLink: '#' },
    { name: 'Restaurant Name 3', description: 'Elevated Thai cuisine', mapsLink: '#' },
    { name: 'Restaurant Name 4', description: 'Italian, great pizza', mapsLink: '#' },
    { name: 'Restaurant Name 5', description: 'Beach club vibes', mapsLink: '#' },
  ],
  
  // Spas (TODO: Add real names)
  spas: [
    { name: 'Spa Name 1', note: 'Traditional Thai massage' },
    { name: 'Spa Name 2', note: 'Luxury spa experience' },
  ],
} as const;
