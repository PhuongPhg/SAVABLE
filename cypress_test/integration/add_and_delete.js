describe('Add items to index.php', () => {
  
  beforeEach(() => {
    cy.server()
    cy.visit('/html/login.html')
    cy.typeLogIn('fakename', 'FakeName9')
  })

  it('Missing name of items', () => {
    cy.server()

    cy.get('input[name=namee]')
      .clear()

    cy.get('input[name=achieve]')
      .clear()
      .type('100000')
      .should('have.value', '100000')
    
    cy.get('input[name=budget]')
      .clear()
      .type('1000000000')
      .should('have.value', '1000000000')
        
    cy.contains('Save').click()
    //the form will not be submitted until the name is filled.
  })
  
  it('Missing achieve of items', () => {
    cy.server()

    cy.get('input[name=namee]')
      .type('A house')
      .should('have.value', 'A house')

    cy.get('input[name=achieve]')
    
    cy.get('input[name=budget]')
      .clear()
      .type('1000000000')
      .should('have.value', '1000000000')
        
    cy.contains('Save').click()
    //auto achieve = 0
    cy.contains('Delete').click()
  })
  it('Missing budget of items', () => {
    cy.server()

    cy.get('input[name=namee]')
      .type('A house')
      .should('have.value', 'A house')

    cy.get('input[name=achieve]')
      .clear()
      .type('100000')
      .should('have.value', '100000')
    
    cy.get('input[name=budget]')
      
        
    cy.contains('Save').click()
    //the form will not be submitted until the budget is different from 0.
  })

  it('Valid items information', () => {
    cy.server()

    cy.get('input[name=namee]')
      .type('A house')
      .should('have.value', 'A house')

    cy.get('input[name=achieve]')
      .clear()
      .type('100000')
      .should('have.value', '100000')
    
      cy.get('input[name=budget]')
      .clear()
      .type('1000000000')
      .should('have.value', '1000000000')
      
    cy.contains('Save').click()
  })
})