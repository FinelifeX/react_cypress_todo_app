// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Sample spec', () => {
  it('should open correctly', () => {
    cy.visit('http://localhost:3000');
    cy.get('*[data-testid="app-title"]')
      .should('exist')
      .should('contain.text', 'Cypress');
  });
});
