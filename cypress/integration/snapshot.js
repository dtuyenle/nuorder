const sizes = [
  'iphone-6',
  'ipad-2',
  'macbook-13',
];

/* eslint-disable func-names,prefer-arrow-callback */
describe('Nuorder Snapshot', () => {
  sizes.forEach((size) => {
    context(`${size} resolution`, () => {

      beforeEach(() => {
        // Set resolution
        cy.setResolution(size);

        // Start
        cy.server();

        // Navigate to page
        cy.visit(`/nuorder`);
      });

      it(`Should match previous screenshot When '${size}' resolution`, () => {

        // Check screenshot
        cy.matchImageSnapshot(`${size}_nuorder`);

      });
    });
  });

});
