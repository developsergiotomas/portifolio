import { About } from '../../components/home/About'
import { Contact, Footer } from '../../components/home/Contact'
import { Credentials } from '../../components/home/Credentials'
import { Experience } from '../../components/home/Experience'
import { Hero } from '../../components/home/Hero'
import { Stack } from '../../components/home/Stack'
import { JsonLd } from '../../components/JsonLd'
import { HomeNav } from '../../components/Nav'
import { homeJsonLd } from '../../seo/structuredData'
import { isLang, type Lang } from '../../i18n/messages'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : 'en'
  return (
    <>
      <JsonLd data={homeJsonLd(lang)} />
      <HomeNav lang={lang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Stack lang={lang} />
        <Credentials lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
