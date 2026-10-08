import { css, cx } from 'styled-system/css'
import { CONTACT, messages, type Lang } from '../../i18n/messages'
import { container, Icon, mono, monoText, SectionLabel } from '../ui'

export function Contact({ lang }: { lang: Lang }) {
  const t = messages[lang].contact
  const channels = [
    { icon: 'linkedin', label: t.linkedin, value: CONTACT.linkedinLabel, href: CONTACT.linkedin },
    { icon: 'phone', label: t.phone, value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: 'mapPin', label: t.location, value: t.locationValue },
  ] as const

  return (
    <section id="contact" aria-label={t.label} className={css({ py: { base: '14', lg: '30' } })}>
      <div className={cx(container, css({ display: 'flex', flexDir: { base: 'column', lg: 'row' }, gap: { base: '7', lg: '20' } }))}>
        <div className={css({ w: { lg: '280px' }, flexShrink: 0 })}>
          <SectionLabel index="04" title={t.label} />
        </div>
        <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: { base: '7', lg: '10' } })}>
          <h2 className={css({ fontFamily: 'heading', fontWeight: '600', fontSize: { base: '34px', md: '44px', xl: '56px' }, lineHeight: '1.05', letterSpacing: '-0.025em', textWrap: 'balance' })}>{t.headline}</h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className={css({ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '3.5', pb: '2.5', borderBottom: '1px solid token(colors.accent)', color: 'accent', fontFamily: 'heading', fontWeight: '500', fontSize: { base: '19px', md: '28px' }, wordBreak: 'break-all', _hover: { borderBottomWidth: '2px' } })}
          >
            {CONTACT.email}
            <Icon name="arrowUpRight" size={24} />
          </a>
          <ul className={css({ display: 'flex', flexDir: { base: 'column', md: 'row' }, gap: { base: '4', md: '10' } })}>
            {channels.map((c) => {
              const body = (
                <>
                  <span className={css({ color: 'fg2' })}>
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className={css({ display: 'flex', flexDir: 'column', gap: '0.5' })}>
                    <span className={css(mono, { fontSize: '10px' })}>{c.label}</span>
                    <span className={css({ fontSize: { base: '14px', md: '15px' } })}>{c.value}</span>
                  </span>
                </>
              )
              const row = css({ display: 'flex', alignItems: 'center', gap: '3' })
              return (
                <li key={c.icon}>
                  {'href' in c ? (
                    <a href={c.href} className={cx(row, css({ _hover: { color: 'accent' } }))} {...(c.icon === 'linkedin' ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      {body}
                    </a>
                  ) : (
                    <span className={row}>{body}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Footer({ lang, className }: { lang: Lang; className?: string }) {
  return (
    <footer className={cx(container, className)}>
      <div className={css({ display: 'flex', flexDir: { base: 'column', md: 'row' }, gap: '2', justifyContent: 'space-between', py: { base: '5', md: '7' }, borderTop: '1px solid token(colors.line)' })}>
        <span className={css(mono, { fontSize: '11px' })}>© {new Date().getFullYear()} Sergio Tomas</span>
        <span className={css(mono, { fontSize: '11px' })}>{messages[lang].contact.builtWith}</span>
      </div>
    </footer>
  )
}
