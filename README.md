# Bailey Lab — website

Website skeleton for the **Bailey Lab** at the Research Institute of the McGill
University Health Centre (RI-MUHC) and McGill University.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS**, exported as a
fully static site and deployed to **GitHub Pages**. No backend, database,
authentication or CMS.

> ⚠️ **All content in this repository is placeholder material.** No scientific
> findings, lab members, publications, awards, grants or contact details have
> been invented. Every placeholder is written in the form `[Text to be added]`
> so it is obvious what still needs replacing. The application instructions on
> `/join` in particular must be reviewed and approved by the lab before the
> site is made public.

---

## 1. Project structure

```
bailey-lab-website/
├── app/                          # Routes (Next.js App Router)
│   ├── layout.tsx                # Root layout: fonts, navbar, footer, site metadata
│   ├── globals.css               # Tailwind entry + base styles + design tokens
│   ├── page.tsx                  # /            Home
│   ├── research/page.tsx         # /research
│   ├── people/page.tsx           # /people
│   ├── publications/page.tsx     # /publications
│   ├── news/page.tsx             # /news
│   ├── join/page.tsx             # /join
│   ├── contact/page.tsx          # /contact
│   ├── not-found.tsx             # 404
│   ├── sitemap.ts                # → /sitemap.xml
│   └── robots.ts                 # → /robots.txt
│
├── components/                   # Reusable UI
│   ├── Navbar.tsx                # Sticky responsive navigation
│   ├── MobileMenu.tsx            # Accessible hamburger menu (focus trap, Esc to close)
│   ├── Footer.tsx                # Address, links, institutional logo slots
│   ├── Hero.tsx                  # <Hero> (homepage) and <PageHero> (interior pages)
│   ├── SectionHeading.tsx        # Eyebrow + heading + description
│   ├── ResearchCard.tsx          # Research theme card
│   ├── PersonCard.tsx            # <PersonCard> and <PrincipalInvestigatorCard>
│   ├── PublicationItem.tsx       # <PublicationItem> and <PublicationPreview>
│   ├── NewsCard.tsx              # News card
│   ├── CTASection.tsx            # Dark call-to-action band
│   ├── Placeholder.tsx           # Image / avatar placeholders
│   └── ui.tsx                    # ButtonLink, ArrowLink, Tag, Section
│
├── data/                         # ← ALL EDITABLE CONTENT LIVES HERE
│   ├── site.ts                   # Site name, tagline, navigation, contact, socials
│   ├── research.ts               # Research themes
│   ├── people.ts                 # Lab members
│   ├── publications.ts           # Publications
│   ├── news.ts                   # News items
│   └── join.ts                   # Recruitment copy + application steps
│
├── lib/
│   ├── paths.ts                  # withBasePath() — keeps assets working on GitHub Pages
│   └── seo.ts                    # pageMetadata() — per-page title/description/OpenGraph
│
├── public/
│   ├── .nojekyll                 # Stops GitHub Pages stripping /_next/
│   ├── images/{research,people,news}/
│   └── logos/                    # RI-MUHC and McGill logos
│
├── .github/workflows/deploy.yml  # Build + deploy to GitHub Pages
├── next.config.mjs               # Static export + basePath configuration
├── tailwind.config.ts            # Design tokens (colours, type, spacing, motion)
└── tsconfig.json
```

---

## 2. Installation

Requires **Node.js 20 or newer**.

```bash
git clone https://github.com/<owner>/bailey-lab-website.git
cd bailey-lab-website
npm install
```

## 3. Local development

```bash
npm run dev        # http://localhost:3000
npm run build      # production build → static site in ./out
npm run typecheck  # TypeScript, no emit
npm run lint       # ESLint
```

To preview the built static site exactly as GitHub Pages will serve it:

```bash
npm run build
npx serve out
```

## 4. Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes on every
push to `main`.

**One-time setup:**

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will be live at `https://<owner>.github.io/<repo-name>/`.

### Project page vs. custom domain

The build reads `NEXT_PUBLIC_BASE_PATH` and adjusts every internal link and
asset URL, so no code changes are needed to move between the two:

| Deployment target                          | `NEXT_PUBLIC_BASE_PATH`  |
| ------------------------------------------ | ------------------------ |
| `owner.github.io/bailey-lab-website/`      | `/bailey-lab-website`    |
| `owner.github.io/` (user or org site)      | *(empty)*                |
| Custom domain, e.g. `baileylab.ca`         | *(empty)*                |

The workflow sets this automatically from `actions/configure-pages`, which
detects which of the two cases applies.

**To add a custom domain later:**

1. **Settings → Pages → Custom domain**, enter the domain and save.
2. Add the DNS records GitHub shows you at your registrar.
3. Tick **Enforce HTTPS** once the certificate is issued.
4. Update `site.url` in `data/site.ts` so canonical links and the sitemap match.

### Transferring to a GitHub organisation

Nothing in the code hard-codes the owner or repository name, so a transfer is
just: **Settings → General → Transfer ownership**. Afterwards, re-enable
**Settings → Pages → Source: GitHub Actions** on the transferred repository and
update `site.url` in `data/site.ts`.

---

## 5. Where to replace content

Almost nothing is hard-coded into page components — content lives in `/data`
and is rendered by the pages. In most cases you will only ever edit `/data`.

### Text

