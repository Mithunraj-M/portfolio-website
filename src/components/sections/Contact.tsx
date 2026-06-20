import { Github, Linkedin, Mail, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { socials, email } from '@/data/socials';

const iconFor: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's build something">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-[var(--text-muted)]">
            I’m always open to discussing AI/ML engineering roles, interesting projects, or
            collaboration. The fastest way to reach me is email — I’ll get back to you soon.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-5 py-2.5 text-sm font-semibold text-[#07080d] transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Say hello
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)]">
            {socials.map((s) => {
              const Icon = iconFor[s.icon] ?? Mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === 'mail' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-[var(--surface)] px-5 py-4 transition-colors hover:bg-[var(--surface-2)]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--surface-2)] text-[var(--text-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-[var(--text)]">{s.label}</span>
                    <span className="block truncate text-sm text-[var(--text-faint)]">
                      {s.display}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--text-faint)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
                  />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
