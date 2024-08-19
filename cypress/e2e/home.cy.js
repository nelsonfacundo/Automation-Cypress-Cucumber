import homePage from "../pages/homePage";

describe("template spec", () => {
  //Correr siempre antes de de la ejeucion de un caso
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.wait(500)
  })

  //corroborar mediante un  elemento por una etiqueta  y un assert
  it("check element by tag", () => {
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  });

  //corroborar mediante un commando usando un  atributo (puede ser id , class , data-cy ,etc)  y un assert
  it("check element by data-test", () => {
     cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
  });

  //Corroborar un elemento en una lista por posicion 
  it("check elements  in list ", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  });

});
