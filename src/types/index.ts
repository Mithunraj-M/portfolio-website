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
  /**
   * Resume/CV file name placed in `public/` (e.g. "resume.pdf"), or a full URL.
   * The download button only renders if the file actually exists, so leaving a
   * value here is safe even before you upload the file. Set to '' to hide it.
   */
  resumeUrl?: string;
}

export interface SkillGroup {
  /** Category label, e.g. "Languages", "AI / ML", "Backend". */
  category: string;
  /** Skills in this category. */
  skills: string[];
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
  /** Source / repo link (e.g. GitHub). */
  link?: string;
  /** Optional label for the repo link button. Defaults to "Code". */
  linkLabel?: string;
  /** Optional live demo / deployed URL, shown as a separate button. */
  demo?: string;
  /** Category tag shown on the card, e.g. "Deep Learning", "Web", "IoT". */
  category?: string;
  /** Optional year or period, e.g. "2024". */
  year?: string;
  /**
   * Optional result/impact highlights, e.g. "98% accuracy", "1k+ records".
   * Shown as small stat chips. Use real numbers only.
   */
  metrics?: string[];
  /** Optional thumbnail image (import from src/assets or a public URL). */
  image?: string;
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
