export type ProjectCategory = 
  | 'all'
  | 'category-1' // Online Business
  | 'category-2' // Offline Business Scaling
  | 'category-3' // Marketing and Branding
  | 'category-4'; // Sales Engineering

export interface ProjectItem {
  id: string;
  title: string;
  categories: ProjectCategory[];
  categoryLabel: string;
  image: string;
  description: string;
}

export interface SpecialityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  tierLabel: string;
  isPopular?: boolean;
  features: string[];
  note: string;
}

export interface TestimonialItem {
  id: string;
  image: string;
  clientTitle: string;
  rating: number;
  highlight: string;
}

export interface ClientItem {
  id: string;
  name: string;
  logo: string;
}

export interface ProfileItem {
  platform: string;
  name: string;
  url: string;
  image: string;
  badge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
