// Penimpa Inggris untuk data/details.js. `facts` diganti utuh (R) karena labelnya ikut diterjemahkan;
// `paragraphs`, `points`, dan `proofs` digabung per indeks (gambar tetap, hanya judul yang berubah).
import { R } from '../merge'

export const experienceDetail = {
  genbi: {
    facts: R({ Period: '2026 - present', Institution: 'Generasi Baru Indonesia (GenBI), Bank Indonesia', Status: 'Active' }),
    paragraphs: ['GenBI is the Bank Indonesia scholarship recipients community. I joined as a central banking scholarship recipient and take an active part in its activities.'],
    points: [
      'Communicating central banking policy to students and the public.',
      'Running community social activities.',
      'Initiating digital financial literacy education programs.',
      'Producing the Genbi Night 2026 after movie.',
    ],
    proofs: [
      { title: 'World Book Day 2026, Bank Indonesia' },
      { title: 'Community service with children' },
      { title: 'Education and community service session in the park' },
      { title: 'GenBI members group photo at the sports hall' },
      { title: 'GenBI members group photo' },
      { title: 'GenBI Night, receiving the Best Intern Staff award 2025/2026' },
    ],
  },
  ibaf: {
    facts: R({ Period: 'Jun 2025 - Jun 2026', Institution: 'UKM IBAF (Ideal Body and Fitness), UPI Gymnasium', Position: 'Vice Chair' }),
    paragraphs: ['IBAF is a UPI student activity unit in health and fitness (GYMUPI). As Vice Chair, I helped lead the organisation and coordinate its programs.'],
    points: [
      'Helping lead and coordinate the organisation’s programs.',
      'Shooting the cinematography for IBAF UPI Expo 2026.',
      'Developing the IBAF UPI website as a fullstack developer.',
    ],
    proofs: [
      { title: 'Certificate, Vice Chair of UKM IBAF UPI 2025-2026' },
      { title: 'Group photo of IBAF UPI members and board in the training hall' },
      { title: 'Group photo of IBAF UPI members in front of the sports building' },
      { title: 'Briefing before an outdoor training session' },
      { title: 'Group photo after training in the gym' },
    ],
    links: [{ label: 'IBAF Instagram post' }],
  },
  asrama: {
    facts: R({ Period: '2024 - 2026', Institution: 'UPI Bumi Siliwangi Student Dormitory Cabinet', Division: 'Communication and Information (Kominfo)' }),
    paragraphs: ['In the Kominfo Division I managed publications, social media, and event documentation for the dormitory cabinet, including video and design production.'],
    points: [
      'Produced after movies for Dormitory Orientation, Fellowship Night, Community Service, and Ramadan Festival 2025.',
      'Made the Dormitory Orientation 2025 teaser and animated twibbon.',
      'Made the 3D UPI Dormitory Cabinet 2025 logo and a 3D model of the dormitory building.',
    ],
    proofs: [
      { title: 'Certificate, Kominfo Division Member, Adhyayana Cabinet 2024/2025' },
      { title: 'Kominfo cover, Adhyayana Cabinet' },
      { title: 'Kominfo Division group photo' },
      { title: 'Kominfo team photo and documentation session' },
      { title: 'Kominfo team together' },
      { title: 'OLKA 2025, group photo in front of the Women’s Dormitory' },
      { title: 'OLKA 2025, group photo in the hall' },
    ],
  },
  dpm: {
    facts: R({ Period: 'Jan 2025 - Jan 2026', Institution: 'DPM KEMAKOM, UPI Computer Science Education Department', Area: 'Aspiration Body' }),
    paragraphs: ['DPM KEMAKOM is the legislative and oversight body that supervises the work of the KEMAKOM student executive and collects and channels student aspirations. I served in the Aspiration Body.'],
    points: [
      'Gathering, recording, and documenting aspirations, complaints, and input from Computer Science students.',
      'Acting as a communication bridge between students, the KEMAKOM executive, and the study program.',
      'Making the DPM KEMAKOM UPI 2025 logo entrance and the aspiration outreach mograph.',
    ],
    proofs: [
      { title: 'DPM KEMAKOM members together at night' },
      { title: 'DPM KEMAKOM members group photo outdoors' },
      { title: 'DPM KEMAKOM members group photo in university jackets' },
      { title: 'Group photo in front of the building at night' },
      { title: 'DPM KEMAKOM members group photo indoors' },
    ],
  },
  sd: {
    facts: R({ Role: 'Lab assistant', Course: 'Data Structures', Institution: 'FPMIPA UPI', Students: '70+ students' }),
    paragraphs: ['Guiding students through the Data Structures lab, from memory concepts to complexity analysis.'],
    points: ['Pointers and dereferencing.', 'Dynamic memory allocation in C/C++.', 'Tree and Graph structures.', 'Big-O complexity analysis.'],
    proofs: [
      { title: 'Certificate, Data Structures Lab Teaching Assistant 2025/2026' },
      { title: 'Data Structures lab session in the computer laboratory' },
    ],
  },
  mat: {
    facts: R({ Role: 'Course assistant', Course: 'Informatics Mathematics and Calculus', Institution: 'FPMIPA UPI' }),
    paragraphs: ['Supporting students’ grasp of the basic mathematics behind computer science.'],
    points: ['Propositional logic and boolean algebra.', 'Graph theory for network modelling.', 'Differential calculus as a foundation for machine learning.'],
    proofs: [
      { title: 'With fellow Informatics Mathematics and Calculus assistants' },
      { title: 'Meal with the lecturer and assistants' },
      { title: 'Class session with students' },
      { title: 'Students working on problems in class' },
    ],
  },
  db: {
    facts: R({ Role: 'Lab assistant', Course: 'Databases', Institution: 'FPMIPA UPI' }),
    paragraphs: ['Supporting students in the relational database lab.'],
    points: ['SQL query optimisation.', 'Database normalisation.'],
    proofs: [
      { title: 'Databases lab in the computer laboratory' },
      { title: 'Assisting students during the lab session' },
      { title: 'Students working on the lab' },
    ],
  },
  inkart: {
    facts: R({ Role: 'Research assistant', Group: 'inkART Research Group', Certificate: 'No. 561/UN40.A4.5.5.1/KM.01.00/2025', Date: '29 August 2025' }),
    paragraphs: [
      'Took part in inkART research focused on unplugged learning media.',
      'This certificate of appreciation recognises my dedication as a Research Assistant on the 2025 study "Kajian Taught Knowledge Elemen Berpikir Komputasional Terintegrasi Algoritma dan Pemrograman pada Informatika SMP melalui Didactic Engineering" (a study of the taught knowledge of computational thinking integrated with algorithms and programming in junior high informatics, through didactic engineering). It is signed by the Head of the Computer Science Education Study Program and the Head of the Young Lecturer Research Development and Affirmation program.',
    ],
    points: ['Creating 2D character assets for unplugged learning media.'],
    proofs: [
      { title: 'Research Assistant Certificate of Appreciation, 29 August 2025' },
      { title: 'Monster character assets: bodies, eyes, and mouths' },
      { title: 'Polygon characters: tetragon to heptagon' },
      { title: 'Trees, river, rocks, building, and house assets' },
      { title: 'Animal assets: turtle, owl, sheep, fox, rabbit, lion, and bear' },
      { title: 'Vehicle and human character assets' },
    ],
  },
  mentor: {
    facts: R({ Role: 'Mentor', Institution: 'UPI Student Dormitory', Area: 'Character, leadership, and academics' }),
    paragraphs: ['Guiding new students at the campus dormitory as they build academic habits and leadership.'],
    points: ['Helping new students build academic habits.', 'Monitoring study progress.', 'Leading guided tutoring sessions at the dormitory.'],
    proofs: [
      { title: 'Group photo in front of the Women’s Dormitory' },
      { title: 'Together in the dormitory hall' },
      { title: 'Shared meal at the dormitory' },
      { title: 'Group photo after a mentoring session, 26 November 2024' },
    ],
  },
}

