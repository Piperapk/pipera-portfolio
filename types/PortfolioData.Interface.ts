export interface ProjectLink {
  label: string;
  url: string;
  icon?: string;
}

export interface ProjectBase {
  slug: string;
  title: string;
  order: number;
  tags: string[];
  links: ProjectLink[];
}

export interface PortfolioWork extends ProjectBase {
  pinned: boolean;
  image: string;
  imageAlt: string;
  textCase: string;
  textOutcome: string;
}

export interface OpenSourceWork extends ProjectBase {
  textBody: string;
}

export interface PortfolioData {
  works: PortfolioWork[];
  openSourceWorks: OpenSourceWork[];
}
