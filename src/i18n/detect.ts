import type { Lang } from './messages'

export const detectLang = (preferred: readonly string[]): Lang =>
  preferred.some((l) => l?.toLowerCase().startsWith('pt')) ? 'pt' : 'en'
