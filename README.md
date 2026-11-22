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
projects/01-scenecraft/        UI 01 — SceneCraft, AI film pre-production studio (built React app)
projects/02-pocket-universe/   UI 02 — Pocket Universe (built React + Three.js app)
projects/03-impossible-path/   UI 03 — The Impossible Path, optical-illusion puzzle game (built React + Three.js)
projects/04-mindspace/         UI 04 — Mindspace (built React app, unchanged build output)
projects/05-krishi-dharohar/   UI 05 — Krishi Dharohar kiosk, unchanged
```

## Adding or replacing a UI
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
`ui-sc-dawn-day.jpg` / `ui-sc-city-night.jpg` (SceneCraft), `ui03-world-day.jpg` / `ui03-world-night.jpg` (Pocket Universe), `ui-ip-day.jpg` / `ui-ip-night.jpg` (The Impossible Path), `ui01-space-day.jpg` / `ui01-space-night.jpg` (Mindspace) and `ui02-field-day.jpg` / `ui02-field-night.jpg` (Krishi Dharohar), all in `assets/bg/` (plus `-sm` versions for
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


## Cloud save (Pocket Universe + The Impossible Path)
Both games can keep their progress in one free Supabase account, so it follows the player to any device.
1. Create a free project at https://supabase.com.
2. SQL Editor → New query → paste everything from `cloud-setup.sql` → Run.
3. Project Settings → API: copy the Project URL and the anon / publishable key into `cloud-config.js`
   (the one at the top of this folder — both games read it).
4. Optional: Authentication → Sign In / Providers → Email → turn off "Confirm email" so players can sign in straight away.
Leave `cloud-config.js` empty and the games work exactly as before, saving in the browser only.

### Mobile-number sign-in (optional)
Players can also sign in with a one-time code sent by SMS. It needs an SMS provider (Twilio, Vonage, MessageBird or
TextLocal — each text is billed by that provider):
1. Supabase → Authentication → Sign In / Providers → Phone → turn on, choose the provider and paste its keys.
2. In `cloud-config.js` set `phone: true` (and `country`, default "91", for numbers typed without a +code).
A mobile account and an email account are separate accounts — each player should stick to one.
