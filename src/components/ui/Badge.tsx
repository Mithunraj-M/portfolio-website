import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Small pill used for tech tags and skill chips. */
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] tracking-wide text-[var(--text-muted)]',
        className,
      )}
    >
      {children}
    </span>
  );
}
