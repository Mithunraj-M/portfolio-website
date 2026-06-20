import { ArrowUpRight, Star } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
      <RevealGroup className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const Wrapper = project.link ? 'a' : 'div';
          return (
            <RevealItem key={project.title} className={cn(project.featured && 'sm:col-span-2')}>
              <Wrapper
                {...(project.link
                  ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className={cn(
                  'group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300',
                  project.link &&
                    'hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-accent)_40%,var(--border))] hover:glow',
                )}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.category && (
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                        {project.category}
                      </span>
                    )}
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                        <Star size={10} className="fill-current" /> Featured
                      </span>
                    )}
                  </div>
                  {project.link && (
                    <ArrowUpRight
                      size={18}
                      className="text-[var(--text-faint)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
                    />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-[var(--text)]">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Wrapper>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
