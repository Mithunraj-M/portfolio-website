import type { SocialLink } from '@/types';

export const email = 'mithunraj.m06@gmail.com';

export const socials: SocialLink[] = [
  {
    label: 'Email',
    icon: 'mail',
    href: `mailto:${email}`,
    display: email,
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/mithunraj-m',
    display: 'linkedin.com/in/mithunraj-m',
  },
  {
    label: 'GitHub',
    icon: 'github',
    href: 'https://github.com/Mithunraj-M',
    display: 'github.com/Mithunraj-M',
  },
];

/** Sections used by the navbar — id must match each section's DOM id. */
export const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];
