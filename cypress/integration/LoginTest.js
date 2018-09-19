describe('Login Page Test', function() {
  it('Test Felix Login With Valid Credentials', function() {
      cy.loginAsAdmin('dev');
      cy.loginAsExternal('dev');
      cy.loginAsAnalyst('dev');
    })
  })