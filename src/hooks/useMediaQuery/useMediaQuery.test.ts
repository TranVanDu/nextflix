import { renderHook } from '@testing-library/react'
import mediaQuery from 'css-mediaquery'
import { useMediaQuery } from '.'

const createMatchMedia = (width: number) => (query: string) => ({
  matches: mediaQuery.match(query, { width }),
  media: '',
  addListener: () => {},
  removeListener: () => {},
  onchange: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true
})

describe('useMediaQuery', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(800)
  })
  it('should return true if media query matches', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 800px)'))

    expect(result.current).toBe(true)
  })
  it('should return false if media query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1200px)'))

    expect(result.current).toBe(false)
  })
})
