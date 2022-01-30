/// <reference types="cypress" />

describe('Todo add form spec', () => {
  before(() => {
    cy.visit('/');
  })

  it('should show add todo form when opened', () => {
    cy.get('input[data-testid="input-name"]').should('exist');
    cy.get('textarea[data-testid="input-description"]').should('exist');
    cy.get('button[data-testid="button-submit"]').should('exist');
  });
});