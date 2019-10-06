/* eslint-disable func-names,prefer-arrow-callback */
describe('Nuorder', () => {
  it(`Should render correctly for desktop`, () => {
    cy.server();

    // Navigate to page
    cy.visit(`/nuorder`);

    // Result list should not show up
    cy.get('ul').should('have.length', 0);

    // Type react into textbox
    cy.get('input[type=text]').type('react');

    // Result List should show up
    cy.get('ul').should('have.length', 1);
  });
});