| What                                            | File |
| ----------------------------------------------- | ---- |
| Lab name, tagline, meta description, site URL   | `data/site.ts` → `site` |
| Navigation labels and order                     | `data/site.ts` → `navItems` |
| Homepage intro paragraphs, section headings     | `app/page.tsx` |
| Interior page intro paragraphs                  | the relevant `app/<route>/page.tsx` |
| Per-page SEO title and description              | the `pageMetadata({...})` call at the top of each page |

### People

`data/people.ts`. Each entry supports `name`, `role`, `group`, `photo`, `bio`,
`interests`, `email`, `linkedin`, `scholar`, `website` and (for alumni)
`currentPosition`.

`group` decides which section the person appears in on `/people`:
`'pi' | 'postdoc' | 'graduate' | 'staff' | 'undergraduate' | 'alumni'`.
The person with `group: 'pi'` is rendered in the larger profile block.
The homepage preview uses the first four non-alumni entries.

### Publications

`data/publications.ts`. Each entry supports `title`, `authors`, `journal`,
`year`, `doi`, `pubmedUrl`, `pdfUrl` and `note`. Order in the array does not
matter — the page groups by year, newest first. Set `featured: true` on up to
three papers to surface them on the homepage.

Wrap a lab member's name in `**double asterisks**` inside `authors` to render
it in bold, e.g. `'Smith J, **Bailey A**, Tremblay L'`.

### News

`data/news.ts`. Each entry supports `title`, `date` (ISO, `YYYY-MM-DD`),
`category`, `description`, `image`, `imageAlt` and `link`. Categories are
`'Publication' | 'Award' | 'Conference' | 'Lab News' | 'Grant'`. Sorting is
automatic; the homepage shows the three most recent.

### Research content

`data/research.ts`. Each theme supports `id` (the `/research#anchor`),
`title`, `category`, `description` (homepage card), `longDescription` (an array
— one string per paragraph on `/research`), `highlights` (bullet list), `image`
and `imageAlt`. Set `featured: true` on the theme you want in the homepage
"Featured research" band.

### Images

Drop files into `public/images/…` and set the matching field in the data file:

| Folder             | Set on                        | Suggested size       |
| ------------------ | ----------------------------- | -------------------- |
| `images/research/` | `research.ts` → `image`       | 1600×1000 (16:10)    |
| `images/people/`   | `people.ts` → `photo`         | 800×800 (square)     |
| `images/news/`     | `news.ts` → `image`           | 1600×1000 (16:10)    |
| `images/`          | `site.ts` → `ogImage`         | 1200×630             |

Paths are written from the site root, e.g. `/images/people/jane-doe.jpg` — the
`withBasePath()` helper adds the deployment prefix for you. Any entry left
without an image renders a clearly-labelled placeholder, so the site stays
presentable while assets are gathered.

The Next.js image optimizer is disabled (GitHub Pages is a static host), so
**resize and compress images before committing them** — aim for under ~300 KB.

The homepage hero image is currently a placeholder; pass an `image` prop to
`<Hero>` in `app/page.tsx` to set it.

### Logos

Put `ri-muhc.svg` and `mcgill.svg` in `public/logos/`, then replace the two
`<LogoPlaceholder …>` elements near the bottom of `components/Footer.tsx` with
real `<img>` tags — `public/logos/README.md` has the snippet.

⚠️ Check RI-MUHC and McGill brand guidelines, and confirm permitted usage with
the relevant communications office, before publishing either logo.

---

## 6. Design system

All visual decisions live in `tailwind.config.ts` and the `:root` block of
`app/globals.css` — change them there rather than in individual components.

- **Backgrounds** — `paper` (`#FFFFFF`) and `canvas` (`#F7F7F5`), alternating by section
- **Typography** — `ink` (`#16191D`) with `ink-soft` / `ink-muted` / `ink-faint` steps
- **Accent** — a single deep teal scale; `accent-600` is the primary
- **Fonts** — Manrope (headings) and Inter (body), self-hosted via Fontsource
- **Motion** — short fades and 200–500 ms transitions only; everything is
  disabled automatically under `prefers-reduced-motion`

Fonts are installed as npm packages (`@fontsource-variable/*`) rather than
fetched from `fonts.googleapis.com`. They are the same typefaces, but the font
files ship with the build — so the site builds without network access to Google
and visitors' browsers never make a third-party request.

## 7. Accessibility

Verified in this skeleton:

- Semantic landmarks (`header` / `nav` / `main` / `footer`), skip-to-content link
- Exactly one `<h1>` per page, no skipped heading levels
- Mobile menu: `aria-expanded` / `aria-controls`, focus trap, Escape to close,
  focus returned to the toggle, and removed from the tab order when closed
- Visible focus rings on every interactive element
- `alt` text on every image, with descriptive labels on placeholders
- Descriptive link text (screen-reader-only suffixes where the visible text is
  short, and "opens in a new tab" on external links)
- All text/background pairs meet WCAG AA (4.6:1 or better)

When adding content, keep alt text meaningful and avoid link text like
"click here".

## 8. Responsive breakpoints

Checked at 1440px, 1024px, 768px and 390px. Three-column grids reflow to two at
`sm` and one on small phones; the desktop navigation becomes the hamburger menu
below `lg` (1024px).

---

## Licence

Add a `LICENSE` file before making the repository public. Content (text, images,
figures) and code may warrant different terms — check RI-MUHC and McGill policy.
