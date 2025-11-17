'use client';

import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import Socials, { SocialLink, StyleOverrides } from './Socials';

type EditableLinkField = 'platform' | 'url' | 'label';

const defaultLinks: SocialLink[] = [
  { platform: 'twitter', url: 'https://twitter.com/example', label: 'X' },
  { platform: 'facebook', url: 'https://facebook.com/example', label: 'Facebook' },
  { platform: 'instagram', url: 'https://instagram.com/example', label: 'Instagram' },
  { platform: 'youtube', url: 'https://youtube.com/@example', label: 'YouTube' },
  { platform: 'twitch', url: 'https://twitch.tv/example', label: 'Twitch' },
  { platform: 'discord', url: 'https://discord.gg/example', label: 'Discord' },
  { platform: 'tiktok', url: 'https://tiktok.com/@example', label: 'TikTok' },
  { platform: 'website', url: 'https://example.com', label: 'Website' },
];

const platformOptions: { value: SocialLink['platform']; label: string }[] = [
  { value: 'twitter', label: 'X' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'twitch', label: 'Twitch' },
  { value: 'discord', label: 'Discord' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'website', label: 'Website' },
];

type AppearanceState = {
  bgFrom: string;
  bgTo: string;
  sectionFrom: string;
  sectionTo: string;
  accentFrom: string;
  accentTo: string;
  cardBgColor: string;
  cardBgOpacity: number;
  cardBorderColor: string;
  cardBorderOpacity: number;
  cardTextColor: string;
  cardShadowStrength: number;
  headingTone: 'dark' | 'light';
  showDecorations: boolean;
};

