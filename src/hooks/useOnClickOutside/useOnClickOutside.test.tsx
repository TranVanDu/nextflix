import { type RefObject } from 'react'
import { render, screen, renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useOnClickOutside } from '.'

describe('useOnClickOutside', () => {
  it('calls handler function when a click outside of the element is simulated', async () => {
    const user = userEvent.setup()
    const handler = jest.fn()
    const ref = { current: null } as RefObject<HTMLDivElement>
    const TestComponent = () => {
      useOnClickOutside(ref, handler)
      return (
        <>
          <div>Outside Element</div>
          <div ref={ref}>Ref Element</div>
        </>
      )
    }
    render(<TestComponent />)

    await user.click(screen.getByText(/Outside Element/i))

    expect(handler).toHaveBeenCalled()
  })

  it('does not call handler function when a click inside the element is simulated', async () => {
    const user = userEvent.setup()
    const handler = jest.fn()
    const ref = { current: null } as RefObject<HTMLDivElement>
    const TestComponent = () => {
      useOnClickOutside(ref, handler)
      return (
        <>
          <div>Outside Element</div>
          <div ref={ref}>Ref Element</div>
        </>
      )
    }
    render(<TestComponent />)

    await user.click(screen.getByText(/Ref Element/i))

    expect(handler).not.toHaveBeenCalled()
  })

  it('correctly handles a null ref', async () => {
    const user = userEvent.setup()
    const handler = jest.fn()
    const ref = { current: null } as RefObject<HTMLDivElement>
    const TestComponent = () => {
      useOnClickOutside(ref, handler)
      return (
        <>
          <div>Outside Element</div>
          <div>Ref Element</div>
        </>
      )
    }
    render(<TestComponent />)

    await user.click(screen.getByText(/Ref Element/i))

    expect(handler).not.toHaveBeenCalled()
  })

  it('removes event listener when component unmounts', async () => {
    jest.spyOn(window, 'removeEventListener')
    const handler = jest.fn()
    const ref = { current: null } as RefObject<HTMLDivElement>
    const { unmount } = renderHook(() => useOnClickOutside(ref, handler))

    unmount()

    expect(removeEventListener).toHaveBeenCalledTimes(1)
  })
})
