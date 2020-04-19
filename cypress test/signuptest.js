describe('Sign up page test',  () => {
    it('Navigate to sign up page', () => {
        cy.visit('https://letmetryy.000webhostapp.com/signup.html');
    })
    
    it('Input sign up info', () => {
        cy.get("form");

        cy.get('input[name="user-name"]')
          .type('guest')
          .should('have.value', 'guest');

        cy.get('input[name="name"]')
          .type('Guest')
          .should('have.value', 'Guest');

        cy.get('input[name="email"]')
          .type('randomguest@email.com')
          .should('have.value', 'randomguest@email.com');
        
        cy.get('input[name="pass-word"]')
          .type('iamaguest')
          .should('have.value', 'iamaguest');
        
        cy.get("form").submit();
    })
})