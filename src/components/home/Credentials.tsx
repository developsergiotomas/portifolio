import { css, cx } from 'styled-system/css'
import { messages, type Lang } from '../../i18n/messages'
import { container, mono, monoText } from '../ui'

export function Credentials({ lang }: { lang: Lang }) {
  const t = messages[lang].credentials
  const heading = css(mono, { fontSize: '11px', mb: { base: '2', md: '5' } })
  const primary = css({ fontSize: { base: '14px', md: '15px' }, fontWeight: '500', lineHeight: '1.45' })
  const secondary = css({ fontFamily: 'mono', fontSize: '12px', color: 'fg3' })
  return (
    <section aria-label={t.education} className={css({ borderBottom: '1px solid token(colors.line)', py: { base: '14', lg: '24' } })}>
      <div className={cx(container, css({ display: 'flex', gap: '20' }))}>
        <div className={css({ w: '280px', flexShrink: 0, display: { base: 'none', lg: 'block' } })} />
        <div className={css({ flex: 1, display: 'grid', gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' }, gap: { base: '8', md: '12' } })}>
          <div>
            <h2 className={heading}>{t.education}</h2>
            <p className={primary}>{t.degree}</p>
            <p className={secondary}>{t.degreeYears}</p>
          </div>
          <div>
            <h2 className={heading}>{t.certifications}</h2>
            <ul className={css({ display: 'flex', flexDir: 'column', gap: { base: '1.5', md: '5' } })}>
              {t.certs.map((c) => (
                <li key={c} className={primary}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={heading}>{t.languages}</h2>
            <ul className={css({ display: 'flex', flexDir: 'column', gap: { base: '1.5', md: '5' } })}>
              {t.spoken.map(([name, level]) => (
                <li key={name}>
                  <p className={primary}>{name}</p>
                  <p className={secondary}>{level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
