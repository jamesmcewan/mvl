import { render } from '@solidjs/testing-library'
import Footer from '../src/components/Footer'

describe('Footer', () => {
  it('should have the correct copyright attribution', () => {
    const { getByText } = render(() => <Footer />)
    expect(getByText(/Marvel/i)).toBeInTheDocument()
  })
})
