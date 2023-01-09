import { useEffect, useState } from 'react'

export const useMountTransition = (
  isMounted: boolean,
  unmountDelay: number,
  hasNotTransitionedIn = false
) => {
  const [hasTransitionedIn, setHasTransitionedIn] =
    useState(hasNotTransitionedIn)

  useEffect(() => {
    let timeoutId: any

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true)
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [unmountDelay, isMounted, hasTransitionedIn])

  return hasTransitionedIn
}
