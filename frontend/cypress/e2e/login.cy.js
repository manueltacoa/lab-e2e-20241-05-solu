describe('Login page', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('login successfully', () => {
    cy.visit('/')

    cy.get('#email').type('jmonja@utec.edu.pe')
    cy.get('#password').type('123456')
    cy.get('#loginSubmit').click()

    cy.url().should('include', '/home')

    cy.window().then(window => {
      const token = window.localStorage.getItem('token')
      Cypress.env('authToken', token)
    })

    cy.get('#passengerInfo').should('have.text', 'Jeff Monja')
  })

  it('Logout', () => {
    const token = Cypress.env('authToken')

    cy.window().then(window => {
      window.localStorage.setItem('token', token)
    })

    cy.window().its('localStorage.token').should('eq', token)

    cy.visit('/home')

    cy.get('#logout').click()

    cy.url().should('include', '/login')

    // Verificar que el token se haya eliminado del localStorage
    cy.window().its('localStorage.token').should('be.undefined')
  })
})
