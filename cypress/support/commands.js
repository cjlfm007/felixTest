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
    'qa': {
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
    },
    'dev':{
        admin: {
            username: "admin_user",
            password: "admin_user",
          },
          externaluser: {
            username: "advertiser_user",
            password: "advertiser_user",
          },
          analystuser: {
            username: "analyst_user",
            password: "analyst_user",
        }
    }
  }

const envs = {
    'qa' : 'https://app-qa.inpwrd.net/',
    'dev': 'https://app-dev.inpwrd.net/'
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
    cy.route('POST','**/campaigns/?isDraft=true').as('postNewCampaign');
    cy.get('#settings-save-button').click();
    cy.wait(['@postNewCampaign']);
})
Cypress.Commands.add('fillExternalForm', (random) => {
    cy.get('#campaigns-new-button').click();
    cy.get('#settings-name-input').type("Test Campaign " + random);
    cy.get('#settings-objective-select').click();
    cy.get('.mat-option-text:first').click();
    cy.get('#settings-account-select').click();
    cy.get('.mat-option-text').contains('test customer1').click();
    cy.get('#settings-brandName-input').type('test brand');
    cy.server();
    cy.route('POST','**/campaigns/?isDraft=true').as('postNewCampaign');
    cy.get('#settings-save-button').click();
    cy.wait(['@postNewCampaign']);
})
Cypress.Commands.add('addStory',() => {
    cy.server();
    cy.get('#story-add-url-input').type('yahoo.com');
    cy.get('#story-add-url-input').type('{enter}');
    cy.route('GET','**?includeDraft=true').as('getNewCampaign');
    cy.get('#story-0-save-button').click();
    cy.wait(['@getNewCampaign'],{timeout: 10000});
})
Cypress.Commands.add('fillTarget',() => {
    cy.get('#campaign-targeting-tab').click();
    cy.get('#add-channel-button > .mat-button-wrapper').click();
    cy.get('#select-channel-button-yahoo').click();
    cy.server();
    cy.get('.app-campaign-targeting-story > .AGE > .target-wrapper > .target > mat-select-trigger').click();
    cy.route('PUT','**?isDraft=true&lumpZemantaTargets=true').as('getTarget');
    cy.contains('18 - 24').click();
    cy.get('body').type('{esc}');
    cy.wait(['@getTarget']);
    cy.get('.app-campaign-targeting-story > .DEVICES > .target-wrapper > .target > mat-select-trigger').click();
    cy.route('PUT','**?isDraft=true&lumpZemantaTargets=true').as('getTarget');
    cy.contains('Smartphones').click();
    cy.get('body').type('{esc}');
    cy.wait(['@getTarget']);
    cy.get('.app-campaign-targeting-story > .GENDER > .target-wrapper > .target > mat-select-trigger').click();
    cy.route('PUT','**?isDraft=true&lumpZemantaTargets=true').as('getTarget');
    cy.contains('Male').click();
    cy.get('body').type('{esc}');
    cy.wait(['@getTarget']);
    cy.get('#targeting-story-0-target-geos').type('united states');
    cy.route('PUT','**?isDraft=true&lumpZemantaTargets=true').as('getTarget');
    cy.contains('United States (Yahoo)').click();
    cy.get('body').type('{esc}');
    cy.wait(['@getTarget']);
    cy.get('#targeting-story-0-target-interestss').type('Sports');
    cy.route('PUT','**?isDraft=true&lumpZemantaTargets=true').as('getTarget');
    cy.contains('Sports (Yahoo)').click();
    cy.get('body').type('{esc}');
    cy.wait(['@getTarget']);
    cy.get('.app-campaign-targeting-story > .LANGUAGES > .target-wrapper > .target > mat-select-trigger').click();
    cy.route('PUT','**?isDraft=true&lumpZemantaTargets=true').as('getTarget');
    cy.contains('English').click();
    cy.get('body').type('{esc}');
    cy.wait(['@getTarget']);
    cy.get('.app-campaign-targeting-story > .OS > .target-wrapper > .target > mat-select-trigger').click();
    cy.route('PUT','**?isDraft=true&lumpZemantaTargets=true').as('getTarget');
    cy.contains('iOS').click();
    cy.get('body').type('{esc}');
    cy.wait(['@getTarget']);
})
Cypress.Commands.add('loginAsAdmin', (env) => {
    cy.visit(envs[env]);
    cy.get('#username').type(types[env]["admin"].username).should('have.value',types[env]["admin"].username);
    cy.get('#password').type(types[env]["admin"].password);
    cy.get('#login-btn').click();
})
Cypress.Commands.add('loginAsExternal', (env) => {
    cy.visit(envs[env]);
    cy.get('#username').type(types[env]["externaluser"].username).should('have.value',types[env]["externaluser"].username);
    cy.get('#password').type(types[env]["externaluser"].password);
    cy.get('#login-btn').click();
})
Cypress.Commands.add('loginAsAnalyst', (env) => {
    cy.visit(envs[env]);
    cy.get('#username').type(types[env]["analystuser"].username).should('have.value',types[env]["analystuser"].username)
    cy.get('#password').type(types[env]["analystuser"].password);
    cy.get('#login-btn').click();
})

Cypress.Commands.add('validateNewCampaign', (random) => {
    cy.url().should('match',/.*\b\d{5}\b.*/);
    cy.url().should('contains','campaign');
    cy.url().should('include','content');
    cy.get('#campaign-content-tab').should('exist');
    cy.get('h1').should('have.text',"Test Campaign " + random);
})
/*Cypress.Commands.add('upload_file', (fileName, selector) => {
    cy.get(selector).then(subject => {
    cy.fixture(fileName).as("image");
    return Cypress.Blob.base64StringToBlob(this.image, "image/jpeg").then((blob) => {
        //then((content) => {
            const el = subject[0]
            const testFile = new File([blob], fileName,{type: 'image/png'})
            const dataTransfer = new DataTransfer()

            dataTransfer.items.add(testFile)
            el.files = dataTransfer.files
        })
    })
})*/

