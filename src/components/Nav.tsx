'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { css, cx } from 'styled-system/css'
import { CONTACT, LANGS, messages, type Lang } from '../i18n/messages'
import { container, Icon } from './ui'

const linkStyle = css({ fontSize: '14px', color: 'fg2', transition: 'color 0.15s', _hover: { color: 'fg' } })
const navBar = css({ position: 'sticky', top: 0, zIndex: 10, bg: 'rgba(11, 15, 20, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid token(colors.line)' })
const navInner = cx(container, css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', h: { base: '60px', md: '84px' } }))

function Brand({ lang }: { lang: Lang }) {
  return (
    <Link href={`/${lang}/`} className={css({ display: 'flex', alignItems: 'center', gap: '2.5' })}>
      <span aria-hidden="true" className={css({ w: '10px', h: '10px', bg: 'accent' })} />
      <span className={css({ fontFamily: 'heading', fontWeight: '700', fontSize: { base: '14px', md: '16px' }, letterSpacing: '0.14em' })}>SERGIO TOMAS</span>
    </Link>
  )
}

function CtaButton({ lang }: { lang: Lang }) {
  return (
    <a
      href={`mailto:${CONTACT.email}`}
      className={css({ display: { base: 'none', md: 'inline-flex' }, alignItems: 'center', gap: '2', px: '18px', py: '10px', border: '1px solid token(colors.fg)', fontSize: '14px', fontWeight: '500', transition: 'all 0.15s', _hover: { bg: 'fg', color: 'bg' } })}
    >
      {messages[lang].nav.cta}
      <Icon name="arrowUpRight" />
    </a>
  )
}

/** Switches language while keeping the current page. */
function LangToggle({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? `/${lang}/`
  const rest = pathname.replace(/^\/(en|pt)(?=\/|$)/, '') || '/'

  return (
    <nav aria-label={messages[lang].nav.language} className={css({ display: 'flex', gap: '2px', p: '2px', border: '1px solid token(colors.lineStrong)' })}>
      {LANGS.map((l) => {
        const active = l === lang
        return (
          <Link
            key={l}
            href={`/${l}${rest}`}
            hrefLang={l === 'pt' ? 'pt-BR' : 'en'}
            aria-current={active ? 'true' : undefined}
            className={css({
              fontFamily: 'mono',
              fontWeight: '600',
              fontSize: { base: '10px', md: '11px' },
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              px: { base: '2', md: '2.5' },
              py: { base: '1', md: '1.5' },
              bg: active ? 'fg' : 'transparent',
              color: active ? 'bg' : 'fg3',
              transition: 'color 0.15s',
              _hover: { color: active ? 'bg' : 'fg' },
            })}
          >
            {l}
          </Link>
        )
      })}
    </nav>
  )
}

export function HomeNav({ lang }: { lang: Lang }) {
  const t = messages[lang]
  const [open, setOpen] = useState(false)
  const items = [
    ['01', t.nav.about, 'about'],
    ['02', t.nav.experience, 'experience'],
    ['03', t.nav.stack, 'stack'],
    ['04', t.nav.contact, 'contact'],
  ] as const

  return (
    <header className={navBar}>
      <div className={navInner}>
        <Brand lang={lang} />
        <nav aria-label={t.nav.menu} className={css({ display: { base: 'none', lg: 'flex' }, gap: '10' })}>
          {items.map(([n, label, id]) => (
            <a key={id} href={`#${id}`} className={cx(linkStyle, css({ display: 'flex', gap: '1.5', alignItems: 'baseline' }))}>
              <span className={css({ fontFamily: 'mono', fontSize: '11px', color: 'fg3' })}>{n}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className={css({ display: 'flex', alignItems: 'center', gap: { base: '3.5', md: '4' } })}>
          <LangToggle lang={lang} />
          <CtaButton lang={lang} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.menu}
            onClick={() => setOpen((o) => !o)}
            className={css({ display: { base: 'inline-flex', lg: 'none' }, color: 'fg', cursor: 'pointer' })}
          >
            <Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label={t.nav.menu} className={css({ display: { lg: 'none' }, borderTop: '1px solid token(colors.line)', bg: 'bg' })}>
          <ul className={cx(container, css({ py: '2' }))}>
            {items.map(([n, label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className={css({ display: 'flex', gap: '3', py: '3.5', fontSize: '16px', borderBottom: '1px solid token(colors.line)' })}>
                  <span className={css({ fontFamily: 'mono', fontSize: '12px', color: 'accent' })}>{n}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export function PageNav({ lang }: { lang: Lang }) {
  return (
    <header className={navBar}>
      <div className={navInner}>
        <Brand lang={lang} />
        <Link href={`/${lang}/#stack`} className={cx(linkStyle, css({ display: { base: 'none', md: 'flex' }, alignItems: 'center', gap: '2' }))}>
          <Icon name="arrowLeft" />
          {messages[lang].nav.back}
        </Link>
        <div className={css({ display: 'flex', alignItems: 'center', gap: '4' })}>
          <LangToggle lang={lang} />
          <CtaButton lang={lang} />
        </div>
      </div>
    </header>
  )
}
