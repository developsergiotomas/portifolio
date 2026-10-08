import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { isLang, LANGS, messages } from '../../i18n/messages'
import { alternates, htmlLang, SITE_URL } from '../../i18n/metadata'
import { fontVariables } from '../fonts'
import '../globals.css'

type Props = { children: ReactNode; params: Promise<{ lang: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const { meta } = messages[lang]
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: '%s — Sergio Tomas' },
    description: meta.description,
    alternates: alternates(lang),
    openGraph: { type: 'website', locale: lang === 'pt' ? 'pt_BR' : 'en_US', title: meta.title, description: meta.description, images: ['/profile.jpg'] },
    manifest: '/manifest.json',
    authors: [{ name: 'Sergio Tomas', url: SITE_URL }],
    twitter: { card: 'summary', title: meta.title, description: meta.description, images: ['/profile.jpg'] },
  }
}

export const viewport: Viewport = { themeColor: '#0B0F14' }

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return (
    <html lang={htmlLang(lang)} className={fontVariables}>
      <head>
        <link rel="alternate" type="text/plain" title="LLM-friendly content" href="/llms.txt" />
      </head>
      <body>{children}</body>
    </html>
  )
}
