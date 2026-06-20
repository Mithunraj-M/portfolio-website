import { Section } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { skills } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Skills" title="Tools I work with">
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <RevealItem
            key={group.category}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
