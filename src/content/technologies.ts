import data from './technologies.json'
import type { Lang } from '../i18n/messages'

export type CategoryId = keyof typeof data.categories

export type TechCopy = {
  tagline: string
  overview: string
  concepts: [string, string][]
  practice: string
}

export type Tech = {
  slug: string
  name: string
  category: CategoryId
  kind: 'language' | 'tool'
  usedAt: string[]
  related: string[]
} & Record<Lang, TechCopy>

export const technologies = data.items as Tech[]

export const languages = technologies.filter((t) => t.kind === 'language')
export const tools = technologies.filter((t) => t.kind === 'tool')

const bySlug = new Map(technologies.map((t) => [t.slug, t]))

export const getTech = (slug: string | undefined) => (slug ? bySlug.get(slug) : undefined)

export const categoryLabel = (id: CategoryId, lang: Lang) => data.categories[id][lang]

export function neighbours(slug: string) {
  const i = technologies.findIndex((t) => t.slug === slug)
  const n = technologies.length
  return { prev: technologies[(i - 1 + n) % n], next: technologies[(i + 1) % n] }
}

export const logoSrc = (slug: string) => `/tech/${slug}.svg`
