import { categoryLabel, languages, technologies, tools } from '../content/technologies'
import { CONTACT, messages, type Lang } from '../i18n/messages'
import { SITE_URL } from '../i18n/metadata'

const link = (lang: Lang, path: string) => `${SITE_URL}/${lang}${path}`

/** llms.txt index (https://llmstxt.org): short summary plus links to every page. */
export function llmsIndex() {
  const t = messages.en
  const techLine = (lang: Lang) => (slug: string, name: string, tagline: string) => `- [${name}](${link(lang, `/stack/${slug}/`)}): ${tagline}`
  return [
    '# Sergio Tomas',
    '',
    `> ${t.meta.description} Based in São Paulo, Brazil, with 14+ years in software. Bilingual site (English / Brazilian Portuguese).`,
    '',
    t.about.lead,
    '',
    `Contact: ${CONTACT.email} · ${CONTACT.linkedin}`,
    '',
    '## Full content',
    '',
    `- [Full profile and every technology page, in English](${SITE_URL}/llms-full.txt)`,
    `- [Perfil completo e todas as páginas de tecnologia, em português](${SITE_URL}/llms-full.pt.txt)`,
    '',
    '## Profile',
    '',
    `- [Portfolio (English)](${link('en', '/')}): experience, stack, skills, certifications and contact`,
    `- [Portfólio (Português)](${link('pt', '/')}): experiência, stack, habilidades, certificações e contato`,
    `- [CV (PDF, English)](${SITE_URL}${messages.en.hero.cvFile})`,
    `- [CV (PDF, Português)](${SITE_URL}${messages.pt.hero.cvFile})`,
    '',
    '## Languages',
    '',
    ...languages.map((x) => techLine('en')(x.slug, x.name, x.en.tagline)),
    '',
    '## Tools & platforms',
    '',
    ...tools.map((x) => techLine('en')(x.slug, x.name, x.en.tagline)),
    '',
    '## Optional',
    '',
    ...technologies.map((x) => techLine('pt')(x.slug, `${x.name} (PT)`, x.pt.tagline)),
    '',
  ].join('\n')
}

/** Whole site as plain Markdown in one language, for LLM ingestion. */
export function llmsFull(lang: Lang) {
  const t = messages[lang]
  const out: string[] = [
    `# Sergio Tomas — ${t.meta.title.split('— ')[1] ?? ''}`.trim(),
    '',
    `> ${t.meta.description}`,
    '',
    `${t.hero.headline} ${t.hero.subhead}`,
    '',
    `## ${t.about.label}`,
    '',
    t.about.lead,
    '',
    `**${t.about.aiPhrase}.** ${t.about.aiText}`,
    '',
    `${t.about.groundedIn}: ${t.about.fundamentals.join(', ')}.`,
    '',
    `## ${t.experience.label}`,
    '',
  ]
  for (const job of t.experience.jobs) {
    out.push(`### ${job.company} — ${job.roles.map((r) => (r.years ? `${r.title} (${r.years})` : r.title)).join('; ')}`, '', `${job.dates} · ${job.location}`, '', job.description, '')
  }
  out.push(`### ${t.experience.earlierTitle} (${t.experience.earlierRange})`, '')
  for (const e of t.experience.earlier) out.push(`- **${e.company}** — ${e.role} (${e.years}): ${e.summary}`)
  out.push('', `## ${t.skills.label}`, '')
  for (const [k, v] of t.skills.rows) out.push(`- **${k}:** ${v}`)
  out.push(
    '',
    `## ${t.credentials.education}`,
    '',
    `- ${t.credentials.degree} (${t.credentials.degreeYears})`,
    '',
    `## ${t.credentials.certifications}`,
    '',
    ...t.credentials.certs.map((c) => `- ${c}`),
    '',
    `## ${t.credentials.languages}`,
    '',
    ...t.credentials.spoken.map(([n, l]) => `- ${n}: ${l}`),
    '',
    `## ${t.contact.label}`,
    '',
    `- Email: ${CONTACT.email}`,
    `- LinkedIn: ${CONTACT.linkedin}`,
    `- ${t.contact.location}: ${t.contact.locationValue}`,
    '',
    `## ${t.stack.label}`,
    '',
  )
  for (const tech of technologies) {
    const c = tech[lang]
    out.push(
      `### ${tech.name}`,
      '',
      `${categoryLabel(tech.category, lang)} · ${link(lang, `/stack/${tech.slug}/`)}`,
      '',
      `*${c.tagline}*`,
      '',
      c.overview,
      '',
      `**${t.tech.concepts}:**`,
      '',
      ...c.concepts.map(([title, d]) => `- **${title}:** ${d}`),
      '',
      `**${t.tech.practice}:** ${c.practice}`,
      '',
    )
    if (tech.usedAt.length) out.push(`**${t.tech.usedAt}:** ${tech.usedAt.join(', ')}`, '')
  }
  return out.join('\n')
}

export const textResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
