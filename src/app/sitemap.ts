import type { MetadataRoute } from 'next'
import { technologies } from '../content/technologies'
import { LANGS } from '../i18n/messages'
import { languageUrls, SITE_URL } from '../i18n/metadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', ...technologies.map((t) => `/stack/${t.slug}/`)]
  return paths.flatMap((path) =>
    LANGS.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.6,
      alternates: { languages: languageUrls(path) },
    })),
  )
}
