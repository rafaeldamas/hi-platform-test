Cypress.Commands.add('create_account', user => {
  cy.visit('/minha-conta')

  cy.get('#reg_email').type(user.email)
  cy.get('#reg_password').type(user.password)

  cy.contains('.button', 'Register')
    .click()
})

Cypress.Commands.add('login', user => {
  cy.visit('/minha-conta')

  cy.get('#username').type(Cypress.env('user_email'))
  cy.get('#password').type(Cypress.env('user_password'))

  cy.contains('.button', 'Login')
    .click()
})
