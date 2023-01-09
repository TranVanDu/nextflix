import { renderHook, act } from '@testing-library/react'
import { useMountTransition } from '.'

describe('useMountTransition', () => {
  it('should start with hasTransitionedIn being false', () => {
    const { result } = renderHook(() => useMountTransition(false, 500))

    expect(result.current).toBe(false)
  })

  it('sets hasTransitionedIn to true when isMounted is true', () => {
    const { result } = renderHook(() => useMountTransition(true, 500))

    expect(result.current).toBe(true)
  })

  it(`sets hasTransitionedIn to false after unmountDelay
      when isMounted is false and hasTransitionedIn is true`, () => {
    jest.useFakeTimers()
    const { result } = renderHook(() => useMountTransition(false, 500, true))

    act(() => {
      jest.advanceTimersByTime(600)
    })

    expect(result.current).toBe(false)
  })

  it('calls clearTimeout when component unmounts', () => {
    jest.spyOn(window, 'clearTimeout')
    const { result, unmount } = renderHook(() => useMountTransition(false, 500))
    expect(result.current).toBe(false)

    unmount()

    expect(clearTimeout).toHaveBeenCalledTimes(1)
  })
})