export const awardDetail = {
  'genbi-beasiswa': {
    facts: R({ Type: 'Scholarship', Provider: 'Bank Indonesia', Status: 'Active' }),
    paragraphs: [
      'The Bank Indonesia Central Banking Scholarship is awarded through selection on academic achievement, leadership, and organisational record. The process covers documents, a digital economy essay, and a panel interview.',
      'As a recipient, I represent UPI among Generasi Baru Indonesia for central banking literacy advocacy and community programs.',
    ],
    proofs: [
      { title: 'World Book Day 2026, Bank Indonesia' },
      { title: 'Community service with children' },
      { title: 'Education and community service session in the park' },
      { title: 'GenBI members group photo at the sports hall' },
      { title: 'GenBI members group photo' },
      { title: 'GenBI Night, receiving the Best Intern Staff award 2025/2026' },
    ],
  },
  lidm: {
    facts: R({ Achievement: 'Finalist', Category: 'Microteaching', Year: '2025', Level: 'University (UPI)' }),
    paragraphs: ['Reached the final round of LIDM UPI 2025 in the microteaching category.'],
    proofs: [
      { title: 'LIDM UPI 2025 video' },
      { title: 'Lesson slide "Fun Coding with Scratch!"' },
      { title: 'Group photo with students in the classroom' },
      { title: 'Group photo in the school yard' },
      { title: 'Group photo in front of the Science Laboratory, SMPN 6 Lembang' },
      { title: 'Group photo in the laboratory room' },
      { title: 'Photo with one of the students' },
      { title: 'Team photo' },
    ],
  },
  'pkm-vgk': {
    facts: R({ Achievement: 'Funded', Scheme: 'PKM Constructive Idea Video (VGK)', Organiser: 'AMLI', Year: '2026' }),
    paragraphs: [
      'The "RECLAIM" idea restores degraded post-mining land through technology and education, turning it back into productive, sustainable land that supports Indonesia’s food self-sufficiency.',
    ],
    points: ['Designed the project’s visual identity, including the RECLAIM logo.'],
    proofs: [
      { title: 'RECLAIM Project Introduction video' },
      { title: 'RECLAIM The Creators Behind the Project video' },
      { title: 'RECLAIM logo' },
      { title: 'RECLAIM Instagram account: logo and PKM-VGK team' },
      { title: 'RECLAIM 3D simulation video' },
      { title: '3D mine-site simulation in Blender' },
      { title: 'RECLAIM team meeting' },
      { title: 'Preparing to shoot the video' },
      { title: 'RECLAIM team group photo in university jackets' },
    ],
  },
  riseup: {
    facts: R({ Achievement: 'Funded', Event: 'Rise Up Fest Entrepreneur', Product: 'KulitYea (food and beverage)', Year: '2026' }),
    paragraphs: ['Received funding in the Rise Up Fest business competition for the food and beverage product KulitYea.'],
    proofs: [
      { title: 'Powders made from various fruit peels for KulitYea' },
      { title: 'Dried fruit peels used as raw material' },
      { title: 'The team preparing and tasting the KulitYea product' },
      { title: 'KulitYea team photo' },
      { title: 'Team documentation at Rise Up Fest' },
      { title: 'KulitYea logo' },
      { title: 'KulitYea Tropical Orange packaging design' },
    ],
  },
  'pkm-gft': {
    facts: R({ Achievement: 'Bronze Medal', Scheme: 'PKM Written Futuristic Ideas (GFT)', Organiser: 'AMLI', Level: 'National' }),
    paragraphs: ['A futuristic scientific writing competition across science faculties of teacher-training universities (LPTK) nationwide.'],
    proofs: [
      { title: 'Bronze Medalist certificate, PKM AMLI 2025' },
      { title: 'Team participant certificate, PKM AMLI 2025' },
      { title: 'FPMIPA Awards, receiving the certificate and prize' },
      { title: 'With the team after receiving the certificate' },
      { title: 'Team preparing before the presentation' },
    ],
  },
  dimasti: {
    facts: R({ Achievement: 'Harapan 1 (Honorable Mention)', Event: 'DIMASTI AMLI', Area: 'STEM-based storytelling', Level: 'National', Year: '2025' }),
    paragraphs: ['An AMLI national competition in STEM-based storytelling. My entry was an animated storytelling video for learning.'],
    points: ['Wrote the script and produced the animated storytelling educational video.'],
    proofs: [
      { title: 'DIMASTI AMLI 2025 storytelling entry video' },
      { title: 'Storytelling entry poster "Petualangan Menjelajah Sistem Tata Surya Bersama Asti"' },
      { title: 'Official UPI Student Affairs announcement for Team Awang-Awang' },
      { title: 'DIMAS-TI 2025 awarding, Story Telling (STEAM) division' },
      { title: 'Award handover at the FPMIPA UPI outstanding students ceremony' },
      { title: 'With the team holding the certificate folder at the FPMIPA ceremony' },
      { title: 'Team Awang-Awang in front of the FPMIPA UPI building' },
      { title: 'Team Awang-Awang in the FPMIPA UPI lobby' },
    ],
  },
}
