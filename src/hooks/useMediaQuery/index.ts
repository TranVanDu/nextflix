import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
  const getMatches = (query: string): boolean => {
    return window.matchMedia(query).matches
  }
  const [matches, setMatches] = useState<boolean>()
  const handleChange = () => setMatches(getMatches(query))

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    matchMedia.addListener
      ? matchMedia.addListener(handleChange)
      : matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeListener
        ? matchMedia.removeListener(handleChange)
        : matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
