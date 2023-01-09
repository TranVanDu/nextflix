import { type NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockRouter } from '../../test-utils'
import { Header } from '.'

const HeaderCustomRender = (
  isMenuOpen: boolean,
  openMenu: () => null,
  router?: Partial<NextRouter> | undefined
) => {
  return render(
    <RouterContext.Provider value={mockRouter(router)}>
      <Header isMenuOpen={isMenuOpen} openMenu={openMenu} />
    </RouterContext.Provider>
  )
}

describe('Header', () => {
  it('should be in the document', () => {
    HeaderCustomRender(false, () => null)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAttribute('aria-label')
  })
  it('opens the navigation menu when the button is clicked', async () => {
    const user = userEvent.setup()
    const isMenuOpen = false
    const openMenu = jest.fn()
    HeaderCustomRender(isMenuOpen, openMenu)

    await user.click(screen.getByRole('button'))

    expect(openMenu).toHaveBeenCalled()
  })
})
