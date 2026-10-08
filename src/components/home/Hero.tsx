import { css, cx } from 'styled-system/css'
import { messages, type Lang } from '../../i18n/messages'
import { container, Icon, mono, monoText } from '../ui'

const node = (highlight?: boolean) =>
  css({
    display: 'flex',
    flexDir: 'column',
    gap: '1.5',
    px: '4',
    py: '3.5',
    bg: highlight ? 'accentSoft' : 'bgRaised',
    border: '1px solid',
    borderColor: highlight ? 'accent' : 'lineStrong',
  })

function DiagramNode({ tag, title, sub, highlight, className }: { tag: string; title: string; sub: string; highlight?: boolean; className?: string }) {
  return (
    <div className={cx(node(highlight), className)}>
      <span className={css(mono, { fontSize: '10px', color: highlight ? 'accent' : 'fg3' })}>{tag}</span>
      <span className={css({ fontFamily: 'heading', fontSize: '17px', fontWeight: '600' })}>{title}</span>
      <span className={css({ fontFamily: 'mono', fontSize: '11px', color: 'fg2' })}>{sub}</span>
    </div>
  )
}

const vLine = css({ w: '1px', h: '10', bg: 'lineStrong' })

/** The "Fig. 01" architecture sketch — decorative summary of the stack layers. */
function SystemDiagram({ lang }: { lang: Lang }) {
  const t = messages[lang].hero
  const [client, api, ai, data, cloud] = t.diagram
  return (
    <figure aria-label={t.figure} className={css({ display: { base: 'none', lg: 'flex' }, flexDir: 'column', w: '480px', flexShrink: 0 })}>
      <figcaption className={css(mono, { fontSize: '11px', mb: '5' })}>{t.figure}</figcaption>
      <DiagramNode {...client} />
      <div className={css({ display: 'flex', justifyContent: 'center' })}>
        <span className={vLine} />
      </div>
      <div className={css({ display: 'flex', alignItems: 'center' })}>
        <DiagramNode {...api} className={css({ w: '300px' })} />
        <span className={css({ w: '6', h: '1px', bg: 'lineStrong' })} />
        <DiagramNode {...ai} highlight className={css({ flex: 1 })} />
      </div>
      <div className={css({ w: '300px', display: 'flex', justifyContent: 'center' })}>
        <span className={vLine} />
      </div>
      <DiagramNode {...data} className={css({ w: '300px' })} />
      <div className={css({ w: '300px', display: 'flex', justifyContent: 'center' })}>
        <span className={vLine} />
      </div>
      <DiagramNode {...cloud} />
    </figure>
  )
}

export function Hero({ lang }: { lang: Lang }) {
  const t = messages[lang].hero
  return (
    <section
      className={css({
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid token(colors.line)',
        backgroundImage:
          'linear-gradient(token(colors.grid) 1px, transparent 1px), linear-gradient(90deg, token(colors.grid) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        backgroundPosition: '-1px -1px',
      })}
    >
      <div className={cx(container, css({ display: 'flex', justifyContent: 'space-between', gap: '16', pt: { base: '10', lg: '24' }, pb: { base: '12', lg: '24' } }))}>
        <div className={css({ display: 'flex', flexDir: 'column', gap: { base: '7', lg: '11' }, maxW: '700px' })}>
          <div className={css({ display: 'flex', alignItems: 'center', gap: { base: '3.5', md: '4' } })}>
            <img
              src="/profile.jpg"
              alt="Sergio Tomas"
              width={80}
              height={80}
              className={css({ w: { base: '16', md: '20' }, h: { base: '16', md: '20' }, objectFit: 'cover', border: '1px solid token(colors.lineStrong)' })}
            />
            <div className={css({ display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <span className={css({ fontFamily: 'heading', fontSize: { base: '18px', md: '20px' }, fontWeight: '600' })}>Sergio Tomas</span>
              <span className={css(mono, { fontSize: { base: '10px', md: '12px' } })}>{t.location}</span>
            </div>
          </div>
          <div className={css({ display: 'flex', flexDir: 'column', gap: '6' })}>
            <p className={css(mono, { color: 'accent', fontSize: { base: '10px', md: '12px' } })}>{t.eyebrow}</p>
            <h1 className={css({ fontFamily: 'heading', fontWeight: '600', fontSize: { base: '38px', md: '52px', xl: '62px' }, lineHeight: '1.04', letterSpacing: '-0.025em', textWrap: 'balance' })}>
              {t.headline}
            </h1>
            <p className={css({ fontSize: { base: '16px', md: '18px' }, lineHeight: '1.55', color: 'fg2', maxW: '610px' })}>{t.subhead}</p>
          </div>
          <div className={css({ display: 'flex', flexDir: { base: 'column', sm: 'row' }, gap: { base: '3', sm: '4' } })}>
            <a
              href="#experience"
              className={css({ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '2.5', px: '6', py: '4', bg: 'accent', color: 'accentInk', fontWeight: '600', fontSize: '15px', transition: 'filter 0.15s', _hover: { filter: 'brightness(1.1)' } })}
            >
              {t.primary}
              <Icon name="arrowDown" />
            </a>
            <a
              href={t.cvFile}
              download
              className={css({ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '2.5', px: '6', py: '4', border: '1px solid token(colors.lineStrong)', fontWeight: '500', fontSize: '15px', transition: 'border-color 0.15s', _hover: { borderColor: 'fg' } })}
            >
              <Icon name="fileDown" />
              {t.secondary}
            </a>
          </div>
          <dl className={css({ display: 'flex', justifyContent: 'space-between', pt: '5', borderTop: '1px solid token(colors.line)', maxW: { lg: '480px' }, lg: { display: 'none' } })}>
            {t.stats.map(([value, label]) => (
              <div key={label} className={css({ display: 'flex', flexDir: 'column-reverse', gap: '0.5' })}>
                <dt className={css(mono, { fontSize: '10px' })}>{label}</dt>
                <dd className={css({ fontFamily: 'heading', fontSize: '26px', fontWeight: '600' })}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={css({ display: { base: 'none', lg: 'flex' }, flexDir: 'column', gap: '5' })}>
          <SystemDiagram lang={lang} />
          <dl className={css({ display: 'flex', justifyContent: 'space-between', pt: '5', borderTop: '1px solid token(colors.line)' })}>
            {t.stats.map(([value, label]) => (
              <div key={label} className={css({ display: 'flex', flexDir: 'column-reverse', gap: '0.5' })}>
                <dt className={css(mono, { fontSize: '10px' })}>{label}</dt>
                <dd className={css({ fontFamily: 'heading', fontSize: '28px', fontWeight: '600' })}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
