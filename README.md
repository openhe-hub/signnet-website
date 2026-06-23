# SignNet-1M — Project Website

Project page for **SignNet-1M: Large-Scale Multilingual Sign Language Video Dataset
with Downstream Benchmarks** (ECCV 2026). Built with **Vue 3 + Vite**, a single-page
scrolling site with a modern dark-gradient design.

## Develop

```bash
cd web-app/frontend
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

`vite.config.js` sets `base: './'`, so the built `dist/` works from any subpath
(e.g. GitHub Pages project sites).

## Structure

- `src/data/content.js` — **single source of truth** for all text, stats, and the
  verbatim experiment tables. Edit content here, not in the components.
- `src/components/` — one component per page section, plus reusable `StatCard`,
  `ResultTable`.
- `src/composables/useReveal.js` — IntersectionObserver scroll-reveal directive
  (`v-reveal`), respects `prefers-reduced-motion`.
- `public/assets/` — figures (copied from the paper `figures/`) and `demo.mp4`
  (extracted from the supplementary zip).

## Pending before publishing

The following links are intentionally pending in `src/data/content.js`:

- [ ] **Links** (`links` object): `arxiv`, `huggingface`.
- [ ] **BibTeX** (`bibtex`) — update any final venue details.

Demo video and all figures are already wired up.
