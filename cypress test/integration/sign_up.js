describe('Sign up page test',  () => {
    it('Navigate to sign up page', () => {
        cy.visit('https://letmetryy.000webhostapp.com/html/signup.html');
    })
    
    it('Input  invalid information', () => {
        cy.get("form");

        cy.get('input[name="user-name"]')
          .type('guest')
          .should('have.value', 'guest');

        cy.get('input[name="name"]')
          .type('Guest')
          .should('have.value', 'Guest');

        cy.get('input[name="email"]')
          .type('randomguest')
          .should('have.value', 'randomguest');
        
        cy.get('input[name="pass-word"]')
          .type('iamaguest')
          .should('have.value', 'iamaguest');
        
        cy.get("form").submit();
    })
})