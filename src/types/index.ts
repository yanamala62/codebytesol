export interface SiteMeta {
  appTitle: string;
  loadingLabel: string;
  missingPageLabel: string;
}

export interface HeroData {
  title: string;
  highlight: string;
  phrases: string[];
  description: string;
  cta: { label: string; href: string };
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  navDesc: string;
  cardDescription: string;
  image: string;
  link: string;
}

export interface Industry {
  id: string;
  icon: string;
  title: string;
  navDesc: string;
  image: string;
  link: string;
}

export interface Resource {
  icon: string;
  title: string;
  desc: string;
  link: string;
  image: string;
}

export interface CompanyItem {
  icon: string;
  title: string;
  desc: string;
  link: string;
  image: string;
}

export interface UseCase {
  industry: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface TechCategory {
  category: string;
  icon: string;
  tools: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface Location {
  region: string;
  icon: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinks {
  services: FooterLinkItem[];
  industries: FooterLinkItem[];
  resourcesCompany: FooterLinkItem[];
}

export interface CTAData {
  title: string;
  description: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
}

export interface ContentData {
  hero: HeroData;
  services: Service[];
  industries: Industry[];
  resources: Resource[];
  company: CompanyItem[];
  useCases: UseCase[];
  techStack: TechCategory[];
  whyUs: Feature[];
  trustImages: string[];
  socialLinks: SocialLink[];
  locations: Location[];
  footerLinks: FooterLinks;
  cta: CTAData;
  meta?: SiteMeta;
}
