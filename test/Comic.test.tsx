import { render } from '@testing-library/react'
import { mockCreators, mockThumbnail } from './__mocks__'
import Comic from '../src/components/Comic'

describe('Comic', () => {
  it('should have the correct comic details', () => {
    const { getByText } = render(
      <Comic
        id={1}
        title="Amazing Mighty Uncanny"
        creators={mockCreators}
        thumbnail={mockThumbnail}
      />,
    )
    expect(getByText(/Amazing Mighty Uncanny/i)).toBeInTheDocument()
    expect(getByText(/John Doe/i)).toBeInTheDocument()
    expect(getByText(/Author/i)).toBeInTheDocument()
  })

  it('should have the correct thumbnail', () => {
    const { getByAltText } = render(
      <Comic
        id={1}
        title="Amazing Mighty Uncanny"
        creators={mockCreators}
        thumbnail={mockThumbnail}
      />,
    )
    expect(getByAltText('Amazing Mighty Uncanny')).toBeInTheDocument()
    expect(getByAltText('Amazing Mighty Uncanny')).toHaveAttribute(
      'src',
      'comicbook.jpg',
    )
  })
})
