import Link from 'next/link'
import { css, cx } from 'styled-system/css'
import type { Tech } from '../content/technologies'
import type { Lang } from '../i18n/messages'
import { Icon, LogoTile, mono } from './ui'

type Size = 'lg' | 'md'

const SIZES = {
  lg: { tile: 60, pad: 10, chipH: 88, gap: '16px' },
  md: { tile: 46, pad: 8, chipH: 64, gap: '12px' },
} as const

type Props = {
  lang: Lang
  title: string
  items: Tech[]
  direction: 'left' | 'right'
  size: Size
  /** Seconds per item; keeps speed consistent between short and long lists. */
  secondsPerItem?: number
}

/**
 * Infinite marquee: the list is rendered twice and the track slides by 50%,
 * so the loop is seamless. Pauses on hover/focus; static and scrollable when
 * the user prefers reduced motion.
 */
export function Marquee({ lang, title, items, direction, size, secondsPerItem = 3.2 }: Props) {
  const s = SIZES[size]
  const duration = `${Math.round(items.length * secondsPerItem)}s`

  const chip = (t: Tech, copy: boolean) => (
    <li key={`${t.slug}-${copy ? 'b' : 'a'}`} aria-hidden={copy || undefined} className={css({ flexShrink: 0 })}>
      <Link
        href={`/${lang}/stack/${t.slug}/`}
        tabIndex={copy ? -1 : undefined}
        className={cx(
          'group',
          css({
            display: 'flex',
            alignItems: 'center',
            gap: size === 'lg' ? '4' : '3',
            pl: size === 'lg' ? '3' : '2',
            pr: size === 'lg' ? '7' : '5',
            bg: 'bg',
            border: '1px solid token(colors.line)',
            transition: 'border-color 0.2s, transform 0.2s',
            _hover: { borderColor: 'accent', transform: 'translateY(-2px)' },
          }),
        )}
        style={{ height: s.chipH }}
      >
        <LogoTile slug={t.slug} size={s.tile} padding={s.pad} />
        <span className={css({ fontWeight: '500', whiteSpace: 'nowrap', fontFamily: size === 'lg' ? 'heading' : 'body', fontSize: size === 'lg' ? { base: '16px', md: '20px' } : { base: '13px', md: '15px' } })}>
          {t.name}
        </span>
        <span className={css({ color: 'fg3', transition: 'color 0.2s', _groupHover: { color: 'accent' } })}>
          <Icon name="arrowUpRight" size={14} />
        </span>
      </Link>
    </li>
  )

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: { base: '3.5', md: '5' } })}>
      <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { base: '5', md: '10', xl: '20' } })}>
        <h3 className={css(mono, { fontSize: '11px', color: 'fg2', fontWeight: '400' })}>
          {title} · {items.length}
        </h3>
        <span aria-hidden="true" className={css(mono, { fontSize: '10px', color: 'accent' })}>
          {direction === 'left' ? '←' : '→'}
        </span>
      </div>
      <div
        className={css({
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          '&:hover ul, &:focus-within ul': { animationPlayState: 'paused' },
          '@media (prefers-reduced-motion: reduce)': { overflowX: 'auto', maskImage: 'none' },
        })}
      >
        <ul
          className={css({
            display: 'flex',
            w: 'max-content',
            py: '1',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            '@media (prefers-reduced-motion: reduce)': { animation: 'none !important', px: '5' },
          })}
          style={{ gap: s.gap, animationName: direction === 'left' ? 'marqueeLeft' : 'marqueeRight', animationDuration: duration }}
        >
          {items.map((t) => chip(t, false))}
          {items.map((t) => chip(t, true))}
        </ul>
      </div>
    </div>
  )
}
