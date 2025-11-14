# Component Kopieer Gids

Deze gids legt uit hoe je de Socials component kunt kopiëren naar een ander project.

## 📦 Wat te kopiëren

Kopieer het volgende bestand:
- `components/Socials.tsx` - De hoofdcomponent

## ✅ Vereisten

De component heeft de volgende vereisten:
- **React 18+** (of React 19+)
- **Tailwind CSS 4+** (of 3+ met kleine aanpassingen)
- **TypeScript** (optioneel maar aanbevolen)

## 🚀 Stappen

### Stap 1: Kopieer de component

Kopieer `components/Socials.tsx` naar je eigen project in een `components` folder (of een andere folder naar keuze).

### Stap 2: Installeer vereisten (als nog niet gedaan)

```bash
npm install react react-dom
npm install -D tailwindcss
# of
yarn add react react-dom
yarn add -D tailwindcss
```

### Stap 3: Importeer en gebruik

```tsx
import Socials, { SocialLink } from '@/components/Socials';

const socialLinks: SocialLink[] = [
  {
    platform: 'twitter',
    url: 'https://twitter.com/jouwaccount',
    label: 'Twitter'
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/jouwaccount',
  },
  // ... meer platforms
];

export default function TournamentPage() {
  return (
    <div>
      <Socials
        title="Volg het toernooi"
        description="Blijf op de hoogte via onze sociale media kanalen"
        socialLinks={socialLinks}
      />
    </div>
  );
}
```

## 📝 Belangrijke opmerkingen

1. **Tailwind CSS**: Zorg ervoor dat Tailwind CSS correct is geconfigureerd in je project
2. **Path aliases**: Pas de import path aan (`@/components/Socials`) naar je eigen project structuur
3. **Dark mode**: De component ondersteunt automatisch dark mode als je Tailwind dark mode hebt ingeschakeld

## 🎨 Whitelabel opties

De component is volledig whitelabel. Zie de README.md voor alle customisatie opties.

## 📄 Bestand structuur

```
jouw-project/
├── components/
│   └── Socials.tsx    ← Kopieer dit bestand
└── ...
```

Dat is alles! De component is volledig standalone en heeft geen externe dependencies behalve React en Tailwind CSS.

