describe('Edit items to index.php', () => {
  
    beforeEach(() => {
      cy.server()
      cy.visit('/html/login.html')
      cy.typeLogIn('fakename', 'FakeName9')

      cy.contains('Edit').click()
    })

    it('Delete the name', () => {
        
        cy.get('input[name=namee]')
          .clear()
        
        cy.contains('Update').click()
        //Cannot be update until the name is filled.
    })
    it('Delete the budget', () => {
        cy.get('input[name=budget]').clear()
        cy.contains('Update').click()
        //Cannot be update until the budget is different than 0.
    })
    it('Valid items information', () => {
        cy.get('input[name=namee]')
          .clear()
          .type('A big house')
          .should('have.value', 'A big house')

        cy.get('input[name=achieve]')
          .clear()
          .type('150000')
          .should('have.value', '150000')
    
        cy.get('input[name=budget]')
          .clear()
          .type('1500000000')
          .should('have.value', '1500000000')

        cy.contains('Update').click()

        cy.contains('Delete').click()
    })
})