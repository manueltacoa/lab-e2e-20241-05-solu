describe('Register and delete Passenger', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('Register successfully', () => {
    cy.visit('/auth/register')

    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type('john.doe@gmail.edu.pe')
    cy.get('#password').type('XYZ987')
    cy.get('#phone').type('987654321')
    cy.get('#passenger').check()
    cy.get('#registerSubmit').click()

    cy.url().should('include', '/dashboard')
    cy.wait(2000);

    cy.window().then(window => {
      const token = window.localStorage.getItem('token')
      Cypress.env('authToken', token)
    })
  })

  it('Delete Passenger', () => {
    const token = Cypress.env('authToken')

    cy.window().then(window => {
      window.localStorage.setItem('token', token)
    })

    cy.window().its('localStorage.token').should('eq', token)
    cy.visit('/dashboard')

    cy.get('#editProfile').click()
    cy.url().should('include', '/profile/edit')

    cy.get('#deleteUser').click()
    cy.url().should('include', '/auth/login')

    cy.window().its('localStorage.token').should('be.undefined')
  })
})

describe('Register and delete Driver', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('Register successfully', () => {
    cy.visit('/auth/register')

    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type('john.doe@gmail.edu.pe')
    cy.get('#password').type('XYZ987')
    cy.get('#phone').type('987654321')
    cy.get('#driver').check()
    cy.get('#registerSubmit').click()

    cy.get('#category').select('XL')
    cy.get('#brand').type('Toyota')
    cy.get('#model').type('Yaris')
    cy.get('#licensePlate').type('ABC128')
    cy.get('#fabricationYear').type('2020')
    cy.get('#capacity').type('5')
    cy.get('#registerVehicleSubmit').click()

    cy.url().should('include', '/dashboard')
    cy.wait(2000);
    
    cy.window().then(window => {
      const token = window.localStorage.getItem('token')
      Cypress.env('authToken', token)
    })
  })

  it('Delete Driver', () => {
    const token = Cypress.env('authToken')

    cy.window().then(window => {
      window.localStorage.setItem('token', token)
    })

    cy.window().its('localStorage.token').should('eq', token)
    cy.visit('/dashboard')

    cy.get('#editProfile').click()
    cy.url().should('include', '/profile/edit')

    cy.wait(2000)

    cy.get('#deleteUser').click()
    cy.url().should('include', '/auth/login')

    cy.window().its('localStorage.token').should('be.undefined')
  })
})