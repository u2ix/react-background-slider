/// <reference types="Cypress" />

context("BackgroundSlider", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/");
  });

  it("should render background images to the dom", () => {
    cy.get("#ReactBackgroundSlider")
      .get("figure")
      .should($figures => {
        expect($figures).to.have.length(6);
      });
  });
});
