/*
    Section 6: Handling Web Controls UI using Cypress
 */

describe("My First Test Suite", function() {
    // all test cases go in here
    it("My First Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/");

        cy.get("#alertbtn").click()

        // this event is fired when the popup window appears
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.get("[value='Confirm']").click()
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

        cy.get("#opentab").invoke("removeAttr", "target").click()

        cy.url().should("include","rahulshettyacademy.com")

        // navigate to the last page
        cy.go("back")


    })
})
