import type { Metadata } from 'next'
import { LANGS, type Lang } from './messages'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sergiotomas.dev'

export const htmlLang = (lang: Lang) => (lang === 'pt' ? 'pt-BR' : 'en')

/** Canonical + hreflang alternates for a path that exists in every language (e.g. "/stack/react/"). */
export function alternates(lang: Lang, path = '/'): Metadata['alternates'] {
  return {
    canonical: `/${lang}${path}`,
    languages: Object.fromEntries([
      ...LANGS.map((l) => [htmlLang(l), `/${l}${path}`]),
      ['x-default', `/en${path}`],
    ]),
  }
}

/** Absolute URLs of one page in every language, keyed by hreflang. */
export const languageUrls = (path = '/') =>
  Object.fromEntries(LANGS.map((l) => [htmlLang(l), `${SITE_URL}/${l}${path}`]))

/** Search engine ownership verification (rendered as <meta name="google-site-verification">). */
export const SITE_VERIFICATION: Metadata['verification'] = {
  google: '8pVSS45TalR8rTuX9gZHM8IOrTE8TJIg3_Uso_vbRrs',
}
