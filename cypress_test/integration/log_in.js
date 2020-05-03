describe('The log in page', () => {
    it('Navigator to log in page', () => {
        cy.visit('/html/login.html')
    })
    it('Wrong password', () => {
        //cy.typeLogIn('fakename', 'FakeName')

        cy.get("form");

        cy.get('input[name=user-name]')
        .clear()
        .type('fakename')
        .should('have.value', 'fakename');

        cy.get('input[type=password]')
        .type('FakeName')
        .should('have.value', 'FakeName');

        cy.get("form").submit();

        cy.contains('Wrong password. Check it again! Return')
        cy.contains('Return').click()
    })

    it('Wrong username', () => {
        cy.get("form");

        cy.get('input[name=user-name]')
        .clear()
        .type('fakenam')
        .should('have.value', 'fakenam');

        cy.get('input[type=password]')
        .clear()
        .type('FakeName9')
        .should('have.value', 'FakeName9');

        cy.get("form").submit();

        cy.contains('This username does not exist. Check it again! Return')
        cy.contains('Return').click()
    })

    it('Missing password', () => {
        cy.get("form")

        cy.get('input[name=user-name]')
        .clear()
        .type('fakename')
        .should('have.value', 'fakename');

        cy.get('input[type=password]').clear()

        cy.get("form").submit();
        cy.contains('Some information is missing. Check it again! Return')
        cy.contains('Return').click()
    })

    it('Missing username', () => {
        cy.get("form")

        cy.get('input[name=user-name]').clear()

        cy.get('input[type=password]')
        .clear()
        .type('FakeName9')
        .should('have.value', 'FakeName9');

        cy.get("form").submit();

        cy.contains('Some information is missing. Check it again! Return')
        cy.contains('Return').click()
    })

    it('Valid username / password', () => {
        //I add this typeLogIn command in /support/commands.js
        cy.typeLogIn('fakename', 'FakeName9')
        cy.url().should('include', '/index.php')
    })
})