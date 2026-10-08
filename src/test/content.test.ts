import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { languages, neighbours, technologies, tools } from '../content/technologies'
import { LANGS, messages } from '../i18n/messages'

describe('technologies content', () => {
  it('splits into the 8 languages and 29 tools shown in the carousels', () => {
    expect(languages).toHaveLength(8)
    expect(tools).toHaveLength(29)
  })

  it.each(technologies.map((t) => [t.slug, t] as const))('%s is complete in every language', (_slug, tech) => {
    for (const lang of LANGS) {
      const copy = tech[lang]
      expect(copy.tagline).toBeTruthy()
      expect(copy.overview).toBeTruthy()
      expect(copy.practice).toBeTruthy()
      expect(copy.concepts).toHaveLength(6)
      copy.concepts.forEach(([title, description]) => {
        expect(title).toBeTruthy()
        expect(description).toBeTruthy()
      })
    }
  })

  it('has unique slugs, valid related links and an official logo for each item', () => {
    const slugs = new Set(technologies.map((t) => t.slug))
    expect(slugs.size).toBe(technologies.length)
    for (const t of technologies) {
      t.related.forEach((r) => expect(slugs.has(r), `${t.slug} → ${r}`).toBe(true))
      expect(existsSync(join(process.cwd(), 'public/tech', `${t.slug}.svg`)), t.slug).toBe(true)
    }
  })

  it('wraps previous/next around the list', () => {
    const first = technologies[0]
    const last = technologies[technologies.length - 1]
    expect(neighbours(first.slug).prev.slug).toBe(last.slug)
    expect(neighbours(last.slug).next.slug).toBe(first.slug)
  })
})

describe('messages', () => {
  it('keeps the same number of jobs and skills rows in both languages', () => {
    expect(messages.pt.experience.jobs).toHaveLength(messages.en.experience.jobs.length)
    expect(messages.pt.experience.earlier).toHaveLength(messages.en.experience.earlier.length)
    expect(messages.pt.skills.rows).toHaveLength(messages.en.skills.rows.length)
  })

  it('points each language to an existing CV file', () => {
    for (const lang of LANGS) {
      expect(existsSync(join(process.cwd(), 'public', messages[lang].hero.cvFile))).toBe(true)
    }
  })
})
