import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { css, cx } from 'styled-system/css'
import { Footer } from '../../../../components/home/Contact'
import { JsonLd } from '../../../../components/JsonLd'
import { PageNav } from '../../../../components/Nav'
import { techJsonLd } from '../../../../seo/structuredData'
import { container, Icon, LogoTile, mono, Section } from '../../../../components/ui'
import { categoryLabel, getTech, neighbours, technologies, type Tech } from '../../../../content/technologies'
import { isLang, LANGS, messages, type Lang } from '../../../../i18n/messages'
import { alternates } from '../../../../i18n/metadata'

type Params = Promise<{ lang: string; slug: string }>

export const dynamicParams = false

export function generateStaticParams() {
  return LANGS.flatMap((lang) => technologies.map((t) => ({ lang, slug: t.slug })))
}

async function resolve(params: Params): Promise<{ lang: Lang; tech: Tech }> {
  const { lang, slug } = await params
  const tech = getTech(slug)
  if (!isLang(lang) || !tech) notFound()
  return { lang, tech }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, tech } = await resolve(params)
  return {
    title: tech.name,
    description: tech[lang].tagline + ' ' + tech[lang].overview,
    alternates: alternates(lang, `/stack/${tech.slug}/`),
    openGraph: { type: 'article', title: `${tech.name} — Sergio Tomas`, description: tech[lang].tagline, locale: lang === 'pt' ? 'pt_BR' : 'en_US' },
  }
}

