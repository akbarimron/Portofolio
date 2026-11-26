// Penimpa Inggris untuk data/projects.js dan data/research.js (kunci = id).
// Array (highlights, shots, links) digabung per indeks, jadi gambar dan URL tidak perlu diulang.
import { R } from '../merge'

const web = { Frontend: ['React.js', 'HTML', 'CSS', 'JavaScript'], 'Backend and data': ['REST API', 'PostgreSQL'], Infrastructure: ['Docker', 'Git & GitHub'] }

export const projects = {
  dppm: {
    text: 'Official website of UPI’s Directorate of Research and Community Service (DPPM): an information hub for research programs, a research group directory, announcements, and official documents for the academic community.',
    highlights: [
      'Research group directory with search and filtering by leader and year.',
      'Official document download center (decrees, guidelines, announcements) with year and category filters.',
      'Yearly archive of official announcements and direct links to the Litabmas system.',
      'Bilingual interface (Indonesian and English).',
    ],
    stackGroups: R(web),
    shots: [{ title: 'Research page' }, { title: 'Research Group Directory' }, { title: 'Document Downloads' }, { title: 'Official Announcements' }],
  },
  litabmas: {
    title: 'UPI Litabmas Information System',
    period: 'May 2026 - present (internship)',
    text: 'DPPM UPI’s official platform for submitting proposals and reporting on research and community service, actively used by lecturers across UPI and managed through an admin panel.',
    highlights: [
      'Designed the back-end logic and database structure for the submission, review, and reporting flow.',
      'Full flow: proposals, reviewer scoring, progress reports, final reports, through to outputs.',
      'Admin panel for schemes, instruments, reviewers, partners, timelines, and activity logs.',
      'Daily logbook with verification, IKU and TKT recaps, and publication incentives.',
      'Running in production and used by lecturers throughout UPI.',
    ],
    stackGroups: R(web),
    shots: [{ title: 'Program list (lecturer dashboard)' }, { title: 'Admin panel: Config Data' }],
  },
  studyduel: {
    text: 'Duel-based mobile learning app: players face off on questions live in 1 vs 1, 2 vs 2, and offline modes. Entered in LIDM 2026, Digital Education Technology Innovation category.',
    highlights: [
      'Three battle modes: 1 vs 1, 2 vs 2, and offline, with a choice of subject, grade, and difficulty.',
      'Progress system: XP, leaderboard, badges, and daily challenges.',
      'Friends list and challenge invitations between players.',
      'Can be tried through an Android device simulation ("Try the simulation" link) and watched in the demo video.',
    ],
    stackGroups: R({ App: ['Flutter', 'Dart', 'Android Studio'] }),
    links: [{ label: 'Try the simulation' }, { label: 'Demo video' }],
    shots: [
      { title: 'UI design: sign in and sign up' },
      { title: 'UI design: home, shop, and gacha' },
      { title: 'UI design: duel mode' },
      { title: 'UI design: friends, profile, and badges' },
      { title: 'Demo video (LIDM 2026, Digital Education Technology Innovation)' },
    ],
  },
  penaguru: {
    period: 'Mobile Programming (IK300), 2026',
    text: 'A workspace app for vocational and senior high school teachers to log class journals, compile report cards, and get teaching-strategy advice from an AI assistant. A final project replacing the Mobile Programming exam, Group 3.',
    highlights: [
      'Class journal: log observations per student with tags, 1-5 scores (knowledge, skills, attitude), and voice dictation. Entries can be saved offline and synced later.',
      'Two roles in one account: subject teacher and homeroom teacher, each with their own dashboard.',
      'Subject report cards are drafted from the journal, submitted to the homeroom teacher for approval, and the message can then be sent to parents through WhatsApp.',
      'Assessment agenda and an AI assistant (Gemini) for teaching-strategy suggestions.',
      'Runs on Android and the web, backed by PostgreSQL on Supabase with row level security.',
    ],
    stackGroups: R({
      App: ['React Native (Expo)', 'TypeScript'],
      'Backend and data': ['Supabase PostgreSQL', 'Google Gemini AI'],
      Infrastructure: ['Vercel', 'Git & GitHub'],
    }),
    links: [{ label: 'Try the web app' }, { label: 'Showcase site' }, { label: 'Demo video' }, { label: 'GitHub' }],
    shots: [
      { title: 'PenaGuru: smart workspace and AI assistant for teachers' },
      { title: 'Home: next session, homeroom class, and subjects' },
      { title: 'Class dashboard: active topic and achievement' },
      { title: 'Log a journal entry: subject, students, and voice dictation' },
      { title: 'Student profile: achievement per domain and journal history' },
      { title: 'AI assistant and per-teacher subject report cards' },
      { title: 'PenaGuru demo video (5 minutes)' },
    ],
  },
  room404: {
    text: 'First-person horror game for an OOP course project. Players walk a dark dormitory hallway to collect three voodoo dolls, then return to the front door to escape.',
    highlights: [
      'Clear mission: collect three voodoo dolls, then leave through the front door.',
      'Atmosphere built from minimal lighting, narrow corridors, and a creature that lurks.',
      'Designed around object-oriented programming principles as an OOP assignment.',
      'Released free on itch.io.',
    ],
    links: [{ label: 'Play on itch.io' }, { label: 'Room404 video' }],
    shots: [{ title: 'Dormitory hallway' }, { title: 'Corridor and cabinet' }, { title: 'Door to a room' }, { title: 'Room404 video' }],
  },
  multiverse: {
    text: 'A 2D 16-bit pixel-art board-crawler RPG. The player is cast into a multiverse that twists city streets into an adventure board full of school zombies, demons, and strange occurrences, and must survive to find the way home.',
    highlights: [
      'Branching board exploration: pick a route through combat tiles, mystery chests, shops, and rest stops.',
      'Turn-based combat with a QTE parry/dodge: good timing cuts incoming damage.',
      'Tactical inventory, crafting, and throwing items from the bag mid-battle.',
      'In-game guide book, with keyboard and mouse controls on PC and touch controls on Android.',
      'Released free on itch.io for Windows and Android.',
    ],
    stackGroups: R({ Game: ['Godot Engine 4', 'GDScript'], Platform: ['Windows', 'Android'] }),
    links: [{ label: 'Play on itch.io' }],
    shots: [
      { title: 'Lost in MultiverseRPG' },
      { title: 'Adventure board and map' },
      { title: 'Turn-based combat' },
      { title: 'Character and enemy status conditions' },
      { title: 'Bag and equipment' },
      { title: 'In-game guide book' },
    ],
  },
  grimoire: {
    period: 'Educational Game Development, Group 3',
    text: 'A 2D turn-based educational RPG for learning search and sorting algorithms. The player is Aegis, a scholar knight who restores The Great Index from the Chaos King through questions, puzzles, and battles.',
    highlights: [
      'Searching and Sorting topics (Linear, Binary, Bubble, Selection, Insertion, Merge, Quick Sort) are taught through battles and a labyrinth map.',
      'Seven question formats, four of which make the player run the algorithm themselves, so it tests understanding rather than guessing.',
      'A Study Book with pseudocode and step-by-step examples, available at any time.',
      'Adventure report: grade, accuracy per topic, weak spots, and a study plan, exportable as text and CSV.',
      'Built by a team of five; I handled the engine architecture and lead programming.',
    ],
    stackGroups: R({ Game: ['Unity', 'C#', 'Godot Engine'] }),
    shots: [
      { title: 'Title screen' },
      { title: 'Library labyrinth board' },
      { title: 'Binary Search puzzle' },
      { title: 'Battle question: Linear Search' },
      { title: 'Golem battle: Bubble Sort' },
      { title: 'Equipment shop' },
      { title: 'Study Book: Binary Search pseudocode' },
      { title: 'Adventure report' },
    ],
  },
}

