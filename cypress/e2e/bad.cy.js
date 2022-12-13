describe('BAD TEST', () => {



  it('Visit Google and Click unexisting button', () => {
    cy.visit('https://google.com');
    cy.get('.button1').click();
  });





});
