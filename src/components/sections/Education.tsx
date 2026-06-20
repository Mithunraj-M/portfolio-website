import { GraduationCap } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { education } from '@/data/education';

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Academic background">
      <RevealGroup className="grid gap-5 md:grid-cols-3">
        {education.map((edu) => (
          <RevealItem key={edu.institution}>
            <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[color-mix(in_srgb,var(--color-accent)_30%,var(--border))]">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] text-[var(--color-accent)]">
                <GraduationCap size={20} />
              </div>
              <p className="font-mono text-xs text-[var(--text-faint)]">{edu.period}</p>
              <h3 className="mt-2 font-semibold leading-snug text-[var(--text)]">
                {edu.qualification}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{edu.institution}</p>
              <p className="text-sm text-[var(--text-faint)]">{edu.location}</p>

              <div className="mt-auto pt-4">
                {edu.score && (
                  <span className="inline-block rounded-full bg-[var(--surface-2)] px-2.5 py-1 font-mono text-xs text-[var(--text-muted)]">
                    {edu.score}
                  </span>
                )}
                {edu.detail && (
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-faint)]">
                    {edu.detail}
                  </p>
                )}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
