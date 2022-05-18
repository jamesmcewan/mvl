import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Comics from '../src/components/Comics'

const mockComics = [
  {
    id: 1,
    title: 'Mystery Daring Strange',
    thumbnail: {
      path: 'golden-age',
      extension: 'jpg',
    },
    creators: {
      items: [
        {
          name: 'Jane Doe',
          role: 'Author',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Amazing Mighty Uncanny',
    thumbnail: {
      path: 'silver-age',
      extension: 'jpg',
    },
    creators: {
      items: [
        {
          name: 'John Doe',
          role: 'Penciler',
        },
      ],
    },
  },
]

describe('Comics', () => {
  it('should have the correct comics details', () => {
    const { getByText } = render(<Comics comics={mockComics} />)
    expect(getByText(/Amazing Mighty Uncanny/i)).toBeInTheDocument()
    expect(getByText(/John Doe/i)).toBeInTheDocument()
    expect(getByText(/Author/i)).toBeInTheDocument()
    expect(getByText(/Mystery Daring Strange/i)).toBeInTheDocument()
    expect(getByText(/Jane Doe/i)).toBeInTheDocument()
    expect(getByText(/Penciler/i)).toBeInTheDocument()
  })

  it('should have the correct thumbnail', () => {
    const { getByAltText } = render(<Comics comics={mockComics} />)
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
