/**
 * Shared content types. Every section renders from typed data in `src/data/*`.
 * Add fields here first, then fill them in the data files — TypeScript will
 * tell you everywhere that needs updating.
 */

export interface Profile {
  name: string;
  /** Short role line shown under the name in the hero, e.g. "AI/ML Engineer". */
  role: string;
  /** One-line tagline / current focus. */
  tagline: string;
  /** Longer "About me" paragraph(s). Each string is a paragraph. */
  about: string[];
  /** Location string, e.g. "Bengaluru, India". */
  location: string;
  /** Short list of headline highlights shown as chips in the hero. */
  highlights: string[];
  /** Path to the profile image (import or public URL). */
  avatar: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  /** e.g. "Internship", "Full-time". */
  employmentType?: string;
  /** Human-readable start, e.g. "Jan 2026". */
  start: string;
  /** Human-readable end or "Present". */
  end: string;
  location: string;
  /** e.g. "On-site", "Remote", "Hybrid". */
  workMode?: string;
  /** Bullet points describing the work / impact. */
  description: string[];
  /** Tech/skill tags. */
  skills: string[];
  /** Optional company website. */
  url?: string;
}

export interface ProjectItem {
  title: string;
  /** 1–2 sentence summary. */
  description: string;
  /** Tech stack tags. */
  tech: string[];
  /** Source / live link. */
  link?: string;
  /** Optional label for the link button. Defaults to "View". */
  linkLabel?: string;
  /** Category tag shown on the card, e.g. "Deep Learning", "Web", "IoT". */
  category?: string;
  /** Mark a project as featured to highlight it visually. */
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  location: string;
  /** e.g. "B.Tech, Computer Science & Engineering". */
  qualification: string;
  /** e.g. "2022 – 2026". */
  period: string;
  /** Optional score line, e.g. "CGPA 8.7" or "93%". */
  score?: string;
  /** Optional extra detail, e.g. specialization. */
  detail?: string;
}

export interface SocialLink {
  label: string;
  /** Lucide icon name handled in the component, e.g. "github". */
  icon: 'github' | 'linkedin' | 'mail' | 'twitter' | 'globe';
  href: string;
  /** Plain display value, e.g. the email or handle. */
  display?: string;
}
