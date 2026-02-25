# Baan Sayiuan Guest Microsite

A fun, personal guest guide for our family home in Rawai, Phuket.

## Features

- **Mobile-first design** with sticky bottom bar (WhatsApp, Directions, WiFi)
- **Bilingual** (English/French) with persistent language preference
- **Premium design** inspired by Above Par, Aman, and Proper hotels
- **Concierge-style guide** with curated recommendations
- **Guest questionnaire** for arrival preparation

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next-intl for internationalization
- Lucide React for icons

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and update with your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your WiFi credentials, door code, etc.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Site Configuration

Edit `config/site.ts` to update:
- Contact information (WhatsApp numbers)
- WiFi credentials
- Door code
- Restaurants, beaches, spas
- Boat excursions
- Day pass hotels

### Translations

Edit translation files:
- `messages/en.json` - English translations
- `messages/fr.json` - French translations

### Images

Replace placeholder images in the Hero section:
- Edit `components/sections/Hero.tsx`
- Add images to `public/` folder
- Use Next.js `<Image>` component for optimization

## TODO List for Production

### Content Updates Needed

- [ ] Add real hero image (replace placeholder in `Hero.tsx`)
- [ ] Update WiFi credentials in `.env.local`
- [ ] Update door code in `.env.local`
- [ ] Add restaurant names and Google Maps links in `config/site.ts`
- [ ] Add spa names in `config/site.ts`
- [ ] Add day pass booking links in `config/site.ts`
- [ ] Update TM0 form link (currently placeholder)
- [ ] Implement form submission (email/API in `GuestForm.tsx`)

### Design Polish

- [ ] Add actual photos (hero, beaches, house)
- [ ] Test on various mobile devices
- [ ] Verify color contrast for accessibility
- [ ] Add meta image for social sharing

## Design System

### Colors

- **Background**: `#F7F5F2` (warm off-white)
- **Ink**: `#101415` (almost black)
- **Ink Green**: `#1F2A28` (primary text)
- **Clay**: `#D6C2B0` (surface tint)
- **Dusty Blue**: `#7A8A8F` (secondary text)
- **Coral**: `#C96A4A` (accent, buttons)

### Typography

- **Headings**: Playfair Display
- **Body**: Inter

### Principles

- Large whitespace
- Generous padding
- Calm rhythm
- Short sentences
- No emojis
- Luxury through restraint

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Build for production

```bash
npm run build
npm run start
```

## License

Private project - All rights reserved
