export type NavPage = 'home' | 'services' | 'portfolio' | 'pricing' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  category: 'platform' | 'identity' | 'mobile' | 'monetization' | 'content' | 'ecosystem';
  features: string[];
  deliverables: string[];
  techStack: string[];
  idealFor: string;
  timeline: string;
  previewUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  worthPrice: number;
  ourPrice: number;
  saveAmount: number;
  popular?: boolean;
  featured?: boolean;
  timeline: string;
  features: string[];
  scopeNote: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  tag: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  impactStats: { label: string; value: string }[];
  accentColor: string;
  liveUrl?: string;
}

export interface InquiryFormData {
  name: string;
  instituteName: string;
  mobile: string;
  email: string;
  city: string;
  instituteType: string;
  services: string[];
  currentSetup: string;
  studentRange: string;
  requirements: string;
}
