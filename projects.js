/* ==========================================================================
   PORTFOLIO SETTINGS — the only file you edit to add or change projects.

   Adding or changing a UI:
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
      slug: "scenecraft",
      title: "SceneCraft",
      native: "Perfect every frame before you generate.",
      category: "AI film pre-production studio",
      year: "2026",
      description:
        "An AI film pre-production studio. Describe an idea and it writes the scenes and dialogue, plans every shot with locked characters, places and look, makes storyboard frames, and hands over ready-to-paste prompts for Higgsfield or Sora one shot at a time.",
      details: ["AI film pre-production", "Web application", "Desktop 1440 × 900", "", "Built with", "React · TypeScript"],
      details2: ["Interactions", "Write · Storyboard · Prompt", "", "Data", "Autosaved in browser"],
      meta1: ["Creative AI tool", "Story to shot list", "2026"],
      meta2: ["React · Tailwind", "1440 × 900", "6 screens"],
      url: "projects/01-scenecraft/index.html",
      deviceRatio: 1440 / 900,
      deviceSize: [1440, 900],            // landscape — the preview device turns sideways automatically
      hud: "right",                       // keep the portfolio controls clear of the app's own sidebar
      background: {
        day: { image: "assets/bg/ui-sc-dawn-day.jpg", imageSmall: "assets/bg/ui-sc-dawn-day-sm.jpg" },
        night: { image: "assets/bg/ui-sc-city-night.jpg", imageSmall: "assets/bg/ui-sc-city-night-sm.jpg" },
        position: "40% 50%",
      },
      accent: "#e8a86b",
      slides: [
        { name: "Welcome", short: "Welcome", native: "Your next film begins before the first frame", src: "projects/01-scenecraft/index.html", img: "assets/previews/ui-sc-welcome.jpg", detail: "assets/previews/ui-sc-welcome-detail.jpg", tint: "none" },
        { name: "Storyboard", short: "Storyboard", native: "Every shot of Midnight Echo", img: "assets/previews/ui-sc-storyboard.jpg", detail: "assets/previews/ui-sc-storyboard-detail.jpg", tint: "hue-rotate(-12deg) saturate(1.08)" },
        { name: "Script", short: "Script", native: "Scenes, shots and dialogue, written for you", img: "assets/previews/ui-sc-script.jpg", detail: "assets/previews/ui-sc-script-detail.jpg", tint: "brightness(.94)" },
        { name: "Character lock", short: "Characters", native: "Same face, same coat, every shot", img: "assets/previews/ui-sc-characters.jpg", detail: "assets/previews/ui-sc-characters-detail.jpg", tint: "hue-rotate(14deg) saturate(1.05)" },
        { name: "Prompts & continuity", short: "Prompts", native: "Catches what drifts between shots", img: "assets/previews/ui-sc-prompts.jpg", detail: "assets/previews/ui-sc-prompts-detail.jpg", tint: "hue-rotate(-28deg) saturate(1.1)" },
        { name: "Generate", short: "Generate", native: "Make it, one shot at a time", img: "assets/previews/ui-sc-generate.jpg", detail: "assets/previews/ui-sc-generate-detail.jpg", tint: "saturate(1.12) brightness(1.03)" },
      ],
    },

    {
      id: "02",
      slug: "pocket-universe",
      title: "Pocket Universe",
      native: "A whole world, made by you.",
      category: "3D world builder",
      year: "2026",
      description:
        "A cosy 3D world-building app. Pick a floating island, then shape the land, plant forests, build cottages and change the sky. Every universe saves itself and can be exported.",
      details: ["3D world builder", "Web application", "Desktop 1440 × 900", "", "Built with", "React · Three.js"],
      details2: ["Interactions", "Place · Sculpt · Paint", "", "Data", "Autosaved in browser"],
      meta1: ["Creative tool", "10 floating worlds", "2026"],
      meta2: ["React · Three.js", "1440 × 900", "6 screens"],
      url: "projects/02-pocket-universe/index.html",
      deviceRatio: 1440 / 900,
      deviceSize: [1440, 900],            // landscape — the preview device turns sideways automatically
      background: {
        day: { image: "assets/bg/ui03-world-day.jpg", imageSmall: "assets/bg/ui03-world-day-sm.jpg" },
        night: { image: "assets/bg/ui03-world-night.jpg", imageSmall: "assets/bg/ui03-world-night-sm.jpg" },
        position: "64% 50%",
      },
      accent: "#e7a3cf",
      // a 3D app: the bubbles show screenshots, and "Enter experience" opens the real, running app
      slides: [
        { name: "Welcome", short: "Welcome", native: "Somewhere in the universe", img: "assets/previews/ui03-welcome.jpg", detail: "assets/previews/ui03-welcome-detail.jpg", tint: "saturate(.9) brightness(.94)" },
        { name: "My Universes", short: "Universes", native: "Ten worlds, months in the making", img: "assets/previews/ui03-universes.jpg", detail: "assets/previews/ui03-universes-detail.jpg", tint: "none" },
        { name: "Choose your world", short: "Create", native: "Six biomes to start from", img: "assets/previews/ui03-create.jpg", detail: "assets/previews/ui03-create-detail.jpg", tint: "saturate(1.08) brightness(1.03)" },
        { name: "Moonberry Valley", short: "Build", native: "Plant, build and shape the land", img: "assets/previews/ui03-moonberry.jpg", detail: "assets/previews/ui03-moonberry-detail.jpg", tint: "hue-rotate(-22deg) saturate(1.12)" },
        { name: "Frostfall Hollow", short: "Weather", native: "Night, snow and lantern light", img: "assets/previews/ui03-frostfall.jpg", detail: "assets/previews/ui03-frostfall-detail.jpg", tint: "hue-rotate(18deg) brightness(.9)" },
        { name: "Cinematic mode", short: "Cinematic", native: "Your world, on the big screen", img: "assets/previews/ui03-lantern.jpg", detail: "assets/previews/ui03-lantern-detail.jpg", tint: "brightness(.86) saturate(.92)" },
      ],
    },

    {
      id: "03",
      slug: "the-impossible-path",
      title: "The Impossible Path",
      shortTitle: "Impossible Path",    // shorter name for the bottom strip and "Next project"
      native: "An endless universe of impossible architecture.",
      category: "Optical-illusion puzzle game",
      year: "2026",
      description:
        "An isometric puzzle game of impossible architecture. Turn whole towers, slide bridges and rotate the world itself until paths that cannot exist line up, and guide a lantern-carrying traveller across 50 levels in five worlds.",
      details: ["Optical-illusion puzzle", "Browser game", "Desktop 1440 × 900", "", "Built with", "React · Three.js"],
      details2: ["Interactions", "Rotate · Slide · Turn the world", "", "Progress", "50 levels · 5 worlds"],
      meta1: ["Puzzle game", "50 levels", "2026"],
      meta2: ["React · Three.js", "1440 × 900", "6 screens"],
      url: "projects/03-impossible-path/index.html",
      deviceRatio: 1440 / 900,
      deviceSize: [1440, 900],            // landscape — the preview device turns sideways automatically
      background: {
        day: { image: "assets/bg/ui-ip-day.jpg", imageSmall: "assets/bg/ui-ip-day-sm.jpg" },
        night: { image: "assets/bg/ui-ip-night.jpg", imageSmall: "assets/bg/ui-ip-night-sm.jpg" },
        position: "55% 50%",
      },
      accent: "#d9826a",
      // a 3D game: the bubbles show screenshots, and "Enter experience" opens the real, playable game
      slides: [
        { name: "Title", short: "Title", native: "An architectural puzzle", img: "assets/previews/ui-ip-title.jpg", detail: "assets/previews/ui-ip-title-detail.jpg", tint: "none" },
        { name: "Chapters", short: "Chapters", native: "Five worlds, fifty levels", img: "assets/previews/ui-ip-chapters.jpg", detail: "assets/previews/ui-ip-chapters-detail.jpg", tint: "saturate(.95)" },
        { name: "The First Bridge", short: "Level 1", native: "Turn the world until the path appears", img: "assets/previews/ui-ip-first-bridge.jpg", detail: "assets/previews/ui-ip-first-bridge-detail.jpg", tint: "hue-rotate(-10deg) saturate(1.05)" },
        { name: "The Floating Gardens", short: "Gardens", native: "Bridges that slide into place", img: "assets/previews/ui-ip-garden.jpg", detail: "assets/previews/ui-ip-garden-detail.jpg", tint: "hue-rotate(40deg) saturate(1.08)" },
        { name: "The Forgotten Towers", short: "Towers", native: "Whole towers turn on their wheels", img: "assets/previews/ui-ip-towers.jpg", detail: "assets/previews/ui-ip-towers-detail.jpg", tint: "hue-rotate(-30deg) saturate(1.12)" },
        { name: "The Infinite", short: "Infinite", native: "The fiftieth path", img: "assets/previews/ui-ip-infinite.jpg", detail: "assets/previews/ui-ip-infinite-detail.jpg", tint: "hue-rotate(28deg) brightness(.92)" },
      ],
    },

    {
      id: "04",
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
      url: "projects/04-mindspace/index.html",
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
        { name: "Spatial canvas", short: "Canvas", native: "A living universe of ideas", src: "projects/04-mindspace/index.html", img: "assets/previews/ui01-canvas.jpg", detail: "assets/previews/ui01-canvas-detail.jpg", tint: "none" },
        { name: "Connect thoughts", short: "Connect", native: "Related · Depends · Leads to", img: "assets/previews/ui01-connect.jpg", detail: "assets/previews/ui01-connect-detail.jpg", tint: "hue-rotate(-18deg) saturate(1.1)" },
        { name: "Expanded card", short: "Expand", native: "Every idea has a story", img: "assets/previews/ui01-expand.jpg", detail: "assets/previews/ui01-expand-detail.jpg", tint: "hue-rotate(22deg) saturate(1.05)" },
        { name: "Thoughts into tasks", short: "Tasks", native: "From idea to action", img: "assets/previews/ui01-task.jpg", detail: "assets/previews/ui01-task-detail.jpg", tint: "hue-rotate(-60deg) saturate(1.15) brightness(1.03)" },
        { name: "Search & discovery", short: "Search", native: "Find anything, instantly", img: "assets/previews/ui01-search.jpg", detail: "assets/previews/ui01-search-detail.jpg", tint: "hue-rotate(-35deg) saturate(1.1)" },
        { name: "Focus mode", short: "Focus", native: "Think about one thing", img: "assets/previews/ui01-focus.jpg", detail: "assets/previews/ui01-focus-detail.jpg", tint: "saturate(.85) brightness(.9)" },
      ],
    },

    {
      id: "05",
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
      url: "projects/05-krishi-dharohar/index.html",
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
        { name: "Attract screen", short: "Home", src: "projects/05-krishi-dharohar/screens/home.html", img: "assets/previews/ui02-home.jpg", detail: "assets/previews/ui02-home-detail.jpg", tint: "none" },
        { name: "Rice", native: "चावल", short: "Rice", src: "projects/05-krishi-dharohar/screens/rice.html", img: "assets/previews/ui02-rice.jpg", detail: "assets/previews/ui02-rice-detail.jpg", tint: "hue-rotate(24deg) saturate(1.08) brightness(1.02)" },
        { name: "Wheat", native: "गेहूँ", short: "Wheat", src: "projects/05-krishi-dharohar/screens/wheat.html", img: "assets/previews/ui02-wheat.jpg", detail: "assets/previews/ui02-wheat-detail.jpg", tint: "saturate(1.25) brightness(1.06)" },
        { name: "Pulses", native: "दालें", short: "Pulses", src: "projects/05-krishi-dharohar/screens/pulses.html", img: "assets/previews/ui02-pulses.jpg", detail: "assets/previews/ui02-pulses-detail.jpg", tint: "sepia(.3) hue-rotate(-10deg) brightness(.92)" },
        { name: "Oilseeds", native: "तिलहन", short: "Oilseeds", src: "projects/05-krishi-dharohar/screens/oilseeds.html", img: "assets/previews/ui02-oilseeds.jpg", detail: "assets/previews/ui02-oilseeds-detail.jpg", tint: "saturate(1.6) hue-rotate(6deg) brightness(1.08)" },
        { name: "Sugarcane", native: "गन्ना", short: "Sugarcane", src: "projects/05-krishi-dharohar/screens/sugarcane.html", img: "assets/previews/ui02-sugarcane.jpg", detail: "assets/previews/ui02-sugarcane-detail.jpg", tint: "hue-rotate(48deg) saturate(1.12) brightness(.97)" },
      ],
    },
  ],
};
