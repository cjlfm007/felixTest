describe('Login Page Test', function() {
    it('Test Felix Login With Valid Credentials', function() {
      cy.visit("https://app-qa.inpwrd.net/campaigns");
      cy.get('#username').type("fangming.lu@inpwrd.com").should('have.value',"fangming.lu@inpwrd.com");
      cy.get('#password').type("Welcome1");
      cy.get('#login-btn').click();
      cy.url().should('include',"/campaigns");
      cy.contains('span', "New Campaign");
      cy.get('#campaigns-new-button').should('exist');

    })
  })