import type { Metadata } from 'next';
import { generateHomeMetadata } from '../lib/seo';
import { generatePersonSchema, generateFAQSchema } from '../lib/structuredData';
import HomeHero from '../components/hero/HomeHero';
import About from '../components/sections/About';
import SportsOverview from '../components/sections/SportsOverview';
import Posts from '../components/sections/Posts';
import Gallery from '../components/sections/Gallery';
import Achievements from '../components/sections/Achievements';
import Journey from '../components/sections/Journey';
import Coaches from '../components/sections/Coaches';
import Institutes from '../components/sections/Institutes';
import Clubs from '../components/sections/Clubs';
import CTASection from '../components/sections/CTASection';
import AthleteAISummary from '../components/sections/AthleteAISummary';
import FAQ from '../components/sections/FAQ';

export const metadata: Metadata = generateHomeMetadata();

export default function HomePage() {
  const personSchema = generatePersonSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      {/* Person (Athlete) structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article
        itemScope
        itemType="https://schema.org/Person"
        className="flex flex-col min-h-screen bg-background text-text overflow-hidden"
      >
        {/* Hidden structured meta for schema.org */}
        <meta itemProp="name" content="Harsh Kale" />
        <meta itemProp="jobTitle" content="Multi-Sport Athlete" />
        <meta itemProp="description" content="Harsh Kale is a multi-disciplinary athlete excelling in Chess, Football, Cricket, Basketball, and Tennis." />

        {/* Hero — above the fold */}
        <header>
          <HomeHero />
        </header>

        {/* AI-Readable Summary — server-rendered, immediately crawlable */}
        <AthleteAISummary />

        {/* Main content sections */}
        <section aria-label="About Harsh Kale">
          <About />
        </section>

        <section aria-label="Sports Disciplines">
          <SportsOverview />
        </section>

        <section aria-label="Social Posts">
          <Posts />
        </section>

        <section aria-label="Photo Gallery">
          <Gallery />
        </section>

        <section aria-label="Achievements and Awards">
          <Achievements />
        </section>

        <section aria-label="Career Journey">
          <Journey />
        </section>

        <section aria-label="Coaches and Mentors">
          <Coaches />
        </section>

        <section aria-label="Training Institutes">
          <Institutes />
        </section>

        <section aria-label="Clubs and Teams">
          <Clubs />
        </section>

        {/* FAQ — server-rendered for AI & SEO */}
        <FAQ />

        <CTASection />
      </article>
    </>
  );
}
