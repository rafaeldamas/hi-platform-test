/// <reference types="Cypress" />

const faker = require('faker')

describe('Create account', () => {
  const user = {
    email: `${faker.internet.email()}`,
    password: `${faker.random.number()}`
  }
  it('successfully', () => {
    cy.create_account(user)

    cy.get('.sub-title')
      .should('be.visible')
  })
})
