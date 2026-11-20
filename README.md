# Folio — five interactive experiences

A portfolio cover in the style of the reference (floating nav, glass showcase panel,
editorial strip) that swipes between five UI projects and opens each one as the full,
working interface.

## Put it online (Netlify)
Drag this whole folder onto https://app.netlify.com/drop. Keep the folder structure as it is.

## Folder layout
```
index.html          the portfolio (cover, swipe, Enter Experience, in-experience controls)
projects.js         ← the only file you edit: names, text, previews, links for all 5 projects
assets/bg/          background images per project
assets/previews/    screenshots used on the cover
projects/01-mindspace/         UI 01 — Mindspace (built React app, unchanged build output)
projects/02-krishi-dharohar/   UI 02 — Krishi Dharohar kiosk, unchanged
projects/03-pocket-universe/   UI 03 — Pocket Universe (built React + Three.js app)
```

## Adding UI 04–05
1. Copy the project's built files into `projects/03-your-name/` (it needs an `index.html`).
2. Take screenshots of 2–6 of its screens and put them in `assets/previews/`.
3. In `projects.js`, fill in that project's entry using project 01 as the example:
   `title`, `category`, `details`, `meta1/meta2`, `url`, `background`, `deviceSize`
   (the native size of one screen, e.g. `[1440, 900]`) and a `slides` list — one entry per
   screen with its `name`, screenshot `img`, a cropped `detail` image, an optional live `src`
   page and an optional background `tint`. Then delete the line `placeholder: true`.
   A wider-than-tall `deviceSize` turns the preview device sideways automatically, and
   `hud: "right"` moves the in-experience controls to the bottom-right (as Mindspace does).

The cover, swipe order, counter and Enter Experience pick it up automatically.

## Day / Night backgrounds
The ☀/☾ switch in the top bar (or the D key) changes only the background between a day and a
night version; the visitor's choice is remembered. Set the starting mode with `defaultMode`
in `projects.js`. Each background has a `day` and a `night` image:
`assets/bg/ui01-space-day.jpg` / `ui01-space-night.jpg` (Mindspace), `assets/bg/ui02-field-day.jpg` / `ui02-field-night.jpg` (Krishi Dharohar) and `assets/bg/ui03-world-day.jpg` / `ui03-world-night.jpg` (Pocket Universe) (plus `-sm` versions for
phones). To use real photographs, replace these files with licensed photos (about 2400 × 1500 px)
and keep the same names. Projects with only one image get an automatic night version.

## Controls
- Intro cover → projects: scroll down, swipe up, ↓ key, "Begin", or click a card in the deck.
- Inside a project: swipe / drag sideways (or ← →, trackpad swipe) to slide through that UI's
  screens — the progress line auto-plays them; the background tint changes per screen.
  Sliding past the last screen continues into the next project.
- Scroll / swipe vertically (or ↑ ↓, the rail on the right) to move between projects.
- Enter: "Enter experience" buttons or the Enter key — opens the working UI on the screen you were viewing.
- Inside a project: the bar at the bottom left (Portfolio · ‹ 01 / 05 › · collapse),
  drag in from the left or right screen edge, Esc to return, Alt + ← / → to switch projects.
- Links: `#intro`, `#project-03`, `#project-01-screen-4`, `#experience-01`.
