describe('New Campaign Form Test', function() {
    const random = Math.floor((Math.random() * 10000) + 1);
    it('Test New Campaign Form Display As Admin', function() {
      cy.loginAsAdmin('dev');
      cy.url().should('include',"/campaigns");
      cy.contains('span', "New Campaign");
      cy.get('#campaigns-new-button').should('exist');
      cy.get('#campaigns-new-button').click();
      cy.get('#settings-name-input').should('exist');
      cy.get('#settings-objective-select').should('exist');
      cy.get('#settings-account-select').should('exist');
      cy.get('#settings-optimizationAlgorithm-select').should('exist');
      cy.get('#settings-isOptimizablle').should('exist');
      cy.get('#settings-salesforceOpportunityId-input').should('exist');
      cy.get('#settings-brandName-input').should('exist');
      cy.get('#settings-cancel-button').should('exist');
      cy.get('#settings-save-button').should('not.exist');
    })
    it('Test New Campaign Form Display As External User', function() {
        cy.visit("https://app-qa.inpwrd.net/campaigns");
        cy.loginAsExternal('dev');
        cy.url().should('include',"/campaigns");
        cy.contains('span', "New Campaign");
        cy.get('#campaigns-new-button').should('exist');
        cy.get('#campaigns-new-button').click();
        cy.get('#settings-name-input').should('exist');
        cy.get('#settings-objective-select').should('exist');
        cy.get('#settings-account-select').should('exist');
        cy.get('#settings-brandName-input').should('exist');
        cy.get('#settings-optimizationAlgorithm-select').should('not.exist');
        cy.get('#settings-isOptimizablle').should('not.exist');
        cy.get('#settings-salesforceOpportunityId-input').should('not.exist');
        cy.get('#settings-cancel-button').should('exist');
        cy.get('#settings-save-button').should('not.exist');
    })
    it('Test New Campaign Form Display As Analyst User', function() {
        cy.loginAsAnalyst('dev');
        cy.url().should('include',"/campaigns");
        cy.get('#campaigns-new-button').should('not.exist');
    })
    it('Test New Campaign Form Save Button Display As Admin', function() {
        cy.server();
        cy.loginAsAdmin('dev');
        cy.url().should('include',"/campaigns");
        cy.contains('span', "New Campaign");
        cy.get('#campaigns-new-button').should('exist');
        cy.get('#campaigns-new-button').click();
        cy.get('#settings-name-input').type("Test Campaign");
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
        cy.get('#settings-salesforceOpportunityId-input').type('test salesforce id');
        cy.get('#settings-cancel-button').should('exist');
        cy.get('#settings-save-button').should('not.exist');
        cy.get('#settings-brandName-input').type('test brand');
        cy.get('#settings-save-button').should('exist');
        cy.get('#settings-name-input').clear();
        cy.get('#settings-save-button').should('not.exist');
        cy.get('#settings-name-input').type("Test Campaign" );
        cy.get('#settings-salesforceOpportunityId-input').clear();
        cy.get('#settings-save-button').should('exist');
        cy.get('#settings-cancel-button').click();
        cy.get('.app-dialog--header').should('not.exist');

    })
    it('Test New Campaign Form Save Button Display As External User', function() {
        cy.loginAsExternal('dev');
        cy.url().should('include',"/campaigns");
        cy.contains('span', "New Campaign");
        cy.get('#campaigns-new-button').should('exist');
        cy.get('#campaigns-new-button').click();
        cy.get('#settings-name-input').type("Test Campaign")
        cy.get('#settings-objective-select').click();
        cy.get('.mat-option-text:first').click();
        cy.get('#settings-account-select').click();
        cy.get('.mat-option-text').contains('test customer1').click();
        cy.get('#settings-save-button').should('not.exist');
        cy.get('#settings-brandName-input').type('test brand');
        cy.get('#settings-cancel-button').should('exist');
        cy.get('#settings-save-button').should('exist');
        cy.get('#settings-name-input').clear();
        cy.get('#settings-save-button').should('not.exist');
        cy.get('#settings-cancel-button').click();
        cy.get('.app-dialog--header').should('not.exist');
    })
    it('Test Create New Campaign As Admin', function() {
        cy.loginAsAdmin('dev');
        cy.fillAdminForm(random);
        cy.validateNewCampaign(random);
    })
    it('Test Create New Campaign As External User', function() {
        cy.loginAsExternal('dev');
        cy.fillExternalForm(random);
        cy.validateNewCampaign(random);
    })
    it('Check Create New Campaign Page As Analyst', function() {
        cy.loginAsAnalyst('dev');
        cy.checkAnalystForm();
    })
  })