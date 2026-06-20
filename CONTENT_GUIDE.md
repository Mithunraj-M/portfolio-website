# Content Guide

All the words, links, and images on this site come from typed data files in
[`src/data/`](src/data/) — you should **never need to touch component code** to
update content. Edit the data, save, and the site updates.

The shape of each data file is enforced by TypeScript types in
[`src/types/index.ts`](src/types/index.ts). If you add or rename a field, update
the type first and the compiler will point you to everything that needs changing.

> After editing, run `npm run dev` to preview locally, or `npm run build` to
> confirm everything still type-checks before deploying.

---

## Where each thing lives

| What you want to change | File |
|---|---|
| Name, role, tagline, About paragraphs, hero highlight chips, profile photo | [`src/data/profile.ts`](src/data/profile.ts) |
| Work experience entries | [`src/data/experience.ts`](src/data/experience.ts) |
| Skills (grouped by category) | [`src/data/skills.ts`](src/data/skills.ts) |
| Projects | [`src/data/projects.ts`](src/data/projects.ts) |
| Education entries | [`src/data/education.ts`](src/data/education.ts) |
| Email, social links, and the navbar menu | [`src/data/socials.ts`](src/data/socials.ts) |
| Page `<title>`, meta description, Open Graph, favicon, fonts | [`index.html`](index.html) |
| Images | [`src/assets/`](src/assets/) (imported) or [`public/`](public/) (static) |

---

## Profile — `src/data/profile.ts`

A single `profile` object. Fields:

