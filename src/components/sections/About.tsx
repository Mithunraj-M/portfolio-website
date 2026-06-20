import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/profile';

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About me">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
        {/* Portrait */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal delay={0.1}>
          <div className="space-y-5 text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-xs text-[var(--text-muted)]"
              >
                {h}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
