import { css } from 'styled-system/css'
import { LanguageRedirect } from './LanguageRedirect'

/** Static export has no middleware, so the browser picks the language. */
export default function RootPage() {
  return (
    <main className={css({ minH: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'mono', fontSize: '13px', color: 'fg3' })}>
      <LanguageRedirect />
      <p>
        <a href="/en/">English</a> · <a href="/pt/">Português</a>
      </p>
    </main>
  )
}
