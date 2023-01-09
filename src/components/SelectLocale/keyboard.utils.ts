import type { ILocaleOption } from './options'
import type { KeyboardEvent } from 'react'

export const handleListKeyDown = (
  e: KeyboardEvent<HTMLUListElement>,
  toggleMenu: () => void,
  activeIndex: number,
  options: ILocaleOption[],
  handleIndex: (index: number) => void
) => {
  if (
    e.key === ' ' ||
    e.key === 'Tab' ||
    e.key === 'Enter' ||
    e.key === 'Escape'
  ) {
    e.preventDefault()
    toggleMenu()
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex < options.length - 1
      ? handleIndex(activeIndex + 1)
      : handleIndex(0)
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex > 0
      ? handleIndex(activeIndex - 1)
      : handleIndex(options.length - 1)
  }
}

export const handleInputKeyDown = (
  e: KeyboardEvent<HTMLDivElement>,
  toggleMenu: () => void
) => {
  if (
    e.key === ' ' ||
    e.key === 'Enter' ||
    e.key === 'ArrowUp' ||
    e.key === 'ArrowDown'
  ) {
    e.preventDefault()
    toggleMenu()
  }
}
