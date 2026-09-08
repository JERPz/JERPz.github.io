# JERPz — Portfolio

Personal portfolio for Jeeraphol Khangraeng, styled as an 8-bit game interface:
an arcade HUD, level headers, a stage-select project grid and pixel-art sprites
drawn from text grids.

Static site, no build step, no framework. Deployed with GitHub Pages.

## Structure

```
index.html              single page, semantic sections (#about, #skills, #projects, #tools, #blog, #contact)
styles/
  base.css              design tokens, reset, typography, CRT + starfield canvas
  layout.css            container, HUD, section shells, grids, footer frame
  components.css        .pbox pixel panel, title bars, buttons, chips, marquee, reveal
  sections.css          hero, dialogue box, inventory slots, stage select, quests, contact
  responsive.css        breakpoints, reduced motion, contrast, print
script/
  main.js               entry point (ES module); boots each feature in isolation
  modules/
    sprites.js          pixel art defined as character grids + palettes
    pixel-art.js        renders those grids to inline SVG (<rect> per pixel run)
    scroll.js           one shared passive scroll listener, batched per frame
    reveal.js           IntersectionObserver reveal-on-scroll
    hud.js              scroll progress, arcade score, active level in nav
    nav.js              mobile nav panel
    shelf.js            bookshelf note panel follows the hovered/focused spine
    parallax.js         starfield drift
    konami.js           ↑ ↑ ↓ ↓ ← → ← → B A cheat mode
asset/                  portrait, CV, transcript, project cover GIFs
```

## Design notes

- **Pixel panels.** `.pbox` fakes notched 8-bit corners with four offset
  `box-shadow`s plus a hard drop shadow and inner bevel. No `border-radius`
  anywhere, so nothing is anti-aliased.
- **Type.** `Press Start 2P` for UI chrome and headings, `VT323` for body copy
  (readable at length, still period-correct).
- **Sprites.** Editing art means editing text in `sprites.js` — no image files.
  Adjacent same-colour pixels merge into one `<rect>`.
- **Bookcase (`#tools`).** The carcass is a `.pbox` with a wood `--pbox-bg`;
  each shelf is a dark back wall plus a `.bookcase__plank`, all gradients, no
  images. Every tool is a `.book` whose *spine* is the link:
  `writing-mode: vertical-rl` for the title, size set per book via `--book-h` /
  `--book-w`, face and band colour via `--book-face` / `--book-band`.
  Hover/focus lifts the book and pops an "Open" tag; the label plate under the
  carcass names whichever spine you are on. `.book--locked` is an empty slot
  (`aria-hidden`, not focusable) and `.bookstack__flat` is a book lying flat.
  A shelf scrolls sideways when its books no longer fit.
- **Motion.** Every animation is stepped (`steps(n, end)`) rather than eased, and
  the whole thing goes still under `prefers-reduced-motion: reduce`.

## Local preview

The scripts are ES modules, so `file://` will not work. Serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
