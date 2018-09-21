describe('Home Page Test', function() {
    it('Test if input display correctly', function(){
        cy.loginAsAdmin('dev');
        cy.get('#search-input').type("test input").should('have.value','test input');

    });
    it.only('Test if search results contain keyword', function() {
      cy.loginAsAdmin('dev');
      cy.url().should('include',"/campaigns");
      cy.get('#search-input').type("test 09");
      cy.get('tbody td:nth-child(2)').each((index,$list) => {
            if(index >= 2){
                expect($list).to.contain('test 09');
            }
     });
    })
    it('Test if Campaign Status filter works correctly', function() {
        cy.loginAsAdmin('dev');
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