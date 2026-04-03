// ============================================
// JSON-LD STRUCTURED DATA GENERATORS
// Schema.org compliant for SEO + AI visibility
// ============================================

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://youinsports.com';

// ─── Person (Athlete) Schema ──────────────────────────────────────────────────
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/athlete/harsh-kale#person`,
    name: 'Harsh Kale',
    givenName: 'Harsh',
    familyName: 'Kale',
    description:
      'Harsh Kale is a multi-disciplinary athlete from San Francisco competing at an elite level in Chess, Football, Cricket, Basketball, and Tennis. He holds a National Master chess title with a 2350 rating, has scored 34 goals as a Football Attacking Midfielder, and amassed 3,200 cricket runs as a Top-order Batsman.',
    url: `${BASE_URL}/athlete/harsh-kale`,
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=1920&auto=format&fit=crop&q=80',
    jobTitle: 'Professional Multi-Sport Athlete',
    worksFor: {
      '@type': 'Organization',
      name: 'YouInSports',
      url: BASE_URL,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    knowsAbout: ['Chess', 'Football', 'Cricket', 'Basketball', 'Tennis', 'Sports Strategy', 'Athletic Training'],
    award: [
      'National Youth Chess Champion 2023',
      'FIDE Master Title Norm 2024',
      'Golden Boot – Regional League 2024',
      'State Cricket Selection 2022',
      'Multi-Sport Athlete Award 2023',
    ],
    affiliation: [
      {
        '@type': 'Organization',
        name: 'Bay Area Strikers FC',
        description: 'Local league football club',
      },
      {
        '@type': 'Organization',
        name: 'State Chess Federation',
        description: 'Professional chess association',
      },
      {
        '@type': 'Organization',
        name: 'Apex Cricket Club',
        description: 'League Division 1 cricket club',
      },
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'San Francisco University',
        description: 'University athletics program – Football team captain',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Grandmaster Chess Institute',
        description: 'Elite chess academy 2015–2021',
      },
    ],
    sameAs: [
      'https://instagram.com',
      'https://linkedin.com',
      'https://youtube.com',
    ],
  };
}

// ─── Sports Activity Location Schema ─────────────────────────────────────────
export function generateSportActivitySchema(sport: {
  name: string;
  role: string;
  level: string;
  description: string;
  id: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `Harsh Kale – ${sport.name} Career`,
    description: `Harsh Kale competes in ${sport.name} as a ${sport.role} at ${sport.level} level. ${sport.description}`,
    url: `${BASE_URL}/sport/${sport.id}`,
    sport: sport.name,
    performer: {
      '@type': 'Person',
      name: 'Harsh Kale',
      url: `${BASE_URL}/athlete/harsh-kale`,
    },
    organizer: {
      '@type': 'Organization',
      name: 'YouInSports',
      url: BASE_URL,
    },
  };
}

// ─── FAQ Schema ───────────────────────────────────────────────────────────────
export function generateFAQSchema(sport?: { name: string; role: string; description: string }) {
  const mainEntity = sport
    ? [
        {
          '@type': 'Question',
          name: `What is Harsh Kale's role in ${sport.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Harsh Kale plays ${sport.name} as a ${sport.role}. ${sport.description}`,
          },
        },
        {
          '@type': 'Question',
          name: `What are Harsh Kale's ${sport.name} achievements?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Harsh Kale has competed at ${sport.role} level achieving significant milestones in ${sport.name}. Visit his full profile for detailed stats and achievements.`,
          },
        },
        {
          '@type': 'Question',
          name: `Who coaches Harsh Kale in ${sport.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Harsh Kale trains under experienced coaches in ${sport.name}. Details of his coaching staff and mentors are available on his sport profile page.`,
          },
        },
      ]
    : [
        {
          '@type': 'Question',
          name: 'Who is Harsh Kale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harsh Kale is a multi-disciplinary athlete from San Francisco, CA who competes at an elite level in Chess, Football, Cricket, Basketball, and Tennis. He holds a National Master chess title (rated 2350), has scored 34 goals in football, and accumulated 3,200 runs in cricket.',
          },
        },
        {
          '@type': 'Question',
          name: 'What sports does Harsh Kale play?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harsh Kale plays five sports: Chess (National Master, 2350 rating), Football (Attacking Midfielder, Semi-Pro), Cricket (Top-order Batsman, Club Level A), Basketball (Point Guard, University Team), and Tennis (Singles Player, Regional Circuit).',
          },
        },
        {
          '@type': 'Question',
          name: 'What are Harsh Kale\'s major achievements?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harsh Kale\'s major achievements include: National Youth Chess Champion 2023, FIDE Master Title Norm 2024, Golden Boot Award (Regional League 2024), State Cricket Selection 2022, and Multi-Sport Athlete Award 2023 from the city council.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Harsh Kale\'s chess rating?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harsh Kale holds a chess rating of 2350, is a National Master, and has achieved the FIDE Master title norm. He has competed in 45+ tournaments with a best rank of #12 at the state level.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Harsh Kale based?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harsh Kale is based in San Francisco, CA. He represents university teams, local clubs, and state-level sports organizations in the Bay Area.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact or collaborate with Harsh Kale?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can reach Harsh Kale for sponsorships, partnerships, or media inquiries via email through his YouInSports athlete profile page. He is also active on Instagram, LinkedIn, and YouTube.',
          },
        },
      ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
}

// ─── BreadcrumbList Schema ────────────────────────────────────────────────────
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── WebSite Schema ───────────────────────────────────────────────────────────
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Harsh Kale – Athlete Portfolio',
    description: 'Official athlete portfolio of Harsh Kale, multi-sport athlete.',
    url: BASE_URL,
    publisher: {
      '@type': 'Organization',
      name: 'YouInSports',
      url: BASE_URL,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}
