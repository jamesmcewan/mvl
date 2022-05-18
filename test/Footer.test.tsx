import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../src/components/Footer'

describe('Footer', () => {
  it('should have the correct copyright attribution', () => {
    const { getByText } = render(<Footer />)
    expect(getByText(/Marvel/i)).toBeInTheDocument()
  })
})
