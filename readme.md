# Guide through Cypress
This repo represents a documented journey through the world of automated testing with Cypress. Knowledge is formally
 being attained from the Udemy course 
 [Cypress - Modern Automation Testing from Scratch + Framework](https://www.udemy.com/course/cypress-tutorial/). 
The rest of the content in this repo is info that is not easily attainable through the official Cypress documentation
.  Future contributions should be focused on experiential observations from working with Cypress.

## Tips
### How to preserve a session across multiple tests
Tip coming soon

### How to preserve a session across test suite runs
Tip coming soon

## Unexpected pecularities 

Look at the code below. What is the value of ```user``` in the lambda function?
```javascript
    cy.visit('https://accounts.google.com')
    let username = cy.readFile('cypress/credentials.json').its('username')
    let password = cy.readFile('cypress/credentials.json').its('password')

    username.then((user) => {
        cy.get('#Email').type(user + '{Enter}')
    })

    password.then((pass) => {
        cy.get('#Passwd').type(pass + '{Enter}')
    })
```
The value assigned to ```user``` is the password and not the username.  The desired results can be achieved by
 calling ```then``` immediately after the first call to ```its```.

## Assertions
The test runner considers a single should statement without any chained functions as a single assertion. If single
 should is used to create a custom assertion, then only a single assert will be displayed in the Cypress Test Runner
  although there were really multiple assertions made. Observe the following lines of code and their output in the
   Test Runner.
```javascript
        cy
            .focused()
            .should(($el) => {
                expect($el).to.have.attr('role', 'dialog')
            })
```
 vs.
 ```javascript
        cy
            .focused()
            .should('have.attr', 'role').and('eq', 'dialog')
```
![](cypressAssertionsShould1.png)


#### If keyboard focus is on an element with a child, then is the proposition that the element's child has keyboard focus true? 


## Cookies
Stories about the complicated nature of cookie management are coming soon.

## Miscellaneous
* If there are multiple assertions in a single test and the first assertion fails, then the subsequent assertions will
 not be processed. 

* If tests are expected to finish executing as quickly as possible, then the order in which the tests are executed can
 matter. Most states of the website are preserved by the browser between tests. If test *t+1* requires the website to be in a specific state before it is executed, then it would be more
  efficient if the test *t+1* followed a test *t* that would leave the website in a usable state.  
