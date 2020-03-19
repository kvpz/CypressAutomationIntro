/*
    Section 7: Advance Automation to handling Alerts.popups Child Windows using Cypress JQuery
 */

describe("My First Test Suite", function() {
    // all test cases go in here
    it("My First Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/");

        // show menu that appears on hover
        // jquery "show" should be applied on immediate parent of hidden element
        cy.get(".mouse-hover-content").invoke("show")
        cy.contains("Top").click({force:true}) //{force:true} is similar to jquery display function
        cy.url().should("include", "top")

    })
})
