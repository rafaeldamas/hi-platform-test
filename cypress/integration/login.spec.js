/// <reference types="Cypress" />

describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.sub-title')
      .should('be.visible')
  })
})