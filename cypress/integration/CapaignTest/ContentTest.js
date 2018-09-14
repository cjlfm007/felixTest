describe('Campaign Content Test', function() {
    const random = Math.floor((Math.random() * 10000) + 1);
    it('Check New Story Content As External User', function() {
        cy.loginAsExternal();
        cy.fillExternalForm(random);
        cy.validateNewCampaign(random);
        cy.get('#story-add-url-input').type('yahoo.com');
        cy.get('#story-add-url-input').type('{enter}');
        cy.get('#story-temp-0').should('exist');
        cy.get('.story--summary > .mat-input-wrapper > .mat-input-flex > .mat-input-infix textarea').should('have.value','News, email and search are just the beginning. Discover more every day. Find your yodel.');
        cy.get('.mat-input-container.ng-tns-c4-80 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','Yahoo');
        cy.get('.mat-input-container.ng-tns-c4-81 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','');
        cy.get('.mat-input-container.ng-tns-c4-73 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','www.yahoo.com');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','https://yahoo.com/');
        cy.get('.mat-input-container.ng-tns-c4-74 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix').should('exist');
        cy.get('.mat-input-container.ng-tns-c4-76 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix').should('exist');
        cy.get('.mat-input-container.ng-tns-c4-78 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix').should('exist');
        cy.get('#story-0-save-button').should('exist');
        cy.get('#story-0-delete-button').should('exist');
        //check delete summary
        cy.get('.story--summary > .mat-input-wrapper > .mat-input-flex > .mat-input-infix textarea').clear();
        cy.get('.mat-input-infix > div.ng-star-inserted').should('exist');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('have.text','Summary is required');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('.story--summary > .mat-input-wrapper > .mat-input-flex > .mat-input-infix textarea').type('test summary');
        cy.get('.story--summary > .mat-input-wrapper > .mat-input-flex > .mat-input-infix textarea').should('have.value','test summary');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('not.exist');
        cy.get('#story-0-save-button').should('exist');
        //check delete headline
        cy.get('.mat-input-container.ng-tns-c4-80 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').clear();
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('exist');
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('contain','Headline is required');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('.mat-input-container.ng-tns-c4-80 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').type('test headline');
        cy.get('.mat-input-container.ng-tns-c4-80 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','test headline');
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('not.exist');
        cy.get('#story-0-save-button').should('exist');
        //check delete click url
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').clear();
        cy.get('.mat-input-infix > div.ng-star-inserted').should('exist');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('have.text','Please Use a Valid URL');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').type('www.google.com');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','https://www.google.com');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('not.exist');        
        cy.get('#story-0-save-button').should('exist');
        //check delete display url
        cy.get('.mat-input-container.ng-tns-c4-73 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').clear();
        
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').type('www.google.com');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','www.google.com');
        cy.get('#story-0-save-button').should('exist');

    })
    it('Check New Story Content As Admin User', function() {
        cy.loginAsAdmin();
        cy.fillAdminForm(random);
        cy.validateNewCampaign(random);
        cy.get('#story-add-url-input').type('yahoo.com');
        cy.get('#story-add-url-input').type('{enter}');
        cy.get('#story-temp-0').should('exist');
        cy.get('.story--summary > .mat-input-wrapper > .mat-input-flex > .mat-input-infix textarea').should('have.value','News, email and search are just the beginning. Discover more every day. Find your yodel.');
        cy.get('.mat-input-container.ng-tns-c4-80 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','Yahoo');
        cy.get('.mat-input-container.ng-tns-c4-81 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','');
        cy.get('.mat-input-container.ng-tns-c4-73 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','www.yahoo.com');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','https://yahoo.com/');
        cy.get('.mat-input-container.ng-tns-c4-74 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix').should('exist');
        cy.get('.mat-input-container.ng-tns-c4-76 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix').should('exist');
        cy.get('.mat-input-container.ng-tns-c4-78 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix').should('exist');
        cy.get('#story-0-save-button').should('exist');
        cy.get('#story-0-delete-button').should('exist');
        //check delete summary
        cy.get('.story--summary > .mat-input-wrapper > .mat-input-flex > .mat-input-infix textarea').clear();
        cy.get('.mat-input-infix > div.ng-star-inserted').should('exist');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('have.text','Summary is required');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('.story--summary > .mat-input-wrapper > .mat-input-flex > .mat-input-infix textarea').type('test summary');
        cy.get('.story--summary > .mat-input-wrapper > .mat-input-flex > .mat-input-infix textarea').should('have.value','test summary');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('not.exist');
        cy.get('#story-0-save-button').should('exist');
        //check delete headline
        cy.get('.mat-input-container.ng-tns-c4-80 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').clear();
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('exist');
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('contain','Headline is required');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('.mat-input-container.ng-tns-c4-80 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').type('test headline');
        cy.get('.mat-input-container.ng-tns-c4-80 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','test headline');
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('not.exist');
        cy.get('#story-0-save-button').should('exist');
        //check delete click url
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').clear();
        cy.get('.mat-input-infix > div.ng-star-inserted').should('exist');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('have.text','Please Use a Valid URL');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').type('www.google.com');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','https://www.google.com');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('not.exist');        
        cy.get('#story-0-save-button').should('exist');
        //check delete display url
        cy.get('.mat-input-container.ng-tns-c4-73 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').clear();
        
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').type('www.google.com');
        cy.get('.mat-input-container.ng-tns-c4-82 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').should('have.value','www.google.com');
        cy.get('#story-0-save-button').should('exist');

    })

})