import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Projects" title="Things I've built">
      <RevealGroup className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <RevealItem key={project.title} className={cn(project.featured && 'sm:col-span-2')}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--color-accent)_40%,var(--border))] hover:glow">
              {project.image && (
                <div className="aspect-[16/9] w-full overflow-hidden border-b border-[var(--border)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
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
                  {project.year && (
                    <span className="font-mono text-xs text-[var(--text-faint)]">{project.year}</span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-[var(--text)]">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {project.description}
                </p>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="inline-flex items-center rounded-md bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] px-2 py-1 font-mono text-[11px] font-medium text-[var(--color-accent)]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                {(project.link || project.demo) && (
                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--color-accent)]"
                      >
                        <Github size={15} />
                        {project.linkLabel ?? 'Code'}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--color-accent)]"
                      >
                        <ExternalLink size={15} />
                        Live demo
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
