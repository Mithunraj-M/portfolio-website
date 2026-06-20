import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  /** Small eyebrow label above the title, e.g. "01 — About". */
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Standard section shell: consistent vertical rhythm + centered max width + heading. */
export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative scroll-mt-20 py-24 sm:py-28', className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <Reveal className="mb-12 sm:mb-16">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-accent)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
