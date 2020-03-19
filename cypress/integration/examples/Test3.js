/*
    Section 6: Handling Web Controls UI using Cypress
 */

describe("My First Test Suite", function() {
    // all test cases go in here
    it("My First Test Case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1','option2'])

        // static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // dynamic dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, $index, $list) => {
            console.log($el)
            console.log($index)
            console.log($el.text())

            if($el.text()==="India") {
                console.log("Clicking India")
                $el.click()
            }
        })

        // autocomplete
        cy.get("#autocomplete").should('have.value', 'India')
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")

        // radio buttons
        cy.get('[value="radio2"]').check().should("be.checked")
    })
})
