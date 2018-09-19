describe('Campaign Content Test', function() {
    const random = Math.floor((Math.random() * 10000) + 1);
    it('Check Target Page With Yahoo Channel As External User', function() {
        cy.loginAsExternal();
        cy.fillExternalForm(random);
        cy.validateNewCampaign(random);
        cy.addStory();
        cy.fillTarget();
        
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