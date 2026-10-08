import { detectLang } from '../i18n/detect'
import { alternates } from '../i18n/metadata'

describe('detectLang', () => {
  it('picks Portuguese for any pt locale', () => {
    expect(detectLang(['pt-BR', 'en'])).toBe('pt')
    expect(detectLang(['en-US', 'pt'])).toBe('pt')
  })

  it('falls back to English', () => {
    expect(detectLang(['es-ES'])).toBe('en')
    expect(detectLang([])).toBe('en')
  })
})

describe('alternates', () => {
  it('builds canonical and hreflang links for a page', () => {
    expect(alternates('pt', '/stack/react/')).toEqual({
      canonical: '/pt/stack/react/',
      languages: { en: '/en/stack/react/', 'pt-BR': '/pt/stack/react/', 'x-default': '/en/stack/react/' },
    })
  })
})

describe('sitemap', () => {
  it('lists every page in both languages on sergiotomas.dev', async () => {
    const { default: sitemap } = await import('../app/sitemap')
    const entries = sitemap()
    expect(entries).toHaveLength(76)
    expect(entries[0]).toMatchObject({
      url: 'https://sergiotomas.dev/en/',
      alternates: { languages: { en: 'https://sergiotomas.dev/en/', 'pt-BR': 'https://sergiotomas.dev/pt/' } },
    })
  })
})

describe('AI SEO', () => {
  it('exposes the whole profile and every technology in llms-full.txt', async () => {
    const { llmsFull, llmsIndex } = await import('../seo/llms')
    const { technologies } = await import('../content/technologies')
    const full = llmsFull('pt')
    expect(full).toContain('## Experiência')
    technologies.forEach((t) => expect(full).toContain(`### ${t.name}`))
    expect(llmsIndex()).toMatch(/^# Sergio Tomas\n\n> /)
  })

  it('welcomes AI crawlers in robots.txt', async () => {
    const { default: robots } = await import('../app/robots')
    const rules = robots().rules as { userAgent: string[] | string }[]
    expect(rules.flatMap((r) => r.userAgent)).toEqual(expect.arrayContaining(['GPTBot', 'ClaudeBot', 'PerplexityBot']))
  })

  it('links tech pages to the person in JSON-LD', async () => {
    const { techJsonLd } = await import('../seo/structuredData')
    const { getTech } = await import('../content/technologies')
    const graph = techJsonLd('en', getTech('react')!)['@graph']
    expect(graph[0]).toMatchObject({ '@type': 'TechArticle', author: { '@id': 'https://sergiotomas.dev/#person' } })
  })
})
