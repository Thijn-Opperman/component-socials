/**
 * Socials Component - Standalone React Component
 * 
 * Een volledig standalone, whitelabel component voor het weergeven van sociale media links.
 * 
 * KOPIËREN NAAR ANDER PROJECT:
 * - Kopieer dit hele bestand naar je eigen project
 * - Verwijder 'use client' als je geen Next.js gebruikt (optioneel, kan blijven staan)
 * - Zorg dat React en Tailwind CSS geïnstalleerd zijn
 * 
 * @see COMPONENT_COPY_GUIDE.md voor gedetailleerde instructies
 */

'use client'; // Alleen nodig voor Next.js - kan verwijderd worden in andere frameworks

import React from 'react';

export interface SocialLink {
  platform: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'twitch' | 'discord' | 'tiktok' | 'website';
  url: string;
  label?: string;
  customIcon?: React.ReactNode; // Optionele custom icon per link
  customHoverColor?: string; // Optionele custom hover kleur per link (CSS class of inline style)
}

export interface ThemeColors {
  // Card styling
  cardBackground?: string; // Tailwind class of custom CSS
  cardBorder?: string;
  cardText?: string;
  cardHoverBackground?: string;
  cardHoverText?: string;
  
  // Section styling
  sectionBackground?: string;
  titleColor?: string;
  descriptionColor?: string;
  
  // Platform hover colors (override defaults)
  platformColors?: Partial<Record<SocialLink['platform'], string>>;
}

export interface SocialsProps {
  title?: string;
  description?: string;
  socialLinks: SocialLink[];
  
  // Styling props
  className?: string;
  containerClassName?: string; // Extra classes voor de container
  titleClassName?: string; // Extra classes voor de titel
  descriptionClassName?: string; // Extra classes voor de beschrijving
  cardClassName?: string; // Extra classes voor elke card
  
  // Theme/branding
  theme?: ThemeColors;
  
  // Layout options
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    large?: number;
  };
  
  // Spacing
  gap?: string; // Tailwind gap class (bijv. 'gap-4', 'gap-6')
  padding?: string; // Tailwind padding class voor cards (bijv. 'p-4', 'p-6')
  borderRadius?: string; // Tailwind border radius (bijv. 'rounded-lg', 'rounded-xl')
  
  // Behavior
  hoverScale?: boolean; // Enable/disable hover scale effect
  showLabels?: boolean; // Show/hide platform labels
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'; // Icon size
}

const getPlatformIcon = (platform: SocialLink['platform'], iconSize: string): React.ReactNode => {
  const sizeClass = iconSize;
  
  switch (platform) {
    case 'twitter':
      return (
        <svg className={sizeClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className={sizeClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={sizeClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={sizeClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      );
    case 'twitch':
      return (
        <svg className={sizeClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
        </svg>
      );
    case 'discord':
      return (
        <svg className={sizeClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={sizeClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    case 'website':
      return (
        <svg className={sizeClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    default:
      return null;
  }
};

const defaultPlatformColors: Record<SocialLink['platform'], string> = {
  twitter: 'hover:bg-[#1DA1F2] hover:text-white',
  facebook: 'hover:bg-[#1877F2] hover:text-white',
  instagram: 'hover:bg-gradient-to-r hover:from-[#E4405F] hover:via-[#FCAF45] hover:to-[#833AB4] hover:text-white',
  youtube: 'hover:bg-[#FF0000] hover:text-white',
  twitch: 'hover:bg-[#9146FF] hover:text-white',
  discord: 'hover:bg-[#5865F2] hover:text-white',
  tiktok: 'hover:bg-[#000000] hover:text-white',
  website: 'hover:bg-[#6366F1] hover:text-white',
};

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
};

const platformLabels: Record<SocialLink['platform'], string> = {
  twitter: 'X',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  twitch: 'Twitch',
  discord: 'Discord',
  tiktok: 'TikTok',
  website: 'Website',
};

export default function Socials({ 
  title = 'Volg ons', 
  description = 'Blijf op de hoogte via onze sociale media kanalen',
  socialLinks,
  className = '',
  containerClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  cardClassName = '',
  theme,
  columns = {},
  gap = 'gap-3',
  padding = 'p-4',
  borderRadius = 'rounded-lg',
  hoverScale = true,
  showLabels = true,
  iconSize = 'sm'
}: SocialsProps) {
  if (!socialLinks || socialLinks.length === 0) {
    return null;
  }

  // Grid layout - verdeel items over het scherm, alle items even groot
  // Gebruik auto-fit om items automatisch te verdelen over beschikbare ruimte
  const gridClass = `grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] ${gap} justify-items-stretch`;

  // Theme defaults
  const sectionBg = theme?.sectionBackground || 'bg-transparent';
  const titleColor = theme?.titleColor || 'text-gray-900 dark:text-white';
  const descColor = theme?.descriptionColor || 'text-gray-600 dark:text-gray-400';
  const cardBg = theme?.cardBackground || 'bg-white dark:bg-gray-800';
  const cardBorder = theme?.cardBorder || 'border-gray-200 dark:border-gray-700';
  const cardText = theme?.cardText || 'text-gray-700 dark:text-gray-300';
  const cardHoverBg = theme?.cardHoverBackground || '';
  const cardHoverText = theme?.cardHoverText || '';

  // Icon size class
  const iconSizeClass = iconSizes[iconSize];

  // Merge platform colors met theme overrides
  const platformColors = { ...defaultPlatformColors, ...theme?.platformColors };

  return (
    <section className={`w-full py-8 px-4 sm:px-6 lg:px-8 ${sectionBg} ${className}`}>
      <div className={`max-w-4xl mx-auto ${containerClassName}`}>
        {(title || description) && (
          <div className="text-center mb-6">
            {title && (
              <h2 className={`text-2xl font-bold ${titleColor} mb-2 ${titleClassName}`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-base ${descColor} ${descriptionClassName}`}>
                {description}
              </p>
            )}
          </div>
        )}

        <div className={gridClass}>
          {socialLinks.map((link, index) => {
            const platform = link.platform;
            const label = link.label || platformLabels[platform];
            
            // Gebruik custom icon als beschikbaar, anders default
            const icon = link.customIcon || getPlatformIcon(platform, iconSizeClass);
            
            // Gebruik custom hover color als beschikbaar, anders theme/platform default
            const hoverColor = link.customHoverColor || platformColors[platform] || '';
            
            // Card styling classes - alle cards even groot
            const baseCardClasses = `
              group relative flex flex-col items-center justify-center
              ${padding} ${borderRadius} border-2 ${cardBorder}
              ${cardBg} ${cardText}
              transition-all duration-300 ease-in-out
              ${hoverScale ? 'hover:scale-105' : ''}
              hover:shadow-lg hover:border-transparent
              ${hoverColor}
              ${cardHoverBg} ${cardHoverText}
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
              w-full h-full aspect-square
              ${cardClassName}
            `.trim().replace(/\s+/g, ' ');

            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={baseCardClasses}
                aria-label={`Volg ons op ${label}`}
              >
                <div className={`${showLabels ? 'mb-1.5' : ''} transition-transform duration-300 ${hoverScale ? 'group-hover:scale-110' : ''}`}>
                  {icon}
                </div>
                {showLabels && (
                  <span className="text-xs font-medium text-center">
                    {label}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

