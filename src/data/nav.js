// Setiap id harus punya section dengan id yang sama di halaman.
export const nav = [
  { id: 'about', label: 'About' },
  { id: 'academic', label: 'Academic' },
  { id: 'experience', label: 'Experience' },
  { id: 'honors', label: 'Honors' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'creative', label: 'Creative' },
  { id: 'stack', label: 'Stack' },
  { id: 'documents', label: 'CV' },
]

export const sectionIds = [...nav.map((n) => n.id), 'contact']
