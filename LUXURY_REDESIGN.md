# Baan Sayiuan - Luxury Redesign (Capella x Raffles)

## Overview

Complete transformation of the guest microsite from a beige/document-style design to a **cinematic luxury hospitality experience** inspired by Capella Hotels and Raffles Singapore.

## Design Philosophy

**From**: Boring beige, doc-like, Notion-esque  
**To**: Boutique hotel website / travel magazine - editorial, cinematic, confident

### Key Principles

1. **Cinematic, not beige**: Deep ink backgrounds, high contrast, intentional color use
2. **Editorial rhythm**: Magazine-style layout with generous vertical spacing
3. **Premium micro-interactions**: Subtle fades, smooth scrolling, refined hover states
4. **Preserved usability**: Airport-mode functionality intact, mobile-first maintained

## Color System

```css
--bg: #0F1416          /* Deep ink background (outer page) */
--paper: #F7F4EE       /* Warm paper surface (reading surface) */
--ink: #101415         /* Primary text on paper */
--muted: #6B7177       /* Secondary text */
--accent: #B65E3C      /* Burnt copper (buttons/links only) */
--accent2: #1F2A28     /* Deep green-black (headings option) */
--highlight: #E7DED2   /* Soft highlight blocks */
```

### Color Usage Rules

- **Paper reading surface** dominates (Capella calm)
- **Deep ink** used for outer frame and to create depth
- **Accent** used sparingly (one primary button per screen)
- **No bright tropical colors** - sophistication through restraint

## Typography Scale

### Fonts
- **Display**: Cormorant Garamond (serif, for headings)
- **Body**: Inter (sans-serif)

### Scale
- `text-display-xl`: 40-56px (Hero titles)
- `text-display-lg`: 32-44px (Large headings)
- `text-display-md`: 24-36px (Section titles)
- `text-display-sm`: 20-28px (Subsections)
- `text-body-lg`: 18px (Intro paragraphs)
- `text-body`: 16px (Standard text)
- `text-label`: 11-12px, tracking 0.15em, uppercase (Section labels)

### Features
- Optical sizing enabled where possible
- Tight tracking for large headlines (-0.02em)
- Generous line-height (1.7 for body)
- Small caps for editorial section labels

## Layout Architecture

