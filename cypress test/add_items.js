describe('Login page test',  () => {
  it('Navigate to login page', () => {
      cy.visit('https://letmetryy.000webhostapp.com/html/login.html');
  })

  it('Log in', () =>{
      cy.get("form");

      cy.get('input[name=user-name]')
        .type('fakename')
        .should('have.value', 'fakename');

      cy.get('input[type=password]')
        .type('FakeName9')
        .should('have.value', 'FakeName9');

      cy.get("form").submit();

  })

  it('Add new wishlist', () => {
    cy.get('form')

    cy.get('input[name=namee]')
      .type('running test cypress')
      .should('have.value', 'running test cypress')

    cy.get('input[name=achieve]')
      .clear()
      .type('10')
      .should('have.value', '10')

    cy.get('input[name=budget]')
      .clear()
      .type('1000')
      .should('have.value', '1000')

    cy.get('form').submit();
    cy.go('back')
      })
  })

})