- `name` — your name (shown big in the hero).
- `role` — short role line under the name, e.g. `"AI/ML Engineer"`.
- `tagline` — one-line current-focus sentence.
- `about` — an **array of strings**; each string is one paragraph in the About section.
- `location` — e.g. `"Bengaluru, India"`.
- `highlights` — short array of keyword chips shown in the hero.
- `avatar` — the profile image (see [Images](#images)).
- `resumeUrl` — file name of your CV in `public/` (e.g. `"resume.pdf"`) or a full
  URL. See [Resume / CV download](#resume--cv-download) — the button only shows if
  the file actually exists, so it's safe to leave set.

```ts
export const profile: Profile = {
  name: 'Your Name',
  role: 'AI & Software Engineering Intern',
  tagline: 'One line about what you build.',
  about: [
    'First paragraph.',
    'Second paragraph.',
  ],
  location: 'City, Country',
  highlights: ['LLM Evaluation', 'Agentic AI', 'Deep Learning'],
  avatar,
  resumeUrl: 'resume.pdf',
};
```

---

## Experience — `src/data/experience.ts`

An array of roles, **most recent first**. To add a role, copy an existing block,
paste it at the top, and edit it.

Fields (from the `ExperienceItem` type):

- `company` *(required)*
- `role` *(required)* — your job title.
- `employmentType` — e.g. `"Internship"`, `"Full-time"`.
- `start` *(required)* — human-readable, e.g. `"Jan 2026"`.
- `end` *(required)* — e.g. `"Present"` or `"Jan 2026"`.
- `location` *(required)* — e.g. `"Bengaluru, Karnataka, India"`.
- `workMode` — `"On-site"`, `"Remote"`, or `"Hybrid"`.
- `description` — an **array of bullet points** (impact/responsibilities).
- `skills` — array of tech/skill tags.
- `url` — optional company website.

```ts
{
  company: 'Company Name',
  role: 'Your Title',
  employmentType: 'Internship',
  start: 'Jan 2026',
  end: 'Present',
  location: 'City, Country',
  workMode: 'On-site',
  description: [
    'What you did and the impact.',
    'Another bullet.',
  ],
  skills: ['Python', 'FastAPI', 'LLM Evaluation'],
},
```

---

## Projects — `src/data/projects.ts`

An array of projects. Mark the strongest ones with `featured: true` to highlight
them visually.

Fields (from the `ProjectItem` type):

- `title` *(required)*
- `description` *(required)* — 1–2 sentence summary.
- `tech` *(required)* — array of stack tags.
- `link` — repo / source URL (shows a "Code" button with a GitHub icon).
- `linkLabel` — button text for the repo link; defaults to `"Code"`.
- `demo` — optional live demo / deployed URL (shows a separate "Live demo" button).
- `category` — tag shown on the card, e.g. `"Deep Learning"`, `"Full Stack"`, `"IoT"`.
- `year` — optional year/period shown on the card, e.g. `"2024"`.
- `metrics` — optional array of result chips, e.g. `["98% accuracy", "5k images"]`.
  **Use real numbers only** — these are the most persuasive part of a card.
- `image` — optional thumbnail (import from `src/assets/` or a `public/` URL).
- `featured` — `true` to highlight (the card spans full width).

```ts
{
  title: 'Project Name',
  description: 'What it does, in a sentence or two.',
  tech: ['Python', 'TensorFlow', 'Keras'],
  link: 'https://github.com/you/project',
  demo: 'https://your-demo.example.com',
  category: 'Deep Learning',
  year: '2024',
  metrics: ['98% accuracy', '5k images'],
  featured: true,
},
```

---

## Skills — `src/data/skills.ts`

An array of skill groups, each rendered as a card. Add/remove categories freely.

Fields (from the `SkillGroup` type):

- `category` *(required)* — the group heading, e.g. `"Languages"`, `"AI / ML"`.
- `skills` *(required)* — array of skill names shown as chips.

```ts
export const skills: SkillGroup[] = [
  { category: 'Languages', skills: ['Python', 'TypeScript'] },
  { category: 'AI / ML', skills: ['PyTorch', 'LangGraph', 'RAG'] },
  { category: 'Backend', skills: ['FastAPI', 'Node.js'] },
];
```

Keep it honest — list what you can actually speak to in an interview.

---

## Education — `src/data/education.ts`

An array of education entries, **most recent first**.

Fields (from the `EducationItem` type):

- `institution` *(required)*
- `location` *(required)*
- `qualification` *(required)* — e.g. `"B.Tech, Computer Science & Engineering"`.
- `period` *(required)* — e.g. `"2022 – 2026"`.
- `score` — optional, e.g. `"94%"` or `"CGPA 8.7"`.
- `detail` — optional extra line, e.g. a specialization.

```ts
{
  institution: 'University Name',
  location: 'City, Country',
  qualification: 'B.Tech, Computer Science & Engineering',
  period: '2022 – 2026',
  detail: 'Specialization in Artificial Intelligence & Machine Learning',
},
```

---

## Email, socials & navbar — `src/data/socials.ts`

Three things live here:

1. **`email`** — your contact email (also used to build the `mailto:` link).
2. **`socials`** — array of social links. Each has:
   - `label` — e.g. `"GitHub"`.
   - `icon` — one of `'github' | 'linkedin' | 'mail' | 'twitter' | 'globe'`
     (these map to Lucide icons in the components — only add an icon name the
     components already handle).
   - `href` — the URL (use `mailto:` for email).
   - `display` — optional plain text shown to the user, e.g. the handle.
3. **`navLinks`** — the navbar menu. Each `{ label, id }` **`id` must match the
   `id` attribute of the matching section** (e.g. `about`, `experience`, `skills`,
   `projects`, `education`, `contact`) or smooth-scroll navigation will break.

```ts
export const email = 'you@example.com';

export const socials: SocialLink[] = [
  { label: 'Email', icon: 'mail', href: `mailto:${email}`, display: email },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/handle', display: 'linkedin.com/in/handle' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/handle', display: 'github.com/handle' },
];
```

---

## Images

You have two options:

- **Imported assets** (recommended for the profile photo and anything bundled):
  drop the file in [`src/assets/`](src/assets/), then `import` it in the data
  file and assign it — exactly how `profile.ts` does:

  ```ts
  import avatar from '@/assets/profile.jpg';
  // ...
  avatar,
  ```

  Imported images are hashed and optimized by Vite, and the deploy base path is
  applied automatically.

- **Static files**: drop the file in [`public/`](public/) and reference it by
  path. For these you must prefix the base path with Vite's
  `import.meta.env.BASE_URL` so it resolves correctly on GitHub Pages, e.g.
  `` `${import.meta.env.BASE_URL}my-image.jpg` ``.

When in doubt, use the imported-asset approach.

---

## Page title, meta & favicon

These live in [`index.html`](index.html), not the data files: the `<title>`, the
`description` meta tag, the Open Graph tags, the favicon link, and the Google
Fonts `<link>`s. Update them there.

---

## Resume / CV download

Drop your CV at **`public/resume.pdf`** and a "Download CV" button appears
automatically in the hero. There's nothing else to wire up: the button checks at
runtime whether the file exists, so **if no file is present it simply doesn't
show** (no broken link). To use a different file name or an external URL, set
`resumeUrl` in [`src/data/profile.ts`](src/data/profile.ts); set it to `''` to
hide the button entirely.

---

## Social share image (Open Graph)

When the site link is shared (LinkedIn, WhatsApp, Slack…), the preview image comes
from `og:image` in [`index.html`](index.html). Add a **1200×630** image at
**`public/og-image.png`** — the meta tags already point at it. Without the file,
the link still works; it just won't show a preview image.

---

## Analytics (optional)

Privacy-friendly analytics (GoatCounter — no cookies, no personal data) is
pre-wired but **commented out** in [`index.html`](index.html). To turn it on:

1. Sign up free at <https://www.goatcounter.com/> and choose a code (subdomain).
2. In `index.html`, replace `MYCODE` with your code and uncomment the `<script>`.

It stays off until you do this, so no requests are sent in the meantime.

---

## Deploying

Deployment is **automatic**: commit your content changes and push to `main`, and
GitHub Actions builds and publishes the site (see
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). There's no manual
deploy step.

To check your changes locally before pushing:

```bash
npm run build     # type-checks and builds into dist/
npm run preview   # preview the production build locally
```

The site is served under `/portfolio-website/` on GitHub Pages — that base path
is configured in [`vite.config.ts`](vite.config.ts) and applied automatically to
imported assets.
