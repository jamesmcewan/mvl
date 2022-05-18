import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from '../src/components/Nav'

describe('Nav', () => {
  it('should display the correct week', () => {
    const { queryByText } = render(<Nav week="this" />)
    expect(queryByText(/Comic releases for this week/i)).toBeInTheDocument()
    expect(queryByText(/Comic releases for next week/i)).not.toBeInTheDocument()
    expect(queryByText(/Comic releases for last week/i)).not.toBeInTheDocument()
  })
})
