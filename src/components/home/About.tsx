import { css } from 'styled-system/css'
import { messages, type Lang } from '../../i18n/messages'
import { Icon, monoText, Section } from '../ui'

export function About({ lang }: { lang: Lang }) {
  const t = messages[lang].about
  return (
    <Section id="about" index="01" title={t.label}>
      <div className={css({ display: 'flex', flexDir: 'column', gap: { base: '7', lg: '14' } })}>
        <p className={css({ fontFamily: 'heading', fontWeight: '500', fontSize: { base: '22px', md: '28px', xl: '34px' }, lineHeight: '1.3', letterSpacing: '-0.015em' })}>{t.lead}</p>
        <div className={css({ display: 'flex', flexDir: { base: 'column', lg: 'row' }, gap: { base: '7', lg: '14' } })}>
          <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4', alignItems: 'flex-start' })}>
            <h2 className={css({ fontFamily: 'heading', fontWeight: '600', fontSize: { base: '16px', md: '20px' }, color: 'accent', border: '1px solid token(colors.accent)', px: '3', py: '1.5' })}>
              {t.aiPhrase}
            </h2>
            <p className={css({ fontSize: { base: '15px', md: '16px' }, lineHeight: '1.6', color: 'fg2' })}>{t.aiText}</p>
          </div>
          <div className={css({ w: { lg: '420px' } })}>
            <h3 className={monoText} style={{ fontSize: 11 }}>
              {t.groundedIn}
            </h3>
            <ul>
              {t.fundamentals.map((f) => (
                <li key={f} className={css({ display: 'flex', alignItems: 'center', gap: '3', py: { base: '3', md: '3.5' }, borderBottom: '1px solid token(colors.line)', fontSize: { base: '14px', md: '15px' } })}>
                  <span className={css({ color: 'accent' })}>
                    <Icon name="check" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
