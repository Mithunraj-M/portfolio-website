import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';

const iconFor = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.12] blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-[360px] w-[360px] rounded-full bg-[var(--color-accent-2)] opacity-[0.10] blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-28 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-gradient sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--text-faint)]">
            <MapPin size={15} />
            {profile.location}
          </div>

          {/* Highlight chips */}
          <div className="mt-7 flex flex-wrap gap-2">
            {profile.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-xs text-[var(--text-muted)]"
              >
                {h}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-5 py-2.5 text-sm font-semibold text-[#07080d] transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[color-mix(in_srgb,var(--color-accent)_40%,var(--border))]"
            >
              Get in touch
            </a>

            <div className="ml-1 flex items-center gap-1">
              {socials.map((s) => {
                const Icon = iconFor[s.icon as keyof typeof iconFor];
                if (!Icon) return null;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon === 'mail' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-colors hover:text-[var(--text)] hover:border-[color-mix(in_srgb,var(--color-accent)_40%,var(--border))]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-faint)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
