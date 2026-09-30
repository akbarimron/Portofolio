// Penimpa bahasa Inggris untuk data/profile.js, academic.js, stack.js, documents.js
export const profile = {
  summary:
    'I build websites and software, then bring them to life through motion graphics, video, and 3D design. Computer Science Education student at UPI, Bandung.',
}

export const philosophy = {
  paragraphs: [
    'I am Muhamad Akbar Imron, a Computer Science Education student at Universitas Pendidikan Indonesia. Day to day I build websites and software, then give them their look and movement through motion graphics, video editing, and 3D design.',
    'On campus I also work as a lab assistant and take part in student organisations. I am used to explaining complicated things simply, and that habit carries into my work: tidy, clear, and pleasant to look at.',
  ],
}

export const academic = {
  current: {
    label: 'University',
    detail: 'Faculty of Mathematics and Science Education (FPMIPA), Computer Science Education Program',
    period: 'Class of 2024, ongoing',
    gpa: 'GPA 3.96',
  },
  focus: [
    { text: 'Breaking complex problems into steps that can be taught.' },
    { text: 'Reactive frontend, backend, REST and WebSocket.' },
    { text: 'Interactive learning tools, 3D simulation, and gamification.' },
    { text: 'Animation, 3D modelling, and video editing.' },
  ],
  courses: [
    'Algorithms & Programming',
    'Data Structures',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Human-Computer Interaction',
  ],
}

// hanya label yang berubah; nama alat tetap
export const stack = [
  { groups: [{ label: 'Languages & frameworks' }, {}] },
  { cluster: 'Creative & 3D', groups: [{}, { label: 'Motion graphics' }, {}] },
]

export const documents = {
  cv: { text: 'Summary of education, organisations, assistantships, and achievements. The PDF is written in Indonesian.' },
  portfolio: { text: 'A collection of website, software, motion graphics, video, and 3D projects. The PDF is written in Indonesian.' },
}
