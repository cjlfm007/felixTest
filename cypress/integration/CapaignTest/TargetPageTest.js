describe('Campaign Target Test', function() {
    const random = Math.floor((Math.random() * 10000) + 1);
    it('Check Target Page As External User', function() {
        cy.loginAsExternal('dev');
        cy.fillExternalForm(random);
        cy.validateNewCampaign(random);
        cy.addStory();
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
        cy.get('#selected-channel-yahoo').should('exist');
        cy.get('.message-text > .ng-star-inserted').should('exist');
        cy.get('.message-text > .ng-star-inserted').should('contain','Desktop targeting is not supported on Yahoo');
        cy.get('.app-campaign-targeting-story > .AGE > .target-wrapper > .target > mat-select-trigger').should('contain','18 - 24');
        cy.get('.app-campaign-targeting-story > .DEVICES > .target-wrapper > .target > mat-select-trigger').should('contain','All');
        cy.get('.app-campaign-targeting-story > .GENDER > .target-wrapper > .target > mat-select-trigger').should('contain','Male');
        cy.get('.app-campaign-targeting-story > .GEO > .target-wrapper > .target > mat-select-trigger').should('contain','1');
        cy.get('.app-campaign-targeting-story > .INTERESTS > .target-wrapper > .target > mat-select-trigger').should('contain','1');
        cy.get('.app-campaign-targeting-story > .OS > .target-wrapper > .target > mat-select-trigger').should('contain','iOS')
        cy.get('.app-campaign-targeting-story > .LANGUAGES > .target-wrapper > .target > mat-select-trigger').should('contain','English');
        cy.get('#add-channel-button').click();
        cy.get('#select-channel-button-facebook').click();
        cy.get('#selected-channel-facebook').should('exist');
        cy.get('#add-channel-button').click();
        cy.get('#select-channel-button-rtb').click();
        cy.get('#selected-channel-zemanta').should('exist');
        cy.get('.message-text > .ng-star-inserted').should('exist');
        cy.get('.message-text > .ng-star-inserted').should('contain','Age, Gender and OS targeting is not supported on RTB networks');
        cy.get('#selected-channel-yahoo > .remove > svg').click();
        cy.get('#selected-channel-facebook > .remove > svg').click();
        cy.get('#selected-channel-zemanta > .remove > svg').click();
        cy.get('#selected-channel-yahoo').should('not.exist');
        cy.get('#selected-channel-facebook').should('not.exist');
        cy.get('#selected-channel-zemanta').should('not.exist');
        cy.get('.message-text > .ng-star-inserted').should('not.exist');

        
    })
    it('Check Target Page As Analyst User', function() {
        cy.loginAsAdmin('dev');
        cy.fillExternalForm(random);
        cy.validateNewCampaign(random);
        cy.addStory();
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
        cy.get('#selected-channel-yahoo').should('exist');
        cy.get('.message-text > .ng-star-inserted').should('exist');
        cy.get('.message-text > .ng-star-inserted').should('contain','Desktop targeting is not supported on Yahoo');
        cy.get('.app-campaign-targeting-story > .AGE > .target-wrapper > .target > mat-select-trigger').should('contain','18 - 24');
        cy.get('.app-campaign-targeting-story > .DEVICES > .target-wrapper > .target > mat-select-trigger').should('contain','All');
        cy.get('.app-campaign-targeting-story > .GENDER > .target-wrapper > .target > mat-select-trigger').should('contain','Male');
        cy.get('.app-campaign-targeting-story > .GEO > .target-wrapper > .target > mat-select-trigger').should('contain','1');
        cy.get('.app-campaign-targeting-story > .INTERESTS > .target-wrapper > .target > mat-select-trigger').should('contain','1');
        cy.get('.app-campaign-targeting-story > .OS > .target-wrapper > .target > mat-select-trigger').should('contain','iOS')
        cy.get('.app-campaign-targeting-story > .LANGUAGES > .target-wrapper > .target > mat-select-trigger').should('contain','English');
        cy.get('#add-channel-button').click();
        cy.get('#select-channel-button-facebook').click();
        cy.get('#selected-channel-facebook').should('exist');
        cy.get('#add-channel-button').click();
        cy.get('#select-channel-button-rtb').click();
        cy.get('#selected-channel-zemanta').should('exist');
        cy.get('.message-text > .ng-star-inserted').should('exist');
        cy.get('.message-text > .ng-star-inserted').should('contain','Age, Gender and OS targeting is not supported on RTB networks');
        cy.get('#selected-channel-yahoo > .remove > svg').click();
        cy.get('#selected-channel-facebook > .remove > svg').click();
        cy.get('#selected-channel-zemanta > .remove > svg').click();
        cy.get('#selected-channel-yahoo').should('not.exist');
        cy.get('#selected-channel-facebook').should('not.exist');
        cy.get('#selected-channel-zemanta').should('not.exist');
        cy.get('.message-text > .ng-star-inserted').should('not.exist');
        
    })
    it.only('Test if search results contain keyword', function() {
      cy.visit("https://app-qa.inpwrd.net/campaigns");
      cy.get('#username').type("fangming.lu@inpwrd.com").should('have.value',"fangming.lu@inpwrd.com");
      cy.get('#password').type("Welcome1");
      cy.get('#login-btn').click();
      cy.url().should('include',"/campaigns");
      cy.get('#search-input').type("test 09");
      cy.get('tbody td:nth-child(2)').each((index,$list) => {
            if(index >= 2){
                expect($list).to.contain('test 09');
            }
     });
    })
    /*
    it('test select', function(){
        cy
          .visit('http://jedwatson.github.io/react-select/')
      
          .get('.Select-input>input').eq('0')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('1')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('2')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('3')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('4')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('5')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('6')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('7')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('8')
            .type('{enter}', {force: true})
      
          .get('.Select-input>input').eq('9')
            .type('{enter}', {force: true})
      })*/
})