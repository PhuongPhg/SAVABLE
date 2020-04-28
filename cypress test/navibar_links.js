describe('Testing index.html', () => {
  it('Visit the website', () => {
      cy.visit('https://letmetryy.000webhostapp.com/index.html');
  })
  it('Test navigator bar', () => {
    cy.contains('About').click()
    cy.contains('Contact').click()
    cy.contains('Log In').click()
    cy.contains('Sign up').click()
  })
})
