/* ==========================================================================
   PORTFOLIO SETTINGS — the only file you edit to add or change projects.

   Adding a finished UI (03–05):
     1. Put its built files in  projects/<folder>/  (with an index.html).
     2. Take screenshots of 2–6 of its screens and put them in assets/previews/.
     3. Fill in its entry below: title, category, details, url, background and a
        "slides" list (one entry per screen). Delete the line  placeholder: true.
   The cover, swipe order, scroll order, counters and Enter Experience update by themselves.
   ========================================================================== */

window.PORTFOLIO = {
  brand: "Folio",                       // logo text (the © is added automatically)
  owner: "Your Name",                   // About sheet + intro cover
  role: "UI / UX & Interaction Design",
  about:
    "Replace this with a short introduction — who you are, what you design and the kind of work you are looking for. Edit it in projects.js.",
  contact: "you@example.com",

  defaultMode: "day",                  // "day" or "night" — visitors can switch; their choice is remembered

  // The intro cover (shown before project 01)
  intro: {
    titleLines: ["Five", "interactive", "experiences"],
    kicker: "Selected work",
    year: "2026",
    // Day / Night versions of the backdrop (the switch in the top bar changes only the background)
    background: {
      day: { image: "assets/bg/ui02-field-day.jpg", imageSmall: "assets/bg/ui02-field-day-sm.jpg" },
      night: { image: "assets/bg/ui02-field-night.jpg", imageSmall: "assets/bg/ui02-field-night-sm.jpg" },
      position: "50% 58%",
    },
  },

  projects: [
    {
      id: "01",
      slug: "mindspace",
      title: "Mindspace",
      native: "Visualise. Organise. Think deeper.",
      category: "Spatial productivity app",
      year: "2026",
      description:
        "A futuristic mind-mapping workspace. Ideas, goals, projects and tasks float as connected nodes on an infinite canvas you can drag, link, group and focus.",
      details: ["Spatial mind-mapping", "Web application", "Desktop 1440 × 900", "", "Built with", "React · TypeScript"],
      details2: ["Interactions", "Drag · Connect · Focus", "", "Data", "Autosaved in browser"],
      meta1: ["Productivity app", "Infinite canvas", "2026"],
      meta2: ["React · Framer Motion", "1440 × 900", "6 screens"],
      url: "projects/01-mindspace/index.html",
      deviceRatio: 1440 / 900,
      deviceSize: [1440, 900],            // landscape — the preview device turns sideways automatically
      hud: "right",                       // keep the portfolio controls clear of the app's own sidebar
      background: {
        day: { image: "assets/bg/ui01-space-day.jpg", imageSmall: "assets/bg/ui01-space-day-sm.jpg" },
        night: { image: "assets/bg/ui01-space-night.jpg", imageSmall: "assets/bg/ui01-space-night-sm.jpg" },
        position: "62% 50%",
      },
      accent: "#a855f7",
      slides: [
        { name: "Spatial canvas", short: "Canvas", native: "A living universe of ideas", src: "projects/01-mindspace/index.html", img: "assets/previews/ui01-canvas.jpg", detail: "assets/previews/ui01-canvas-detail.jpg", tint: "none" },
        { name: "Connect thoughts", short: "Connect", native: "Related · Depends · Leads to", img: "assets/previews/ui01-connect.jpg", detail: "assets/previews/ui01-connect-detail.jpg", tint: "hue-rotate(-18deg) saturate(1.1)" },
        { name: "Expanded card", short: "Expand", native: "Every idea has a story", img: "assets/previews/ui01-expand.jpg", detail: "assets/previews/ui01-expand-detail.jpg", tint: "hue-rotate(22deg) saturate(1.05)" },
        { name: "Thoughts into tasks", short: "Tasks", native: "From idea to action", img: "assets/previews/ui01-task.jpg", detail: "assets/previews/ui01-task-detail.jpg", tint: "hue-rotate(-60deg) saturate(1.15) brightness(1.03)" },
        { name: "Search & discovery", short: "Search", native: "Find anything, instantly", img: "assets/previews/ui01-search.jpg", detail: "assets/previews/ui01-search-detail.jpg", tint: "hue-rotate(-35deg) saturate(1.1)" },
        { name: "Focus mode", short: "Focus", native: "Think about one thing", img: "assets/previews/ui01-focus.jpg", detail: "assets/previews/ui01-focus-detail.jpg", tint: "saturate(.85) brightness(.9)" },
      ],
    },

    {
      id: "02",
      slug: "krishi-dharohar",
      title: "Krishi Dharohar",
      native: "भारत की कृषि धरोहर",
      category: "Museum kiosk",
      year: "2026",
      description:
        "A portrait museum kiosk on India's agricultural heritage. Visitors place an RFID crop card on the scanner and the screen opens that crop.",
      details: ["Museum kiosk", "Agricultural heritage of India", "Portrait 1080 × 1920", "", "Input", "RFID crop cards"],
      details2: ["Languages", "Hindi · English", "", "Idle reset", "45 seconds"],
      meta1: ["Interactive exhibit", "RFID kiosk", "2026"],
      meta2: ["Hindi · English", "1080 × 1920", "6 screens"],
      url: "projects/02-krishi-dharohar/index.html",
      deviceRatio: 1080 / 1920,
      deviceSize: [1080, 1920],           // native size of one screen, for the live preview
      // Day / Night versions of this project's background
      background: {
        day: { image: "assets/bg/ui02-field-day.jpg", imageSmall: "assets/bg/ui02-field-day-sm.jpg" },
        night: { image: "assets/bg/ui02-field-night.jpg", imageSmall: "assets/bg/ui02-field-night-sm.jpg" },
        position: "50% 62%",
      },
      accent: "#c8892e",
      // One entry per screen. "src" plays live inside the bubble; "img" is the fallback / card image.
      // "tint" shifts the background colour for that screen (any CSS filter).
      slides: [
        { name: "Attract screen", short: "Home", src: "projects/02-krishi-dharohar/screens/home.html", img: "assets/previews/ui02-home.jpg", detail: "assets/previews/ui02-home-detail.jpg", tint: "none" },
        { name: "Rice", native: "चावल", short: "Rice", src: "projects/02-krishi-dharohar/screens/rice.html", img: "assets/previews/ui02-rice.jpg", detail: "assets/previews/ui02-rice-detail.jpg", tint: "hue-rotate(24deg) saturate(1.08) brightness(1.02)" },
        { name: "Wheat", native: "गेहूँ", short: "Wheat", src: "projects/02-krishi-dharohar/screens/wheat.html", img: "assets/previews/ui02-wheat.jpg", detail: "assets/previews/ui02-wheat-detail.jpg", tint: "saturate(1.25) brightness(1.06)" },
        { name: "Pulses", native: "दालें", short: "Pulses", src: "projects/02-krishi-dharohar/screens/pulses.html", img: "assets/previews/ui02-pulses.jpg", detail: "assets/previews/ui02-pulses-detail.jpg", tint: "sepia(.3) hue-rotate(-10deg) brightness(.92)" },
        { name: "Oilseeds", native: "तिलहन", short: "Oilseeds", src: "projects/02-krishi-dharohar/screens/oilseeds.html", img: "assets/previews/ui02-oilseeds.jpg", detail: "assets/previews/ui02-oilseeds-detail.jpg", tint: "saturate(1.6) hue-rotate(6deg) brightness(1.08)" },
        { name: "Sugarcane", native: "गन्ना", short: "Sugarcane", src: "projects/02-krishi-dharohar/screens/sugarcane.html", img: "assets/previews/ui02-sugarcane.jpg", detail: "assets/previews/ui02-sugarcane-detail.jpg", tint: "hue-rotate(48deg) saturate(1.12) brightness(.97)" },
      ],
    },

    /* ---- Placeholders: replace when the files for these UIs are added ---- */
    { id: "03", slug: "project-03", placeholder: true, title: "Project 03", category: "Awaiting files", background: { colors: ["#625b53", "#2c2925"] }, accent: "#a89f94" },
    { id: "04", slug: "project-04", placeholder: true, title: "Project 04", category: "Awaiting files", background: { colors: ["#56605d", "#272c2b"] }, accent: "#98a39f" },
    { id: "05", slug: "project-05", placeholder: true, title: "Project 05", category: "Awaiting files", background: { colors: ["#5c5763", "#29272d"] }, accent: "#a29dab" },
  ],
};
