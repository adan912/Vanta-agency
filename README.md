# VANTA Studio — Premium Digital Agency Website

A world-class, modern, high-contrast digital agency portfolio website engineered for **VANTA Studio** (founded by **Anas Ali** & **Adan Faisal**).

Inspired by the creative agency aesthetic of [KOTA](https://kota.co.uk/), featuring oversized editorial typography, sleek dark obsidian surfaces, electric acid lime accents, asymmetrical portfolio grids, interactive service inspectors, and an interactive project inquiry workflow.

---

## 🚀 Quick Start

The development server is running locally:

```bash
# In C:\Users\f\.gemini\antigravity\scratch\vanta-agency
pnpm run dev -- --host --port 5173
```
Visit: **[http://localhost:5173/](http://localhost:5173/)**

To create an optimized production build:
```bash
pnpm run build
pnpm run preview
```

---

## 🎨 Visual & Technical Highlights

- **KOTA-Inspired Aesthetic**:
  - **Oversized Editorial Typography**: Google Fonts `Syne` for high-fashion display headers, `Plus Jakarta Sans` for clean reading, and `JetBrains Mono` for tech indices and metadata.
  - **Distinctive Color Harmony**: Deep Obsidian (`#08090D`, `#0F1118`), hairline graphite borders (`#1E2333`), and Electric Acid Lime (`#D4F728`) with Cyber Cyan (`#00F0FF`).
  - **Micro-Interactions**: Ambient noise texture, radar status indicators, infinite marquee ticker, smooth modal triggers, and confetti celebration on inquiry.
- **Service Spectrum (6 Core + AI Multiplier)**:
  - 01. Web Development
  - 02. Software & App Development
  - 03. Data Analytics & Visualization
  - 04. SEO & Digital Growth
  - 05. Cloud & DevOps
  - 06. WordPress & CMS Development
  - **Cross-Service Multiplier**: AI Automation & Intelligent Workflows (custom glowing card).
- **Evidence-Based Portfolio**:
  - Demonstration case studies: *LogLens AI*, *TaskFlow*, *ResponseBurst*, *Haji Latif MN*, and *Fantasy Arena*.
  - Full modal case study viewer with Challenge, Solution, Architecture, Deliverables, and founder-level contributions.
  - Ready-to-link GitHub Repository and Live Demo slots.
- **Founders & Ethos**:
  - Anas Ali (Systems, Web, Cloud & DevOps)
  - Adan Faisal (AI Architecture, Software Systems)
- **Six-Stage Process & Working Principles**:
  - 01 Discover → 02 Strategize → 03 Design → 04 Develop → 05 Launch → 06 Improve.
- **Interactive Project Inquiry**:
  - Service pill multi-select, budget tiers, timeline selection, client-side validation, and confetti trigger.

---

## ⚙️ Centralized Configuration (`src/config/agencyData.ts`)

All placeholders and dynamic details are centralized in one file:

```typescript
// src/config/agencyData.ts
export const AGENCY_CONFIG = {
  name: "VANTA Studio",
  tagline: "",   // [YOUR AGENCY TAGLINE] — ready for your copy
  email: "",     // [YOUR AGENCY EMAIL]
  whatsapp: "",  // [YOUR WHATSAPP NUMBER]
  location: "",  // [YOUR AGENCY LOCATION]
  socials: {
    twitter: "",
    linkedin: "",
    github: "",
    instagram: "",
  },
  // ...
};
```

When you are ready to link your GitHub repositories, simply add the URLs to `githubUrl` inside `PROJECTS` in `src/config/agencyData.ts`.