type CopyState = {
  title: string;
  description: string;
};

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const hexToRgba = (hex: string, alpha = 1) => {
  if (!hex) {
    return `rgba(255, 255, 255, ${alpha})`;
  }

  let sanitized = hex.replace('#', '');
  if (sanitized.length === 3) {
    sanitized = sanitized
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const parsed = Number.parseInt(sanitized, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;
  return `rgba(${r}, ${g}, ${b}, ${clamp(alpha)})`;
};

const GearIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317a1 1 0 0 1 .8-.517l1.75-.146a1 1 0 0 1 1.033.706l.387 1.282a1 1 0 0 0 .611.649l1.21.435a1 1 0 0 1 .57 1.37l-.563 1.266a1 1 0 0 0 .044.908l.739 1.23a1 1 0 0 1-.23 1.326l-1.03.822a1 1 0 0 0-.33.95l.223 1.282a1 1 0 0 1-.857 1.147l-1.74.227a1 1 0 0 1-.982-.56l-.534-1.136a1 1 0 0 0-.777-.566l-1.291-.156a1 1 0 0 1-.888-.884l-.107-1.292a1 1 0 0 0-.486-.79l-1.126-.67a1 1 0 0 1-.39-1.311l.618-1.165a1 1 0 0 0 .078-.842l-.43-1.283a1 1 0 0 1 .63-1.252l1.24-.41a1 1 0 0 0 .65-.61z"
    />
    <circle cx={12} cy={12} r={2.5} />
  </svg>
);

export default function SocialsConfigurator() {
  const [links, setLinks] = useState<SocialLink[]>(defaultLinks);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(0);
  const [copy, setCopy] = useState<CopyState>({
    title: 'Volg het toernooi',
    description:
      'Blijf op de hoogte van alle updates, highlights en live streams via onze sociale media kanalen',
  });
  const [appearance, setAppearance] = useState<AppearanceState>({
    bgFrom: '#fdf4ff',
    bgTo: '#f5f3ff',
    sectionFrom: '#f9a8d4',
    sectionTo: '#c4b5fd',
    accentFrom: '#c084fc',
    accentTo: '#fb7185',
    cardBgColor: '#7c3aed',
    cardBgOpacity: 1,
    cardBorderColor: '#a855f7',
    cardBorderOpacity: 0.5,
    cardTextColor: '#ffffff',
    cardShadowStrength: 0.5,
    headingTone: 'dark',
    showDecorations: true,
  });

  const heroBackgroundStyle = useMemo<CSSProperties>(
    () => ({
      background: `linear-gradient(135deg, ${appearance.bgFrom}, ${appearance.bgTo})`,
    }),
    [appearance.bgFrom, appearance.bgTo]
  );

  const sectionGradient = useMemo(
    () => `linear-gradient(135deg, ${appearance.sectionFrom}, ${appearance.sectionTo})`,
    [appearance.sectionFrom, appearance.sectionTo]
  );

  const cardBackgroundValue = useMemo(
    () => hexToRgba(appearance.cardBgColor, appearance.cardBgOpacity),
    [appearance.cardBgColor, appearance.cardBgOpacity]
  );

  const cardBorderValue = useMemo(
    () => hexToRgba(appearance.cardBorderColor, appearance.cardBorderOpacity),
    [appearance.cardBorderColor, appearance.cardBorderOpacity]
  );

  const cardShadowValue = useMemo(() => {
    const depth = 0.15 + appearance.cardShadowStrength * 0.35;
    return `0 35px 80px rgba(15, 23, 42, ${depth.toFixed(2)})`;
  }, [appearance.cardShadowStrength]);

  const socialTheme = useMemo(
    () => ({
      sectionBackground: 'bg-transparent',
      titleColor: appearance.headingTone === 'dark' ? 'text-slate-900' : 'text-white',
      descriptionColor: appearance.headingTone === 'dark' ? 'text-slate-600' : 'text-white/80',
      cardBackground: 'bg-transparent',
      cardBorder: 'border-transparent',
      cardText: appearance.headingTone === 'dark' ? 'text-slate-800' : 'text-white',
    }),
    [appearance.headingTone]
  );

  const socialStyleOverrides = useMemo<StyleOverrides>(
    () => ({
      section: {
        background: sectionGradient,
        borderRadius: 36,
        boxShadow: '0 40px 100px rgba(15,23,42,0.25)',
        position: 'relative',
        overflow: 'hidden',
      },
      container: {
        position: 'relative',
      },
      card: {
        background: cardBackgroundValue,
        borderColor: cardBorderValue,
        color: appearance.cardTextColor,
        boxShadow: cardShadowValue,
        backdropFilter: 'blur(18px)',
      },
    }),
    [appearance.cardTextColor, cardBackgroundValue, cardBorderValue, cardShadowValue, sectionGradient]
  );

  const handleLinkChange = (index: number, key: EditableLinkField, value: string) => {
    setLinks((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: value };
      return next;
    });
  };

  const addLink = () => {
    setLinks((prev) => {
      const next = [
        ...prev,
        {
          platform: 'website' as const,
          url: '',
          label: 'Nieuwe link',
        },
      ];
      setActiveLinkIndex(next.length - 1);
      return next;
    });
  };

  const removeLink = (index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
    setActiveLinkIndex((prev) => {
      if (prev === null) return prev;
      if (prev === index) return null;
      if (prev > index) return prev - 1;
      return prev;
    });
  };

  const handleCopyChange = (key: keyof CopyState, value: string) => {
    setCopy((prev) => ({ ...prev, [key]: value }));
  };

  const handleAppearanceChange = <K extends keyof AppearanceState>(key: K, value: AppearanceState[K]) => {
    setAppearance((prev) => ({ ...prev, [key]: value }));
  };

  const sortedLinks = useMemo(() => links.filter((link) => !!link.url.trim()), [links]);
  const formatPercent = (value: number) => `${Math.round(clamp(value) * 100)}%`;

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-900" style={heroBackgroundStyle}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.2)_15%,rgba(255,255,255,0)_45%)]" />

      {panelOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/45 backdrop-blur-sm lg:bg-black/25"
          aria-label="Sluit link editor overlay"
          onClick={() => setPanelOpen(false)}
        />
      )}

      <div
        className={`fixed inset-x-0 bottom-0 z-40 h-[85vh] w-full rounded-t-3xl bg-white shadow-2xl border-t border-gray-200/70 transform transition-transform duration-500 ease-in-out dark:bg-gray-900 dark:border-gray-800
        md:left-0 md:top-0 md:bottom-auto md:h-full md:w-[90%] md:max-w-[400px] md:rounded-none md:border-r
        ${panelOpen ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200/80 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10 rounded-t-3xl md:rounded-none">
          <p className="font-semibold text-gray-900 dark:text-gray-100">Whitelabel configurator</p>
          <button
            type="button"
            onClick={() => setPanelOpen(false)}
            aria-label="Sluit link editor"
            className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300"
          >
            Sluiten
          </button>
        </div>

        <div className="h-[calc(100%-56px)] overflow-y-auto pb-8">
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {links.map((link, index) => (
              <div key={index} className="p-5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="flex-1 text-left"
                    onClick={() =>
                      setActiveLinkIndex((prev) => (prev === index ? null : index))
                    }
                  >
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center justify-between">
                      Link {index + 1}
                      <span
                        className={`ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] transition-transform md:hidden ${
                          activeLinkIndex === index ? 'rotate-180 border-purple-500 text-purple-500' : 'border-gray-300 text-gray-400'
                        }`}
                      >
                        ˅
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">
                      {link.label || 'Nog geen naam'} • {link.platform}
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => removeLink(index)}
                    className="text-xs font-semibold text-red-500 hover:text-red-600"
                  >
                    Verwijder
                  </button>
                </div>

                <div className={`space-y-3 ${activeLinkIndex === index ? 'block' : 'hidden'} md:block`}>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Platform
                    <select
                      className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm"
                      value={link.platform}
                      onChange={(event) =>
                        handleLinkChange(index, 'platform', event.target.value as SocialLink['platform'])
                      }
                    >
                      {platformOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Weergavenaam
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm"
                      value={link.label ?? ''}
                      onChange={(event) => handleLinkChange(index, 'label', event.target.value)}
                      placeholder="Bijv. Instagram kanaal"
                    />
                  </label>

                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Externe URL
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm"
                      value={link.url}
                      onChange={(event) => handleLinkChange(index, 'url', event.target.value)}
                      placeholder="https://"
                    />
                  </label>
                </div>
              </div>
            ))}
            <div className="p-5">
              <button
                type="button"
                onClick={addLink}
                className="w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 py-3 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                + Link toevoegen
              </button>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 p-5 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">Copy</p>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Titel
              <input
                className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                value={copy.title}
                onChange={(event) => handleCopyChange('title', event.target.value)}
                placeholder="Titel van de sectie"
              />
            </label>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Beschrijving
              <textarea
                className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm h-24 resize-none"
                value={copy.description}
                onChange={(event) => handleCopyChange('description', event.target.value)}
                placeholder="Korte uitleg over je socials"
              />
            </label>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 p-5 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">Look & Feel</p>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  { label: 'Hero van', key: 'bgFrom' },
                  { label: 'Hero naar', key: 'bgTo' },
                  { label: 'Sectie van', key: 'sectionFrom' },
                  { label: 'Sectie naar', key: 'sectionTo' },
                  { label: 'Accent 1', key: 'accentFrom' },
                  { label: 'Accent 2', key: 'accentTo' },
                ] satisfies { label: string; key: keyof AppearanceState }[]
              ).map(({ label, key }) => (
                <label key={key} className="text-[10px] font-semibold uppercase text-gray-500">
                  {label}
                  <input
                    type="color"
                    className="mt-1 h-10 w-full cursor-pointer rounded border border-gray-200"
                    value={appearance[key] as string}
                    onChange={(event) => handleAppearanceChange(key, event.target.value as AppearanceState[typeof key])}
                  />
                </label>
              ))}
            </div>

            <label className="text-xs font-semibold uppercase text-gray-500">
              Titelkleuren
              <select
                className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                value={appearance.headingTone}
                onChange={(event) =>
                  handleAppearanceChange('headingTone', event.target.value as AppearanceState['headingTone'])
                }
              >
                <option value="dark">Donkere tekst</option>
                <option value="light">Lichte tekst</option>
              </select>
            </label>

            <label className="text-xs font-semibold uppercase text-gray-500">
              Card tekstkleur
              <input
                type="color"
                className="mt-1 h-10 w-full cursor-pointer rounded border border-gray-200"
                value={appearance.cardTextColor}
                onChange={(event) => handleAppearanceChange('cardTextColor', event.target.value)}
              />
            </label>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-500 flex items-center justify-between">
                Card achtergrond {formatPercent(appearance.cardBgOpacity)}
                <span className="text-[10px] font-normal text-gray-400">{cardBackgroundValue}</span>
              </label>
              <input
                type="range"
                min="0.2"
                max="1"
                step="0.02"
                value={appearance.cardBgOpacity}
                onChange={(event) => handleAppearanceChange('cardBgOpacity', Number(event.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-500 flex items-center justify-between">
                Card border {formatPercent(appearance.cardBorderOpacity)}
                <span className="text-[10px] font-normal text-gray-400">{cardBorderValue}</span>
              </label>
              <input
                type="range"
                min="0"
                max="0.8"
                step="0.02"
                value={appearance.cardBorderOpacity}
                onChange={(event) => handleAppearanceChange('cardBorderOpacity', Number(event.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-500 flex items-center justify-between">
                Schaduw {formatPercent(appearance.cardShadowStrength)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={appearance.cardShadowStrength}
                onChange={(event) => handleAppearanceChange('cardShadowStrength', Number(event.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-400"
                checked={appearance.showDecorations}
                onChange={(event) => handleAppearanceChange('showDecorations', event.target.checked)}
              />
              Speelse accenten tonen
            </label>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPanelOpen(true)}
        aria-label="Open whitelabel configurator"
        className="fixed left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 dark:text-gray-100"
      >
        <GearIcon />
        <span className="hidden sm:inline">Open configurator</span>
      </button>

      <main className="relative z-10 container mx-auto px-4 py-20">
        <section className="flex-1">
          <div className="relative">
            {appearance.showDecorations && (
              <>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -left-12 h-48 w-48 rounded-full blur-3xl opacity-50"
                  style={{ background: appearance.accentFrom }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -right-12 h-56 w-56 rounded-full blur-[90px] opacity-55"
                  style={{ background: appearance.accentTo }}
                />
              </>
            )}
            <Socials
              title={copy.title}
              description={copy.description}
              socialLinks={sortedLinks}
              theme={socialTheme}
              styleOverrides={socialStyleOverrides}
              padding="p-6"
              borderRadius="rounded-[30px]"
              gap="gap-4"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

