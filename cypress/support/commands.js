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
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const types = {
    admin: {
      username: "fangming.lu@inpwrd.com",
      password: "Welcome1",
    },
    externaluser: {
      username: "fangming.user",
      password: "Welcome1",
    },
    analystuser: {
      username: "test_analyst",
      password: "test_analyst",
      }
  }
Cypress.Commands.add('fillAdminForm', (random) => {
    cy.server();
    cy.get('#campaigns-new-button').click();
    cy.get('#settings-name-input').type("Test Campaign " + random);
    cy.get('#settings-objective-select').click();
    cy.get('.mat-option-text:first').click();
    cy.get('#settings-account-select').click();
    cy.route('GET','**/algos/*').as('getAlgo');
    cy.get('.mat-option-text').contains('test customer1').click();
    cy.wait(['@getAlgo']);
    cy.get('#settings-optimizationAlgorithm-select').click();
    cy.get('.mat-option-text').contains('DYNCPE').click();
    cy.get('#settings-isOptimizablle').click();
    cy.get('.mat-option-text').contains('Auto').click();
    cy.get('#settings-salesforceOpportunityId-input').type('test salesforce id ' + random);
    cy.get('#settings-brandName-input').type('test brand');
    cy.get('#settings-save-button').click();
})
Cypress.Commands.add('fillExternalForm', (random) => {
    cy.get('#campaigns-new-button').click();
    cy.get('#settings-name-input').type("Test Campaign " + random);
    cy.get('#settings-objective-select').click();
    cy.get('.mat-option-text:first').click();
    cy.get('#settings-account-select').click();
    cy.get('.mat-option-text').contains('test customer1').click();
    cy.get('#settings-brandName-input').type('test brand');
    cy.get('#settings-save-button').click();
})
Cypress.Commands.add('loginAsAdmin', () => {
    cy.visit("https://app-qa.inpwrd.net/campaigns");
    cy.get('#username').type(types["admin"].username).should('have.value',types["admin"].username);
    cy.get('#password').type(types["admin"].password);
    cy.get('#login-btn').click();
})
Cypress.Commands.add('loginAsExternal', () => {
    cy.visit("https://app-qa.inpwrd.net/campaigns");
    cy.get('#username').type(types["externaluser"].username).should('have.value',types["externaluser"].username);
    cy.get('#password').type(types["externaluser"].password);
    cy.get('#login-btn').click();
})
Cypress.Commands.add('loginAsAnalyst', () => {
    cy.visit("https://app-qa.inpwrd.net/campaigns");
    cy.get('#username').type(types["analystuser"].username).should('have.value',types["analystuser"].username);
    cy.get('#password').type(types["analystuser"].password);
    cy.get('#login-btn').click();
})

Cypress.Commands.add('validateNewCampaign', (random) => {
    cy.url().should('match',/.*\b\d{5}\b.*/);
    cy.url().should('contains','campaign');
    cy.url().should('include','content');
    cy.get('#campaign-content-tab').should('exist');
    cy.get('h1').should('have.text',"Test Campaign " + random);
})


