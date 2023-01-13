import { render } from '@solidjs/testing-library'
import { mockCreators } from './__mocks__'
import Details from '../src/components/Details'

describe('Details', () => {
  it('should have the correct comic details', () => {
    const { getByText } = render(() => (
      <Details title="Amazing Mighty Uncanny" creators={mockCreators} />
    ))
    expect(getByText(/Amazing Mighty Uncanny/i)).toBeInTheDocument()
    expect(getByText(/John Doe/i)).toBeInTheDocument()
    expect(getByText(/Author/i)).toBeInTheDocument()
  })
})
