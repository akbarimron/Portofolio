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
