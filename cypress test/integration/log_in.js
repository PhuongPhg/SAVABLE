describe('Login page test',  () => {
    it('Navigate to login page', () => {
        cy.visit('https://letmetryy.000webhostapp.com/html/login.html');
    })

    it('Input login info', () =>{
        cy.get("form");

        cy.get('.username')
          .type('fakename')
          .should('have.value', 'fakename');

        cy.get('.password')
          .type('FakeName9')
          .should('have.value', 'FakeName9');

        cy.get("form").submit();
        cy.contains('Log out').click()
    })
})