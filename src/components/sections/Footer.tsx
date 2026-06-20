import { Github, Linkedin, Mail, ArrowUp, type LucideIcon } from 'lucide-react';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';

const iconFor: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-[var(--text-faint)]">
          © {year} {profile.name}. Built with React, Vite &amp; Tailwind.
        </p>

        <div className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = iconFor[s.icon] ?? Mail;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.icon === 'mail' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Icon size={16} />
              </a>
            );
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
