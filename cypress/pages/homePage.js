class homePage {
  elements = {
    utilitiesBtn: () => cy.get("#navbar > :nth-child(1) > :nth-child(2) > a"),
  };

  clickOnUtilities() {
    this.elements.utilitiesBtn().click({ force: true });
  }
}

module.exports = new homePage();
