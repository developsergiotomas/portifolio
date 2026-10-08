import { css, cx } from 'styled-system/css'
import { messages, type Lang } from '../../i18n/messages'
import { mono, monoText, Section } from '../ui'

export function Experience({ lang }: { lang: Lang }) {
  const t = messages[lang].experience
  return (
    <Section id="experience" index="02" title={t.label} aside={<span className={css({ fontFamily: 'mono', fontSize: '12px', color: 'fg3', display: { base: 'none', lg: 'block' } })}>{t.range}</span>}>
      <ol>
        {t.jobs.map((job) => (
          <li key={job.company} className={css({ display: 'flex', flexDir: { base: 'column', md: 'row' }, gap: { base: '1.5', md: '10' }, py: { base: '6', md: '10' }, borderTop: '1px solid token(colors.line)' })}>
            <div className={css({ w: { md: '220px' }, flexShrink: 0, display: 'flex', flexDir: 'column', gap: '2.5' })}>
              <span className={css(mono, { color: job.current ? 'accent' : 'fg3', fontSize: { base: '10px', md: '12px' } })}>{job.dates}</span>
              <span className={css({ fontSize: '13px', color: 'fg3', display: { base: 'none', md: 'block' } })}>{job.location}</span>
            </div>
            <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: { base: '2', md: '4' } })}>
              <h3 className={css({ fontFamily: 'heading', fontWeight: '600', fontSize: { base: '22px', md: '28px' }, letterSpacing: '-0.015em' })}>{job.company}</h3>
              <ul className={css({ display: 'flex', flexDir: 'column', gap: '2' })}>
                {job.roles.map((role, i) => (
                  <li key={role.title} className={css({ display: 'flex', alignItems: 'center', gap: '3', flexWrap: 'wrap' })}>
                    {job.roles.length > 1 && <span aria-hidden="true" className={css({ w: '2', h: '2', bg: i === 0 ? 'accent' : 'lineStrong' })} />}
                    <span className={css({ fontSize: { base: '14px', md: '16px' }, fontWeight: i === 0 ? '600' : '400', color: i === 0 ? 'accent' : 'fg2' })}>{role.title}</span>
                    {role.years && <span className={css(mono, { fontSize: '11px' })}>{role.years}</span>}
                  </li>
                ))}
              </ul>
              <p className={css({ fontSize: { base: '14px', md: '16px' }, lineHeight: '1.6', color: 'fg2', maxW: '720px' })}>{job.description}</p>
              <ul className={css({ display: 'flex', flexWrap: 'wrap', gap: '2' })}>
                {job.tags.map((tag) => (
                  <li key={tag} className={css({ fontFamily: 'mono', fontSize: '11px', color: 'fg2', px: '2.5', py: '1.5', border: '1px solid token(colors.lineStrong)' })}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className={css({ display: 'flex', flexDir: { base: 'column', md: 'row' }, gap: { base: '1.5', md: '10' }, pt: { base: '6', md: '10' }, borderTop: '1px solid token(colors.line)' })}>
          <span className={css(mono, { w: { md: '220px' }, flexShrink: 0, fontSize: { base: '10px', md: '12px' } })}>{t.earlierRange}</span>
          <div className={css({ flex: 1 })}>
            <h3 className={css({ fontFamily: 'heading', fontWeight: '600', fontSize: '20px', mb: '1' })}>{t.earlierTitle}</h3>
            <ul>
              {t.earlier.map((e) => (
                <li key={e.company} className={css({ display: 'flex', flexDir: { base: 'column', md: 'row' }, gap: { base: '1', md: '6' }, py: '3.5', borderBottom: '1px solid token(colors.line)' })}>
                  <div className={css({ w: { md: '220px' }, flexShrink: 0 })}>
                    <div className={css({ fontSize: '15px', fontWeight: '500' })}>{e.company}</div>
                    <div className={css({ fontSize: '14px', color: 'fg2' })}>{e.role}</div>
                  </div>
                  <p className={css({ flex: 1, fontSize: '14px', color: 'fg3' })}>{e.summary}</p>
                  <span className={css(mono, { fontSize: '11px' })}>{e.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ol>
    </Section>
  )
}
