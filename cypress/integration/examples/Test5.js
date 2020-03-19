/*
    Section 7: Advance Automation to handling Alerts.popups Child Windows using Cypress JQuery
 */

describe("My First Test Suite", function() {
    // all test cases go in here
    it("My First Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/");

        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal("25")
                })
                // get the next sibling

            }
        })
    })
})
