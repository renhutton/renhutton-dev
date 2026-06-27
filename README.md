# renhutton.dev

Personal portfolio site for Ren Hutton

Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Running locally

You'll need **Node.js 18.17+** installed. Check with:

```bash
node --version
```

Then from inside this folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Edits to files under `app/` and `components/` will hot-reload automatically.

## Available scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — lint the codebase

---

## Project structure

```
renhutton-dev/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page (composes all sections)
│   └── globals.css       # Global styles, cursor blink, grid background
├── components/
│   ├── Nav.tsx           # Sticky top nav with scroll-aware blur
│   ├── Hero.tsx          # Landing section with blinking cursor
│   ├── About.tsx         # About + quick-facts panel
│   ├── Projects.tsx      # Project cards (WellOral + placeholders)
│   ├── Skills.tsx        # Skills grouped by category
│   ├── Experience.tsx    # Roles with bullet points
│   ├── Contact.tsx       # Contact links
│   └── SectionHeading.tsx
├── tailwind.config.ts    # Theme tokens (colors, animations)
├── tsconfig.json
└── next.config.mjs
```

---

## Updating content

Most edits are content swaps inside the `components/` folder.

**Add a project:** edit the `projects` array in `components/Projects.tsx`. Set `placeholder: true` to render dimmed (no GitHub link required); remove it once the project is real.

**Add a role:** edit the `roles` array in `components/Experience.tsx`.

**Update skills:** edit the `groups` array in `components/Skills.tsx`.

**Change the accent colour:** update `colors.accent` in `tailwind.config.ts` and the `--accent` CSS variable in `app/globals.css`. The current colour is terminal green (`#4ade80`).

**Add a CV download:** drop `cv.pdf` into a new `public/` folder and add a link in `components/Contact.tsx`:

```tsx
<a href="/cv.pdf" download>download cv</a>
```

---

## Deploying to Vercel + connecting renhutton.dev

1. Push this folder to a GitHub repo (e.g., `github.com/renhutton/renhutton-dev`).
2. Sign in to [vercel.com](https://vercel.com) with your GitHub account.
3. Click **Add New → Project**, pick the repo, and accept the defaults. Vercel auto-detects Next.js.
4. Once it deploys, you'll get a free `*.vercel.app` URL.
5. To use **renhutton.dev**: buy the domain (Namecheap, Porkbun, Cloudflare all work). In your Vercel project go to **Settings → Domains**, add `renhutton.dev`, and follow the DNS instructions (usually adding an `A` record and a `CNAME` for `www`).
6. Every `git push` to `main` re-deploys automatically.

---

## Notes

- The blinking cursor is a CSS pseudo-element — see the `.cursor` class in `globals.css`.
- The subtle grid background lives in `body` styles in `globals.css`; tweak the `background-size` to make it tighter or looser.
- Fonts are JetBrains Mono (headings/code) and Inter (body), loaded via `next/font/google`.
- `metadataBase` in `app/layout.tsx` is set to `https://renhutton.dev` — update it if you change domains.
