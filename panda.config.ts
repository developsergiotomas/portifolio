import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',
  globalCss: {
    'html, body': {
      bg: 'bg',
      color: 'fg',
      fontFamily: 'body',
      WebkitFontSmoothing: 'antialiased',
    },
    html: { scrollBehavior: 'smooth', scrollPaddingTop: '88px' },
    '::selection': { bg: 'accent', color: 'accentInk' },
    'a:focus-visible, button:focus-visible': { outline: '2px solid token(colors.accent)', outlineOffset: '3px' },
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          bg: { value: '#0B0F14' },
          bgRaised: { value: '#121820' },
          line: { value: '#222B36' },
          lineStrong: { value: '#3A4654' },
          fg: { value: '#F2F5F8' },
          fg2: { value: '#A7B1BD' },
          fg3: { value: '#6B7684' },
          accent: { value: '#5AB4FF' },
          accentInk: { value: '#06121F' },
          accentSoft: { value: '#0F2236' },
          tile: { value: '#F2F5F8' },
          grid: { value: '#131B24' },
        },
        fonts: {
          heading: { value: "var(--font-heading), system-ui, sans-serif" },
          body: { value: "var(--font-body), system-ui, sans-serif" },
          mono: { value: "var(--font-mono), ui-monospace, monospace" },
        },
      },
      keyframes: {
        marqueeLeft: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        marqueeRight: { from: { transform: 'translateX(-50%)' }, to: { transform: 'translateX(0)' } },
      },
    },
  },
})
