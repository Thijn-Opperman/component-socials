# Component Kopieer Gids

Deze gids legt uit hoe je de Socials component kunt kopiëren naar een ander project.

## 📦 Wat te kopiëren

Kies één van de volgende opties:

- `components/Socials.tsx` - De hoofdcomponent (grid) zonder configurator
- `components/SocialsConfigurator.tsx` - Volledige whitelabel editor + live preview (importeert automatisch `Socials`)

## ✅ Vereisten

De component heeft de volgende vereisten:
- **React 18+** (of React 19+)
- **Tailwind CSS 4+** (of 3+ met kleine aanpassingen)
- **TypeScript** (optioneel maar aanbevolen)

## 🚀 Stappen

### Stap 1: Kopieer de component(en)

- Alleen grid nodig? Kopieer `components/Socials.tsx`.
- Hele configurator nodig? Kopieer zowel `components/Socials.tsx` als `components/SocialsConfigurator.tsx`.

Plaats ze in een `components` map (of een map naar keuze) in je eigen project.

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
  { platform: 'twitter', url: 'https://twitter.com/jouwaccount', label: 'Twitter' },
  { platform: 'instagram', url: 'https://instagram.com/jouwaccount' },
];

export default function TournamentPage() {
  return (
    <Socials
      title="Volg het toernooi"
      description="Blijf op de hoogte via onze socials"
      socialLinks={socialLinks}
    />
  );
}
```

#### Bonus: Configurator gebruiken

```tsx
import SocialsConfigurator from '@/components/SocialsConfigurator';

export default function BuilderPage() {
  return <SocialsConfigurator />;
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
│   ├── Socials.tsx
│   └── SocialsConfigurator.tsx (optioneel)
└── ...
```

Dat is alles! De component is volledig standalone en heeft geen externe dependencies behalve React en Tailwind CSS.

