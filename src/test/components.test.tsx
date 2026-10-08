import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Marquee } from '../components/Marquee'
import { HomeNav, PageNav } from '../components/Nav'
import { languages } from '../content/technologies'

const pathname = vi.hoisted(() => ({ value: '/en/' }))
vi.mock('next/navigation', () => ({ usePathname: () => pathname.value }))

describe('Marquee', () => {
  it('renders each item once for assistive tech and a hidden copy for the loop', () => {
    render(<Marquee lang="pt" title="Linguagens" items={languages} direction="left" size="lg" />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(languages.length)
    expect(links[0]).toHaveAttribute('href', '/pt/stack/javascript/')
    expect(document.querySelectorAll('li[aria-hidden="true"]')).toHaveLength(languages.length)
    expect(screen.getByRole('heading', { name: /Linguagens · 8/ })).toBeInTheDocument()
  })
})

describe('language toggle', () => {
  it('keeps the current page when switching language', () => {
    pathname.value = '/en/stack/react/'
    render(<PageNav lang="en" />)
    const toggle = screen.getByRole('navigation', { name: 'Language' })
    expect(within(toggle).getByRole('link', { name: 'pt' })).toHaveAttribute('href', '/pt/stack/react/')
    expect(within(toggle).getByRole('link', { name: 'en' })).toHaveAttribute('aria-current', 'true')
  })
})

describe('HomeNav', () => {
  it('opens and closes the mobile menu', async () => {
    pathname.value = '/pt/'
    render(<HomeNav lang="pt" />)
    const button = screen.getByRole('button', { name: 'Abrir menu' })
    expect(button).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(button)
    const menu = document.getElementById('mobile-menu')!
    expect(within(menu).getByRole('link', { name: /Experiência/ })).toHaveAttribute('href', '#experience')

    await userEvent.click(screen.getByRole('button', { name: 'Fechar menu' }))
    expect(document.getElementById('mobile-menu')).toBeNull()
  })
})
