export interface QuizOption {
  label: string;
  profile: 'explorador' | 'creador' | 'arquitecto' | 'emprendedor';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  id: string;
  title: string;
  profileKey: 'explorador' | 'creador' | 'arquitecto' | 'emprendedor';
  badge: string;
  description: string;
  recommendation: string;
}

export interface NicheExample {
  title: string;
  type: string;
  description: string;
  benefit: string;
}

export interface NicheCategory {
  id: string;
  name: string;
  iconName: string;
  shortDescription: string;
  examples: NicheExample[];
}

export interface MapPillar {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

export interface CourseModule {
  id: number;
  number: string;
  title: string;
  summary: string;
  topics: string[];
}

export interface BonusItem {
  id: number;
  badge: string;
  title: string;
  shortDesc: string;
  detail: string;
  specialNote?: string;
  iconName: string;
}

export interface LibraryCategory {
  name: string;
  count: number;
  description: string;
  sampleApps: {
    title: string;
    description: string;
    salesPageIncluded: boolean;
  }[];
}

export interface MiniAppItem {
  id: number;
  number: number;
  level: 1 | 2;
  category: string;
  categorySlug: string;
  subcategory: string;
  title: string;
  description: string;
  image?: string;
  prompt: string;
  salesPageUrl?: string | null;
}

export interface LibraryCategoryCard {
  slug: string;
  name: string;
  level: 1 | 2;
  count: number;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  photo?: string;
  quote: string;
  result?: string;
  date?: string;
}
