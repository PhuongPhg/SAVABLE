describe('Sign up page test',  () => {
  beforeEach(() => {
    cy.visit('https://letmetryy.000webhostapp.com/html/signup.html')
  })
    
  it('Missing username', () => {
    cy.get("form");

    cy.get('input[name="user-name"]').clear();

    cy.get('input[name="name"]')
      .clear()
      .type('Guest')
      .should('have.value', 'Guest');
        
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
    
    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })

  it('Missing name', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('randomguest')
      .should('have.value', 'randomguest');

    cy.get('input[name="name"]').clear();
      
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
    
    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })

    it('Missing yob', () => {
      cy.get("form");
  
      cy.get('input[name="user-name"]')
        .clear()
        .type('randomguest')
        .should('have.value', 'randomguest');
  
      cy.get('input[name="name"]')
        .clear()
        .type('Guest')
        .should('have.value', 'Guest');
         
      cy.get('input[name="yob"]').clear();
        
      cy.get('input[name="email"]')
        .clear()
        .type('randomguest@gmail.com')
        .should('have.value', 'randomguest@gmail.com'); 
        
      cy.get('input[name="pass-word"]')
        .clear()
        .type('Iam@guest1988')
        .should('have.value', 'Iam@guest1988');
        
      cy.get("form").submit();
      
      var currentURL = null;
      cy.url().then(url => {
        currentURL = url;
        if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
          cy.log('Passing');
        } 
        else{
          cy.log('Not passing');
          return 0;
        }
      });
  })

  it('Missing email', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('randomguest')
      .should('have.value', 'randomguest');

    cy.get('input[name="name"]')
      .clear()
      .type('Guest')
      .should('have.value', 'Guest');
       
    cy.get('input[name="yob"]')
      .clear()
      .type('1988')
      .should('have.value', '1988');
      
    cy.get('input[name="email"]').clear();
      
    cy.get('input[name="pass-word"]')
      .clear()
      .type('Iam@guest1988')
      .should('have.value', 'Iam@guest1988');
      
    cy.get("form").submit();
    
    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })
  
  it('Missing password', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('randomguest')
      .should('have.value', 'randomguest');

    cy.get('input[name="name"]')
      .clear()
      .type('Guest')
      .should('have.value', 'Guest');
       
    cy.get('input[name="yob"]')
      .clear()
      .type('1988')
      .should('have.value', '1988');
      
    cy.get('input[name="email"]')
      .clear()
      .type('randomguest@gmail.com')
      .should('have.value', 'randomguest@gmail.com'); 
      
    cy.get('input[name="pass-word"]').clear();
      
    cy.get("form").submit();
    
    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })

  it('Email taken', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('randomguest')
      .should('have.value', 'randomguest');

    cy.get('input[name="name"]')
      .clear()
      .type('Guest')
      .should('have.value', 'Guest');
       
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
    
    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })

  it('Username taken', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('fakename')
      .should('have.value', 'fakename');

    cy.get('input[name="name"]')
      .clear()
      .type('Guest')
      .should('have.value', 'Guest');
       
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
    
    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })

  it('Invalid username', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('fakename,')
      .should('have.value', 'fakename,');

    cy.get('input[name="name"]')
      .clear()
      .type('Guest')
      .should('have.value', 'Guest');
       
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
    
    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })

  it('Invalid year of birth', () => {
    cy.get("form");

    cy.get('input[name="user-name"]')
      .clear()
      .type('randomguest')
      .should('have.value', 'randomguest');

    cy.get('input[name="name"]')
      .clear()
      .type('Guest')
      .should('have.value', 'Guest');
       
    cy.get('input[name="yob"]')
      .clear()
      .type('4098')
      .should('have.value', '4098');
      
    cy.get('input[name="email"]')
      .clear()
      .type('randomguest@gmail.com')
      .should('have.value', 'randomguest@gmail.com'); 
      
    cy.get('input[name="pass-word"]')
      .clear()
      .type('Iam@guest1988')
      .should('have.value', 'Iam@guest1988');
      
    cy.get("form").submit();
    
    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })

  it('Valid user information', () => {
    cy.typeSignUp('randomguest', 'Guest', '1988', 'randomguest@gmail.com', 'Iam@guest1988');

    var currentURL = null;
    cy.url().then(url => {
      currentURL = url;
      if(currentURL=='https://letmetryy.000webhostapp.com/php/save.php'){
        cy.log('Passing');
      } 
      else{
        cy.log('Not passing');
        return 0;
      }
    });
  })
})