# Socials Component voor Toernooi Pagina's

Een herbruikbare, standalone React component voor het weergeven van sociale media links op toernooi pagina's. Deze component is volledig portable en kan eenvoudig in andere projecten worden geïntegreerd.

## 🎯 Features

- ✅ **Volledig standalone** - Geen externe dependencies nodig (behalve React en Tailwind CSS)
- ✅ **TypeScript support** - Volledig getypeerd voor type safety
- ✅ **8 Social media platforms** - X (Twitter), Facebook, Instagram, YouTube, Twitch, Discord, TikTok en Website
- ✅ **Responsive design** - Werkt perfect op alle schermformaten
- ✅ **Dark mode support** - Automatische ondersteuning voor dark mode
- ✅ **Toegankelijk** - ARIA labels en keyboard navigation
- ✅ **Whitelabel / Volledig aanpasbaar** - Pas alle kleuren, spacing, layout en styling aan naar eigen branding
- ✅ **Custom icons** - Ondersteuning voor custom icons per platform
- ✅ **Flexibele layout** - Automatische grid layout met auto-fit kolommen

## 🚀 Getting Started

### In dit project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) om de component in actie te zien.

### Component gebruiken in een ander project

De componenten zijn volledig standalone en kunnen eenvoudig gekopieerd worden naar elk React project.

#### Stap 1: Kies wat je nodig hebt

- 🔹 **Alleen de Socials grid**  
  Kopieer `components/Socials.tsx` (en optioneel `components/index.ts` voor re-export) naar je project.

- 🔹 **Volledige whitelabel configurator + preview**  
  Kopieer `components/Socials.tsx` **en** `components/SocialsConfigurator.tsx`.  
  Deze laatste bevat de editor, state management en voorbeeldlayout.

> 💡 **Tip**: Zie `COMPONENT_COPY_GUIDE.md` voor een stap-voor-stap gids inclusief best practices voor mappenstructuur.

#### Stap 2: Vereisten

Beide componenten verwachten:
- React 18+ (of React 19+)
- Tailwind CSS 4+ (werkt ook met 3.x met minimale tweaks)
- TypeScript (optioneel maar sterk aangeraden voor types zoals `SocialLink`)

#### Stap 3A: Socials component gebruiken

```tsx
import Socials, { SocialLink } from '@/components/Socials';

// In je component
const socialLinks: SocialLink[] = [
  {
    platform: 'twitter',
    url: 'https://twitter.com/jouwaccount',
    label: 'Twitter' // optioneel
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/jouwaccount',
  },
  {
    platform: 'youtube',
    url: 'https://youtube.com/@jouwkanaal',
  },
  // ... meer platforms
];

export default function TournamentPage() {
  return (
    <div>
      {/* Je andere content */}
      
      <Socials
        title="Volg het toernooi"
        description="Blijf op de hoogte via onze sociale media kanalen"
        socialLinks={socialLinks}
      />
    </div>
  );
}
```

#### Stap 3B: Whitelabel configurator gebruiken

```tsx
import SocialsConfigurator from '@/components/SocialsConfigurator';

export default function SocialsBuilderPage() {
  return <SocialsConfigurator />;
}
```

> De configurator is volledig client-side (`'use client'`) en bundelt alles wat je op de demo ziet: gear-button, uitklappanel, live preview en branding controls.

## 📖 API Reference

### Kernproperties

- `socialLinks` (verplicht): array met alle platforms en URL's (type `SocialLink`)
- `title` / `description`: copy boven de grid
- `theme`: object voor branding (card kleuren, titels, hover states, etc.)
- `gap`, `padding`, `borderRadius`: Tailwind classes voor spacing en rounding
- `cardClassName` & co: extra classes voor wrapper / container / labels
- `hoverScale`, `showLabels`, `iconSize`: gedrag en iconformaat

### Types

```ts
type SocialLink = {
  platform: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'twitch' | 'discord' | 'tiktok' | 'website';
  url: string;
  label?: string;
  customIcon?: React.ReactNode;
  customHoverColor?: string;
};

type ThemeColors = {
  cardBackground?: string;
  cardBorder?: string;
  cardText?: string;
  cardHoverBackground?: string;
  cardHoverText?: string;
  sectionBackground?: string;
  titleColor?: string;
  descriptionColor?: string;
  platformColors?: Partial<Record<SocialLink['platform'], string>>;
};
```

### Ondersteunde Platforms

- `twitter` - X (voorheen Twitter)
- `facebook` - Facebook
- `instagram` - Instagram
- `youtube` - YouTube
- `twitch` - Twitch
- `discord` - Discord
- `tiktok` - TikTok
- `website` - Algemene website link

## 🎨 Whitelabel / Branding Customisatie

De component is volledig whitelabel en kan aangepast worden naar jouw eigen branding. Hier zijn verschillende manieren om de component te customizen:

### 1. Theme Object (Aanbevolen)

Gebruik het `theme` prop om alle kleuren en styling in één keer aan te passen:

