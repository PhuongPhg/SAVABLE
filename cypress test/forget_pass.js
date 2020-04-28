describe('Forget password page test', () =>{
    it('Go to Forget pass', () => {
        cy.visit('https://letmetryy.000webhostapp.com/help1.html');
    })

    it('Enter email', () => {
        cy.get("form");

        cy.get('input[name="imeo"]')
          .type('randomguest@email.com')
          .should('have.value', 'randomguest@email.com');
        
          cy.get("form").submit();
    })

    it('Enter new password', () => {
        cy.get("form");

        cy.get('input[name="pass"]')
          .type('newpassword')
          .should('have.value', 'newpassword');
        
        cy.get('input[name="reenterpass"]')
          .type('newpassword')
          .should('have.value', 'newpassword');
        
          cy.get("form").submit();
    })
})