describe('Sign up page test',  () => {
    it('Navigate to sign up page', () => {
        cy.visit('/html/signup.html');
    })
    
    it('Missing username', () => {
        cy.get("form");

        cy.get('input[name="user-name"]').clear()

        cy.get('input[name="name"]')
          .clear()
          .type('This is a Fake Name')
          .should('have.value', 'This is a Fake Name');
        
        cy.get('input[name="email"]')
          .clear()
          .type('randomguest@gmail.com')
          .should('have.value', 'randomguest@gmail.com');

        cy.get('input[name="yob"]')
          .clear()
          .type('1988')
          .should('have.value', '1988');
        
        cy.get('input[name="pass-word"]')
          .clear()
          .type('Iam@guest1988')
          .should('have.value', 'Iam@guest1988');
        
        cy.get("form").submit();
        cy.contains('Missing username. Check it again!')
        cy.contains('Return').click()
    })

    it('Missing name', () => {
      cy.get("form");

      cy.get('input[name="user-name"]')
        .clear()
        .type('randomguest')
        .should('have.value', 'randomguest');

      cy.get('input[name="name"]').clear()
      
      cy.get('input[name="email"]')
        .clear()
        .type('randomguest@gmail.com')
        .should('have.value', 'randomguest@gmail.com');
      
      cy.get('input[name="yob"]')
        .clear()
        .type('1988')
        .should('have.value', '1988');
      
      cy.get('input[name="pass-word"]')
        .clear()
        .type('Iam@guest1988')
        .should('have.value', 'Iam@guest1988');
      
      cy.get("form").submit();
      cy.contains('Missing name. Check it again!')
      cy.contains('Return').click()
    })

    it('Missing yob', () => {
      cy.get("form");
  
      cy.get('input[name="user-name"]')
        .clear()
        .type('randomguest')
        .should('have.value', 'randomguest');
  
      cy.get('input[name="name"]')
        .clear()
        .type('This is a Fake Name')
        .should('have.value', 'This is a Fake Name');
         
      cy.get('input[name="yob"]').clear()
        
      cy.get('input[name="email"]')
        .clear()
        .type('randomguest@gmail.com')
        .should('have.value', 'randomguest@gmail.com'); 
        
      cy.get('input[name="pass-word"]')
        .clear()
        .type('Iam@guest1988')
        .should('have.value', 'Iam@guest1988');
        
      cy.get("form").submit();
      cy.contains('Missing year of birth. Check it again!')
      cy.contains('Return').click()
  })

  it('Missing email', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('randomguest')
      .should('have.value', 'randomguest');

    cy.get('input[name="name"]')
      .clear()
      .type('This is a Fake Name')
      .should('have.value', 'This is a Fake Name');
       
    cy.get('input[name="yob"]')
      .clear()
      .type('1988')
      .should('have.value', '1988');
      
    cy.get('input[name="email"]').clear() 
      
    cy.get('input[name="pass-word"]')
      .clear()
      .type('Iam@guest1988')
      .should('have.value', 'Iam@guest1988');
      
    cy.get("form").submit();
    cy.contains('Missing email. Check it again!')
    cy.contains('Return').click()
  })
  
  it('Missing password', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('randomguest')
      .should('have.value', 'randomguest');

    cy.get('input[name="name"]')
      .clear()
      .type('This is a Fake Name')
      .should('have.value', 'This is a Fake Name');
       
    cy.get('input[name="yob"]')
      .clear()
      .type('1988')
      .should('have.value', '1988');
      
    cy.get('input[name="email"]')
      .clear()
      .type('randomguest@gmail.com')
      .should('have.value', 'randomguest@gmail.com'); 
      
    cy.get('input[name="pass-word"]').clear()
      
    cy.get("form").submit();
    cy.contains('Missing password. Check it again!')
    cy.contains('Return').click()
  })

  it('Email taken', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('randomguest')
      .should('have.value', 'randomguest');

    cy.get('input[name="name"]')
      .clear()
      .type('This is a Fake Name')
      .should('have.value', 'This is a Fake Name');
       
    cy.get('input[name="yob"]')
      .clear()
      .type('1988')
      .should('have.value', '1988');
      
    cy.get('input[name="email"]')
      .clear()
      .type('thisisfakename@gmail.com')
      .should('have.value', 'thisisfakename@gmail.com'); 
      
    cy.get('input[name="pass-word"]')
      .clear()
      .type('Iam@guest1988')
      .should('have.value', 'Iam@guest1988');
      
    cy.get("form").submit();
    cy.contains('This email address had been taken. Check it again!')
    cy.contains('Return').click()
  })

  it('Username taken', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('fakename')
      .should('have.value', 'fakename');

    cy.get('input[name="name"]')
      .clear()
      .type('This is a Fake Name')
      .should('have.value', 'This is a Fake Name');
       
    cy.get('input[name="yob"]')
      .clear()
      .type('1988')
      .should('have.value', '1988');
      
    cy.get('input[name="email"]')
      .clear()
      .type('randomguest@gmail.com')
      .should('have.value', 'randomguest@gmail.com'); 
      
    cy.get('input[name="pass-word"]')
      .clear()
      .type('Iam@guest1988')
      .should('have.value', 'Iam@guest1988');
      
    cy.get("form").submit();
    cy.contains('This username had been taken. Check it again!')
    cy.contains('Return').click()
  })

  it('Invalid username', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('fakename,')
      .should('have.value', 'fakename,');

    cy.get('input[name="name"]')
      .clear()
      .type('This is a Fake Name')
      .should('have.value', 'This is a Fake Name');
       
    cy.get('input[name="yob"]')
      .clear()
      .type('1988')
      .should('have.value', '1988');
      
    cy.get('input[name="email"]')
      .clear()
      .type('randomguest@gmail.com')
      .should('have.value', 'randomguest@gmail.com'); 
      
    cy.get('input[name="pass-word"]')
      .clear()
      .type('Iam@guest1988')
      .should('have.value', 'Iam@guest1988');
      
    cy.get("form").submit();
    cy.contains('Invalid username. Check it again!')
    cy.contains('Return').click()
  })
})