import type { Lang } from './messages'

/** First supported language in the browser's preference order; English otherwise. */
export function detectLang(preferred: readonly string[]): Lang {
  for (const tag of preferred) {
    const base = tag?.toLowerCase().split('-')[0]
    if (base === 'pt' || base === 'en') return base
  }
  return 'en'
}