### Luxury Layout (`LuxuryLayout.tsx`)
- **Outer**: Deep ink background (#0F1416)
- **Inner**: Centered paper column (max-width 1040px)
- **Desktop**: Rounded corners on paper frame
- **Mobile**: Full-width paper surface

### Sticky Header (`LuxuryHeader.tsx`)
- Minimal wordmark (Baan Sayiuan)
- Language toggle (FR/EN)
- "Prepare your stay" CTA (desktop only)
- Sticky with blur effect on scroll
- Transitions from transparent to `bg-paper/95`

### Mobile Bar (`StickyMobileBar.tsx`)
- Fixed bottom bar
- Three actions: WhatsApp, Directions, WiFi
- Deep ink background (#0F1416)
- White text and icons
- Preserved from previous design, restyled

## Component System

### Core Components

#### `EditorialSection`
Magazine-style section wrapper with:
- Small caps label (e.g., "ESSENTIALS")
- Display heading (H2)
- Optional description with hairline divider
- Configurable background (default or highlight)
- Consistent padding and spacing

#### `EditorialCard`
Premium content card with:
- White background
- Hairline border (`border-hairline`)
- Refined padding (p-8 to p-10)
- Rounded corners (`rounded-luxury`)
- Subtle shadow on hover (optional)

#### `LuxuryListItem`
Raffles-style list item with:
- Display font for name
- Secondary text for description
- External link button (optional)
- Hairline border separator
- Elegant hierarchy

#### `Button`
Three variants:
- **Primary**: Accent background, white text
- **Secondary**: White bg, hairline border
- **Ghost**: Text link with underline on hover

Sizes: sm, default, lg

#### `CopyField`
Updated with:
- Hairline border styling
- Locked state with Lock icon
- Mono font for values
- Refined copy button

### Section Components

All sections follow the luxury editorial pattern:

1. **LuxuryHero**: Full-bleed cinematic hero with overlay, translucent plaque, CTAs
2. **LuxuryBeforeArrival**: 2×2 card grid with icons, Private mode integration
3. **LuxuryArrival**: Stacked cards with highlighted Fast Track callout
4. **LuxuryRawai**: Curated lists for beaches, restaurants, massages
5. **LuxuryBoats**: 3-column excursion layout with editorial grouping
6. **LuxuryDayPasses**: Hotel cards with descriptions and booking links
7. **LuxuryAtHome**: Numbered house notes with elegant formatting
8. **LuxuryGuestForm**: Highlighted section with premium form styling

## Private Mode

Implemented with security:
- Render prop component `PrivateModeGate`
- Passcode modal with luxury styling
- API route validation (`/api/private/route.ts`)
- Session storage for unlock state
- No secrets in client-side bundle
- Rate limiting on API

### Usage Example
```tsx
<PrivateModeGate>
  {({ isUnlocked, doorCode, wifiPassword }) => (
    <CopyField
      label="Door Code"
      value={isUnlocked ? doorCode : ''}
      locked={!isUnlocked}
    />
  )}
</PrivateModeGate>
```

## Micro-Interactions

### Animations
- `animate-fade-in`: Subtle entrance (0.6s)
- `animate-slide-up`: Bottom sheet entry (0.3s)
- Smooth scroll behavior (CSS `scroll-behavior: smooth`)

### Transitions
- All colors/borders: 200ms ease
- Hover states: Subtle color shifts, no aggressive transforms
- Respects `prefers-reduced-motion`

### Hover States
- Links: Underline animation
- Buttons: Slight background color shift
- Cards: Optional shadow increase
- Icons: Color change to accent

## Accessibility

- Proper semantic HTML (`section`, `article`, `nav`)
- ARIA labels on icon buttons
- Focus states with outline
- High contrast maintained (WCAG AA minimum)
- Keyboard navigation supported
- Screen reader friendly

## Responsive Behavior

### Breakpoints
- Mobile: < 768px
- Desktop: ≥ 768px

### Mobile Optimizations
- Full-width paper surface (no rounded corners)
- Stacked layouts (cards go 1-column)
- Larger touch targets (44×44px minimum)
- Sticky bottom bar for quick actions
- Hero CTA buttons stack vertically

### Desktop Enhancements
- Paper frame with rounded corners and shadow
- Multi-column layouts (2-3 columns)
- Sticky header with blur
- Horizontal button groups
- Larger typography scale

## File Structure

```
components/
├── LuxuryLayout.tsx          # Outer frame + paper surface
├── LuxuryHeader.tsx          # Sticky header with wordmark
├── EditorialSection.tsx      # Section wrapper with label + title
├── EditorialCard.tsx         # Premium content card
├── LuxuryListItem.tsx        # Curated list item
├── PrivateModeGate.tsx       # Private mode render prop + modal
├── StickyMobileBar.tsx       # Bottom mobile bar
├── WiFiModal.tsx             # WiFi details modal
├── sections/
│   ├── LuxuryHero.tsx
│   ├── LuxuryBeforeArrival.tsx
│   ├── LuxuryArrival.tsx
│   ├── LuxuryRawai.tsx
│   ├── LuxuryBoats.tsx
│   ├── LuxuryDayPasses.tsx
│   ├── LuxuryAtHome.tsx
│   └── LuxuryGuestForm.tsx
└── ui/
    ├── Button.tsx
    └── CopyField.tsx
```

## Environment Variables

Required for private mode:
```bash
PRIVATE_ACCESS_CODE=2026
WIFI_PASSWORD=minoumi123!
DOOR_CODE="Touch screen with palm 5934 touch screen with palm (you must hear Lock Open)"
NEXT_PUBLIC_WIFI_NETWORK=Minou_5G
```

Optional:
```bash
NEXT_PUBLIC_TM0_FORM_URL=https://...
```

## Build & Deploy

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Docker (CapRover)
The existing `Dockerfile` and `captain-definition` work with the new design.
No changes needed for deployment.

## What Changed

### Removed
- Old beige/cream color palette
- PaperLayout, AnchorNav, PhotoGrid components
- CuratedListItem, InfoCard (replaced with Luxury versions)
- LanguageToggle component (integrated into header)
- Old section components (all replaced)

### Added
- Cinematic color system (deep ink + warm paper)
- LuxuryLayout with outer dark frame
- LuxuryHeader with sticky blur
- EditorialSection pattern
- LuxuryListItem for curated content
- Refined typography scale
- Premium micro-interactions

### Preserved
- All content and copy
- Mobile-first approach
- Sticky bottom bar (restyled)
- Private mode security
- FR/EN localization
- WiFi modal functionality
- Guest form structure

## Design Inspiration

### Capella Hotels (capellahotels.com)
- Restrained, cinematic aesthetic
- Deep contrast and confident typography
- Immersive transitions
- Modern luxury without excess

### Raffles Singapore (raffles.com/singapore)
- Old-world grandeur in digital form
- Elegant editorial hierarchy
- Large imagery with refined layouts
- Timeless serif/sans pairing
- Strong "sanctuary" narrative

## Quality Bar

✅ Feels like a **luxury hospitality brand website**  
✅ Not a Notion page or doc  
✅ Editorial, magazine-like reading experience  
✅ Cinematic hero and section breaks  
✅ Confident typography and generous spacing  
✅ Subtle, refined interactions  
✅ Mobile-first and accessible  
✅ Secure private mode for sensitive data  

---

**Result**: A next-level guest experience that matches the quality of the villa itself. 🏝️✨
