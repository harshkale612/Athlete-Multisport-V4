// ============================================
// ATHLETE PORTFOLIO — TYPE DEFINITIONS
// ============================================

export interface SocialLinks {
  linkedin: string;
  instagram: string;
  youtube: string;
  email: string;
}

export interface KeyHighlight {
  label: string;
  value: string;
}

export interface AthleteProfile {
  name: string;
  slug: string;
  tagline: string;
  profileImage: string;
  location: string;
  shortBio: string;
  bio: string;
  keyHighlights: KeyHighlight[];
  profileHighlights: string[];
  socialLinks: SocialLinks;
}

export interface KeyStat {
  label: string;
  value: string;
}

export interface Sport {
  id: string;
  key: string;
  name: string;
  role: string;
  level: string;
  accentKey: string;
  route: string;
  shortTagline: string;
  description: string;
  keyStats: KeyStat[];
  image: string;
  imageAlt: string;
}

export interface Achievement {
  id: number;
  title: string;
  year: string;
  sportKey: string;
  description: string;
  icon: 'Trophy' | 'Medal' | 'Award' | 'Star';
}

export interface TimelineEvent {
  id: number;
  yearOrDate: string;
  title: string;
  description: string;
  sportKey: string;
  isHighlight: boolean;
}

export interface Coach {
  id: number;
  name: string;
  role: string;
  sportKey: string;
  experience: string;
  imageUrl: string;
  quote: string;
}

export interface Institute {
  id: number;
  name: string;
  type: string;
  sportKey: string;
  description: string;
  yearStart: string;
  yearEnd: string;
  image?: string;
}

export interface Club {
  id: number;
  name: string;
  sportKey: string;
  type: string;
  joinedYear: string;
  role: string;
  logo?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  sportKey: string;
  type: 'image';
  alt: string;
  description: string;
  src: string;
}

export interface Post {
  id: string;
  image: string;
  caption: string;
  sport: string | null;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatsOverall {
  yearsTraining: number;
  totalMatchesOrEvents: number;
  overallWinRate: string;
  sportsCount: number;
}

export interface StatsData {
  overall: StatsOverall;
  details: Record<string, Record<string, string | number>>;
}
