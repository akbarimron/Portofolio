// Penimpa Inggris untuk data/experience.js dan data/awards.js (kunci = id entri)
export const experience = {
  genbi: { meta: '2026 - present', org: 'Bank Indonesia Scholarship Recipients Community', text: 'Communicating central banking policy, running social activities, and initiating digital financial literacy education programs.' },
  ibaf: { title: 'Vice Chair, UKM IBAF UPI', org: 'Ideal Body and Fitness, UPI Gymnasium', text: 'Helping lead and coordinate the organisation’s programs in health and fitness (GYMUPI) across the UPI campus.' },
  asrama: { title: 'Communication and Information (Kominfo) Division, Dormitory Cabinet', org: 'UPI Bumi Siliwangi Student Dormitory', text: 'Managing publications, social media, and event documentation for the dormitory cabinet, including video and aftermovie production.' },
  dpm: { title: 'Aspiration Body, DPM KEMAKOM', org: 'Student Representative Council, UPI Computer Science', text: 'Carrying out the legislative function, overseeing the student executive’s work, and channelling department students’ aspirations transparently and accountably.' },
  sd: { meta: 'Lab assistant', title: 'Data Structures Lab Assistant', org: 'FPMIPA UPI, algorithms and pointer operations', text: 'Guiding 70+ students through pointer dereferencing, dynamic memory allocation in C/C++, Tree and Graph structures, and Big-O complexity analysis.' },
  mat: { meta: 'Course assistant', title: 'Informatics Mathematics & Calculus Assistant', org: 'FPMIPA UPI, propositional logic, graphs, differentiation', text: 'Covering boolean algebra, graph theory for network modelling, and differential calculus as a foundation for machine learning.' },
  db: { meta: 'Lab assistant', title: 'Database Lab Assistant', org: 'FPMIPA UPI, relational modelling', text: 'Supporting SQL query optimisation and database normalisation.' },
  inkart: { meta: 'Research', title: 'inkART Research Assistant', text: 'Creating 2D character assets for unplugged learning media.' },
  mentor: { meta: 'Dormitory', title: 'UPI Student Dormitory Mentor', org: 'Character, leadership, and academic guidance', text: 'Helping new students build academic habits, monitoring study progress, and leading tutoring sessions at the campus dormitory.' },
}

export const filters = [{ label: 'All' }, { label: 'Organisations' }, { label: 'Assistantships & mentoring' }]

export const featuredAward = {
  year: 'Active',
  level: 'Scholarship',
  title: 'Bank Indonesia Central Banking Scholarship Recipient (GenBI)',
  sub: 'Selected on academic achievement, leadership, and organisational record',
  text: 'Passed document screening, a digital economy essay, and a panel interview. Representing UPI among Generasi Baru Indonesia for central banking literacy advocacy and community programs.',
}

export const awards = {
  'pkm-vgk': { level: 'Funded', title: 'PKM-VGK AMLI 2026 Funding', sub: 'Constructive Idea Video "RECLAIM"', text: 'PKM Constructive Idea Video funding from AMLI for the "RECLAIM" project: an idea to restore post-mining land through technology and education.' },
  riseup: { level: 'Funded', title: 'Rise Up Fest Entrepreneur Funding', sub: '2026 food and beverage product business competition', text: 'Business competition funding for the food and beverage product KulitYea.' },
  lidm: { level: 'Finalist', title: 'LIDM UPI 2025 Finalist', sub: 'Microteaching category', text: 'Reached the final round of LIDM UPI 2025 in the microteaching category.' },
  'pkm-gft': { level: 'National, Bronze', title: 'PKM-GFT AMLI 2025 Bronze Medal', sub: 'Written Futuristic Ideas (GFT), AMLI (Indonesian MIPA LPTK Association)', text: 'A futuristic scientific writing competition across science faculties of teacher-training universities (LPTK) nationwide.' },
  dimasti: { level: 'Harapan 1, National', title: 'Harapan 1 (Honorable Mention), DIMASTI AMLI 2025', sub: 'STEM-based storytelling category', text: 'AMLI national competition in STEM-based storytelling.' },
}
