// Seluruh isi situs untuk kedua bahasa, disusun SEKALI saat modul dimuat.
// Data Indonesia di src/data/* adalah sumber utama; versi Inggris = data itu + penimpa di ./en/*.
import { profile, philosophy } from '../data/profile'
import { academic } from '../data/academic'
import { experience, filters } from '../data/experience'
import { featuredAward, awards } from '../data/awards'
import { research } from '../data/research'
import { visibleProjects } from '../data/projects'
import { creative } from '../data/creative'
import { stack } from '../data/stack'
import { documents } from '../data/documents'
import { experienceDetail, awardDetail } from '../data/details'
import { merge, mergeById } from './merge'
import * as enProfile from './en/profile'
import * as enExperience from './en/experience'
import * as enProjects from './en/projects'
import * as enCreative from './en/creative'
import * as enDetails from './en/details'

const indonesian = {
  profile, philosophy, academic, experience, filters, featuredAward, awards, research,
  projects: visibleProjects, creative, stack, documents, experienceDetail, awardDetail,
}

// gambar bukti sementara punya versi berlabel Inggris (ph-x -> ph-x-en)
const localizeProofs = (details) =>
  Object.fromEntries(
    Object.entries(details).map(([id, d]) => [
      id,
      { ...d, proofs: d.proofs?.map((p) => (p.image?.startsWith('ph-') ? { ...p, image: `${p.image}-en` } : p)) },
    ]),
  )

const mergeMap = (base, over) => Object.fromEntries(Object.entries(base).map(([id, d]) => [id, merge(d, over[id])]))

const english = {
  ...indonesian,
  profile: merge(profile, enProfile.profile),
  philosophy: merge(philosophy, enProfile.philosophy),
  academic: merge(academic, enProfile.academic),
  stack: merge(stack, enProfile.stack),
  documents: mergeById(documents, enProfile.documents),
  experience: mergeById(experience, enExperience.experience),
  filters: merge(filters, enExperience.filters),
  featuredAward: merge(featuredAward, enExperience.featuredAward),
  awards: mergeById(awards, enExperience.awards),
  projects: mergeById(visibleProjects, enProjects.projects),
  research: mergeById(research, enProjects.research),
  creative: mergeById(creative, enCreative.creative),
  experienceDetail: localizeProofs(mergeMap(experienceDetail, enDetails.experienceDetail)),
  awardDetail: localizeProofs(mergeMap(awardDetail, enDetails.awardDetail)),
}

export const content = { id: indonesian, en: english }
