describe('Register and delete Passenger', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })


  it('register successfully', () => {
    cy.visit('/auth/register')

    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#email').type('john.doe@utec.edu.pe')
    cy.get('#password').type('XYZ987')
    cy.get('#phone').type('987654321')
    cy.get('#passenger').check()
    cy.get('#registerSubmit').click()
  })
})