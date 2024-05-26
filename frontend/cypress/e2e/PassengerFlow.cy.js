describe('Login Passenger', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('login successfully', () => {
    cy.visit('/')

    cy.get('#email').type('jmonja@utec.edu.pe')
    cy.get('#password').type('123456')
    cy.get('#loginSubmit').click()

    cy.url().should('include', '/dashboard')

    cy.window().then(window => {
      const token = window.localStorage.getItem('token')
      Cypress.env('authToken', token)
    })

    cy.get('#profileInfo').should('have.text', 'Jeffrey Monja')
  })

  it('Edit Profile', () => {
    const token = Cypress.env('authToken')

    cy.window().then(window => {
      window.localStorage.setItem('token', token)
    })

    cy.visit('/dashboard')

    cy.get('#editProfile').click()

    cy.url().should('include', '/profile/edit')

    cy.get('#firstName').clear().type('Jeffrey')
    cy.get('#lastName').clear().type('Monja')
    cy.get('#phoneNumber').clear().type('987654321')
    cy.get('#updateSubmit').click()

    cy.url().should('include', '/dashboard')
  })

  it('Logout', () => {
    const token = Cypress.env('authToken')

    cy.window().then(window => {
      window.localStorage.setItem('token', token)
    })

    cy.window().its('localStorage.token').should('eq', token)

    cy.visit('/dashboard')

    cy.get('#logout').click()

    cy.url().should('include', '/auth/login')

    // Verificar que el token se haya eliminado del localStorage
    cy.window().its('localStorage.token').should('be.undefined')
  })
})
