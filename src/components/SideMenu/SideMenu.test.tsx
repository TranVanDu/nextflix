import { type NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockRouter } from '../../test-utils'
import { SideMenu } from '.'

const SideMenuCustomRender = (
  isMenuOpen: boolean,
  closeMenu: () => null,
  router?: Partial<NextRouter> | undefined
) => {
  return render(
    <RouterContext.Provider value={mockRouter(router)}>
      <SideMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </RouterContext.Provider>
  )
}

describe('SideMenu', () => {
  it('should render the navigation', () => {
    SideMenuCustomRender(true, () => null)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toHaveClass('isOpen')
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-modal', 'true')
  })

  it('should close the menu when the close button is clicked', async () => {
    const user = userEvent.setup()
    const closeMenu = jest.fn()
    SideMenuCustomRender(true, closeMenu)

    await user.click(screen.getByRole('button', { name: /close/i }))

    expect(closeMenu).toHaveBeenCalled()
  })

  it('should display the background overlay', async () => {
    SideMenuCustomRender(true, () => null)

    expect(screen.getByTestId('ovelay-background')).toBeInTheDocument()
    expect(screen.getByTestId('ovelay-background')).toHaveClass('isOpen')
  })

  it('should close the menu when the overlay background is clicked', async () => {
    const user = userEvent.setup()
    const closeMenu = jest.fn()
    SideMenuCustomRender(true, closeMenu)

    await user.click(screen.getByTestId('ovelay-background'))

    expect(closeMenu).toHaveBeenCalled()
  })

  it('should close the menu when link is clicked', async () => {
    const user = userEvent.setup()
    const closeMenu = jest.fn()
    SideMenuCustomRender(true, closeMenu)

    await user.click(screen.getByRole('link', { name: /netflix/i }))

    expect(closeMenu).toHaveBeenCalled()
  })

  it("should apply the aria-current attribute to the current page's link", async () => {
    SideMenuCustomRender(true, () => null, { query: { network: '213' } })

    expect(screen.getByText(/netflix/i)).toHaveAttribute('aria-current', 'page')
  })

  it('should render social links', async () => {
    SideMenuCustomRender(true, () => null)

    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()
  })

  it('should close the menu when the Escape key is pressed', async () => {
    const user = userEvent.setup()
    const closeMenu = jest.fn()
    SideMenuCustomRender(true, closeMenu)

    await user.keyboard('[Escape]')

    expect(closeMenu).toHaveBeenCalled()
  })

  it('should focus the close button when the Tab key is pressed on last link ', async () => {
    const user = userEvent.setup()
    SideMenuCustomRender(true, () => null)

    screen.getByRole('link', { name: /whatsapp/i }).focus()

    await user.tab()

    expect(screen.getByRole('button', { name: /close/i })).toHaveFocus()
  })

  it('should focus the first link when the Tab key is pressed on the close button', async () => {
    const user = userEvent.setup()
    SideMenuCustomRender(true, () => null)

    screen.getByRole('button', { name: /close/i }).focus()

    await user.tab()

    expect(screen.getByRole('link', { name: /amazon/i })).toHaveFocus()
  })

  it('should focus the close button when the Shift+Tab key is pressed on the first link', async () => {
    const user = userEvent.setup()
    SideMenuCustomRender(true, () => null)

    screen.getByRole('link', { name: /amazon/i }).focus()

    await user.tab({ shift: true })

    expect(screen.getByRole('button', { name: /close/i })).toHaveFocus()
  })

  it('should focus the last link when the Shift+Tab key is pressed on the close button', async () => {
    const user = userEvent.setup()
    SideMenuCustomRender(true, () => null)

    screen.getByRole('button', { name: /close/i }).focus()
    await user.tab({ shift: true })

    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveFocus()
  })
})
