export const site = {
  name: 'The Harbor Ledger',
  tagline: 'Independent reporting from the waterfront outward',
  description:
    'A daily digital newspaper covering business, technology, culture, and civic life - built as a realistic publisher environment for internal ad and layout testing.',
  location: 'Port Meridian',
  founded: 1894,
  email: 'newsroom@theharborledger.com',
};

export type CategorySlug =
  | 'business'
  | 'technology'
  | 'sports'
  | 'culture'
  | 'health'
  | 'politics'
  | 'science'
  | 'travel';

export const categories: {
  slug: CategorySlug;
  label: string;
  blurb: string;
}[] = [
  {
    slug: 'business',
    label: 'Business',
    blurb: 'Markets, deals, labor, and the companies reshaping the coast economy.',
  },
  {
    slug: 'technology',
    label: 'Technology',
    blurb: 'Infrastructure, product bets, and the people wiring the next decade.',
  },
  {
    slug: 'sports',
    label: 'Sports',
    blurb: 'Clubhouse notes, playoff pressure, and the games that hold a city together.',
  },
  {
    slug: 'culture',
    label: 'Culture',
    blurb: 'Arts, food, design, and the scenes that give a place its voice.',
  },
  {
    slug: 'health',
    label: 'Health',
    blurb: 'Public health, clinics, and the quiet systems that keep people well.',
  },
  {
    slug: 'politics',
    label: 'Politics',
    blurb: 'City hall, statehouses, and the policy fights behind the headlines.',
  },
  {
    slug: 'science',
    label: 'Science',
    blurb: 'Research, climate, and discoveries that move from lab bench to shoreline.',
  },
  {
    slug: 'travel',
    label: 'Travel',
    blurb: 'Routes, rooms, and the trips worth planning for - near and far.',
  },
];

export function categoryLabel(slug: string): string {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}

export function categoryBlurb(slug: string): string {
  return categories.find((c) => c.slug === slug)?.blurb ?? '';
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
