import homePage from "../pages/homePage";

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.wait(500);
    homePage.clickOnUtilities();
  });
});
