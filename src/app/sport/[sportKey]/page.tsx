import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sportsData } from '../../../data/sportsData';
import { generateSportMetadata } from '../../../lib/seo';
import { generateSportActivitySchema, generateFAQSchema, generateBreadcrumbSchema } from '../../../lib/structuredData';
import SportHero from '../../../components/hero/SportHero';
import Stats from '../../../components/sections/Stats';
import Gallery from '../../../components/sections/Gallery';
import Achievements from '../../../components/sections/Achievements';
import Journey from '../../../components/sections/Journey';
import Coaches from '../../../components/sections/Coaches';
import Institutes from '../../../components/sections/Institutes';
import Clubs from '../../../components/sections/Clubs';
import CTASection from '../../../components/sections/CTASection';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://youinsports.com';

// Pre-generate all sport pages at build time (SSG)
export async function generateStaticParams() {
  return sportsData.map((sport) => ({
    sportKey: sport.id,
  }));
}

// Dynamic metadata per sport
export async function generateMetadata({
  params,
}: {
  params: Promise<{ sportKey: string }>;
}): Promise<Metadata> {
  const { sportKey } = await params;
  const sport = sportsData.find((s) => s.id === sportKey);

  if (!sport) {
    return {
      title: 'Sport Not Found',
      description: 'This sport page does not exist.',
    };
  }

  return generateSportMetadata(sport);
}

export default async function SportPage({
  params,
}: {
  params: Promise<{ sportKey: string }>;
}) {
  const { sportKey } = await params;
  const sport = sportsData.find((s) => s.id === sportKey);

  if (!sport) {
    notFound();
  }

  const sportActivitySchema = generateSportActivitySchema(sport);
  const faqSchema = generateFAQSchema(sport);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Harsh Kale', url: `${BASE_URL}/athlete/harsh-kale` },
    { name: sport.name, url: `${BASE_URL}/sport/${sport.id}` },
  ]);

  return (
    <>
      {/* Sport activity structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportActivitySchema) }}
      />
      {/* FAQ structured data for this sport */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article
        className="flex flex-col min-h-screen bg-background text-text overflow-hidden"
        itemScope
        itemType="https://schema.org/SportsEvent"
      >
        {/* Hidden structured meta */}
        <meta itemProp="name" content={`Harsh Kale – ${sport.name}`} />
        <meta itemProp="sport" content={sport.name} />
        <meta itemProp="description" content={sport.description} />

        {/* AI-readable sport summary (server-rendered) */}
        <div className="sr-only" aria-label={`${sport.name} summary for Harsh Kale`}>
          <h1>Harsh Kale – {sport.name}</h1>
          <p>
            Harsh Kale plays {sport.name} as a {sport.role} at {sport.level} level.{' '}
            {sport.description}
          </p>
          <ul>
            {sport.keyStats.map((stat) => (
              <li key={stat.label}>
                {stat.label}: {stat.value}
              </li>
            ))}
          </ul>
        </div>

        {/*
        <header>
          <SportHero sportKey={sportKey} />
        </header>
        */}

        <section aria-label={`${sport.name} statistics`}>
          <Stats sportKey={sportKey} />
        </section>

        <section aria-label={`${sport.name} photo gallery`}>
          <Gallery sportKey={sportKey} />
        </section>

        <section aria-label={`${sport.name} achievements`}>
          <Achievements sportKey={sportKey} />
        </section>

        <section aria-label={`${sport.name} career timeline`}>
          <Journey sportKey={sportKey} />
        </section>

        <section aria-label={`${sport.name} coaches and mentors`}>
          <Coaches sportKey={sportKey} />
        </section>

        <section aria-label={`${sport.name} training institutes`}>
          <Institutes sportKey={sportKey} />
        </section>

        <section aria-label={`${sport.name} clubs and teams`}>
          <Clubs sportKey={sportKey} />
        </section>

        <CTASection />
      </article>
    </>
  );
}
