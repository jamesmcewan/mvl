import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Details from '../src/components/Details'

const mockCreators = {
  items: [
    {
      name: 'John Doe',
      role: 'Author',
    },
  ],
}

describe('Details', () => {
  it('should have the correct comic details', () => {
    const { getByText } = render(
      <Details title="Amazing Mighty Uncanny" creators={mockCreators} />,
    )
    expect(getByText(/Amazing Mighty Uncanny/i)).toBeInTheDocument()
    expect(getByText(/John Doe/i)).toBeInTheDocument()
    expect(getByText(/Author/i)).toBeInTheDocument()
  })
})
