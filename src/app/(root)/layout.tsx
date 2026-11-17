import type { ReactNode } from 'react'
import { SITE_VERIFICATION } from '../../i18n/metadata'
import { fontVariables } from '../fonts'
import '../globals.css'

export const metadata = { title: 'Sergio Tomas — Software Architect', verification: SITE_VERIFICATION }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  )
}
