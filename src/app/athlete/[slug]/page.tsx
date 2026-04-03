import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateAthleteMetadata } from '../../../lib/seo';
import { generatePersonSchema, generateFAQSchema, generateBreadcrumbSchema } from '../../../lib/structuredData';
import { athleteProfile } from '../../../data/athleteProfile';
import HomeHero from '../../../components/hero/HomeHero';
import About from '../../../components/sections/About';
import SportsOverview from '../../../components/sections/SportsOverview';
import Achievements from '../../../components/sections/Achievements';
import Journey from '../../../components/sections/Journey';
import Coaches from '../../../components/sections/Coaches';
import AthleteAISummary from '../../../components/sections/AthleteAISummary';
import FAQ from '../../../components/sections/FAQ';
import CTASection from '../../../components/sections/CTASection';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://youinsports.com';

// Pre-generate known athlete slugs
export async function generateStaticParams() {
  return [{ slug: 'harsh-kale' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== athleteProfile.slug) {
    return { title: 'Athlete Not Found' };
  }

  return generateAthleteMetadata();
}

export default async function AthletePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== athleteProfile.slug) {
    notFound();
  }

  const personSchema = generatePersonSchema();
  const faqSchema = generateFAQSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: athleteProfile.name, url: `${BASE_URL}/athlete/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article
        className="flex flex-col min-h-screen bg-background text-text overflow-hidden"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content={athleteProfile.name} />
        <meta itemProp="jobTitle" content="Multi-Sport Athlete" />

        <header>
          <HomeHero />
        </header>

        <AthleteAISummary />

        <section aria-label="About">
          <About />
        </section>

        <section aria-label="Sports">
          <SportsOverview />
        </section>

        <section aria-label="Achievements">
          <Achievements />
        </section>

        <section aria-label="Career Journey">
          <Journey />
        </section>

        <section aria-label="Coaches">
          <Coaches />
        </section>

        <FAQ />
        <CTASection />
      </article>
    </>
  );
}
