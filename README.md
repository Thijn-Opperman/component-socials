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
- ✅ **Flexibele layout** - Configureerbare grid columns per breakpoint

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

De component is volledig standalone en kan eenvoudig gekopieerd worden naar elk React project.

#### Stap 1: Kopieer de component

Kopieer **alleen** het bestand `components/Socials.tsx` naar je eigen project.

> 💡 **Tip**: Zie `COMPONENT_COPY_GUIDE.md` voor een gedetailleerde kopieer gids.

#### Stap 2: Vereisten

De component heeft de volgende vereisten:
- React 18+ (of React 19+)
- Tailwind CSS 4+ (of 3+ met kleine aanpassingen)
- TypeScript (optioneel maar aanbevolen)

#### Stap 3: Importeer en gebruik

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

## 📖 API Reference

### Props

| Prop | Type | Verplicht | Default | Beschrijving |
|------|------|-----------|---------|--------------|
| `socialLinks` | `SocialLink[]` | ✅ Ja | - | Array van sociale media links |
| `title` | `string` | ❌ Nee | `"Volg ons"` | Titel boven de socials sectie |
| `description` | `string` | ❌ Nee | `"Blijf op de hoogte via onze sociale media kanalen"` | Beschrijving onder de titel |
| `className` | `string` | ❌ Nee | `""` | Extra CSS classes voor de section wrapper |
| `containerClassName` | `string` | ❌ Nee | `""` | Extra CSS classes voor de container |
| `titleClassName` | `string` | ❌ Nee | `""` | Extra CSS classes voor de titel |
| `descriptionClassName` | `string` | ❌ Nee | `""` | Extra CSS classes voor de beschrijving |
| `cardClassName` | `string` | ❌ Nee | `""` | Extra CSS classes voor elke card |
| `theme` | `ThemeColors` | ❌ Nee | - | Theme object voor branding (zie hieronder) |
| `columns` | `object` | ❌ Nee | `{mobile: 2, tablet: 3, desktop: 4, large: 5}` | Grid columns per breakpoint |
| `gap` | `string` | ❌ Nee | `"gap-3"` | Tailwind gap class voor grid spacing |
| `padding` | `string` | ❌ Nee | `"p-4"` | Tailwind padding class voor cards |
| `borderRadius` | `string` | ❌ Nee | `"rounded-lg"` | Tailwind border radius class |
| `hoverScale` | `boolean` | ❌ Nee | `true` | Enable/disable hover scale effect |
| `showLabels` | `boolean` | ❌ Nee | `true` | Show/hide platform labels |
| `iconSize` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ Nee | `"sm"` | Icon size |

### SocialLink Interface

```typescript
interface SocialLink {
  platform: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'twitch' | 'discord' | 'tiktok' | 'website';
  url: string;
  label?: string; // Optioneel, gebruikt standaard platform naam als niet opgegeven
  customIcon?: React.ReactNode; // Optioneel: custom icon component
  customHoverColor?: string; // Optioneel: custom hover kleur (Tailwind class)
}
```

### ThemeColors Interface

```typescript
interface ThemeColors {
  // Card styling
  cardBackground?: string; // Tailwind class (bijv. 'bg-blue-50 dark:bg-blue-900')
  cardBorder?: string; // Tailwind class (bijv. 'border-blue-200')
  cardText?: string; // Tailwind class (bijv. 'text-blue-900')
  cardHoverBackground?: string; // Tailwind class voor hover state
  cardHoverText?: string; // Tailwind class voor hover text
  
  // Section styling
  sectionBackground?: string; // Tailwind class voor section achtergrond
  titleColor?: string; // Tailwind class voor titel kleur
  descriptionColor?: string; // Tailwind class voor beschrijving kleur
  
  // Platform hover colors (override defaults)
  platformColors?: Partial<Record<SocialLink['platform'], string>>;
}
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

Pas de layout aan met columns, spacing en padding:

```tsx
<Socials
  socialLinks={socialLinks}
  columns={{
    mobile: 2,   // 2 kolommen op mobiel
    tablet: 3,   // 3 kolommen op tablet
    desktop: 4,  // 4 kolommen op desktop
    large: 5     // 5 kolommen op grote schermen
  }}
  gap="gap-6"           // Meer ruimte tussen cards
  padding="p-8"          // Meer padding in cards
  borderRadius="rounded-2xl"  // Ronde hoeken
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
  columns={{ mobile: 3, tablet: 4, desktop: 5, large: 6 }}
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
│   └── Socials.tsx          # De hoofdcomponent
├── app/
│   ├── page.tsx             # Voorbeeld gebruik
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
