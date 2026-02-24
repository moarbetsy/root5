# Root to Rise Coaching

A complete website for **Root to Rise Coaching**—helping teens and adults with special needs build healthy routines through movement, nutrition, routine, and wellness coaching.

## Stack

- **Client:** React 19, Vite 7, Wouter, Tailwind CSS 4, Radix UI, Framer Motion
- **Server:** Express (serves built client + SPA fallback)

## Setup

```bash
pnpm install
```

## Development

Run the Vite dev server (hot reload, port 3000 by default):

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

Build the client and server for production:

```bash
pnpm run build
```

Output:

- `dist/public/` — static assets and `index.html`
- `dist/index.js` — Express server bundle

## Production

After building, start the server:

```bash
pnpm run start
```

Serves the app on port **3000** (or `PORT` env). All routes serve the SPA.

## Scripts

| Script     | Description                    |
|-----------|---------------------------------|
| `dev`     | Vite dev server                 |
| `build`   | Vite build + esbuild server     |
| `start`   | Run production server           |
| `preview` | Vite preview (client only)      |
| `check`   | TypeScript check                |
| `format`  | Prettier format                 |

## Site structure

- **Home** — Hero, value prop, who it’s for, focus areas, how it works, CTAs
- **About** — Coach story, approach, focus areas, safe space
- **Programs** — 1:1 and small group coaching, why it matters, examples
- **How It Works** — 4-step process, values, CTA
- **For Parents** — Role, safety, communication, long-term growth
- **FAQs** — Accordion of common questions
- **Contact** — Message form + booking placeholder

All pages use the shared header/footer, theme (primary green/cream), and mobile nav.
