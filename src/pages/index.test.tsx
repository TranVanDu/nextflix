import { render } from '@testing-library/react'
import Home from './index.page'

describe('<Home />', () => {
  it('should render without errors', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Home Page')).toBeInTheDocument()
  })
})
