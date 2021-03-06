describe('Campaign Content Test', function() {
    const random = Math.floor((Math.random() * 10000) + 1);
    it('Check New Singal Story Content As External User', function() {
        cy.loginAsExternal('qa');
        cy.fillExternalForm('qa',random);
        cy.validateNewCampaign(random);
        cy.get('#story-add-url-input').type('yahoo.com');
        cy.get('#story-add-url-input').type('{enter}');
        cy.get('#story-temp-0').should('exist');
        cy.get('#story-temp-0 textarea').should('have.value','News, email and search are just the beginning. Discover more every day. Find your yodel.');
        cy.get('#story-temp-0 input').eq(1).should('have.value','Yahoo');
        cy.get('#story-temp-0 input').eq(2).should('have.value','');
        cy.get('#story-temp-0 input').eq(3).should('have.value','https://yahoo.com/');
        cy.get('#story-temp-0 input').eq(4).should('have.value','www.yahoo.com');
        cy.get('#story-0-save-button').should('exist');
        cy.get('#story-0-delete-button').should('exist');
        //check delete summary
        cy.server();
        cy.route('GET','**/api/**').as('getXHR');
        cy.get('#story-temp-0 textarea').clear();
        cy.wait(['@getXHR']);        
        cy.get('.mat-input-infix > div.ng-star-inserted').should('exist');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('have.text','Summary is required');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('#story-temp-0 textarea').type('test summary');
        cy.get('#story-temp-0 textarea').should('have.value','test summary');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('not.exist');
        cy.get('#story-0-save-button').should('exist');
        //check delete headline
        cy.get('#story-temp-0 input').eq(1).clear();
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('exist');
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('contain','Headline is required');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('#story-temp-0 input').eq(1).type('test headline');
        cy.get('#story-temp-0 input').eq(1).should('have.value','test headline');
        cy.get('.mat-input-hint-wrapper > .ng-star-inserted').should('not.exist');
        cy.get('#story-0-save-button').should('exist');
        //check delete click url
        cy.get('#story-temp-0 input').eq(3).clear();
        cy.get('.mat-input-infix > div.ng-star-inserted').should('exist');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('have.text','Please Use a Valid URL');
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('#story-temp-0 input').eq(3).type('www.google.com');
        cy.get('#story-temp-0 input').eq(3).should('have.value','https://www.google.com');
        cy.get('.mat-input-infix > div.ng-star-inserted').should('not.exist');        
        cy.get('#story-0-save-button').should('exist');
        //check delete display url
        cy.get('#story-temp-0 input').eq(4).clear();
        cy.get('#story-0-save-button').should('not.exist');
        cy.get('#story-temp-0 input').eq(4).type('www.google.com');
        cy.get('#story-temp-0 input').eq(4).should('have.value','www.google.com');
        cy.get('#story-0-save-button').should('exist');
        //add headline variation
        cy.get('.mat-input-container.ng-tns-c4-81 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').type('this is new headline');
        cy.get('.mat-input-container.ng-tns-c4-81 > .mat-input-wrapper > .mat-input-flex > .mat-input-infix input').type('{enter}',{force:true});

        //add image
        //cy.get('#story-temp-0 > app-card > main > story-creative-form > div.story--creative-form--image.ng-star-inserted > app-image-uploader > input[type="file"]').invoke('show').should('be.visible');
        //cy.get('app-image-uploader button').click({animationDistanceThreshold:200});
        //cy.get('#story-temp-0 > app-card > main > story-creative-form > div.story--creative-form--image.ng-star-inserted > app-image-uploader input[name="image"]').trigger('change');


        //cy.writeFile('cypress/fixtures/image008.png', 'story 0 image');
        //cy.upload_file('image008.png', 'input[name=image]');
        /*cy.fixture("image008.png").as("logo")
        cy.get('input[type=file]').then(subject => {
  // From Cypress document: https://docs.cypress.io/api/utilities/blob.html#Examples  
        return Cypress.Blob.base64StringToBlob(this.logo, "image/png").then((blob) => {
            const el = subject[0]
            const testFile = new File([blob], 'image008.png', { type: 'image/png' })
            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(testFile)
            el.files = dataTransfer.files
            })
        })*/
        //cy.wait(3000);
        //cy.get('[disabled]').click({force: true});
       /* const dropEvent = {
            dataTransfer: {
                files: [
                ],
            },
        };
        
        cy.fixture('image008.png').then((picture) => {
            return Cypress.Blob.base64StringToBlob(picture, 'image/png').then((blob) => {
                dropEvent.dataTransfer.files.push(blob);
            });
        });
        
        cy.get('input[name=image]').trigger('drop', dropEvent,{force: true});*/

    })
})