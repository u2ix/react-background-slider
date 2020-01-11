/// <reference types="Cypress" />

context("BackgroundSlider", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/", {
      onBeforeLoad (win) {
        cy.spy(win.console, 'warn').as('console.warn')
      }
    });
  });

  it("should render background images to the dom", () => {
    cy.get("#ReactBackgroundSlider")
      .get("figure")
      .should($figures => {
        expect($figures).to.have.length(6);
      });
  });

  it("should not log warning to console", () => {
    cy.get('@console.warn').should('not.be.called')
  });
});
