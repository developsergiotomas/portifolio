import { css, cx } from 'styled-system/css'
import { languages, tools } from '../../content/technologies'
import { messages, type Lang } from '../../i18n/messages'
import { Marquee } from '../Marquee'
import { container, mono, monoText, SectionLabel } from '../ui'

export function Stack({ lang }: { lang: Lang }) {
  const t = messages[lang]
  return (
    <>
      <section id="stack" aria-label={t.stack.label} className={css({ bg: 'bgRaised', borderTop: '1px solid token(colors.line)', pt: { base: '14', lg: '30' }, pb: { base: '2', lg: '6' }, display: 'flex', flexDir: 'column', gap: { base: '9', lg: '14' } })}>
        <div className={cx(container, css({ display: 'flex', flexDir: 'column', gap: { base: '3', lg: '4' } }))}>
          <SectionLabel index="03" title={t.stack.label} />
          <h2 className={css({ fontFamily: 'heading', fontWeight: '500', fontSize: { base: '24px', md: '34px' }, letterSpacing: '-0.015em' })}>{t.stack.lead}</h2>
        </div>
        <div className={css({ maxW: '1440px', w: 'full', mx: 'auto', display: 'flex', flexDir: 'column', gap: { base: '9', lg: '14' } })}>
          <Marquee lang={lang} title={t.stack.languages} items={languages} direction="left" size="lg" secondsPerItem={4} />
          <Marquee lang={lang} title={t.stack.tools} items={tools} direction="right" size="md" />
        </div>
        <p className={cx(container, css(mono, { fontSize: '10px' }))}>{t.stack.hint}</p>
      </section>
      <section aria-label={t.skills.label} className={css({ bg: 'bgRaised', borderBottom: '1px solid token(colors.line)', pt: { base: '6', lg: '14' }, pb: { base: '14', lg: '30' } })}>
        <div className={cx(container, css({ display: 'flex', flexDir: { base: 'column', lg: 'row' }, gap: { base: '7', lg: '20' } }))}>
          <div className={css({ w: { lg: '280px' }, flexShrink: 0 })}>
            <SectionLabel index="↳" title={t.skills.label} />
          </div>
          <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: { base: '7', lg: '12' } })}>
            <h3 className={css({ fontFamily: 'heading', fontWeight: '500', fontSize: { base: '22px', md: '34px' }, letterSpacing: '-0.015em' })}>{t.skills.lead}</h3>
            <dl>
              {t.skills.rows.map(([k, v], i) => {
                const ai = i === t.skills.rows.length - 1
                return (
                  <div key={k} className={css({ display: 'flex', flexDir: { base: 'column', md: 'row' }, gap: { base: '1.5', md: '8' }, py: { base: '4', md: '5.5' }, borderTop: '1px solid token(colors.line)' })}>
                    <dt className={css({ w: { md: '220px' }, flexShrink: 0, display: 'flex', alignItems: 'center', gap: '2.5', fontFamily: 'heading', fontWeight: '600', fontSize: { base: '15px', md: '17px' }, color: ai ? 'accent' : 'fg', alignSelf: 'flex-start' })}>
                      {ai && <span aria-hidden="true" className={css({ w: '2', h: '2', bg: 'accent' })} />}
                      {k}
                    </dt>
                    <dd className={css({ fontSize: { base: '14px', md: '16px' }, lineHeight: '1.6', color: 'fg2' })}>{v}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
