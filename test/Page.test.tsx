import { render } from '@testing-library/react'
import { mockComics, mockWeek } from './__mocks__'
import Page from '../src/components/Page'

describe('Page', () => {
  it('should display the correct week', () => {
    const { queryByText } = render(<Page comics={mockComics} week={mockWeek} />)
    expect(queryByText(/Comic releases for this week/i)).toBeInTheDocument()
    expect(queryByText(/Comic releases for next week/i)).not.toBeInTheDocument()
    expect(queryByText(/Comic releases for last week/i)).not.toBeInTheDocument()
  })

  it('should have the correct comics details', () => {
    const { getByText } = render(<Page comics={mockComics} week={mockWeek} />)
    expect(getByText(/Amazing Mighty Uncanny/i)).toBeInTheDocument()
    expect(getByText(/John Doe/i)).toBeInTheDocument()
    expect(getByText(/Author/i)).toBeInTheDocument()
    expect(getByText(/Mystery Daring Strange/i)).toBeInTheDocument()
    expect(getByText(/Jane Doe/i)).toBeInTheDocument()
    expect(getByText(/Penciler/i)).toBeInTheDocument()
  })

  it('should have the correct thumbnail', () => {
    const { getByAltText } = render(
      <Page comics={mockComics} week={mockWeek} />,
    )
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
