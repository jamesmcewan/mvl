import { render } from '@solidjs/testing-library'
import { mockComics } from './__mocks__'
import Comics from '../src/components/Comics'

describe('Comics', () => {
  it('should have the correct comics details', () => {
    const { getByText } = render(() => <Comics comics={mockComics} />)
    expect(getByText(/Amazing Mighty Uncanny/i)).toBeInTheDocument()
    expect(getByText(/John Doe/i)).toBeInTheDocument()
    expect(getByText(/Author/i)).toBeInTheDocument()
    expect(getByText(/Mystery Daring Strange/i)).toBeInTheDocument()
    expect(getByText(/Jane Doe/i)).toBeInTheDocument()
    expect(getByText(/Penciler/i)).toBeInTheDocument()
  })

  it('should have the correct thumbnail', () => {
    const { getByAltText } = render(() => <Comics comics={mockComics} />)
    expect(getByAltText('Amazing Mighty Uncanny')).toBeInTheDocument()
    expect(getByAltText('Amazing Mighty Uncanny')).toHaveAttribute(
      'src',
      'silver-age.jpg',
    )
    expect(getByAltText('Mystery Daring Strange')).toBeInTheDocument()
    expect(getByAltText('Mystery Daring Strange')).toHaveAttribute(
      'src',
      'golden-age.jpg',
    )
  })
})
