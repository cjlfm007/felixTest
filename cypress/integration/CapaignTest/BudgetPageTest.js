describe('Campaign Budget Page Test', function() {
    const random = Math.floor((Math.random() * 10000) + 1);
    it('Test Budget Page As External User With Single Story', function() {
        cy.loginAsExternal('dev');
        cy.fillExternalForm(random);
        cy.validateNewCampaign(random);
        cy.addStory();
        cy.fillTarget();
        cy.get('#campaign-budget-and-schedule-tab').click();
        cy.get('#schedule-add-button').click();
        cy.get('#budget-credit-select').click();
        cy.contains('10000').click();
        cy.get('#budget-credit-select').should('have.text','10000');
        cy.get('#budget-startDate-input').type('09/01/2018');
        //var today = cy.getTodayDate();
        const todaysDate = Cypress.moment().format("MM DD, YYYY");
        cy.get('#budget-endDate-input').type(todaysDate);
        cy.get('#budget-amount-input').type('1000').should('have.value','1000');
        cy.get('#budget-save-button').click();
    })
    it('Test Budget Page As Admin User With Single Story', function() {
        cy.loginAsAdmin('dev');
        cy.fillAdminForm(random);
        cy.validateNewCampaign(random);
        cy.addStory();
        cy.fillTarget();
        cy.get('#campaign-budget-and-schedule-tab').click();
        cy.get('#schedule-add-button').click();
        cy.get('#budget-credit-select').click();
        cy.contains('10000').click();
        cy.get('#budget-credit-select').should('have.text','10000');
        cy.get('#budget-startDate-input').type('09/01/2018');
        const todaysDate = Cypress.moment().format("MM DD, YYYY");
        cy.get('#budget-endDate-input').type(todaysDate);
        cy.get('#budget-amount-input').type('1000').should('have.value','1000');
        cy.get('#budget-save-button').click();
    })
    it('Test Budget Page As Analyst User With Single Story', function() {
        cy.loginAsAnalyst('dev');
        cy.checkAnalystForm();
    })
    it.only('Test Budget Page As Analyst User', function() {
        cy.loginAsAnalyst('dev');
        cy.url().should('include',"/campaigns");
        cy.server();
        cy.get('#search-input').type("test");
        cy.route('GET','**attributes/saved_report_campaignDashboard').as('getCampaignResults');
        cy.get('tbody td:nth-child(2)').each((index,$list) => {
              if(index >= 2){
                  expect($list).to.contain('test');
                  cy.wait(['@getCampaignResults']);
              }
       });
       cy.get(':nth-child(1) > :nth-child(2) > app-reportviewer-link.ng-star-inserted > .ng-star-inserted').click();
       cy.get('#campaign-budget-and-schedule-tab').click();
       cy.get('#schedule-add-button').should('be.disabled');
       cy.get('#budget-maxBid-select').should('be.disabled');
         if(cy.get('#schedule-0') !== null){
            cy.get('#budget-0-delete-button').should('be.disabled');
            cy.get('#budget-0-startDate-toggle > .mat-icon-button').should('be.disabled');
            cy.get('#budget-0-endDate-toggle > .mat-icon-button').should('be.disabled');
            cy.get('#budget-0-amount-input').should('be.disabled');
        }
    })
})
