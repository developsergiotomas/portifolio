import '@testing-library/jest-dom/vitest'

// Mirror `trailingSlash: true` from next.config.ts, which next/link reads from the build env.
process.env.__NEXT_TRAILING_SLASH = 'true'
