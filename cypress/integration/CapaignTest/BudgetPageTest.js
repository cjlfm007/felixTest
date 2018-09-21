describe('Campaign Budget Page Test', function() {
    const random = Math.floor((Math.random() * 10000) + 1);
    it('Check Budget Page As External User With Single Story', function() {
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
    it('Check Budget Page As Admin User With Single Story', function() {
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
    it.only('Check Budget Page As Analyst User With Single Story', function() {
        cy.loginAsAnalyst('dev');
        cy.checkAnalystForm();
    })
})
