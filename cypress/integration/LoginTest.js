describe('Login Page Test', function() {
  it('Test Felix Login With Valid Credentials', function() {
      cy.loginAsAdmin('qa');
      cy.loginAsExternal('qa');
      cy.loginAsAnalyst('qa');
    })
  })