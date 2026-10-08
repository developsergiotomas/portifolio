import type { ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { logoSrc } from '../content/technologies'

/** Small uppercase mono caption. Merge with `css(mono, {...})` to override properties. */
export const mono = {
  fontFamily: 'mono',
  fontSize: '12px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'fg3',
} as const

export const monoText = css(mono)

export const container = css({
  w: 'full',
  maxW: '1440px',
  mx: 'auto',
  px: { base: '5', md: '10', xl: '20' },
})

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className={css({ display: 'flex', flexDir: { base: 'row', lg: 'column' }, gap: { base: '2.5', lg: '2' } })}>
      <span className={css(mono, { color: 'accent' })}>{index}</span>
      <span className={css({ fontFamily: 'heading', fontSize: { base: '13px', lg: '14px' }, fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase' })}>
        {title}
      </span>
    </div>
  )
}

type SectionProps = {
  id?: string
  index: string
  title: string
  children: ReactNode
  raised?: boolean
  aside?: ReactNode
  className?: string
}

/** Two-column section: label column on the left (desktop), content on the right. */
export function Section({ id, index, title, children, raised, aside, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className={cx(
        css({ bg: raised ? 'bgRaised' : 'bg', borderBottom: '1px solid token(colors.line)', py: { base: '14', lg: '30' } }),
        className,
      )}
    >
      <div className={cx(container, css({ display: 'flex', flexDir: { base: 'column', lg: 'row' }, gap: { base: '7', lg: '20' } }))}>
        <div className={css({ w: { lg: '280px' }, flexShrink: 0, display: 'flex', flexDir: 'column', gap: '3' })}>
          <SectionLabel index={index} title={title} />
          {aside}
        </div>
        <div className={css({ flex: 1, minW: 0 })}>{children}</div>
      </div>
    </section>
  )
}

export function LogoTile({ slug, size, padding }: { slug: string; size: number; padding: number }) {
  return (
    <span
      className={css({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', bg: 'tile', flexShrink: 0 })}
      style={{ width: size, height: size, padding }}
    >
      <img src={logoSrc(slug)} alt="" width={size - padding * 2} height={size - padding * 2} loading="lazy" className={css({ w: 'full', h: 'full', objectFit: 'contain' })} />
    </span>
  )
}

export function Icon({ name, size = 16 }: { name: keyof typeof ICONS; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

/* Lucide icons (ISC licence), inlined to avoid a dependency for a handful of glyphs. */
const ICONS = {
  arrowUpRight: <path d="M7 7h10v10M7 17 17 7" />,
  arrowDown: <path d="M12 5v14M19 12l-7 7-7-7" />,
  arrowLeft: <path d="m12 19-7-7 7-7M19 12H5" />,
  arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
  check: <path d="M20 6 9 17l-5-5" />,
  fileDown: (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4M12 18v-6M9 15l3 3 3-3" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  mapPin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
}
