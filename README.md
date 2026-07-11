# Linear — The Product Development System for Teams and Agents

A visually rich, dark-themed marketing landing page that showcases the **Linear** product development platform — a purpose-built tool for planning and building products in the AI era. This is a static, single-page Next.js site that demonstrates Linear's feature set: issue tracking, AI agent integration, roadmap planning, code review, analytics, changelog, and more.

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | `16.2.9` | React framework with App Router |
| [React](https://react.dev) | `19.2.4` | UI library |
| [TypeScript](https://www.typescriptlang.org) | `^5` | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | `^4` | Utility-first styling |
| [Lucide React](https://lucide.dev) | `^1.21.0` | Icon library |
| [ESLint](https://eslint.org) | `^9` | Linting |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Install

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production Preview

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
linear/
├── public/                  # Static assets (favicon, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles, Tailwind theme, custom tokens
│   │   ├── layout.tsx       # Root layout with font, metadata, body shell
│   │   ├── page.tsx         # Single-page layout composing all sections
│   │   └── favicon.ico
│   ├── components/
│   │   ├── Navbar.tsx       # Fixed top nav with mobile hamburger menu
│   │   ├── Hero.tsx         # Full-screen hero with product mockup
│   │   ├── LogoBar.tsx      # Trusted-by logo row (Vercel, OpenAI, etc.)
│   │   ├── Tagline.tsx      # Centered brand tagline
│   │   ├── FeatureCards.tsx  # 3-column feature highlight cards
│   │   ├── FeatureIntake.tsx # Slack integration & Kanban board mockup
│   │   ├── FeaturePlan.tsx  # Roadmap/Gantt chart mockup
│   │   ├── FeatureBuild.tsx # Agent terminal & assignee dropdown
│   │   ├── FeatureReview.tsx# Side-by-side code diff mockup
│   │   ├── FeatureMonitor.tsx # Pulse & cycle-time scatter chart
│   │   ├── Changelog.tsx    # Recent release cards
│   │   ├── Testimonials.tsx # Customer quotes (OpenAI, Ramp)
│   │   ├── SocialProof.tsx  # "33,000+ product teams" stat
│   │   ├── CTA.tsx          # Final call-to-action buttons
│   │   └── Footer.tsx       # 5-column link footer
│   └── ...
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS with Tailwind plugin
├── tsconfig.json            # TypeScript configuration
├── tailwind.config          # (CSS-based via @theme in globals.css)
└── package.json
```

---

## Page Sections (Top to Bottom)

### 1. Navbar
Fixed-position top navigation (56px) with backdrop blur. Contains the Linear logo, desktop nav links (Product, Resources, Customers, Pricing, Contact) with a **NEW** badge, and right-side Log in / Sign up actions. Includes a responsive hamburger menu for mobile.

### 2. Hero
Full-screen hero section with a radial gradient glow background. Features a status badge ("Built for product teams"), main headline emphasizing AI-native product development, and a detailed **macOS-window-framed mockup** of the Linear issue tracker showing sample issues with statuses, priorities, labels, and assignee avatars.

### 3. LogoBar
"Trusted by leading product teams" with brand names rendered as large semi-transparent text: Vercel, Cursor, Oscar, OpenAI, Coinbase, Cash App, Zoom, Ramp.

### 4. Tagline
A centered, large-type brand pull quote: *"A new species of product tool. Purpose-built for modern teams with AI workflows at its core..."*

### 5. FeatureCards
Three-column grid of highlight cards:
- **Built for purpose** — isometric grid illustration
- **Powered by AI agents** — isometric cube illustration
- **Designed for speed** — staircase illustration

### 6. FeatureIntake — "Make product operations self-driving"
Two-panel mockup showing **Slack chat integration** (messages auto-creating urgent issues via a Linear agent) alongside a **Kanban sprint board** with Todo / In Progress / Done columns and labeled cards.

### 7. FeaturePlan — "Define the product direction"
**Roadmap Gantt chart** spanning March–September with 7 initiative rows (Core Product, Infra stability, Autonomous systems, Mobile apps, APAC Expansion, Japan Launch, Customer-driven priorities), each with colored bars and issue counts.

### 8. FeatureBuild — "Move work forward across teams and agents"
Two-panel mockup with an **agent terminal** showing automated test runs and PR creation, plus an **assignee dropdown** that lists both humans and AI agents (Codex, GitHub Copilot, Cursor) as assignable entities.

### 9. FeatureReview — "Review PRs and agent output"
**Side-by-side code diff viewer** showing Swift async/await migration with line numbers and diff stats (+12/-4).

### 10. FeatureMonitor — "Understand progress at scale"
Two-panel analytics view:
- **Pulse** — Weekly project status with progress bars (UI Refresh, Tokyo Launch, Agent SDK v2) and risk indicators
- **Cycle Time Scatter Plot** — Complexity vs Time chart distinguishing Agents vs Humans

### 11. Changelog
Four-column card grid of recent product releases with colored dot indicators and dates:
- Agent-assisted project updates
- Coding sessions in Linear
- Team documents
- Linear Diffs

### 12. Testimonials
Two testimonial cards from real product leaders:
- **Gabriel Puel** — Staff Software Engineer, OpenAI
- **Nik Kulev** — Head of Engineering, Ramp

### 13. SocialProof
"Linear powers over 33,000 product teams" with a link to customer stories.

### 14. CTA
Large centered call-to-action with two buttons: **Get started** (filled) and **Contact sales** (outlined ghost).

### 15. Footer
Dark footer with Linear logo, 5-column link grid covering Product, Features, Company, Resources, and Connect sections, plus Privacy/Terms/DPA/AUP links.

---

## Design System

The site uses a custom dark theme defined entirely in CSS via Tailwind v4's `@theme` directive:

| Token | Value | Usage |
|---|---|---|
| `linear-bg` | `#08090a` | Page background |
| `linear-surface` | `#121316` | Card / surface backgrounds |
| `linear-surface-hover` | `#1a1b1e` | Card hover state |
| `linear-border` | `rgba(255,255,255,0.06)` | Subtle borders |
| `linear-text` | `#f5f5f7` | Primary text |
| `linear-text-secondary` | `#8a8f98` | Secondary text |
| `linear-accent` | `#5e6ad2` | Blue-purple accent |
| `linear-yellow` | `#f5e642` | Yellow accent |

### Custom Animations
- **`float`** — gentle vertical bobbing
- **`glow-pulse`** — opacity pulsing
- **`fade-in-up`** — fade + slide up 16px

---

## Features Demonstrated

- AI-native product development workflows
- Issue tracking with statuses, priorities, and labels
- Slack / chat integration with automated triage
- Kanban sprint board
- Roadmap / Gantt chart planning
- Agent terminal and AI-assignee integration
- Inline code diff review
- Project analytics and cycle time monitoring
- Release changelog
- Social proof with customer testimonials
- Responsive navigation with mobile menu

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Notes

- All mockup data is **hardcoded inline** in the components — no data fetching or backend required.
- Only the `Navbar` is a client component (`"use client"`); all others are React Server Components.
- Uses Tailwind CSS v4's CSS-based configuration (`@theme`) instead of a JavaScript config file.
- The `Inter` font family is loaded via `next/font/google` with weights 400, 500, 600, 700.
