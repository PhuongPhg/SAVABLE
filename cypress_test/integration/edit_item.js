describe('Edit items to index.php', () => {
  
    beforeEach(() => {
      cy.server()
      cy.visit('/html/login.html')
      cy.typeLogIn('fakename', 'FakeName9')

      cy.contains('Edit').click()
      
    })

    it('Delete the name', () => {
      var bud=null
      var currentName=null
        cy.get('input[name=namee]')
          .clear()
          .invoke('val')
          .then(name => {
            currentName=name
          })


        cy.get('input[name=budget]')
          .invoke('val')
          .then(sometext => {
            bud=sometext
            });

        if(currentName==null) {
          cy.log('Not passing')
          return 0
        } else {
          cy.log('Passing')
        }
        if(bud==NULL || bud==0) {
          cy.log('Not passing')
          return 0
        } else {
          cy.log('Passing')
        }
        cy.contains('Update').click()
        //Cannot be update until the name is filled.
    })

    it('Delete the budget', () => {
      var bud=null
      var currentName=null
      cy.get('input[name=namee]')
        .invoke('val')
        .then(name => {
          currentName=name
        })

      cy.get('input[name=budget]').clear()
        .invoke('val')
        .then(sometext => {
          bud=sometext
          });

      if(currentName==null) {
        cy.log('Not passing')
        return 0
      } else {
        cy.log('Passing')
      }
      if(bud==NULL || bud==0) {
        cy.log('Not passing')
        return 0
      } else {
        cy.log('Passing')
      }
        cy.contains('Update').click()
        //Cannot be update until the budget is different than 0.
    })

    it('Valid items information', () => {
      var bud=null
      var currentName=null
        cy.get('input[name=namee]')
          .clear()
          .type('A big house')
          .should('have.value', 'A big house')
          .invoke('val')
          .then(name => {
            currentName=name
          })

        cy.get('input[name=achieve]')
          .clear()
          .type('150000')
          .should('have.value', '150000')
    
        cy.get('input[name=budget]')
          .clear()
          .type('1500000000')
          .should('have.value', '1500000000')
          .invoke('val')
          .then(sometext => {
            bud=sometext
          });

        if(currentName==null) {
          cy.log('Not passing')
          return 0
        } else {
          cy.log('Passing')
         }
        if(bud==NULL || bud==0) {
            cy.log('Not passing')
            return 0
        } else {
          cy.log('Passing')
        }
        cy.contains('Update').click()

        cy.contains('Delete').click()
    })
})