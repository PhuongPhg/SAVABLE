describe('Login page test',  () => {
    it('Navigate to login page', () => {
        cy.visit('https://letmetryy.000webhostapp.com/login.html');
    })

    it('Input login info', () =>{
        cy.get("form");

        cy.get('.username')
          .type('abec')
          .should('have.value', 'abec');

        cy.get('.password')
          .type('12345678')
          .should('have.value', '12345678');

        cy.get("form").submit();
    })
    
})