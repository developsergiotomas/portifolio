import { categoryLabel, technologies, type Tech } from '../content/technologies'
import { CONTACT, messages, type Lang } from '../i18n/messages'
import { htmlLang, SITE_URL } from '../i18n/metadata'

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

export function person(lang: Lang) {
  const t = messages[lang]
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Sergio Tomas',
    url: `${SITE_URL}/${lang}/`,
    image: `${SITE_URL}/profile.jpg`,
    jobTitle: ['Principal Software Engineer', lang === 'pt' ? 'Arquiteto de Soluções' : 'Solutions Architect'],
    description: t.meta.description,
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    sameAs: [CONTACT.linkedin],
    worksFor: { '@type': 'Organization', name: 'Stellar Gaming' },
    knowsLanguage: ['pt-BR', 'en', 'es'],
    knowsAbout: technologies.map((tech) => tech.name),
    hasCredential: [
      ...t.credentials.certs.map((name) => ({ '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name })),
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: t.credentials.degree },
    ],
  }
}

const website = (lang: Lang) => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Sergio Tomas',
  inLanguage: ['en', 'pt-BR'],
  publisher: { '@id': PERSON_ID },
  description: messages[lang].meta.description,
})

export function homeJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      website(lang),
      person(lang),
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/${lang}/#page`,
        url: `${SITE_URL}/${lang}/`,
        name: messages[lang].meta.title,
        inLanguage: htmlLang(lang),
        isPartOf: { '@id': WEBSITE_ID },
        mainEntity: { '@id': PERSON_ID },
      },
    ],
  }
}

export function techJsonLd(lang: Lang, tech: Tech) {
  const url = `${SITE_URL}/${lang}/stack/${tech.slug}/`
  const copy = tech[lang]
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${url}#article`,
        url,
        headline: `${tech.name} — ${copy.tagline}`,
        description: copy.overview,
        inLanguage: htmlLang(lang),
        isPartOf: { '@id': WEBSITE_ID },
        author: { '@id': PERSON_ID },
        about: { '@type': 'Thing', name: tech.name, description: categoryLabel(tech.category, lang) },
        image: `${SITE_URL}/tech/${tech.slug}.svg`,
        articleSection: categoryLabel(tech.category, lang),
        keywords: copy.concepts.map(([title]) => title).join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Portfolio', item: `${SITE_URL}/${lang}/` },
          { '@type': 'ListItem', position: 2, name: messages[lang].tech.stack, item: `${SITE_URL}/${lang}/#stack` },
          { '@type': 'ListItem', position: 3, name: tech.name, item: url },
        ],
      },
      { ...person(lang), knowsAbout: undefined, hasCredential: undefined },
    ],
  }
}
