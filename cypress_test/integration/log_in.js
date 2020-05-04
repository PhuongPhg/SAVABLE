describe('The log in page', () => {
    beforeEach(() => {
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

        var currentURL = null
        cy.url().then(url => {
             currentURL = url
             if(currentURL=='http://localhost:8080/savable/php/index.php'){
                cy.log('Passing')
            } else {
                cy.log('Not passing')
                return 0
            }
        });
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
        
        var currentURL = null
        cy.url().then(url => {
             currentURL = url
             if(currentURL=='http://localhost:8080/savable/php/index.php'){
                cy.log('Passing')
            } else {
                cy.log('Not passing')
                return 0
            }
        });
    })

    it('Missing password', () => {
        cy.get("form")

        cy.get('input[name=user-name]')
        .clear()
        .type('fakename')
        .should('have.value', 'fakename');

        cy.get('input[type=password]').clear()

        cy.get("form").submit();
        
        var currentURL = null
        cy.url().then(url => {
             currentURL = url
             if(currentURL=='http://localhost:8080/savable/php/index.php'){
                cy.log('Passing')
            } else {
                cy.log('Not passing')
                return 0
            }
        });
    })

    it('Missing username', () => {
        cy.get("form")

        cy.get('input[name=user-name]').clear()

        cy.get('input[type=password]')
        .clear()
        .type('FakeName9')
        .should('have.value', 'FakeName9');

        cy.get("form").submit();

        var currentURL = null
        cy.url().then(url => {
             currentURL = url
             if(currentURL=='http://localhost:8080/savable/php/index.php'){
                cy.log('Passing')
            } else {
                cy.log('Not passing')
                return 0
            }
        });
    })

    it('Valid username / password', () => {
        //I add this typeLogIn command in /support/commands.js
        cy.typeLogIn('fakename', 'FakeName9')

        var currentURL = null
        cy.url().then(url => {
             currentURL = url
             if(currentURL=='http://localhost:8080/savable/php/index.php'){
                cy.log('Passing')
            } else {
                cy.log('Not passing')
                return 0
            }
        });
    })
})