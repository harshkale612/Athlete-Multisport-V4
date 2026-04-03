import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://youinsports.com';
const ATHLETE_SLUG = 'harsh-kale';
const ATHLETE_NAME = 'Harsh Kale';
const PROFILE_IMAGE = 'https://images.unsplash.com/photo-1549476464-37392f717541?w=1920&auto=format&fit=crop&q=80';

const DEFAULT_DESCRIPTION =
  'Harsh Kale is a multi-sport athlete from San Francisco excelling in Chess (National Master, 2350 rated), Football (Attacking Midfielder, 34 goals), Cricket (Top-order Batsman, 3200 runs), Basketball, and Tennis. State Chess Champion 2023, Football Team Captain, Cricket All-Rounder.';

const DEFAULT_KEYWORDS = [
  'Harsh Kale',
  'multi-sport athlete',
  'chess player',
  'football player',
  'cricket batsman',
  'basketball player',
  'tennis player',
  'National Master chess',
  'athlete portfolio',
  'YouInSports',
  'San Francisco athlete',
  'multi-disciplinary athlete',
];

// ─── Home Page Metadata ───────────────────────────────────────────────────────
export function generateHomeMetadata(): Metadata {
  return {
    title: {
      default: `${ATHLETE_NAME} | Multi-Sport Athlete Portfolio`,
      template: `%s | ${ATHLETE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    authors: [{ name: ATHLETE_NAME, url: `${BASE_URL}/athlete/${ATHLETE_SLUG}` }],
    creator: ATHLETE_NAME,
    publisher: 'YouInSports',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: BASE_URL,
    },
    openGraph: {
      type: 'profile',
      locale: 'en_US',
      url: BASE_URL,
      siteName: 'YouInSports',
      title: `${ATHLETE_NAME} | Multi-Sport Athlete`,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: PROFILE_IMAGE,
          width: 1920,
          height: 1080,
          alt: `${ATHLETE_NAME} – Multi-Sport Athlete`,
        },
      ],
      firstName: 'Harsh',
      lastName: 'Kale',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ATHLETE_NAME} | Multi-Sport Athlete`,
      description: DEFAULT_DESCRIPTION,
      images: [PROFILE_IMAGE],
    },
    other: {
      'profile:first_name': 'Harsh',
      'profile:last_name': 'Kale',
      'profile:username': 'harsh-kale',
    },
  };
}

// ─── Sport Page Metadata ──────────────────────────────────────────────────────
export function generateSportMetadata(sport: {
  name: string;
  role: string;
  level: string;
  description: string;
  image: string;
  id: string;
}): Metadata {
  const title = `${ATHLETE_NAME} – ${sport.name} | ${sport.role}`;
  const description = `${ATHLETE_NAME} plays ${sport.name} as a ${sport.role} at ${sport.level} level. ${sport.description} Explore stats, achievements, coaches, and career timeline.`;
  const url = `${BASE_URL}/sport/${sport.id}`;

  return {
    title,
    description,
    keywords: [
      ATHLETE_NAME,
      sport.name,
      sport.role,
      sport.level,
      `${ATHLETE_NAME} ${sport.name}`,
      'athlete portfolio',
      'YouInSports',
    ],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url,
      siteName: 'YouInSports',
      title,
      description,
      images: [
        {
          url: sport.image,
          width: 1000,
          height: 800,
          alt: `${ATHLETE_NAME} – ${sport.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [sport.image],
    },
  };
}

// ─── Athlete Profile Page Metadata ───────────────────────────────────────────
export function generateAthleteMetadata(): Metadata {
  const title = `${ATHLETE_NAME} – Official Athlete Profile`;
  const url = `${BASE_URL}/athlete/${ATHLETE_SLUG}`;

  return {
    title,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'profile',
      locale: 'en_US',
      url,
      siteName: 'YouInSports',
      title,
      description: DEFAULT_DESCRIPTION,
      images: [{ url: PROFILE_IMAGE, width: 1920, height: 1080, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: DEFAULT_DESCRIPTION,
      images: [PROFILE_IMAGE],
    },
  };
}
