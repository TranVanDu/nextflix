import { type RefObject, useEffect } from 'react'

export const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const el = ref?.current

      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler()
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [ref, handler])
}
