import { type NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockRouter } from '../../test-utils'
import { SelectLocale } from '.'

const mockOptions = [
  {
    label: 'English',
    flag: '🇺🇸',
    value: 'en'
  },
  {
    label: 'Português',
    flag: '🇧🇷',
    value: 'pt-BR'
  },
  {
    label: 'Español',
    flag: '🇪🇸',
    value: 'es-ES'
  }
]

const SelectLocaleCustomRender = (router?: Partial<NextRouter> | undefined) => {
  return render(
    <RouterContext.Provider value={mockRouter(router)}>
      <SelectLocale options={mockOptions} />
    </RouterContext.Provider>
  )
}

describe('SelectLocale', () => {
  it('should be in the document', () => {
    SelectLocaleCustomRender()

    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-label')
    expect(screen.getByRole('combobox')).toHaveAttribute('tabIndex', '0')
  })

  it('renders the correct selected option based on the router.locale value', () => {
    SelectLocaleCustomRender({ locale: 'pt-BR' })

    expect(screen.getByText(/🇧🇷 português/i)).toBeInTheDocument()
  })

  it('should init with listbox element hidden', () => {
    SelectLocaleCustomRender()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  it('should show listbox when input element is clicked', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('should show options when input element is clicked', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender({ locale: 'es-ES' })

    expect(
      screen.queryByRole('option', { name: /español/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('option', { name: /english/i })
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('combobox'))

    expect(screen.getByRole('option', { name: /español/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /english/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /español/i })).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })

  it('should focus the correct option when open the menu', async () => {
    const waitRAF = () => new Promise(resolve => requestAnimationFrame(resolve))
    const user = userEvent.setup()
    SelectLocaleCustomRender({ locale: 'es-ES' })

    await user.click(screen.getByRole('combobox'))
    await waitRAF()

    expect(screen.getByRole('option', { name: /español/i })).toHaveFocus()
  })

  it('set focus when hover a option', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender({ locale: 'pt-BR' })

    await user.click(screen.getByRole('combobox'))
    await user.hover(screen.getByRole('option', { name: /español/i }))

    expect(screen.getByRole('option', { name: /español/i })).toHaveFocus()
  })

  it('updates the URL and router.locale value when a new option is selected', async () => {
    const user = userEvent.setup()
    const mockRouter = {
      pathname: '/test',
      query: {},
      asPath: '/test',
      push: jest.fn()
    }
    SelectLocaleCustomRender(mockRouter)

    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: /español/i }))

    expect(mockRouter.push).toHaveBeenCalledWith(
      { pathname: mockRouter.pathname, query: mockRouter.query },
      mockRouter.asPath,
      {
        locale: 'es-ES'
      }
    )
  })

  it('should not call router.push when the same option is selected', async () => {
    const user = userEvent.setup()
    const mockRouter = {
      locale: 'es-ES',
      push: jest.fn()
    }
    SelectLocaleCustomRender(mockRouter)

    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: /español/i }))

    expect(mockRouter.push).not.toHaveBeenCalled()
  })

  it('should close the menu when a click occurs outside the component', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    await user.click(document.body)

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('should open the menu when the Enter key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    screen.getByRole('combobox').focus()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.keyboard('[Enter]')

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('should open the menu when the ArrowUp key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    screen.getByRole('combobox').focus()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.keyboard('[ArrowUp]')

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('should open the menu when the ArrowDown key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    screen.getByRole('combobox').focus()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.keyboard('[ArrowDown]')

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('should open the menu when the " " key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    screen.getByRole('combobox').focus()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.keyboard(' ')

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('should close the menu when the Enter key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.click(screen.getByRole('combobox'))
    await user.hover(screen.getByRole('listbox'))

    await user.keyboard('[Enter]')

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('should close the menu when the Escape key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.click(screen.getByRole('combobox'))
    await user.hover(screen.getByRole('listbox'))

    await user.keyboard('[Escape]')

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('should close the menu when the Tab key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.click(screen.getByRole('combobox'))
    await user.hover(screen.getByRole('listbox'))

    await user.keyboard('[Tab]')

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('should close the menu when the " " key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    await user.click(screen.getByRole('combobox'))
    await user.hover(screen.getByRole('listbox'))

    await user.keyboard(' ')

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('should focus the correct option when the ArrowDown key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender()

    await user.click(screen.getByRole('combobox'))
    screen.getByRole('option', { name: /english/i }).focus()
    expect(screen.getByRole('option', { name: /english/i })).toHaveFocus()

    await user.keyboard('[ArrowDown]')
    expect(screen.getByRole('option', { name: /português/i })).toHaveFocus()

    await user.keyboard('[ArrowDown]')
    expect(screen.getByRole('option', { name: /español/i })).toHaveFocus()

    await user.keyboard('[ArrowDown]')
    expect(screen.getByRole('option', { name: /english/i })).toHaveFocus()
  })

  it('should focus the correct option when the ArrowUp key is pressed', async () => {
    const user = userEvent.setup()
    SelectLocaleCustomRender({ locale: 'pt-BR' })

    await user.click(screen.getByRole('combobox'))
    screen.getByRole('option', { name: /português/i }).focus()
    expect(screen.getByRole('option', { name: /português/i })).toHaveFocus()

    await user.keyboard('[ArrowUp]')
    expect(screen.getByRole('option', { name: /english/i })).toHaveFocus()

    await user.keyboard('[ArrowUp]')
    expect(screen.getByRole('option', { name: /español/i })).toHaveFocus()

    await user.keyboard('[ArrowUp]')
    expect(screen.getByRole('option', { name: /português/i })).toHaveFocus()
  })
})
