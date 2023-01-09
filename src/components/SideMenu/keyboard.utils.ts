import { RefObject } from 'react'

export const handleKeyPress = (
  e: KeyboardEvent,
  closeMenu: () => void,
  buttonWhatsappRef: RefObject<HTMLAnchorElement>,
  buttonCloseRef: RefObject<HTMLButtonElement>
) => {
  if (e.key === 'Escape') {
    e.preventDefault()
    closeMenu()
  }
  if (
    !e.shiftKey &&
    e.key === 'Tab' &&
    e.target === buttonWhatsappRef.current
  ) {
    e.preventDefault()
    buttonCloseRef.current?.focus()
  }
  if (e.shiftKey && e.key === 'Tab' && e.target === buttonCloseRef.current) {
    e.preventDefault()
    buttonWhatsappRef.current?.focus()
  }
}
