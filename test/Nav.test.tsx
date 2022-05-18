import { render } from '@testing-library/react'
import { mockWeek } from './__mocks__'
import Nav from '../src/components/Nav'

describe('Nav', () => {
  it('should display the correct week', () => {
    const { queryByText } = render(<Nav week={mockWeek} />)
    expect(queryByText(/Comic releases for this week/i)).toBeInTheDocument()
    expect(queryByText(/Comic releases for next week/i)).not.toBeInTheDocument()
    expect(queryByText(/Comic releases for last week/i)).not.toBeInTheDocument()
  })
})
