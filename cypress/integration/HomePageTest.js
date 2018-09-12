describe('Home Page Test', function() {
    it('Test if input display correctly', function(){
        cy.visit("https://app-qa.inpwrd.net/campaigns");
        cy.get('#username').type("fangming.lu@inpwrd.com").should('have.value',"fangming.lu@inpwrd.com");
        cy.get('#password').type("Welcome1");
        cy.get('#login-btn').click();
        cy.get('#search-input').type("test input").should('have.value','test input');

    });
    it('Test if search results contain keyword', function() {
      cy.visit("https://app-qa.inpwrd.net/campaigns");
      cy.get('#username').type("fangming.lu@inpwrd.com").should('have.value',"fangming.lu@inpwrd.com");
      cy.get('#password').type("Welcome1");
      cy.get('#login-btn').click();
      cy.url().should('include',"/campaigns");
      cy.get('#search-input').type("test 09");
      cy.get('tbody td:nth-child(2)').each(($li,index,$list) => {
            expect($li).to.contain('test 09');
     });
    })
    it('Test if Campaign Status filter works correctly', function() {
        cy.visit("https://app-qa.inpwrd.net/campaigns");
        cy.get('#username').type("fangming.lu@inpwrd.com").should('have.value',"fangming.lu@inpwrd.com");
        cy.get('#password').type("Welcome1");
        cy.get('#login-btn').click();
        cy.url().should('include',"/campaigns");
        cy.contains('thead td','Campaign Status').invoke('index').then((id) => {
            cy.log('id', id);
            cy.get('.report-viewer--header--dropdown').click();
            cy.get('[value="ACTIVE"]').click();
            cy.get(`tbody td:nth-child(${id})`).each(($li,index,$list) => {
                expect($li).to.contain('ACTIVE');
            });
        });
     });
        
  })