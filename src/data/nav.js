// Setiap id harus punya section dengan id yang sama di halaman.
// Label tampil diambil dari i18n/ui.*.js dengan kunci `nav.<id>`.
export const nav = [
  { id: 'about' },
  { id: 'academic' },
  { id: 'experience' },
  { id: 'honors' },
  { id: 'research' },
  { id: 'projects' },
  { id: 'creative' },
  { id: 'stack' },
  { id: 'documents' },
]

export const sectionIds = [...nav.map((n) => n.id), 'contact']
