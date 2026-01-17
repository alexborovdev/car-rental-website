import { useEffect, useState } from 'react'

export const MEDIA_QUERIES = {
  laptop: '1439.98px',
  tablet: '1023.98px',
  mobile: '767.98px',
  mobileS: '479.98px',
} as const

type MediaQuery = typeof MEDIA_QUERIES[keyof typeof MEDIA_QUERIES]

export const useMediaQuery = (query: MediaQuery) => {
  const mediaQuery = `(min-width: ${query})`

  const [matches, setMatches] = useState(() =>
    window.matchMedia(mediaQuery).matches
  )

  useEffect(() => {
    const media = window.matchMedia(mediaQuery)

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [mediaQuery])

  return matches
}