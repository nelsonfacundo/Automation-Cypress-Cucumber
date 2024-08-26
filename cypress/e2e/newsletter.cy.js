describe("Newsletter functionality" ,() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.wait(500)
      })


      it("The user subscribes with a valid email " , () =>{
        //Get element input email  and type valid meial  
        cy.getByData("email-input").type("test@gmail.com")
        //click in buttom suscribe
        cy.getByData("submit-button").click()
        //check messsage succeses 
        cy.getByData("success-message").should("exist").contains("test@gmail.com")
      })


      it("The user subscribes with a invalid email " , () =>{
        //Get element input email  and type valid meial  
        cy.getByData("email-input").type("test")
        //click in buttom suscribe
        cy.getByData("submit-button").click()
        //check error 
        cy.getByData("success-message").should("not.exist")
      })












})