export const research = {
  water: {
    role: 'Research team member',
    text: 'An automated ESP32-based water monitoring and filtering device that reads six water quality parameters live and shows them on the device screen.',
    highlights: [
      'Monitors six parameters: turbidity, TDS, water level, temperature, viscosity, and pH.',
      'An ESP32 controller reads every sensor and shows the results on the device screen.',
      'Built as a full physical prototype: printed casing, pump, and piping.',
    ],
    stackGroups: R({ Controller: ['ESP32'], Sensors: ['Turbidity', 'TDS', 'Water level', 'Temperature', 'Viscosity', 'pH'] }),
    shots: [{ title: 'Documentation at SMPN 1 Purwakarta' }, { title: 'Documentation with the team' }, { title: 'Prototype, top view' }, { title: 'Prototype, side view' }],
  },
  racket: {
    role: 'Research team member',
    text: 'Sports research with lecturers. Technical details are not yet published.',
  },
  webdev: {
    title: 'Web Developer, Litabmas and DPPM UPI',
    role: 'Web developer, supporting lecturer research',
    period: 'May 2026 - present (internship)',
    text: 'Building and maintaining the official DPPM UPI website and the Litabmas Information System, where lecturers across UPI submit proposals and report on research and community service.',
    highlights: [
      'Designed the back-end logic and database for the flow from proposal and reviewer scoring to progress and final reports.',
      'Built the DPPM UPI website: research group directory, document download center, and official announcement archive.',
      'Created the admin panel for schemes, instruments, reviewers, partners, and timelines.',
      'Joined development meetings with the DPPM team to discuss system requirements.',
    ],
    stackGroups: R(web),
    shots: [
      { title: 'Website presentation meeting' },
      { title: 'Litabmas: program list (lecturer dashboard)' },
      { title: 'Litabmas: admin panel' },
      { title: 'DPPM: Research page' },
      { title: 'DPPM: research group directory' },
      { title: 'System development meeting' },
    ],
  },
}
