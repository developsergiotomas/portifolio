import { Geist_Mono, Inter, Space_Grotesk } from 'next/font/google'

const heading = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-heading', display: 'swap' })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono', display: 'swap' })

export const fontVariables = `${heading.variable} ${body.variable} ${mono.variable}`
