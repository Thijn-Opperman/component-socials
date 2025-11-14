import Socials, { SocialLink } from "@/components/Socials";

export default function Home() {
  // Voorbeeld social links voor een toernooi
  const tournamentSocialLinks: SocialLink[] = [
    {
      platform: 'twitter',
      url: 'https://twitter.com/example',
      label: 'X'
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/example',
      label: 'Facebook'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/example',
      label: 'Instagram'
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/@example',
      label: 'YouTube'
    },
    {
      platform: 'twitch',
      url: 'https://twitch.tv/example',
      label: 'Twitch'
    },
    {
      platform: 'discord',
      url: 'https://discord.gg/example',
      label: 'Discord'
    },
    {
      platform: 'tiktok',
      url: 'https://tiktok.com/@example',
      label: 'TikTok'
    },
    {
      platform: 'website',
      url: 'https://example.com',
      label: 'Website'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <Socials
          title="Volg het toernooi"
          description="Blijf op de hoogte van alle updates, highlights en live streams via onze sociale media kanalen"
          socialLinks={tournamentSocialLinks}
        />
      </main>
    </div>
  );
}
