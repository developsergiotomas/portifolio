'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { detectLang } from '../../i18n/detect'

export function LanguageRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace(`/${detectLang(navigator.languages ?? [navigator.language])}/`)
  }, [router])
  return null
}
