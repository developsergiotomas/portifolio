import type { ReactNode } from 'react'
import { fontVariables } from '../fonts'
import '../globals.css'

export const metadata = { title: 'Sergio Tomas — Software Architect' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  )
}
