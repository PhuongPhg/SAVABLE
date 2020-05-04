// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('typeLogIn', (username, pw) => {
    cy.get("form");

    cy.get('input[name=user-name]').clear().type(username)
    cy.get('input[type=pass-word]').clear().type(pw)

    cy.get("form").submit();
})

Cypress.Commands.add('typeSignUp', (username, name, yearofbirth, email, password) => {
    cy.get("form");

    cy.get('input[type=user-name]').clear().type(username)
    cy.get('input[type=name]').clear().type(name)
    cy.get('input[type=yob]').clear().type(yearofbirth)
    cy.get('input[type=email]').clear().type(email)
    cy.get('input[type=pass-word]').clear().type(password)

    cy.get("form").submit()
})