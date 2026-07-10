# What Should I Wear Today

AI-powered outfit recommendations based on weather, occasion and lifestyle.

## Built With

- **Next.js 15** (App Router) — Static HTML Export
- **TypeScript** — Type-safe code
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Reusable UI components
- **Framer Motion** — Smooth animations
- **Lucide React** — Icon library
- **React Hook Form** — Form management

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export is output to the `out/` directory.

## Deploy to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages.
2. Set the framework preset to **Next.js (Static HTML Export)**.
3. Build command: `npx next build`
4. Output directory: `out`

No server-side features are used. The site is fully static.

## Project Structure

```
app/          — Next.js App Router pages and layout
components/   — Reusable React components
  ui/         — Primitive UI components (button, card, input, badge)
lib/          — Utility functions and business logic
hooks/        — Custom React hooks
public/       — Static assets (favicon, robots.txt, sitemap)
types/        — TypeScript type definitions
styles/       — Global styles
```

## Features

- **Interactive Demo** — Generate outfit recommendations from weather, occasion, and style preferences
- **Waitlist** — Email signup stored in localStorage (ready for Cloudflare Worker API)
- **Responsive Design** — Optimized for all screen sizes from 320px to 1920px
- **SEO** — OpenGraph, Twitter Cards, JSON-LD schema, sitemap, robots.txt

## Roadmap

- [ ] AI Wardrobe Upload — Upload photos of your clothes
- [ ] Personal Style Learning — AI that learns your preferences
- [ ] Cloudflare Worker API — Connect waitlist to a serverless endpoint
- [ ] User Accounts — Save preferences and wardrobe
- [ ] Mobile App — Native iOS and Android apps

## License

MIT
