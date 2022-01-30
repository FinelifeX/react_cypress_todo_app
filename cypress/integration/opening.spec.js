/// <reference types="cypress" />

describe('App opening spec', () => {
  it('should open correctly', () => {
    cy.visit('/');
    cy.get('*[data-testid="app-title"]')
      .should('exist')
      .should('contain.text', 'Cypress');
  });
});