export default async function TechPage({ params }: { params: Params }) {
  const { lang, tech } = await resolve(params)
  const t = messages[lang].tech
  const copy = tech[lang]
  const { prev, next } = neighbours(tech.slug)

  return (
    <>
      <JsonLd data={techJsonLd(lang, tech)} />
      <PageNav lang={lang} />
      <main>
        <header className={css({ borderBottom: '1px solid token(colors.line)', pt: { base: '8', lg: '14' }, pb: { base: '10', lg: '18' } })}>
          <div className={cx(container, css({ display: 'flex', flexDir: 'column', gap: { base: '7', lg: '10' } }))}>
            <nav aria-label="Breadcrumb">
              <ol className={css(mono, { display: 'flex', gap: '2.5', fontSize: '11px', textTransform: 'none' })}>
                <li>
                  <Link href={`/${lang}/`} className={css({ _hover: { color: 'fg' } })}>Portfolio</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={`/${lang}/#stack`} className={css({ _hover: { color: 'fg' } })}>{t.stack}</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className={css({ color: 'accent' })}>{tech.name}</li>
              </ol>
            </nav>
            <div className={css({ display: 'flex', flexDir: { base: 'column', md: 'row' }, alignItems: { md: 'center' }, gap: { base: '6', md: '12' } })}>
              <span className={css({ display: { base: 'none', md: 'block' } })}>
                <LogoTile slug={tech.slug} size={152} padding={26} />
              </span>
              <span className={css({ display: { base: 'block', md: 'none' } })}>
                <LogoTile slug={tech.slug} size={88} padding={14} />
              </span>
              <div className={css({ display: 'flex', flexDir: 'column', gap: { base: '3', md: '3.5' } })}>
                <p className={css(mono, { color: 'accent' })}>
                  {categoryLabel(tech.category, lang)} · {tech.kind === 'language' ? t.language : t.tool}
                </p>
                <h1 className={css({ fontFamily: 'heading', fontWeight: '600', fontSize: { base: '48px', md: '80px' }, lineHeight: '1', letterSpacing: '-0.025em' })}>{tech.name}</h1>
                <p className={css({ fontFamily: 'heading', fontSize: { base: '18px', md: '22px' }, lineHeight: '1.3', color: 'fg2' })}>{copy.tagline}</p>
              </div>
            </div>
            {tech.usedAt.length > 0 && (
              <div className={css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3' })}>
                <span className={css(mono, { fontSize: '11px' })}>{t.usedAt}</span>
                <ul className={css({ display: 'flex', flexWrap: 'wrap', gap: '2' })}>
                  {tech.usedAt.map((c) => (
                    <li key={c} className={css({ fontSize: '13px', px: '3', py: '1.5', border: '1px solid token(colors.lineStrong)' })}>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </header>

        <Section index="01" title={t.overview}>
          <p className={css({ fontFamily: 'heading', fontWeight: '500', fontSize: { base: '20px', md: '28px' }, lineHeight: '1.4', letterSpacing: '-0.01em' })}>{copy.overview}</p>
        </Section>

        <Section index="02" title={t.concepts} raised>
          <p className={css({ color: 'fg3', fontSize: { base: '14px', md: '16px' }, mb: { base: '6', md: '10' } })}>{t.conceptsLead}</p>
          <ol className={css({ display: 'grid', gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }, columnGap: '10' })}>
            {copy.concepts.map(([title, description], i) => (
              <li key={title} className={css({ display: 'flex', flexDir: 'column', gap: '3', pt: '7', pb: '9', borderTop: '1px solid token(colors.lineStrong)' })}>
                <span className={css(mono, { color: 'accent', fontSize: '11px' })}>{String(i + 1).padStart(2, '0')}</span>
                <h2 className={css({ fontFamily: 'heading', fontWeight: '600', fontSize: { base: '18px', md: '20px' }, lineHeight: '1.25' })}>{title}</h2>
                <p className={css({ fontSize: '15px', lineHeight: '1.55', color: 'fg2' })}>{description.replace(/`/g, '')}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section index="03" title={t.practice}>
          <blockquote className={css({ borderLeft: '2px solid token(colors.accent)', pl: '7', py: '1', fontFamily: 'heading', fontSize: { base: '18px', md: '22px' }, lineHeight: '1.45' })}>{copy.practice}</blockquote>
        </Section>

        <Section index="04" title={t.related}>
          <ul className={css({ display: 'flex', flexWrap: 'wrap', gap: '3' })}>
            {tech.related.map((slug) => {
              const r = getTech(slug)!
              return (
                <li key={slug}>
                  <Link
                    href={`/${lang}/stack/${slug}/`}
                    className={css({ display: 'flex', alignItems: 'center', gap: '3', h: '16', pl: '2', pr: '5', bg: 'bgRaised', border: '1px solid token(colors.line)', fontSize: '15px', fontWeight: '500', transition: 'border-color 0.2s', _hover: { borderColor: 'accent' } })}
                  >
                    <LogoTile slug={slug} size={46} padding={8} />
                    {r.name}
                    <span className={css({ color: 'fg3' })}>
                      <Icon name="arrowUpRight" size={14} />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Section>

        <nav aria-label={`${t.previous} / ${t.next}`} className={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid token(colors.line)' })}>
          {[
            { label: t.previous, target: prev, align: 'start' as const },
            { label: t.next, target: next, align: 'end' as const },
          ].map(({ label, target, align }) => (
            <Link
              key={align}
              href={`/${lang}/stack/${target.slug}/`}
              rel={align === 'start' ? 'prev' : 'next'}
              className={css({
                display: 'flex',
                flexDir: 'column',
                gap: '3.5',
                px: { base: '5', md: '10', xl: '20' },
                py: { base: '8', md: '12' },
                alignItems: align === 'start' ? 'flex-start' : 'flex-end',
                borderRight: align === 'start' ? '1px solid token(colors.line)' : undefined,
                transition: 'background 0.2s',
                _hover: { bg: 'bgRaised' },
              })}
            >
              <span className={css(mono, { fontSize: '11px' })}>{align === 'start' ? `← ${label}` : `${label} →`}</span>
              <span className={css({ display: 'flex', alignItems: 'center', gap: '4', flexDir: align === 'start' ? 'row' : 'row-reverse' })}>
                <LogoTile slug={target.slug} size={48} padding={8} />
                <span className={css({ fontFamily: 'heading', fontWeight: '600', fontSize: { base: '20px', md: '32px' } })}>{target.name}</span>
              </span>
            </Link>
          ))}
        </nav>
      </main>
      <Footer lang={lang} />
    </>
  )
}
