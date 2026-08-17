export type Locale = 'es' | 'en'

export interface NavItem {
  label: string
  href: string
}

export interface ProofPoint {
  value: string
  label: string
  detail: string
}

export interface CaseStudy {
  index: string
  category: string
  title: string
  summary: string
  challenge: string
  contribution: string
  result: string
  stack: string[]
  link?: { label: string; href: string }
}

export interface ExperienceItem {
  period: string
  role: string
  company: string
  location: string
  summary: string
  highlights: string[]
  tags: string[]
}

export interface CapabilityGroup {
  number: string
  title: string
  description: string
  skills: string[]
}

export interface Credential {
  period: string
  title: string
  institution: string
  description: string
}

export interface Publication {
  type: string
  title: string
  description: string
  href: string
}

export interface ProfileContent {
  meta: {
    title: string
    description: string
    locale: string
  }
  skipLink: string
  nav: NavItem[]
  navCta: string
  availability: string
  hero: {
    eyebrow: string
    title: string
    lead: string
    location: string
    primaryCta: string
    secondaryCta: string
    photoAlt: string
    photoNote: string
  }
  proofs: ProofPoint[]
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    statement: string
  }
  cases: {
    eyebrow: string
    title: string
    intro: string
    challengeLabel: string
    contributionLabel: string
    resultLabel: string
    expandLabel: string
    items: CaseStudy[]
  }
  experience: {
    eyebrow: string
    title: string
    intro: string
    items: ExperienceItem[]
  }
  capabilities: {
    eyebrow: string
    title: string
    intro: string
    groups: CapabilityGroup[]
    supportingLabel: string
    supporting: string[]
  }
  credentials: {
    eyebrow: string
    title: string
    items: Credential[]
    publicationsTitle: string
    publications: Publication[]
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    emailLabel: string
    linkedInLabel: string
    responseNote: string
  }
  footer: {
    note: string
    backToTop: string
  }
  labels: {
    current: string
    downloadCv: string
    switchToSpanish: string
    switchToEnglish: string
  }
}
