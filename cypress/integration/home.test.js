describe('MVL', () => {
  it('loads the home page', () => {
    cy.visit('/')
  })

  it('loads this weeks comics on the homepage', () => {
    cy.findByText('Comic releases for this week').should('exist')
    cy.findByText('Comic releases for next week').should('not.exist')
    cy.findByText('Comic releases for last week').should('not.exist')
  })

  it('loads this weeks comics on the homepage', () => {
    cy.findByTestId('this-nav').click()
    cy.findByText('Comic releases for this week').should('exist')
    cy.findByText('Comic releases for next week').should('not.exist')
    cy.findByText('Comic releases for last week').should('not.exist')
  })

  it('loads next weeks comics', () => {
    cy.findByTestId('next-nav').click()
    cy.findByText('Comic releases for this week').should('not.exist')
    cy.findByText('Comic releases for next week').should('exist')
    cy.findByText('Comic releases for last week').should('not.exist')
  })

  it('loads next weeks comics', () => {
    cy.findByTestId('last-nav').click()
    cy.findByText('Comic releases for this week').should('not.exist')
    cy.findByText('Comic releases for next week').should('not.exist')
    cy.findByText('Comic releases for last week').should('exist')
  })
})