```tsx
import Socials, { SocialLink, ThemeColors } from '@/components/Socials';

const myBrandTheme: ThemeColors = {
  // Card styling
  cardBackground: 'bg-blue-50 dark:bg-blue-900/20',
  cardBorder: 'border-blue-200 dark:border-blue-800',
  cardText: 'text-blue-900 dark:text-blue-100',
  
  // Section styling
  sectionBackground: 'bg-gradient-to-br from-blue-50 to-indigo-50',
  titleColor: 'text-blue-900 dark:text-blue-100',
  descriptionColor: 'text-blue-700 dark:text-blue-300',
  
  // Platform specifieke hover kleuren
  platformColors: {
    twitter: 'hover:bg-blue-500 hover:text-white',
    instagram: 'hover:bg-pink-500 hover:text-white',
  }
};

<Socials
  socialLinks={socialLinks}
  theme={myBrandTheme}
/>
```

### 2. Layout Aanpassingen

Pas de layout aan met spacing en padding (de grid gebruikt automatisch `auto-fit` zodat het aantal kolommen per schermgrootte vanzelf meeschakelt):

```tsx
<Socials
  socialLinks={socialLinks}
  gap="gap-6"              // Meer ruimte tussen cards
  padding="p-8"            // Meer padding in cards
  borderRadius="rounded-2xl" // Ronde hoeken
/>
```

### 3. Custom Icons per Link

Gebruik je eigen icons voor specifieke platforms:

```tsx
const socialLinks: SocialLink[] = [
  {
    platform: 'twitter',
    url: 'https://twitter.com/example',
    customIcon: <MyCustomTwitterIcon />, // Je eigen icon component
    customHoverColor: 'hover:bg-[#FF6B6B] hover:text-white'
  },
  // ...
];
```

### 4. Fine-grained Styling met className Props

Gebruik de verschillende className props voor specifieke aanpassingen:

```tsx
<Socials
  socialLinks={socialLinks}
  className="my-section-class"           // Section wrapper
  containerClassName="max-w-6xl"         // Container
  titleClassName="text-4xl font-black"   // Titel
  descriptionClassName="text-xl"         // Beschrijving
  cardClassName="shadow-2xl"             // Elke card
/>
```

### 5. Gedrag Aanpassingen

Pas het gedrag van de component aan:

```tsx
<Socials
  socialLinks={socialLinks}
  hoverScale={false}      // Geen scale effect bij hover
  showLabels={false}      // Verberg labels, alleen icons
  iconSize="lg"           // Grotere icons
/>
```

### 6. Minimal Stijl

Voor een minimalistische look:

```tsx
const minimalTheme: ThemeColors = {
  cardBackground: 'bg-transparent',
  cardBorder: 'border-gray-300 dark:border-gray-600',
  cardText: 'text-gray-800 dark:text-gray-200',
  sectionBackground: 'bg-transparent',
};

<Socials
  socialLinks={socialLinks}
  theme={minimalTheme}
  showLabels={false}
  hoverScale={false}
  borderRadius="rounded-lg"
/>
```

### 7. Volledig Custom Styling

Combineer alle opties voor volledige controle:

```tsx
<Socials
  title="Volg ons"
  description="Blijf op de hoogte"
  socialLinks={socialLinks}
  theme={myBrandTheme}
  gap="gap-5"
  padding="p-7"
  borderRadius="rounded-3xl"
  iconSize="xl"
  hoverScale={true}
  showLabels={true}
  className="py-16"
  containerClassName="max-w-7xl"
  titleClassName="text-5xl mb-6"
  cardClassName="backdrop-blur-sm"
/>
```

## 📦 Project Structuur

```
component-socials/
├── components/
│   ├── Socials.tsx              # De hoofdcomponent (grid)
│   └── SocialsConfigurator.tsx  # Optionele whitelabel editor + preview
├── app/
│   ├── page.tsx                 # Demo pagina die SocialsConfigurator rendert
│   ├── layout.tsx
│   └── globals.css
└── README.md
```

## 🔧 Technische Details

- **Framework**: Next.js 16+ (maar werkt ook met andere React frameworks)
- **Styling**: Tailwind CSS 4+
- **TypeScript**: Volledig getypeerd
- **Icons**: Inline SVG icons (geen externe dependencies)
- **Accessibility**: ARIA labels, keyboard navigation, focus states

## 📝 Voorbeelden

Zie `app/page.tsx` voor verschillende voorbeelden:
- Standaard weergave
- Custom branding met theme
- Minimal stijl
- Compact layout

### Quick Start Voorbeeld

```tsx
import Socials, { SocialLink, ThemeColors } from '@/components/Socials';

const socialLinks: SocialLink[] = [
  { platform: 'twitter', url: 'https://twitter.com/example' },
  { platform: 'instagram', url: 'https://instagram.com/example' },
  { platform: 'youtube', url: 'https://youtube.com/@example' },
];

const brandTheme: ThemeColors = {
  cardBackground: 'bg-white dark:bg-gray-800',
  cardBorder: 'border-gray-200 dark:border-gray-700',
  sectionBackground: 'bg-gray-50 dark:bg-gray-900',
};

export default function Page() {
  return (
    <Socials
      title="Volg ons"
      description="Blijf op de hoogte"
      socialLinks={socialLinks}
      theme={brandTheme}
    />
  );
}
```

## 🤝 Bijdragen

Voel je vrij om issues te openen of pull requests in te dienen voor verbeteringen!

## 📄 Licentie

Dit project is open source en beschikbaar voor gebruik in je eigen projecten.
