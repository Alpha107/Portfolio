# Abashesh Ranabhat — Portfolio

Personal portfolio built with React 19 + Vite + React Router. Showcases street photography, watercolor paintings, and robotics projects.

**Live site:** https://www.abasheshranabhat.com.np/

---

## Stack

- **React 19** + **React Router 7**
- **Vite 8** (build tool & dev server)
- **CSS Grid / Flexbox** — no component library
- **Google Fonts** — Figtree, Space Mono

---

## Running locally (Fedora Linux — NTFS mount)

The project source lives on an NTFS volume (`/mnt/windows/...`). NTFS blocks the directory operations `npm install` needs, so `node_modules` is installed on the Linux filesystem instead. A mirror directory on Linux symlinks back to the NTFS source files so Vite sees a normal project.

**First time and every run after:**

```bash
bash dev.sh
```

That's it. On first run the script installs dependencies to `~/.portfolio-nm/node_modules` and sets up the mirror at `~/portfolio-dev`. On subsequent runs it just launches Vite.

Dev server: `http://localhost:5173`

### Build

```bash
cd ~/portfolio-dev && node_modules/.bin/vite build --outDir /mnt/windows/Project/PortfolioUpdated/dist
```

### Preview production build

```bash
cd ~/portfolio-dev && node_modules/.bin/vite preview
```

### After adding a new npm dependency

```bash
cp package.json ~/.portfolio-nm/
cd ~/.portfolio-nm && npm install
cp vite.config.js ~/portfolio-dev/
cp package.json ~/portfolio-dev/
```

---

## Project structure

```
src/
├── components/
│   └── Navigation.jsx       # Fixed nav + mobile hamburger
├── pages/
│   ├── Home.jsx             # Single-page portfolio (all sections)
│   ├── Photography.jsx      # Photo gallery with lightbox + filter
│   ├── Painting.jsx         # Painting gallery with lightbox
│   ├── Robotics.jsx         # Robotics projects
│   ├── Experience.jsx       # Work experience timeline
│   └── Education.jsx        # Education timeline
├── data/
│   ├── photos.js            # Photography data
│   ├── paintings.js         # Painting data
│   ├── experience.js        # Work experience entries
│   ├── education.js         # Education entries
│   └── skills.js            # Skills by category
└── styles/
    ├── global.css           # Design tokens + global resets
    ├── home.css
    ├── navigation.css
    ├── photography.css
    ├── painting.css
    └── robotics.css

public/
├── images/
│   ├── photography/         # 30 selected MarkII photos
│   └── paintings/           # Watercolor scans
├── favicon.svg
└── icons.svg
```

---

## Design tokens (global.css)

| Token | Value |
|-------|-------|
| `--bg` | `#f8f7f4` (cream) |
| `--accent` | `#1a472a` (dark green) |
| `--ink` | `#0f0e0c` (near black) |
| Font (headings + body) | Figtree |
| Font (code) | Space Mono |

---

## Deployment

Build output goes to `dist/`. Deploy to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
