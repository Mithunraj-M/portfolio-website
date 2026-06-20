import { MapPin } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've worked">
      <RevealGroup className="relative">
        {/* Vertical spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)] sm:left-[9px]" />

        <div className="space-y-10">
          {experience.map((job) => (
            <RevealItem key={`${job.company}-${job.start}`}>
              <div className="relative pl-10 sm:pl-14">
                {/* Node */}
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--bg)] sm:h-5 sm:w-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>

                <div className="surface-card rounded-2xl p-5 transition-colors hover:border-[color-mix(in_srgb,var(--color-accent)_35%,var(--border))] sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)]">{job.role}</h3>
                      <p className="text-[var(--text-muted)]">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-accent)] hover:underline"
                          >
                            {job.company}
                          </a>
                        ) : (
                          <span className="text-[var(--color-accent)]">{job.company}</span>
                        )}
                        {job.employmentType && (
                          <span className="text-[var(--text-faint)]"> · {job.employmentType}</span>
                        )}
                      </p>
                    </div>
                    <div className="shrink-0 font-mono text-xs text-[var(--text-faint)] sm:text-right">
                      <div>
                        {job.start} — {job.end}
                      </div>
                      <div className="mt-1 flex items-center gap-1 sm:justify-end">
                        <MapPin size={12} />
                        {job.location}
                        {job.workMode && ` · ${job.workMode}`}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.description.map((line, i) => (
                      <li
                        key={i}
                        className="relative pl-5 text-sm leading-relaxed text-[var(--text-muted)] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[color-mix(in_srgb,var(--color-accent)_60%,transparent)]"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </Section>
  );
}
