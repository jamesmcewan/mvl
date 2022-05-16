import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../src/components/Footer/Footer'

describe('Footer', () => {
  it('should have the correct copyright attribution', () => {
    render(<Footer />)
    expect(screen.getByText(/Marvel/i)).toBeInTheDocument()
  })
})
